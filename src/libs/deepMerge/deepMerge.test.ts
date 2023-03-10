import { deepMerge } from '.'
import { describe, expect, it } from 'vitest'

describe('deepMerge', () => {
  it('should deep merge two objects', () => {
    const o1 = {
      '1': '1',
      '2': {
        '2.1': '2.1'
      }
    }

    const o2 = {
      '1': '1',
      '2': {
        '2.2': '2.2'
      },
      '3': {
        '3.1': {
          '3.3.1': '3.3.1'
        }
      }
    }

    expect(deepMerge([o1, o2])).toEqual({
      '1': '1',
      '2': { '2.1': '2.1', '2.2': '2.2' },
      '3': { '3.1': { '3.3.1': '3.3.1' } }
    })
  })

  it('should concat arrays by default', () => {
    const o1 = {
      '1': '1',
      '2': {
        '2.1': ['two']
      }
    }

    const o2 = {
      '1': '1',
      '2': {
        '2.1': ['dot', 'one']
      }
    }

    expect(deepMerge([o1, o2])).toEqual({
      '1': '1',
      '2': { '2.1': ['two', 'dot', 'one'] }
    })
  })

  it('should not concat arrays when using `concatArray:false`', () => {
    const o1 = {
      '1': '1',
      '2': {
        '2.1': ['two']
      }
    }

    const o2 = {
      '1': '1',
      '2': {
        '2.1': ['dot', 'one']
      }
    }

    expect(deepMerge([o1, o2], { concatArray: false })).toEqual({
      '1': '1',
      '2': { '2.1': ['dot', 'one'] }
    })
  })
})
