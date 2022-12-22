// return T | null
export type Maybe<T> = T | null

// return T | undefined
export type MaybeUndef<T> = T | undefined

// return T | null | undefined
export type Perhaps<T> = T | null | undefined

// return T will nullable properties
export type PropertiesNullable<T> = { [P in keyof T]: Maybe<T[P]> }

// return T will all properties as non nullable
export type PropertiesNonNullable<T> = {
  [P in keyof T]-?: NonNullable<T[P]>
}

// return T's non nullable picked props
export type PickPropertiesNonNullable<T, K extends keyof T> = {
  [P in K]-?: NonNullable<T[P]>
}

// return T's picked props that match ValueType
export type PickByValue<T, ValueType> = {
  [Key in keyof T]-?: T[Key] extends ValueType ? Key : never
}
