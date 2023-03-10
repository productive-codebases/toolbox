import { isTruthy } from '.'
import { describe, expect, it } from 'vitest'

describe('isTruthy', () => {
  it('should keep truthty values', () => {
    const arr = [0, 1, 'two', undefined, 'four', 5, null, '', 'height', NaN]

    expect(arr.filter(isTruthy)).toEqual([1, 'two', 'four', 5, 'height', NaN])
  })
})
