import HeroVerticalGradient from "@/app/components/HeroVerticalGradient";
import LearnMore from "@/app/components/LearnMore";
import ServiceShowcase from "@/app/components/ServiceShowcase";
import WideTextList from "@/app/components/WideTextList";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "#1 Auto Glass Repair Services in Houston, TX | Top Auto Glass",
  description:
    "Looking for reliable auto glass repair services in Houston, TX? Top Auto Glass offers expert repairs, replacements, and mobile service. Call us for a free quote!",
  keywords:
    "auto glass repair services houston, auto glass houston tx, auto glass repair houston tx, houston tx auto glass, houston auto window repair, vehicle auto glass repair, auto car glass repair near me, auto window shop, auto glass window, car glass repair houston, car window repair houston tx, auto window repair houston, auto repair glass shop near me, replacement auto window glass, auto glass repair services near me, auto glass near me, auto glass replacement houston",
};

const showcase = [
  {
    title: "Auto Glass Repair Services",
    longDescription: [
      "Small chips and cracks don’t have to ruin your day—or your wallet. Our auto glass repair services are designed to provide quick fixes for minor damage before it becomes a bigger problem.",
      "Using advanced techniques, we ensure seamless repairs that restore the integrity of your glass and keep you safe on the road.",
      "As part of our services, we specialize in vehicle auto glass repair to cater to a variety of needs, from windshield touch-ups to precision repairs for side and rear windows. ",
    ],
    imageUrl: "/images/showcase/auto-glass/auto-glass-repair.jpg",
  },
  {
    title: "Auto Glass Replacement Services",
    longDescription: [
      "Sometimes, repairs just don’t cut it - the damage is too great. When your windshield or windows are severely damaged, you must replace them. That’s when our replacement services step in. We provide complete auto glass replacement in Houston, ensuring your vehicle gets durable, OEM-grade glass that meets safety standards.",
      "From replacing a cracked windshield to installing new side or rear windows, we handle it all with precision, ensuring your safety and satisfaction. Sometimes, repairs just don’t cut it - the damage is too great. When your windshield or windows are severely damaged, you must replace them. That’s when our replacement services step in. We provide complete auto glass replacement in Houston, ensuring your vehicle gets durable, OEM-grade glass that meets safety standards.",
    ],
    imageUrl: "/images/showcase/auto-glass/auto-glass-replacement.jpg",
  },
  {
    title: "Auto Window Repair",
    longDescription: [
      "Your vehicle’s windows need to be taken care of, not just individually, but as part of the whole system. This is the reason we offer specialized auto window repair services for mechanisms like motors, regulators, and seals.",
      "If your windows are sticking, failing to roll down, or letting in drafts, our experts are here to help, whenever you need it. Trust our dedicated auto window shop to deliver professional repairs that restore function and comfort to your vehicle.",
    ],
    imageUrl: "/images/showcase/auto-glass/auto-window-repair.jpg",
  },
];

const textList = [
  "High-Quality Materials: We use premium OEM-grade glass and materials to ensure the best results for every repair or replacement. Quality matters, and at Top Auto, we know just how much.",
  "Warranty Protection: Every service we provide is backed by appropriate warranties to give you peace of mind and added value to the services you pay for. ",
  "Local Expertise: Houston drivers face unique challenges, from heavy traffic to unpredictable weather. Our knowledge of the local conditions and circumstances allows us to cater to your specific needs, ensuring fast, reliable service every time.",
  "Convenience: With mobile repair options and fast turnaround times, we make it easy for you to get back on the road safely without losing unnecessary time or funds.",
  "A team you can trust: Expertise, reliability, and affordability make Top Auto Glass the top choice for unparalleled service in Houston.",
];
export default function AutoGlassPage() {
  return (
    <>
      <HeroVerticalGradient
        sectionTitle={
          <>
            Expert Auto Glass Repair <br className="hidden sm:block" /> in
            Houston, TX
          </>
        }
        description={
          <>
            From chips to shattered windshields, we’re here to restore your
            vehicle’s safety and appearance. Backed by years of experience and
            over 25,000 successful replacements,{" "}
            <b>
              we provide fast and reliable auto glass repairs and replacements
              in Houston.
            </b>
          </>
        }
        imagePath="/images/hero/hero-auto-glass.jpg"
        ctaText="Fix Your Glass Now"
        ctaLink="/?service=auto-glass#contact"
        marginTop="mt-24"
      />
      <ServiceShowcase
        id="auto-glass"
        sectionTitle="Our Auto Glass Repair and Replacement Services"
        showcase={showcase}
        showCTA={false}
      />
      <WideTextList
        sectionTitle="Why Choose Top Auto Glass?"
        listItems={textList}
        showCTA={true}
        ctaTitle="Get a Free Quote Today"
        ctaDescription="Don’t wait to address damaged glass - serious safety concerns deserve timely reactions. Contact us today for expert auto glass repair services in Houston! Click below to get started:"
        ctaLink="/?service=auto-glass#contact"
      />
      <LearnMore
        sectionTitle="Learn More About Auto Glass in Houston, TX"
        imagePath="/images/learn-more/auto-glass.jpg"
        ctaLink="/?service=auto-glass#contact"
        description={
          <>
            Your vehicle deserves the best care, and at Top Auto Glass, we’re
            here to deliver. Whether it’s repairing a small chip, replacing a
            shattered windshield, or enhancing your car’s appearance, we provide
            services designed to keep your vehicle safe, functional, and looking
            great—all in one convenient visit. <br /> <br />
            Don’t let damaged auto glass slow you down! From precision repairs
            to specialized fixes for advanced vehicle systems, our expert team
            has you covered. In addition to auto glass services, we offer{" "}
            <Link href="/services/window-tinting">
              <u>window tinting</u>
            </Link>
            ,{" "}
            <Link href="/services/adas-calibration">
              <u>ADAS calibration</u>
            </Link>
            ,{" "}
            <Link href="/services/ceramic-coating">
              <u>ceramic coating</u>
            </Link>
            ,{" "}
            <Link href="/services/paint-protection-film">
              <u>paint protection film (PPF) application</u>
            </Link>{" "}
            and{" "}
            <Link href="/services/car-wrap">
              <u>car wrapping</u>
            </Link>
            , making us your one-stop shop for vehicle enhancements in Houston.{" "}
            <br /> <br />
            At Top Auto Glass, we take pride in being Houston’s trusted provider
            for professional auto glass repair and replacement services. With
            years of expertise, a reputation for quality, and modern techniques
            tailored to today’s vehicles, we ensure a perfect fit and
            long-lasting results. <br /> <br />
            We’re more than just a repair shop—we’re your partner in keeping
            your vehicle safe and secure. Explore our full range of services and
            give us a call today to get started!
          </>
        }
      />
    </>
  );
}
