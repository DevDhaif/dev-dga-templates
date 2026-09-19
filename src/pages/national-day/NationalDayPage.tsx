import { DigitalStampSection, HeaderSection, LastModifiedSection } from '@/sections';
import {
  NdAboutSection,
  NdFooterSection,
  NdHeroSection,
  NdNewsSection,
  NdPartnersSection,
  NdServicesSection,
} from '@/sections/national-day';

export function NationalDayPage() {
  return (
    <>
      <DigitalStampSection />
      <HeaderSection />
      <main>
        <NdHeroSection />
        <NdAboutSection />
        <NdServicesSection />
        <NdNewsSection />
        <NdPartnersSection />
        <LastModifiedSection />
      </main>
      <NdFooterSection />
    </>
  );
}
