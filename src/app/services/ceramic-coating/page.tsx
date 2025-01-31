import GradientImage from "@/app/components/GradientImage";
import LearnMore from "@/app/components/LearnMore";
import ServiceShowcase from "@/app/components/ServiceShowcase";
import WideTextList from "@/app/components/WideTextList";

const showcase = [
  {
    title: "Expert Application",
    longDescription: [
      "Top Auto Glass is your go-to expert for ceramic coating in Houston. Our experienced team applies premium automotive ceramic coatings using advanced techniques and high-quality products, ensuring that your vehicle gets the best protection available.",
      "With years of experience and a dedication to excellence, we are the trusted name for ceramic coatings in Houston.",
    ],
    imageUrl: "/images/showcase/ceramic-coating/expert-application.jpg",
  },
  {
    title: "Flawless, Lasting Finish",
    longDescription: [
      "We take pride in our meticulous attention to detail, which is why our customers trust us for ceramic car coating services.",
      "Whether it’s a luxury vehicle or a daily driver, our professional application ensures a flawless finish that lasts.",
    ],
    imageUrl: "/images/showcase/ceramic-coating/flawless-finish.jpg",
  },
  {
    title: "Ultimate Paint Protection",
    longDescription: [
      "We use only the highest quality auto ceramic coatings that are proven to protect your car from the harsh elements of Houston’s climate.",
      "Our team has the expertise to handle your car with care, providing a durable, even coat that maximizes the benefits of ceramic protection.",
    ],
    imageUrl: "/images/showcase/ceramic-coating/ultimate-paint-protection.jpg",
  },
];

const textList = [
  "Enhanced Gloss and Shine: Ceramic coating boosts your vehicle’s appearance by creating a deep, reflective shine that lasts. This extra gloss gives your car a showroom-quality look that stays fresh for months.",
  "Protection from UV Rays and Oxidation: Houston’s intense sun can cause paint to fade and oxidize over time. Ceramic coatings provide a layer of defense against harmful UV rays, helping maintain the vibrant color and shine of your vehicle’s paint.",
  "Defense Against Dirt and Contaminants: The hydrophobic nature of the coating prevents water, dirt, and grime from sticking to your car’s surface. This means your car stays cleaner for longer, and you’ll spend less time scrubbing away stubborn stains.",
  "Easy Cleaning: Because ceramic coatings create a smooth, non-porous surface, washing your car becomes easier. Water simply beads off the surface, carrying dirt and contaminants with it, leaving your vehicle looking fresh with minimal effort.",
  "Scratch Resistance: While not completely scratch-proof, ceramic coatings provide an added layer of protection against minor abrasions from everyday use, keeping your car looking better for longer.",
];
export default function CeramicCoatingPage() {
  return (
    <>
      <ServiceShowcase
        id="ceramic-coating"
        sectionTitle="Why Choose Top Auto Glass for Ceramic Coating in Houston?"
        showcase={showcase}
        showCTA={false}
      />
      <WideTextList
        sectionTitle="Benefits of Ceramic Coating"
        listItems={textList}
        showCTA={false}
      />
      <GradientImage
        sectionTitle="Get a Free Quote Today"
        imagePath="/images/gradient-image/ceramic-coating.jpg"
        ctaLink="/#contact?service=ceramic-coating"
        description={
          <>
            Are you ready to give your car the protection it deserves? Contact
            Top Auto Glass today for a free quote on our expert ceramic coating
            services. We’ll guide you through the process, answer any questions
            you have, and ensure your vehicle gets the top-notch care it
            deserves.
            <br />
            <br />
            Don’t wait—book your appointment today and enjoy a cleaner, shinier,
            and better-protected vehicle tomorrow!
          </>
        }
      />
      <LearnMore
        sectionTitle="Learn More About Ceramic Coating in Houston, TX"
        imagePath="/images/learn-more/ceramic-coating.jpg"
        ctaLink="/#contact?service=ceramic-coating"
        description={
          <>
            Ceramic coating provides a durable layer of protection for your
            car’s paint, guarding it against the elements and making maintenance
            effortless.
            <br />
            <br />
            At Top Auto Glass, we specialize in expert ceramic coating services
            designed to deliver the best protection available. As trusted
            providers of auto glass repair in Houston, we’re committed to
            keeping your vehicle looking pristine, inside and out.
            <br />
            <br />
            Not only does ceramic coating make cleaning easier, but it also
            helps your car retain its value by maintaining its paint in top
            condition. Discover how this advanced solution can elevate your
            vehicle’s appearance and protection.
          </>
        }
      />
    </>
  );
}
