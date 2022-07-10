import { removeSetValueToMap, addSetValueToMap } from '..'

describe('removeSetValueToMap', () => {
  it('should remove a key/value in the map', () => {
    const map = new Map<string, Set<number>>()

    addSetValueToMap(map, 'key1', 42)
    addSetValueToMap(map, 'key1', 64)
    addSetValueToMap(map, 'key2', 1337)
    addSetValueToMap(map, 'key2', 2048)

    expect(map).toEqual(
      new Map([
        ['key1', new Set([42, 64])],
        ['key2', new Set([1337, 2048])]
      ])
    )

    removeSetValueToMap(map, 'key1', 42)
    removeSetValueToMap(map, 'key2', 2048)
    removeSetValueToMap(map, 'key3', -1)

    expect(map).toEqual(
      new Map([
        ['key1', new Set([64])],
        ['key2', new Set([1337])]
      ])
    )
  })
})
