import { Perhaps } from '../../types'
import { isTruthy } from '../isTruthy'

/**
 * Returns a type predicate to filter falsy values of an array.
 *
 * Usage:
 * arr.filter(isNotFalsy)
 */
export function isNotFalsy<T>(o: Perhaps<T>): o is T {
  return !isTruthy(o)
}

/**
 * Remove falsy values of an array.
 */
export function filterFalsies<T>(arr: Array<T>): T[] {
  return arr.filter(isTruthy)
}
