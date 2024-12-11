import { TechnologyList } from '@/types/technologyList.types';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiJqueryLogo } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import {
  FaSass,
  FaReact,
  FaNode,
  FaGitAlt,
  FaFigma,
  FaTrello,
  FaSlack,
} from 'react-icons/fa';
import { BsBootstrap } from 'react-icons/bs';
import {
  TbBrandTypescript,
  TbBrandRedux,
  TbBrandNextjs,
  TbBrandVue,
  TbBrandTailwind,
  TbBrandGitlab,
  TbBrandVscode,
} from 'react-icons/tb';
import { SiExpress, SiMongodb, SiSwagger, SiPostman } from 'react-icons/si';
import { BiLogoPostgresql } from 'react-icons/bi';

export const TECHNOLOGIES: TechnologyList = [
  {
    category: 'Front-end',
    items: [
      { name: 'HTML', icon: AiFillHtml5 },
      { name: 'CSS', icon: DiCss3 },
      { name: 'Sass', icon: FaSass },
      { name: 'JS', icon: IoLogoJavascript },
      { name: 'jQuery', icon: DiJqueryLogo },
      { name: 'TypeScript', icon: TbBrandTypescript },
      { name: 'React', icon: FaReact },
      { name: 'Redux', icon: TbBrandRedux },
      { name: 'Next', icon: TbBrandNextjs },
      { name: 'Vue', icon: TbBrandVue },
      { name: 'Tailwind CSS', icon: TbBrandTailwind },
      { name: 'Bootstrap', icon: BsBootstrap },
    ],
  },
  {
    category: 'Back-end',
    items: [
      { name: 'Node', icon: FaNode },
      { name: 'Express', icon: SiExpress },
    ],
  },
  {
    category: 'Bases de données',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Postgresql', icon: BiLogoPostgresql },
    ],
  },
  {
    category: 'Versioning',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Github', icon: AiFillGithub },
      { name: 'Gitlab', icon: TbBrandGitlab },
    ],
  },
  {
    category: 'Outils UI/UX',
    items: [{ name: 'Figma', icon: FaFigma }],
  },
  {
    category: 'IDE',
    items: [{ name: 'VsCode', icon: TbBrandVscode }],
  },
  {
    category: 'Autres outils',
    items: [
      { name: 'Trello', icon: FaTrello },
      { name: 'Slack', icon: FaSlack },
      { name: 'Swagger', icon: SiSwagger },
      { name: 'Postman', icon: SiPostman },
    ],
  },
];
