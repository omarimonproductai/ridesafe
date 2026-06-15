import { notFound } from 'next/navigation';
import { locales, isValidLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/getDictionary';
import { I18nProvider } from '@/lib/i18n/I18nProvider';
import { BrandFooter } from '@/components/BrandFooter';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!isValidLocale(params.locale)) notFound();
  const messages = await getDictionary(params.locale);

  return (
    <I18nProvider locale={params.locale} messages={messages}>
      <div className="app-bg">
        <div className="shell" lang={params.locale}>
          {children}
          <BrandFooter />
        </div>
      </div>
    </I18nProvider>
  );
}
