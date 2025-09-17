'use client';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useScrollTo } from '../../hooks/useScrollTo';
import { Button } from '../ui/button';

const IntroSection = () => {
  const t = useTranslations('HomePage.IntroSection');
  const { scrollToEl } = useScrollTo();
  const onClick = (e: never) => scrollToEl(e);

  return (
    <section id="intro">
      <div className="flex flex-col items-center gap-4 py-5">
        <div className="py-5 md:py-10">
          <h2 className="text-center text-3xl font-bold italic md:text-5xl xl:text-6xl">
            {t('title')}
          </h2>
          <p className="text-light-text-secondary dark:text-dark-text-secondary mt-3 mb-10 text-xl">
            {t('description')}
          </p>
          <div className="flex flex-col gap-10 sm:flex-row">
            <Button variant="primary" size="perso">
              <Link
                href="#projects"
                onClick={onClick}
                aria-label="Derniers projets"
              >
                {t('linkProjects')}
              </Link>
            </Button>
            <Button variant="primary" size="perso">
              <Link
                href="https://cvdesignr.com/p/65770bab74d9f"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Mon CV"
              >
                {t('linkCV')}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
