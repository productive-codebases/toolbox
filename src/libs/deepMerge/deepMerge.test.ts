import { deepMerge } from '.'

describe('deepMerge', () => {
  describe('Merging', () => {
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

    it('should deep merge n objects', () => {
      const o1 = {
        '1': '1'
      }

      const o2 = {
        '2': '2'
      }

      const o3 = {
        '3': '3'
      }

      const o4 = {
        '4': '4'
      }

      const mergedObjects = deepMerge([o1, o2, o3, o4])

      type MergedObjectType = typeof o1 & typeof o2 & typeof o3 & typeof o4

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const assertMergedObjectType: MergedObjectType = mergedObjects

      expect(mergedObjects).toEqual({
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4'
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
  })

  describe('Options', () => {
    describe('concatArray', () => {
      const tests = [
        {
          concatArray: true,
          expectation: {
            '1': '1',
            '2': { '2.1': ['two', 'dot', 'one'] }
          }
        },
        {
          concatArray: false,
          expectation: {
            '1': '1',
            '2': { '2.1': ['dot', 'one'] }
          }
        }
      ]

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

      tests.forEach(test => {
        it('should not concat arrays when using `concatArray:false`', () => {
          expect(
            deepMerge([o1, o2], { concatArray: test.concatArray })
          ).toEqual(test.expectation)
        })
      })
    })
  })

  describe('Mutation', () => {
    it('should not mutate objects', () => {
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

      deepMerge([o1, o2])

      expect(o1).toEqual({
        '1': '1',
        '2': {
          '2.1': '2.1'
        }
      })

      expect(o2).toEqual({
        '1': '1',
        '2': {
          '2.2': '2.2'
        },
        '3': {
          '3.1': {
            '3.3.1': '3.3.1'
          }
        }
      })
    })
  })
})
