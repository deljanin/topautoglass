import GradientImage from "@/app/components/GradientImage";
import HeroVerticalGradient from "@/app/components/HeroVerticalGradient";
import LearnMore from "@/app/components/LearnMore";
import ServiceShowcase from "@/app/components/ServiceShowcase";
import WideTextList from "@/app/components/WideTextList";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paint Protection Film in Houston | Car Protection | Top Auto Glass",
  description:
    "Protect your car with premium paint protection film in Houston, TX. Top Auto Glass offers expert installation for long-lasting protection. Call now!",
  keywords:
    "paint protection film houston, houston paint protection, paint protection film houston tx, clear bra car houston, clear bra houston, paint protection houston, paint protection film near me, ppf film, auto bra, ppf wrap, car paint protection film, clear bra for car, auto paint protection film, automotive paint protection film, ppf auto",
};

const showcase = [
  {
    title: "Full Vehicle Coverage",
    longDescription: [
      "If you want comprehensive protection for your entire vehicle, our full vehicle coverage option is ideal. ",
      "We apply paint protection film to the entire car, including the hood, doors, bumpers, and side mirrors, offering maximum defense against environmental damage.",
      "This ensures your vehicle stays protected from head to toe, maintaining its appearance for years to come.",
    ],
    imageUrl: "/images/showcase/paint-protection-film/full-coverage.jpg",
  },
  {
    title: "Partial Coverage Options",
    longDescription: [
      "For those who want to protect specific areas of their car, we offer partial coverage options, as well.",
      "Focusing on high-impact zones like the hood, fenders, and mirrors, partial coverage allows you to target the areas that are most prone to damage, while still offering significant protection.",
      "This option is perfect for those who want to save a little but still safeguard their car from the elements.",
    ],
    imageUrl: "/images/showcase/paint-protection-film/partial-coverage.jpg",
  },
  {
    title: "Clear Bra Installation",
    longDescription: [
      "Clear bra is a specialized type of paint protection film that is particularly effective for protecting the front of your vehicle.",
      "It is commonly applied to the hood, front bumper, and side mirrors, a clear bra provides an extra layer of defense where your car is most vulnerable to damage from rocks, debris, and other hazards on the road.",
      "Our expert technicians at Top Auto Glass are skilled in clear bra installation, ensuring a flawless application every time.",
    ],
    imageUrl: "/images/showcase/paint-protection-film/clear-bra.jpg",
  },
];

const textList = [
  "Protection from Scratches and Debris: One of the most obvious benefits of PPF is its ability to protect your car from scratches and chips caused by road debris, rocks, and other environmental factors. Whether you're driving in the city or on highways, PPF creates a durable layer that absorbs the impact, keeping your paint intact.",
  "UV Protection: Houston’s intense sun can take a toll on your car’s paint over time. Paint protection film helps block harmful UV rays, which can cause fading, oxidation, and deterioration of your car’s exterior. With PPF, your vehicle will maintain its vibrant color for much longer.",
  "Resale Value: A car’s exterior is one of the first things a buyer notices. By investing in PPF, you’re not only protecting your vehicle’s appearance, but you’re also preserving its resale value. A well-maintained, chip-free exterior can make a significant difference when it comes time to sell or trade-in your vehicle.",
  "Self-Healing Properties: Premium PPF comes with self-healing technology, meaning that minor scratches and swirl marks disappear over time. This incredible feature ensures your car’s exterior remains smooth and flawless, even after regular use.",
];

