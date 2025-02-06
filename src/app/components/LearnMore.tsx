import { ReactElement } from "react";
import CTA from "./CTA";
import Link from "next/link";

interface Props {
  sectionTitle: string;
  description: ReactElement;
  imagePath: string;
  ctaLink: string;
}

export default function LearnMore({
  sectionTitle,
  description,
  imagePath,
  ctaLink,
}: Props) {
  return (
    <>
      <div className="py-10"></div>
      <div className="relative min-h-full w-full shadow-[0_0_20px_5px_rgba(0,0,0,0.5)]">
        <div className="flex flex-col items-center px-5 py-32 sm:px-16 lg:px-32 xl:block xl:px-64">
          <h2 className="mb-10 text-center font-cateItalic text-4xl sm:text-5xl md:mb-20 xl:w-2/3 xl:text-left xl:text-6xl xl:leading-tight">
            {sectionTitle}
          </h2>
          <p className="mb-10 w-full text-center sm:text-xl md:mb-20 xl:w-4/5 xl:text-left 2xl:w-2/3">
            {description}
          </p>
          <Link href={ctaLink}>
            <CTA text="Get a free quote" type="button" />
          </Link>
        </div>
        <div
          className="absolute top-0 -z-10 h-full w-full bg-cover bg-fixed bg-[50%_50%] bg-no-repeat before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-full before:w-full"
          style={{ backgroundImage: `url(${imagePath})` }}
        ></div>
      </div>
    </>
  );
}
