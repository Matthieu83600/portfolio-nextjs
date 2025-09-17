import { SocialMediaOption } from '@/types/socialMediaOption.types';
import { Github, Gitlab, Linkedin, Twitter } from 'lucide-react';

export const SOCIAL_MEDIA: SocialMediaOption[] = [
  {
    id: 'linkedin',
    icon: Linkedin, // Pas d'élément JSX, mais la référence du composant
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/matthieu-bonjour',
  },
  {
    id: 'twitter',
    icon: Twitter,
    title: 'twitter',
    url: 'https://twitter.com/BonjourMat83600?=V9bTy94aQMLvl_l96_nnZA&s=09',
  },
  {
    id: 'gitlab',
    icon: Gitlab,
    title: 'gitlab',
    url: 'https://gitlab.com/Matthieu83600',
  },
  {
    id: 'github',
    icon: Github,
    title: 'github',
    url: 'https://github.com/Matthieu83600',
  },
];
