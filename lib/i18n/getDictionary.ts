import 'server-only';
import type { Locale } from './config';
import { contentFallbackLocale } from './config';

export type Messages = Record<string, string>;

const loaders: Record<Locale, () => Promise<{ default: Messages }>> = {
  es: () => import('@/messages/es.json'),
  en: () => import('@/messages/en.json'),
  it: () => import('@/messages/it.json'),
  nl: () => import('@/messages/nl.json'),
  fr: () => import('@/messages/fr.json'),
  ca: () => import('@/messages/ca.json'),
  pt: () => import('@/messages/pt.json'),
};

export async function getDictionary(locale: Locale): Promise<Messages> {
  const fallback = (await loaders[contentFallbackLocale]()).default;
  const messages = (await loaders[locale]()).default;
  // Merge so any missing UI key falls back to the fallback locale.
  return { ...fallback, ...messages };
}
