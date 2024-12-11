'use client';
import { useEffect, useState } from 'react';
import Menu from './Menu';
import SocialMedia from './SocialMedia';
import { BsGrid } from 'react-icons/bs';
import { IoMdClose } from 'react-icons/io';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
  }, [isOpen]);

  return (
    <>
      <button className="p-2" onClick={onOpen} title="Open menu">
        <BsGrid size={24} />
      </button>

      <div>
        {isOpen && (
          <div
            className={`fixed left-0 right-0 top-0 z-50 min-h-screen backdrop-blur-md`}
          >
            <header className="border-b-brand-light z-10 flex items-center justify-between border-b p-6">
              <SocialMedia />
              <button
                onClick={onClose}
                className="inline-flex h-10 w-10 items-center justify-center"
              >
                <IoMdClose size={24} />
              </button>
            </header>
            <div className="px-6 py-10">
              <Menu onClick={onClose} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileMenu;
