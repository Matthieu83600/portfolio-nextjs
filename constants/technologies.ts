import { TechnologyList } from '@/types/technologyList.types';
import { AiFillGithub, AiFillHtml5 } from 'react-icons/ai';
import { BiLogoPostgresql } from 'react-icons/bi';
import { BsBootstrap } from 'react-icons/bs';
import { DiCss3, DiJqueryLogo } from 'react-icons/di';
import {
  FaFigma,
  FaGitAlt,
  FaNode,
  FaReact,
  FaSass,
  FaSlack,
  FaTrello,
} from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SiExpress, SiMongodb, SiPostman, SiSwagger } from 'react-icons/si';
import {
  TbBrandGitlab,
  TbBrandNextjs,
  TbBrandRedux,
  TbBrandTailwind,
  TbBrandTypescript,
  TbBrandVscode,
  TbBrandVue,
} from 'react-icons/tb';

export const TECHNOLOGIES: TechnologyList = [
  {
    category: 'category.front',
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
    category: 'category.back',
    items: [
      { name: 'Node', icon: FaNode },
      { name: 'Express', icon: SiExpress },
    ],
  },
  {
    category: 'category.databases',
    items: [
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Postgresql', icon: BiLogoPostgresql },
    ],
  },
  {
    category: 'category.version',
    items: [
      { name: 'Git', icon: FaGitAlt },
      { name: 'Github', icon: AiFillGithub },
      { name: 'Gitlab', icon: TbBrandGitlab },
    ],
  },
  {
    category: 'category.tools',
    items: [{ name: 'Figma', icon: FaFigma }],
  },
  {
    category: 'category.ide',
    items: [{ name: 'VsCode', icon: TbBrandVscode }],
  },
  {
    category: 'category.other',
    items: [
      { name: 'Trello', icon: FaTrello },
      { name: 'Slack', icon: FaSlack },
      { name: 'Swagger', icon: SiSwagger },
      { name: 'Postman', icon: SiPostman },
    ],
  },
];
