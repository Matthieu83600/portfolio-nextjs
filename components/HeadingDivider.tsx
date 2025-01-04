import { Kaushan_Script } from "next/font/google";

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });

const HeadingDivider = ({ title = '' }) => {
  return (
    <header className="flex items-center">
      <h2
        className={`${kaushan.className} after:bg-inherited relative flex w-full items-center gap-4 bg-gradient-to-r from-gray-100 to-gray-50 bg-clip-text text-3xl font-extrabold uppercase text-slate-950 after:h-[1px] after:flex-1 dark:text-slate-50 md:text-4xl`}
      >
        {title}{' '}
        <hr className="w-[73.9%] rounded-md border-2 border-light-bg-btn dark:border-dark-bg-btn" />
      </h2>
    </header>
  );
};

export default HeadingDivider;
