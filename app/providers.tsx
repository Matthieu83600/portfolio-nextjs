'use client';

import { ThemeProvider } from 'next-themes';
import { ThemeContextProps } from '@/types/themeContextProps.types';

export function ThemeContext({ children }: ThemeContextProps) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}
