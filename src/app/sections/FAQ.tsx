'use client';

import { useState } from 'react';

export default function FAQ() {
  const entries = [
    {
      question:
        'Is a ADAS calibration recommended after a windshield replacement?',
      answer: 'Yes, it is recommended by the manufacturers.',
    },
    {
      question: 'How long does windshield replacement take?',
      answer: 'A windshield replacement usually takes 2 hours.',
    },
    {
      question: 'Are walk-ins accepted?',
      answer:
        'Yes, just come Monday to Friday between 8 and 5 and on Saturdays between 8 and 2:30.',
    },
    {
      question: 'How long does PPF installation usually take?',
      answer:
        'PPF installation usually takes 1 to 2 days depending on the size of the vehicle.',
    },
    {
      question: 'What kind of payment is accepted?',
      answer: 'We accept Zelle, Venmo, Cash app, Credit Cards, and cash.',
    },
    {
      question: 'How long does vehicle wrapping usually take?',
      answer:
        'Vehicle wrapping usually takes 1 to 2 days depending on the size of the vehicle.',
    },
    {
      question: 'How long does window tinting usually take?',
      answer: 'A window tint job takes 2.5 hours or less.',
    },
  ];

  const [index, setIndex] = useState(-1);
  return (
    <div className="py-20 2xl:px-64 lg:px-32 px-5 bg-[linear-gradient(180deg,#181818_0%,#252525_100%)]">
      <h1 className="xl:text-6xl lg:px-32 sm:text-5xl text-4xl text-center font-cateItalic">
        Got questions?
      </h1>
      <div className="xl:mx-32 pt-20 flex flex-col gap-5 justify-center items-center select-none">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="p-4 w-full bg-black  rounded-md  transition-all cursor-pointer shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"
            onMouseDown={() => {
              if (index === i) {
                setIndex(-1);
              } else {
                setIndex(i);
              }
            }}>
            <h3 className="md:text-xl flex justify-between items-center gap-5">
              {entry.question}{' '}
              <span className="text-2xl ">{i === index ? '-' : '+'}</span>
            </h3>
            {i === index && (
              <p className="pt-2 transition-all ">{entry.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
/*

-How long does PPF installation usually takes?

-How long does the vehicle wrap usually takes:
1-2 days depending in size 

    -A window tint job takes 2.5 hrs or less
    -A windshield replacement usually takes 2 hrs 
    Or less
    -Is a windshield calibration recommended after a windshield replacement. Yes, recommended by the manufacturer.
    - Are walk ins accepted? Yes, just come M-F between 8 and 5 and on Saturday between 8-2:30
    - What kind of payment is accepted? Zelle, venmo, cash app, Credit Card, and cash. 

*/
