import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constants'

// export type Language = 'en' | 'es' | 'de' | 'auto'
export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

// TODO: Usar enum para que los tipos sean enums
export type Action =
  | { type: 'INTERCHANGE_LANGUAGE' }
  | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
  | { type: 'SET_TO_LANGUAGE', payload: Language }
  | { type: 'SET_FROM_TEXT', payload: string }
  | { type: 'SET_RESULT', payload: string }
