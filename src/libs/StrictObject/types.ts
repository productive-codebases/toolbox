// From https://stackoverflow.com/a/69019874
export type ObjectType = Record<PropertyKey, unknown>

export type PickByValue<T, V> = Pick<
  // From https://stackoverflow.com/a/55153000
  T,
  { [K in keyof T]: T[K] extends V ? K : never }[keyof T]
>

export type ObjectEntries<T> = {
  // From https://stackoverflow.com/a/60142095
  [K in keyof T]: [keyof PickByValue<T, T[K]>, T[K]]
}[keyof T][]
