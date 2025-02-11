"use client";
import Image from "next/image";
import { QuoteForm } from "../components/Forms";
import { Suspense } from "react";

export default function Contact() {
  return (
    <>
      <div
        className="flex scroll-mt-10 flex-col items-center justify-center px-5 pt-20 xl:px-64 3xl:relative 3xl:block"
        id="contact"
      >
        <h2 className="pb-6 text-center font-cateItalic text-4xl sm:text-5xl xl:text-6xl 3xl:text-left">
          Get a free quote today
        </h2>
        <p className="pb-6 text-center xl:text-xl 3xl:text-left">
          Get a personalized estimate for your vehicle’s needs in just a{" "}
          <br className="hidden sm:block" />
          few clicks.
        </p>
        <Suspense>
          <QuoteForm />
        </Suspense>
        <div className="py-20">
          <h3 className="mb-3 text-center text-xl xl:text-left">
            We support these payment providers:
          </h3>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:justify-normal">
            <Image
              src="/images/contact/mastercard.png"
              alt=""
              unoptimized
              width={55}
              height={42}
            />
            <Image
              src="/images/contact/visa.svg"
              alt=""
              width={100}
              height={32}
            />
            <Image
              src="/images/contact/cashapp.svg"
              alt=""
              width={38}
              height={38}
            />
            <Image
              src="/images/contact/venmo.png"
              alt=""
              width={122}
              height={24}
            />
            <Image
              src="/images/contact/zelle.png"
              alt=""
              width={90}
              height={35}
            />
            <Image
              src="/images/contact/applepay.png"
              alt=""
              width={90}
              height={35}
            />
            <div className="flex items-center gap-2">
              <Image
                src="/images/contact/cash.svg"
                alt=""
                width={46}
                height={36}
              />
              <span className="font-cate text-xl">Cash</span>
            </div>
          </div>
        </div>
        <Image
          src="/images/contact/contact.png"
          alt=""
          width={821}
          height={404}
          className="pb-10 3xl:absolute 3xl:right-5 3xl:top-[calc(50%-202px)] 3xl:pb-0"
        />
      </div>
    </>
  );
}
