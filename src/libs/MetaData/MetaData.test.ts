import { MetaData } from '.'
import { describe, expect, it } from 'vitest'

interface IMetaData {
  id: number
  value: string
}

describe('MetaData', () => {
  it('should get a metadata', () => {
    const metadata = new MetaData<IMetaData>()
    metadata.set({ id: 42 })
    expect(metadata.get('id')).toBe(42)
  })

  it('should delete a metadata', () => {
    const metadata = new MetaData<IMetaData>()
    metadata.set({ id: 42 })
    metadata.delete('id')
    expect(metadata.get('id')).toBe(null)
  })

  it('should clear all metadata', () => {
    const metadata = new MetaData<IMetaData>()
    metadata.set({ id: 42 }).set({ value: 'foo' })
    metadata.clear()
    expect(metadata.get('id')).toBe(null)
    expect(metadata.get('value')).toBe(null)
  })
})
