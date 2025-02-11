import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import HeadingDivider from '../HeadingDivider';
import LastProjects from './LastProjects';

const ProjectsSection = ({ locale }: { locale: string }) => {
  const t = useTranslations('HomePage');
  console.log(locale);
  return (
    <section id="projects" className="section my-12">
      <HeadingDivider title={t('ProjectSection.title')} />

      <div className="flex flex-col items-center gap-8 md:gap-14">
        <LastProjects />
        <Link
          href={`${locale}/projets`}
          aria-label="Aller à la page des projets"
          className="rounded-lg border border-black bg-light-bg-btn px-7 py-3 hover:bg-light-bg-btn-hover dark:border-white dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover"
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
