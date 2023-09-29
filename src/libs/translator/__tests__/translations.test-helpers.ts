export type Translations = typeof enTranslations
export type AllTranslations = typeof allTranslations

export const enTranslations = {
  Tests: {
    Interpolation: {
      'X identities': '<%= X %> identities'
    },
    Markdown: {
      'X identities': '**<%= X %>** identities'
    },
    Plural: {
      'X identities': {
        0: 'No identity',
        1: 'One identity',
        2: 'Two identities',
        n: 'Some identities'
      }
    }
  }
}

export const frTranslations: Translations = {
  Tests: {
    Interpolation: {
      'X identities': '<%= X %> identités'
    },
    Markdown: {
      'X identities': '**<%= X %>** identités'
    },
    Plural: {
      'X identities': {
        0: 'Aucune identité',
        1: 'Une identité',
        2: 'Deux identités',
        n: 'Plusieurs identités'
      }
    }
  }
}

export const allTranslations = {
  en: enTranslations,
  fr: frTranslations
}
