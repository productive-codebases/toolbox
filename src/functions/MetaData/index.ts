import { Maybe } from "../../types"

/**
 * Generic container with safe API to manipulate generic metadata (~object).
 */
export default class MetaData<M extends object> {
  private _meta: Partial<M> = {}

  /**
   * Return a metadata.
   */
  get<K extends keyof M>(key: K): Maybe<M[K]> {
    return (this._meta[key] as M[K]) || null
  }

  /**
   * Set a metadata.
   */
  set(partialMeta: Maybe<Partial<M>>): this {
    this._meta = { ...this._meta, ...partialMeta }
    return this
  }

  /**
   * Delete a metadata.
   */
  delete<K extends keyof M>(key: K): this {
    delete this._meta[key]
    return this
  }

  /**
   * Clear all metadata.
   */
  clear() {
    this._meta = {}
  }
}
