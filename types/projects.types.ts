export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  infos?: string;
  competences?: string[];
  tags: string[];
  pictures: string[];
  demoLink?: string;
  codeLink: string;
};

export interface ProjectCardProps {
  project: Project;
}
