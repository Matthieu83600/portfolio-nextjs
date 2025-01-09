'use client';
import { useMediaQuery } from '../../utils/media_query';
import Logo from './Logo';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import ThemeSwitcher from './ThemeSwitcher';

const Header = ({ locale }: { locale: string }) => {
  const isMobile = useMediaQuery();

  return (
    <header className="sticky top-3 z-10 rounded-xl bg-inherit px-5 py-5 shadow-2xl">
      <div className="container-md flex justify-between">
        <Logo locale={locale} />
        <nav className="flex items-center gap-5">
          {isMobile ? (
            <MobileMenu locale={locale} />
          ) : (
            <Menu locale={locale} onClick={() => {}} />
          )}
          <div className="flex items-center gap-5">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
