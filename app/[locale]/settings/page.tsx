'use client';

import { useRouter } from 'next/navigation';
import { useI18n } from '@/lib/i18n/I18nProvider';
import { CTAButton } from '@/components/CTAButton';
import { localize } from '@/lib/content/localize';
import { countries, type CountryCode } from '@/lib/content/countryRules';
import { localeNames, locales } from '@/lib/i18n/config';
import { usePrefs } from '@/lib/prefs/usePrefs';

export default function SettingsPage() {
  const { t, locale } = useI18n();
  const router = useRouter();
  const { prefs, setCountry } = usePrefs();

  return (
    <>
      <div className="content">
        <h1 style={{ marginTop: 16 }}>{t('settings.title')}</h1>
        <p className="muted">{t('settings.subtitle')}</p>

        <div className="card" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="field">
            <label htmlFor="country">{t('settings.country')}</label>
            <select
              id="country"
              value={prefs.country}
              onChange={(e) => setCountry(e.target.value as CountryCode)}
            >
              {countries.map((c) => (
                <option key={c.code} value={c.code}>
                  {localize(c.name, locale)}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label htmlFor="language">{t('settings.language')}</label>
            <select
              id="language"
              value={locale}
              onChange={(e) => router.push(`/${e.target.value}/settings`)}
            >
              {locales.map((l) => (
                <option key={l} value={l}>
                  {localeNames[l]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="button-zone">
        <CTAButton onClick={() => router.push(`/${locale}/overview`)}>
          {t('settings.cta')}
        </CTAButton>
      </div>
    </>
  );
}
