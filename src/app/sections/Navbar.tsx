'use client';
import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile menu */}
      <nav
        className={`lg:hidden fixed top-0 left-0 right-0 h-full w-full
            py-64 px-5  bg-opacity-70  z-50 flex flex-col items-end justify-evenly 
            font-cate text-2xl transform transition-transform duration-500 
            ${open ? 'translate-x-0' : 'translate-x-full'}
            backdrop-blur-lg bg-black`}>
        <a href="/" onClick={() => setOpen(!open)}>
          Home
        </a>
        <a href="/services" onClick={() => setOpen(!open)}>
          Services
        </a>
        {/* <a href="/gallery" onClick={() => setOpen(!open)}>
          Gallery
        </a> */}
        <a href="/#contact" onClick={() => setOpen(!open)}>
          Contact
        </a>
      </nav>

      {/* Desktop and mobile navbar */}
      <nav className="sticky top-0 left-0 right-0 h-[80px] xl:px-64 lg:px-32 px-5 flex items-center justify-between bg-black z-50 shadow-[0_0_20px_5px_rgba(0,0,0,0.5)]">
        <a href="/">
          <Image
            src="/images/logo.jpg"
            alt="Top Auto Glass logo"
            width={185}
            height={66}
          />
        </a>
        {/* Desktop menu */}
        <div className="hidden lg:flex gap-8 items-center font-cate text-lg">
          <a className="hover:text-glassBlue transition-colors" href="/">
            Home
          </a>
          <a
            className="hover:text-glassBlue transition-colors"
            href="/services">
            Services
          </a>
          {/* <a className="hover:text-glassBlue transition-colors" href="/gallery">
            Gallery
          </a> */}
          <a
            className="hover:text-glassBlue transition-colors"
            href="/#contact">
            Contact
          </a>
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
