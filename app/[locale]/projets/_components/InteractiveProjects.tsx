'use client';
import { PROJECTS } from '@/constants/projects';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import Filter from './Filter';
import ProgressBarLoader from './ProgressBarLoader';
import ProjectCard from './ProjectCard';

const InteractiveProjects = () => {
  const t = useTranslations('ProjectsCard');
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const categories = [
    'Filter.OpenClassrooms',
    'Filter.FRM',
    'Filter.Udemy',
    'Filter.OpenSource',
    'Filter.otherProjects',
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Filtrage des projets en fonction de la catégorie sélectionnée
  const filteredProjects = activeCategory
    ? PROJECTS.filter((project) => project.category === activeCategory)
    : PROJECTS;

  return (
    <>
      {loading ? (
        <ProgressBarLoader />
      ) : (
        <div className="container-md">
          <div className="flex flex-col items-center gap-4 py-5">
            <h1 className="text-center text-5xl font-bold">{t('title')}</h1>
          </div>
          <Filter
            activeCategory={activeCategory}
            categories={categories}
            onCategoryChange={setActiveCategory}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects
              .slice()
              .reverse()
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </div>
      )}
    </>
  );
};

export default InteractiveProjects;
