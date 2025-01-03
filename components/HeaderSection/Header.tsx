'use client';
import Logo from './Logo';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import ThemeSwitcher from './ThemeSwitcher';
import { useMediaQuery } from '../../utils/media_query';

const Header = () => {
  const isMobile = useMediaQuery();

  return (
    <header className="sticky top-0 z-10 bg-inherit pb-5 pt-5 shadow-sm">
      <div className="container-md">
        <nav className="mx-2 flex items-center justify-between gap-3">
          <Logo />
          {isMobile ? <MobileMenu /> : <Menu />}
          <div className="flex items-center gap-5">
            <ThemeSwitcher />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
