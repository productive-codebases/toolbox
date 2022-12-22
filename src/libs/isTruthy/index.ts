import { Perhaps } from '../../types'

/**
 * Returns a type predicate to keep the truthy values of an array.
 *
 * Usage:
 * arr.filter(isTruthy)
 */
export function isTruthy<T>(o: Perhaps<T | boolean | number | string>): o is T {
  return o !== undefined && o !== null && o !== false && o !== '' && o !== 0
}
