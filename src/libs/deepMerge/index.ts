import mergeWith from 'lodash.mergewith'

interface IDeepMergeOptions {
  /** Concat arrays */
  concatArray: boolean
}

/**
 * Merge objects deeply.
 */
export function deepMerge<T1, T2>(
  objects: [obj1: T1, obj2: T2],
  options?: IDeepMergeOptions
): T1 & T2

export function deepMerge<T1, T2, T3>(
  objects: [obj1: T1, obj2: T2, obj3: T3],
  options?: IDeepMergeOptions
): T1 & T2 & T3

export function deepMerge<T1, T2, T3, T4>(
  objects: [obj1: T1, obj2: T2, obj3: T3, obj4: T4],
  options?: IDeepMergeOptions
): T1 & T2 & T3 & T4

export function deepMerge<T1, T2, T3, T4, T5>(
  objects: [obj1: T1, obj2: T2, obj3: T3, obj4: T4, obj5: T5],
  options?: IDeepMergeOptions
): T1 & T2 & T3 & T4 & T5

export function deepMerge<T1, T2, T3, T4, T5, T6>(
  objects: [obj1: T1, obj2: T2, obj3: T3, obj4: T4, obj5: T5, obj5: T6],
  options?: IDeepMergeOptions
): T1 & T2 & T3 & T4 & T5 & T6

export function deepMerge(
  objects: any[],
  options: IDeepMergeOptions = {
    concatArray: true
  }
) {
  return objects.reduce((acc, obj) => {
    return mergeWith(acc, obj, (v1, v2) => {
      if (!options.concatArray) {
        return undefined
      }

      if (Array.isArray(v1)) {
        return v1.concat(v2)
      }

      return undefined
    })
  }, {})
}
