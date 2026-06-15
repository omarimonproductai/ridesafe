'use client';

import { useCallback, useEffect, useState } from 'react';
import type { CountryCode } from '@/lib/content/countryRules';

const STORAGE_KEY = 'cra:prefs';

export type Prefs = { country: CountryCode };

const defaultPrefs: Prefs = { country: 'ES' };

export function usePrefs() {
  const [prefs, setPrefs] = useState<Prefs>(defaultPrefs);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) {
      try {
        setPrefs({ ...defaultPrefs, ...JSON.parse(raw) });
      } catch {
        /* ignore malformed prefs */
      }
    }
    setHydrated(true);
  }, []);

  const setCountry = useCallback((country: CountryCode) => {
    setPrefs((prev) => {
      const next = { ...prev, country };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, []);

  return { hydrated, prefs, setCountry };
}
