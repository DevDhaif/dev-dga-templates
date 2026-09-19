import newsPattern from '@/assets/national-day/news-pattern.svg';
import { NewsSection } from '@/sections/NewsSection';
import { useLocale } from '@/i18n/locale-context';

const VEIL_ANGLE_RTL = 249.674;

export function NdNewsSection() {
  const { dir } = useLocale();
  const angle = dir === 'rtl' ? VEIL_ANGLE_RTL : 360 - VEIL_ANGLE_RTL;

  return (
    <div className="relative isolate [&>section]:pb-16">
      <img
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full object-cover ltr:-scale-x-100"
        src={newsPattern}
        alt=""
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(${angle}deg, var(--ddga-color-background) 43.574%, color-mix(in srgb, var(--ddga-color-background) 40%, transparent) 95.423%)`,
        }}
      />
      <NewsSection />
    </div>
  );
}
