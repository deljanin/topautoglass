import Card from "@/app/components/Card";
import CTA from "@/app/components/CTA";
import GradientImage from "@/app/components/GradientImage";
import HeroVerticalGradient from "@/app/components/HeroVerticalGradient";
import ImageSection from "@/app/components/ImageSection";
import LearnMore from "@/app/components/LearnMore";
import Link from "next/link";

const expectations = [
  {
    title: "Premium Materials",
    description:
      "We use only high-quality window films that are durable, fade-resistant, and backed by warranties.",
  },
  {
    title: "Expert Installation",
    description:
      "Our technicians have the skills and experience to ensure a seamless finish, free from bubbles or imperfections.",
  },
  {
    title: "Personalized Service",
    description:
      "We understand that every customer’s needs are unique. That’s why we tailor our services to match your specific goals, whether it’s UV protection, privacy, or enhancing your car’s appearance.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Quality doesn’t have to come with a hefty price tag. We offer affordable rates without compromising on excellence.",
  },
];
export default function WindowTintingPage() {
  return (
    <>
      <HeroVerticalGradient
        sectionTitle={
          <>
            Top-Quality Window Tinting
            <br className="hidden sm:block" /> Services in Houston, TX
          </>
        }
        description={
          <>
            At{" "}
            <Link href="/" className="underline">
              Top Auto Glass
            </Link>
            , we specialize in delivering the best window tinting services in
            Houston, TX. Our team’s expertise and commitment to quality ensure
            you’ll enjoy long-lasting results that enhance both the
            functionality and style of your vehicle.
          </>
        }
        imagePath="/images/hero/hero-window-tinting.jpg"
        ctaLink="/contact?service=window-tinting"
        ctaText="Block the Heat"
        marginTop="mt-20"
      />
      <section className="flex flex-col items-center px-5 py-20 sm:px-16 lg:px-44">
        <h2 className="pb-20 text-center font-cateItalic text-4xl sm:text-5xl xl:w-2/3 xl:text-6xl xl:leading-tight">
          Why Choose Window <br className="hidden sm:block" /> Tinting in
          Houston?
        </h2>
        <div className="mb-10 flex flex-col items-center">
          <p className="text-justify sm:text-xl xl:w-7/12">
            Houston’s sweltering summers and relentless sunlight make window
            tinting a necessity, rather than a luxury.
            <br />
            <br />
            Tinted windows can block up to 99% of harmful UV rays, protecting
            both your skin and your car’s interior from fading or cracking.
            What’s more,{" "}
            <b>they also reduce heat build-up inside your vehicle,</b>
            allowing your air conditioning to work more efficiently and saving
            you on energy costs.
            <br />
            <br />
            Privacy and security are other crucial advantages. With tinted
            windows, you can enjoy a greater sense of discretion by keeping the
            contents of your car hidden from prying eyes. Additionally, window
            tinting adds a layer of protection against glass shattering during
            an accident or break-in. They also pair well with{" "}
            <Link href="/services/ceramic-coating">
              <u>ceramic coating</u>
            </Link>{" "}
            or
            <Link href="/services/car-wrap">
              {" "}
              <u>vehicle wraps</u>
            </Link>
            , making a stunning visual.
            <br />
            <br />
            For Houston drivers, the benefits go beyond comfort. Window tinting
            contributes to a safer, more enjoyable driving experience by
            reducing glare from the sun or headlights, which helps you stay
            focused on the road.
          </p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-center sm:text-xl xl:w-1/2">
            By investing in professional services offered by Top Auto Glass, you
            can get all of these benefits at a reasonable price and unrivaled
            quality.
          </p>
          <CTA text="Contact Us Today" type="button" />
        </div>
      </section>
      <ImageSection
        imagePath="/images/image-section/window-tinting.jpg"
        altText="Window tinting on a car in Top Auto Glass workshop."
      />

      <section className="flex flex-col items-center gap-10 px-5 py-20">
        <h1 className="text-center font-cateItalic text-4xl sm:text-5xl xl:text-6xl">
          Window Tinting Process
        </h1>
        <p className="sm:2/3 text-center sm:text-xl md:w-1/2 xl:w-2/5">
          Our window tinting process is designed to deliver precision,
          efficiency, and quality every step of the way. Here’s what you can
          expect:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {expectations.map((expectation) => (
            <Card
              key={expectation.title}
              title={expectation.title}
              description={expectation.description}
            />
          ))}
        </div>
        <p className="sm:2/3 text-center sm:text-xl md:w-1/2 xl:w-1/3">
          As a trusted tint shop in Houston, TX, we’re dedicated to delivering
          the best window tinting solutions. From consultation to installation,
          we ensure a smooth process that prioritizes your satisfaction.
        </p>
      </section>
      <GradientImage
        sectionTitle="Get a Free Quote Today"
        imagePath="/images/gradient-image/window-tinting.jpg"
        ctaLink="/#contact?service=window-tinting"
        description={
          <>
            Ready to upgrade your vehicle with professional window tinting?
            Contact Top Auto Glass today for a free quote and discover why we’re
            the top choice for window tinting services in Houston.
            <br />
            <br />
            Let us enhance your driving experience with our expert solutions
            that combine style, comfort, and functionality. Call us now or visit
            our shop to get started!
          </>
        }
      />
      <LearnMore
        sectionTitle="Learn More About Window Tinting in Houston, TX"
        imagePath="/images/learn-more/window-tinting.jpg"
        ctaLink="/#contact?service=auto-glass"
        description={
          <>
            When it comes to upgrading your vehicle’s comfort and appearance,
            professional window tinting stands out as an essential investment.
            Beyond adding a sleek and modern look, tinted windows provide
            significant benefits such as heat reduction, UV protection, and
            enhanced privacy. 
            <br />
            <br />
            Choosing the right provider for window tinting can make all the
            difference. With Top Auto Glass, you can count on superior
            craftsmanship, premium materials, and personalized service that
            prioritizes your satisfaction. Whether you’re aiming to protect your
            car’s interior from Houston’s intense sun or elevate its aesthetic
            appeal, we’re here to help. 
            <br />
            <br />
            In addition to window tinting, we provide a full suite of services
            to protect and enhance your vehicle, including{" "}
            <Link href="/services/auto-glass">
              <u>auto glass repair</u>
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
              <u>paint protection film (PPF)</u>,
            </Link>{" "}
            and{" "}
            <Link href="/services/car-wrap">
              <u>car wraps</u>
            </Link>
            . Whatever your vehicle needs, we have you covered with
            comprehensive care and trusted expertise to give it the ultimate
            upgrade.
          </>
        }
      />
    </>
  );
}
