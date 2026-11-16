import type { CSSProperties } from 'react';
import {
  Button,
  CircularProgress,
  ProgressIndicator,
  Step,
  StepContent,
  StepDescription,
  StepIndicator,
  StepTitle,
  TextInput,
  TextInputAffix,
  type StepState,
  type TextInputProps,
} from '@dev-dga/react';
import { HelpCircleIcon, Search01Icon } from '@/assets/dga-icons';
import { useIsMobile } from '@/hooks/use-media-query';
import { useLocale } from '@/i18n/locale-context';
import { formCopy } from '@/i18n/pages/form';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  PageIntro,
  SecondNavSection,
} from '@/sections';

const STATES: StepState[] = ['completed', 'current', 'upcoming'];

type Row = (help: string, extras: { prefix: string; suffix: string }) => Partial<TextInputProps>;

const ROWS: Row[] = [
  () => ({}),
  () => ({ startAdornment: <Search01Icon className="size-5 text-ink" /> }),
  (_, x) => ({ startAdornment: <TextInputAffix>{x.prefix}</TextInputAffix> }),
  (_, x) => ({ endAdornment: <TextInputAffix>{x.suffix}</TextInputAffix> }),
  (help) => ({ helperText: help, helperIcon: <HelpCircleIcon className="size-4" /> }),
  (help) => ({ error: true, errorMessage: help }),
  () => ({ disabled: true }),
];

export function FormPage() {
  const { locale } = useLocale();
  const c = formCopy[locale];
  const mobile = useIsMobile();

  const steps = (
    <ProgressIndicator
      orientation="vertical"
      aria-label={c.progress}
      style={{ '--pi-v-gap': '80px' } as CSSProperties}
    >
      {c.steps.map((title, i) => (
        <Step key={title} state={STATES[i]}>
          <StepIndicator step={i + 1} />
          <StepContent>
            <StepTitle className="text-gray-800 dark:text-ink">{title}</StepTitle>
            <StepDescription className="text-ink-secondary">{c.stepDescription}</StepDescription>
          </StepContent>
        </Step>
      ))}
    </ProgressIndicator>
  );

  const radial = (
    <div className="-order-1 flex items-center gap-2 rounded-lg bg-gray-50 px-4 py-6 dark:bg-muted">
      <div className="relative grid shrink-0 place-items-center">
        <CircularProgress size="sm" value={1} max={4} showValue={false} aria-label={c.radial} />
        <span className="absolute text-sm font-bold text-ink-secondary">{c.radial}</span>
      </div>
      <div className="grid gap-1">
        <span className="text-sm font-semibold text-gray-800 dark:text-ink">{c.steps[0]}</span>
        <span className="text-xs text-ink-secondary">{c.stepDescription}</span>
        <span className="text-xs text-ink-placeholder">{c.radialNext}</span>
      </div>
    </div>
  );

  const field = (required: boolean, row: Row, i: number) => {
    const extra = row(c.help, { prefix: c.prefix, suffix: c.suffix });
    return (
      <TextInput
        key={`${i}-${required}`}
        label={required ? c.mandatory : c.optional}
        required={required}
        placeholder={extra.disabled ? undefined : c.placeholder}
        defaultValue={extra.disabled ? c.placeholder : undefined}
        {...extra}
      />
    );
  };

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <section className="py-10" aria-labelledby="form-title">
          <div className="hp-container grid grid-cols-[minmax(0,832fr)_minmax(0,416fr)] items-start gap-8 max-lg:grid-cols-1">
            <div className="grid min-w-0 gap-8">
              <div className="grid gap-6 max-md:contents">
                <div className="max-md:contents max-md:[&>div]:contents max-md:[&>div>div]:gap-6 max-md:[&>div>nav]:-order-2">
                  <PageIntro id="form-title" title={c.title} description={c.lead} />
                </div>
                <p className="text-sm text-ink-error max-md:-mt-2">{c.required}</p>
              </div>
              {mobile ? radial : null}
              <form
                className="grid gap-6 [&_label]:font-semibold"
                onSubmit={(e) => e.preventDefault()}
              >
                {ROWS.map((row, i) => (
                  <div key={i} className="grid grid-cols-2 gap-6 max-md:grid-cols-1 max-md:gap-4">
                    {field(true, row, i)}
                    {field(false, row, i)}
                  </div>
                ))}
                <div className="mt-2 flex gap-6">
                  <Button type="button" variant="outline" size="lg">
                    {c.back}
                  </Button>
                  <Button type="submit" size="lg">
                    {c.next}
                  </Button>
                </div>
              </form>
            </div>
            {mobile ? null : (
              <aside className="self-start rounded-lg bg-gray-50 p-10 dark:bg-muted">{steps}</aside>
            )}
          </div>
        </section>
        <FeedbackSection showLastModified={false} />
      </main>
      <FooterSection />
    </>
  );
}
