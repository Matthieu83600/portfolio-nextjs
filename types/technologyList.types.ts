export type TechnologyList = TechnologyCategory[];

export type TechnologyCategory = {
  category: string;
  items: TechnologyItem[];
};

export type TechnologyItem = {
  name: string;
  icon: React.ComponentType<{ size: number; className?: string }>;
};
