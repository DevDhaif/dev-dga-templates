import {
  Card,
  Carousel,
  CarouselNext,
  CarouselPrevious,
  CarouselSlide,
  CarouselViewport,
} from '@dev-dga/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';
import { PlatformLogo } from '@/assets/logos';
import { useIsMobile } from '@/hooks/use-media-query';
import { fill } from '@/i18n/format';
import { useCopy, useLocale } from '@/i18n/locale-context';
import { pageCopy } from '@/i18n/pages/shared';
import { SectionHead } from './SectionHead';

export function PartnersSection() {
  const c = useCopy().partners;
  const ui = pageCopy[useLocale().locale];
  const mobile = useIsMobile();
  const tiles = Array.from({ length: c.count }, (_, i) => i);
  const slideSize = mobile
    ? `${c.tileWidth}px`
    : `calc((100% - ${(c.perRow - 1) * c.gap}px) / ${c.perRow})`;
  const arrowGap = mobile ? '0px' : `${Math.round(c.gap)}px`;
  return (
    <section className="overflow-clip py-10" aria-labelledby="hp-partners-title">
      <div className="hp-container grid gap-8">
        <SectionHead id="hp-partners-title" title={c.title} />
      </div>
      <div className="hp-container mt-8">
        <Carousel
          aria-label={c.label}
          aria-roledescription={ui.carousel}
          announce={(n, m) => fill(ui.announce, { n: n + 1, m })}
          controls="arrows"
          arrowStyle="neutral"
          arrowSize={mobile ? 'sm' : 'md'}
          arrowGap={arrowGap}
          arrowPlacement={mobile ? 'overlay' : 'flank'}
          slideSize={slideSize}
          gap={mobile ? '16px' : `${c.gap}px`}
          align="center"
          loop
          flush
        >
          <CarouselPrevious label={c.prev}>
            <ArrowLeftIcon className="ddga-carousel__nav-icon" />
          </CarouselPrevious>
          <CarouselViewport
            className={mobile ? 'mx-16 w-auto overflow-visible [contain:none]' : undefined}
          >
            {tiles.map((i) => (
              <CarouselSlide
                key={i}
                aria-roledescription={ui.slide}
                aria-label={fill(ui.slideOf, { n: i + 1, m: tiles.length })}
              >
                <Card className="h-[100px] items-center">
                  <PlatformLogo label={c.logo} size={32} layout="top" />
                </Card>
              </CarouselSlide>
            ))}
          </CarouselViewport>
          <CarouselNext label={c.next}>
            <ArrowRightIcon className="ddga-carousel__nav-icon" />
          </CarouselNext>
        </Carousel>
      </div>
    </section>
  );
}
