'use client';
import Image from 'next/image';
import CTA from '../components/CTA';
import CountUp from '../components/CountUp';
import Link from 'next/link';
import { useLenis } from 'lenis/react';

export default function Hero() {
  const lenis = useLenis();

  return (
    <section
      id="hero"
      className="relative xl:px-64 sm:h-[calc(100vh-80px)] sm:py-0 pb-16 pt-14 md:px-32 px-5 bg-[linear-gradient(119deg,#181818_0%,#252525_78.29%)] overflow-hidden">
      {/* Text and content container */}
      <div className="relative z-20 h-full flex flex-col justify-center">
        <h1 className="xl:text-left xl:text-6xl sm:text-5xl text-4xl text-center leading-tight font-cateItalic">
          Your One-Stop Shop for <br className="hidden md:block" /> Auto Glass &
          Custom <br className="hidden md:block" /> Vehicle Enhancements
        </h1>
        <p className="xl:text-left sm:text-xl text-center text-wrap pt-4">
          Specializing in auto glass, tints, adas calibration,
          <br className="hidden sm:block" /> wraps, PPF and ceramic coating. Get
          the attention
          <br className="hidden sm:block" /> your car deserves today.
        </p>
        <div className="xl:justify-start flex justify-center items-center sm:gap-8 gap-2 pt-12">
          <Link
            href="/#services"
            onClick={() => {
              lenis?.scrollTo('#services', { offset: -80 });
            }}>
            <CTA text="Explore Services" />
          </Link>
          <Link
            href="/#contact"
            onClick={() => {
              lenis?.scrollTo('#contact', { offset: -80, duration: 2 });
            }}>
            <button className="hover:scale-110 transition-all px-3 py-2 border-2 rounded-md border-glassBlue text-glassBlue bg-black font-cate shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] hover:text-white hover:border-white">
              Get a Free Quote
            </button>
          </Link>
        </div>
        <div className="xl:w-1/2 xl:justify-between xl:pt-32 pt-16 w-full flex items-center justify-evenly flex-wrap cursor-default gap-y-2">
          <div className="flex flex-col xl:min-w-[105px]">
            <span className="sm:text-3xl text-xl font-cate opacity-90">
              <CountUp end={25000} duration={3000} />
            </span>
            <span className="sm:text-base text-sm opacity-60 leading-5 pt-1">
              Auto glass <br /> replacements
            </span>
          </div>
          <div className="flex flex-col xl:min-w-[105px]">
            <span className="sm:text-3xl text-xl font-cate opacity-90">
              <CountUp end={10000} duration={3000} />
            </span>
            <span className="sm:text-base text-sm opacity-60 leading-5 pt-1">
              Glass tints
              <br /> applied
            </span>
          </div>
          <div className="flex flex-col xl:min-w-[105px]">
            <span className="sm:text-3xl text-xl font-cate opacity-90">
              <CountUp end={5000} duration={3000} />
            </span>
            <span className="sm:text-base text-sm opacity-60 leading-5 pt-1">
              Satisfied <br /> customer
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="sm:text-3xl text-xl font-cate opacity-90 flex items-baseline gap-1">
              <div className="sm:size-7 size-5 relative">
                <Image src="/images/star.svg" alt="star" fill />
              </div>
              4.8
            </span>
            <span className="sm:text-base text-sm opacity-60 leading-5 pt-1">
              On Google <br /> reviews
            </span>
          </div>
        </div>
      </div>
      <div
        className="
          absolute top-0 inset-0 h-full w-full z-10
          left-0
          xl:right-0 xl:w-[800px] xl:left-auto
          before:block 2xl:before:hidden
          before:z-20 before:bg-opacity-80 xl:before:bg-opacity-25
          before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full
          before:bg-black  before:pointer-events-none
        ">
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
          alt="Hero Background"
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
