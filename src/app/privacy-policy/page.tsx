const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center bg-[#252525] px-5 py-10 md:px-20 lg:px-40">
      <h1 className="mb-6 text-center font-cateItalic text-4xl font-bold">
        Privacy Policy
      </h1>

      <p className="mb-10 text-center">Effective Date: 10.25.2024</p>

      <div className="max-w-4xl space-y-6">
        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            1. Introduction
          </h2>
          <p>
            We value your privacy and are committed to protecting your personal
            information. This Privacy Policy outlines the types of data we
            collect, how we use it, and the measures we take to protect your
            information.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6">
            <li>Name: to personalize communications and responses.</li>
            <li>
              Email Address: for follow-up, response to inquiries, and updates
              related to your request.
            </li>
            <li>
              Phone Number: to contact you directly regarding your request.
            </li>
            <li>
              Car Year, Brand/Make, Model: to assess your specific vehicle
              needs.
            </li>
            <li>
              VIN Number: to identify the exact specifications of your vehicle
              for accurate quoting.
            </li>
            <li>
              Service: to indicate the specific service you require. Options
              include Auto Glass, ADAS Calibration, Window Tinting, Car Wrap,
              Paint Protection Film, Ceramic Coating, or Multiple.
            </li>
            <li>
              Which Glass: (For Auto Glass) to understand your glass needs.
            </li>
            <li>
              Wrap Coverage: (For Car Wrap) to specify your desired wrap
              coverage.
            </li>
            <li>
              PPF Coverage: (For Paint Protection Film) to indicate your
              preferred coverage type.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li>To process quotes and inquiries for services.</li>
            <li>To communicate important updates or respond to questions.</li>
          </ul>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell, trade, or otherwise transfer your personal
            information to outside parties except where necessary to fulfill
            services, comply with legal obligations, or protect our rights.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            5. Data Protection and Security
          </h2>
          <p>
            We take the security of your personal data seriously and implement
            various security measures to protect your information from
            unauthorized access or misuse.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            6. Your Rights and Choices
          </h2>
          <p>
            Access and Correction: You can request access to your personal
            information or corrections to any inaccuracies.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            7. Children&apos;s Privacy
          </h2>
          <p>
            Our services are not intended for children under 15. We do not
            knowingly collect personal information from children under this age.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            8. Texas-Specific Compliance
          </h2>
          <p>
            We comply with all relevant Texas state laws, including the Texas
            Business and Commerce Code, regarding data security and breach
            notification requirements.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            9. Governing Law
          </h2>
          <p>
            This Privacy Policy shall be governed and interpreted according to
            the laws of the state of Texas.
          </p>
        </section>

        <section>
          <h2 className="mb-1 font-cate text-2xl font-semibold">
            10. Contact Us
          </h2>
          <p>
            If you have any questions or concerns about this Privacy Policy,
            please contact us at:{" "}
            <a href="mailto:topautoglasstexas@gmail.com" className="underline">
              topautoglasstexas@gmail.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
