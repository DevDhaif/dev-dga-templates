import { Fragment, useId, useState } from 'react';
import { Link as RouterLink } from 'react-router';
import {
  Button,
  Chip,
  Header,
  HeaderAction,
  HeaderActions,
  HeaderBrand,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderNav,
  HeaderSubMenu,
  SearchBox,
  SlideoutMenu,
  SlideoutMenuBody,
  SlideoutMenuContent,
  SlideoutMenuGroup,
  SlideoutMenuHeader,
  SlideoutMenuItem,
  SlideoutMenuSeparator,
  SlideoutMenuTitle,
} from '@dev-dga/react';
import { LanguageIcon, PlusSignIcon, SearchIcon, UserIcon } from '@/assets/icons';
import { PlatformLogo } from '@/assets/logos';
import { otherLocale } from '@/i18n/locale';
import { useCopy, useLocale } from '@/i18n/locale-context';

type Panel = { kind: 'item'; index: number } | { kind: 'search' } | null;

export function HeaderSection() {
  const c = useCopy();
  const { locale } = useLocale();
  const other = otherLocale(locale);
  const panelId = useId();
  const [panel, setPanel] = useState<Panel>(null);
  const [query, setQuery] = useState('');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);

  const isItem = (i: number) => panel?.kind === 'item' && panel.index === i;
  const isSearch = panel?.kind === 'search';
  const close = () => setPanel(null);

  return (
    <>
      <Header aria-label={c.nav.label} fullWidth>
        <HeaderMenuButton
          label={c.nav.menuButton}
          aria-expanded={drawerOpen}
          onClick={() => setDrawerOpen(true)}
        />
        <HeaderBrand>
          <RouterLink
            to={`/${locale}`}
            className="inline-flex rounded-sm no-underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
            aria-label={c.site.logoLabel}
          >
            <PlatformLogo label={c.site.logoLabel} size={48} layout="side" />
          </RouterLink>
        </HeaderBrand>
        <HeaderNav aria-label={c.nav.label}>
          {c.nav.items.map((item, i) => (
            <HeaderMenuItem
              key={item}
              expandable
              selected={isItem(i)}
              aria-expanded={isItem(i)}
              aria-controls={panelId}
              onClick={() => setPanel(isItem(i) ? null : { kind: 'item', index: i })}
            >
              {item}
            </HeaderMenuItem>
          ))}
        </HeaderNav>
        <HeaderActions>
          <HeaderAction
            icon={<SearchIcon />}
            selected={isSearch}
            aria-expanded={isSearch}
            aria-controls={panelId}
            onClick={() => setPanel(isSearch ? null : { kind: 'search' })}
          >
            {c.nav.search}
          </HeaderAction>
          <HeaderAction asChild icon={<LanguageIcon />}>
            <RouterLink to={`/${other}/home`} lang={other} hrefLang={other}>
              {c.nav.language}
            </RouterLink>
          </HeaderAction>
          <HeaderAction icon={<UserIcon />}>{c.nav.login}</HeaderAction>
        </HeaderActions>
        <HeaderSubMenu
          id={panelId}
          aria-label={c.nav.searchPanel}
          open={panel !== null}
          onClose={close}
          closeLabel={c.nav.close}
        >
          <form
            className="flex items-start gap-4"
            role="search"
            aria-label={c.nav.searchPanel}
            onSubmit={(event) => {
              event.preventDefault();
              close();
            }}
          >
            <div className="min-w-0 flex-auto">
              <SearchBox
                size="md"
                aria-label={c.nav.search}
                placeholder={c.nav.searchPlaceholder}
                clearLabel={c.nav.clear}
                voiceLabel={c.nav.voice}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onSearch={close}
              />
            </div>
            <Button type="submit" size="lg">
              {c.nav.searchButton}
            </Button>
          </form>
          <div className="grid gap-4">
            <p className="text-lg font-semibold text-primary">{c.nav.suggestionsTitle}</p>
            <div className="flex flex-wrap gap-2">
              {c.nav.suggestions.map((suggestion) => (
                <Chip
                  key={suggestion}
                  variant="neutral"
                  size="lg"
                  leadingIcon={<PlusSignIcon />}
                  selected={query === suggestion}
                  onSelectedChange={(on) => setQuery(on ? suggestion : '')}
                >
                  {suggestion}
                </Chip>
              ))}
            </div>
          </div>
        </HeaderSubMenu>
      </Header>

      <SlideoutMenu open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SlideoutMenuContent side="start" background="gray">
          <SlideoutMenuHeader closeLabel={c.nav.close}>
            <SlideoutMenuTitle>
              <PlatformLogo label={c.site.logoLabel} size={32} layout="side" />
            </SlideoutMenuTitle>
          </SlideoutMenuHeader>
          <SlideoutMenuBody asChild>
            <nav aria-label={c.nav.drawerTitle}>
              <SlideoutMenuGroup>
                {c.nav.items.map((item, i) => (
                  <Fragment key={item}>
                    <SlideoutMenuItem
                      expanded={expanded === i}
                      onClick={() => setExpanded(expanded === i ? null : i)}
                    >
                      {item}
                    </SlideoutMenuItem>
                    {expanded === i
                      ? [0, 1, 2].map((n) => (
                          <SlideoutMenuItem key={n} level={2} asChild>
                            <a href="#">{c.nav.drawerLink}</a>
                          </SlideoutMenuItem>
                        ))
                      : null}
                  </Fragment>
                ))}
              </SlideoutMenuGroup>
              <SlideoutMenuSeparator />
              <SlideoutMenuGroup label={c.nav.account}>
                <SlideoutMenuItem
                  icon={<SearchIcon />}
                  onClick={() => {
                    setDrawerOpen(false);
                    setPanel({ kind: 'search' });
                  }}
                >
                  {c.nav.search}
                </SlideoutMenuItem>
                <SlideoutMenuItem asChild icon={<LanguageIcon />}>
                  <RouterLink to={`/${other}/home`} lang={other} hrefLang={other}>
                    {c.nav.language}
                  </RouterLink>
                </SlideoutMenuItem>
                <SlideoutMenuItem icon={<UserIcon />}>{c.nav.login}</SlideoutMenuItem>
              </SlideoutMenuGroup>
            </nav>
          </SlideoutMenuBody>
        </SlideoutMenuContent>
      </SlideoutMenu>
    </>
  );
}
