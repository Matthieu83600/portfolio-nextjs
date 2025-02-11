'use client';
import { useTranslations } from 'next-intl';
import { Kaushan_Script } from 'next/font/google';
import Image from 'next/image';
import moi from '../../public/assets/moi.webp';

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });

const AboutSection = () => {
  const t = useTranslations('HomePage');
  return (
    <section
      id="about"
      className="grid grid-cols-2 md:grid-rows-6 lg:grid-cols-12"
    >
      <div className="col-span-2 !col-start-1 row-span-6 row-start-1 md:col-span-9">
        <h2
          className={`${kaushan.className} after:bg-inherited mb-9 hidden items-center gap-4 bg-gradient-to-r from-gray-100 to-gray-50 bg-clip-text text-3xl font-extrabold uppercase text-slate-950 after:h-[1px] dark:text-slate-50 md:block md:text-4xl`}
        >
          {t('AboutSection.title')}
        </h2>
        <div className="relative z-20 mt-9 hidden rounded-2xl border border-slate-100 bg-light-bg-card/50 p-8 drop-shadow-lg backdrop-blur-lg dark:bg-dark-bg-card/50 md:block">
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
            unoptimized
            src={moi || './assets/moi.webp'}
            width={320}
            height={400}
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
