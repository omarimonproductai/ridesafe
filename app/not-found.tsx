import Link from 'next/link';
import { defaultLocale } from '@/lib/i18n/config';
import { Icon } from '@/components/Icon';
import { BrandFooter } from '@/components/BrandFooter';

export default function NotFound() {
  return (
    <div className="app-bg">
      <div className="shell">
        <div className="content">
          <div className="center-col">
            <div className="hero-illustration" aria-hidden>
              <Icon name="search" size={120} />
            </div>
            <h2>Oops!</h2>
            <p className="muted">This page could not be found.</p>
          </div>
        </div>
        <div className="button-zone">
          <Link href={`/${defaultLocale}`} className="cta">
            Back to start
          </Link>
        </div>
        <BrandFooter />
      </div>
    </div>
  );
}
