'use client';
import { Link } from '@/i18n/routing';
import { useTheme } from 'next-themes';
import { Kaushan_Script } from 'next/font/google';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });

const Logo = ({ locale }: { locale: string }) => {
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
    <div className="flex items-center gap-2 text-xl font-bold lg:text-4xl">
      {pathname === `/${locale}` ? (
        <>
          <Image
            src={
              theme === 'dark'
                ? '/assets/logo/darklogo.svg'
                : '/assets/logo/logo.svg'
            }
            width={0}
            height={0}
            style={{ width: '70px', height: 'auto' }}
            loading="lazy"
            alt="Mon logo"
          />
          <h1 className={`${kaushan.className} hidden lg:block`}>
            Matthieu Bonjour
          </h1>
        </>
      ) : (
        <Link
          href={`/${locale}`}
          aria-label="Aller à la page d'accueil"
          role="link"
        >
          <Image
            src={
              theme === 'dark'
                ? '/assets/logo/darklogo.svg'
                : '/assets/logo/logo.svg'
            }
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
