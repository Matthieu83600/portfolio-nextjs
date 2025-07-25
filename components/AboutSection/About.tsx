'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const AboutSection = () => {
  const t = useTranslations('HomePage');
  return (
    <section
      id="about"
      className="grid grid-cols-2 md:grid-rows-6 lg:grid-cols-12"
    >
      <div className="col-span-2 col-start-1! row-span-6 row-start-1 md:col-span-9">
        <h2 className="after:bg-inherited mb-9 hidden items-center gap-4 bg-linear-to-r from-gray-100 to-gray-50 bg-clip-text text-2xl font-extrabold text-slate-950 uppercase after:h-[1px] md:block md:text-4xl dark:text-slate-50">
          {t('AboutSection.title')}
        </h2>
        <div className="bg-light-bg-card/50 dark:bg-dark-bg-card/50 relative z-20 mt-9 hidden rounded-2xl border border-slate-100 p-8 drop-shadow-lg backdrop-blur-lg md:block">
          <h3 className="mb-9 font-semibold">{t('AboutSection.subTitle')}</h3>
          <p>{t('AboutSection.description')}</p>
          <p className="my-3.5">{t('AboutSection.description2')}</p>
          <p>{t('AboutSection.description3')}</p>
          <p className="my-3.5">{t('AboutSection.description4')}</p>
          <p>{t('AboutSection.description5')}</p>
        </div>
      </div>
      <div className="col-span-2 col-start-1 row-span-5 row-start-1 md:col-span-4 md:col-start-9">
        <div className="relative mx-auto h-[320px] w-[320px] rounded-2xl drop-shadow-lg xl:h-[350px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px]">
          <Image
            loading="eager"
            src="/assets/moi.webp"
            width={320}
            height={320}
            style={{ width: '90%', height: 'auto' }}
            alt={t('AboutSection.altPhoto')}
            className="z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
