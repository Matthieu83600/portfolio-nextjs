import { SocialMediaOption } from '@/types/socialMediaOption.types';
import {
  BsFillEnvelopeOpenFill,
  BsGithub,
  BsGitlab,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs';

export const SOCIAL_MEDIA: SocialMediaOption[] = [
  {
    id: 'linkedin',
    icon: BsLinkedin, // Pas d'élément JSX, mais la référence du composant
    title: 'linkedin',
    url: 'https://www.linkedin.com/in/matthieu-bonjour',
  },
  {
    id: 'twitter',
    icon: BsTwitterX,
    title: 'twitter',
    url: 'https://twitter.com/BonjourMat83600?=V9bTy94aQMLvl_l96_nnZA&s=09',
  },
  {
    id: 'gitlab',
    icon: BsGitlab,
    title: 'gitlab',
    url: 'https://gitlab.com/Matthieu83600',
  },
  {
    id: 'github',
    icon: BsGithub,
    title: 'github',
    url: 'https://github.com/Matthieu83600',
  },
  {
    id: 'mail',
    icon: BsFillEnvelopeOpenFill,
    title: 'mail',
    url: 'mailto:matthieu83600-pro@outlook.fr',
  },
];
