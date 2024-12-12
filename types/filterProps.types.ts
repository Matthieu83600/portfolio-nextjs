export interface FilterProps {
  activeCategory: string;
  categories: string[];
  onCategoryChange: (category: string) => void;
}
