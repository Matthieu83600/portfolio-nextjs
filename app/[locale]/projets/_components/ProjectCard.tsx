'use client';
import { ProjectCardProps } from '@/types/projects.types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const t = useTranslations('ProjectsCard');
  const [isOpen, setIsOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    if (cardRef.current) {
      cardRef.current.focus();
    }
  };
  return (
    <Card
      ref={cardRef}
      tabIndex={-1}
      className="bg-light-bg-card/50 dark:bg-dark-bg-card/50 flex min-h-[400px] grow flex-col rounded-2xl border border-slate-100 p-6 shadow-lg drop-shadow-lg backdrop-blur-lg focus:ring-4 focus:ring-blue-700 focus:outline-hidden"
    >
      <div className="flex grow flex-col">
        <CardHeader className="flex justify-between">
          {/* Titre */}
          <CardTitle className="text-2xl font-bold">
            {t(project.title)}
          </CardTitle>
          <button
            onClick={toggleCollapse}
            className="items-end-safe text-right text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-label={isOpen ? 'Réduire le slider' : 'Afficher le slider'}
            title={isOpen ? 'Réduire le slider' : 'Afficher le slider'}
          >
            {isOpen ? '▲' : '▼'}
          </button>
        </CardHeader>
        <CardContent className="mt-4 grow">
          {/* Description + infos */}
          <CardDescription className="mt-4 flex grow flex-col leading-7 font-light">
            <p className="">{t(project.description)}</p>
            {project.infos && project.infos.length > 0 && (
              <div className="mt-2 italic">
                <h3>{t('subtitle')}</h3>
                <p>{t(project.infos)}</p>
              </div>
            )}
          </CardDescription>
          {/* Compétences avec titre conditionnel */}
          {project.competences && project.competences.length > 0 && (
            <>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                {t('subtitle2')}
              </h3>
              <ul className="mt-2 list-disc pl-5">
                {project.competences.map((competence, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    {t(competence)}
                  </li>
                ))}
              </ul>
            </>
          )}
          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-light-bg-btn dark:bg-dark-bg-btn rounded-2xl border border-black px-2 text-sm leading-normal dark:border-white"
              >
                {t(tag)}
              </span>
            ))}
          </div>
        </CardContent>
        <CardFooter className="mt-6 flex flex-wrap justify-center gap-4">
          {/* Liens vers le projet ou le code */}
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
      </div>
      {/* Contenu */}
      {isOpen && (
        <div className="mt-10">
          <Carousel>
            <CarouselContent>
              {project.pictures.map((image, index) => (
                <CarouselItem key={index} className="basis-1/3">
                  <Image
                    src={image}
                    alt={project.title}
                    width={420}
                    height={240}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      )}
    </Card>
  );
};

export default ProjectCard;
