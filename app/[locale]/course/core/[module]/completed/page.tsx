'use client';

import { useEffect } from 'react';
import { notFound } from 'next/navigation';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { getModule } from '@/lib/content';
import { useProgress } from '@/lib/progress/useProgress';
import { CTALink } from '@/components/CTAButton';

export default function CompletedPage({
  params,
}: {
  params: { locale: string; module: string };
}) {
  const { t, locale } = useI18n();
  const { markCompleted } = useProgress();

  const mod = getModule(params.module);

  useEffect(() => {
    if (mod) markCompleted(mod.slug);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.module]);

  if (!mod) notFound();

  return (
    <>
      <div className="content">
        <div className="center-col">
          <div className="hero-illustration" aria-hidden>
            🎉
          </div>
          <h2>{t('completed.title')}</h2>
          <p className="muted">{t('completed.body')}</p>
        </div>
      </div>
      <div className="button-zone">
        <CTALink href={`/${locale}/overview`}>{t('common.backToCourses')}</CTALink>
      </div>
    </>
  );
}
