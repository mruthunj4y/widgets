import { t } from '@lingui/macro'
import { signTypedData } from '@surge/conedison/provider/signing'
import { AllowanceTransfer, MaxAllowanceTransferAmount, PERMIT2_ADDRESS, PermitSingle } from '@surge/permit2-sdk'
import { CurrencyAmount, Token } from '@surge/sdk-core'
import { useWeb3React } from '@web3-react/core'
import PERMIT2_ABI from 'abis/permit2.json'
import { Permit2 } from 'abis/types'
import { UserRejectedRequestError, WidgetError, WidgetPromise } from 'errors'
import { useSingleCallResult } from 'hooks/multicall'
import { useContract } from 'hooks/useContract'
import ms from 'ms.macro'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { isUserRejection } from 'utils/jsonRpcError'

import { usePerfEventHandler } from './usePerfEventHandler'

const PERMIT_EXPIRATION = ms`30d`
const PERMIT_SIG_EXPIRATION = ms`30m`

function toDeadline(expiration: number): number {
  return Math.floor((Date.now() + expiration) / 1000)
}

export function usePermitAllowance(token?: Token, owner?: string, spender?: string) {
  const contract = useContract<Permit2>(PERMIT2_ADDRESS, PERMIT2_ABI)
  const inputs = useMemo(() => [owner, token?.address, spender], [owner, spender, token?.address])

  // If there is no allowance yet, re-check next observed block.
  // This guarantees that the permitAllowance is synced upon submission and updated upon being synced.
  const [blocksPerFetch, setBlocksPerFetch] = useState<1>()
  const result = useSingleCallResult(contract, 'allowance', inputs, {
    blocksPerFetch,
  }).result as Awaited<ReturnType<Permit2['allowance']>> | undefined

  const rawAmount = result?.amount.toString() // convert to a string before using in a hook, to avoid spurious rerenders
  const allowance = useMemo(
    () => (token && rawAmount ? CurrencyAmount.fromRawAmount(token, rawAmount) : undefined),
    [token, rawAmount]
  )
  useEffect(() => setBlocksPerFetch(allowance?.equalTo(0) ? 1 : undefined), [allowance])

  return useMemo(
    () => ({ permitAllowance: allowance, expiration: result?.expiration, nonce: result?.nonce }),
    [allowance, result?.expiration, result?.nonce]
  )
}

interface Permit extends PermitSingle {
  sigDeadline: number
}

export interface PermitSignature extends Permit {
  signature: string
}

export function useUpdatePermitAllowance(
  token: Token | undefined,
  spender: string | undefined,
  nonce: number | undefined,
  onPermitSignature: (signature: PermitSignature) => void
) {
  const { account, chainId, provider } = useWeb3React()

  const updatePermitAllowance = useCallback(
    () =>
      WidgetPromise.from(
        async () => {
          if (!chainId) throw new Error('missing chainId')
          if (!provider) throw new Error('missing provider')
          if (!token) throw new Error('missing token')
          if (!spender) throw new Error('missing spender')
          if (nonce === undefined) throw new Error('missing nonce')

          const permit: Permit = {
            details: {
              token: token.address,
              amount: MaxAllowanceTransferAmount,
              expiration: toDeadline(PERMIT_EXPIRATION),
              nonce,
            },
            spender,
            sigDeadline: toDeadline(PERMIT_SIG_EXPIRATION),
          }

          const { domain, types, values } = AllowanceTransfer.getPermitData(permit, PERMIT2_ADDRESS, chainId)
          // Use conedison's signTypedData for better x-wallet compatibility.
          const signature = await signTypedData(provider.getSigner(account), domain, types, values)
          onPermitSignature?.({ ...permit, signature })
        },
        null,
        (error) => {
          if (isUserRejection(error)) throw new UserRejectedRequestError()

          const symbol = token?.symbol ?? 'Token'
          throw new WidgetError({
            message: t`${symbol} permit allowance failed: ${(error as any)?.message ?? error}`,
            error,
          })
        }
      ),
    [account, chainId, nonce, onPermitSignature, provider, spender, token]
  )

  const args = useMemo(() => (token && spender ? { token, spender } : undefined), [spender, token])
  return usePerfEventHandler('onPermit2Allowance', args, updatePermitAllowance)
}
