import Card from "@/app/components/Card";
import GradientImage from "@/app/components/GradientImage";
import HeroHorizontalGradient from "@/app/components/HeroHorizontalGradient";
import LearnMore from "@/app/components/LearnMore";
import ServiceShowcase from "@/app/components/ServiceShowcase";
import WideTextList from "@/app/components/WideTextList";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Best Custom Vehicle Wraps in Houston | Top Auto Glass",
  description:
    "Transform your car with custom vehicle wraps in Houston, TX. Top Auto Glass offers expert vinyl wraps for cars. Don't hesitate - get a quote!",
  keywords:
    "vehicle wraps houston, vinyl wrap houston, auto wrap houston, vinyl wrap houston texas, car wrap houston, vehicle wraps houston texas, car wraps in houston texas, houston vinyl car wraps, vinyl car wrap houston tx, houston car wrap cost, best car wrap houston, houston car wrap shops, car wrap houston texas, car wraps houston pricing, custom car wraps houston, houston vehicle wrap experts, expert car wrap houston",
};

const showcase = [
  {
    title: "Custom Car Wraps",
    longDescription: [
      "Personalize your car with wraps designed to reflect your unique style or branding. Whether you prefer a sleek matte finish, a bold glossy appearance, or the subtle elegance of satin or carbon fiber, we’ve got you covered. ",
      "Our design team works closely with you to ensure your vision comes to life. From intricate patterns to minimalist aesthetics, we can create wraps that match your personality or business identity. Plus, our high-quality vinyl materials ensure your custom wrap maintains its look and durability for years to come.",
    ],
    imageUrl: "/images/showcase/car-wrap/custom-car-wraps.jpg",
  },
  {
    title: "Commercial Vehicle Wraps",
    longDescription: [
      "Custom vehicle wraps are a powerful marketing tool for businesses. They transform your fleet into moving advertisements, reaching thousands of potential customers daily. ",
      "Whether you’re outfitting delivery vans, trucks, or company cars, our Houston vehicle wrap experts create eye-catching designs that enhance brand visibility.",
      "Trust us to deliver impactful solutions including auto wrap services to boost your business presence. Studies show that vehicle wraps generate impressions at a fraction of the cost of traditional advertising methods.",
    ],
    imageUrl: "/images/showcase/car-wrap/commercial-vehicle-wraps.jpg",
  },
  {
    title: "Protective Vinyl Wraps",
    longDescription: [
      "Besides enhancing aesthetics, vehicle wraps offer superior protection for your car’s original paint. Vinyl wraps act as a shield against UV rays, dirt, and scratches, preserving your car’s value over time. If you’re in the market for car wrap in Houston Texas, you’ll find our solutions ideal for balancing style and protection.",
      "With the harsh Texas sun and unpredictable weather, protecting your vehicle’s paint is more important than ever. Our protective vinyl wraps are designed to withstand these elements, keeping your car looking pristine while reducing the need for frequent maintenance. Plus, when it’s time for a change, the wrap can be removed without damaging the original paint underneath.",
    ],
    imageUrl: "/images/showcase/car-wrap/protective-vinyl-wraps.jpg",
  },
];

const textList = [
  "Expertise and Technology: At Top Auto Glass, we combine expertise, state-of-the-art technology, and professional installation to deliver exceptional results. As one of the best car wrap providers in Houston, we’re committed to making your vision a reality.",
  "Flawless Application: From intricate designs to flawless application, our team ensures every wrap meets the highest standards. Trust our expert car wrap services to give your vehicle a stunning, durable finish that stands out.",
  "Advanced Techniques: Our dedication to quality and customer satisfaction sets us apart. We use advanced tools and techniques to ensure every wrap fits seamlessly, without bubbles or imperfections.",
  "Tailored Solutions: If you’re a car enthusiast looking for a bold new look, a business owner seeking to elevate your branding, or anyone in between, Top Auto Glass is the trusted choice for vehicle wraps in Houston.",
];

