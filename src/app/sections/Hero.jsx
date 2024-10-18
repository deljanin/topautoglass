import Image from 'next/image';
import CTA from '../components/CTA';

export default function Hero() {
  return (
    <section className="relative px-64 h-[calc(100vh-80px)] bg-[linear-gradient(119deg,#181818_0%,#252525_78.29%)]">
      <div className=" h-full flex flex-col justify-center z-20">
        <h1 className="text-6xl leading-tight font-cateItalic ">
          Your One-Stop Shop for <br /> Auto Glass & Custom <br /> Vehicle
          Enhancements
        </h1>
        <p className="text-wrap text-xl pt-4">
          Specializing in auto glass, tints, adas calibration,
          <br /> wraps, PPF and ceramic coating. Get the attention
          <br /> your car deserves today.
        </p>
        <div className="flex gap-8 pt-12">
          <a href="/services">
            <CTA text="Explore Services" />
          </a>
          <a href="#contact">
            <button className="hover:scale-110 transition-all px-3 py-2 border-2 rounded-md border-glassBlue text-glassBlue bg-black font-cate shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] hover:text-white hover:border-white">
              Get a Free Quote
            </button>
          </a>
        </div>
        <div className="w-1/2 flex items-center justify-between pt-32">
          <div className="flex flex-col">
            <span className="text-3xl font-cate opacity-90">1435</span>
            <span className="opacity-60">
              Auto glass <br /> replacements
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-cate opacity-90">632</span>
            <span className="opacity-60">
              Cars <br /> wrapped
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-cate opacity-90">3251</span>
            <span className="opacity-60">
              Satisfied <br /> customer
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-cate opacity-90 flex items-baseline gap-1">
              <Image src="/images/star.svg" alt="" width={27} height={27} />
              4.8
            </span>
            <span className="opacity-60">
              On Google <br /> reviews
            </span>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 z-10 h-full">
        <Image
          src="/images/hero.jpg"
          alt=""
          width={800}
          height={1000}
          className="object-cover overflow-hidden h-full"
        />
      </div>
    </section>
  );
}
