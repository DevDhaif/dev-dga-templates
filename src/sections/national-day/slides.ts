import cardAuthenticity from '@/assets/national-day/card-authenticity.webp';
import cardCourage from '@/assets/national-day/card-courage.webp';
import cardDetermination from '@/assets/national-day/card-determination.webp';
import cardGenerosity from '@/assets/national-day/card-generosity.webp';
import cardGiving from '@/assets/national-day/card-giving.webp';
import cardVision from '@/assets/national-day/card-vision.webp';
import type { Copy } from '@/i18n/copy';

export type SlideKey = keyof Copy['nationalDay']['hero']['slides'];

interface Gradient {
  from: string;
  to: string;
}

export interface NdSlide {
  key: SlideKey;
  card: string;
  background: Gradient;
  wash: Gradient;
  accent: string;
}

export const ND_CARD = 491;
export const ND_PEEK = 45.8;
export const ND_DECK = ND_CARD + ND_PEEK * 5;

export const ND_SLIDES: NdSlide[] = [
  {
    key: 'vision',
    card: cardVision,
    background: { from: '#7c5d21', to: '#211501' },
    wash: { from: '#e8c589', to: '#7c5d21' },
    accent: '#d8b67a',
  },
  {
    key: 'giving',
    card: cardGiving,
    background: { from: '#6565e0', to: '#2b286a' },
    wash: { from: '#e2dcf9', to: '#6565e0' },
    accent: '#ded8f7',
  },
  {
    key: 'generosity',
    card: cardGenerosity,
    background: { from: '#0050af', to: '#011d3a' },
    wash: { from: '#4da6ff', to: '#0050af' },
    accent: '#07b9ff',
  },
  {
    key: 'determination',
    card: cardDetermination,
    background: { from: '#971a4d', to: '#320016' },
    wash: { from: '#ff55a2', to: '#971a4d' },
    accent: '#ff85c7',
  },
  {
    key: 'courage',
    card: cardCourage,
    background: { from: '#607c4f', to: '#17220f' },
    wash: { from: '#cfe5c1', to: '#607c4f' },
    accent: '#c9e0bb',
  },
  {
    key: 'authenticity',
    card: cardAuthenticity,
    background: { from: '#0ec60e', to: '#1f532d' },
    wash: { from: '#00894a', to: '#0ec60e' },
    accent: '#ebffe6',
  },
];

export function deckSlot(card: number, index: number): number {
  const n = ND_SLIDES.length;
  return n - 1 - ((((card - index) % n) + n) % n);
}
