import type { Metadata } from 'next';
import { defaultLocale } from '@/lib/i18n/config';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Cooltra Ride Academy',
  description: 'Learn to ride your Cooltra eBike safely.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale}>
      <body>{children}</body>
    </html>
  );
}
