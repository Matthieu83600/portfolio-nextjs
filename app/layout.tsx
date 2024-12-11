import type { Metadata } from 'next';
import { ThemeContext } from './providers';
import Header from '@/components/HeaderSection/Header';
import Footer from '@/components/FooterSection/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  icons: {
    icon: '/assets/logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="mx-8 bg-slate-50 text-black antialiased dark:bg-black dark:text-white">
        <ThemeContext>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeContext>
      </body>
    </html>
  );
}
