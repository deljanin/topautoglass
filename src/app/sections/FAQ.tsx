"use client";

import { useState } from "react";

export default function FAQ() {
  const entries = [
    {
      question:
        "Is an ADAS Calibration Recommended After a Windshield Replacement?",
      answer: "Yes, it is recommended by the manufacturers.",
    },
    {
      question: "How Long Does Windshield Replacement Take?",
      answer: "A windshield replacement usually takes 2 hours.",
    },
    {
      question: "Are Walk-Ins Accepted?",
      answer:
        "Yes, just come Monday to Friday between 8:00 and 17:00 and on Saturdays between 8:00 and 14:30.",
    },
    {
      question: "How Long Does PPF Installation Usually Take?",
      answer:
        "PPF installation usually takes 1 to 2 days depending on the size of the vehicle.",
    },
    {
      question: "What Kind of Payment Is Accepted?",
      answer: "We accept Zelle, Venmo, Cash app, Credit Cards, and cash.",
    },
    {
      question: "How Long Does Vehicle Wrapping Usually Take?",
      answer:
        "Vehicle wrapping usually takes 1 to 2 days depending on the size of the vehicle.",
    },
    {
      question: "How Long Does Window Tinting Usually Take?",
      answer: "A window tint job takes 2.5 hours or less.",
    },
  ];

  const [index, setIndex] = useState(-1);
  return (
    <div className="bg-[linear-gradient(180deg,#181818_0%,#252525_100%)] px-5 py-20 lg:px-32 2xl:px-64">
      <h2 className="text-center font-cateItalic text-4xl sm:text-5xl lg:px-32 xl:text-6xl">
        Got questions?
      </h2>
      <div className="flex select-none flex-col items-center justify-center gap-5 pt-20 xl:mx-32">
        {entries.map((entry, i) => (
          <div
            key={i}
            className="w-full cursor-pointer rounded-md bg-black p-4 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)] transition-all"
            onMouseDown={() => {
              if (index === i) {
                setIndex(-1);
              } else {
                setIndex(i);
              }
            }}
          >
            <h3 className="flex items-center justify-between gap-5 md:text-xl">
              {entry.question}{" "}
              <span className="text-2xl">{i === index ? "-" : "+"}</span>
            </h3>
            {i === index && (
              <p className="pt-2 transition-all">{entry.answer}</p>
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
