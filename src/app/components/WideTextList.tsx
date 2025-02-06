import Link from "next/link";
import CTA from "./CTA";

interface Props {
  sectionTitle: string;
  listItems: string[];
  showCTA?: boolean;
  ctaTitle?: string;
  ctaDescription?: string;
}

export default function WideTextList({
  sectionTitle,
  listItems,
  showCTA,
  ctaTitle,
  ctaDescription,
}: Props) {
  return (
    <section className="flex flex-col items-center px-5 py-20 sm:px-16 lg:px-32">
      <h2 className="pb-10 text-center font-cateItalic text-4xl sm:text-5xl md:w-2/3 lg:pb-20 xl:text-6xl xl:leading-tight">
        {sectionTitle}
      </h2>
      <ul
        className={`${showCTA && "mb-10 lg:mb-20"} list-disc px-5 text-justify sm:text-xl xl:w-3/4`}
      >
        {listItems.map((item) => {
          const [boldText, regularText] = item.split(":");

          return (
            <li key={item} className="py-3">
              <b>{boldText}:</b> {regularText}
            </li>
          );
        })}
      </ul>
      {showCTA && (
        <div className="flex flex-col items-center gap-5">
          {ctaTitle && (
            <h3 className="text-center font-cate text-3xl xl:text-4xl">
              {ctaTitle}
            </h3>
          )}
          <p className="text-center sm:text-xl xl:w-7/12">{ctaDescription}</p>
          <Link href="/#contact">
            <CTA text="Get a free quote" type="button" />
          </Link>
        </div>
      )}
    </section>
  );
}
