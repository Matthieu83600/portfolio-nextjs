'use client';
import { useTheme } from 'next-themes';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      aria-label="Changer de thème"
    >
      {currentTheme === 'dark' ? (
        <BsSun size={24} fill="yellow" />
      ) : (
        <BsMoon size={24} fill="dark" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
