import stripAbout from '@/assets/national-day/strip-about.svg';
import { AboutSection } from '@/sections/AboutSection';
import { NdPatternStrip } from './NdPatternStrip';

export function NdAboutSection() {
  return (
    <div className="[&>section]:pb-9">
      <AboutSection />
      <NdPatternStrip src={stripAbout} tile={[292.419, 28]} />
    </div>
  );
}