export default function PpfPage() {
  return (
    <>
      <HeroVerticalGradient
        sectionTitle={
          <>
            Premium Paint Protection Film <br className="hidden sm:block" />
            in Houston, TX
          </>
        }
        description={
          <>
            When it comes to protecting your vehicle’s exterior, paint
            protection film (PPF) is one of the most effective solutions
            available. 
            <br />
            <br />
            In a city like Houston, where weather conditions and road debris can
            quickly take a toll on your car’s paint, investing in PPF is a smart
            way to keep your vehicle looking new.
          </>
        }
        imagePath="/images/hero/hero-paint-protection-film.jpg"
        ctaLink="/?service=paint-protection-film#contact"
        ctaText="Explore Options"
        marginTop="mt-24"
      />
      <section className="flex flex-col items-center gap-14 px-5 py-20 text-center sm:px-16 lg:px-32 lg:text-left xl:px-64 2xl:relative 2xl:items-start">
        <h2 className="text-center font-cateItalic text-4xl sm:text-5xl xl:text-6xl xl:leading-tight 2xl:text-left">
          What is Paint Protection <br className="hidden sm:block" />
          Film (PPF)?
        </h2>
        <p className="text-justify sm:w-3/4 sm:text-xl 2xl:w-2/5 2xl:text-left">
          Paint protection film (PPF) is a clear, durable material designed to
          safeguard your vehicle’s paintwork. Applied to the exterior of your
          car, it acts as a protective barrier against scratches, road debris,
          and even the harmful effects of UV rays.
          <br />
          <br />
          Commonly referred to as PPF film, PPF wrap, or automotive paint
          protection film, this product{" "}
          <b>
            offers exceptional coverage and keeps your car looking brand new for
            longer.
          </b>
          <br />
          <br />
          Its advanced design ensures it won’t affect the color or appearance of
          your vehicle, making it a discreet but highly effective protective
          solution.
        </p>
        <div className="relative h-[500px] w-full lg:w-[800px] 2xl:absolute 2xl:right-16 2xl:top-40 3xl:right-32">
          <Image
            src="/images/paint-protection-film/paint-protection-film.jpg"
            alt="Paint Protection Film"
            fill
            className="absolute right-0 top-0 -z-10 rounded-md object-cover shadow-[0_0_15px_2px_rgba(0,0,0,0.5)]"
          />
        </div>
      </section>
      <WideTextList
        sectionTitle="Benefits of Paint Protection Film"
        listItems={textList}
        showCTA={false}
      />
      <ServiceShowcase
        id="paint-protection-film"
        sectionTitle="Our Paint Protection Film Services"
        showcase={showcase}
        showCTA={false}
      />
      <GradientImage
        sectionTitle="Why Choose Top Auto Glass for PPF in Houston?"
        imagePath="/images/gradient-image/paint-protection-film.jpg"
        ctaLink="/?service=paint-protection-film#contact"
        description={
          <>
            When it comes to paint protection film in Houston, you need a
            provider you can trust. Top Auto Glass offers professional
            installation, top-tier materials, and a commitment to customer
            satisfaction.
            <br />
            <br />
            Our skilled team uses the highest quality PPF products to provide
            you with long-lasting protection and a perfect finish. Whether
            you’re looking for full coverage or just need a clear bra
            installation, we’re here to help.
          </>
        }
      />
      <LearnMore
        sectionTitle="Learn More About Premium Paint Protection Film in Houston, TX"
        imagePath="/images/learn-more/paint-protection-film.jpg"
        ctaLink="/?service=paint-protection-film#contact"
        description={
          <>
            Paint protection film (PPF) is a game changer if you’re looking to
            protect your vehicle’s exterior. This advanced technology acts as a
            shield, protecting your vehicle from everyday wear and tear. PPF,
            along with{" "}
            <Link href="/services/ceramic-coating">
              <u>ceramic coating</u>
            </Link>
            ,{" "}
            <Link href="/services/window-tinting">
              <u>window tinting</u>
            </Link>
            , or{" "}
            <Link href="/services/car-wrap">
              <u>vehicle wraps</u>
            </Link>{" "}
            is the perfect way to add character to your vehicle while adding on
            to its safety and security.    <br />
            <br />
            In Houston, where the weather and road conditions can be tough on
            car exteriors, investing in PPF is an excellent choice.    <br />
            <br />
            At Top Auto Glass, we specialize in applying premium paint
            protection film to keep your car looking its best. Our expertise and
            high-quality products ensure your vehicle stays protected against
            scratches, chips, and fading, so you can drive with confidence and
            security.   <br />
            <br />
            Book today for a free quote and take the first step towards
            protecting your vehicle with premium paint protection film. Our
            experts are ready to answer all your questions and get your car
            looking like new again. 
          </>
        }
      />
    </>
  );
}
