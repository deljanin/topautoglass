import ServiceShowcase from "@/app/components/ServiceShowcase";
import WideTextList from "@/app/components/WideTextList";
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
    </>
  );
}
