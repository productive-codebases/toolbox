import { addSetValueToMap } from '..'
import { describe, expect, it } from 'vitest'

describe('addSetValueToMap', () => {
  it('should add a key/value in the map', () => {
    const map = new Map<string, Set<number>>()

    addSetValueToMap(map, 'key1', 42)
    addSetValueToMap(map, 'key2', 42)

    expect(map).toEqual(
      new Map([
        ['key1', new Set([42])],
        ['key2', new Set([42])]
      ])
    )
  })

  it('should add a value to an existing set', () => {
    const map = new Map<string, Set<number>>()

    addSetValueToMap(map, 'key1', 42)
    addSetValueToMap(map, 'key1', 64)

    expect(map).toEqual(new Map([['key1', new Set([42, 64])]]))
  })

  it('should not duplicate a value in a set', () => {
    const map = new Map<string, Set<number>>()

    addSetValueToMap(map, 'key1', 42)
    addSetValueToMap(map, 'key1', 42)

    expect(map).toEqual(new Map([['key1', new Set([42])]]))
  })
})
