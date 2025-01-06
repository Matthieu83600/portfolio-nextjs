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
        'light-custom-gradient': 'linear-gradient(90deg, #ece9fa, #97f0ff)',
        'dark-custom-gradient': 'linear-gradient(90deg, #473FCB, #3B35A0)',
        'light-bg-custom-gradient':
          'linear-gradient(to bottom, #FFF, #ece9fa, #97f0ff)',
        'dark-bg-custom-gradient':
          'linear-gradient(to top, #000, #161630, #161629)',
      },
      colors: {
        'dark-bg': '#161629',
        'light-bg': '#F3F0FF',
        'light-text-primary': '#0B1152',
        'light-text-secondary': '#121778',
        'dark-text-primary': '#EFECFA',
        'dark-text-secondary': '#C9C2F8',
        'light-bg-btn': '#8febfc',
        'light-bg-btn-hover': '#97f0ff',
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
