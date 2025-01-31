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
    <section className="relative my-32 flex w-full items-center justify-end px-5 text-right sm:px-16 lg:min-h-[734px] lg:px-32 xl:px-64">
      <div className="flex flex-col items-end gap-10 text-right">
        <h2 className="font-cateItalic text-4xl sm:text-5xl xl:text-6xl 2xl:w-2/3">
          {sectionTitle}
        </h2>
        <p className="sm:w-3/4 sm:text-xl 2xl:w-1/2">{description}</p>
        <Link href={ctaLink}>
          <CTA text="Get a free quote" type="button" />
        </Link>
      </div>
      <Image
        src={imagePath}
        alt={sectionTitle}
        width={1100}
        height={734}
        quality={100}
        className="absolute left-0 top-0 -z-10 hidden shadow-[-30px_0_20px_5px_rgba(0,0,0,0.25)] lg:block"
      />
    </section>
  );
}
