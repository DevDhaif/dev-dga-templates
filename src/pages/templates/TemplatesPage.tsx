import { Link as RouterLink } from 'react-router';
import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardImage,
  CardTitle,
  Tag,
} from '@dev-dga/react';
import { DigitalStampSection, FooterSection, HeaderSection } from '@/sections';
import type { Copy } from '@/i18n/copy';
import { useCopy, useLocale } from '@/i18n/locale-context';

type TemplateKey = keyof Copy['templates']['items'];

const TEMPLATES: { key: TemplateKey; path: string; image: string }[] = [
  { key: 'home', path: 'home', image: '/images/templates/home.jpg' },
  { key: 'nationalDay', path: 'national-day', image: '/images/templates/national-day.jpg' },
  { key: 'service', path: 'service', image: '/images/templates/service.jpg' },
  { key: 'about', path: 'about', image: '/images/templates/about.jpg' },
  { key: 'help', path: 'help', image: '/images/templates/help.jpg' },
  { key: 'faq', path: 'faq', image: '/images/templates/faq.jpg' },
  { key: 'contact', path: 'contact', image: '/images/templates/contact.jpg' },
  { key: 'search', path: 'search', image: '/images/templates/search.jpg' },
  { key: 'sitemap', path: 'sitemap', image: '/images/templates/sitemap.jpg' },
  { key: 'content', path: 'content', image: '/images/templates/content.jpg' },
  { key: 'contentHeavy', path: 'content-heavy', image: '/images/templates/content-heavy.jpg' },
  { key: 'form', path: 'form', image: '/images/templates/form.jpg' },
  { key: 'notFound', path: 'not-found', image: '/images/templates/not-found.jpg' },
];

export function TemplatesPage() {
  const c = useCopy().templates;
  const { locale } = useLocale();

  return (
    <>
      <DigitalStampSection />
      <HeaderSection />
      <main className="py-16 max-md:py-10">
        <div className="hp-container grid gap-10">
          <div className="grid max-w-paragraph gap-4">
            <p className="text-sm font-semibold text-primary">{c.eyebrow}</p>
            <h1 className="text-display-md font-bold text-ink max-md:text-display-sm">{c.title}</h1>
            <p className="text-lg text-ink-secondary max-md:text-base">{c.description}</p>
          </div>

          <ul className="grid list-none grid-cols-2 gap-8 max-lg:grid-cols-1">
            {TEMPLATES.map((template) => {
              const item = c.items[template.key];
              return (
                <Card key={template.key} asChild className="h-full">
                  <li>
                    <CardImage
                      src={template.image}
                      alt=""
                      aspectRatio="auto"
                      style={{ blockSize: 260 }}
                      className="object-top"
                    />
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>
                    </CardHeader>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <Tag key={tag} variant="success-subtle" shape="squared">
                          {tag}
                        </Tag>
                      ))}
                    </div>
                    <CardFooter className="mt-auto">
                      <Button asChild size="lg">
                        <RouterLink to={`/${locale}/${template.path}`}>{c.cta}</RouterLink>
                      </Button>
                    </CardFooter>
                  </li>
                </Card>
              );
            })}
          </ul>
        </div>
      </main>
      <FooterSection />
    </>
  );
}
