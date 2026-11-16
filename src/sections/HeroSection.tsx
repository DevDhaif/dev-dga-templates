import { Button, Carousel, CarouselDots, CarouselSlide, CarouselViewport } from '@dev-dga/react';
import { fill } from '@/i18n/format';
import { useCopy, useLocale } from '@/i18n/locale-context';
import { pageCopy } from '@/i18n/pages/shared';

export function HeroSection() {
  const c = useCopy().hero;
  const ui = pageCopy[useLocale().locale];
  const slides = Array.from({ length: c.count }, (_, i) => i);
  return (
    <section className="relative isolate flex min-h-[491px] flex-col justify-end overflow-clip pt-10 pb-8 text-white">
      <img
        className="absolute inset-0 -z-10 size-full object-cover object-[center_64%] max-md:hidden"
        src="/images/hero-photo.jpg"
        alt=""
      />
      <div
        className="absolute inset-0 -z-10 bg-sa-950/80 max-md:bg-linear-to-tr max-md:from-sa-800 max-md:to-sa-600"
        aria-hidden="true"
      />
      <div className="hp-container relative">
        <Carousel
          aria-label={c.label}
          aria-roledescription={ui.carousel}
          announce={(n, m) => fill(ui.announce, { n: n + 1, m })}
          controls="dots"
          flush
        >
          <CarouselViewport>
            {slides.map((i) => (
              <CarouselSlide
                key={i}
                aria-roledescription={ui.slide}
                aria-label={fill(ui.slideOf, { n: i + 1, m: slides.length })}
                className="grid justify-items-start gap-8"
              >
                <div className="grid max-w-[624px] gap-6">
                  {i === 0 ? (
                    <h1 className="text-display-xl font-semibold tracking-display wrap-anywhere rtl:tracking-normal">
                      {c.title}
                    </h1>
                  ) : (
                    <h2 className="text-display-xl font-semibold tracking-display wrap-anywhere rtl:tracking-normal">
                      {c.title}
                    </h2>
                  )}
                  <p className="text-xl">{c.description}</p>
                </div>
                <Button size="lg" onColor>
                  {c.cta}
                </Button>
              </CarouselSlide>
            ))}
          </CarouselViewport>
          <CarouselDots dotLabel={(i) => fill(c.slideLabel, { n: i + 1 })} />
        </Carousel>
      </div>
    </section>
  );
}
