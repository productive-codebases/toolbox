import { Perhaps } from '@/types'

/**
 * When used in a default switch case, ensure that all cases have been implemented.
 * Credit: https://stackoverflow.com/a/39419171/2743091
 */
export function assertUnreachableCase(
  x: Perhaps<never>,
  logMessage?: string
): never {
  const error = logMessage || "Didn't expect to get here"
  throw new Error(`${error} (${x})`)
}
