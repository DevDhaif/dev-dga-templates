import { Button, Card, CardHeader, CardIcon } from '@dev-dga/react';
import { UserGroupIcon } from '@/assets/dga-icons';
import { PlantIcon, PlusIcon, StarIcon } from '@/assets/icons';
import { useIsMobile } from '@/hooks/use-media-query';
import { useCopy } from '@/i18n/locale-context';
import { SectionHead } from './SectionHead';

const ICONS = { users: UserGroupIcon, plus: PlusIcon, star: StarIcon, plant: PlantIcon } as const;

export function AboutSection() {
  const c = useCopy().about;
  const mobile = useIsMobile();
  return (
    <section className="py-10" aria-labelledby="hp-about-title">
      <div className="hp-container grid gap-8">
        <SectionHead
          id="hp-about-title"
          title={c.title}
          description={c.description}
          descriptionClassName="max-w-[964px]"
          action={
            <Button variant="outline" size={mobile ? 'md' : 'lg'}>
              {c.action}
            </Button>
          }
        />
        <ul className="flex list-none flex-wrap justify-center gap-8">
          {c.stats.map((stat, i) => {
            const Icon = ICONS[stat.icon as keyof typeof ICONS];
            return (
              <Card key={i} asChild variant="plain" align="center">
                <li className="w-56 max-md:w-[139px]">
                  <CardHeader>
                    <CardIcon featured size="lg">
                      <Icon className="text-ink-brand" />
                    </CardIcon>
                    <p className="text-display-lg font-normal tracking-display text-sa-800 rtl:tracking-normal dark:text-primary">
                      {stat.value}
                    </p>
                    <p className="text-base text-gray-800 dark:text-card-foreground">
                      {stat.label}
                    </p>
                  </CardHeader>
                </li>
              </Card>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
