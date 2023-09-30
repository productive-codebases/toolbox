import { ensureSet } from '.'

describe('ensureSet', () => {
  it('should return an empty Set if the value is null or undefined', () => {
    expect(ensureSet(null)).toEqual(new Set())
    expect(ensureSet(undefined)).toEqual(new Set())
  })

  it('should return a Set if the passed parameters is not a Set', () => {
    expect(ensureSet('a')).toEqual(new Set('a'))
    expect(ensureSet({ foo: 'bar' })).toEqual(new Set([{ foo: 'bar' }]))
  })

  it('should let the value as it if its already a Set', () => {
    expect(ensureSet(new Set('a'))).toEqual(new Set('a'))
    expect(ensureSet(new Set([{ foo: 'bar' }]))).toEqual(
      new Set([{ foo: 'bar' }])
    )
  })
})
