'use client';
import { PROJECTS } from '@/constants/projects';
import { Project } from '@/types/projects.types';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '../ui/button';

const LastProjects = () => {
  const t = useTranslations('ProjectsCard');
  // Récupère les 3 derniers projets
  const lastProjects = PROJECTS.slice(-3);

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
      {lastProjects.map((project: Project) => (
        <Card
          key={project.id}
          className="bg-light-bg-card/50 dark:bg-dark-bg-card/50 flex min-h-[400px] grow flex-col rounded-2xl border border-slate-100 p-3 shadow-lg drop-shadow-lg backdrop-blur-lg"
        >
          <CardHeader className="flex grow flex-col">
            <CardTitle className="mt-4 text-2xl font-bold">
              {t(project.title)}
            </CardTitle>
            <CardDescription className="leading-7 font-light">
              {t(project.description)}
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-light-bg-btn dark:bg-dark-bg-btn rounded-2xl border border-black px-2 text-sm leading-normal dark:border-white"
              >
                {t(tag)}
              </span>
            ))}
          </CardContent>
          <CardFooter className="flex flex-wrap justify-around gap-2">
            {project.demoLink && (
              <Button variant="primary">
                <Link
                  href={project.demoLink}
                  target="_blank"
                  title={t('titleLinkView')}
                >
                  {t('linkView')}
                </Link>
              </Button>
            )}
            {project.codeLink && (
              <Button variant="primary">
                <Link
                  href={project.codeLink}
                  target="_blank"
                  title={t('titleLinkCode')}
                >
                  {t('linkCode')}
                </Link>
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default LastProjects;
