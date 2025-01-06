import React from 'react';
import { FilterProps } from '@/types/filterProps.types';

const Filter: React.FC<FilterProps> = ({
  activeCategory,
  categories,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-5">
      {/* Bouton "Tous" pour réinitialiser le filtre */}
      <button
        onClick={() => onCategoryChange('')}
        className={`rounded-lg px-4 py-2 text-black ${activeCategory === '' ? 'bg-light-custom-gradient dark:bg-dark-custom-gradient' : 'bg-slate-100'} hover:bg-light-bg-btn-hover`}
      >
        Tous
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
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
