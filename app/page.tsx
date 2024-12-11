import IntroSection from '@/components/IntroSection/Intro';
import AboutSection from '@/components/AboutSection/About';

export default function Home() {
  return (
    <div className="container-md">
      <IntroSection />
      <AboutSection />
    </div>
  );
}
