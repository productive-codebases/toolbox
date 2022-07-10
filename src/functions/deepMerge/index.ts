import mergeWith from 'lodash.mergewith'

interface IDeepMergeOptions {
  concatArray: boolean
}

/**
 * Deep merge of T object.
 * Arrays will be concatened too and object will be deep merged.
 */
export function deepMerge<T1, T2>(
  objects: [obj1: T1, obj2: T2],
  options: IDeepMergeOptions = { concatArray: true }
): T1 & T2 {
  const res = mergeWith(objects[0], objects[1], (v1, v2) => {
    if (!options.concatArray) {
      return undefined
    }

    if (Array.isArray(v1)) {
      return v1.concat(v2)
    }

    return undefined
  })

  return res
}
