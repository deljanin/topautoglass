import WideTextList from "@/app/components/WideTextList";

const textList = [
  "Expertise and Equipment: At Top Auto Glass, we combine technical expertise with state-of-the-art equipment to deliver precise, manufacturer-approved ADAS calibrations. Your safety is our top priority, and we ensure your vehicle’s systems function exactly as intended.",
  "Certified Technicians: Our fully certified technicians specialize in ADAS calibration and use advanced tools to align sensors, recalibrate cameras, and perform full-system diagnostics with unmatched accuracy.",
  "Comprehensive Services: In addition to ADAS calibration, we offer related services like ceramic coating, window tinting, and paint protection films, making us your one-stop shop for vehicle care in Houston.",
  "Convenience and Value: We provide competitive pricing and fast turnaround times, minimizing disruptions to your schedule while ensuring top-notch results.",
  "Transparency and Trust: At Top Auto Glass, we pride ourselves on transparency and reliability. We explain the calibration process in detail, answer your questions, and provide accurate quotes for every service.",
];
export default function AdasCalibrationPage() {
  return (
    <>
      <WideTextList
        sectionTitle="Why Choose Top Auto Glass for ADAS Calibration?"
        listItems={textList}
        showCTA={true}
        ctaText="Ready to recalibrate your ADAS systems? Contact us today to schedule an appointment or request a quote. "
      />
    </>
  );
}
