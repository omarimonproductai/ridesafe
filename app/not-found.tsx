import Link from 'next/link';
import { defaultLocale } from '@/lib/i18n/config';

export default function NotFound() {
  return (
    <div className="app-bg">
      <div className="shell">
        <div className="content">
          <div className="center-col">
            <div className="hero-illustration" aria-hidden>
              🔍
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
      </div>
    </div>
  );
}
