import IntroSection from '@/components/IntroSection/Intro';
import AboutSection from '@/components/AboutSection/About';
import TimeLine from '@/components/TimelineSection/Timeline';
import TechnologiesSection from '@/components/TechnoSection/Technologies';
import ProjectsSection from '@/components/ProjectsSection/Projects';

export default function Home() {
  return (
    <div>
      <IntroSection />
      <AboutSection />
      <TimeLine />
      <TechnologiesSection />
      <ProjectsSection />
    </div>
  );
}
