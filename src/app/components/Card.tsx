import Link from 'next/link';

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
    <Link href={'/services#' + link} className="">
      <div className="max-w-[420px] min-h-[212px] px-12 py-8 flex flex-col gap-4 rounded-md bg-[linear-gradient(316deg,#303030_-5.82%,#404040_47.8%,#303030_100.65%)] shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)] hover:scale-105 transition-all">
        <h3 className="font-cate text-2xl">{title}</h3>
        <p className="">{description}</p>
        <span className="font-bold">Learn More</span>
      </div>
    </Link>
  );
}
