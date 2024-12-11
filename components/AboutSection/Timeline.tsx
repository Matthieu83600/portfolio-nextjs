import { useRef, useEffect } from 'react';

const TimeLineData = [
  {
    year: '2024',
    text: 'En recherche active pour un poste junior en tant que développeur intégrateur web.',
    default: true, // Cet élément sera visible en premier
  },
  {
    year: '2024',
    text: 'Intégration du projet communautaire DinoRPG.',
  },
  {
    year: '2024',
    text: 'Préparateur / Livreur de commandes chez Floral Concept.',
  },
  {
    year: '2023',
    text: 'Formation développeur intégrateur web avec OpenClassrooms avec obtention de ma certification de niveau Bac +2.',
  },
  { year: '2023-2019', text: 'Vendeur confirmé multimédia TV chez Darty.' },
  { year: '2019', text: 'Conseiller vente chez Weldom.' },
  { year: '2018-2014', text: 'Vendeur / Acheteur chez Cash Express.' },
  { year: '2014-2010', text: 'Employé polyvalent chez McDonalds.' },
];

const TimeLine = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

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
  }, []);

  return (
    <ul
      ref={carouselRef}
      className="flex snap-x snap-mandatory gap-5 overflow-x-auto py-5 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-blue-700"
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
            <hr className="w-[58%] border-2 border-blue-700 dark:border-slate-50" />
          </h3>
          <p className="tracking-wide">{item.text}</p>
        </li>
      ))}
    </ul>
  );
};

export default TimeLine;
