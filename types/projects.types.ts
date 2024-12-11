export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  mission?: string;
  competences?: string[];
  tags: string[];
  pictures: string[];
  demoLink?: string;
  codeLink: string;
};
