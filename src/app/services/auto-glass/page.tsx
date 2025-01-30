import ServiceShowcase from "@/app/components/ServiceShowcase";

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

export default function AutoGlassPage() {
  return (
    <>
      <ServiceShowcase
        id="auto-glass"
        sectionTitle="Our Auto Glass Repair and Replacement Services"
        showcase={showcase}
        showCTA={false}
      />
    </>
  );
}
