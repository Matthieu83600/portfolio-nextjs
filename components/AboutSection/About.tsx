/* eslint-disable react/no-unescaped-entities */
'use client';
import Image from 'next/image';
import moi from '../../public/assets/moi.webp';
import HeadingDivider from '../HeadingDivider';
import TimeLine from './Timeline';

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <HeadingDivider title="À propos de moi" />
      <div className="mt-7 flex justify-center">
        <Image
          unoptimized
          src={moi || './assets/moi.webp'}
          width={300}
          height={0}
          style={{ width: '320px', height: 'auto' }}
          alt="ma photo"
          className="rounded-3xl"
        />
      </div>
      <div className="flex max-w-7xl flex-col gap-3 pb-16 pt-10">
        <div className="text-xl font-light leading-relaxed">
          <p>
            Je m'appelle Matthieu Bonjour. Je me suis reconverti
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
      <TimeLine />
    </section>
  );
};

export default AboutSection;
