import IntroSection from '@/components/IntroSection/Intro';
import AboutSection from '@/components/AboutSection/About';
import TechnologiesSection from '@/components/TechnoSection/Technologies';

export default function Home() {
  return (
    <div className="container-md">
      <IntroSection />
      <AboutSection />
      <TechnologiesSection />
    </div>
  );
}
