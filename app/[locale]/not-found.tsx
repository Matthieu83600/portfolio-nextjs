import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <div className="container-md mb-12 mt-12 flex flex-col items-center">
      <Image
        unoptimized
        src="/assets/404-page-not-found.webp"
        width={400}
        height={400}
        alt={t('errorImageAlt')}
      />
      <h1 className="mb-8 mt-12 text-center text-3xl">{t('errorTitle')}</h1>
      <p className="mb-12 mt-12 text-center text-xl">{t('errorDescription')}</p>
    </div>
  );
}
