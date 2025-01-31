// import WideTextSection from "@/app/components/WideText";
import LearnMore from "@/app/components/LearnMore";
import WideTextList from "@/app/components/WideTextList";
import Link from "next/link";

const textList = [
  "Expertise and Equipment: At Top Auto Glass, we combine technical expertise with state-of-the-art equipment to deliver precise, manufacturer-approved ADAS calibrations. Your safety is our top priority, and we ensure your vehicle’s systems function exactly as intended.",
  "Certified Technicians: Our fully certified technicians specialize in ADAS calibration and use advanced tools to align sensors, recalibrate cameras, and perform full-system diagnostics with unmatched accuracy.",
  "Comprehensive Services: In addition to ADAS calibration, we offer related services like ceramic coating, window tinting, and paint protection films, making us your one-stop shop for vehicle care in Houston.",
  "Convenience and Value: We provide competitive pricing and fast turnaround times, minimizing disruptions to your schedule while ensuring top-notch results.",
  "Transparency and Trust: At Top Auto Glass, we pride ourselves on transparency and reliability. We explain the calibration process in detail, answer your questions, and provide accurate quotes for every service.",
];
// const textSection = [
//   "ADAS calibration involves resetting your vehicle’s sensors and cameras to factory specifications. These systems are designed to provide real-time data that assists with critical safety functions, including collision prevention, blind-spot monitoring, and parking assistance.",
//   "Features like lane-keeping assistance, adaptive cruise control, and emergency braking rely on sensors and cameras to function accurately. However, even slight misalignments can result in significant safety risks, compromising your ability to navigate the road safely.",
//   "When a system is miscalibrated, its accuracy is compromised. This can result in false warnings, failure to recognize hazards or even complete system malfunctions. Proper recalibration ensures your vehicle operates as intended, keeping you safe on every journey.",
// ];
export default function AdasCalibrationPage() {
  return (
    <>
      {/* <WideTextSection
        sectionTitle="What is ADAS Calibration?"
        text={textSection}
      /> */}
      <WideTextList
        sectionTitle="Why Choose Top Auto Glass for ADAS Calibration?"
        listItems={textList}
        showCTA={true}
        ctaText="Ready to recalibrate your ADAS systems? Contact us today to schedule an appointment or request a quote. "
      />
      <LearnMore
        sectionTitle="Learn More About ADAS Calibration in Houston, TX"
        imagePath="/images/learn-more/adas-calibration.jpg"
        ctaLink="/#contact?service=adas-calibration"
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
