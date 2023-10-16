/**
 * Libs.
 */

/**
 * Conditions
 */

export { assertUnreachableCase } from './libs/assertUnreachableCase'

/**
 * Entities
 */

export { createEntities, createEntity } from './libs/entities'
export { StrictObject } from './libs/StrictObject'

/**
 * Objects
 */

export { deepMerge } from './libs/deepMerge'

/**
 * Arrays
 */

export { ensureArray } from './libs/ensureArray'

/**
 * Set
 */

export { ensureSet } from './libs/ensureSet'

/**
 * Maps
 */

export { addSetValueToMap, removeSetValueToMap } from './libs/setValuesToMap'
export { indexEntitiesToMap, appendEntitiesToMap } from './libs/entitiesToMap'

/**
 * Assertions
 */

export { isDefined } from './libs/isDefined'
export { isNotFalsy, filterFalsies } from './libs/filterFalsies'
export { isTruthy } from './libs/isTruthy'

/**
 * Logger
 */

export { setupLogger } from './libs/logger'
export type { Logger, LoggerSetup } from './libs/logger'

/**
 * Stubs
 */

export { default as LocalStorageStub } from './stubs/LocalStorageStub'

/**
 * Toolings
 */

export { MetaData } from './libs/MetaData'

/**
 * Types
 */

export * from './types'
