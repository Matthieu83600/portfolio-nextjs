'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useScrollTo } from '../../hooks/useScrollTo';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { MENU_OPTIONS } from '../../constants/menu';
import { SITE_ROUTES } from '../../constants/routes';
import { SITE_STRINGS } from '../../constants/strings';

const Menu = ({ onClick = () => {} }) => {
  const pathname = usePathname();
  const { scrollToEl } = useScrollTo();

  const handleOnClick = (e: never) => {
    scrollToEl(e);
    window.setTimeout(() => onClick(), 350);
  };

  const mainMenu = (
    <nav role="menu">
      <ul className="flex flex-col items-start justify-center gap-5 md:flex-row md:items-center">
        {MENU_OPTIONS.map((option) => {
          return (
            <li key={option.id}>
              <a
                onClick={handleOnClick}
                href={option.url}
                title={option.name}
                className="after:transition-width relative flex gap-2 text-xl after:absolute after:-bottom-[3px] after:left-0 after:h-[2px] after:w-0 after:bg-current after:duration-300 after:ease-in-out hover:no-underline hover:after:w-full"
              >
                {option.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );

  const backMenu = (
    <div>
      <Link
        href={SITE_ROUTES.home}
        title={SITE_STRINGS.backToMainPageTitle}
        className="flex items-center gap-5"
      >
        <span>
          <BsArrowReturnLeft />
        </span>
        {SITE_STRINGS.backToMainText}
      </Link>
    </div>
  );

  const content = pathname === SITE_ROUTES.home ? mainMenu : backMenu;

  if (MENU_OPTIONS.length === 0) {
    return null;
  }

  return <div>{content}</div>;
};

export default Menu;
