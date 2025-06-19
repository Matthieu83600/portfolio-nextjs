import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import HeadingDivider from '../HeadingDivider';
import LastProjects from './LastProjects';

const ProjectsSection = () => {
  const t = useTranslations('HomePage');
  return (
    <section id="projects" className="section my-12">
      <HeadingDivider title={t('ProjectSection.title')} />
      <div className="flex flex-col items-center gap-8 md:gap-14">
        <LastProjects />
        <Link
          href={{ pathname: '/projets' }}
          aria-label="Aller à la page des projets"
          className="bg-light-bg-btn hover:bg-light-bg-btn-hover dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover rounded-lg border border-black px-7 py-3 dark:border-white"
        >
          <button aria-label="Voir plus de projets">
            {t('ProjectSection.more')}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
