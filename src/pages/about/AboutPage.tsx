import type { ReactNode } from 'react';
import {
  Briefcase06Icon,
  City02Icon,
  Contact02Icon,
  HierarchySquare02Icon,
  InformationDiamondIcon,
  Money04Icon,
  News01Icon,
  Plant01Icon,
  StrategyIcon,
  UserGroupIcon,
  ValidationApprovalIcon,
} from '@/assets/dga-icons';
import { useLocale, useLocalizedPath } from '@/i18n/locale-context';
import { aboutCopy } from '@/i18n/pages/about';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  HubCard,
  PageIntro,
  SecondNavSection,
} from '@/sections';

const ICONS: ReactNode[] = [
  <InformationDiamondIcon key="about" />,
  <HierarchySquare02Icon key="structure" />,
  <StrategyIcon key="strategy" />,
  <Money04Icon key="budget" />,
  <ValidationApprovalIcon key="tenders" />,
  <UserGroupIcon key="participation" />,
  <City02Icon key="partners" />,
  <Plant01Icon key="sustainability" />,
  <Briefcase06Icon key="careers" />,
  <News01Icon key="news" />,
  <Contact02Icon key="contact" />,
];

const LINKS: Record<number, string> = { 10: '/contact' };

export function AboutPage() {
  const { locale } = useLocale();
  const c = aboutCopy[locale];
  const to = useLocalizedPath();

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <section className="bg-brand-25 py-10 dark:bg-alpha-brand-10" aria-labelledby="about-title">
          <div className="hp-container">
            <PageIntro
              id="about-title"
              title={c.title}
              crumbs={{ home: c.home, current: c.title }}
              description={c.lead}
              descriptionClassName={locale === 'ar' ? 'md:text-base' : ''}
              variant="hero"
            />
          </div>
        </section>
        <section className="py-10" aria-label={c.title}>
          <ul className="hp-container grid list-none grid-cols-3 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1">
            {c.cards.map((title, i) => (
              <li key={title}>
                <HubCard icon={ICONS[i]} title={title} to={to(LINKS[i] ?? '/about')} />
              </li>
            ))}
          </ul>
        </section>
        <FeedbackSection />
      </main>
      <FooterSection />
    </>
  );
}
