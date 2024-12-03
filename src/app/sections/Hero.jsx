"use client";
import Image from "next/image";
import CTA from "../components/CTA";
import CountUp from "../components/CountUp";
import Link from "next/link";
import { useLenis } from "lenis/react";

export default function Hero() {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-[linear-gradient(119deg,#181818_0%,#252525_78.29%)] px-5 pb-16 pt-14 sm:h-[calc(100vh-80px)] sm:py-0 md:px-32 xl:px-64"
    >
      {/* Text and content container */}
      <div className="relative z-20 flex h-full flex-col justify-center">
        <h1 className="text-center font-cateItalic text-4xl leading-tight sm:text-5xl xl:text-left xl:text-6xl">
          Your One-Stop Shop for <br className="hidden md:block" />
          Custom Vehicle <br className="hidden lg:block" /> Enhancements &
          <br className="hidden lg:block" /> Auto Glass in Houston
        </h1>
        <p className="text-wrap pt-4 text-center sm:text-xl xl:text-left">
          Specializing in auto glass, tints, adas calibration, wraps, PPF and
          <br className="hidden sm:block" /> ceramic coating. Get the attention
          your car deserves today.
        </p>
        <div className="flex items-center justify-center gap-2 pt-12 sm:gap-8 xl:justify-start">
          <Link
            href="/#services"
            onClick={() => {
              lenis?.scrollTo("#services", { offset: -80 });
            }}
          >
            <CTA text="Explore Services" />
          </Link>
          <Link
            href="/#contact"
            onClick={() => {
              lenis?.scrollTo("#contact", { offset: -80, duration: 2 });
            }}
          >
            <button className="rounded-md border-2 border-glassBlue bg-black px-3 py-2 font-cate text-glassBlue shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] transition-all hover:scale-110 hover:border-white hover:text-white">
              Get a Free Quote
            </button>
          </Link>
        </div>
        <div className="flex w-full cursor-default flex-wrap items-center justify-evenly gap-y-2 pt-16 xl:w-1/2 xl:justify-between xl:pt-32">
          <div className="flex flex-col xl:min-w-[105px]">
            <span className="font-cate text-xl opacity-90 sm:text-3xl">
              <CountUp end={25000} duration={3000} />
            </span>
            <span className="pt-1 text-sm leading-5 opacity-60 sm:text-base">
              Auto glass <br /> replacements
            </span>
          </div>
          <div className="flex flex-col xl:min-w-[105px]">
            <span className="font-cate text-xl opacity-90 sm:text-3xl">
              <CountUp end={10000} duration={3000} />
            </span>
            <span className="pt-1 text-sm leading-5 opacity-60 sm:text-base">
              Glass tints
              <br /> applied
            </span>
          </div>
          <div className="flex flex-col xl:min-w-[105px]">
            <span className="font-cate text-xl opacity-90 sm:text-3xl">
              <CountUp end={5000} duration={3000} />
            </span>
            <span className="pt-1 text-sm leading-5 opacity-60 sm:text-base">
              Satisfied <br /> customer
            </span>
          </div>
          <div className="flex flex-col">
            <span className="flex items-baseline gap-1 font-cate text-xl opacity-90 sm:text-3xl">
              <div className="relative size-5 sm:size-7">
                <Image src="/images/star.svg" alt="star" fill />
              </div>
              4.8
            </span>
            <span className="pt-1 text-sm leading-5 opacity-60 sm:text-base">
              On Google <br /> reviews
            </span>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 left-0 top-0 z-10 h-full w-full before:pointer-events-none before:absolute before:left-0 before:top-0 before:z-20 before:block before:h-full before:w-full before:bg-black before:bg-opacity-80 before:content-[''] xl:left-auto xl:right-0 xl:w-[800px] xl:before:bg-opacity-25 2xl:before:hidden">
        {/* <Image
          src="/images/hero.jpg"
          alt=""
          width={800}
          height={1000}
          className="object-cover overflow-hidden h-full "
          priority
        /> */}

        <Image
          src="/images/hero.jpg"
          alt="Auto glass in Houston"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(119deg,#181818_0%,#252525_78.29%)]"></div>
    </section>
  );
}
