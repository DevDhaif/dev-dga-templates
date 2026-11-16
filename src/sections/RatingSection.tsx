import { useId, useRef, useState, type FormEvent } from 'react';
import { Button, Link, Rating, Textarea } from '@dev-dga/react';
import { CancelCircleIcon, CheckmarkCircle04Icon } from '@/assets/dga-icons';
import { fill } from '@/i18n/format';
import { useLocale } from '@/i18n/locale-context';
import { ratingCopy } from '@/i18n/pages/rating';

const AVERAGE = 3.9;

export function RatingSection() {
  const { locale } = useLocale();
  const c = ratingCopy[locale];
  const id = useId();
  const [step, setStep] = useState<'summary' | 'form' | 'done'>('summary');
  const [score, setScore] = useState(0);
  const [error, setError] = useState(false);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const valueText = (value: number, max: number) => fill(c.valueText, { value, max });

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (score <= 0) {
      setError(true);
      return;
    }
    setStep('done');
  };

  return (
    <section
      aria-label={c.label}
      className="border-t-2 border-primary bg-background pt-[22px] pb-6"
    >
      <div className="hp-container">
        {step === 'summary' ? (
          <div className="flex flex-wrap items-center justify-between gap-4 max-md:flex-col max-md:items-start">
            <div className="flex flex-wrap items-center gap-6 max-md:flex-col max-md:items-start max-md:gap-4">
              <p className="text-base text-ink">
                {c.average} <strong>{AVERAGE}</strong>
              </p>
              <div className="flex items-center gap-2">
                <Rating
                  readOnly
                  allowHalf
                  value={AVERAGE}
                  size="md"
                  tone="brand"
                  formatValueText={valueText}
                />
                <span className="text-sm text-muted-foreground">{c.reviews}</span>
              </div>
            </div>
            <Button
              ref={ctaRef}
              size="lg"
              onClick={() => {
                setStep('form');
                requestAnimationFrame(() => headingRef.current?.focus());
              }}
            >
              {c.cta}
            </Button>
          </div>
        ) : step === 'form' ? (
          <form className="grid gap-8" onSubmit={submit} noValidate>
            <div className="flex flex-wrap items-center justify-between gap-6 max-md:flex-col-reverse max-md:items-stretch">
              <div className="grid gap-4">
                <h2
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-base font-semibold text-ink outline-none"
                >
                  {c.heading}
                </h2>
                <p className="text-sm text-ink">{c.notice}</p>
              </div>
              <Button
                type="button"
                variant="ghost"
                size="lg"
                className="max-md:self-end"
                endIcon={<CancelCircleIcon />}
                onClick={() => {
                  setStep('summary');
                  setError(false);
                  requestAnimationFrame(() => ctaRef.current?.focus());
                }}
              >
                {c.close}
              </Button>
            </div>
            <div className="grid grid-cols-[minmax(0,382px)_minmax(0,600px)] justify-between gap-x-16 gap-y-8 max-md:grid-cols-1">
              <div className="grid content-start gap-4">
                <div>
                  <p id={`${id}-q`} className="text-base font-semibold text-ink">
                    {c.question}
                  </p>
                  <p className="text-sm text-muted-foreground">{c.hint}</p>
                </div>
                <Rating
                  name="rating"
                  size="md"
                  tone="brand"
                  allowHalf
                  value={score}
                  onValueChange={(v) => {
                    setScore(v);
                    setError(false);
                  }}
                  aria-labelledby={`${id}-q`}
                  error={error}
                  errorMessage={c.required}
                  formatValueText={valueText}
                />
              </div>
              <Textarea name="feedback" label={c.feedback} rows={3} />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-6 max-md:flex-col max-md:items-start">
              <p className="text-base text-ink">
                {c.agreementBefore}{' '}
                <Link inline href="#">
                  {c.statement}
                </Link>{' '}
                {c.and}{' '}
                <Link inline href="#">
                  {c.rules}
                </Link>
              </p>
              <Button type="submit" size="lg">
                {c.submit}
              </Button>
            </div>
          </form>
        ) : (
          <div
            className="flex flex-wrap items-center justify-between gap-4 max-md:flex-col max-md:items-start"
            role="status"
          >
            <div className="flex flex-wrap items-center gap-6 max-md:flex-col max-md:items-start max-md:gap-4">
              <p className="text-base text-ink">
                {c.youRated} <strong>({score.toFixed(1)})</strong>
              </p>
              <Rating
                readOnly
                allowHalf
                value={score}
                size="md"
                tone="brand"
                formatValueText={valueText}
              />
            </div>
            <p className="flex items-center gap-6 text-base text-ink max-md:gap-2">
              <CheckmarkCircle04Icon className="size-6 shrink-0 text-ink-brand" />
              {c.submitted}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
