'use client';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import CTA from '../components/CTA';
import { useAtom } from 'jotai';
import { popupOpenAtom } from '../atoms'; // Import atom
import Link from 'next/link';
import { useLenis } from 'lenis/react';

export default function Navbar() {
  const lenis = useLenis();
  const [open, setOpen] = useState(false);
  const isPopupShown = useRef(false); // Tracks if popup has been shown
  const [popupOpen, setPopupOpen] = useAtom(popupOpenAtom); // Use popup state from Jotai
  const modalRef = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    // Only show the popup if it hasn't been shown in this session
    if (!isPopupShown.current) {
      setPopupOpen(true);
      isPopupShown.current = true; // Set ref to true to prevent re-triggering
    }

    // Close modal if clicked outside
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setPopupOpen(false); // Close the modal
      }
    }

    if (popupOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [popupOpen, setPopupOpen]);

  return (
    <>
      {/* Popup */}
      {popupOpen && (
        <div
          className={`fixed top-0 left-0 right-0 h-full w-full
            py-64 px-5 bg-opacity-10 backdrop-blur-sm bg-black  z-50 
            flex items-center justify-center
            `}>
          <div
            ref={modalRef}
            className="relative flex flex-col items-center justify-center gap-3 md:p-20 px-5 py-10
             bg-[#252525] shadow-[0_0_20px_5px_rgba(0,0,0,0.5)] rounded-md">
            <h1 className="text-5xl text-center font-cate">$20 OFF</h1>
            <p className="text-xl text-center">
              First time customers get a $20 off
            </p>
            <div
              onClick={() => setPopupOpen(false)}
              className="cursor-pointer text-xl mt-5">
              <CTA text="Get a free quote" type="button" width={undefined} />
            </div>
            <div
              className="absolute top-0 right-0 size-6 m-3 bg-[#252525] cursor-pointer "
              onClick={() => setPopupOpen(false)}>
              <Image src="/images/close.svg" alt="close" fill />
            </div>
          </div>
        </div>
      )}
      {/* Mobile menu */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 h-full w-full
            py-64 px-5  bg-opacity-70  z-50 flex flex-col items-end justify-evenly 
            font-cate text-2xl transform transition-transform 
            ${open ? 'translate-x-0' : 'translate-x-full'}
            backdrop-blur-lg bg-black`}>
        <Link
          href="/"
          onClick={() => {
            setOpen(!open);
            lenis?.scrollTo('#hero', { offset: -80, duration: 2 });
          }}>
          Home
        </Link>
        <Link
          href="/#services"
          onClick={() => {
            setOpen(!open);
            lenis?.scrollTo('#services', { offset: -80, duration: 2 });
          }}>
          Services
        </Link>
        <Link
          href="/#contact"
          onClick={() => {
            setOpen(!open);
            lenis?.scrollTo('#contact', { offset: -80, duration: 2 });
          }}>
          Contact
        </Link>
      </nav>

      {/* Desktop and mobile navbar */}
      <nav className="sticky top-0 left-0 right-0 h-[80px] xl:px-64 lg:px-32 px-5 flex items-center justify-between bg-black z-50 shadow-[0_0_20px_5px_rgba(0,0,0,0.5)]">
        <Link
          href="/"
          onClick={() => {
            setOpen(false);
            lenis?.scrollTo('#hero', { offset: -80 });
          }}>
          <Image
            src="/images/logo.jpg"
            alt="Top Auto Glass logo"
            width={185}
            height={66}
          />
        </Link>
        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8 items-center font-cate text-lg">
          <Link
            className="hover:text-glassBlue transition-colors"
            href="/"
            onClick={() => {
              lenis?.scrollTo('#hero', { offset: -80 });
            }}>
            Home
          </Link>
          <Link
            className="hover:text-glassBlue transition-colors"
            href="/#services"
            onClick={() => {
              lenis?.scrollTo('#services', { offset: -80 });
            }}>
            Services
          </Link>
          {/* <Link className="hover:text-glassBlue transition-colors" href="/gallery">
            Gallery
          </Link> */}
          <Link
            className="hover:text-glassBlue transition-colors"
            href="/#contact"
            onClick={() => {
              lenis?.scrollTo('#contact', { offset: -80, duration: 2 });
            }}>
            Contact
          </Link>
          <div className="border-2 rounded-md border-glassBlue text-glassBlue hover:text-white hover:border-white transition-colors">
            <a className="px-2 py-1" href="tel:+18327958511">
              (832) 795-8511
            </a>
          </div>
        </div>
        {/* Mobile menu toggle button */}
        <button className="lg:hidden" onClick={() => setOpen(!open)}>
          <Image
            src="/images/menu.svg"
            alt="Menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </button>
      </nav>
      <a href="tel:+18327958511">
        <div className="md:hidden fixed bottom-0 py-4 left-0 right-0 z-50 flex justify-center items-center gap-2 bg-black">
          <h3 className="font-cate text-xl">Call us</h3>
          <div className=" border-2 rounded-md border-glassBlue text-glassBlue font-cate text-xl">
            <div className="px-2 py-1">(832) 795-8511</div>
          </div>
        </div>
      </a>
    </>
  );
}
