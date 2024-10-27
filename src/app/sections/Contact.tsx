'use client';
import { useState } from 'react';
import { useEffect } from 'react';
import Image from 'next/image';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CTA from '../components/CTA';
import { ChangeEvent } from 'react';
import Link from 'next/link';

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
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Invalid email address' }),
  phoneNumber: z.string().min(1, { message: 'Phone number is required' }),
  carYear: z.coerce
    .number() // Use coerce to convert input to number
    .min(1900, { message: 'Invalid car year' })
    .max(new Date().getFullYear(), {
      message: "Car year can't be in the future",
    }),
  brandMake: z.string().min(1, { message: 'Brand/Make is required' }),
  model: z.string().min(1, { message: 'Model is required' }),
  vinNumber: z
    .string()
    .regex(/^[A-Za-z0-9-]{1,17}$/, { message: 'Invalid VIN number' }),
  whichGlass: z
    .string()
    .min(1, { message: 'Glass selection is required' })
    .refine((value) => value !== '', {
      message: 'Please choose a valid option for Glass selection',
    }),
});

function formatPhoneNumber(value: string) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, '');
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 7) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,
    6
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
  const [phoneValue, setPhoneValue] = useState('');
  const handlePhoneInput = (e: ChangeEvent<HTMLInputElement>) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setPhoneValue(formattedPhoneNumber);
  };
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit: SubmitHandler<FormData> = (data) => {
    fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    reset();
    setPhoneValue('');
    if (isSubmitSuccessful) setModalOpen(true);
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <div
        className={`${
          modalOpen ? 'block' : 'hidden'
        } fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center`}>
        <div
          className="p-10 bg-[#353535] rounded-md
         flex flex-col items-center justify-center gap-6
         shadow-[0px_0px_35px_0px_rgba(0,0,0,0.75)]
         ">
          <h1 className="text-3xl font-cateItalic">Message sent!</h1>
          <p className="xl:text-xl text-center">
            We will get back to you as soon as possible
          </p>

          <button
            type="button"
            onClick={() => setModalOpen(false)}
            className="w-[150px] text-lg
             hover:scale-110 transition-all px-3 py-2 border-2 rounded-md 
             border-glassBlue text-glassBlue bg-black font-cate 
             shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] hover:text-white hover:border-white">
            Close
          </button>
        </div>
      </div>
      <div
        className="pt-20 xl:px-64 px-5 3xl:relative flex flex-col items-center justify-center 3xl:block scroll-mt-10 "
        id="contact">
        <h1 className="xl:text-6xl sm:text-5xl text-4xl font-cateItalic 3xl:text-left text-center pb-6">
          Get a free quote today
        </h1>
        <p className="pb-6 xl:text-xl 3xl:text-left text-center">
          Get a personalized estimate for your vehicle’s needs in just a{' '}
          <br className="sm:block hidden" />
          few clicks.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 md:w-[600px]">
          {/* Input Fields */}
          {[
            { label: 'Name', name: 'name', placeholder: 'Josh Smith' },
            {
              label: 'Email',
              name: 'email',
              placeholder: 'josh@youremail.com',
            },
            {
              label: 'Phone Number',
              name: 'phoneNumber',
              placeholder: '(832)795-8511',
            },
            {
              label: 'Car Year',
              name: 'carYear',
              type: 'number',
              placeholder: '2007',
            },
            { label: 'Brand/Make', name: 'brandMake', placeholder: 'BMW' },
            { label: 'Model', name: 'model', placeholder: 'Series 1 118d' },
            {
              label: 'VIN Number',
              name: 'vinNumber',
              placeholder: '4Y1-SL658-4-8-Z-4',
            },
            {
              label: 'Which Glass',
              name: 'whichGlass',
              placeholder: '',
            },
          ].map(({ label, name, placeholder, type = 'text' }) => {
            if (name === 'whichGlass') {
              return (
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="whichGlass">Which Glass</label>
                  <div className="bg-black rounded-md border-white border px-3 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]">
                    <select
                      id="whichGlass"
                      {...register('whichGlass')}
                      defaultValue=""
                      className="w-full bg-black border-none outline-none text-white placeholder-white">
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
                <div key={name} className="flex flex-col gap-1 w-full">
                  <label htmlFor={name}>{label}</label>
                  <input
                    type={type}
                    {...register(name as keyof FormData)}
                    placeholder={placeholder}
                    value={name === 'phoneNumber' ? phoneValue : undefined}
                    {...(name === 'phoneNumber'
                      ? {
                          onChange: (e) => {
                            handlePhoneInput(e);
                          },
                        }
                      : {})}
                    className="bg-black rounded-md border-white border px-4 py-2 text-white placeholder-white placeholder-opacity-50 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"
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

          <div className="w-full flex flex-col items-center justify-center md:gap-0 gap-3 md:justify-between md:flex-row md:col-span-2 mt-4">
            <div className=" text-lg">
              <CTA text="Get a free quote" type="submit" width="200" />
            </div>
            <p className="text-center ">
              Or <br /> call us
            </p>
            <a href="tel:+18327958511">
              <button
                type="button"
                className="w-[200px] text-lg hover:scale-110 transition-all px-3 py-2 border-2 rounded-md border-glassBlue text-glassBlue bg-black font-cate shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] hover:text-white hover:border-white">
                (832) 795-8511
              </button>
            </a>
          </div>
          <Link
            href="/privacy-policy"
            className="text-xs opacity-50 3xl:text-left text-center md:col-span-2">
            By submitting this form, you agree to our{' '}
            <span className="underline">Privacy Policy</span>.
          </Link>
        </form>

        <div className="py-20">
          <h3 className="text-xl xl:text-left text-center mb-3">
            We support these payment providers:
          </h3>
          <div className="md:justify-normal flex flex-row gap-4 items-center flex-wrap justify-center">
            {/* grayscale */}
            <Image src="/images/mastercard.png" alt="" width={55} height={42} />
            <Image src="/images/visa.svg" alt="" width={100} height={32} />
            <Image src="/images/cashapp.svg" alt="" width={38} height={38} />
            <Image src="/images/venmo.png" alt="" width={122} height={24} />
            <Image src="/images/zelle.png" alt="" width={90} height={35} />
            <Image src="/images/applepay.png" alt="" width={90} height={35} />
            <div className="flex items-center gap-2">
              <Image src="/images/cash.svg" alt="" width={46} height={36} />
              <span className="font-cate text-xl">Cash</span>
            </div>
          </div>
        </div>
        <Image
          src="/images/contact.png"
          alt=""
          width={821}
          height={404}
          className="3xl:absolute 3xl:top-[calc(50%-202px)] 3xl:right-5 3xl:pb-0 pb-10"
        />
      </div>
    </>
  );
}
