import { Link } from '../../i18n/navigation';
import { useTranslations } from 'next-intl';
import SocialMedia from '../HeaderSection/SocialMedia';
import ScrollTop from './ScrollTop';

const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations('Footer');

  return (
    <footer className="container-md before:bg-light-bg-btn relative mt-5 py-10 before:absolute before:top-0 before:left-4 before:h-[1px] before:w-[calc(100%-16px)] dark:before:bg-gray-100">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-5">
        <div className="flex gap-5">
          <Link
            href={{ pathname: '/mentions-legales' }}
            className="icon-link-btn"
          >
            {t('links.mentions')}
          </Link>
        </div>
        <p className="font-light">Copyright &copy; {year} Matthieu Bonjour</p>
        <SocialMedia />
        <ScrollTop />
      </div>
    </footer>
  );
};

export default Footer;
