import { locales } from '@/lib/i18n/config';
import { getModules } from '@/lib/content';
import { LearnView } from './LearnView';

export function generateStaticParams() {
  const params: { locale: string; module: string; step: string }[] = [];
  for (const locale of locales) {
    for (const mod of getModules()) {
      // step 0 = intro, steps 1..lessons.length = lessons
      for (let step = 0; step <= mod.lessons.length; step++) {
        params.push({ locale, module: mod.slug, step: String(step) });
      }
    }
  }
  return params;
}

export default function LearnPage({
  params,
}: {
  params: { locale: string; module: string; step: string };
}) {
  return <LearnView params={params} />;
}
