'use client';

import { useEffect, useState } from 'react';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { CTALink } from '@/components/CTAButton';
import { Icon, type IconName } from '@/components/Icon';

const SLIDES: { key: string; icon: IconName }[] = [
  { key: 'landing.rotate.learn', icon: 'learn' },
  { key: 'landing.rotate.quiz', icon: 'quiz' },
  { key: 'landing.rotate.rewards', icon: 'rewards' },
];

export default function LandingPage() {
  const { t, locale } = useI18n();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <>
      <div className="content">
        <div className="hero-rotator" style={{ marginTop: 24 }}>
          <div className="hero-illustration" aria-hidden>
            <Icon name={SLIDES[index].icon} size={120} />
          </div>
          <h1>{t(SLIDES[index].key)}</h1>
          <div className="dots">
            {SLIDES.map((s, i) => (
              <span key={s.key} className={`dot ${i === index ? 'dot--active' : ''}`} />
            ))}
          </div>
        </div>
        <div className="card">
          <p>{t('landing.welcome')}</p>
        </div>
      </div>
      <div className="button-zone">
        <CTALink href={`/${locale}/settings`}>{t('landing.cta')}</CTALink>
      </div>
    </>
  );
}
