import { ReactElement } from "react";

interface Props {
  sectionTitle: ReactElement;
  description: ReactElement[];
}

export default function WideTextSection({ sectionTitle, description }: Props) {
  return (
    <section className="flex flex-col items-center px-5 py-20 text-center sm:px-16 lg:px-32">
      <h2 className="pb-10 font-cateItalic text-4xl sm:text-5xl lg:pb-20 xl:text-6xl">
        {sectionTitle}
      </h2>
      {description.map((paragraph, index) => (
        <>
          <p className="px-5 sm:text-xl xl:w-2/3" key={index}>
            {paragraph}
          </p>
          <br />
        </>
      ))}
    </section>
  );
}
