/**
 * Functions.
 */

export { isDefined } from './functions/isDefined'
export { isTruthy } from './functions/isTruthy'
export { ensureArray } from './functions/ensureArray'
export { ensureSet } from './functions/ensureSet'
export { deepMerge } from './functions/deepMerge'
export {
  indexEntitiesToMap,
  appendEntitiesToMap
} from './functions/entitiesToMap'
export {
  addSetValueToMap,
  removeSetValueToMap
} from './functions/setValuesToMap'

/**
 * Types
 */

export type {
  Maybe,
  MaybeUndef,
  Perhaps,
  PropertiesNullable,
  PropertiesNonNullable,
  PickPropertiesNonNullable,
  PickByValue,
  EventLike
} from './types'
