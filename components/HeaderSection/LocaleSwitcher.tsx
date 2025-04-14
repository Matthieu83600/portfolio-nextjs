'use client';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

const LocaleSwitcher = ({ locale }: { locale: string }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedLocale, setSelectedLocale] = useState(locale);

  const changeLocale = () => {
    const newLocale = selectedLocale === 'fr' ? 'en' : 'fr';
    setSelectedLocale(newLocale);
    const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPathname);
  };

  return (
    <div id="locale-switcher" className="flex items-center">
      <button
        onClick={changeLocale}
        className="flex cursor-pointer items-center justify-center rounded-sm border border-transparent p-1"
      >
        <Image
          src={
            selectedLocale === 'fr'
              ? '/assets/flags/lang_en.webp'
              : '/assets/flags/lang_fr.webp'
          }
          alt={selectedLocale === 'fr' ? 'English' : 'Français'}
          width={20}
          height={20}
        />
      </button>
    </div>
  );
};

export default LocaleSwitcher;
