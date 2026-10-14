import type { Content } from './types'
import type { Locale } from './locales'
import { en } from './en'
import { es } from './es'

export { locales, isLocale, localeNames, type Locale } from './locales'
export type { Content } from './types'

export const getContent = (locale: Locale): Content => (locale === 'es' ? es : en)
