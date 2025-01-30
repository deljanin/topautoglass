import ServiceShowcase from "../components/ServiceShowcase";
import services from "../data/data";

export default function Services() {
  return (
    <ServiceShowcase
      id="services"
      sectionTitle="Services"
      showcase={services}
      showCTA={true}
    />
  );
  // return (
  //   <section className="py-20">
  //     <h1 className="xl:text-6xl sm:text-5xl text-4xl text-center font-cateItalic">
  //       Services
  //     </h1>
  //     <div className="xl:pt-10 pt-20 px-5 flex flex-wrap items-center justify-center gap-16">
  //       {services.map((service) => (
  //         <Card key={service.title} {...service} />
  //       ))}
  //     </div>
  //   </section>
  // );
}
