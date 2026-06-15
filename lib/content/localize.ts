import type { Locale } from '@/lib/i18n/config';
import { contentFallbackLocale } from '@/lib/i18n/config';
import type { LocalizedText } from './types';

/**
 * Resolve a LocalizedText for the given locale, falling back to the content
 * fallback locale and finally to English. This is the single place locale
 * resolution happens, so swapping the content source (e.g. to a CMS) does not
 * change how components consume content.
 */
export function localize(text: LocalizedText, locale: Locale): string {
  return text[locale] ?? text[contentFallbackLocale] ?? text.en;
}
