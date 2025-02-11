import { useTranslations } from 'next-intl';
import { Kaushan_Script } from 'next/font/google';
import Layout from './layout';

const kaushan = Kaushan_Script({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export default function Mentions() {
  const t = useTranslations('LegalNoticePage');

  return (
    <Layout>
      <div className="container-md">
        <div className="container-md">
          <div className="flex flex-col items-center gap-4 py-5">
            <h1
              className={`${kaushan.className} text-center text-5xl font-bold`}
            >
              {t('title')}
            </h1>
          </div>
          <div className="flex max-w-7xl flex-col gap-3 pb-16 pt-10">
            <h2 className="text-2xl underline">{t('firstArticle.title')}</h2>
            <p>
              {t.rich('firstArticle.paragraph', {
                websiteLink: (c) => (
                  <u>
                    <a href="https://matthieubonjour.dev" target="_blank">
                      {c}
                    </a>
                  </u>
                ),
              })}
            </p>
            <p>
              {t.rich('firstArticle.paragraph2', {
                websiteLink: (c) => (
                  <u>
                    <a href="https://matthieubonjour.dev" target="_blank">
                      {c}
                    </a>
                  </u>
                ),
              })}
            </p>
            <p>
              <b>{t('firstArticle.director')}</b> Matthieu Bonjour -{' '}
              <b>{t('firstArticle.contact')}</b>{' '}
              <a href="mailto:matthieu83600-pro@outlook.fr">
                matthieu83600-pro@outlook.fr
              </a>
            </p>
            <h2 className="text-2xl underline">{t('secondArticle.title')}</h2>
            <p>{t('secondArticle.paragraph')}</p>
            <h2 className="text-2xl underline">{t('thirdArticle.title')}</h2>
            <p>{t('thirdArticle.paragraph')}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
