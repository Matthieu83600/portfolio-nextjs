import React, { useState, useEffect } from 'react';

const ProgressBarLoader: React.FC = () => {
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
          className="h-full bg-light-bg-btn dark:bg-dark-bg-btn"
          style={{ width: `${progress}%`, transition: 'width 0.3s' }}
        />
      </div>
      <p className="mt-4">Chargement des projets en cours...</p>
    </div>
  );
};

export default ProgressBarLoader;
