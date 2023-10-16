import { Maybe } from '@productive-codebases/toolbox'
import { ensureArray } from '../ensureArray'

/**
 * Instanciate entities from litteral objects having the same object shape.
 */
export function createEntities<TEntity, TObject extends Partial<TEntity>>(
  EntityClass: new (data: TObject) => TEntity,
  objs: Maybe<Array<TObject>>
): TEntity[] {
  return ensureArray(objs).map(rawObject => {
    return new EntityClass(rawObject)
  })
}

/**
 * Instanciate entity from a litteral object having the same object shape.
 */
export function createEntity<TEntity, TObject extends Partial<TEntity>>(
  EntityClass: new (data: TObject) => TEntity,
  obj: TObject
): TEntity {
  return new EntityClass(obj)
}
