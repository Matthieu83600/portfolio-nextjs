import { FaHome, FaTools } from 'react-icons/fa';
import { IoIosPerson } from 'react-icons/io';
import { BsFillBriefcaseFill } from 'react-icons/bs';
import { MenuOption } from '@/types/menuOption.types';

export const MENU_OPTIONS: MenuOption[] = [
  {
    id: '0',
    icon: FaHome,
    name: 'Accueil',
    url: '#intro',
  },
  {
    id: '1',
    icon: IoIosPerson,
    name: 'À propos',
    url: '#about',
  },
  {
    id: '2',
    icon: FaTools,
    name: 'Tech',
    url: '#tech',
  },
  {
    id: '3',
    icon: BsFillBriefcaseFill,
    name: 'Projets',
    url: '#projects',
  },
];
