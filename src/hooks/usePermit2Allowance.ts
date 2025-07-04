import { PERMIT2_ADDRESS } from '@surge/permit2-sdk'
import { CurrencyAmount, Token } from '@surge/sdk-core'
import { useWeb3React } from '@web3-react/core'
import { STANDARD_L1_BLOCK_TIME } from 'constants/chainInfo'
import { useAddTransactionInfo, usePendingApproval } from 'hooks/transactions'
import useInterval from 'hooks/useInterval'
import { PermitSignature, usePermitAllowance, useUpdatePermitAllowance } from 'hooks/usePermitAllowance'
import { useTokenAllowance, useUpdateTokenAllowance } from 'hooks/useTokenAllowance'
import { useCallback, useEffect, useMemo, useState } from 'react'

enum ApprovalState {
  PENDING,
  SYNCING,
  SYNCED,
}

export enum AllowanceState {
  LOADING,
  REQUIRED,
  ALLOWED,
}

export interface AllowanceRequired {
  state: AllowanceState.REQUIRED
  token: Token
  shouldRequestApproval: boolean
  isApprovalLoading: boolean
  approveAndPermit: () => Promise<void>
}

export type Allowance =
  | { state: AllowanceState.LOADING }
  | {
      state: AllowanceState.ALLOWED
      permitSignature?: PermitSignature
    }
  | AllowanceRequired

export default function usePermit2Allowance(amount?: CurrencyAmount<Token>, spender?: string): Allowance {
  const { account } = useWeb3React()
  const token = amount?.currency

  const { tokenAllowance, isSyncing: isApprovalSyncing } = useTokenAllowance(token, account, PERMIT2_ADDRESS)
  const updateTokenAllowance = useUpdateTokenAllowance(amount, PERMIT2_ADDRESS)
  const isApproved = useMemo(() => {
    if (!amount || !tokenAllowance) return false
    return tokenAllowance.greaterThan(amount) || tokenAllowance.equalTo(amount)
  }, [amount, tokenAllowance])

  // Marks approval as loading from the time it is submitted (pending), until it has confirmed and another block synced.
  // This avoids re-prompting the user for an already-submitted but not-yet-observed approval, by marking it loading
  // until it has been re-observed. It wll sync immediately, because confirmation fast-forwards the block number.
  const [approvalState, setApprovalState] = useState(ApprovalState.SYNCED)
  const isApprovalPending = Boolean(usePendingApproval(token, PERMIT2_ADDRESS))
  const isApprovalLoading = approvalState !== ApprovalState.SYNCED || isApprovalPending
  useEffect(() => {
    if (isApprovalPending) {
      setApprovalState(ApprovalState.PENDING)
    } else {
      setApprovalState((state) => {
        if (state === ApprovalState.PENDING && isApprovalSyncing) {
          return ApprovalState.SYNCING
        } else if (state === ApprovalState.SYNCING && !isApprovalSyncing) {
          return ApprovalState.SYNCED
        }
        return state
      })
    }
  }, [isApprovalPending, isApprovalSyncing])

  // Signature and PermitAllowance will expire, so they should be rechecked at an interval.
  const [now, setNow] = useState(Date.now())
  // Calculate now such that the signature will still be valid for the submitting block.
  useInterval(() => setNow((Date.now() + STANDARD_L1_BLOCK_TIME) / 1000), STANDARD_L1_BLOCK_TIME, true)

  const [signature, setSignature] = useState<PermitSignature>()
  const isSigned = useMemo(() => {
    if (!amount || !signature) return false
    return signature.details.token === token?.address && signature.spender === spender && signature.sigDeadline >= now
  }, [amount, now, signature, spender, token?.address])

  const { permitAllowance, expiration: permitExpiration, nonce } = usePermitAllowance(token, account, spender)
  const updatePermitAllowance = useUpdatePermitAllowance(token, spender, nonce, setSignature)
  const isPermitted = useMemo(() => {
    if (!amount || !permitAllowance || !permitExpiration) return false
    return (permitAllowance.greaterThan(amount) || permitAllowance.equalTo(amount)) && permitExpiration >= now
  }, [amount, now, permitAllowance, permitExpiration])

  const shouldRequestApproval = !(isApproved || isApprovalLoading)
  const shouldRequestSignature = !(isPermitted || isSigned)
  const addTransactionInfo = useAddTransactionInfo()
  const approveAndPermit = useCallback(async () => {
    if (shouldRequestApproval) {
      const info = await updateTokenAllowance()
      addTransactionInfo(info)
    }
    if (shouldRequestSignature) {
      await updatePermitAllowance()
    }
  }, [addTransactionInfo, shouldRequestApproval, shouldRequestSignature, updatePermitAllowance, updateTokenAllowance])

  return useMemo(() => {
    if (token) {
      if (!tokenAllowance || !permitAllowance) {
        return { state: AllowanceState.LOADING }
      } else if (!(isPermitted || isSigned)) {
        return {
          token,
          state: AllowanceState.REQUIRED,
          shouldRequestApproval,
          isApprovalLoading: false,
          approveAndPermit,
        }
      } else if (!isApproved) {
        return { token, state: AllowanceState.REQUIRED, shouldRequestApproval, isApprovalLoading, approveAndPermit }
      }
    }
    return { state: AllowanceState.ALLOWED, permitSignature: !isPermitted && isSigned ? signature : undefined }
  }, [
    approveAndPermit,
    isApprovalLoading,
    isApproved,
    isPermitted,
    isSigned,
    permitAllowance,
    shouldRequestApproval,
    signature,
    token,
    tokenAllowance,
  ])
}
