import get from 'lodash.get'
import unescape from 'lodash.unescape'
import { isDefined } from '../../isDefined'

/**
 * Ensure that the language passed is one of the translations or fallback
 * to the first language available on translations.
 */
export function ensureLanguage<
  TTranslations extends Record<TLanguage, object>,
  TLanguage extends string
>(translations: TTranslations, language: string): TLanguage {
  const supportedLanguages = Object.keys(translations)

  if (!supportedLanguages.length) {
    throw new Error('No languages found from translations')
  }

  if (supportedLanguages.includes(language)) {
    return language as TLanguage
  }

  return supportedLanguages.pop() as TLanguage
}

/**
 * Replace values in translations.
 *
 * Example: <%- X %> identities => 42 identities
 */
export function interpolate(
  text: string,
  replacements: object,
  options?: {
    onMissingReplacement: (property: string) => string
  }
): string {
  const finalOptions = {
    // default `onMissingReplacement` implementation
    onMissingReplacement: () => '-',
    ...options
  }

  return unescape(interpolateTemplate(text, replacements, finalOptions))
}

/**
 * Pick the correct translations according to `count`.
 */
export function plural<TCount extends number | 'n'>(
  texts: Record<TCount, string>,
  count: TCount
): string {
  return texts[count] ?? get(texts, 'n')
}

/**
 * This method will replace every occurence of `replacements` in `template`.
 * Usable tags are <%= %> or <%- %>.
 */
export function interpolateTemplate(
  template: string,
  replacements?: object,
  options?: {
    onMissingReplacement: (property: string) => string
  }
): string {
  if (!replacements) {
    return template
  }

  // Use of a Set to be TS compliant while handling unknown object
  const replacementsMap = new Map<string, string>(Object.entries(replacements))

  // Detect either <%= property %> and <%- property %>
  const regex = /<%[=-](.*?)%>/gm

  let result = template
  let regexResult

  // eslint-disable-next-line no-cond-assign
  while ((regexResult = regex.exec(template)) !== null) {
    const tag = regexResult[0]
    // Cleaning property as there will be often something like <%= property %>
    const property = regexResult[1].trim()

    const value =
      replacementsMap.get(property) ??
      // if defined, get fallback
      (options?.onMissingReplacement && options.onMissingReplacement(property))

    if (!isDefined(value)) {
      throw new Error(`Missing property ${property} when interpolating`)
    }

    // Replacing value or fallback to the property name
    result = result.replace(tag, value)
  }

  return result
}
