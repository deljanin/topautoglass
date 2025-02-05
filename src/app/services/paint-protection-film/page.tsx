import GradientImage from "@/app/components/GradientImage";
import HeroVerticalGradient from "@/app/components/HeroVerticalGradient";
import LearnMore from "@/app/components/LearnMore";
import ServiceShowcase from "@/app/components/ServiceShowcase";
import WideTextList from "@/app/components/WideTextList";
import Link from "next/link";
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
            When it comes to protecting your vehicle's exterior, paint
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
        ctaLink="/#contact?service=paint-protection-film"
        ctaText="Explore Options"
        marginTop="mt-24"
      />
      <ServiceShowcase
        id="paint-protection-film"
        sectionTitle="Our Paint Protection Film Services"
        showcase={showcase}
        showCTA={false}
      />
      <WideTextList
        sectionTitle="Benefits of Paint Protection Film"
        listItems={textList}
        showCTA={false}
      />
      <GradientImage
        sectionTitle="Why Choose Top Auto Glass for PPF in Houston?"
        imagePath="/images/gradient-image/paint-protection-film.jpg"
        ctaLink="/#contact?service=paint-protection-film"
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
        ctaLink="/#contact?service=paint-protection-film"
        description={
          <>
            Advanced Driver Assistance Systems (ADAS) are essential for modern
            vehicle safety, relying on cameras, sensors, and radar to keep you
            and your passengers secure. After a windshield replacement or in the
            event of sensor malfunctions, precise calibration is critical to
            ensure these systems function as intended.
            <br />
            <br />
            At Top Auto Glass in Houston, we specialize in ADAS calibration,
            using advanced tools and techniques to adjust your vehicle’s systems
            to exact factory standards. Whether it’s camera realignment, radar
            calibration, or diagnostics, our highly trained technicians ensure
            your car’s safety features perform flawlessly.
            <br />
            <br />
            Beyond ADAS calibration, we’re proud to offer a full suite of
            services to enhance and protect your vehicle, including{" "}
            <Link href="/services/auto-glass">
              <u>auto glass repair</u>
            </Link>
            ,{" "}
            <Link href="/services/window-tinting">
              <u>window tinting</u>
            </Link>
            ,{" "}
            <Link href="/services/ceramic-coating">
              <u>ceramic coating</u>
            </Link>
            ,{" "}
            <Link href="/services/paint-protection-film">
              <u>paint protection film (PPF)</u>
            </Link>
            , and{" "}
            <Link href="/services/car-wrap">
              <u>car wrap</u>
            </Link>
            . With Top Auto Glass, you get comprehensive care for your vehicle
            under one roof, backed by trusted expertise and a commitment to
            quality.
            <br />
            <br />
            Contact us today to get a free quote or schedule an appointment.
          </>
        }
      />
    </>
  );
}
