'use client';

import { useI18n } from '@/lib/i18n/I18nProvider';
import { CTALink } from '@/components/CTAButton';

export default function ErrorPage() {
  const { t, locale } = useI18n();
  return (
    <>
      <div className="content">
        <div className="center-col">
          <div className="hero-illustration" aria-hidden>
            ⚠️
          </div>
          <h2>{t('error.title')}</h2>
          <p className="muted">{t('error.body')}</p>
        </div>
      </div>
      <div className="button-zone">
        <CTALink href={`/${locale}`}>{t('common.backToStart')}</CTALink>
      </div>
    </>
  );
}
