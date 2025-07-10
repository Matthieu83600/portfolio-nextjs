import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <div className="container-md mt-12 mb-12 flex min-h-lvh flex-col items-center">
      <Image
        src="/assets/404-page-not-found.webp"
        width={400}
        height={400}
        alt={t('errorImageAlt')}
      />
      <h1 className="mt-12 mb-8 text-center text-3xl">{t('errorTitle')}</h1>
      <p className="mt-12 mb-12 text-center text-xl">{t('errorDescription')}</p>
    </div>
  );
}
