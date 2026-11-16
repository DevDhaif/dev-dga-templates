import { Mail02Icon, MessageQuestionIcon } from '@/assets/dga-icons';
import { useLocale, useLocalizedPath } from '@/i18n/locale-context';
import { helpCopy } from '@/i18n/pages/help';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  HubCard,
  PageIntro,
  SecondNavSection,
} from '@/sections';

const ORDER = ['contact', 'faqs', 'contact', 'contact', 'faqs', 'contact'] as const;

export function HelpPage() {
  const { locale } = useLocale();
  const c = helpCopy[locale];
  const to = useLocalizedPath();

  const label = (text: string) => (
    <strong className="font-semibold text-sa-800 dark:text-sa-300">{text}</strong>
  );

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <section className="py-10" aria-labelledby="help-title">
          <div className="hp-container grid gap-8">
            <PageIntro id="help-title" title={c.title} description={c.intro} />
            <ul className="grid list-none grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
              {ORDER.map((kind, i) => (
                <li key={i}>
                  {kind === 'contact' ? (
                    <HubCard
                      icon={<Mail02Icon className="text-ink-brand" />}
                      title={c.contact}
                      to={to('/contact')}
                      description={
                        <>
                          <p>{c.description}</p>
                          <p>
                            {label(c.availabilityLabel)} {c.availability}
                          </p>
                          <p>
                            {label(c.responseLabel)} {c.response}
                          </p>
                        </>
                      }
                    />
                  ) : (
                    <HubCard
                      icon={<MessageQuestionIcon className="text-ink-brand" />}
                      title={c.faqs}
                      to={to('/faq')}
                      description={<p>{c.description}</p>}
                      descriptionClassName={locale === 'ar' ? 'max-md:min-h-32' : 'max-md:min-h-38'}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <FeedbackSection />
      </main>
      <FooterSection />
    </>
  );
}
