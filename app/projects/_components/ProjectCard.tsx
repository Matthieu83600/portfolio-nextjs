'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { ProjectCardProps } from '@/types/projects.types';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
      className="flex min-h-[400px] flex-col justify-between rounded-lg bg-gray-200 p-5 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-700 dark:bg-slate-900"
    >
      <div className="flex flex-grow flex-col">
        {/* Titre */}
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">{project.title}</h3>
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
        <div className="mt-4 flex flex-grow flex-col font-light leading-7">
          <p className="">{project.description}</p>
          {project.infos && project.infos.length > 0 && (
            <div className="italic">
              <h4>
                <u>Informations :</u>
              </h4>
              <p>{project.infos}</p>
            </div>
          )}
        </div>
        {/* Compétences avec titre conditionnel */}
        <div className="mt-4 flex-grow">
          {project.competences && project.competences.length > 0 && (
            <>
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Compétences développées :
              </h4>
              <ul className="mt-2 list-disc pl-5">
                {project.competences.map((competence, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-700 dark:text-gray-300"
                  >
                    {competence}
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
              className="bg-gray-300 px-2 text-sm leading-normal dark:bg-blue-700"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Liens vers le projet ou le code */}
        <div className="mt-6 flex justify-end gap-4">
          {project.demoLink && (
            <Link
              href={project.demoLink}
              target="_blank"
              className="rounded-lg bg-gray-300 p-2 dark:bg-blue-700"
              title="Voir le projet"
            >
              Voir le projet
            </Link>
          )}
          {project.codeLink && (
            <Link
              href={project.codeLink}
              target="_blank"
              className="rounded-lg bg-gray-300 p-2 dark:bg-blue-700"
              title="Voir le code"
            >
              Voir le code
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
