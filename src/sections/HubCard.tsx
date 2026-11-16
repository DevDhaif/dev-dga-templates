import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
} from '@dev-dga/react';
import { ArrowRight02Icon } from '@/assets/dga-icons';

interface HubCardProps {
  icon: ReactNode;
  title: string;
  to: string;
  description?: ReactNode;
  descriptionClassName?: string;
}

export function HubCard({ icon, title, to, description, descriptionClassName = '' }: HubCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardIcon featured>{icon}</CardIcon>
        <CardTitle asChild>
          <h2>{title}</h2>
        </CardTitle>
        {description ? (
          <CardDescription asChild>
            <div className={`grid content-start gap-4 ${descriptionClassName}`}>{description}</div>
          </CardDescription>
        ) : null}
      </CardHeader>
      <CardFooter className="mt-auto justify-end">
        <Button asChild variant="secondary" size="lg" aria-label={title} className="w-14 text-ink">
          <RouterLink to={to}>
            <ArrowRight02Icon className="size-6 rtl:-scale-x-100" />
          </RouterLink>
        </Button>
      </CardFooter>
    </Card>
  );
}
