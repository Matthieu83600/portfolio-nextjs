'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Kaushan_Script } from 'next/font/google';
import { useTheme } from 'next-themes';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SITE_ROUTES } from '../../constants/routes';

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });

const Logo = () => {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-xl font-bold md:text-2xl">
      {pathname === SITE_ROUTES.home ? (
        <>
          <Image
            src={theme === 'dark' ? '/assets/darklogo.svg' : '/assets/logo.svg'}
            width={0}
            height={0}
            style={{ width: '70px', height: 'auto' }}
            loading="lazy"
            alt="Mon logo"
          />
          <h1 className={`${kaushan.className} sm:text-4xl`}>
            Matthieu Bonjour
          </h1>
        </>
      ) : (
        <Link
          href={SITE_ROUTES.home}
          aria-label="Aller à la page d'accueil"
          role="link"
        >
          <Image
            src={theme === 'dark' ? '/assets/darklogo.svg' : '/assets/logo.svg'}
            width={0}
            height={0}
            style={{ width: '70px', height: 'auto' }}
            alt="Mon logo"
          />
        </Link>
      )}
    </div>
  );
};

export default Logo;
