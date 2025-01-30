import ServiceShowcase from "@/app/components/ServiceShowcase";

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
export default function CeramicCoatingPage() {
  return (
    <>
      <ServiceShowcase
        id="ceramic-coating"
        sectionTitle="Why Choose Top Auto Glass for Ceramic Coating in Houston?"
        showcase={showcase}
        showCTA={false}
      />
    </>
  );
}
