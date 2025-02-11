import { FilterProps } from '@/types/filterProps.types';
import { useTranslations } from 'next-intl';
import React from 'react';

const Filter: React.FC<FilterProps> = ({
  activeCategory,
  categories,
  onCategoryChange,
}) => {
  const t = useTranslations('ProjectsCard');
  return (
    <div className="flex flex-wrap justify-center gap-4 py-5">
      {/* Bouton "Tous" pour réinitialiser le filtre */}
      <button
        onClick={() => onCategoryChange('')}
        className={`rounded-lg px-4 py-2 text-black ${activeCategory === '' ? 'bg-light-custom-gradient dark:bg-dark-custom-gradient' : 'bg-slate-100'} hover:bg-light-bg-btn-hover`}
      >
        {t('Filter.all')}
      </button>

      {/* Boutons pour chaque catégorie */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-lg px-4 py-2 text-black ${
            activeCategory === category
              ? 'bg-light-custom-gradient dark:bg-dark-custom-gradient'
              : 'bg-slate-100'
          } hover:bg-light-bg-btn-hover`}
        >
          {t(category)}
        </button>
      ))}
    </div>
  );
};

export default Filter;
