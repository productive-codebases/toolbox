import { Perhaps } from '../../types'
import { isDefined } from '../isDefined'

/**
 * Ensure that a Set is returned if s is null or undefined.
 */
export function ensureSet<T>(s: Perhaps<T | Set<T>>): Set<T> {
  if (!isDefined(s)) {
    return new Set<T>()
  }

  try {
    if (s !== null && typeof s === 'object' && 'has' in s) {
      return s
    }

    throw new Error()
  } catch (err) {
    return new Set<T>().add(s as T)
  }
}
