import { Kaushan_Script } from 'next/font/google';

const kaushan = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const HeadingDivider = ({ title = '' }) => {
  return (
    <h2
      className={`${kaushan.className} after:bg-inherited relative mb-9 flex w-full items-center gap-4 bg-gradient-to-r from-gray-100 to-gray-50 bg-clip-text text-3xl font-extrabold uppercase text-slate-950 after:h-[1px] after:flex-1 dark:text-slate-50 md:text-4xl`}
    >
      {title}{' '}
    </h2>
  );
};

export default HeadingDivider;
