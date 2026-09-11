import {
  AboutSection,
  DigitalStampSection,
  FooterSection,
  HeaderSection,
  HeroSection,
  LastModifiedSection,
  NewsSection,
  PartnersSection,
  SecondNavSection,
  ServicesSection,
} from '@/sections';

export function HomePage() {
  return (
    <>
      <DigitalStampSection />
      <SecondNavSection />
      <HeaderSection />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <NewsSection />
        <PartnersSection />
        <LastModifiedSection />
      </main>
      <FooterSection />
    </>
  );
}
