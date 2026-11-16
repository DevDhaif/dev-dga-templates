import { useId, useState, type FormEvent } from 'react';
import { Button, Checkbox, Link, Radio, RadioGroup, Textarea } from '@dev-dga/react';
import { CancelCircleIcon, CheckmarkCircle04Icon } from '@/assets/dga-icons';
import { useIsMobile } from '@/hooks/use-media-query';
import { useCopy, useLocale } from '@/i18n/locale-context';
import { feedbackCopy } from '@/i18n/pages/feedback';
import { RatingSection } from './RatingSection';

type Answer = 'yes' | 'no' | null;

interface FeedbackSectionProps {
  showLastModified?: boolean;
  withRating?: boolean;
}

export function FeedbackSection({
  showLastModified = true,
  withRating = false,
}: FeedbackSectionProps) {
  const { locale } = useLocale();
  const c = feedbackCopy[locale];
  const lastModified = useCopy().lastModified;
  const mobile = useIsMobile();
  const id = useId();
  const [answer, setAnswer] = useState<Answer>(null);
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDone(true);
  };

  const question = (stacked: boolean) => (
    <div
      className={
        stacked
          ? 'flex flex-wrap items-center gap-6 max-md:contents'
          : 'flex flex-wrap items-center gap-6 max-md:gap-6'
      }
    >
      <p id={`${id}-q`} className="text-base text-ink max-md:order-1">
        {c.question}
      </p>
      <div
        className={`flex gap-4 max-md:order-3 ${stacked ? 'max-md:gap-2' : 'max-md:gap-4'}`}
        role="group"
        aria-labelledby={`${id}-q`}
      >
        {(['yes', 'no'] as const).map((value) => (
          <Button
            key={value}
            size={mobile ? 'md' : 'lg'}
            aria-pressed={answer === value}
            onClick={() => setAnswer(value)}
          >
            {c[value]}
          </Button>
        ))}
      </div>
    </div>
  );

  const stat = <p className="text-sm text-ink max-md:order-2 md:text-end">{c.stat}</p>;

  return (
    <section aria-label={c.label}>
      {showLastModified ? (
        <p className="hp-container py-4 text-right text-sm text-ink">{lastModified}</p>
      ) : null}
      {withRating ? <RatingSection /> : null}
      <div className="border-t-2 border-primary bg-background pt-[22px] pb-6">
        <div className="hp-container">
          {done ? (
            <div className="flex flex-wrap items-center justify-between gap-4 max-md:flex-col max-md:items-start">
              <p className="flex items-center gap-6 text-base text-ink max-md:gap-2" role="status">
                <CheckmarkCircle04Icon className="size-6 shrink-0 text-ink-brand" />
                {c.submitted}
              </p>
              {stat}
            </div>
          ) : answer === null ? (
            <div className="grid grid-cols-2 items-center gap-4 max-md:grid-cols-1">
              {question(true)}
              {stat}
            </div>
          ) : (
            <form className="grid gap-8" onSubmit={submit}>
              <div className="flex flex-wrap items-center justify-between gap-6 max-md:flex-col-reverse max-md:items-stretch">
                {question(false)}
                <Button
                  type="button"
                  variant="ghost"
                  size="lg"
                  className="max-md:self-end"
                  endIcon={<CancelCircleIcon />}
                  onClick={() => setAnswer(null)}
                >
                  {c.close}
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1">
                <fieldset className="m-0 grid min-w-0 gap-4 border-0 p-0">
                  <legend className="mb-4 p-0 text-base text-ink">{c.prompt}</legend>
                  {(answer === 'no' ? c.noReasons : c.yesReasons).map((reason) => (
                    <Checkbox key={reason} name="reason" value={reason} label={reason} />
                  ))}
                </fieldset>
                <Textarea name="feedback" label={c.feedback} rows={3} />
              </div>
              <div className="flex flex-wrap items-center gap-4 max-md:flex-col max-md:items-start">
                <span id={`${id}-gender`} className="text-base font-semibold text-ink">
                  {c.gender}
                </span>
                <RadioGroup
                  name="gender"
                  orientation={mobile ? 'vertical' : 'horizontal'}
                  aria-labelledby={`${id}-gender`}
                >
                  {c.genders.map((g) => (
                    <Radio key={g} value={g} label={g} />
                  ))}
                </RadioGroup>
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
          )}
        </div>
      </div>
    </section>
  );
}
