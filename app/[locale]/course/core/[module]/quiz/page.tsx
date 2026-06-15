import { locales } from '@/lib/i18n/config';
import { getModuleSlugs } from '@/lib/content';
import { QuizIntroView } from './QuizIntroView';

export function generateStaticParams() {
  const params: { locale: string; module: string }[] = [];
  for (const locale of locales) {
    for (const slug of getModuleSlugs()) {
      params.push({ locale, module: slug });
    }
  }
  return params;
}

export default function QuizIntroPage({
  params,
}: {
  params: { locale: string; module: string };
}) {
  return <QuizIntroView params={params} />;
}
