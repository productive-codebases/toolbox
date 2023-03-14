import { Maybe } from '@productive-codebases/toolbox'

/**
 * Basic reimplementation on LocalStorage, used in tests,
 * to avoid to use a JSDom environment.
 */
export default class LocalStorageStub implements Storage {
  values: Map<string, Maybe<string>> = new Map()

  get length(): number {
    return this.values.size
  }

  clear(): void {
    this.values.clear()
  }

  getItem(key: string): Maybe<string> {
    return this.values.get(key) || null
  }

  key(index: number): Maybe<string> {
    return Array.from(this.values)[index][0]
  }

  removeItem(key: string): void {
    this.values.delete(key)
  }

  setItem(key: string, value: string): void {
    this.values.set(key, value)
  }
}
