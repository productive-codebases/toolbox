import { isDefined } from '.'

describe('isDefined', () => {
  it('should remove undefined or nullable values', () => {
    const arr = [0, 1, 'two', undefined, 'four', 5, null, '', 'height', {}, NaN]

    const results = arr.filter(isDefined)

    expect(results).toEqual([0, 1, 'two', 'four', 5, '', 'height', {}, NaN])
  })
})
