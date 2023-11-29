/* eslint-disable @typescript-eslint/no-unused-vars */

import { PartialDeep } from '..'
import { Expect, Equal } from 'type-testing'

describe('Types', () => {
  it('should recursively apply Partial to some object properties', () => {
    type Obj = {
      str: 'str'
      obj: {
        str: 'str'
        numb: 42
      }
      func: () => void
    }

    type PartialDeepObj = PartialDeep<Obj>

    type test1 = Expect<
      Equal<
        PartialDeepObj,
        {
          str?: 'str' | undefined
          obj?:
            | {
                str?: 'str' | undefined
                numb?: 42 | undefined
              }
            | undefined
          // Should still be a function
          func?: (() => void) | undefined
        }
      >
    >
  })
})
