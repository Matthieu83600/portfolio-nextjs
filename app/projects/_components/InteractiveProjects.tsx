'use client';
import { Kaushan_Script } from 'next/font/google';
import React, { useState, useEffect } from 'react';
import ProgressBarLoader from './ProgressBarLoader';
import ProjectCard from './ProjectCard';
import Filter from './Filter';
import { PROJECTS } from '@/constants/projects';

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });

const InteractiveProjects = () => {
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('');
  const categories = [
    'OpenClassrooms',
    'HTML',
    'JavaScript',
    'React',
    'Next',
    'OpenSource',
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
    <div className="container-md">
      {loading ? (
        <ProgressBarLoader />
      ) : (
        <div className="container-md">
          <div className="flex flex-col items-center gap-4 py-5">
            <h1
              className={`${kaushan.className} text-center text-5xl font-bold`}
            >
              Mes projets
            </h1>
          </div>
          <Filter
            activeCategory={activeCategory}
            categories={categories}
            onCategoryChange={setActiveCategory}
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveProjects;
