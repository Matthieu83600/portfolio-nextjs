'use client';
import { ProjectCardProps } from '@/types/projects.types';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

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
    <div
      ref={cardRef}
      tabIndex={-1}
      className="bg-light-bg-card dark:bg-dark-bg-card flex min-h-[400px] flex-col justify-between rounded-lg p-5 shadow-lg focus:ring-4 focus:ring-blue-700 focus:outline-hidden"
    >
      <div className="flex grow flex-col">
        {/* Titre */}
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">{t(project.title)}</h2>
          <button
            onClick={toggleCollapse}
            className="text-right text-gray-700 transition hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            aria-label={isOpen ? 'Réduire le slider' : 'Afficher le slider'}
            title={isOpen ? 'Réduire le slider' : 'Afficher le slider'}
          >
            {isOpen ? '▲' : '▼'}
          </button>
        </div>
        {/* Description + infos */}
        <div className="mt-4 flex grow flex-col leading-7 font-light">
          <p className="">{t(project.description)}</p>
          {project.infos && project.infos.length > 0 && (
            <div className="mt-2 italic">
              <h3>{t('subtitle')}</h3>
              <p>{t(project.infos)}</p>
            </div>
          )}
        </div>
        {/* Compétences avec titre conditionnel */}
        <div className="mt-4 grow">
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
        </div>
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
        {/* Liens vers le projet ou le code */}
        <div className="mt-6 flex justify-end gap-4">
          {project.demoLink && (
            <Link
              href={project.demoLink}
              target="_blank"
              className="bg-light-bg-btn hover:bg-light-bg-btn-hover dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover rounded-lg border border-black px-7 py-3 dark:border-white"
              title="Voir le projet"
            >
              {t('linkView')}
            </Link>
          )}
          {project.codeLink && (
            <Link
              href={project.codeLink}
              target="_blank"
              className="bg-light-bg-btn hover:bg-light-bg-btn-hover dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover rounded-lg border border-black px-7 py-3 dark:border-white"
              title="Voir le code"
            >
              {t('linkCode')}
            </Link>
          )}
        </div>
      </div>
      {/* Contenu */}
      {isOpen && (
        <div className="mt-10">
          {/* Swiper pour afficher les images du projet */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {project.pictures.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={project.title}
                  width={420}
                  height={240}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
