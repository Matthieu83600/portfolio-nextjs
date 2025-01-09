/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import { Kaushan_Script } from 'next/font/google';
import Layout from './layout';

const kaushan = Kaushan_Script({ weight: '400', subsets: ['latin'] });

export default function Mentions() {
  return (
    <Layout>
      <div className="container-md">
        <div className="container-md">
          <div className="flex flex-col items-center gap-4 py-5">
            <h1
              className={`${kaushan.className} text-center text-5xl font-bold`}
            >
              Mentions légales
            </h1>
          </div>
          <div className="flex max-w-7xl flex-col gap-3 pb-16 pt-10">
            <h2 className="text-2xl underline">1 - Edition du site :</h2>
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin
              2004 pour la confiance en l'économie numérique, il est précisé aux
              utilisateurs du site internet{' '}
              <Link
                href="https://matthieubonjour.dev"
                target="blank"
                className="underline"
              >
                https://matthieubonjour.dev
              </Link>{' '}
              , l'identité des différents intervenants dans le cadre de sa
              réalisation et de son suivi.
            </p>
            <p>
              Le présent site, accessible à l'URL{' '}
              <Link
                href="https://matthieubonjour.dev"
                target="blank"
                className="underline"
              >
                https://matthieubonjour.dev
              </Link>{' '}
              , est édité par : Matthieu Bonjour, résidant 43 impasse de
              l'ancienne gendarmerie 83600 LES ADRETS DE L'ESTEREL.
            </p>
            <p>
              <b>Directeur de publication :</b> Matthieu Bonjour -{' '}
              <b>Contact :</b>{' '}
              <a href="mailto:matthieu83600-pro@outlook.fr">
                matthieu83600-pro@outlook.fr
              </a>
            </p>
            <h2 className="text-2xl underline">2 - Hébergement :</h2>
            <p>
              Le site est hébergé par la société Vercel Inc., située 440 N
              Barranca Ave #4133 Covina, CA 91723, United States.
            </p>
            <h2 className="text-2xl underline">
              3 - CNIL, gestion des données personnelles, cookies :
            </h2>
            <p>
              À ce jour, le site ne prélève aucun donnée de ses utilisateurs et
              ne provoque l'installation d'aucun cookie sur l'ordinateur de
              l'utilisateur.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
