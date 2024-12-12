'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { ProjectCardProps } from '@/types/projects.types';

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="card rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-slate-900">
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
            <Image src={image} alt={project.title} width={420} height={240} />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Titre et Description */}
      <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
      <p className="font-light leading-7">{project.description}</p>

      {/* Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
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
      <div className="mt-6 flex justify-around">
        {project.demoLink && (
          <Link
            href={project.demoLink}
            target="_blank"
            className="rounded-lg p-2 hover:bg-gray-300 dark:hover:bg-blue-700"
            title="Voir le projet"
          >
            Voir le projet
          </Link>
        )}
        {project.codeLink && (
          <Link
            href={project.codeLink}
            target="_blank"
            className="rounded-lg p-2 hover:bg-gray-300 dark:hover:bg-blue-700"
            title="Voir le code"
          >
            Voir le code
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
