import type { ComponentType, CSSProperties } from 'react';
import { Link as RouterLink } from 'react-router';
import { Button } from '@dev-dga/react';
import {
  Alert02Icon,
  Cancel01Icon,
  Cancel02Icon,
  CancelCircleIcon,
  CancelSquareIcon,
  SearchRemoveIcon,
  UnavailableIcon,
} from '@/assets/dga-icons';
import { useLocale, useLocalizedPath } from '@/i18n/locale-context';
import { miscCopy } from '@/i18n/pages/misc';
import { DigitalStampSection, FooterSection, HeaderSection, SecondNavSection } from '@/sections';

type Icon = ComponentType<{ className?: string; style?: CSSProperties }>;
type Mark = [Icon, x: number, y: number, size: number];

interface Art {
  width: number;
  height: number;
  text: [x: number, y: number, width: number, size: number, lineHeight: number];
  large: number;
  marks: Mark[];
}

const DESKTOP: Art = {
  width: 458,
  height: 324,
  text: [53, 16, 352, 200, 300],
  large: 24,
  marks: [
    [Cancel01Icon, 81, 278, 24],
    [CancelCircleIcon, 205, 29, 24],
    [CancelSquareIcon, 434, 117, 24],
    [CancelSquareIcon, 395, 269, 24],
    [Cancel02Icon, 57, 67, 24],
    [UnavailableIcon, 257, 297, 24],
    [UnavailableIcon, 351, 25, 24],
    [SearchRemoveIcon, 1, 214, 24],
    [Alert02Icon, 434, 29, 16],
    [Alert02Icon, 316, 265, 16],
    [Cancel01Icon, 16, 131, 16],
    [CancelCircleIcon, 145, 308, 16],
    [Cancel02Icon, 281, 0, 16],
    [UnavailableIcon, 442, 198, 16],
    [SearchRemoveIcon, 105, 21, 16],
  ],
};

const MOBILE: Art = {
  width: 332,
  height: 239,
  text: [53, 74, 226, 128, 90],
  large: 18,
  marks: [
    [Alert02Icon, 314, 21, 12],
    [Alert02Icon, 227, 195, 12],
    [Cancel01Icon, 54, 205, 18],
    [Cancel01Icon, 6, 97, 12],
    [CancelCircleIcon, 145, 21, 18],
    [CancelCircleIcon, 101, 227, 12],
    [CancelSquareIcon, 314, 86, 18],
    [CancelSquareIcon, 285, 198, 18],
    [Cancel02Icon, 201, 0, 12],
    [Cancel02Icon, 36, 49, 18],
    [UnavailableIcon, 184, 219, 18],
    [UnavailableIcon, 253, 18, 18],
    [UnavailableIcon, 320, 146, 12],
    [SearchRemoveIcon, 0, 158, 18],
    [SearchRemoveIcon, 72, 15, 12],
  ],
};

function Illustration({ art, className }: { art: Art; className: string }) {
  const { width: W, height: H } = art;
  const [x, y, w, size, lineHeight] = art.text;
  const pct = (n: number, of: number) => `${(n / of) * 100}%`;
  return (
    <div
      className={`@container relative w-full ${className}`}
      style={{ aspectRatio: `${W} / ${H}`, maxWidth: W }}
      dir="ltr"
      aria-hidden="true"
    >
      <span
        className="absolute font-bold tracking-[-0.02em] whitespace-nowrap text-ink-secondary"
        style={{
          left: pct(x, W),
          top: pct(y, H),
          width: pct(w, W),
          fontSize: `${(size / W) * 100}cqi`,
          lineHeight: lineHeight / size,
        }}
      >
        404
      </span>
      {art.marks.map(([Mark, mx, my, ms], i) => (
        <Mark
          key={i}
          className={`absolute h-auto ${ms === art.large ? 'text-gray-400 dark:text-gray-500' : 'text-gray-300 dark:text-gray-600'}`}
          style={{ left: pct(mx, W), top: pct(my, H), width: pct(ms, W) }}
        />
      ))}
    </div>
  );
}

export function NotFoundPage() {
  const { locale } = useLocale();
  const c = miscCopy[locale].notFound;
  const to = useLocalizedPath();

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <section
          className="grid justify-items-center gap-16 px-4 py-20 text-center max-md:pt-10 max-md:pb-[97px]"
          aria-labelledby="not-found-title"
        >
          <Illustration art={DESKTOP} className="max-md:hidden" />
          <Illustration art={MOBILE} className="md:hidden" />
          <div className="grid justify-items-center gap-8">
            <div className="grid gap-4">
              <h1
                id="not-found-title"
                className="text-display-xs font-semibold text-ink max-md:font-medium"
              >
                {c.title}
              </h1>
              <p className="text-lg text-ink">{c.body}</p>
            </div>
            <Button asChild size="lg">
              <RouterLink to={to('/home')}>{c.cta}</RouterLink>
            </Button>
          </div>
        </section>
      </main>
      <FooterSection />
    </>
  );
}
