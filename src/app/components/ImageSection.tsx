import Image from "next/image";

interface Props {
  imagePath: string;
  altText: string;
}
export default function ImageSection({ imagePath, altText }: Props) {
  return (
    <section className="relative my-10 h-[700px] w-full shadow-[0_0_20px_5px_rgba(0,0,0,0.5)]">
      <Image
        src={imagePath}
        alt={altText}
        fill
        className="object-cover object-[35%_50%]"
        quality={100}
      />
    </section>
  );
}
