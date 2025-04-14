'use client';
import * as React from 'react';
import { useTranslations } from 'next-intl';
import { useEffect, useRef, useMemo } from 'react';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const TimeLine = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const t = useTranslations('HomePage');

  const TimeLineData = useMemo(
    () => [
      {
        id: '1',
        year: '2025',
        text: t('TimelineSection.2024.text1'),
        default: true, // Cet élément sera visible en premier
      },

      {
        id: '2',
        year: "2024 - Aujourd'hui",
        text: t('TimelineSection.2024.text2'),
      },
      {
        id: '3',
        year: '2024',
        text: t('TimelineSection.2024.text3'),
      },
      {
        id: '4',
        year: '2023',
        text: t('TimelineSection.2023.text1'),
      },
      {
        id: '5',
        year: '2023-2019',
        text: t('TimelineSection.2023-2019.text1'),
      },
      {
        id: '6',
        year: '2019',
        text: t('TimelineSection.2019.text1'),
      },
      {
        id: '7',
        year: '2018-2014',
        text: t('TimelineSection.2018-2014.text1'),
      },
      {
        id: '8',
        year: '2014-2010',
        text: t('TimelineSection.2014-2010.text1'),
      },
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
    <section id="timeline" className="mt-10 mb-5 md:mt-5">
      <ScrollArea className="rounded-md border">
        <div className="flex space-x-4 p-4">
          {TimeLineData.map((data) => (
            <div
              key={data.id}
              className="flex w-[20%] shrink-0 flex-col items-center gap-2"
            >
              <h3 className="text-foreground pt-2 text-lg font-semibold">
                {data.year}
              </h3>
              <span className="text-muted-foreground font-semibold">
                {data.text}
              </span>
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </section>
  );
};

export default TimeLine;
