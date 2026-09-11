import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { DgaProvider, NotificationToast } from '@dev-dga/react';
import { dirFor, type Locale } from '@/i18n/locale';
import { LocaleContext } from '@/i18n/locale-context';
import { ModeContext, type Mode } from './mode';

const MODE_STORAGE_KEY = 'hp-mode';

function readStoredMode(): Mode {
  try {
    return localStorage.getItem(MODE_STORAGE_KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function Providers({ locale, children }: { locale: Locale; children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(readStoredMode);
  const modeValue = useMemo(() => ({ mode, setMode }), [mode]);

  useEffect(() => {
    const el = document.documentElement;
    el.dataset.theme = mode;
    el.style.colorScheme = mode;
    try {
      localStorage.setItem(MODE_STORAGE_KEY, mode);
    } catch {
      // ignore
    }
  }, [mode]);

  return (
    <LocaleContext value={locale}>
      <ModeContext value={modeValue}>
        <DgaProvider dir={dirFor(locale)} locale={locale} mode={mode}>
          {children}
          <NotificationToast />
        </DgaProvider>
      </ModeContext>
    </LocaleContext>
  );
}
