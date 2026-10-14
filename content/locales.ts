// Separado de index.ts para que los client components no arrastren el copy al bundle.
export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]

export const isLocale = (value: string): value is Locale => (locales as readonly string[]).includes(value)

/** Nombre de cada idioma en su propio idioma, para lectores de pantalla. */
export const localeNames: Record<Locale, string> = { en: 'English', es: 'Español' }
