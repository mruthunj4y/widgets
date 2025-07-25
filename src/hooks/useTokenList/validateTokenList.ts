import type { TokenInfo, TokenList } from '@surge/token-lists'
import type { ValidateFunction } from 'ajv'

enum ValidationSchema {
  LIST = 'list',
  TOKENS = 'tokens',
}

function getValidationErrors(validate: ValidateFunction | undefined): string {
  return (
    validate?.errors?.map((error) => [error.instancePath, error.message].filter(Boolean).join(' ')).join('; ') ??
    'unknown error'
  )
}

async function validate(schema: ValidationSchema, data: unknown): Promise<unknown> {
  let validatorImport
  switch (schema) {
    case ValidationSchema.LIST:
      validatorImport = import('__generated__/validateTokenList')
      break
    case ValidationSchema.TOKENS:
      validatorImport = import('__generated__/validateTokens')
      break
    default:
      throw new Error('No validation function specified for schema')
      break
  }

  const [, validatorModule] = await Promise.all([import('ajv'), validatorImport])
  const validator = (await validatorModule.default) as ValidateFunction
  if (validator?.(data)) {
    return data
  }
  throw new Error(getValidationErrors(validator))
}

/**
 * Validates an array of tokens.
 * @param json the TokenInfo[] to validate
 */
export async function validateTokens(json: TokenInfo[]): Promise<TokenInfo[]> {
  try {
    await validate(ValidationSchema.TOKENS, { tokens: json })
    return json
  } catch (err) {
    throw new Error(`Tokens failed validation: ${err.message}`)
  }
}

/**
 * Validates a token list.
 * @param json the TokenList to validate
 */
export async function validateTokenList(json: TokenList): Promise<TokenList> {
  try {
    await validate(ValidationSchema.LIST, json)
    return json
  } catch (err) {
    throw new Error(`Token list failed validation: ${err.message}`)
  }
}
