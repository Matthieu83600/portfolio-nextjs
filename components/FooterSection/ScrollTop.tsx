'use client';
import Link from 'next/link';
import { useScrollTo } from '../../hooks/useScrollTo';
import { IoIosArrowDropup } from 'react-icons/io';

const ScrollTop = () => {
  const { scrollToEl } = useScrollTo();

  const onClick = (e: never) => {
    scrollToEl(e);
  };

  return (
    <Link
      href="#intro"
      onClick={onClick}
      aria-label="Scroll to top"
      className="group relative flex"
    >
      <IoIosArrowDropup size={28} />
      <span className="absolute left-1/2 mx-auto mt-3 w-max -translate-x-1/2 translate-y-full rounded-md bg-gray-800 px-2 text-sm text-gray-100 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100">
        Scroll to top
      </span>
    </Link>
  );
};

export default ScrollTop;
