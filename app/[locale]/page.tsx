import AboutSection from '@/components/AboutSection/About';
import IntroSection from '@/components/IntroSection/Intro';
import ProjectsSection from '@/components/ProjectsSection/Projects';
import TechnologiesSection from '@/components/TechnoSection/Technologies';
import TimeLine from '@/components/TimelineSection/Timeline';

export default async function Home() {
  return (
    <>
      <IntroSection />
      <AboutSection />
      <TimeLine />
      <TechnologiesSection />
      <ProjectsSection />
    </>
  );
}
