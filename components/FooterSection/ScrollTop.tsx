'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
      >
        <line x1="12" y1="19" x2="12" y2="5" />
        <polyline points="5 12 12 5 19 12" />
      </svg>
    </Link>
  );
};

export default ScrollTop;
