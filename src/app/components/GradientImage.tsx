import Image from "next/image";
import { ReactElement } from "react";
import CTA from "./CTA";
import Link from "next/link";

interface Props {
  sectionTitle: string;
  description: ReactElement;
  imagePath: string;
  ctaLink: string;
}

export default function GradientImage({
  sectionTitle,
  description,
  imagePath,
  ctaLink,
}: Props) {
  return (
    <>
      <div className="py-10"></div>
      <section className="relative flex min-h-[734px] w-full items-center justify-end px-5 py-20 text-right sm:px-16 lg:px-32 xl:px-64">
        <div className="flex flex-col items-end gap-10 text-right">
          <h2 className="font-cateItalic text-4xl sm:text-5xl xl:text-6xl xl:leading-tight 2xl:w-2/3">
            {sectionTitle}
          </h2>
          <p className="sm:w-3/4 sm:text-xl 2xl:w-1/2">{description}</p>
          <Link href={ctaLink}>
            <CTA text="Get a free quote" type="button" />
          </Link>
        </div>
        <div className="absolute inset-0 -z-20 h-[734px] w-full shadow-[-30px_0_20px_5px_rgba(0,0,0,0.25)] before:pointer-events-none before:absolute before:inset-0 before:z-10 before:block before:bg-black before:bg-opacity-75 before:content-[''] sm:before:bg-opacity-50 xl:w-[1100px] xl:before:bg-opacity-0">
          <Image
            src={imagePath}
            alt={sectionTitle}
            fill
            quality={100}
            className="object-cover"
          />
        </div>
      </section>
      <div className="py-10"></div>
    </>
  );
}
