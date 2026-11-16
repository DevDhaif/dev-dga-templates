import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Carousel,
  CarouselDots,
  CarouselSlide,
  CarouselViewport,
  Tag,
} from '@dev-dga/react';
import { CheckCircleIcon } from '@/assets/icons';
import { useIsMobile } from '@/hooks/use-media-query';
import { fill } from '@/i18n/format';
import { useCopy, useLocale } from '@/i18n/locale-context';
import { pageCopy } from '@/i18n/pages/shared';
import { SectionHead } from './SectionHead';

const TAG_VARIANTS = ['success-subtle', 'info-subtle', 'secondary-subtle'] as const;

export function ServicesSection() {
  const c = useCopy().services;
  const ui = pageCopy[useLocale().locale];
  const mobile = useIsMobile();
  const cards = Array.from({ length: mobile ? c.mobileCount : c.count }, (_, i) => i);
  return (
    <section
      className="overflow-clip bg-gray-50 py-10 dark:bg-muted"
      aria-labelledby="hp-services-title"
    >
      <div className="hp-container">
        <SectionHead
          id="hp-services-title"
          title={c.title}
          description={c.description}
          action={
            <Button variant="outline" size={mobile ? c.mobileAction : 'lg'}>
              {c.viewAll}
            </Button>
          }
        />
      </div>
      <div className="hp-container mt-8">
        <Carousel
          className="px-6"
          aria-label={c.label}
          aria-roledescription={ui.carousel}
          announce={(n, m) => fill(ui.announce, { n: n + 1, m })}
          controls="dots"
          slideSize="320px"
          gap="16px"
          align="center"
          flush
        >
          {/* Pages are sized inside the 24px inset, as in the frames; the neighbours still peek to the section edge. */}
          <CarouselViewport className="overflow-visible [contain:none]">
            {cards.map((i) => (
              <CarouselSlide
                key={i}
                aria-roledescription={ui.slide}
                aria-label={fill(ui.slideOf, { n: i + 1, m: cards.length })}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardIcon featured>
                      <CheckCircleIcon />
                    </CardIcon>
                    <CardTitle>{c.card.title}</CardTitle>
                    <CardDescription>{c.card.description}</CardDescription>
                  </CardHeader>
                  <div className="flex flex-wrap gap-2">
                    {c.card.tags.map((tag, t) => (
                      <Tag key={t} variant={TAG_VARIANTS[t] ?? 'default'} shape="squared">
                        {tag}
                      </Tag>
                    ))}
                  </div>
                  <CardFooter className="mt-auto">
                    <Button variant="outline" size="lg">
                      {c.card.secondary}
                    </Button>
                    <Button size="lg">{c.card.primary}</Button>
                  </CardFooter>
                </Card>
              </CarouselSlide>
            ))}
          </CarouselViewport>
          <CarouselDots dotLabel={(i) => fill(c.pageLabel, { n: i + 1 })} />
        </Carousel>
      </div>
    </section>
  );
}
