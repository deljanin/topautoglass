"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import CTA from "../components/CTA";
import { useAtom } from "jotai";
import { popupOpenAtom } from "../atoms"; // Import atom
import Link from "next/link";
import { useLenis } from "lenis/react";

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
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupOpen, setPopupOpen]);

  return (
    <>
      {/* Popup */}
      {popupOpen && (
        <div
          className={`fixed left-0 right-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-10 px-5 py-64 backdrop-blur-sm`}
        >
          <div
            ref={modalRef}
            className="relative flex flex-col items-center justify-center gap-3 rounded-md bg-[#252525] px-5 py-10 shadow-[0_0_20px_5px_rgba(0,0,0,0.5)] md:p-20"
          >
            <h1 className="text-center font-cate text-5xl">$20 OFF</h1>
            <p className="text-center text-xl">
              First time customers get a $20 off
            </p>
            <div
              onClick={() => {
                setPopupOpen(false);
                lenis?.scrollTo("#contact", { offset: -80 });
              }}
              className="mt-5 cursor-pointer text-xl"
            >
              <CTA text="Get a free quote" type="button" width={undefined} />
            </div>
            <div
              className="absolute right-0 top-0 m-3 size-6 cursor-pointer bg-[#252525]"
              onClick={() => setPopupOpen(false)}
            >
              <Image src="/images/close.svg" alt="close" fill />
            </div>
          </div>
        </div>
      )}
      {/* Mobile menu */}
      <nav
        className={`fixed left-0 right-0 top-0 z-50 flex h-full w-full transform flex-col items-end justify-evenly bg-opacity-70 px-5 py-64 font-cate text-2xl transition-transform lg:hidden ${open ? "translate-x-0" : "translate-x-full"} bg-black backdrop-blur-lg`}
      >
        <Link
          href="/"
          onClick={() => {
            setOpen(!open);
            lenis?.scrollTo("#hero", { offset: -80, duration: 2 });
          }}
        >
          Home
        </Link>
        <Link
          href="/#services"
          onClick={() => {
            setOpen(!open);
            lenis?.scrollTo("#services", { offset: -80, duration: 2 });
          }}
        >
          Services
        </Link>
        <Link
          href="/#contact"
          onClick={() => {
            setOpen(!open);
            lenis?.scrollTo("#contact", { offset: -80, duration: 2 });
          }}
        >
          Contact
        </Link>
      </nav>

      {/* Desktop and mobile navbar */}
      <nav className="sticky left-0 right-0 top-0 z-50 flex h-[80px] items-center justify-between bg-black px-5 shadow-[0_0_20px_5px_rgba(0,0,0,0.5)] lg:px-32 xl:px-64">
        <Link
          href="/"
          onClick={() => {
            setOpen(false);
            lenis?.scrollTo("#hero", { offset: -80 });
          }}
        >
          <Image
            src="/images/logo.jpg"
            alt="Top Auto Glass logo"
            width={185}
            height={66}
          />
        </Link>
        {/* Desktop menu */}
        <div className="hidden items-center gap-8 font-cate text-lg lg:flex">
          <Link
            className="transition-colors hover:text-glassBlue"
            href="/"
            onClick={() => {
              lenis?.scrollTo("#hero", { offset: -80 });
            }}
          >
            Home
          </Link>
          <Link
            className="transition-colors hover:text-glassBlue"
            href="/#services"
            onClick={() => {
              lenis?.scrollTo("#services", { offset: -80 });
            }}
          >
            Services
          </Link>
          {/* <Link className="hover:text-glassBlue transition-colors" href="/gallery">
            Gallery
          </Link> */}
          <Link
            className="transition-colors hover:text-glassBlue"
            href="/#contact"
            onClick={() => {
              lenis?.scrollTo("#contact", { offset: -80, duration: 2 });
            }}
          >
            Contact
          </Link>
          <div className="rounded-md border-2 border-glassBlue text-glassBlue transition-colors hover:border-white hover:text-white">
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
        <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-2 bg-black py-4 md:hidden">
          <h3 className="font-cate text-xl">Call us</h3>
          <div className="rounded-md border-2 border-glassBlue font-cate text-xl text-glassBlue">
            <div className="px-2 py-1">(832) 795-8511</div>
          </div>
        </div>
      </a>
    </>
  );
}
