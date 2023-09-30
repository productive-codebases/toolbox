import { appendEntitiesToMap } from '..'

describe('appendEntitiesToMap', () => {
  it('should append objects in a map', () => {
    type User = {
      id: number
      name: string
      lastName: string
    }

    const users = [
      {
        id: 1,
        name: 'Bob',
        lastName: 'Foo'
      },
      {
        id: 2,
        name: 'Alice',
        lastName: 'Foo'
      },
      {
        id: 3,
        name: 'John',
        lastName: 'Bar'
      }
    ]

    expect(appendEntitiesToMap<User, string>(users, 'lastName')).toEqual(
      new Map([
        [
          'Foo',
          new Set([
            {
              id: 1,
              name: 'Bob',
              lastName: 'Foo'
            },
            {
              id: 2,
              name: 'Alice',
              lastName: 'Foo'
            }
          ])
        ],
        [
          'Bar',
          new Set([
            {
              id: 3,
              name: 'John',
              lastName: 'Bar'
            }
          ])
        ]
      ])
    )
  })
})
