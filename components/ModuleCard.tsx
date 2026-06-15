import Link from 'next/link';
import type { ModuleStatus } from '@/lib/progress/storage';
import { Icon } from './Icon';

type Props = {
  href: string;
  title: string;
  subtitle?: string;
  status: ModuleStatus;
};

export function ModuleCard({ href, title, subtitle, status }: Props) {
  return (
    <Link href={href} className="module-card">
      <span className={`status-dot status-dot--${status}`} aria-label={status}>
        {status === 'completed' ? <Icon name="check" size={18} /> : null}
        {status === 'in-progress' ? <Icon name="chevron" size={16} /> : null}
      </span>
      <span className="module-card__body">
        <span className="module-card__title">{title}</span>
        {subtitle ? <span className="module-card__subtitle">{subtitle}</span> : null}
      </span>
      <span className="chevron" aria-hidden>
        <Icon name="chevron" size={20} />
      </span>
    </Link>
  );
}
