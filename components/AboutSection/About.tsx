/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import moi from '../../public/assets/moi.webp';
import { Kaushan_Script } from 'next/font/google';

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });

const AboutSection = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-2 md:grid-rows-6 lg:grid-cols-12"
    >
      <div className="col-span-2 !col-start-1 row-span-6 row-start-1 md:col-span-9">
        <h2
          className={`${kaushan.className} after:bg-inherited mb-9 hidden items-center gap-4 bg-gradient-to-r from-gray-100 to-gray-50 bg-clip-text text-3xl font-extrabold uppercase text-slate-950 after:h-[1px] dark:text-slate-50 md:block md:text-4xl`}
        >
          À propos de moi
        </h2>
        <div className="relative z-20 mt-9 hidden rounded-2xl border border-slate-100 bg-light-bg-card/50 p-8 drop-shadow-lg backdrop-blur-lg dark:bg-dark-bg-card/50 md:block">
          <h3 className="mb-9 font-semibold">Qui est Matthieu ?</h3>
          <p>
            Salut ! Je m'appelle Matthieu Bonjour. Je me suis reconverti
            professionnellement et j'ai obtenu ma certification professionnelle
            de niveau Bac +2 avec OpenClassrooms.
          </p>
          <p className="my-3.5">
            Après quelques années passées dans le commerce. Notamment chez Cash
            Express et Darty où j'ai vendu / acheté / testé de nombreux produits
            multimédia, TV, divers et variés ; j'ai décidé de changer de
            direction.
          </p>
          <p>Je suis donc, officiellement développeur intégrateur web.</p>
          <p className="my-3.5">
            Je prends, aujourd'hui énormément de plaisir à apprendre de nouveaux
            langages, et à les intégrer.
          </p>
          <p>
            Je suis motivé, passionné par ce que j'entreprends et j'ai hâte d'en
            découvrir toujours plus. N'hésitez pas à me contacter si vous
            recherchez un profil comme le mien. Je serais ravi de répondre à vos
            attentes et d'intégrer une équipe.
          </p>
        </div>
      </div>
      <div className="col-span-2 col-start-1 row-span-5 row-start-1 md:col-span-4 md:col-start-9">
        <div className="relative mx-auto h-[320px] w-[320px] rounded-2xl drop-shadow-lg xl:h-[350px] xl:w-[350px] 2xl:h-[400px] 2xl:w-[400px]">
          <Image
            unoptimized
            src={moi || './assets/moi.webp'}
            width={320}
            height={0}
            style={{ width: '90%', height: 'auto' }}
            alt="ma photo"
            className="z-10 rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
