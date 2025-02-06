import Link from "next/link";
import { CTABlack } from "./CTA";
import { ReactElement } from "react";
import Image from "next/image";
interface Props {
  sectionTitle: ReactElement;
  description: ReactElement;
  imagePath: string;
  ctaLink: string;
  ctaText: string;
}
export default function HeroHorizontalGradient({
  sectionTitle,
  description,
  imagePath,
  ctaLink,
  ctaText,
}: Props) {
  return (
    <section className="relative mb-20 flex min-h-[calc(100vh-80px)] w-full items-center px-5 text-right sm:px-16 lg:px-32 xl:px-64">
      <div className="flex flex-col gap-10 text-left">
        <h2 className="font-cateItalic text-4xl sm:text-5xl xl:text-6xl xl:leading-tight 2xl:w-3/4">
          {sectionTitle}
        </h2>
        <p className="sm:w-3/4 sm:text-xl 2xl:w-1/2">{description}</p>
        <Link href={ctaLink}>
          <CTABlack text={ctaText} type="button" />
        </Link>
      </div>
      <div className="absolute right-0 top-0 -z-20 min-h-[calc(100vh-80px)] w-full before:pointer-events-none before:absolute before:inset-0 before:z-10 before:block before:bg-black before:bg-opacity-75 before:content-[''] xl:before:bg-opacity-50 2xl:w-[1100px] 2xl:before:bg-opacity-0">
        <Image
          src={imagePath}
          alt={sectionTitle.toString()}
          fill
          quality={100}
          className="object-cover"
        />
      </div>
    </section>
  );
}
