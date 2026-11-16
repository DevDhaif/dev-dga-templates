import { Link as RouterLink } from 'react-router';
import { Link } from '@dev-dga/react';
import { LinkSquare02Icon } from '@/assets/dga-icons';
import { useLocale, useLocalizedPath } from '@/i18n/locale-context';
import { miscCopy } from '@/i18n/pages/misc';
import {
  DigitalStampSection,
  FeedbackSection,
  FooterSection,
  HeaderSection,
  PageIntro,
  SecondNavSection,
} from '@/sections';

const GROUPS: number[][] = [
  [1, 2, 2, 2, 2, 3, 4, 3, 2, 2, 2],
  [1, 2, 3, 4, 2, 2, 2, 3, 2, 2, 2, 2],
  [1, 2, 2, 2, 3],
  [1, 2, 2, 2, 2],
  [1, 2, 2, 3, 4, 2, 2, 2],
  [1, 2, 2, 2],
  [1, 2, 2, 2],
  [1, 2, 2, 2, 2],
];
const EXTERNAL = { group: 0, row: 6, href: 'https://dga.gov.sa' };

type Node = { level: number; external: boolean; children: Node[] };

function toTree(levels: number[], group: number): Node[] {
  const root: Node = { level: 0, external: false, children: [] };
  const stack: Node[] = [root];
  for (const [row, level] of levels.entries()) {
    const external = group === EXTERNAL.group && row === EXTERNAL.row;
    const node: Node = { level, external, children: [] };
    while (stack.length > level) stack.pop();
    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }
  return root.children;
}

interface TreeProps {
  nodes: Node[];
  labels: string[];
  to: string;
  externalHint: string;
}

function Tree({ nodes, labels, to, externalHint }: TreeProps) {
  return (
    <ul className="m-0 grid list-none gap-4 p-0 [&_ul]:mt-4 [&_ul]:ps-4">
      {nodes.map((node, i) => (
        <li
          key={i}
          className={`before:me-1 before:text-ink-brand ${node.level === 1 ? "before:content-['•']" : "before:content-['◦']"}`}
        >
          {node.external ? (
            <Link
              href={EXTERNAL.href}
              size="sm"
              external
              externalIcon={false}
              endIcon={<LinkSquare02Icon />}
            >
              {labels[node.level - 1]}
              <span className="sr-only"> {externalHint}</span>
            </Link>
          ) : (
            <Link asChild size={node.level === 1 ? 'md' : 'sm'}>
              <RouterLink to={to}>{labels[node.level - 1]}</RouterLink>
            </Link>
          )}
          {node.children.length > 0 ? (
            <Tree nodes={node.children} labels={labels} to={to} externalHint={externalHint} />
          ) : null}
        </li>
      ))}
    </ul>
  );
}

export function SitemapPage() {
  const { locale } = useLocale();
  const c = miscCopy[locale].sitemap;
  const to = useLocalizedPath();

  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <section className="bg-brand-25 pt-10 pb-[25px] dark:bg-alpha-brand-10 max-md:pb-[35px]">
          <div className="hp-container">
            <PageIntro id="sitemap-title" title={c.title} variant="compact" />
          </div>
        </section>
        <nav className="pt-[39px] pb-10 max-md:pt-[29px]" aria-labelledby="sitemap-title">
          <div className="hp-container">
            <Tree
              nodes={GROUPS.flatMap(toTree)}
              labels={c.levels}
              to={to('/sitemap')}
              externalHint={c.external}
            />
          </div>
        </nav>
        <FeedbackSection />
      </main>
      <FooterSection />
    </>
  );
}
