import Image from 'next/image';
import services from '../data/data';
import CTA from '../components/CTA';
import Link from 'next/link';

export default function Services() {
  return (
    <div className="py-20">
      <h1 className="xl:text-6xl sm:text-5xl text-4xl text-center font-cateItalic pb-20">
        Services
      </h1>
      <div className="xl:px-64 lg:px-32 px-5 flex flex-col items-center justify-center gap-10">
        {services.map((service, i) => {
          const counter = i % 3;

          if (counter % 2 === 0) {
            return (
              <>
                {i === 3 && <div></div>}
                <div
                  key={service.title}
                  id={service.link}
                  className="md:flex-row w-full min-h-[440px] flex flex-col rounded-md scroll-mt-40 
                  bg-[linear-gradient(316deg,#303030_-5.82%,#404040_47.8%,#303030_100.65%)] 
                  shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]">
                  <div className="flex flex-col gap-2 lg:px-16 px-8 lg:py-16 py-8 md:w-1/2">
                    <h3 className="xl:text-4xl text-3xl font-cate">
                      {service.title === 'PPF'
                        ? 'Paint Protection Film'
                        : service.title}
                    </h3>
                    <p className="pt-4 text-sm ">
                      {service.longDescription.map((text) => {
                        return (
                          <span key={text}>
                            {text}
                            <br />
                            <br />
                          </span>
                        );
                      })}
                    </p>
                    <Link href="/#contact" className="">
                      <CTA
                        text="Get a free quote"
                        type="button"
                        width={undefined}
                      />
                    </Link>
                  </div>
                  <div className="relative md:w-1/2 w-full h-[300px] md:h-auto">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill={true}
                      className="md:rounded-r-md rounded-b-md"
                      objectFit="cover"
                    />
                  </div>
                </div>
              </>
            );
          } else {
            return (
              <div
                key={service.title}
                id={service.link}
                className="md:flex-row w-full min-h-[440px] flex flex-col-reverse rounded-md scroll-mt-40 bg-[linear-gradient(316deg,#303030_-5.82%,#404040_47.8%,#303030_100.65%)] shadow-[0px_0px_15px_2px_rgba(0,0,0,0.50)]">
                <div className="relative md:w-1/2 w-full h-[300px] md:h-auto">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill={true}
                    className="md:rounded-r-md rounded-b-md"
                    objectFit="cover"
                  />
                </div>
                <div className="flex md:w-1/2 flex-col gap-2 items-start md:items-end lg:px-16 px-8 lg:py-16 py-8 ">
                  <h3 className="xl:text-4xl font-cate text-3xl">
                    {service.title === 'PPF'
                      ? 'Paint Protection Film'
                      : service.title}
                  </h3>
                  <p className="pt-4 text-sm  md:text-right">
                    {service.longDescription.map((text) => {
                      return (
                        <span key={text}>
                          {text}
                          <br />
                          <br />
                        </span>
                      );
                    })}
                  </p>
                  <Link href="/#contact" className="">
                    <CTA
                      text="Get a free quote"
                      type="button"
                      width={undefined}
                    />
                  </Link>
                </div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
