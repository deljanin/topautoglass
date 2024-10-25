'use client';
import Image from 'next/image';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    {
      text: 'Excellent service. Great prices and very professional and respectable people. Helped me in my time of need. I recommend them to everyone!',
      name: 'Carla Grayson',
    },
    {
      text: "By far the best auto glass repair shop in Houston, TX. They understand that they're dealing with people in tragedy and do not take advantage!",
      name: 'Roshawn King',
    },
    {
      text: "Amazing and super friendly customer service. Rosy and Juan listen carefully to your concerns and explain any doubts you may have. They don't hide anything so you really know what to expect.",
      name: 'Jorge Trujillo',
    },
    {
      text: 'Guys are very professional, they did great job. My windshields are perfect! Thank you guys!',
      name: 'Carolina Gil Herrera',
    },
    {
      text: 'Shopped around for quotes and Juan had the better deal. He was very nice and it took a little less than 2 hours. I am happy with my service and recommend Top Auto Glass for your car needs.',
      name: 'Marie Ramirez',
    },
  ];

  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isHovered, testimonials.length]);
  return (
    <section className="xl:min-h-[489px] min-h-[600px] py-28 relative shadow-[0px_0px_35px_0px_rgba(0,0,0,0.75)]">
      <h1 className="xl:text-6xl sm:text-5xl text-4xl text-center font-cateItalic pb-12 ">
        Testimonials
      </h1>
      <div
        className="flex items-center justify-center xl:gap-20 gap-5 pb-6"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <button
          className=" cursor-pointer border-transparent p-4 hover:rounded-full hover:border-white border-2 transition-all"
          onMouseDown={() =>
            setIndex((prevIndex) =>
              prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            )
          }>
          <Image src="/images/arrow.svg" alt="" width={40} height={40} />
        </button>
        <p className="md:w-[700px] w-4/5 md:text-xl text-wrap text-center min-h-28">
          &ldquo;{testimonials[index].text}&rdquo;
        </p>
        <button
          className=" cursor-pointer transform rotate-180 border-transparent p-4 hover:rounded-full hover:border-white border-2 transition-all"
          onMouseDown={() =>
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
          }>
          <Image src="/images/arrow.svg" alt="" width={40} height={40} />
        </button>
      </div>
      <p className="md:text-xl font-bold text-center">
        {testimonials[index].name}
      </p>
      <div className="w-full h-full absolute top-0 right-0 -z-10 blur-sm">
        <Image
          src="/images/testimonials.jpg"
          alt=""
          fill
          objectFit="cover"
          unoptimized={true}
          className=""
        />
      </div>
    </section>
  );
}
