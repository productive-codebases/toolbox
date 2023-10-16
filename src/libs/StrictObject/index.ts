import { ObjectType, ObjectEntries } from './types'

function strictKeys<T extends ObjectType>(source: T): Array<keyof T> {
  return Object.keys(source) as Array<keyof T>
}

function strictValues<T extends ObjectType>(source: T): Array<T[keyof T]> {
  return Object.values(source) as Array<T[keyof T]>
}

function strictEntries<T extends ObjectType>(source: T): ObjectEntries<T> {
  return Object.entries(source) as ObjectEntries<T>
}

export const StrictObject = {
  keys: strictKeys,
  values: strictValues,
  entries: strictEntries
} as const
