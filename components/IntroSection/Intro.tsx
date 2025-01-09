'use client';
import { Kaushan_Script } from 'next/font/google';
import Link from 'next/link';
import { useScrollTo } from '../../hooks/useScrollTo';

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });

const IntroSection = () => {
  const { scrollToEl } = useScrollTo();
  const onClick = (e: never) => scrollToEl(e);

  return (
    <section id="intro">
      <div className="flex flex-col items-center gap-4 py-5">
        <div className="py-5 md:py-10">
          <h1
            className="text-3xl font-bold md:text-5xl xl:text-6xl"
            style={{
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <p className={`${kaushan.className} text-center leading-[160%]`}>
              Salut, je suis{' '}
              <span className="rounded-lg bg-light-custom-gradient p-1 dark:bg-dark-custom-gradient">
                Matthieu
              </span>{' '}
              un développeur front-end junior{' '}
              <span className="rounded-lg bg-light-custom-gradient p-1 dark:bg-dark-custom-gradient">
                passionné
              </span>
              .
            </p>
          </h1>
          <p className="mb-10 mt-3 text-xl text-light-text-secondary dark:text-dark-text-secondary">
            Je vous laisse découvrir mon portfolio.
          </p>
          <div className="flex flex-col gap-10 sm:flex-row">
            <Link
              href="#projects"
              onClick={onClick}
              className="rounded-lg border border-black bg-light-bg-btn px-7 py-3 text-[14pt] hover:bg-light-bg-btn-hover dark:border-white dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover"
              aria-label="Derniers projets"
            >
              Voir mes derniers projets
            </Link>
            <Link
              href="https://cvdesignr.com/p/65770bab74d9f"
              target="_blank"
              className="rounded-lg border border-black bg-light-bg-btn px-7 py-3 text-[14pt] hover:bg-light-bg-btn-hover dark:border-white dark:bg-dark-bg-btn dark:hover:bg-dark-bg-btn-hover"
              aria-label="Mon CV"
            >
              Regarder mon CV
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
