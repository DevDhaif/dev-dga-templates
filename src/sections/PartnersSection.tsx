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
import { useCopy } from '@/i18n/locale-context';
import { SectionHead } from './SectionHead';

export function PartnersSection() {
  const c = useCopy().partners;
  const mobile = useIsMobile();
  const tiles = Array.from({ length: c.count }, (_, i) => i);
  const slideSize = mobile
    ? `${c.tileWidth}px`
    : `calc((100% - ${(c.perRow - 1) * c.gap}px) / ${c.perRow})`;
  return (
    <section className="py-10" aria-labelledby="hp-partners-title">
      <div className="hp-container grid gap-8">
        <SectionHead id="hp-partners-title" title={c.title} />
      </div>
      <div className="hp-container mt-8 max-md:w-full">
        <Carousel
          aria-label={c.label}
          controls="arrows"
          arrowStyle="neutral"
          arrowSize={mobile ? 'sm' : 'md'}
          arrowGap={mobile ? '16px' : `${c.gap}px`}
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
          <CarouselViewport>
            {tiles.map((i) => (
              <CarouselSlide key={i}>
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
