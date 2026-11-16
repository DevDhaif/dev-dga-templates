import type { Locale } from '../locale';

const en = {
  breadcrumb: 'Breadcrumb',
  crumb: 'Link',
  carousel: 'carousel',
  slide: 'slide',
  slideOf: '{n} of {m}',
  announce: 'Slide {n} of {m}',
  goTo: 'Go to slide {n}',
};
const ar: typeof en = {
  breadcrumb: 'مسار التنقل',
  crumb: 'رابط',
  carousel: 'عرض شرائح',
  slide: 'شريحة',
  slideOf: '{n} من {m}',
  announce: 'الشريحة {n} من {m}',
  goTo: 'الانتقال إلى الشريحة {n}',
};

export const pageCopy: Record<Locale, typeof en> = { en, ar };
