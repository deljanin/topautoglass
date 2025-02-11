import localFont from "next/font/local";
import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import SmoothScroll from "./components/SmoothScroll";
import Footer from "./components/Footer";
import PageTransition from "./components/PageTransition";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto Glass in Houston | Vehicle Enhancements | Top Auto Glass",
  description:
    "Welcome to Top Auto Glass, your one-stop shop for custom vehicle enhancements and auto glass in Houston. Check out our offer and contact us today!",
  keywords: `auto glass houston, cheap windshield repair houston, windshield repair houston tx, car window repair houston, window repair in
    houston, vehicle window repair near me, houston texas windshield repair, auto glass, car windshield replacement houston, window
    car repair near me, window replacement car near me, houston auto glass repair, houston tx glass repair, windshield replacement,
    windows for car, houston glass repair, windshield fix near me, automotive glass near me, houston tx window repair, automobile glass
    replacement near me, replacement glass auto, windshield repair company near me, window for car, fix car window near me,
    windows for a car, car windows replacement, vehicle windshield repair near me, replace car window near me, windshield
    replacement, car glass place near me, windshield repair service, windshield repair, houston tx windshield repair, car window repair
    near me, car window glass repair, window glass replacement car, windshield repair service near me, car window replacement near
    me, fix window car, top auto glass`,
  alternates: {
    canonical: "https://www.topautoglasshouston.com/",
  },
  other: {
    "google-site-verification": "WNDqEMb1ho9n2t79Gc5NGVXxntl5DGiBXRQDsjfAG5k",
  },
};
const cateBold = localFont({
  src: "./fonts/CateBold.ttf",
  variable: "--font-cate-bold",
});

const cateBoldItalic = localFont({
  src: "./fonts/CateBoldItalic.ttf",
  variable: "--font-cate-bold-italic",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-34VEWJVYV1" />
      <body
        className={`${cateBold.variable} ${cateBoldItalic.variable} ${inter.variable} relative font-inter antialiased`}
      >
        <SmoothScroll>
          <Navbar />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
