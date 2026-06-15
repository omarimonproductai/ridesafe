import { locales } from '@/lib/i18n/config';
import { getModules } from '@/lib/content';
import { QuizView } from './QuizView';

export function generateStaticParams() {
  const params: { locale: string; module: string; step: string }[] = [];
  for (const locale of locales) {
    for (const mod of getModules()) {
      for (let step = 0; step < mod.quiz.length; step++) {
        params.push({ locale, module: mod.slug, step: String(step) });
      }
    }
  }
  return params;
}

export default function QuizQuestionPage({
  params,
}: {
  params: { locale: string; module: string; step: string };
}) {
  return <QuizView params={params} />;
}
