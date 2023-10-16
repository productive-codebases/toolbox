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
    const obj: Record<'fooKey' | 'barKey', 'foo' | 'bar'> = {
      fooKey: 'foo',
      barKey: 'bar'
    }

    const values = StrictObject.values(obj)

    expect(values).toEqual(['foo', 'bar'])
  })

  it('returns entries', () => {
    const entries = StrictObject.entries(obj)

    expect(entries).toEqual([
      ['foo', 'foo value'],
      ['bar', 'bar value']
    ])
  })
})
