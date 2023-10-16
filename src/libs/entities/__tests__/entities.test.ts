import { Maybe } from '@productive-codebases/toolbox'
import { createEntities, createEntity } from '..'

describe('Entities', () => {
  class EntityUser {
    id: Maybe<string> = null
    username: Maybe<string> = null

    constructor(parameters: { id: Maybe<string>; username: string }) {
      this.id = parameters.id
      this.username = parameters.username
    }
  }

  describe('createEntity', () => {
    it('should create an entity from a litteral object', () => {
      const user = createEntity(EntityUser, {
        id: '1',
        username: 'John'
      })

      expect(user instanceof EntityUser).toBe(true)
      expect(user.username).toBe('John')
    })
  })

  describe('createEntities', () => {
    it('should create entities from a litteral object', () => {
      const users = createEntities(EntityUser, [
        {
          id: '1',
          username: 'John'
        },
        {
          id: '2',
          username: 'T1000'
        }
      ])

      expect(users[0] instanceof EntityUser).toBe(true)

      expect(users).toEqual([
        {
          id: '1',
          username: 'John'
        },
        {
          id: '2',
          username: 'T1000'
        }
      ])
    })
  })
})
