import { useCopy } from '@/i18n/locale-context';

export function LastModifiedSection() {
  const c = useCopy();
  return <p className="hp-container py-4 text-right text-sm text-ink">{c.lastModified}</p>;
}
