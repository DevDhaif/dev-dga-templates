import footerBand from '@/assets/national-day/footer-band.svg';
import { FooterSection } from '@/sections/FooterSection';
import { NdPatternStrip } from './NdPatternStrip';

export function NdFooterSection() {
  return (
    <>
      <NdPatternStrip src={footerBand} tile={[1440, 86]} height={86} className="bg-sa-flag" />
      <FooterSection />
    </>
  );
}
