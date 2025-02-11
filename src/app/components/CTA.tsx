interface CTAProps {
  text: string;
  type: "submit" | "reset" | "button" | undefined;
  width?: string;
  isSubmitting?: boolean;
}
export default function CTA({ text, type, width, isSubmitting }: CTAProps) {
  return (
    <button
      type={type}
      disabled={isSubmitting}
      style={{ width: width ? `${width}px` : undefined }}
      className={`${isSubmitting ? "cursor-wait" : "cursor-pointer"} relative rounded-md bg-[linear-gradient(77deg,#6BD4F2_25.46%,#FFF_47%,#6BD4F2_68.54%)] px-3 py-2 font-cate text-black shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] transition-all before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:rounded-md before:bg-[linear-gradient(77deg,#00000000_25.46%,#ffffffB0_47%,#00000000_68.54%)] before:content-[''] hover:scale-110`}
    >
      {text}
    </button>
  );
}
export function CTABlack({ text, type, width }: CTAProps) {
  return (
    <button
      type={type}
      style={{ width: width ? `${width}px` : undefined }}
      className={`rounded-md border-2 border-glassBlue bg-black px-3 py-2 font-cate text-glassBlue shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] transition-all hover:scale-110 hover:border-white hover:text-white`}
    >
      {text}
    </button>
  );
}
