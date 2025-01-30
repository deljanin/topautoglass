import ServiceShowcase from "@/app/components/ServiceShowcase";

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

export default function CarWrapPage() {
  return (
    <>
      <ServiceShowcase
        id="car-wrap"
        sectionTitle="Our Vehicle Wrap Services"
        showcase={showcase}
        showCTA={false}
      />
    </>
  );
}
