import type { Metadata } from 'next';
import { Sora } from 'next/font/google';
import { defaultLocale } from '@/lib/i18n/config';
import '@/styles/globals.css';

const sora = Sora({ subsets: ['latin'], variable: '--font-sora' });

export const metadata: Metadata = {
  title: 'Cooltra Ride Academy',
  description: 'Learn to ride your Cooltra eBike safely.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang={defaultLocale} className={sora.variable}>
      <body>{children}</body>
    </html>
  );
}
