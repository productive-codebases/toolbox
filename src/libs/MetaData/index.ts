import { Maybe } from '../../types'

/**
 * Generic container with safe API to manipulate generic metadata (~object).
 */
export class MetaData<TMetadata extends object> {
  private _meta: Partial<TMetadata> = {}

  /**
   * Return a metadata.
   */
  get<K extends keyof TMetadata>(key: K): Maybe<TMetadata[K]> {
    return (this._meta[key] as TMetadata[K]) || null
  }

  /**
   * Set a metadata.
   */
  set(partialMeta: Maybe<Partial<TMetadata>>): this {
    this._meta = { ...this._meta, ...partialMeta }
    return this
  }

  /**
   * Delete a metadata.
   */
  delete<K extends keyof TMetadata>(key: K): this {
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
