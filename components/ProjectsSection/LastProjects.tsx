'use client';
import { PROJECTS } from '@/constants/projects';
import { Project } from '@/types/projects.types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const LastProjects = () => {
  const t = useTranslations('ProjectsCard');
  // Récupère les 3 derniers projets
  const lastProjects = PROJECTS.slice(-3);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {lastProjects.map((project: Project) => (
        <div
          key={project.id}
          className="bg-light-bg-card/50 dark:bg-dark-bg-card/50 flex min-h-[400px] grow flex-col rounded-2xl border border-slate-100 p-6 shadow-lg drop-shadow-lg backdrop-blur-lg"
        >
          <div className="flex grow flex-col">
            <h3 className="mt-4 text-2xl font-bold">{t(project.title)}</h3>
            <p className="leading-7 font-light">{t(project.description)}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-light-bg-btn dark:bg-dark-bg-btn rounded-2xl border border-black px-2 text-sm leading-normal dark:border-white"
              >
                {t(tag)}
              </span>
            ))}
          </div>
          <div className="mt-10 flex justify-end gap-2">
            {project.demoLink && (
              <Link
                href={project.demoLink}
                target="_blank"
                className="bg-light-bg-btn hover:bg-light-bg-btn-hover dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover rounded-lg border border-black px-7 py-3 dark:border-white"
                title="Aller voir le repository"
              >
                {t('linkView')}
              </Link>
            )}
            {project.codeLink && (
              <Link
                href={project.codeLink}
                target="_blank"
                className="bg-light-bg-btn hover:bg-light-bg-btn-hover dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover rounded-lg border border-black px-7 py-3 dark:border-white"
                title="Consulter le site"
              >
                {t('linkCode')}
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastProjects;
