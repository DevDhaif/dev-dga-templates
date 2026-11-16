import { useId, useState, type ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Chip,
  EmptyState,
  Filtration,
  FiltrationCheckboxFilter,
  FiltrationFooter,
  FiltrationPanel,
  FiltrationResults,
  FiltrationSection,
  FiltrationTrigger,
  SearchBox,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@dev-dga/react';
import {
  ArrowDown01Icon,
  Cancel01Icon,
  CheckmarkCircle04Icon,
  FilterIcon,
  Mail02Icon,
  SearchRemoveIcon,
} from '@/assets/dga-icons';
import { useIsMobile } from '@/hooks/use-media-query';
import { fill } from '@/i18n/format';
import { useLocale, useLocalizedPath } from '@/i18n/locale-context';
import { faqCopy } from '@/i18n/pages/faq';
import { feedbackCopy } from '@/i18n/pages/feedback';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  SecondNavSection,
} from '@/sections';

const ALL = 'all';
const CATEGORIES = ['c1', 'c2', 'c3', 'c4', 'c5'];
const VARIANTS = ['v1', 'v2', 'v3', 'v4', 'v5'];

const FOLD: Record<string, string> = { أ: 'ا', إ: 'ا', آ: 'ا', ة: 'ه', ى: 'ي' };
const fold = (s: string) => s.toLowerCase().replace(/[أإآةى]/g, (ch) => FOLD[ch] ?? ch);

function highlight(text: string, query: string): ReactNode {
  const needle = fold(query.trim());
  if (!needle) return text;
  const hay = fold(text);
  const parts: ReactNode[] = [];
  let from = 0;
  for (let at = hay.indexOf(needle); at !== -1; at = hay.indexOf(needle, from)) {
    if (at > from) parts.push(text.slice(from, at));
    parts.push(
      <mark key={at} className="rounded-xs bg-gold-300 text-gray-950">
        {text.slice(at, at + needle.length)}
      </mark>,
    );
    from = at + needle.length;
  }
  if (from < text.length) parts.push(text.slice(from));
  return parts;
}

