import { useEffect, useState } from 'react';
import { Divider, Link, List, ListItem } from '@dev-dga/react';
import { CheckmarkCircle02Icon, Link04Icon } from '@/assets/dga-icons';
import { fill } from '@/i18n/format';
import type { Locale } from '@/i18n/locale';
import { useLocale } from '@/i18n/locale-context';
import { contentCopy } from '@/i18n/pages/content';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  PageIntro,
  SecondNavSection,
} from '@/sections';

type Copy = (typeof contentCopy)['en'];
type ListKind = 'ordered' | 'unordered' | 'with-icon';
type Count = number | Record<Locale, number>;

type Block =
  | { p: Count; forms?: boolean }
  | { list: ListKind; levels: (1 | 2)[]; plain?: Locale }
  | { image: true }
  | { links: 'long' | 'short' }
  | { standalone: true };

interface Section {
  blocks: Block[];
  subs?: Block[][];
  gap?: 'tight';
}

const STANDARD: Section[] = [
  {
    blocks: [
      { p: 3 },
      { list: 'ordered', levels: [1, 2, 2, 2] },
      { list: 'unordered', levels: [1, 2, 2, 2] },
      { list: 'with-icon', levels: [1, 2, 2, 2] },
    ],
  },
  {
    blocks: [
      { p: 2 },
      { list: 'ordered', levels: [1, 2, 1, 1] },
      { list: 'unordered', levels: [1, 2, 1, 1] },
      { list: 'with-icon', levels: [1, 2, 1, 2], plain: 'en' },
    ],
  },
  {
    blocks: [{ p: { en: 3, ar: 16 }, forms: true }],
    subs: [[{ p: { en: 2, ar: 4 } }, { image: true }], [{ p: 6 }]],
  },
  { blocks: [{ links: 'long' }, { standalone: true }] },
];

const HEAVY: Section[] = [
  { blocks: [{ p: 3 }] },
  {
    blocks: [
      { p: 1 },
      { p: 1 },
      { p: 1 },
      { p: 1 },
      { list: 'ordered', levels: [1, 2, 2, 2] },
      { list: 'unordered', levels: [1, 2, 2, 2] },
      { p: 1 },
      { list: 'with-icon', levels: [1, 2, 2, 2] },
    ],
  },
  { blocks: [{ p: 2 }, { p: 2 }, { p: 2 }] },
  {
    blocks: [{ p: 1 }, { p: 1 }, { p: 1 }],
    subs: [
      [{ p: 2 }, { p: 2 }, { p: 2 }, { image: true }],
      [{ p: 2 }, { p: 2 }],
      [{ p: 2 }, { p: 2 }, { p: 2 }],
    ],
  },
  {
    blocks: [{ links: 'short' }, { links: 'short' }, { links: 'short' }, { standalone: true }],
    gap: 'tight',
  },
  { blocks: [{ p: 2 }, { p: 2 }, { p: 2 }, { p: 4 }, { p: 8 }] },
];

const count = (n: Count, locale: Locale) => (typeof n === 'number' ? n : n[locale]);

interface ViewProps {
  block: Block;
  c: Copy;
  heavy: boolean;
  locale: Locale;
}

function BlockView({ block, c, heavy, locale }: ViewProps) {
  if ('p' in block) {
    const text = block.forms ? c.formsParagraph : c.paragraph;
    return (
      <p className="text-base text-ink">
        {Array.from({ length: count(block.p, locale) }, () => text).join(' ')}
      </p>
    );
  }
  if ('list' in block) {
    const first =
      block.plain === locale
        ? c.listItem
        : block.list === 'ordered'
          ? c.orderedItem
          : block.list === 'unordered'
            ? c.unorderedItem
            : heavy
              ? c.iconItemHeavy
              : c.iconItem;
    return (
      <List variant={block.list} tone="neutral">
        {block.levels.map((level, i) => (
          <ListItem
            key={i}
            level={level}
            icon={block.list === 'with-icon' ? <CheckmarkCircle02Icon /> : undefined}
          >
            {level === 1 ? first : c.listItem}
          </ListItem>
        ))}
      </List>
    );
  }
  if ('image' in block) {
    return (
      <div
        role="img"
        aria-label={c.imageAlt}
        className="h-[379px] w-full bg-gray-100 dark:bg-muted"
      />
    );
  }
  if ('links' in block) {
    return block.links === 'long' ? (
      <p className="text-base text-ink">
        {c.linksBefore}{' '}
        <Link inline href="#">
          {c.inlineLink}
        </Link>{' '}
        {c.linksAfter}
      </p>
    ) : (
      <p className="text-base text-ink">{c.linksShort}</p>
    );
  }
  return (
    <span className="justify-self-start">
      <Link inline href="#" endIcon={<Link04Icon />}>
        {c.standaloneLink}
      </Link>
    </span>
  );
}

