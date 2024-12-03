import Link from "next/link";

export default function Card({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link href={"/services#" + link} className="">
      <div className="flex min-h-[212px] max-w-[420px] flex-col gap-4 rounded-md bg-[linear-gradient(316deg,#303030_-5.82%,#404040_47.8%,#303030_100.65%)] px-12 py-8 shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)] transition-all hover:scale-105">
        <h3 className="font-cate text-2xl">{title}</h3>
        <p className="">{description}</p>
        <span className="font-bold">Learn More</span>
      </div>
    </Link>
  );
}
