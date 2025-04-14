import { useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';

const ProgressBarLoader: React.FC = () => {
  const t = useTranslations('ProjectsCard');
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev < 100) return prev + 1;
        clearInterval(interval);
        return 100;
      });
    }, 14);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center text-black dark:text-white">
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-300">
        <div
          className="bg-light-bg-btn dark:bg-dark-bg-btn h-full"
          style={{ width: `${progress}%`, transition: 'width 0.3s' }}
        />
      </div>
      <p className="mt-4">{t('ProgressBarLoader')}</p>
    </div>
  );
};

export default ProgressBarLoader;
