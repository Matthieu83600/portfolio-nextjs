import Footer from '@/components/FooterSection/Footer';
import Header from '@/components/HeaderSection/Header';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Lato } from 'next/font/google';
import './globals.css';
import { ThemeContext } from './providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://matthieubonjour.dev/'),
  title: {
    default: `Portfolio | Matthieu Bonjour`,
    template: `%s | Matthieu Bonjour`,
  },
  description:
    "Je m'appelle Matthieu Bonjour, et je suis développeur front-end junior. Bienvenue sur mon portfolio.",
  icons: {
    icon: '/assets/darklogo.svg',
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

const lato = Lato({ weight: '400', subsets: ['latin'] });

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${lato.className} mx-4 !overflow-x-hidden bg-light-bg-custom-gradient text-light-text-primary antialiased dark:bg-dark-bg-custom-gradient dark:text-dark-text-primary sm:mx-8 md:mx-10`}
      >
        <ThemeContext>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            <main>
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer locale={locale} />
          </NextIntlClientProvider>
        </ThemeContext>
      </body>
    </html>
  );
}
