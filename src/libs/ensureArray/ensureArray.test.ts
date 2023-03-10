import { ensureArray } from '.'
import { describe, expect, it } from 'vitest'

describe('ensureArray', () => {
  it('should return an empty array if the value is null or undefined', () => {
    expect(ensureArray(null)).toEqual([])
    expect(ensureArray(undefined)).toEqual([])
  })

  it('should return an array if the passed parameters is not an array', () => {
    expect(ensureArray('a')).toEqual(['a'])
    expect(ensureArray({ foo: 'bar' })).toEqual([{ foo: 'bar' }])
  })

  it('should let the value as it if its already an array', () => {
    expect(ensureArray(['a'])).toEqual(['a'])
    expect(ensureArray([['a']])).toEqual([['a']])
    expect(ensureArray([{ foo: 'bar' }])).toEqual([{ foo: 'bar' }])
  })
})
