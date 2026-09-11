import {
  Button,
  Footer,
  FooterCaption,
  FooterColumn,
  FooterGroup,
  FooterIcons,
  FooterLegal,
  FooterLegalInfo,
  FooterLegalLinks,
  FooterLink,
  FooterLinks,
  FooterLogos,
  FooterMeta,
  FooterNav,
  Link,
} from '@dev-dga/react';
import { EyeIcon, HandIcon, InstagramIcon, LinkedInIcon, XIcon, ZoomIcon } from '@/assets/icons';
import { PlatformLogo, YearOfAiLogo } from '@/assets/logos';
import { useIsMobile } from '@/hooks/use-media-query';
import { useCopy } from '@/i18n/locale-context';

const SOCIAL_ICONS = { x: XIcon, linkedin: LinkedInIcon, instagram: InstagramIcon };
const ACCESS_ICONS = { hand: HandIcon, zoom: ZoomIcon, eye: EyeIcon };
const COLUMN = ['social', 'accessibility'] as const;

export function FooterSection() {
  const c = useCopy().footer;
  const mobile = useIsMobile();
  const logos = mobile ? c.logos.mobile : c.logos.desktop;

  return (
    <Footer aria-label={c.label} background="dark" className="[--ddga-footer-legal-gap:24px]">
      <FooterNav aria-label={c.navLabel}>
        {c.groups.map((group) => (
          <FooterGroup key={group.label} label={group.label}>
            <FooterLinks>
              {group.links.map((link) => (
                <FooterLink key={link} href="#">
                  {link}
                </FooterLink>
              ))}
            </FooterLinks>
          </FooterGroup>
        ))}
        <FooterColumn>
          {(mobile ? c.mobileColumn : COLUMN).map((group) =>
            group === 'social' ? (
              <FooterGroup key={group} label={mobile ? c.social.mobileLabel : c.social.label}>
                <FooterIcons>
                  {c.social.items.map((item) => {
                    const Icon = SOCIAL_ICONS[item.icon];
                    return (
                      <Button
                        key={item.icon}
                        asChild
                        variant="outline"
                        size="icon-md"
                        aria-label={item.label}
                        onColor
                        startIcon={<Icon className="size-5" />}
                      >
                        <a href="#" />
                      </Button>
                    );
                  })}
                </FooterIcons>
              </FooterGroup>
            ) : (
              <FooterGroup key={group} label={c.accessibility.label}>
                <FooterIcons>
                  {c.accessibility.items.map((item) => {
                    const Icon = ACCESS_ICONS[item.icon];
                    return (
                      <Button
                        key={item.icon}
                        variant="outline"
                        size="icon-md"
                        aria-label={item.label}
                        onColor
                        startIcon={<Icon className="size-5" />}
                      />
                    );
                  })}
                </FooterIcons>
              </FooterGroup>
            ),
          )}
        </FooterColumn>
      </FooterNav>
      <FooterLegal>
        <FooterLegalInfo>
          {mobile ? null : (
            <FooterLegalLinks aria-label={c.legalLabel}>
              {c.legalLinks.map((link) => (
                <FooterLink key={link} href="#" underline>
                  {link}
                </FooterLink>
              ))}
            </FooterLegalLinks>
          )}
          <FooterCaption className="max-md:mt-[52px]">{c.caption}</FooterCaption>
          <FooterMeta className="flex-col">
            <p>
              {c.developedBy.prefix}
              <Link
                href={c.developedBy.authorUrl}
                tone="onColor"
                size="sm"
                inline
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.developedBy.author}
              </Link>
              {c.developedBy.infix}
              <Link
                href={c.developedBy.libraryUrl}
                tone="onColor"
                size="sm"
                inline
                target="_blank"
                rel="noopener noreferrer"
              >
                {c.developedBy.library}
              </Link>
            </p>
            <p>{c.lastModified}</p>
          </FooterMeta>
        </FooterLegalInfo>
        <FooterLogos>
          {logos.map((logo, i) =>
            logo === 'ai' ? (
              <YearOfAiLogo key={i} label={c.aiLogo} width={c.aiLogoWidth} onColor />
            ) : (
              <PlatformLogo key={i} label={c.platformLogo} size={32} layout="side" />
            ),
          )}
        </FooterLogos>
      </FooterLegal>
    </Footer>
  );
}
