import stripPartners from '@/assets/national-day/strip-partners.svg';
import { PartnersSection } from '@/sections/PartnersSection';
import { NdPatternStrip } from './NdPatternStrip';

export function NdPartnersSection() {
  return (
    <div className="[&>section]:pb-9">
      <PartnersSection />
      <NdPatternStrip src={stripPartners} tile={[715.85, 25.5]} />
    </div>
  );
}
