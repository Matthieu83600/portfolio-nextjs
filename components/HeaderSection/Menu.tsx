'use client';
import { useScrollTo } from '@/hooks/useScrollTo';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { MENU_OPTIONS } from '../../constants/menu';
import LocaleSwitcher from './LocaleSwitcher';
import ThemeSwitcher from './ThemeSwitcher';

const Menu = ({ locale, onClick }: { locale: string; onClick: () => void }) => {
  const pathname = usePathname();

  const { scrollToEl } = useScrollTo();

  const handleOnClick = (e: never) => {
    scrollToEl(e);
    window.setTimeout(() => onClick(), 350);
  };

  const t = useTranslations('Header');

  const mainMenu = (
    <nav role="menu" className="flex items-center justify-between gap-5">
      <ul className="flex flex-col items-start justify-center gap-5 md:flex-row md:items-center">
        {MENU_OPTIONS.map((option) => {
          return (
            <li key={option.id}>
              <a
                onClick={handleOnClick}
                href={option.url}
                title={t(option.name)}
                className="after:transition-width text-md relative flex gap-2 after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full md:text-lg lg:text-2xl"
              >
                {t(option.name)}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-5">
        <ThemeSwitcher />
        <LocaleSwitcher locale={locale} />
      </div>
    </nav>
  );

  const backMenu = (
    <div>
      <Link
        href={`/${locale}`}
        title={t('Navbar.backMenu.backToMainPageTitle')}
        className="flex items-center gap-5"
      >
        <span>
          <BsArrowReturnLeft />
        </span>
        {t('Navbar.backMenu.backToMainText')}
      </Link>
    </div>
  );

  const content = pathname === `/${locale}` ? mainMenu : backMenu;

  if (MENU_OPTIONS.length === 0) {
    return null;
  }

  return <div>{content}</div>;
};

export default Menu;
