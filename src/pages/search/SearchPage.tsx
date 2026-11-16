import { Suspense, lazy, useState, type ReactNode } from 'react';
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Chip,
  ContentSwitcher,
  ContentSwitcherItem,
  Filtration,
  FiltrationCheckboxFilter,
  FiltrationFooter,
  FiltrationOption,
  FiltrationOptionList,
  FiltrationPanel,
  FiltrationResults,
  FiltrationSection,
  FiltrationTrigger,
  Link,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationOverflow,
  PaginationPrevious,
  Radio,
  RadioGroup,
  SearchBox,
  Slider,
  Tag,
  TextInput,
  TextInputAffix,
  paginationRange,
  type SliderValue,
} from '@dev-dga/react';
import {
  Add01Icon,
  ArrowDown01Icon,
  Cancel01Icon,
  FilterIcon,
  GridViewIcon,
  Layout2RowIcon,
  ListViewIcon,
  Remove01Icon,
  SortByDown02Icon,
  SortByUp02Icon,
  Sorting05Icon,
} from '@/assets/dga-icons';
import { useIsMobile } from '@/hooks/use-media-query';
import { fill } from '@/i18n/format';
import { useLocale } from '@/i18n/locale-context';
import { miscCopy } from '@/i18n/pages/misc';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  SecondNavSection,
} from '@/sections';

const DatePicker = lazy(() =>
  import('@dev-dga/react/date-picker').then((m) => ({ default: m.DatePicker })),
);

type Layout = 'grid' | 'cards' | 'list';
type SortState = 'none' | 'asc' | 'desc';

const LAYOUTS: Layout[] = ['grid', 'cards', 'list'];
const PAGE_COUNT = 999;
const RESULT_COUNT: Record<Layout, [desktop: number, mobile: number]> = {
  grid: [15, 6],
  cards: [6, 6],
  list: [8, 8],
};
const CHECK_OPTIONS = 22;
const OPTION_COUNT = 22;
const CHOICES = 5;
const CHIPS = 8;

const SORT_ICON: Record<SortState, ReactNode> = {
  none: <Sorting05Icon />,
  asc: <SortByDown02Icon />,
  desc: <SortByUp02Icon />,
};

const LAYOUT_ICON: Record<Layout, ReactNode> = {
  grid: <GridViewIcon className="size-5" />,
  cards: <Layout2RowIcon className="size-5" />,
  list: <ListViewIcon className="size-5" />,
};

interface Filters {
  checks: string[];
  single: string;
  radio: string;
  chips: string[];
  rating: string;
  date: Date | null;
}

const EMPTY: Filters = { checks: [], single: '', radio: '', chips: [], rating: '', date: null };
const DEFAULTS: Filters = { ...EMPTY, checks: ['option-2', 'option-3'], radio: 'radio-1' };

function selectionCount(f: Filters) {
  return (
    f.checks.length + f.chips.length + [f.single, f.radio, f.rating, f.date].filter(Boolean).length
  );
}

function Highlight({ text, term }: { text: string; term: string }) {
  const q = term.trim().toLowerCase();
  const at = q ? text.toLowerCase().indexOf(q) : -1;
  if (at < 0) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark className="bg-gold-100 text-inherit dark:bg-gold-900">
        {text.slice(at, at + q.length)}
      </mark>
      {text.slice(at + q.length)}
    </>
  );
}

