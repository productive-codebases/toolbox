import { addSetValueToMap } from '../setValuesToMap'

/**
 * Index entities to a map with the id as key.
 */
export function indexEntitiesToMap<TEntity, TKey>(
  entities: TEntity[],
  key: keyof TEntity
): Map<TKey, TEntity> {
  return entities.reduce((acc, entity) => {
    const id = entity[key] as unknown as TKey

    if (!id) {
      return acc
    }

    acc.set(id, entity)
    return acc
  }, new Map<TKey, TEntity>())
}

/**
 * Append entities to a map with the id as key.
 */
export function appendEntitiesToMap<TEntity, TKey>(
  entities: TEntity[],
  key: keyof TEntity
): Map<TKey, Set<TEntity>> {
  const map: Map<TKey, Set<TEntity>> = new Map()

  entities.forEach(entity => {
    const id = entity[key] as unknown as TKey

    if (!id) {
      return
    }

    addSetValueToMap(map, id, entity)
  })

  return map
}
