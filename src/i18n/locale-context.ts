import { createContext, useContext } from 'react';
import { copy, type Copy } from './copy';
import { DEFAULT_LOCALE, dirFor, type Dir, type Locale } from './locale';

export const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export function useLocale(): { locale: Locale; dir: Dir } {
  const locale = useContext(LocaleContext);
  return { locale, dir: dirFor(locale) };
}

export function useCopy(): Copy {
  return copy[useContext(LocaleContext)];
}

export function useLocalizedPath(): (path: string) => string {
  const locale = useContext(LocaleContext);
  return (path) => `/${locale}${path.startsWith('/') ? path : `/${path}`}`;
}
