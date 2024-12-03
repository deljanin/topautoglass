"use client";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Excellent service. Great prices and very professional and respectable people. Helped me in my time of need. I recommend them to everyone!",
      name: "Carla Grayson",
    },
    {
      text: "By far the best auto glass repair shop in Houston, TX. They understand that they're dealing with people in tragedy and do not take advantage!",
      name: "Roshawn King",
    },
    {
      text: "Amazing and super friendly customer service. Rosy and Juan listen carefully to your concerns and explain any doubts you may have. They don't hide anything so you really know what to expect.",
      name: "Jorge Trujillo",
    },
    {
      text: "Guys are very professional, they did great job. My windshields are perfect! Thank you guys!",
      name: "Carolina Gil Herrera",
    },
    {
      text: "Shopped around for quotes and Juan had the better deal. He was very nice and it took a little less than 2 hours. I am happy with my service and recommend Top Auto Glass for your car needs.",
      name: "Marie Ramirez",
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
    <section className="relative min-h-[600px] py-28 shadow-[0px_0px_35px_0px_rgba(0,0,0,0.75)] xl:min-h-[489px]">
      <h2 className="pb-12 text-center font-cateItalic text-4xl sm:text-5xl xl:text-6xl">
        Testimonials
      </h2>
      <div
        className="flex items-center justify-center gap-5 pb-6 xl:gap-20"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <button
          className="cursor-pointer border-2 border-transparent p-4 transition-all hover:rounded-full hover:border-white"
          onMouseDown={() =>
            setIndex((prevIndex) =>
              prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1,
            )
          }
        >
          <Image src="/images/arrow.svg" alt="" width={40} height={40} />
        </button>
        <p className="min-h-28 w-4/5 text-wrap text-center md:w-[700px] md:text-xl">
          &ldquo;{testimonials[index].text}&rdquo;
        </p>
        <button
          className="rotate-180 transform cursor-pointer border-2 border-transparent p-4 transition-all hover:rounded-full hover:border-white"
          onMouseDown={() =>
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
          }
        >
          <Image src="/images/arrow.svg" alt="" width={40} height={40} />
        </button>
      </div>
      <p className="text-center font-bold md:text-xl">
        {testimonials[index].name}
      </p>
      <div className="absolute right-0 top-0 -z-10 h-full w-full blur-sm">
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
