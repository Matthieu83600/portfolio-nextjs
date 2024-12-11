import Link from 'next/link';
import HeadingDivider from '../HeadingDivider';
import LastProjects from './LastProjects';
import { SITE_ROUTES } from '../../constants/routes';

const ProjectsSection = () => {
  return (
    <section id="projects" className="section my-12">
      <HeadingDivider title="Derniers projets" />
      <div className="h-10 md:h-14" />

      <div className="flex flex-col items-center gap-8 md:gap-14">
        <LastProjects />
        <Link
          href={SITE_ROUTES.projects}
          tabIndex={-1}
          aria-label="Aller à la page des projets"
          className="rounded-md bg-blue-700 p-2 text-slate-50"
        >
          <button aria-label="Voir plus de projets">Plus de projets</button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
