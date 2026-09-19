import { useEffect, useState } from 'react';
import {
  Carousel,
  CarouselDots,
  CarouselNext,
  CarouselPrevious,
  CarouselSlide,
  CarouselViewport,
} from '@dev-dga/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@/assets/icons';
import ndLogo from '@/assets/national-day/nd-logo.svg';
import { useIsMobile } from '@/hooks/use-media-query';
import { fill } from '@/i18n/format';
import { useCopy, useLocale } from '@/i18n/locale-context';
import { ND_CARD, ND_DECK, ND_PEEK, ND_SLIDES, deckSlot } from './slides';

const deckSide = (rtl: boolean) => (rtl ? 'left' : 'right');

const across = (rtl: boolean, near: string, far: string) =>
  `linear-gradient(to ${deckSide(rtl)}, ${far}, ${near})`;

function useTypewriter(word: string, on: boolean) {
  const [typed, setTyped] = useState(on ? 0 : word.length);

  useEffect(() => {
    if (!on) return;
    const id = setInterval(() => setTyped((n) => Math.min(n + 1, word.length)), 70);
    return () => clearInterval(id);
  }, [word.length, on]);

  return word.slice(0, typed);
}

export function NdHeroSection() {
  const c = useCopy().nationalDay.hero;
  const { dir } = useLocale();
  const rtl = dir === 'rtl';
  const mobile = useIsMobile();
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setAnimate(!query.matches);
    sync();
    query.addEventListener('change', sync);
    return () => query.removeEventListener('change', sync);
  }, []);

  return (
    <section
      className="relative isolate h-122.75 overflow-clip text-white max-md:h-auto"
      aria-label={c.label}
    >
      {ND_SLIDES.map((slide, i) => (
        <div
          key={slide.key}
          aria-hidden="true"
          className="absolute inset-0 -z-10 transition-opacity duration-500 motion-reduce:transition-none"
          style={{ opacity: i === index ? 1 : 0 }}
        >
          <div
            className="absolute inset-0"
            style={{ backgroundImage: across(rtl, slide.background.from, slide.background.to) }}
          />
          <div
            className="absolute inset-0 opacity-40"
            style={{ backgroundImage: across(rtl, slide.wash.from, slide.wash.to) }}
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className={
          mobile
            ? 'relative mx-auto mt-8 aspect-square w-[min(320px,78%)]'
            : 'absolute inset-y-0 inset-e-0'
        }
        style={mobile ? undefined : { inlineSize: ND_DECK }}
      >
        {ND_SLIDES.map((slide, i) => {
          const slot = deckSlot(i, index);
          const offset = (ND_SLIDES.length - 1 - slot) * ND_PEEK * (rtl ? -1 : 1);
          const front = i === index;
          return (
            <img
              key={slide.key}
              className={
                mobile
                  ? 'absolute inset-0 size-full transition-opacity duration-500 motion-reduce:transition-none'
                  : 'absolute top-0 inset-s-0 size-122.75 transition-transform duration-700 ease-out motion-reduce:transition-none'
              }
              style={
                mobile
                  ? { opacity: front ? 1 : 0 }
                  : { transform: `translateX(${offset}px)`, zIndex: slot }
              }
              src={slide.card}
              alt=""
              width={ND_CARD}
              height={ND_CARD}
            />
          );
        })}
      </div>

      <Carousel
        className="relative block h-full max-md:h-auto"
        aria-label={c.label}
        index={index}
        onIndexChange={setIndex}
        announce={(i, count) => fill(c.announce, { n: i + 1, m: count })}
        arrowStyle="primary"
        arrowSize="md"
        autoplay
        autoplayInterval={7000}
        loop
        flush
      >
        <div className="hp-container relative flex h-full flex-col items-start justify-end gap-8 py-10 max-md:h-auto">
          <img
            className="h-[80.3px] w-43.75 shrink-0"
            src={ndLogo}
            alt={c.logoAlt}
            width={175}
            height={81}
          />

          <CarouselViewport className="w-full">
            {ND_SLIDES.map((slide, i) => {
              const s = c.slides[slide.key];
              const Heading = i === 0 ? 'h1' : 'h2';
              return (
                <CarouselSlide key={slide.key} className="flex justify-start">
                  <div className="grid w-151 gap-6 max-md:w-full">
                    <Heading className="flex h-18 items-center justify-start gap-2 text-[74px] leading-18 font-normal tracking-[-1.48px] whitespace-nowrap ltr:text-[40px] ltr:tracking-normal max-md:h-auto max-md:flex-wrap max-md:text-display-sm max-md:whitespace-normal">
                      <span
                        className="order-2 text-[60px] font-bold tracking-[-1.2px] ltr:text-[34px] ltr:tracking-normal max-md:text-display-sm"
                        style={{ color: slide.accent }}
                      >
                        <Accent
                          key={`${slide.key}:${i === index}`}
                          word={s.accent}
                          active={i === index}
                          animate={animate}
                        />
                      </span>
                      <span className="order-1">{s.lead}</span>
                    </Heading>
                    <p className="min-h-30 text-xl max-md:min-h-0 max-md:text-base">
                      {s.description}
                    </p>
                  </div>
                </CarouselSlide>
              );
            })}
          </CarouselViewport>

          <div className="flex h-10 w-full items-center justify-start gap-2.5 max-md:justify-center">
            <CarouselPrevious label={c.prev}>
              <ArrowLeftIcon className="ddga-carousel__nav-icon" />
            </CarouselPrevious>
            <CarouselDots dotLabel={(i) => fill(c.slideLabel, { n: i + 1 })} />
            <CarouselNext label={c.next}>
              <ArrowRightIcon className="ddga-carousel__nav-icon" />
            </CarouselNext>
          </div>
        </div>
      </Carousel>
    </section>
  );
}

function Accent({ word, active, animate }: { word: string; active: boolean; animate: boolean }) {
  const shown = useTypewriter(word, active && animate);
  return (
    <>
      {shown}
      {animate && active && shown.length < word.length ? (
        <span className="ms-1 inline-block h-18 w-0.5 translate-y-[0.18em] bg-white align-middle" />
      ) : null}
    </>
  );
}
