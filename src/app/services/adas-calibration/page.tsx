// import WideTextSection from "@/app/components/WideText";
import CTA, { CTABlack } from "@/app/components/CTA";
import HeroHorizontalGradient from "@/app/components/HeroHorizontalGradient";
import ImageSection from "@/app/components/ImageSection";
import LearnMore from "@/app/components/LearnMore";
import WideTextList from "@/app/components/WideTextList";
import WideTextSection from "@/app/components/WideTextSection";
import Image from "next/image";
import Link from "next/link";
import StaticCalibration from "/public/images/adas-calibration/static-calibration.jpg";
import DynamicCalibration from "/public/images/adas-calibration/dynamic-calibration.jpg";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top ADAS Calibration Services in Houston, TX | Top Auto Glass",
  description:
    "Ensure safety with expert ADAS calibration in Houston. Top Auto Glass offers precise camera recalibration and windshield calibration services. Call us now!",
  keywords:
    "adas calibration houston, car calibration, adas recalibration, calibration services houston, adas camera calibration, calibration houston, houston calibration, calibration houston tx, calibration services houston tx, texas calibration houston, adas calibration cost, windshield camera calibration, calibration for car, adas calibration near me",
};

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
      <HeroHorizontalGradient
        sectionTitle={
          <>
            Expert ADAS Calibration <br className="hidden md:block" /> Services
            in Houston, TX
          </>
        }
        description={
          <>
            Advanced Driver Assistance Systems (ADAS) are at the forefront of
            modern vehicle safety, designed to protect drivers, passengers, and
            pedestrians. Whether it’s ADAS camera calibration after a{" "}
            <Link href="?service=adas-calibration#contact">
              <u>windshield</u>
            </Link>{" "}
            replacement or ensuring your radar systems are in perfect alignment,
            we make safety our priority.
          </>
        }
        imagePath="/images/hero/hero-adas-calibration.jpg"
        ctaLink="/?service=adas-calibration#contact"
        ctaText="Calibrate ADAS Today"
      />
      <WideTextSection
        sectionTitle={<>What is ADAS Calibration?</>}
        description={
          <>
            ADAS calibration involves resetting your vehicle’s sensors and
            cameras to factory specifications. These systems are designed to
            provide real-time data that assists with critical safety functions,
            including collision prevention, blind-spot monitoring, and parking
            assistance.
            <br />
            <br />
            Features like lane-keeping assistance, adaptive cruise control, and
            emergency braking rely on sensors and cameras to function
            accurately. However, even slight misalignments can result in
            significant safety risks, compromising your ability to navigate the
            road safely.
            <br />
            <br />
            When a system is miscalibrated, its accuracy is compromised. This
            can result in false warnings, failure to recognize hazards or even
            complete system malfunctions. Proper recalibration ensures your
            vehicle operates as intended, keeping you safe on every journey.
          </>
        }
      />
      <ImageSection
        imagePath="/images/image-section/adas-calibration.jpg"
        altText="Sport utility vehicle on ADAS calibration device."
      />
      <section className="flex flex-col items-center gap-10 py-20">
        <h2 className="text-center font-cateItalic text-4xl sm:text-5xl xl:text-6xl xl:leading-tight 2xl:w-3/4">
          Types of ADAS Calibration Services
        </h2>
        <p className="px-5 text-center sm:w-2/3 sm:px-10 sm:text-xl xl:w-1/2 xl:px-20">
          ADAS calibration generally falls into two categories:{" "}
          <b>static calibration and dynamic calibration.</b> Each type serves a
          specific purpose and ensures optimal performance for different
          components of your vehicle.
        </p>
        <div className="flex flex-col gap-20 px-5 sm:px-10 xl:flex-row xl:justify-between xl:gap-10 2xl:gap-20 2xl:px-20">
          <div className="flex w-full flex-col items-center justify-start lg:min-w-[600px] lg:max-w-[830px]">
            <h3 className="mb-10 text-center font-cate text-3xl xl:text-4xl">
              Static Calibration
            </h3>
            <div className="relative mb-10 h-[500px] w-full">
              <Image
                src={StaticCalibration}
                placeholder="blur"
                alt="Static calibration proccess on a vehicle."
                fill
                className="h-full w-full rounded-lg object-cover shadow-[0_0_15px_2px_rgba(0,0,0,0.5)]"
              />
            </div>
            <p className="text-justify">
              Static calibration is performed in a controlled, stationary
              environment. This process uses advanced tools like laser-guided
              alignment systems and specially designed target boards. It’s
              essential for vehicles equipped with ADAS features such as
              forward-facing cameras, radar systems, or parking sensors.
              <br />
              <br />
              Static calibration is particularly beneficial for systems with
              high sensitivity, such as lane-keeping assist or traffic sign
              recognition. By working in a controlled environment, we can
              eliminate variables that might affect sensor accuracy, ensuring
              your vehicle’s safety systems operate flawlessly. At Top Auto
              Glass,{" "}
              <b>
                we use industry-leading equipment to carry out precise static
                calibration.
              </b>
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-start lg:min-w-[600px] lg:max-w-[830px]">
            <h3 className="mb-10 text-center font-cate text-3xl xl:text-4xl">
              Windshield Camera Calibration
            </h3>
            <div className="relative mb-10 h-[500px] w-full">
              <Image
                src={DynamicCalibration}
                placeholder="blur"
                alt="Dynamic calibration proccess on a vehicle."
                fill
                className="h-full w-full rounded-lg object-cover shadow-[0_0_15px_2px_rgba(0,0,0,0.5)]"
              />
            </div>
            <p className="text-justify">
              <b>
                Windshield-mounted cameras are critical for several ADAS
                features,
              </b>{" "}
              including lane departure warnings, forward collision alerts, and
              automatic high beams. When a windshield is replaced, these cameras
              must be recalibrated to align perfectly with the vehicle’s
              specifications. Even a small deviation can disrupt the system’s
              functionality, reducing its effectiveness in critical situations.
              <br />
              <br />
              Our <b>windshield camera calibration services</b> at Top Auto
              Glass are designed to restore these systems to peak performance.
              Using advanced diagnostic tools, we ensure every camera angle is
              perfectly aligned. This attention to detail allows us to guarantee
              the accuracy and reliability of your ADAS features.
            </p>
          </div>
        </div>
        <h4 className="text-center font-cate text-2xl xl:text-3xl">
          Calibrate you ADAS systems today
        </h4>
        <div className="flex flex-wrap items-center justify-center gap-5">
          <Link href="/?service=adas-calibration#contact">
            <CTA text="Get a Free Quote" type="button" width="170" />
          </Link>
          <a href="tel:+18327958511">
            <CTABlack text="(832) 795-8511" type="button" width="170" />{" "}
          </a>
        </div>
      </section>

      <WideTextList
        sectionTitle="Why Choose Top Auto Glass for ADAS Calibration?"
        listItems={textList}
        showCTA={true}
        ctaDescription="Ready to recalibrate your ADAS systems? Contact us today to schedule an appointment or request a quote. "
        ctaLink="/?service=adas-calibration#contact"
      />
      <LearnMore
        sectionTitle="Learn More About ADAS Calibration in Houston, TX"
        imagePath="/images/learn-more/adas-calibration.jpg"
        ctaLink="/?service=adas-calibration#contact"
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
