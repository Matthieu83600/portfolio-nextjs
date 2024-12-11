/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

export default function NotFoundPage() {
  return (
    <div className="container-md mb-12 mt-12 flex flex-col items-center">
      <Image
        unoptimized
        src="/assets/404-page-not-found.webp"
        width={400}
        height={400}
        alt="image d'erreur"
      />
      <h1 className="mb-8 mt-12 text-center text-3xl">
        404 - Page non trouvée
      </h1>
      <p className="mb-12 mt-12 text-center text-xl">
        La page que vous souhaitez voir n'existe pas !
      </p>
    </div>
  );
}
