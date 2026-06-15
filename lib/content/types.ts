import type { Locale } from '@/lib/i18n/config';

/**
 * Localized text. `en` is required and acts as the ultimate fallback so that
 * content not yet translated for a given locale still renders.
 */
export type LocalizedText = { en: string } & Partial<Record<Locale, string>>;

export type LessonBlock =
  | { type: 'paragraph'; text: LocalizedText }
  | { type: 'list'; items: LocalizedText[] };

export type Lesson = {
  title: LocalizedText;
  /** Optional hero image path under /public. */
  image?: string;
  blocks: LessonBlock[];
};

export type QuizOption = {
  id: string;
  label: LocalizedText;
};

export type QuizQuestion = {
  prompt: LocalizedText;
  image?: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: LocalizedText;
};

export type Module = {
  slug: string;
  title: LocalizedText;
  subtitle?: LocalizedText;
  description: LocalizedText;
  image?: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
  /** When true, content is localised by country (see country-rules). */
  localisedByCountry?: boolean;
};

export type Course = {
  id: string;
  title: LocalizedText;
  description: LocalizedText;
  reward: LocalizedText;
  modules: Module[];
};
