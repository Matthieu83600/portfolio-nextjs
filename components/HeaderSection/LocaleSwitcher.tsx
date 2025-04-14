'use client';
import * as React from 'react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Image
            src={
              selectedLocale === 'fr'
                ? '/assets/flags/lang_fr.webp'
                : '/assets/flags/lang_en.webp'
            }
            alt={selectedLocale === 'fr' ? 'Français' : 'English'}
            width={20}
            height={20}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={changeLocale}>
          {selectedLocale === 'fr' ? 'English' : 'Français'}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LocaleSwitcher;
