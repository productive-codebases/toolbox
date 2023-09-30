import { indexEntitiesToMap } from '..'

describe('indexEntitiesToMap', () => {
  it('should index objects in a map', () => {
    type User = {
      id: number
      name: string
    }

    const users = [
      {
        id: 1,
        name: 'Bob'
      },
      {
        id: 2,
        name: 'Alice'
      },
      {
        id: 3,
        name: 'John'
      }
    ]

    expect(indexEntitiesToMap<User, string>(users, 'id')).toEqual(
      new Map([
        [
          1,
          {
            id: 1,
            name: 'Bob'
          }
        ],
        [
          2,
          {
            id: 2,
            name: 'Alice'
          }
        ],
        [
          3,
          {
            id: 3,
            name: 'John'
          }
        ]
      ])
    )
  })
})
