"use client";
import services from "../data/data";
import Link from "next/link";
import CTA from "../components/CTA";
import Image from "next/image";
import { useLenis } from "lenis/react";
import React from "react";

export default function Services() {
  const lenis = useLenis();

  return (
    <section id="services" className="scroll-mt-20 py-20">
      <h2 className="pb-20 text-center font-cateItalic text-4xl sm:text-5xl xl:text-6xl">
        Services
      </h2>
      <div className="flex flex-col items-center justify-center gap-10 px-5 lg:px-32 xl:px-64">
        {services.map((service, i) => {
          const counter = i % 3;

          if (counter % 2 === 0) {
            return (
              <>
                {i === 3 && <div></div>}
                <div
                  key={service.title}
                  id={service.link}
                  className="flex min-h-[440px] w-full scroll-mt-40 flex-col rounded-md bg-[linear-gradient(316deg,#303030_-5.82%,#404040_47.8%,#303030_100.65%)] shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)] md:flex-row"
                >
                  <div className="flex flex-col gap-2 px-8 py-8 md:w-1/2 lg:px-16 lg:py-16">
                    <h2 className="font-cate text-3xl xl:text-4xl">
                      {service.title === "PPF"
                        ? "Paint Protection Film"
                        : service.title}
                    </h2>
                    <p className="pt-4 text-sm">
                      {service.longDescription.map((line, lineIndex) => (
                        <span key={lineIndex}>
                          {line
                            .split("*")
                            .map((part, index) =>
                              index % 2 === 1 ? (
                                <b key={index}>{part}</b>
                              ) : (
                                <React.Fragment key={index}>
                                  {part}
                                </React.Fragment>
                              ),
                            )}
                          <br />
                          <br />
                        </span>
                      ))}
                    </p>
                    <Link
                      href="/#contact"
                      onClick={() => {
                        lenis?.scrollTo("#contact", {
                          offset: -80,
                          duration: 2,
                        });
                      }}
                    >
                      <CTA
                        text="Get a free quote"
                        type="button"
                        width={undefined}
                      />
                    </Link>
                  </div>
                  <div className="relative h-[300px] w-full md:h-auto md:w-1/2">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill={true}
                      className="rounded-b-md md:rounded-l-none md:rounded-r-md"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <div
                key={service.title}
                id={service.link}
                className="flex min-h-[440px] w-full scroll-mt-40 flex-col-reverse rounded-md bg-[linear-gradient(316deg,#303030_-5.82%,#404040_47.8%,#303030_100.65%)] shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)] md:flex-row"
              >
                <div className="relative h-[300px] w-full md:h-auto md:w-1/2">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill={true}
                    className="rounded-b-md md:rounded-l-md md:rounded-r-none"
                    objectFit="cover"
                  />
                </div>
                <div className="flex flex-col items-start gap-2 px-8 py-8 md:w-1/2 md:items-end lg:px-16 lg:py-16">
                  <h2 className="font-cate text-3xl xl:text-4xl">
                    {service.title === "PPF"
                      ? "Paint Protection Film"
                      : service.title}
                  </h2>
                  <p className="pt-4 text-sm md:text-right">
                    {service.longDescription.map((line, lineIndex) => (
                      <span key={lineIndex}>
                        {line
                          .split("*")
                          .map((part, index) =>
                            index % 2 === 1 ? (
                              <b key={index}>{part}</b>
                            ) : (
                              <React.Fragment key={index}>
                                {part}
                              </React.Fragment>
                            ),
                          )}
                        <br />
                        <br />
                      </span>
                    ))}
                  </p>
                  <Link
                    href="/#contact"
                    onClick={() => {
                      lenis?.scrollTo("#contact", {
                        offset: -80,
                        duration: 2,
                      });
                    }}
                  >
                    <CTA
                      text="Get a free quote"
                      type="button"
                      width={undefined}
                    />
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </section>
  );
  // return (
  //   <section className="py-20">
  //     <h1 className="xl:text-6xl sm:text-5xl text-4xl text-center font-cateItalic">
  //       Services
  //     </h1>
  //     <div className="xl:pt-10 pt-20 px-5 flex flex-wrap items-center justify-center gap-16">
  //       {services.map((service) => (
  //         <Card key={service.title} {...service} />
  //       ))}
  //     </div>
  //   </section>
  // );
}
