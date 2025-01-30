import Image from "next/image";
import services from "../data/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full">
      <div className="h-[600px] w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27719.22010785478!2d-95.51503400000001!3d29.722583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c384c68c7625%3A0xb9fbc1e977b4d8b3!2sHouston%20Auto%20Glass!5e0!3m2!1sen!2sph!4v1729525701334!5m2!1sen!2sph"
          width="100%"
          height="600"
          className="border-0" //grayscale
          loading="lazy"
        ></iframe>
      </div>
      <div className="relative flex flex-col justify-between py-20 text-lg md:mb-0 md:pb-10 md:pt-20 xl:pt-36">
        <div className="flex flex-col flex-wrap items-center justify-between gap-10 px-5 text-center md:flex-row md:items-start md:gap-0 md:text-left xl:px-64">
          <div>
            <h3 className="mb-2 font-bold">Services</h3>
            <div className="flex flex-col gap-1">
              {services.map((service) => (
                <a
                  key={service.title}
                  href={`/services/${service.link}`}
                  className="transition-all hover:scale-110"
                >
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-bold">Working hours</h3>
            <div className="flex flex-col gap-1">
              8:00 - 18:30 Mon-Fri
              <br />
              8:00 - 15:00 Sat
              <br />
              Closed on Sundays
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-bold">Address</h3>
            <div className="flex flex-col gap-1">
              8600 Westpark Dr Suite
              <br /> 101 Houston, TX 77063
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-bold">Contact</h3>
            <div className="flex flex-col items-center gap-1 md:items-start">
              <a
                href="tel:+18327958511"
                className="flex items-center gap-2 transition-all hover:scale-110"
              >
                <Image src="/images/phone.svg" alt="" width={14} height={14} />
                (832)795-8511
              </a>
              <a
                href="https://www.instagram.com/topautoglasstexas"
                target="_blank"
                className="flex items-center gap-2 transition-all hover:scale-110"
              >
                <Image
                  src="/images/instagram.svg"
                  alt=""
                  width={15}
                  height={15}
                />
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10 px-5 pb-10 pt-28 text-center md:flex-row md:justify-between md:gap-0 md:pb-0 md:text-left xl:px-64">
          <span>©2024 Top Auto Glass. All rights reserved.</span>
          <div className="flex flex-col gap-10 md:flex-row md:gap-12">
            <Link href="/privacy-policy">Privacy policy</Link>
            <a
              href="https://vanu.software"
              target="_blank"
              className="text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-[#BDDFFF] hover:to-[#C0C] hover:bg-clip-text hover:text-transparent"
            >
              Website by: vanu.software
            </a>
          </div>
        </div>
        <div
          className="absolute top-0 -z-10 h-full w-full bg-cover bg-fixed bg-[50%_63%] bg-no-repeat before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-[linear-gradient(180deg,rgba(21,21,21,0.8),rgba(32,32,32,0.8))] before:content-['']"
          style={{ backgroundImage: 'url("/images/footer.jpeg")' }}
        ></div>
      </div>
    </footer>
  );
}
