/**
 * Libs.
 */

export { addSetValueToMap, removeSetValueToMap } from './libs/setValuesToMap'
export { assertUnreachableCase } from './libs/assertUnreachableCase'
export { createEntities, createEntity } from './libs/entities'
export { deepMerge } from './libs/deepMerge'
export { ensureArray } from './libs/ensureArray'
export { ensureSet } from './libs/ensureSet'
export { indexEntitiesToMap, appendEntitiesToMap } from './libs/entitiesToMap'
export { isDefined } from './libs/isDefined'
export { isNotFalsy, filterFalsies } from './libs/filterFalsies'
export { isTruthy } from './libs/isTruthy'
export { MetaData } from './libs/MetaData'
export { setupLogger } from './libs/logger'
export { StrictObject } from './libs/StrictObject'

export type { Logger, LoggerSetup } from './libs/logger'

/**
 * Stubs
 */

export { default as LocalStorageStub } from './stubs/LocalStorageStub'

/**
 * Types
 */

export * from './types'
