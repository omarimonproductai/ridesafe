import Link from 'next/link';
import type { ModuleStatus } from '@/lib/progress/storage';

type Props = {
  href: string;
  title: string;
  subtitle?: string;
  status: ModuleStatus;
};

const statusIcon: Record<ModuleStatus, string> = {
  completed: '✓',
  'in-progress': '…',
  'not-started': '',
};

export function ModuleCard({ href, title, subtitle, status }: Props) {
  return (
    <Link href={href} className="module-card">
      <span className={`status-dot status-dot--${status}`} aria-hidden>
        {statusIcon[status]}
      </span>
      <span className="module-card__body">
        <span className="module-card__title">{title}</span>
        {subtitle ? <span className="module-card__subtitle">{subtitle}</span> : null}
      </span>
      <span className="chevron" aria-hidden>
        ›
      </span>
    </Link>
  );
}
