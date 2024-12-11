'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
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
          className="card rounded-lg bg-gray-100 p-6 shadow-lg dark:bg-slate-900"
        >
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
                <Image src={image} alt="" width={420} height={0} />
              </SwiperSlide>
            ))}
          </Swiper>
          <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
          <p className="font-light leading-7">{project.description}</p>
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
          <div className="mt-10 flex justify-around">
            {project.demoLink && (
              <Link
                href={project.demoLink}
                target="_blank"
                className="rounded-lg p-2 hover:bg-gray-300 dark:hover:bg-blue-700"
                title="Aller voir le repository"
              >
                Voir le projet
              </Link>
            )}
            {project.codeLink && (
              <Link
                href={project.codeLink}
                target="_blank"
                className="rounded-lg p-2 hover:bg-gray-300 dark:hover:bg-blue-700"
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
