'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { getModule } from '@/lib/content';
import { localize } from '@/lib/content/localize';
import { getCountry } from '@/lib/content/countryRules';
import { usePrefs } from '@/lib/prefs/usePrefs';
import { useProgress } from '@/lib/progress/useProgress';
import { TopBar } from '@/components/TopBar';
import { CTALink } from '@/components/CTAButton';

export function LearnView({
  params,
}: {
  params: { locale: string; module: string; step: string };
}) {
  const { t, locale } = useI18n();
  const { prefs } = usePrefs();
  const { markVisited } = useProgress();

  const mod = getModule(params.module);
  const step = Number.parseInt(params.step, 10);

  useEffect(() => {
    if (mod && Number.isFinite(step)) markVisited(mod.slug, 'learn', step);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.module, params.step]);

  if (!mod || !Number.isFinite(step) || step < 0) notFound();

  const base = `/${locale}/course/core/${mod.slug}`;
  const overview = `/${locale}/overview`;
  const total = mod.lessons.length + 1; // +1 for the intro slide
  const lastLessonStep = mod.lessons.length;
  const nextHref = step >= lastLessonStep ? `${base}/quiz` : `${base}/learn/${step + 1}`;

  // Intro slide (step 0)
  if (step === 0) {
    return (
      <>
        <div className="content">
          <TopBar current={1} total={total} closeHref={overview} />
          {mod.image ? <img className="hero-img" src={mod.image} alt="" /> : null}
          <h2>{localize(mod.title, locale)}</h2>
          <p>{localize(mod.description, locale)}</p>
        </div>
        <div className="button-zone">
          <CTALink href={nextHref}>{t('common.start')}</CTALink>
        </div>
      </>
    );
  }

  const lesson = mod.lessons[step - 1];
  if (!lesson) notFound();

  const country = getCountry(prefs.country);
  const showCountryRule = mod.localisedByCountry && step === 1 && country;

  const backHref = step === 1 ? `${base}/learn/0` : `${base}/learn/${step - 1}`;

  return (
    <>
      <div className="content">
        <TopBar backHref={backHref} current={step + 1} total={total} closeHref={overview} />
        {lesson.image ? <img className="hero-img" src={lesson.image} alt="" /> : null}
        <h2>{localize(lesson.title, locale)}</h2>
        {lesson.blocks.map((block, i) =>
          block.type === 'paragraph' ? (
            <p key={i}>{localize(block.text, locale)}</p>
          ) : (
            <ul className="lesson-list" key={i}>
              {block.items.map((item, j) => (
                <li key={j}>{localize(item, locale)}</li>
              ))}
            </ul>
          ),
        )}
        {showCountryRule ? (
          <div className="card">
            <p>{localize(country!.minAgeRule, locale)}</p>
          </div>
        ) : null}
      </div>
      <div className="button-zone">
        <CTALink href={nextHref}>{t('common.next')}</CTALink>
      </div>
    </>
  );
}
