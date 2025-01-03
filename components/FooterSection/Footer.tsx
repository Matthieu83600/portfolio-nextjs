import Link from 'next/link';
import SocialMedia from '../HeaderSection/SocialMedia';
import ScrollTop from './ScrollTop';
import { SITE_ROUTES } from '../../constants/routes';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container-md relative mt-5 py-10 before:absolute before:left-4 before:top-0 before:h-[1px] before:w-[calc(100%-16px)] before:bg-light-bg-btn before:dark:bg-gray-100">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row md:gap-5">
        <div className="flex gap-5">
          <Link href={SITE_ROUTES.mentions} className="icon-link-btn">
            Mentions légales
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
