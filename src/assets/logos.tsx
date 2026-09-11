import type { ImgHTMLAttributes } from 'react';

type Size = 32 | 48 | 64;
type Layout = 'side' | 'top';

const SIZE_TEXT: Record<Size, string> = { 32: 'text-xs', 48: 'text-sm', 64: 'text-base' };
const LAYOUT: Record<Layout, string> = { side: '', top: 'flex-col justify-center' };

interface PlatformLogoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt'> {
  label: string;
  size?: Size;
  layout?: Layout;
}

export function PlatformLogo({
  label,
  size = 32,
  layout = 'side',
  className,
  ...props
}: PlatformLogoProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-2 bg-background px-1 py-1.25 font-medium whitespace-nowrap text-gray-500 dark:text-ink-2',
        LAYOUT[layout],
        SIZE_TEXT[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <img
        className="block shrink-0"
        src={`/images/logo-placeholder-${size}.svg`}
        width={size}
        height={size}
        alt=""
        {...props}
      />
      <span>{label}</span>
    </span>
  );
}

export function YearOfAiLogo({
  label,
  width,
  onColor,
}: {
  label: string;
  width: number;
  onColor?: boolean;
}) {
  return (
    <a
      className="inline-flex rounded-xs focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
      href="https://sdaia.gov.sa/ar/default.aspx"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="block"
        src={onColor ? '/images/year-of-ai-logo-white.svg' : '/images/year-of-ai-logo.svg'}
        width={width}
        height={42}
        alt={label}
      />
    </a>
  );
}
