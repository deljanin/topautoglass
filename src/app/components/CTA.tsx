interface CTAProps {
  text: string;
  type: 'submit' | 'reset' | 'button' | undefined;
  width: string | undefined;
}
export default function CTA({ text, type, width }: CTAProps) {
  return (
    <button
      type={type}
      className={` w-[${width}px]
      relative px-3 py-2 text-black font-cate rounded-md 
      bg-[linear-gradient(77deg,#6BD4F2_25.46%,#FFF_47%,#6BD4F2_68.54%)] 
      shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] 
      before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
      before:bg-[linear-gradient(77deg,#00000000_25.46%,#ffffffB0_47%,#00000000_68.54%)] 
      before:rounded-md before:pointer-events-none hover:scale-110 transition-all`}>
      {text}
    </button>
  );
}
