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
        className={`rounded-lg px-4 py-2 text-white ${activeCategory === '' ? 'bg-blue-500' : 'bg-slate-500'} hover:bg-blue-400`}
      >
        Tous
      </button>

      {/* Boutons pour chaque catégorie */}
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`rounded-lg px-4 py-2 text-white ${
            activeCategory === category ? 'bg-blue-500' : 'bg-gray-500'
          } hover:bg-blue-400`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default Filter;