export function FaqPage() {
  const { locale } = useLocale();
  const c = faqCopy[locale];
  const fb = feedbackCopy[locale];
  const to = useLocalizedPath();
  const mobile = useIsMobile();
  const uid = useId();
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState(ALL);
  const [picked, setPicked] = useState<string[]>([]);
  const [applied, setApplied] = useState<string[]>([]);
  const [rated, setRated] = useState<Record<number, boolean>>({});

  const items = c.questions.map((question, i) => ({
    id: i,
    question,
    category: CATEGORIES[i % CATEGORIES.length],
    variant: VARIANTS[i % VARIANTS.length],
  }));

  const options = VARIANTS.map((value, i) => ({
    value,
    label: fill(c.option, { n: i + 1 }),
    count: items.filter((q) => q.variant === value).length,
  }));
  const optionLabel = (value: string) => options.find((o) => o.value === value)?.label ?? value;

  const needle = fold(query.trim());
  const visible = items.filter(
    (q) =>
      (tab === ALL || q.category === tab) &&
      (applied.length === 0 || applied.includes(q.variant)) &&
      (!needle || fold(q.question).includes(needle) || fold(c.answer).includes(needle)),
  );
  const narrowed = needle !== '' || applied.length > 0 || tab !== ALL;

  const search = (value: string) => {
    setQuery(value);
    if (value.trim()) setTab(ALL);
  };
  const removeFilter = (value: string) => {
    setApplied((list) => list.filter((v) => v !== value));
    setPicked((list) => list.filter((v) => v !== value));
  };
  const reset = () => {
    setQuery('');
    setTab(ALL);
    setPicked([]);
    setApplied([]);
  };

  const list =
    visible.length === 0 ? (
      <EmptyState
        variant="search"
        icon={<SearchRemoveIcon />}
        title={c.emptyTitle}
        description={c.emptyDescription}
        action={
          <Button variant="outline" size="lg" onClick={reset}>
            {c.clearFilter}
          </Button>
        }
      />
    ) : (
      <Accordion type="single" collapsible>
        {visible.map((q, i) => {
          const labelId = `${uid}-rate-${q.id}`;
          return (
            <AccordionItem key={q.id} value={`q-${q.id}`} className={i === 0 ? 'border-t-0' : ''}>
              <AccordionTrigger>{highlight(q.question, query)}</AccordionTrigger>
              <AccordionContent>
                <p>{highlight(c.answer, query)}</p>
                <div className="mt-8" aria-live="polite">
                  {rated[q.id] ? (
                    <p className="flex items-center gap-2 text-base text-ink">
                      <CheckmarkCircle04Icon className="size-6 shrink-0 text-ink-brand" />
                      {fb.submitted}
                    </p>
                  ) : (
                    <div className="flex flex-wrap items-center gap-2">
                      <p id={labelId}>{c.rateAnswer}</p>
                      <div className="flex gap-4" role="group" aria-labelledby={labelId}>
                        {(['yes', 'no'] as const).map((value) => (
                          <Button
                            key={value}
                            variant="outline"
                            size="lg"
                            onClick={() => setRated((r) => ({ ...r, [q.id]: true }))}
                          >
                            {fb[value]}
                          </Button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    );

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <section className="bg-brand-25 py-10 dark:bg-alpha-brand-10" aria-labelledby="faq-title">
          <div className="hp-container grid gap-4">
            <h1
              id="faq-title"
              className="text-display-lg font-semibold text-ink max-md:text-display-md max-md:font-bold"
            >
              {c.title}
            </h1>
            <p className="max-w-paragraph text-base text-ink">{c.description}</p>
          </div>
        </section>

        <div className="hp-container grid grid-cols-1 gap-16 py-10 max-md:gap-8">
          <div className="grid grid-cols-1 gap-4 max-md:gap-3">
            <div className="flex gap-4 max-md:gap-3">
              <form
                role="search"
                aria-label={c.searchLabel}
                className="w-80 max-md:min-w-0 max-md:flex-1"
                onSubmit={(e) => e.preventDefault()}
              >
                <SearchBox
                  size="md"
                  aria-label={c.searchLabel}
                  placeholder={c.searchPlaceholder}
                  value={query}
                  onChange={(e) => search(e.target.value)}
                  onClear={() => search('')}
                  clearLabel={c.clearSearch}
                  voiceLabel={c.voiceSearch}
                />
              </form>
              <Filtration>
                <FiltrationTrigger
                  className="shrink-0"
                  startIcon={<FilterIcon />}
                  endIcon={<ArrowDown01Icon className="size-5" />}
                >
                  {c.filter}
                </FiltrationTrigger>
                <FiltrationPanel aria-label={c.filters} align="start" collisionPadding={16}>
                  <FiltrationSection
                    label={c.variant}
                    count={picked.length}
                    formatCount={(n) => fill(c.selections, { n })}
                  >
                    <FiltrationCheckboxFilter
                      aria-label={c.variant}
                      options={options}
                      value={picked}
                      onValueChange={setPicked}
                      searchable
                      searchPlaceholder={c.searchPlaceholder}
                      searchLabel={c.searchLabel}
                      collapseAfter={3}
                      showMoreLabel={(n) => fill(c.showMore, { n })}
                      showLessLabel={c.showLess}
                    />
                  </FiltrationSection>
                  <FiltrationFooter
                    applyLabel={c.apply}
                    clearLabel={c.clearFilter}
                    appliedCount={picked.length}
                    onApply={() => setApplied(picked)}
                    onClear={() => {
                      setPicked([]);
                      setApplied([]);
                    }}
                  />
                </FiltrationPanel>
              </Filtration>
            </div>
            {applied.length > 0 ? (
              <FiltrationResults aria-label={c.applied} className="mt-0">
                {applied.map((value) => (
                  <Chip
                    key={value}
                    size="lg"
                    selected
                    onSelectedChange={() => removeFilter(value)}
                    trailingIcon={<Cancel01Icon />}
                  >
                    {optionLabel(value)}
                  </Chip>
                ))}
              </FiltrationResults>
            ) : null}
          </div>

          <Tabs
            value={tab}
            onValueChange={setTab}
            size={mobile ? 'md' : 'lg'}
            className="gap-8 max-md:gap-4"
          >
            <TabsList overflow moreLabel={c.more} aria-label={c.categoriesLabel}>
              <TabsTrigger value={ALL} className="z-1">
                {c.all}
              </TabsTrigger>
              {CATEGORIES.map((id) => (
                <TabsTrigger key={id} value={id} className="z-1">
                  {c.category}
                </TabsTrigger>
              ))}
            </TabsList>
            {[ALL, ...CATEGORIES].map((id) => (
              <TabsContent key={id} value={id}>
                {id === tab ? list : null}
              </TabsContent>
            ))}
          </Tabs>
          <p className="sr-only" aria-live="polite">
            {narrowed ? fill(c.results, { n: visible.length }) : ''}
          </p>
        </div>

        <section className="py-10" aria-label={c.contactTitle}>
          <div className="hp-container">
            <Card>
              <CardHeader>
                <CardIcon featured>
                  <Mail02Icon />
                </CardIcon>
                <CardTitle>{c.contactTitle}</CardTitle>
                <CardDescription>{c.contactDescription}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="lg">
                  <RouterLink to={to('/contact')}>{c.contactAction}</RouterLink>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <FeedbackSection />
      </main>
      <FooterSection />
    </>
  );
}
