import Card from '../components/Card';
import services from '../data/data';

export default function Services() {
  return (
    <section className="py-20">
      <h1 className="xl:text-6xl sm:text-5xl text-4xl text-center font-cateItalic">
        Services
      </h1>
      <div className="xl:pt-10 pt-20 px-5 flex flex-wrap items-center justify-center gap-16">
        {services.map((service) => (
          <Card key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
