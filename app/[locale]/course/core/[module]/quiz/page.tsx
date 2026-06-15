'use client';

import { notFound } from 'next/navigation';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { getModule } from '@/lib/content';
import { TopBar } from '@/components/TopBar';
import { CTALink } from '@/components/CTAButton';
import { Icon } from '@/components/Icon';

export default function QuizIntroPage({
  params,
}: {
  params: { locale: string; module: string };
}) {
  const { t, locale } = useI18n();
  const mod = getModule(params.module);
  if (!mod) notFound();

  const base = `/${locale}/course/core/${mod.slug}`;
  const overview = `/${locale}/overview`;

  return (
    <>
      <div className="content">
        <TopBar backHref={`${base}/learn/${mod.lessons.length}`} closeHref={overview} />
        <div className="center-col">
          <div className="hero-illustration" aria-hidden>
            <Icon name="quiz" size={120} />
          </div>
          <h2>{t('quiz.title')}</h2>
          <p className="muted">{t('quiz.intro')}</p>
        </div>
      </div>
      <div className="button-zone">
        <CTALink href={`${base}/quiz/0`}>{t('common.start')}</CTALink>
      </div>
    </>
  );
}