function SectionView({
  section,
  n,
  c,
  heavy,
  locale,
}: {
  section: Section;
  n: number;
  c: Copy;
  heavy: boolean;
  locale: Locale;
}) {
  return (
    <section
      id={`section-${n}`}
      className="grid scroll-mt-6 gap-6"
      aria-labelledby={`section-${n}-title`}
    >
      <div className="grid gap-2">
        <h2 id={`section-${n}-title`} className="text-display-sm font-bold text-ink">
          {fill(c.section, { n })}
        </h2>
        <div className={`grid ${section.gap === 'tight' ? 'gap-2' : 'gap-4'}`}>
          {section.blocks.map((b, i) => (
            <BlockView key={i} block={b} c={c} heavy={heavy} locale={locale} />
          ))}
        </div>
      </div>
      {section.subs?.map((sub, s) => (
        <section key={s} id={`section-${n}-${s + 1}`} className="grid scroll-mt-6 gap-2">
          <h3 className="text-display-xs font-bold text-ink">
            <span className="inline-block w-9 ps-1.5 rtl:ps-2">{s + 1}.</span>
            {fill(c.subSection, { n: s + 1 })}
          </h3>
          <div className="grid gap-4">
            {sub.map((b, i) => (
              <BlockView key={i} block={b} c={c} heavy={heavy} locale={locale} />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}

interface TocItem {
  id: string;
  label: string;
  level: 1 | 2;
}

/** Highlights the section nearest the top of the viewport. */
function useActiveSection(ids: string[]): [string, (id: string) => void] {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    const inView = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) inView.add(e.target.id);
          else inView.delete(e.target.id);
        }
        const current = ids.findLast((id) => inView.has(id));
        if (current) setActive(current);
      },
      { rootMargin: '-20% 0px -70% 0px' },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);
  return [active, setActive];
}

function Toc({ c, items }: { c: Copy; items: TocItem[] }) {
  const [ids] = useState(() => items.map((i) => i.id));
  const [active, setActive] = useActiveSection(ids);
  return (
    <nav
      aria-label={c.tocLabel}
      className="grid w-[222px] shrink-0 content-start gap-2 self-start lg:sticky lg:top-6"
    >
      <p className="text-sm font-medium text-ink-secondary">{c.tocLabel}</p>
      <p className="text-xl font-semibold text-gray-800 dark:text-ink">{c.tocTitle}</p>
      <ul className="m-0 grid list-none p-0">
        {items.map((item) => {
          const selected = item.id === active;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={selected ? 'location' : undefined}
                onClick={() => setActive(item.id)}
                className={`group relative flex min-h-8 items-stretch rounded-xs ps-4 pe-2 text-sm no-underline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ink ${
                  selected
                    ? 'font-semibold text-ink before:absolute before:inset-y-0 before:start-0 before:w-[3px] before:rounded-full before:bg-primary focus-visible:before:hidden'
                    : 'text-ink-secondary hover:bg-gray-100 hover:text-ink hover:before:absolute hover:before:inset-y-0 hover:before:start-0 hover:before:w-[3px] hover:before:rounded-full hover:before:bg-gray-400 active:bg-gray-200 active:before:bg-gray-800 dark:hover:bg-muted dark:active:bg-gray-700 dark:active:before:bg-ink'
                }`}
              >
                {item.level === 2 && (
                  <span
                    aria-hidden="true"
                    className="w-4 shrink-0 border-s-2 border-gray-300 dark:border-gray-700"
                  />
                )}
                <span className="py-1.5">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function tocItems(c: Copy, sections: Section[]): TocItem[] {
  return sections.slice(0, 5).flatMap((section, i): TocItem[] => [
    { id: `section-${i + 1}`, label: fill(c.section, { n: i + 1 }), level: 1 },
    ...(section.subs ?? []).map((_, s): TocItem => ({
      id: `section-${i + 1}-${s + 1}`,
      label: fill(c.subSection, { n: s + 1 }),
      level: 2,
    })),
  ]);
}

export function ContentPage({ heavy = false }: { heavy?: boolean }) {
  const { locale } = useLocale();
  const c = contentCopy[locale];
  const sections = heavy ? HEAVY : STANDARD;
  const title = heavy ? c.heavyTitle : c.standardTitle;

  const body = (
    <div className="grid min-w-0 flex-1 content-start gap-8">
      {sections.map((s, i) => (
        <SectionView key={i} section={s} n={i + 1} c={c} heavy={heavy} locale={locale} />
      ))}
    </div>
  );

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <article className="py-10" aria-labelledby="content-title">
          <div className="hp-container grid gap-8">
            <div className="grid gap-6">
              <PageIntro
                id="content-title"
                title={title}
                titleClassName="text-display-lg font-bold text-ink"
              />
              <p className="text-lg font-semibold text-ink">
                {heavy ? c.heavyLead : c.standardLead}
              </p>
              <p className="text-base text-ink">{heavy ? c.heavyIntro : c.standardIntro}</p>
            </div>
            <Divider />
            {heavy ? (
              <div className="flex gap-8 max-lg:flex-col">
                <Toc key={locale} c={c} items={tocItems(c, sections)} />
                {body}
              </div>
            ) : (
              body
            )}
          </div>
        </article>
        <FeedbackSection />
      </main>
      <FooterSection />
    </>
  );
}
