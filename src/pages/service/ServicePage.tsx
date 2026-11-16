import type { ReactNode } from 'react';
import { Link as RouterLink } from 'react-router';
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle,
  Carousel,
  CarouselDots,
  CarouselSlide,
  CarouselViewport,
  Divider,
  FloatingButton,
  Link,
  List,
  ListItem,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Tag,
} from '@dev-dga/react';
import {
  CallIcon,
  CheckmarkCircle02Icon,
  Clock01Icon,
  ComputerPhoneSyncIcon,
  Link04Icon,
  LinkSquare02Icon,
  Mail01Icon,
  PlayIcon,
  RiyalCircularIcon,
  UserIcon,
} from '@/assets/dga-icons';
import { useLocale, useLocalizedPath } from '@/i18n/locale-context';
import { serviceCopy } from '@/i18n/pages/service';
import { pageCopy } from '@/i18n/pages/shared';
import { fill } from '@/i18n/format';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  PageIntro,
  SecondNavSection,
} from '@/sections';

const INFO_ICON: Record<string, ReactNode> = {
  audience: <UserIcon className="size-6" />,
  duration: <Clock01Icon className="size-6" />,
  channels: <ComputerPhoneSyncIcon className="size-6" />,
  cost: <RiyalCircularIcon className="size-6" />,
};

const HEAD_TAGS = ['info-subtle', 'success-subtle', 'secondary-subtle'] as const;
const CARD_TAGS = ['success-subtle', 'info-subtle', 'secondary-subtle'] as const;
const RELATED = 5;

