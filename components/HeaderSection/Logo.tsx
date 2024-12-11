'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SITE_ROUTES } from '../../constants/routes';

const Logo = () => {
  const pathname = usePathname();

  return (
    <h3 className="text-xl font-bold md:text-2xl">
      {pathname === SITE_ROUTES.home ? (
        <>
          <Image
            src="/assets/logo.svg"
            width={0}
            height={0}
            style={{ width: '70px', height: 'auto' }}
            loading="lazy"
            alt="Mon logo"
          />
        </>
      ) : (
        <Link href={SITE_ROUTES.home} aria-label="Go to home page" role="link">
          <Image
            src="/assets/logo.svg"
            width={0}
            height={0}
            style={{ width: '70px', height: 'auto' }}
            alt="Mon logo"
          />
        </Link>
      )}
    </h3>
  );
};

export default Logo;
