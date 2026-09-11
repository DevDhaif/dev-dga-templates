import type { ReactNode } from 'react';

interface SectionHeadProps {
  id: string;
  title: string;
  description?: string;
  action?: ReactNode;
  descriptionClassName?: string;
}

export function SectionHead({
  id,
  title,
  description,
  action,
  descriptionClassName = 'max-w-paragraph',
}: SectionHeadProps) {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between gap-8">
        <h2 id={id} className="min-w-0 flex-1 text-display-sm font-bold text-ink">
          {title}
        </h2>
        {action}
      </div>
      {description ? (
        <p className={`text-base text-ink ${descriptionClassName}`}>{description}</p>
      ) : null}
    </div>
  );
}