export function ServicePage() {
  const { locale } = useLocale();
  const c = serviceCopy[locale];
  const ui = pageCopy[locale];
  const to = useLocalizedPath();

  const steps = (
    <List variant="ordered" tone="neutral" className="gap-4 *:items-start">
      {c.steps.map((s) => (
        <ListItem key={s}>{s}</ListItem>
      ))}
    </List>
  );

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <section
          className="bg-[linear-gradient(var(--ddga-brand-25),var(--ddga-brand-25))] bg-size-[100%_226px] bg-top bg-no-repeat py-10 dark:bg-[linear-gradient(var(--ddga-alpha-brand-10),var(--ddga-alpha-brand-10))]"
          aria-labelledby="service-title"
        >
          <div className="hp-container grid grid-cols-[minmax(0,832fr)_minmax(0,416fr)] items-start gap-8 max-lg:grid-cols-1">
            <div className="grid min-w-0 gap-16">
              <div className="grid gap-4">
                <div className="flex items-end gap-8">
                  <div className="min-w-0 flex-1">
                    <PageIntro id="service-title" title={c.title} variant="compact" />
                  </div>
                  <Button size="lg">{c.start}</Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {c.tags.map((tag, i) => (
                    <Tag key={tag} variant={HEAD_TAGS[i]} shape="squared">
                      {tag}
                    </Tag>
                  ))}
                </div>
                <p className="max-w-[720px] text-base text-ink">{c.description}</p>
                <Link href="#" className="inline-flex items-center gap-2 justify-self-start">
                  {c.sla}
                  <Link04Icon className="size-5" />
                </Link>
              </div>

              <Tabs defaultValue="0" className="gap-6">
                <TabsList flush className="after:hidden">
                  {c.tabs.map((tab, i) => (
                    <TabsTrigger key={tab} value={String(i)}>
                      {tab}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <TabsContent value="0" className="grid gap-6">
                  <div className="grid h-[344px] place-items-center rounded-lg bg-gray-50 dark:bg-muted">
                    <FloatingButton
                      size="sm"
                      icon={<PlayIcon />}
                      aria-label={c.play}
                      className="p-3 bg-success-600 hover:bg-success-700 active:bg-success-700"
                    />
                  </div>
                  {steps}
                </TabsContent>
                <TabsContent value="1">
                  <p className="text-base text-ink">{c.description}</p>
                </TabsContent>
                <TabsContent value="2">
                  <p className="text-base text-ink">{c.description}</p>
                </TabsContent>
              </Tabs>
            </div>

            <Card className="self-start [--ddga-card-padding:39px] max-md:[--ddga-card-padding:39px_15px]">
              <div className="grid gap-4">
                {c.info.map((row) => (
                  <div key={row.kind} className="flex gap-2">
                    <span className="shrink-0 text-ink-brand">{INFO_ICON[row.kind]}</span>
                    <div className="grid gap-1 text-base text-gray-800 dark:text-ink">
                      <span className="font-bold">{row.label}</span>
                      <span>{row.value}</span>
                    </div>
                  </div>
                ))}
                <div className="grid gap-2">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-ink">{c.payment}</h2>
                  <div className="flex gap-2">
                    {c.paymentMethods.map((m) => (
                      <span
                        key={m}
                        className="grid h-[43px] w-[63px] place-items-center rounded-md border border-gray-300 text-xs font-semibold text-ink"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <Divider className="-mb-px" />
              <div className="grid gap-4">
                <div className="grid gap-1">
                  <h2 className="text-lg font-bold text-gray-800 dark:text-ink">{c.faqTitle}</h2>
                  <Link asChild className="inline-flex items-center gap-2 justify-self-start">
                    <RouterLink to={to('/faq')}>
                      <span dir="ltr">{c.faqLink}</span>
                      <LinkSquare02Icon className="size-5" />
                    </RouterLink>
                  </Link>
                </div>
                {[
                  {
                    icon: <CallIcon className="size-6" />,
                    label: c.phone,
                    value: c.phoneValue,
                    href: `tel:${c.phoneValue}`,
                  },
                  {
                    icon: <Mail01Icon className="size-6" />,
                    label: c.email,
                    value: c.emailValue,
                    href: `mailto:${c.emailValue}`,
                  },
                ].map((row) => (
                  <div key={row.label} className="flex gap-2">
                    <span className="shrink-0 text-ink-brand">{row.icon}</span>
                    <div className="grid justify-items-start gap-1">
                      <span className="text-base font-bold text-gray-800 dark:text-ink">
                        {row.label}
                      </span>
                      <Link href={row.href} className="inline-flex items-center gap-2">
                        <span dir="ltr">{row.value}</span>
                        <LinkSquare02Icon className="size-5" />
                      </Link>
                    </div>
                  </div>
                ))}
                <Button variant="secondary" size="lg" className="justify-self-start">
                  {c.manual}
                </Button>
              </div>
              <Divider className="-mb-px" />
              <div className="grid gap-2">
                <h2 className="text-lg font-bold text-gray-800 dark:text-ink">{c.apps}</h2>
                <div className="flex flex-wrap gap-3">
                  {c.stores.map((store) => (
                    <Button
                      key={store}
                      asChild
                      variant="black"
                      size="lg"
                      className="w-[120px] px-2 whitespace-nowrap"
                    >
                      <a href="#">{store}</a>
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section
          className="bg-brand-25 py-10 dark:bg-alpha-brand-10"
          aria-labelledby="related-title"
        >
          <div className="hp-container grid gap-4">
            <div className="flex items-center justify-between gap-8">
              <h2 id="related-title" className="text-display-sm font-bold text-ink">
                {c.related}
              </h2>
              <Button variant="ghost" size="lg">
                {c.viewAll}
              </Button>
            </div>
            <p className="max-w-[720px] text-base text-ink">{c.description}</p>
          </div>
          <div className="mt-6">
            <Carousel
              aria-label={c.relatedLabel}
              aria-roledescription={ui.carousel}
              announce={(i, m) => fill(ui.announce, { n: i + 1, m })}
              controls="dots"
              slideSize="320px"
              gap="16px"
              align="center"
              flush
            >
              <CarouselViewport>
                {Array.from({ length: RELATED }, (_, i) => (
                  <CarouselSlide
                    key={i}
                    aria-roledescription={ui.slide}
                    aria-label={fill(ui.slideOf, { n: i + 1, m: RELATED })}
                  >
                    <Card className="h-full">
                      <CardHeader>
                        <CardIcon featured>
                          <CheckmarkCircle02Icon />
                        </CardIcon>
                        <CardTitle>{c.cardTitle}</CardTitle>
                        <CardDescription>{c.cardDescription}</CardDescription>
                      </CardHeader>
                      <div className="flex flex-wrap gap-2">
                        {c.cardTags.map((tag, t) => (
                          <Tag key={t} variant={CARD_TAGS[t]} shape="squared">
                            {tag}
                          </Tag>
                        ))}
                      </div>
                      <CardFooter className="mt-auto">
                        <Button variant="outline" size="lg">
                          {c.cardSecondary}
                        </Button>
                        <Button size="lg">{c.cardPrimary}</Button>
                      </CardFooter>
                    </Card>
                  </CarouselSlide>
                ))}
              </CarouselViewport>
              <CarouselDots dotLabel={(i) => fill(ui.goTo, { n: i + 1 })} />
            </Carousel>
          </div>
        </section>

        <section className="py-10" aria-label={c.commentsTitle}>
          <div className="hp-container">
            <Card>
              <CardHeader>
                <CardIcon featured>
                  <CheckmarkCircle02Icon />
                </CardIcon>
                <CardTitle>{c.commentsTitle}</CardTitle>
                <CardDescription>{c.commentsDescription}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button asChild size="lg">
                  <RouterLink to={to('/contact')}>{c.commentsAction}</RouterLink>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </section>

        <FeedbackSection withRating />
      </main>
      <FooterSection />
    </>
  );
}
