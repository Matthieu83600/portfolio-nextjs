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
          className="flex min-h-[400px] flex-grow flex-col rounded-2xl border border-slate-100 bg-light-bg-card/50 p-6 shadow-lg drop-shadow-lg backdrop-blur-lg dark:bg-dark-bg-card/50"
        >
          <div className="flex flex-grow flex-col">
            <h3 className="mt-4 text-2xl font-bold">{t(project.title)}</h3>
            <p className="font-light leading-7">{t(project.description)}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="rounded-2xl border border-black bg-light-bg-btn px-2 text-sm leading-normal dark:border-white dark:bg-dark-bg-btn"
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
                className="rounded-lg border border-black bg-light-bg-btn px-7 py-3 hover:bg-light-bg-btn-hover dark:border-white dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover"
                title="Aller voir le repository"
              >
                {t('linkView')}
              </Link>
            )}
            {project.codeLink && (
              <Link
                href={project.codeLink}
                target="_blank"
                className="rounded-lg border border-black bg-light-bg-btn px-7 py-3 hover:bg-light-bg-btn-hover dark:border-white dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover"
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
