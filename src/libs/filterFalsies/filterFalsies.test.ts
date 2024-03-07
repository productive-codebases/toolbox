import { filterFalsies } from '.'

describe('filterFalsies', () => {
  it('should remove falsies values', () => {
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

    const results = filterFalsies(arr)

    expect(results).toEqual([1, 'two', 'four', 5, 'height', {}, NaN])
  })
})
