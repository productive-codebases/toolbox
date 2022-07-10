import type { Perhaps } from '@/types'

/**
 * Returns a type predicate to remove undefined or nullable values of an array.
 *
 * Usage:
 * arr.filter(isDefined)
 */
export function isDefined<T>(o: Perhaps<T>): o is T {
  return o !== undefined && o !== null
}