export function SearchPage() {
  const { locale } = useLocale();
  const c = miscCopy[locale].search;
  const mobile = useIsMobile();

  const [searched, setSearched] = useState('');
  const [layout, setLayout] = useState<Layout>('grid');
  const [sort, setSort] = useState<SortState>('none');
  const [page, setPage] = useState(1);
  const [pending, setPending] = useState<Filters>(DEFAULTS);
  const [applied, setApplied] = useState<Filters>(EMPTY);
  const [optionQuery, setOptionQuery] = useState('');
  const [range, setRange] = useState<SliderValue>([20, 70]);
  const [min, setMin] = useState('10000');
  const [max, setMax] = useState('10000');

  const set = <K extends keyof Filters>(key: K, value: Filters[K]) =>
    setPending((prev) => ({ ...prev, [key]: value }));

  const checkOptions = Array.from({ length: CHECK_OPTIONS }, (_, i) => ({
    value: `option-${i + 1}`,
    label: fill(c.option, { n: i + 1 }),
    count: OPTION_COUNT,
  }));
  const choices = Array.from({ length: CHOICES }, (_, i) => fill(c.choice, { n: i + 1 }));
  const chipItems = Array.from({ length: CHIPS }, (_, i) => fill(c.item, { n: i + 1 }));
  const ratings = [
    { value: 'highest', label: c.highest },
    { value: 'lowest', label: c.lowest },
  ];
  const q = optionQuery.trim().toLowerCase();
  const noMatch = q !== '' && !checkOptions.some((o) => o.label.toLowerCase().includes(q));
  const indexOf = (value: string) => Number(value.split('-')[1]) - 1;
  const dateFormat = new Intl.DateTimeFormat(
    locale === 'ar' ? 'ar-SA-u-ca-gregory-nu-latn' : 'en-GB',
    {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    },
  );

  type AppliedChip = { id: string; label: string; remove: (f: Filters) => Filters };
  const appliedChips: AppliedChip[] = [
    ...applied.checks.map((v) => ({
      id: v,
      label: checkOptions[indexOf(v)].label,
      remove: (f: Filters) => ({ ...f, checks: f.checks.filter((x) => x !== v) }),
    })),
    ...(applied.single
      ? [
          {
            id: 'single',
            label: choices[indexOf(applied.single)],
            remove: (f: Filters) => ({ ...f, single: '' }),
          },
        ]
      : []),
    ...(applied.radio
      ? [
          {
            id: 'radio',
            label: choices[indexOf(applied.radio)],
            remove: (f: Filters) => ({ ...f, radio: '' }),
          },
        ]
      : []),
    ...applied.chips.map((v) => ({
      id: v,
      label: chipItems[indexOf(v)],
      remove: (f: Filters) => ({ ...f, chips: f.chips.filter((x) => x !== v) }),
    })),
    ...(applied.rating
      ? [
          {
            id: 'rating',
            label: applied.rating === 'highest' ? c.highest : c.lowest,
            remove: (f: Filters) => ({ ...f, rating: '' }),
          },
        ]
      : []),
    ...(applied.date
      ? [
          {
            id: 'date',
            label: dateFormat.format(applied.date),
            remove: (f: Filters) => ({ ...f, date: null }),
          },
        ]
      : []),
  ];

  const results = Array.from({ length: RESULT_COUNT[layout][mobile ? 1 : 0] }, (_, i) => i);
  if (sort === 'asc') results.reverse();
  const slots = paginationRange(page, PAGE_COUNT, { siblings: 0 });
  const sortState = c.sortStates[sort];

  const go = (n: number) => (e: React.MouseEvent) => {
    e.preventDefault();
    setPage(Math.min(PAGE_COUNT, Math.max(1, n)));
  };

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <form
          role="search"
          aria-label={c.formLabel}
          className="hp-container flex items-end gap-4 py-10 max-md:px-4 max-md:pt-20"
          onSubmit={(e) => {
            e.preventDefault();
            const value = new FormData(e.currentTarget).get('q');
            if (typeof value === 'string' && value.trim()) {
              setSearched(value.trim());
              setPage(1);
            }
          }}
        >
          <div className="min-w-0 flex-1">
            <SearchBox
              size="md"
              name="q"
              aria-label={c.label}
              placeholder={c.placeholder}
              clearLabel={c.clear}
              voiceLabel={c.voice}
            />
          </div>
          <Button type="submit" size="lg" className="max-md:hidden">
            {c.button}
          </Button>
        </form>

        <section
          className="hp-container grid justify-items-center gap-8 py-10 max-md:px-4 max-md:pb-20"
          aria-labelledby="search-title"
        >
          <div className="flex w-full items-start gap-4 max-md:flex-col">
            <div className="grid min-w-0 flex-1 gap-2">
              <h1 id="search-title" className="text-display-sm font-bold text-ink">
                {fill(c.heading, { q: searched || c.query })}
              </h1>
              <p className="text-base text-muted-foreground" aria-live="polite">
                {c.count}
              </p>
            </div>
            <div className="flex items-start gap-4 max-md:flex-wrap">
              <ContentSwitcher
                aria-label={c.layout}
                value={layout}
                onValueChange={(v) => {
                  if (v) setLayout(v as Layout);
                }}
                className="max-md:order-last"
              >
                {LAYOUTS.map((v) => (
                  <ContentSwitcherItem key={v} value={v} aria-label={c.layouts[v]}>
                    {LAYOUT_ICON[v]}
                  </ContentSwitcherItem>
                ))}
              </ContentSwitcher>
              <div className="grid gap-2">
                <div className="flex gap-4 md:justify-end rtl:flex-row-reverse rtl:md:justify-start rtl:max-md:justify-end">
                  <Filtration>
                    <FiltrationTrigger
                      startIcon={<FilterIcon />}
                      endIcon={<ArrowDown01Icon className="size-5" />}
                    >
                      {c.filter}
                    </FiltrationTrigger>
                    <FiltrationPanel
                      aria-label={c.filters}
                      align={mobile ? 'start' : 'end'}
                      sideOffset={16}
                      collisionPadding={16}
                      onInteractOutside={(e) => {
                        if ((e.target as Element | null)?.closest('[data-rac]')) e.preventDefault();
                      }}
                    >
                      <FiltrationSection
                        label={c.variant}
                        count={pending.checks.length}
                        formatCount={(n) => fill(c.selected, { n })}
                      >
                        <FiltrationCheckboxFilter
                          aria-label={c.variant}
                          options={checkOptions}
                          value={pending.checks}
                          onValueChange={(v) => set('checks', v)}
                          onChange={(e) => {
                            const el = e.target as HTMLInputElement;
                            if (el.type === 'search') setOptionQuery(el.value);
                          }}
                          searchable
                          searchLabel={c.searchOptions}
                          searchPlaceholder={c.searchOptions}
                          collapseAfter={3}
                          showMoreLabel={(n) => fill(c.showMore, { n })}
                          showLessLabel={c.showLess}
                        />
                        {noMatch ? (
                          <p role="status" className="text-center text-xs text-muted-foreground">
                            {c.noData}
                          </p>
                        ) : null}
                      </FiltrationSection>
                      <FiltrationSection label={c.variant}>
                        <FiltrationOptionList
                          aria-label={c.variant}
                          value={pending.single}
                          onValueChange={(v) => set('single', v)}
                        >
                          {choices.map((label, i) => (
                            <FiltrationOption key={label} value={`single-${i + 1}`}>
                              {label}
                            </FiltrationOption>
                          ))}
                        </FiltrationOptionList>
                      </FiltrationSection>
                      <FiltrationSection label={c.variant}>
                        <RadioGroup
                          aria-label={c.variant}
                          value={pending.radio}
                          onValueChange={(v) => set('radio', v)}
                        >
                          {choices.map((label, i) => (
                            <Radio key={label} value={`radio-${i + 1}`} label={label} />
                          ))}
                        </RadioGroup>
                      </FiltrationSection>
                      <FiltrationSection label={c.variant}>
                        <div className="flex flex-wrap gap-5">
                          {chipItems.map((label, i) => {
                            const value = `chip-${i + 1}`;
                            const on = pending.chips.includes(value);
                            return (
                              <Chip
                                key={value}
                                variant="primary"
                                size="md"
                                rounded
                                selected={on}
                                trailingIcon={on ? <Cancel01Icon /> : <Add01Icon />}
                                onSelectedChange={(next) =>
                                  set(
                                    'chips',
                                    next
                                      ? [...pending.chips, value]
                                      : pending.chips.filter((x) => x !== value),
                                  )
                                }
                              >
                                {label}
                              </Chip>
                            );
                          })}
                        </div>
                      </FiltrationSection>
                      <FiltrationSection label={c.variant}>
                        <Slider
                          aria-label={c.variant}
                          value={range}
                          onValueChange={setRange}
                          min={0}
                          max={100}
                          showValue
                          thumbLabels={[c.thumbs[0], c.thumbs[1]]}
                        />
                      </FiltrationSection>
                      <FiltrationSection label={c.variant}>
                        <div className="grid grid-cols-[1fr_auto_1fr] items-end gap-2">
                          <TextInput
                            label={c.min}
                            value={min}
                            onChange={(e) => setMin(e.target.value)}
                            inputMode="numeric"
                            startAdornment={<TextInputAffix>{c.currency}</TextInputAffix>}
                          />
                          <span className="flex h-10 items-center text-ink">
                            <Remove01Icon className="size-4" />
                          </span>
                          <TextInput
                            label={c.max}
                            value={max}
                            onChange={(e) => setMax(e.target.value)}
                            inputMode="numeric"
                            startAdornment={<TextInputAffix>{c.currency}</TextInputAffix>}
                          />
                        </div>
                      </FiltrationSection>
                      <FiltrationSection label={c.date}>
                        <Suspense fallback={null}>
                          <DatePicker
                            aria-label={c.date}
                            value={pending.date}
                            onChange={(d) => set('date', d)}
                            helperText={c.dateHelp}
                          />
                        </Suspense>
                      </FiltrationSection>
                      <FiltrationSection label={c.variant}>
                        <FiltrationOptionList
                          aria-label={c.variant}
                          value={pending.rating}
                          onValueChange={(v) => set('rating', v)}
                        >
                          {ratings.map((r) => (
                            <FiltrationOption key={r.value} value={r.value}>
                              {r.label} ({OPTION_COUNT})
                            </FiltrationOption>
                          ))}
                        </FiltrationOptionList>
                      </FiltrationSection>
                      <FiltrationFooter
                        applyLabel={c.apply}
                        clearLabel={c.clearFilters}
                        appliedCount={selectionCount(pending)}
                        onApply={() => setApplied(pending)}
                        onClear={() => {
                          setPending(EMPTY);
                          setApplied(EMPTY);
                        }}
                      />
                    </FiltrationPanel>
                  </Filtration>
                  <Button
                    variant="outline"
                    size="lg"
                    endIcon={SORT_ICON[sort]}
                    aria-label={sortState ? `${c.sort} (${sortState})` : undefined}
                    onClick={() => setSort((s) => (s === 'asc' ? 'desc' : 'asc'))}
                  >
                    {c.sort}
                  </Button>
                </div>
                {appliedChips.length > 0 ? (
                  <FiltrationResults
                    aria-label={c.applied}
                    className="mt-0 justify-end max-md:justify-start"
                  >
                    {appliedChips.map((chip) => (
                      <Tag
                        key={chip.id}
                        variant="primary"
                        size="lg"
                        shape="squared"
                        dismissible
                        open
                        closeLabel={fill(c.remove, { label: chip.label })}
                        onDismiss={() => {
                          setApplied(chip.remove);
                          setPending(chip.remove);
                        }}
                      >
                        {chip.label}
                      </Tag>
                    ))}
                  </FiltrationResults>
                ) : null}
              </div>
            </div>
          </div>

          {layout === 'list' ? (
            <ul className="grid w-full list-none [&>li+li]:mt-8 [&>li+li]:border-t [&>li+li]:border-input [&>li+li]:pt-8">
              {results.map((i) => (
                <li key={i} className="grid justify-items-start gap-2">
                  <div className="flex flex-wrap gap-2">
                    {mobile ? (
                      [0, 1, 2].map((t) => (
                        <Tag key={t} variant="secondary-subtle" shape="squared">
                          {c.tag}
                        </Tag>
                      ))
                    ) : (
                      <Tag variant="secondary-subtle" shape="squared">
                        {c.categories[i % c.categories.length]}
                      </Tag>
                    )}
                  </div>
                  <h2 className="text-base font-normal">
                    <Link href="#">
                      <Highlight text={c.cardTitle} term={searched} />
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-800 md:line-clamp-2 dark:text-ink-secondary">
                    {i === 0 && !mobile
                      ? Array.from({ length: 3 }, () => c.cardDescription).join(' ')
                      : c.cardDescription}
                  </p>
                  <time dateTime="2024-11-20" className="text-xs text-muted-foreground">
                    {c.published}
                  </time>
                </li>
              ))}
            </ul>
          ) : (
            <ul
              className={`grid w-full list-none gap-6 ${layout === 'grid' ? 'grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1' : ''}`}
            >
              {results.map((i) => (
                <li key={i}>
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle asChild>
                        <h2>
                          <Highlight text={c.cardTitle} term={searched} />
                        </h2>
                      </CardTitle>
                      <CardDescription>{c.cardDescription}</CardDescription>
                    </CardHeader>
                    <div className="flex flex-wrap gap-2">
                      {[0, 1, 2].map((t) => (
                        <Tag key={t} variant="secondary-subtle" shape="squared">
                          {c.tag}
                        </Tag>
                      ))}
                    </div>
                    <CardFooter className="mt-auto">
                      <Button size="lg">{c.action}</Button>
                    </CardFooter>
                  </Card>
                </li>
              ))}
            </ul>
          )}

          <Pagination
            size="lg"
            aria-label={c.pagination}
            className="[&_[data-slot=pagination-link]]:min-w-0"
          >
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  label={c.previous}
                  href={`?page=${page - 1}`}
                  onClick={go(page - 1)}
                />
              </PaginationItem>
              {slots.map((slot, i) => {
                if (slot === 'ellipsis') {
                  const prev = slots[i - 1] as number;
                  const next = slots[i + 1] as number;
                  const hidden = Array.from(
                    { length: Math.min(next - prev - 1, 50) },
                    (_, k) => prev + 1 + k,
                  );
                  return (
                    <PaginationItem key={`gap-${i}`}>
                      <PaginationOverflow
                        label={c.morePages}
                        pages={hidden}
                        current={hidden.includes(page) ? page : undefined}
                        onSelect={setPage}
                      />
                    </PaginationItem>
                  );
                }
                return (
                  <PaginationItem key={slot}>
                    <PaginationLink
                      isActive={slot === page}
                      href={`?page=${slot}`}
                      onClick={go(slot)}
                    >
                      {slot}
                    </PaginationLink>
                  </PaginationItem>
                );
              })}
              <PaginationItem>
                <PaginationNext label={c.next} href={`?page=${page + 1}`} onClick={go(page + 1)} />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </section>
        <FeedbackSection />
      </main>
      <FooterSection />
    </>
  );
}
