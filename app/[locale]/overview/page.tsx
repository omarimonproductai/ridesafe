'use client';

import { useI18n } from '@/lib/i18n/I18nProvider';
import { getCourse } from '@/lib/content';
import { localize } from '@/lib/content/localize';
import { ModuleCard } from '@/components/ModuleCard';
import { RewardBadge } from '@/components/RewardBadge';
import { useProgress } from '@/lib/progress/useProgress';

export default function OverviewPage() {
  const { t, locale } = useI18n();
  const { status, completedCount } = useProgress();
  const course = getCourse();
  const total = course.modules.length;

  return (
    <div className="content" style={{ paddingTop: 16 }}>
      <h1>{t('overview.welcome')}</h1>
      <p className="muted">{t('overview.subtitle')}</p>

      <div className="course-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2>{t('overview.courseTitle')}</h2>
          <span className="progress-badge">
            {t('overview.progress', { done: completedCount, total })}
          </span>
        </div>
        <p className="muted">{localize(course.description, locale)}</p>
        <RewardBadge label={localize(course.reward, locale)} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {course.modules.map((m) => (
          <ModuleCard
            key={m.slug}
            href={`/${locale}/course/core/${m.slug}/learn/0`}
            title={localize(m.title, locale)}
            subtitle={m.subtitle ? localize(m.subtitle, locale) : undefined}
            status={status(m.slug)}
          />
        ))}
      </div>
    </div>
  );
}
