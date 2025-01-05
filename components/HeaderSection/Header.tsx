'use client';
import Logo from './Logo';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import ThemeSwitcher from './ThemeSwitcher';
import { useMediaQuery } from '../../utils/media_query';

const Header = () => {
  const isMobile = useMediaQuery();

  return (
    <header className="sticky top-3 z-10 bg-inherit py-5 shadow-2xl rounded-xl px-5">
      <div className="container-md flex justify-between">
        <Logo />
        <nav className="flex items-center gap-5">
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
