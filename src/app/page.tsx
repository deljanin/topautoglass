import BeforeAfter from './sections/BeforeAfter';
import Contact from './sections/Contact';
import FAQ from './sections/FAQ';
import Hero from './sections/Hero';
import Services from './sections/Service';
import Testimonials from './sections/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
