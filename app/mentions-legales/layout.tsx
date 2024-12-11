import React from 'react';
import { ThemeContextProps } from '@/types/themeContextProps.types';

const Layout = ({ children }: ThemeContextProps) => {
  return <section>{children}</section>;
};

export default Layout;
