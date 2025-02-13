import Image from "next/image";
import Link from "next/link";
import ModelList from "@/components/ModelList";
import SubmitFormButton from "@/components/SubmitForm";
import WhatsAppButton from "@/components/WhatsAppButton";

interface Service {
  title: string;
  description: string;
  link: string;
  bgColor: string;
  image?: string; // Optional image property
  classNames?: string;
}

export default function Home() {
  const services: Service[] = [
    {
      title: "REPAIRS",
      description:
        "Prompt and professional repairs. Being part of an Australia-wide network of expert technicians gives your machine the best chance of repair.",
      image: "/bes870.png",
      link: "/repair",
      bgColor: "bg-gradient-to-r from-[#C1CACD] to-[#9CBCC9]",
    },
    {
      title: "MAINTENANCE",
      description:
        "Coffee machines aren't cheap. Regular maintenance prevents water damage to the internal components, ensuring you get great value for money.",
      image: "/grinder.png",
      link: "/maintenance",
      bgColor: "bg-gradient-to-r from-[#9CBCC9] to-[#3C8D9E]",
    },
    {
      title: "RECYCLING",
      description:
        "We are partnered with Bendigo E-Waste, a local company that ensures sustainable and responsible disposal of appliances broken beyond repair.",
      image: "/ewaste.png",
      link: "/parts",
      bgColor: "bg-gradient-to-r from-[#8DB7BB] to-[#436c70]",
      classNames: "pb-[3rem]",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 mt-[3rem] mb-[6rem] max-w-2xl mx-auto md:text-center relative">
        <div className="mx-auto pb-4 mb-2 flex flex-col md:items-center">
          <h1 className="text-4xl md:text-6xl mt-8 md:mt-12 font-[300] mb-4 tracking-tight font-lato font-bold">
            Coffee Machine Repairs & Servicing
          </h1>
          <p className="text-gray-600 max-w-lg text-base md:text-lg mb-12">
            Expert Breville coffee machine repair and maintenance services in
            the Greater Bendigo Region. Fast, reliable, and professional.
          </p>

          <h3 className="text-gray-600 max-w-lg text-base md:text-lg mb-2">
            We service these popular Breville coffee machines
          </h3>
          <ModelList />
          <SubmitFormButton />
          <WhatsAppButton />
        </div>
      </section>

      {/* Services Grid */}
      <section className="-mt-32">
        <div className="space-y-[-4rem]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative ${service.bgColor} rounded-t-[2.5rem] p-8 md:p-12 pb-24 md:pb-32 text-white overflow-hidden ${service.classNames}`}
            >
              {service.image && (
                <div className="absolute right-0 top-0 md:bottom-0 w-[45%] h-[90%]">
                  <div
                    className="relative w-full h-full"
                    style={{ aspectRatio: "3/4" }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              )}

              <div className="max-w-7xl mx-auto relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-[300] tracking-tight font-dm-sans uppercase">
                      {service.title}
                    </h2>
                    <p className="text-white/80 text-md md:text-base font-sans max-w-[60%] md:max-w-full">
                      {service.description}
                    </p>
                    {/* <Link
                      href={service.link}
                      className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full hover:bg-gray-100"
                    >
                      <span className="sr-only">View</span>
                      <span className="text-sm">→</span>
                    </Link> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
