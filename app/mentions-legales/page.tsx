/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import Layout from './layout';

export default function Mentions() {
  return (
    <Layout>
      <div className="container-md">
        <div className="container-md">
          <div className="flex flex-col items-center gap-4 py-5">
            <h1 className="text-center text-3xl font-bold">Mentions légales</h1>
          </div>
          <div className="flex max-w-7xl flex-col gap-3 pb-16 pt-10">
            <p>
              Conformément aux dispositions de la loi n° 2004-575 du 21 juin
              2004 pour la confiance en l'économie numérique, il est précisé aux
              utilisateurs du site Matthieu Bonjour l'identité des différents
              intervenants dans le cadre de sa réalisation et de son suivi.
            </p>
            <h2 className="text-2xl underline">Editeur du site :</h2>
            <p>
              Le présent site, accessible à l’URL :{' '}
              <Link href="https://matthieubonjour.dev/" target="blank">
                <u>https://matthieubonjour.dev/</u>
              </Link>
              , est édité par Matthieu Bonjour, résidant 43 impasse de
              l'ancienne gendarmerie 83600 LES ADRETS DE L'ESTEREL.
            </p>
            <h2 className="text-2xl underline">Hébergement :</h2>
            <p>Le site est hébergé par Vercel.</p>
            <h2 className="text-2xl underline">Me contacter :</h2>
            <ul className="my-3.5 list-inside list-disc">
              <li>Par téléphone : (+33) 0629102076</li>
              <li>Par email : matthieu83600-pro@outlook.fr</li>
              <li>
                Par courrier : 43 impasse de l'ancienne gendarmerie 83600 LES
                ADRETS DE L'ESTEREL
              </li>
            </ul>
            <h2 className="text-2xl underline">Données personnelles :</h2>
            <p>
              De manière générale, vous n’êtes pas tenus de me communiquer vos
              données personnelles lorsque vous visitez notre site Internet.
              Enfin, je peux collecter de manière automatique certaines
              informations vous concernant lors d’une simple navigation sur mon
              site Portfolio, notamment : des informations concernant
              l’utilisation de mon site, votre adresse IP, le type et la version
              de votre navigateur, vos temps d'accès. De telles informations
              sont utilisées exclusivement à des fins de statistiques internes,
              de manière à améliorer la qualité du site Internet.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
