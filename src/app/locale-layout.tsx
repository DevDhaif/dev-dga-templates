import { useEffect } from 'react';
import { Navigate, Outlet, useParams } from 'react-router';
import { DEFAULT_LOCALE, dirFor, isLocale, type Locale } from '@/i18n/locale';
import { Providers } from './providers';

export function LocaleLayout() {
  const { locale } = useParams();
  if (!isLocale(locale)) return <Navigate to={`/${DEFAULT_LOCALE}`} replace />;
  return <LocaleShell locale={locale} />;
}

function LocaleShell({ locale }: { locale: Locale }) {
  useEffect(() => {
    const el = document.documentElement;
    el.lang = locale;
    el.dir = dirFor(locale);
  }, [locale]);

  return (
    <Providers locale={locale}>
      <Outlet />
    </Providers>
  );
}
