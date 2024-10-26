import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import services from './data/data';
import Navbar from './sections/Navbar';

const cateBold = localFont({
  src: './fonts/CateBold.ttf',
  variable: '--font-cate-bold',
});
const cateBoldItalic = localFont({
  src: './fonts/CateBoldItalic.ttf',
  variable: '--font-cate-bold-italic',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Top Auto Glass',
  description:
    'Your One-Stop Shop for  Auto Glass & Custom Vehicle Enhancements',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cateBold.variable} ${cateBoldItalic.variable} ${inter.variable} font-inter antialiased scroll-smooth relative`}>
        <Navbar />
        {children}
        <footer className="w-full">
          <div className="h-[600px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d27719.22010785478!2d-95.51503400000001!3d29.722583!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c384c68c7625%3A0xb9fbc1e977b4d8b3!2sHouston%20Auto%20Glass!5e0!3m2!1sen!2sph!4v1729525701334!5m2!1sen!2sph"
              width="100%"
              height="600"
              className="border-0 " //grayscale
              loading="lazy"></iframe>
          </div>
          <div className="relative xl:pt-36 md:pt-20 md:mb-0 md:pb-10 py-20 text-lg flex flex-col justify-between">
            <div className="xl:px-64 md:items-start md:gap-0 md:flex-row md:text-left text-center px-5 flex flex-col items-center justify-between gap-10 flex-wrap">
              <div>
                <h3 className="font-bold mb-2">Services</h3>
                <div className="flex flex-col gap-1">
                  {services.map((service) => (
                    <a
                      key={service.title}
                      href={`/services#${service.link}`}
                      className="hover:scale-110 transition-all">
                      {service.title}
                    </a>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Working hours</h3>
                <div className="flex flex-col gap-1">
                  8 - 18:30 Mon-Fri
                  <br />
                  8 - 15 Sat
                  <br />
                  Closed on Sundays
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <div className="flex flex-col gap-1">
                  8600 Westpark Dr Suite
                  <br /> 101 Houston, TX 77063
                </div>
              </div>
              <div>
                <h3 className="font-bold mb-2">Contact</h3>
                <div className="flex flex-col gap-1 items-center md:items-start">
                  <a
                    href="tel:+18327958511"
                    className="flex items-center gap-2 hover:scale-110 transition-all">
                    <Image
                      src="/images/phone.svg"
                      alt=""
                      width={14}
                      height={14}
                    />
                    (832)795-8511
                  </a>
                  <a
                    href="https://www.instagram.com/topautoglasstexas"
                    target="_blank"
                    className="flex items-center gap-2 hover:scale-110 transition-all">
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
            <div className="xl:px-64 md:justify-between md:gap-0 md:flex-row md:text-left md:pb-0 text-center pt-28 pb-10 px-5 flex items-center flex-col gap-10">
              <span>©2024 Top Auto Glass. All rights reserved.</span>
              <div className="flex md:gap-12 md:flex-row gap-10 flex-col">
                <span>Privacy policy</span>
                <a
                  href="https://vanu.software"
                  target="_blank"
                  className="text-white hover:bg-gradient-to-r hover:from-[#BDDFFF] hover:to-[#C0C] hover:bg-clip-text hover:text-transparent transition-all duration-300">
                  Website by: vanu.software
                </a>
              </div>
            </div>
            <div
              className="absolute -z-10 top-0 h-full w-full bg-cover bg-[50%_63%] bg-fixed bg-no-repeat 
              before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full 
              before:bg-[linear-gradient(180deg,rgba(21,21,21,0.8),rgba(32,32,32,0.8))] before:pointer-events-none"
              style={{ backgroundImage: 'url("/images/footer.jpeg")' }}></div>
          </div>
        </footer>
      </body>
    </html>
  );
}
