import { isTruthy } from '.'

describe('isTruthy', () => {
  it('should keep truthty values', () => {
    const arr = [
      0,
      1,
      'two',
      undefined,
      'four',
      5,
      null,
      '',
      'height',
      {},
      false,
      NaN
    ]

    const results = arr.filter(isTruthy)

    expect(results).toEqual([1, 'two', 'four', 5, 'height', {}, NaN])
  })
})
