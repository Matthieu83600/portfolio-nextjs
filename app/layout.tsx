import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { ThemeContext } from './providers';
import Header from '@/components/HeaderSection/Header';
import Footer from '@/components/FooterSection/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://matthieubonjour.dev/'),
  title: {
    default: `Portfolio | Matthieu Bonjour`,
    template: `%s | Matthieu Bonjour`,
  },
  description:
    "Je m'appelle Matthieu Bonjour, et je suis développeur front-end junior. Bienvenue sur mon portfolio.",
  icons: {
    icon: '/assets/logo.svg',
  },
  creator: 'Matthieu Bonjour',
  authors: [{ name: 'Matthieu Bonjour', url: 'https://matthieubonjour.dev' }],
  keywords: [
    'Matthieu Bonjour',
    'Matthieu Bonjour - développeur',
    'Matthieu Bonjour - developer',
    'Développeur front-end',
    'Frontend developer',
    'Site portfolio',
    'Portfolio website',
    'Portfolio développeur front-end',
    'Frontend Developer Portfolio',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="mx-4 bg-light-bg text-light-text-primary antialiased dark:bg-dark-bg dark:text-dark-text-primary md:mx-8">
        <ThemeContext>
          <Header />
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
