import Link from 'next/link';
import { ProgressBadge } from './ProgressBadge';
import { Icon } from './Icon';

type Props = {
  /** Optional back link href. */
  backHref?: string;
  current?: number;
  total?: number;
  /** Where the close (X) button goes. */
  closeHref: string;
};

export function TopBar({ backHref, current, total, closeHref }: Props) {
  return (
    <div className="topbar">
      {backHref ? (
        <Link href={backHref} className="topbar__btn" aria-label="Back">
          <Icon name="back" />
        </Link>
      ) : (
        <span className="topbar__btn" aria-hidden style={{ visibility: 'hidden' }}>
          <Icon name="back" />
        </span>
      )}
      {typeof current === 'number' && typeof total === 'number' ? (
        <ProgressBadge current={current} total={total} />
      ) : (
        <span />
      )}
      <Link href={closeHref} className="topbar__btn" aria-label="Close">
        <Icon name="close" />
      </Link>
    </div>
  );
}
