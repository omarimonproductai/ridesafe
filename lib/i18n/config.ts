export const locales = ['es', 'en', 'it', 'nl', 'fr', 'ca', 'pt'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';
// Content fallback locale: lesson/quiz content not yet translated falls back to this.
export const contentFallbackLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
  it: 'Italiano',
  nl: 'Nederlands',
  fr: 'Français',
  ca: 'Català',
  pt: 'Português',
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}
