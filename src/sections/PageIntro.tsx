import { Link as RouterLink } from 'react-router';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@dev-dga/react';
import { useLocale, useLocalizedPath } from '@/i18n/locale-context';
import { pageCopy } from '@/i18n/pages/shared';

interface PageIntroProps {
  id: string;
  title: string;
  crumbs?: { home: string; current: string };
  description?: string;
  descriptionClassName?: string;
  variant?: 'default' | 'hero' | 'compact';
  titleClassName?: string;
}

export function PageIntro({
  id,
  title,
  crumbs,
  description,
  descriptionClassName = '',
  variant = 'default',
  titleClassName,
}: PageIntroProps) {
  const hero = variant === 'hero';
  const { locale } = useLocale();
  const c = pageCopy[locale];
  const to = useLocalizedPath();
  return (
    <div className={hero ? 'grid gap-4' : variant === 'compact' ? 'grid gap-2' : 'grid gap-6'}>
      <Breadcrumb aria-label={c.breadcrumb}>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <RouterLink to={to('/home')}>{crumbs?.home ?? c.crumb}</RouterLink>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{crumbs?.current ?? c.crumb}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="grid gap-4">
        <h1
          id={id}
          className={
            titleClassName ??
            (hero
              ? 'text-display-md font-semibold text-ink max-md:text-display-sm max-md:font-bold'
              : 'text-display-sm font-bold text-ink')
          }
        >
          {title}
        </h1>
        {description ? (
          <p
            className={`${hero ? 'text-xl max-md:text-base' : 'text-base'} text-ink ${descriptionClassName}`}
          >
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
