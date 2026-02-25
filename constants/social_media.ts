import { SocialMediaOption } from '@/types/socialMediaOption.types';
import { TbBrandGithub, TbBrandGitlab, TbBrandLinkedin, TbBrandTwitter } from 'react-icons/tb';

export const SOCIAL_MEDIA: SocialMediaOption[] = [
  {
    id: 'linkedin',
    icon: TbBrandLinkedin, // Pas d'élément JSX, mais la référence du composant
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/matthieu-bonjour',
  },
  {
    id: 'twitter',
    icon: TbBrandTwitter,
    title: 'twitter',
    url: 'https://twitter.com/BonjourMat83600?=V9bTy94aQMLvl_l96_nnZA&s=09',
  },
  {
    id: 'gitlab',
    icon: TbBrandGitlab,
    title: 'gitlab',
    url: 'https://gitlab.com/Matthieu83600',
  },
  {
    id: 'github',
    icon: TbBrandGithub,
    title: 'github',
    url: 'https://github.com/Matthieu83600',
  },
];
