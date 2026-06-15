'use client';

import { useEffect } from 'react';
import { defaultLocale } from '@/lib/i18n/config';

export default function RootPage() {
  useEffect(() => {
    // Relative redirect keeps working regardless of basePath (GitHub Pages
    // serves the site under /<repo>/). With trailingSlash, '/' resolves to
    // '<basePath>/', so 'es/' becomes '<basePath>/es/'.
    window.location.replace(new URL(`${defaultLocale}/`, window.location.href).toString());
  }, []);

  return (
    <p style={{ fontFamily: 'Arial, sans-serif', padding: 24 }}>
      Redirecting… <a href={`${defaultLocale}/`}>Continue</a>
    </p>
  );
}
