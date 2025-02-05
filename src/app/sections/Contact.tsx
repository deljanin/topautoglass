"use client";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import CTA, { CTABlack } from "../components/CTA";
import { ChangeEvent } from "react";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
  carYear: number;
  brandMake: string;
  model: string;
  vinNumber: string;
  whichGlass: string;
}
const quoteFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().min(1, { message: "Phone number is required" }),
  carYear: z.coerce
    .number() // Use coerce to convert input to number
    .min(1900, { message: "Invalid car year" })
    .max(new Date().getFullYear(), {
      message: "Car year can't be in the future",
    }),
  brandMake: z.string().min(1, { message: "Brand/Make is required" }),
  model: z.string().min(1, { message: "Model is required" }),
  vinNumber: z
    .string()
    .regex(/^[A-Za-z0-9-]{1,17}$/, { message: "Invalid VIN number" }),
  whichGlass: z
    .string()
    .min(1, { message: "Glass selection is required" })
    .refine((value) => value !== "", {
      message: "Please choose a valid option for Glass selection",
    }),
});

function formatPhoneNumber(value: string) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6,
  )}-${phoneNumber.slice(6)}`;
}

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(quoteFormSchema),
  });
  const [phoneValue, setPhoneValue] = useState("");
  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    reset();
    setPhoneValue("");
    if (isSubmitSuccessful) setModalOpen(true);
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div
        className={`${
          modalOpen ? "block" : "hidden"
        } fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm`}
      >
        <div className="flex flex-col items-center justify-center gap-6 rounded-md bg-[#353535] p-10 shadow-[0px_0px_35px_0px_rgba(0,0,0,0.75)]">
          <h1 className="font-cateItalic text-3xl">Message sent!</h1>
          <p className="text-center xl:text-xl">
            We will get back to you as soon as possible
          </p>

          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="w-[150px] rounded-md border-2 border-glassBlue bg-black px-3 py-2 font-cate text-lg text-glassBlue shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] transition-all hover:scale-110 hover:border-white hover:text-white"
          >
            Close
          </button>
        </div>
      </div>
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
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-x-12 gap-y-6 md:w-[600px] md:grid-cols-2"
        >
          {/* Input Fields */}
          {[
            { label: "extra", name: "extra", placeholder: "", type: "hidden" },
            { label: "Name", name: "name", placeholder: "Josh Smith" },
            {
              label: "Email",
              name: "email",
              placeholder: "josh@youremail.com",
            },
            {
              label: "Phone Number",
              name: "phoneNumber",
              placeholder: "(832)795-8511",
            },
            {
              label: "Car Year",
              name: "carYear",
              type: "number",
              placeholder: "2007",
            },
            { label: "Brand/Make", name: "brandMake", placeholder: "BMW" },
            { label: "Model", name: "model", placeholder: "Series 1 118d" },
            {
              label: "VIN Number",
              name: "vinNumber",
              placeholder: "4Y1-SL658-4-8-Z-4",
            },
            {
              label: "Which Glass",
              name: "whichGlass",
              placeholder: "",
            },
          ].map(({ label, name, placeholder, type = "text" }) => {
            if (name === "whichGlass") {
              return (
                <div key={name} className="flex w-full flex-col gap-1">
                  <label htmlFor="whichGlass">Which Glass</label>
                  <div className="rounded-md border border-white bg-black px-3 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]">
                    <select
                      id="whichGlass"
                      {...register("whichGlass")}
                      defaultValue=""
                      className="w-full border-none bg-black text-white placeholder-white outline-none"
                    >
                      <option value="" disabled>
                        Please choose an option
                      </option>
                      <option value="Windshield">Windshield</option>
                      <option value="Drivers door front">
                        Front left door
                      </option>
                      <option value="Passenger door front">
                        Front right door
                      </option>
                      <option value="Rear driver side">Rear left door</option>
                      <option value="Rear passenger side">
                        Rear right door
                      </option>
                      <option value="Rear window">Rear window</option>
                      <option value="Quarter Glass Left Side">
                        Quarter Glass Left Side
                      </option>
                      <option value="Quarter Glass Right Side">
                        Quarter Glass Right Side
                      </option>
                      <option value="Vent Glass Left Side">
                        Vent Glass Left Side
                      </option>
                      <option value="Vent Glass Right Side">
                        Vent Glass Right Side
                      </option>
                      <option value="Sunroof">Sunroof</option>
                      <option value="Moonroof">Moonroof</option>
                      <option value="Not Listed">Not Listed</option>
                      <option value="Multiple">Multiple</option>
                    </select>
                  </div>
                  {errors.whichGlass && (
                    <span className="text-red-600">
                      {errors.whichGlass.message}
                    </span>
                  )}
                </div>
              );
            } else {
              return (
                <div
                  key={name}
                  className={`flex w-full flex-col gap-1 ${
                    type === "hidden" ? "hidden" : ""
                  }`}
                >
                  <label htmlFor={name}>{label}</label>
                  <input
                    type={type}
                    {...register(name as keyof FormData)}
                    placeholder={placeholder}
                    value={name === "phoneNumber" ? phoneValue : undefined}
                    {...(name === "phoneNumber"
                      ? {
                          onChange: (e) => {
                            handlePhoneInput(e);
                          },
                        }
                      : {})}
                    className="rounded-md border border-white bg-black px-4 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"
                  />
                  {/* Displaying Error Messages */}
                  {errors[name as keyof FormData] && (
                    <span className="text-red-600">
                      {errors[name as keyof FormData]?.message?.toString()}
                    </span>
                  )}
                </div>
              );
            }
          })}

          <div className="mt-4 flex w-full flex-col items-center justify-center gap-3 md:col-span-2 md:flex-row md:justify-between md:gap-0">
            <div className="text-lg">
              <CTA text="Get a free quote" type="submit" width="200" />
            </div>
            <p className="text-center">
              Or <br /> call us
            </p>
            <a href="tel:+18327958511" className="text-lg">
              <CTABlack text="(832) 795-8511" type="button" width="200" />
            </a>
          </div>
          <Link
            href="/privacy-policy"
            className="text-center text-xs opacity-50 md:col-span-2 3xl:text-left"
          >
            By submitting this form, you agree to our{" "}
            <span className="underline">Privacy Policy</span>.
          </Link>
        </form>

        <div className="py-20">
          <h3 className="mb-3 text-center text-xl xl:text-left">
            We support these payment providers:
          </h3>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:justify-normal">
            {/* grayscale */}
            <Image
              src="/images/contact/mastercard.png"
              alt=""
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