const wrapTypes = [
  {
    title: "Full Wraps",
    description:
      "Full wraps allow you to completely change your vehicle’s color or design, offering a striking transformation.",
  },
  {
    title: "Partial Wraps",
    description:
      "Partial wraps are perfect for adding personalized touches without covering the entire surface, making them a budget-friendly option.",
  },
  {
    title: "Accent wraps",
    description:
      "Accent wraps, on the other hand, provide subtle yet impactful upgrades by focusing on areas like the roof, hood, or mirrors.",
  },
];
export default function CarWrapPage() {
  return (
    <>
      <HeroHorizontalGradient
        sectionTitle={
          <>
            Custom Vehicle Wraps <br className="hidden md:block" />
            in Houston, TX
          </>
        }
        description={
          <>
            When it comes to upgrading your vehicle’s look and functionality,
            custom vehicle wraps are an unbeatable choice. <br /> Let’s dive
            into all things vehicle wraps and why you should choose Top Auto
            Glass to do the job for you!
          </>
        }
        imagePath="/images/hero/hero-car-wrap.jpg"
        ctaLink="/?service=car-wrap#contact"
        ctaText="See the Difference"
      />
      <section className="relative flex w-full flex-col items-center gap-14 py-20 lg:items-start">
        <h2 className="px-5 text-center font-cateItalic text-4xl sm:text-5xl lg:px-32 lg:text-left xl:px-64 xl:text-6xl">
          What are Vehicle Wraps?
        </h2>
        <div className="flex flex-col items-center gap-10 px-5 lg:flex-row lg:justify-between lg:pl-32 lg:pr-0 xl:pl-64">
          <p className="text-justify sm:w-3/4 sm:text-xl lg:text-left 2xl:w-1/2">
            Vehicle wraps are a flexible and durable way to customize your car’s
            appearance. These wraps consist of high-quality vinyl materials
            applied to your vehicle’s exterior, creating a new look without
            permanent changes.
            <br />
            <br />
            If you like avoiding permanent changes, you should also look into{" "}
            <Link href="/services/window-tinting">
              <u>window tinting</u>
            </Link>{" "}
            which adds both character and safety to your car, or{" "}
            <Link href="/services/paint-protection-film">
              <u>PPF film</u>
            </Link>{" "}
            which is a great option for paint preservation. 
            <br />
            <br />
            You can choose from various options, including full wraps that cover
            the entire vehicle, partial wraps for specific sections, or accent
            wraps to enhance certain features.
            <br />
            <br />
            With so many options available, there’s a wrap to suit every
            preference and purpose.
          </p>
          <div className="relative h-[400px] w-full lg:h-[650px]">
            <Image
              src="/images/car-wrap/vehicle-wrap.jpg"
              alt="Car Wrap"
              fill
              className="right-0 top-0 -z-10 rounded-md object-cover shadow-[0_0_15px_2px_rgba(0,0,0,0.5)] lg:rounded-l-md lg:rounded-r-none"
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center justify-center gap-5 px-5 2xl:gap-16">
          {wrapTypes.map((wrap, index) => (
            <Card
              key={index}
              title={wrap.title}
              description={wrap.description}
            />
          ))}
        </div>
      </section>
      <ServiceShowcase
        id="car-wrap"
        sectionTitle="Our Vehicle Wrap Services"
        showcase={showcase}
        showCTA={false}
      />
      <WideTextList
        sectionTitle="Why Choose Top Auto Glass for Vehicle Wraps in Houston?"
        listItems={textList}
        showCTA={false}
      />
      <GradientImage
        sectionTitle="Get a Free Quote Today"
        imagePath="/images/gradient-image/car-wrap.jpg"
        ctaLink="/?service=car-wrap#contact"
        description={
          <>
            Ready to transform your vehicle with a custom wrap? Call us today to
            get a free quote and start your project.
            <br />
            <br />
            Whether you’re looking for auto glass repair services in Houston or
            the best custom vehicle wraps in town, Top Auto Glass is your
            trusted partner for quality and innovation.
          </>
        }
      />
      <LearnMore
        sectionTitle="Learn More About Vehicle Wraps in Houston, TX"
        imagePath="/images/learn-more/car-wrap.jpg"
        ctaLink="/?service=car-wrap#contact"
        description={
          <>
            Vehicle wraps are a versatile and cost-effective solution for
            showcasing your style, protecting your car’s paint, or advertising
            your business on the go.
            <br />
            <br />
            At Top Auto Glass, we pair expert craftsmanship with premium
            materials to deliver custom wraps that transform your vehicle.
            Whether it’s experimenting with bold colors and textures or creating
            eye-catching designs, our vinyl wraps are designed to turn heads.
            <br />
            <br />
            For business owners, commercial wraps offer a powerful way to
            enhance branding and keep your company top-of-mind. From design to
            flawless installation, we handle it all—so you can focus on growing
            your business while we elevate your vehicles.
          </>
        }
      />
    </>
  );
}
