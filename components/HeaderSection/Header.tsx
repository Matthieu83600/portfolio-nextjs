'use client';
import { useMediaQuery } from '../../utils/media_query';
import Menu from './Menu';
import MobileMenu from './MobileMenu';

const Header = ({ locale }: { locale: string }) => {
  const isMobile = useMediaQuery();

  return (
    <header className="sticky top-3 z-30 rounded-xl bg-inherit px-5 py-5 shadow-2xl">
      <div className="container-md flex items-center justify-between">
        <h1 className="sr-only">Matthieu Bonjour</h1>
        <p id="logo" className="text-2xl font-extrabold italic lg:text-4xl">
          MB.
        </p>
        <div className="flex items-center gap-5">
          {isMobile ? (
            <MobileMenu locale={locale} />
          ) : (
            <Menu locale={locale} onClick={() => {}} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
