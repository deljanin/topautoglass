import ServiceShowcase from "@/app/components/ServiceShowcase";
import WideTextList from "@/app/components/WideTextList";

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
        ctaText="Don’t wait to address damaged glass - serious safety concerns deserve timely reactions. Contact us today for expert auto glass repair services in Houston! Click below to get started:"
      />
    </>
  );
}
