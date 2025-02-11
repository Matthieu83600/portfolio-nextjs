import { Translation } from './translation.types';

export type SocialMediaOption = {
  id: string;
  icon: React.ComponentType<{ size: number; className: string }>;
  title: Translation;
  url: string;
};
