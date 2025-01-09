import AboutSection from '@/components/AboutSection/About';
import IntroSection from '@/components/IntroSection/Intro';
import ProjectsSection from '@/components/ProjectsSection/Projects';
import TechnologiesSection from '@/components/TechnoSection/Technologies';
import TimeLine from '@/components/TimelineSection/Timeline';

export type paramsType = Promise<{ locale: string }>;

export default async function Home(props: { params: paramsType }) {
  const { locale } = await props.params;
  return (
    <>
      <IntroSection />
      <AboutSection />
      <TimeLine />
      <TechnologiesSection />
      <ProjectsSection locale={locale} />
    </>
  );
}
