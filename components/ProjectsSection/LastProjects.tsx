'use client';
import Link from 'next/link';
import { Project } from '@/types/projects.types';
import { PROJECTS } from '@/constants/projects';

const LastProjects = () => {
  // Récupère les 3 derniers projets
  const lastProjects = PROJECTS.slice(-3);

  return (
    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {lastProjects.map((project: Project) => (
        <div
          key={project.id}
          className="flex min-h-[400px] flex-grow flex-col rounded-lg bg-light-bg-card p-6 shadow-lg dark:bg-dark-bg-card"
        >
          <div className="flex flex-grow flex-col">
            <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
            <p className="font-light leading-7">{project.description}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-light-bg-btn px-2 text-sm leading-normal dark:bg-dark-bg-btn"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-10 flex justify-end gap-2">
            {project.demoLink && (
              <Link
                href={project.demoLink}
                target="_blank"
                className="rounded-lg bg-light-bg-btn px-7 py-3 hover:bg-light-bg-btn-hover dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover"
                title="Aller voir le repository"
              >
                Voir le projet
              </Link>
            )}
            {project.codeLink && (
              <Link
                href={project.codeLink}
                target="_blank"
                className="rounded-lg bg-light-bg-btn px-7 py-3 hover:bg-light-bg-btn-hover dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover"
                title="Consulter le site"
              >
                Voir le code
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastProjects;
