/**
 * Add a value in a Set value in a Map.
 * Create the entry if it doesn't exist yet and
 * avoid duplication in the Set.
 */
export function addSetValueToMap<K, V>(
  map: Map<K, Set<V>>,
  key: K,
  value: V
): void {
  if (!map.has(key)) {
    map.set(key, new Set<V>())
  }

  const currentSet = map.get(key)

  if (currentSet === undefined) {
    return
  }

  if (currentSet.has(value)) {
    return
  }

  currentSet.add(value)
}

/**
 * Delete a value from a Set value in a Map.
 */
export function removeSetValueToMap<K, V>(
  map: Map<K, Set<V>>,
  key: K,
  value: V
): void {
  if (!map.has(key)) {
    return
  }

  const currentSet = map.get(key)

  if (currentSet === undefined) {
    return
  }

  if (!currentSet.has(value)) {
    return
  }

  currentSet.delete(value)
}
