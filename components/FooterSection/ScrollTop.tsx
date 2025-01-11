'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { IoIosArrowDropup } from 'react-icons/io';
import { useScrollTo } from '../../hooks/useScrollTo';

const ScrollTop = () => {
  const t = useTranslations('Footer');
  const { scrollToEl } = useScrollTo();

  const onClick = (e: never) => {
    scrollToEl(e);
  };

  return (
    <Link
      href="#intro"
      onClick={onClick}
      aria-label={t('scrollTop')}
      className="group relative flex"
      title={t('scrollTop')}
    >
      <IoIosArrowDropup size={28} />
    </Link>
  );
};

export default ScrollTop;
