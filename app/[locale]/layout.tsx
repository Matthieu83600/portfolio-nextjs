import Footer from '@/components/FooterSection/Footer';
import Header from '@/components/HeaderSection/Header';
import { routing } from '@/i18n/routing';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Lato } from 'next/font/google';
import { notFound } from 'next/navigation';
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
    icon: '/assets/logo/darklogo.svg',
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

const lato = Lato({ weight: '400', subsets: ['latin'], display: 'swap' });

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();
  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${lato.className} bg-light-bg-custom-gradient text-light-text-primary dark:bg-dark-bg-custom-gradient dark:text-dark-text-primary mx-4 overflow-x-hidden! antialiased sm:mx-8 md:mx-10`}
      >
        <ThemeContext>
          <NextIntlClientProvider messages={messages}>
            <Header locale={locale} />
            <main>
              {children}
              <Analytics />
              <SpeedInsights />
            </main>
            <Footer />
          </NextIntlClientProvider>
        </ThemeContext>
      </body>
    </html>
  );
}
