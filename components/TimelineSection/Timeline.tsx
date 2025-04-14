'use client';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useMemo } from 'react';

const TimeLine = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const t = useTranslations('HomePage');

  const TimeLineData = useMemo(
    () => [
      {
        year: '2024',
        text: t('TimelineSection.2024.text1'),
        default: true, // Cet élément sera visible en premier
      },
      {
        year: '2024',
        text: t('TimelineSection.2024.text3'),
      },
      {
        year: '2024',
        text: t('TimelineSection.2024.text2'),
      },
      {
        year: '2023',
        text: t('TimelineSection.2023.text1'),
      },
      { year: '2023-2019', text: t('TimelineSection.2023-2019.text1') },
      { year: '2019', text: t('TimelineSection.2019.text1') },
      { year: '2018-2014', text: t('TimelineSection.2018-2014.text1') },
      { year: '2014-2010', text: t('TimelineSection.2014-2010.text1') },
    ],
    [t]
  );

  useEffect(() => {
    if (carouselRef.current) {
      // Trouver l'index de l'élément avec `default: true`
      const defaultIndex = TimeLineData.findIndex((item) => item.default);
      if (defaultIndex !== -1) {
        const carousel = carouselRef.current;
        const elementWidth = carousel.scrollWidth / TimeLineData.length;

        // Ajuster le défilement pour centrer l'élément
        carousel.scrollLeft = elementWidth * defaultIndex;
      }
    }
  }, [TimeLineData]);

  return (
    <section id="timeline" className="mt-5 -mb-5">
      <ul
        ref={carouselRef}
        className="scrollbar-thin scrollbar-track-transparent scrollbar-thumb-light-bg-btn dark:scrollbar-thumb-dark-bg-btn flex snap-x snap-mandatory gap-5 overflow-x-auto py-5"
      >
        {TimeLineData.map((item, index) => (
          <li
            id={`carousel__item-${index}`}
            key={index}
            className="flex min-w-[250px] snap-start flex-col gap-3 hover:cursor-default sm:w-1/3 md:w-1/6"
          >
            <h3
              aria-label={"Ce que j'ai fait en " + item.year}
              className="flex items-center gap-4 text-2xl font-bold"
            >
              {`${item.year}`}
              <hr className="border-light-bg-btn dark:border-dark-bg-btn w-[58%] border-2" />
            </h3>
            <p className="tracking-wide">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TimeLine;
