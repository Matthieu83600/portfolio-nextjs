import { Link } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';
import HeadingDivider from '../HeadingDivider';
import LastProjects from './LastProjects';
import { Button } from '../ui/button';

const ProjectsSection = () => {
  const t = useTranslations('HomePage.ProjectSection');
  return (
    <section id="projects" className="section my-12">
      <HeadingDivider title={t('title')} />
      <div className="flex flex-col items-center gap-8 md:gap-14">
        <LastProjects />
        <Link
          href={{ pathname: '/projets' }}
          aria-label="Aller à la page des projets"
        >
          <Button variant="primary" aria-label="Voir plus de projets">
            {t('more')}
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
