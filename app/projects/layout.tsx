import type { Metadata } from 'next';
import { ThemeContextProps } from '@/types/themeContextProps.types';

export const metadata: Metadata = {
  title: 'Projets',
};

const Layout = ({ children }: ThemeContextProps) => {
  return <section>{children}</section>;
};

export default Layout;
