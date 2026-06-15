'use client';

import { useRouter } from 'next/navigation';
import { notFound } from 'next/navigation';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { getModule } from '@/lib/content';
import { localize } from '@/lib/content/localize';
import { TopBar } from '@/components/TopBar';
import { QuizQuestion } from '@/components/QuizQuestion';

export default function QuizQuestionPage({
  params,
}: {
  params: { locale: string; module: string; step: string };
}) {
  const { t, locale } = useI18n();
  const router = useRouter();

  const mod = getModule(params.module);
  const step = Number.parseInt(params.step, 10);
  if (!mod || !Number.isFinite(step)) notFound();

  const question = mod.quiz[step];
  if (!question) notFound();

  const base = `/${locale}/course/core/${mod.slug}`;
  const overview = `/${locale}/overview`;
  const total = mod.quiz.length;

  const backHref = step === 0 ? `${base}/quiz` : `${base}/quiz/${step - 1}`;

  function onNext() {
    const next = step + 1;
    if (next < total) router.push(`${base}/quiz/${next}`);
    else router.push(`${base}/completed`);
  }

  return (
    <>
      <TopBar backHref={backHref} current={step + 1} total={total} closeHref={overview} />
      <QuizQuestion
        key={step}
        prompt={localize(question.prompt, locale)}
        image={question.image}
        options={question.options.map((o) => ({ id: o.id, label: localize(o.label, locale) }))}
        correctOptionId={question.correctOptionId}
        explanation={localize(question.explanation, locale)}
        labels={{
          check: t('common.check'),
          next: t('common.next'),
          correct: t('quiz.correct'),
          incorrect: t('quiz.incorrect'),
        }}
        onNext={onNext}
      />
    </>
  );
}
