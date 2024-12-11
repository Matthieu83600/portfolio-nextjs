'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { TextElementProps } from '../../types/textElement.types';
import { useScrollTo } from '../../hooks/useScrollTo';

const IntroSection = () => {
  const { scrollToEl } = useScrollTo();

  const [count, setCount] = useState(0);
  const [text] = useState([
    'suis passionné de nouvelles technologies.',
    'continue à développer mes compétences.',
    'prends du plaisir à coder.',
    'développe des sites avec React / Nextjs.',
  ]);

  const onClick = (e: never) => scrollToEl(e);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count + 1);

      if (count === 3) {
        setCount(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section id="intro" className="section">
      <div className="flex flex-col items-center gap-4 py-5">
        <div className="py-5 md:py-10">
          <h1
            className="text-3xl font-bold md:text-5xl xl:text-6xl"
            style={{
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            <p className="text-center leading-[145%]">
              Salut, je suis{' '}
              <mark className="bg-blue-700 dark:bg-sky-300">Matthieu</mark> un
              développeur front-end junior{' '}
              <mark className="bg-blue-700 dark:bg-sky-300">passionné</mark>.
            </p>
          </h1>

          <div className="relative mt-5 flex flex-col overflow-hidden">
            <p
              className="transform-none text-[17px] opacity-100 md:text-2xl"
              style={{
                transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
              }}
            >
              Je
              <span
                className="ease-in-expo absolute ml-4 flex flex-col transition-all duration-500"
                style={{
                  top:
                    count === 0
                      ? '0'
                      : count === 1
                        ? '-100%'
                        : count === 2
                          ? '-200%'
                          : count === 3
                            ? '-300%'
                            : '0',
                  left: '13px',
                }}
              >
                {text.map((element) => (
                  <TextElement key={element} element={element} />
                ))}
              </span>
            </p>
          </div>
          <p
            className="mb-10 mt-3 text-xl text-gray-500"
            style={{
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
          >
            Je vous laisse découvrir mon portfolio.
          </p>
          <div
            style={{
              transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
            }}
            className="flex flex-col gap-10 sm:flex-row"
          >
            <Link
              href="#projects"
              onClick={onClick}
              className="rounded-md bg-blue-700 p-2 text-slate-50"
              aria-label="Derniers projets"
            >
              Voir mes derniers projets
            </Link>
            <Link
              href="https://cvdesignr.com/p/65770bab74d9f"
              target="_blank"
              className="rounded-md bg-blue-700 p-2 text-slate-50"
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

const TextElement: React.FC<TextElementProps> = ({ element }) => {
  const firstWord = <b>{element.split(' ').at(0)}</b>;
  const restWords = element.split(' ').slice(1).join(' ');

  return (
    <span
      className="text-[17px] md:text-2xl"
      style={{
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
    >
      {firstWord} {restWords}
    </span>
  );
};
