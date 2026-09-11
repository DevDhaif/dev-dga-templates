import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
  Carousel,
  CarouselDots,
  CarouselSlide,
  CarouselViewport,
} from '@dev-dga/react';
import { useIsMobile } from '@/hooks/use-media-query';
import { fill } from '@/i18n/format';
import type { Copy } from '@/i18n/copy';
import { useCopy } from '@/i18n/locale-context';
import { SectionHead } from './SectionHead';

function NewsCard({ card, mobile }: { card: Copy['news']['card']; mobile?: boolean }) {
  return (
    <Card className="h-full">
      <CardImage src="/images/news.jpg" alt="" aspectRatio="auto" style={{ blockSize: 250 }} />
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription className="max-md:min-h-24">
          {mobile ? card.mobileDescription : card.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="mt-auto">
        <Button size="lg">{card.readMore}</Button>
      </CardFooter>
    </Card>
  );
}

export function NewsSection() {
  const c = useCopy().news;
  const mobile = useIsMobile();
  const head = (
    <SectionHead
      id="hp-news-title"
      title={c.title}
      description={c.description}
      action={
        <Button variant="outline" size={mobile ? 'md' : 'lg'}>
          {c.viewAll}
        </Button>
      }
    />
  );

  if (mobile) {
    const cards = Array.from({ length: c.mobileCount }, (_, i) => i);
    return (
      <section className="py-10" aria-labelledby="hp-news-title">
        <div className="hp-container">{head}</div>
        <div className="mt-8">
          <Carousel
            aria-label={c.label}
            controls="dots"
            slideSize={`min(${c.mobileSlide}px, 100% - 48px)`}
            gap="16px"
            align="center"
            flush
          >
            <CarouselViewport>
              {cards.map((i) => (
                <CarouselSlide key={i}>
                  <NewsCard card={c.card} mobile />
                </CarouselSlide>
              ))}
            </CarouselViewport>
            <CarouselDots dotLabel={(i) => fill(c.pageLabel, { n: i + 1 })} />
          </Carousel>
        </div>
      </section>
    );
  }

  const cards = Array.from({ length: c.count }, (_, i) => i);
  return (
    <section className="py-10" aria-labelledby="hp-news-title">
      <div className="hp-container grid gap-8">
        {head}
        <ul className="grid list-none grid-cols-3 gap-4 max-lg:grid-cols-2">
          {cards.map((i) => (
            <li key={i}>
              <NewsCard card={c.card} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
