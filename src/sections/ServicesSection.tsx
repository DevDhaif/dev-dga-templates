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
import { useCopy } from '@/i18n/locale-context';
import { SectionHead } from './SectionHead';

const TAG_VARIANTS = ['success-subtle', 'info-subtle', 'default'] as const;

export function ServicesSection() {
  const c = useCopy().services;
  const mobile = useIsMobile();
  const cards = Array.from({ length: mobile ? c.mobileCount : c.count }, (_, i) => i);
  return (
    <section className="bg-gray-50 py-10 dark:bg-muted" aria-labelledby="hp-services-title">
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
      <div className="mt-8">
        <Carousel
          aria-label={c.label}
          controls="dots"
          slideSize="320px"
          gap="16px"
          align="center"
          flush
        >
          <CarouselViewport>
            {cards.map((i) => (
              <CarouselSlide key={i}>
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
