// return T | null
export type Maybe<T> = T | null

// return T | undefined
export type MaybeUndef<T> = T | undefined

// return T | null | undefined
export type Perhaps<T> = T | null | undefined

// return T with nullable properties
export type PropertiesNullable<T> = { [P in keyof T]: Maybe<T[P]> }

// return T with all properties as non nullable
export type PropertiesNonNullable<T> = {
  [P in keyof T]-?: NonNullable<T[P]>
}
