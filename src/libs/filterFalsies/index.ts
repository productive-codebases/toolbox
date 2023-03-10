import { Perhaps } from '../../types'
import { isTruthy } from '../isTruthy'

/**
 * Returns a type predicate to filter falsy values of an array.
 *
 * Usage:
 * arr.filter(isNotFalsy)
 */
export function isNotFalsy<T>(o: Perhaps<T | boolean | string>): o is T {
  return !isTruthy(o)
}

/**
 * Remove from an array falsy values.
 */
export function filterFalsies<T>(
  arr: Array<T | null | undefined | boolean>
): T[] {
  return arr.filter(isNotFalsy)
}
