import { Link as RouterLink } from 'react-router';
import { Button } from '@dev-dga/react';
import { useCopy, useLocale } from '@/i18n/locale-context';

export function NotFoundPage() {
  const c = useCopy();
  const { locale } = useLocale();

  return (
    <main className="hp-container">
      <h1>{c.notFound.title}</h1>
      <Button asChild>
        <RouterLink to={`/${locale}`}>{c.notFound.back}</RouterLink>
      </Button>
    </main>
  );
}
