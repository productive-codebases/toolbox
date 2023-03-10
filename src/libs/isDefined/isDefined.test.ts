import { isDefined } from '.'
import { describe, expect, it } from 'vitest'

describe('isDefined', () => {
  it('should remove undefined or nullable values', () => {
    const arr = [0, 1, 'two', undefined, 'four', 5, null, '', 'height', NaN]

    expect(arr.filter(isDefined)).toEqual([
      0,
      1,
      'two',
      'four',
      5,
      '',
      'height',
      NaN
    ])
  })
})
