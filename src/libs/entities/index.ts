import { Maybe } from '@productive-codebases/toolbox'
import { ensureArray } from '../ensureArray'

/**
 * Instanciate entities from litteral objects having the same object shape.
 */
export function createEntities<TEntity, TRawObject extends Partial<TEntity>>(
  EntityClass: new (data: TRawObject) => TEntity,
  rawObjects: Maybe<Array<TRawObject>>
): TEntity[] {
  return ensureArray(rawObjects).map(rawObject => {
    return new EntityClass(rawObject)
  })
}

/**
 * Instanciate entity from a litteral object having the same object shape.
 */
export function createEntity<TEntity, TRawObject extends Partial<TEntity>>(
  EntityClass: new (data: TRawObject) => TEntity,
  rawObject: TRawObject
): TEntity {
  return new EntityClass(rawObject)
}
