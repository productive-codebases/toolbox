import { translate } from '..'
import { interpolate, plural } from '../helpers'
import { allTranslations } from './translations.test-helpers'

describe('i18n helpers', () => {
  const trans = translate(allTranslations)

  describe('interpolate()', () => {
    it('should replace arguments in translations', () => {
      const test1 = interpolate(
        trans('en')('Tests')('Interpolation')('X identities'),
        { X: 42 }
      )

      expect(test1).toBe('42 identities')
    })

    it('should replace missing replacements by a fallback value', () => {
      const test1 = interpolate(
        trans('en')('Tests')('Interpolation')('X identities'),
        {}
      )

      expect(test1).toBe('- identities')

      const test2 = interpolate(
        trans('en')('Tests')('Interpolation')('X identities'),
        {},
        { onMissingReplacement: key => `${key}?` }
      )

      expect(test2).toBe('X? identities')
    })
  })

  describe('plural()', () => {
    it('should pick the correct translation according to the `count` argument', () => {
      const test1 = plural(trans('en')('Tests')('Plural')('X identities'), 0)
      expect(test1).toBe('No identity')

      const test2 = plural(trans('en')('Tests')('Plural')('X identities'), 1)
      expect(test2).toBe('One identity')

      const test3 = plural(trans('en')('Tests')('Plural')('X identities'), 2)
      expect(test3).toBe('Two identities')

      const test4 = plural(trans('en')('Tests')('Plural')('X identities'), 'n')
      expect(test4).toBe('Some identities')
    })

    it("should fallback on the 'n' case if translation has not been found", () => {
      // cast is required to bypass TS check
      const test1 = plural(
        trans('en')('Tests')('Plural')('X identities'),
        Number(-1)
      )
      expect(test1).toBe('Some identities')

      // cast is required to bypass TS check
      const test2 = plural(
        trans('en')('Tests')('Plural')('X identities'),
        Number(3)
      )
      expect(test2).toBe('Some identities')
    })
  })
})
