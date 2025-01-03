import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'light-custom-gradient': 'linear-gradient(90deg, #7D72F7, #A99EFF)',
        'dark-custom-gradient': 'linear-gradient(90deg, #473FCB, #3B35A0)',
      },
      colors: {
        'dark-bg': '#161629',
        'light-bg': '#F3F0FF',
        'light-text-primary': '#0B1152',
        'light-text-secondary': '#121778',
        'dark-text-primary': '#EFECFA',
        'dark-text-secondary': '#C9C2F8',
        'light-bg-btn': '#7D72F7',
        'light-bg-btn-hover': '#A99EFF',
        'dark-bg-btn': '#473FCB',
        'dark-bg-btn-hover': '#3B35A0',
        'light-bg-card': '#ece9fa',
        'dark-bg-card': '#262355',
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require('tailwind-scrollbar')],
} satisfies Config;
