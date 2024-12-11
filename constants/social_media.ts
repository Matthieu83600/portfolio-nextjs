import {
  BsFillEnvelopeOpenFill,
  BsGithub,
  BsLinkedin,
  BsTwitterX,
} from 'react-icons/bs';
import { SocialMediaOption } from '@/types/socialMediaOption.types';

export const SOCIAL_MEDIA: SocialMediaOption[] = [
  {
    id: 'linkedin',
    icon: BsLinkedin, // Pas d'élément JSX, mais la référence du composant
    title: 'Mon profil LinkedIn',
    url: 'https://www.linkedin.com/in/matthieu-bonjour',
  },
  {
    id: 'twitter',
    icon: BsTwitterX,
    title: 'Mon profil Twitter',
    url: 'https://twitter.com/BonjourMat83600?=V9bTy94aQMLvl_l96_nnZA&s=09',
  },
  {
    id: 'github',
    icon: BsGithub,
    title: 'Mon profil GitHub',
    url: 'https://github.com/Matthieu83600',
  },
  {
    id: 'mail',
    icon: BsFillEnvelopeOpenFill,
    title: 'Envoyer un email',
    url: 'mailto:matthieu83600-pro@outlook.fr',
  },
];
