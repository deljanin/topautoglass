import Image from "next/image";
import { ReactElement } from "react";
import { CTABlack } from "./CTA";
import Link from "next/link";

interface Props {
  sectionTitle: ReactElement;
  description: ReactElement;
  imagePath: string;
  ctaLink: string;
  ctaText: string;
  marginTop: string;
}
export default function HeroVerticalGradient({
  sectionTitle,
  description,
  imagePath,
  ctaLink,
  ctaText,
  marginTop,
}: Props) {
  return (
    <section className="relative mb-36 flex min-h-screen w-full flex-col items-center gap-10 px-5 pt-10 text-center sm:px-16 lg:px-32 lg:pt-20 xl:px-64">
      <h1
        className={`${marginTop} font-cateItalic text-4xl sm:text-5xl xl:text-6xl xl:leading-tight`}
      >
        {sectionTitle}
      </h1>
      <p className="sm:w-3/4 sm:text-xl 2xl:w-1/2">{description}</p>
      <Link href={ctaLink} className="text-lg">
        <CTABlack text={ctaText} type="button" />
      </Link>
      <div className="absolute -bottom-20 left-0 right-0 -z-10 h-[645px] w-full">
        <Image
          src={imagePath}
          fill
          quality={100}
          alt={ctaText}
          className="object-cover"
        />
        <div className="absolute bottom-0 -z-20 h-1/2 w-full shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]"></div>
      </div>
    </section>
  );
}
