import { describe, expect, it } from 'vitest'
import { StrictObject } from '.'

describe('StrictObject', () => {
  const obj: Record<'foo' | 'bar', string> = {
    foo: 'foo value',
    bar: 'bar value'
  }

  it('returns keys', () => {
    const keys = StrictObject.keys(obj)
    expect(keys).toEqual(['foo', 'bar'])
  })

  it('returns values', () => {
    const values = StrictObject.values(obj)
    expect(values).toEqual(['foo value', 'bar value'])
  })

  it('returns entries', () => {
    const entries = StrictObject.entries(obj)
    expect(entries).toEqual([
      ['foo', 'foo value'],
      ['bar', 'bar value']
    ])
  })
})
