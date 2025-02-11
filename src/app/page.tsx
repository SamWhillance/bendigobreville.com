import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const services = [
    {
      title: "REPAIRS",
      description: "Prompt and professional repair services for most Breville coffee machines",
      image: "/repair.png",
      link: "/repair",
      bgColor: "bg-gradient-to-r from-[#C1CACD] to-[#9CBCC9]"
    },
    {
      title: "MAINTENANCE",
      description: "Regular maintenance to keep your appliances running perfectly",
      image: "/maintenance.jpg",
      link: "/maintenance",
      bgColor: "bg-gradient-to-r from-[#9CBCC9] to-[#3C8D9E]"
    },
    {
      title: "RECYCLING",
      description: "Partnered with Bendigo E-Waste recycling facility to ensure sustainable and responsible disposal of old appliances",
      image: "/parts.jpg",
      link: "/parts",
      bgColor: "bg-gradient-to-r from-[#8DB7BB] to-[#9AC0C6]"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="px-6 py-16 mt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Repair & Service</h1>
          <p className="text-gray-600 max-w-lg text-base md:text-lg">
            Expert Breville coffee machine repair and maintenance services in the Greater Bendigo Region. Fast, reliable, and professional.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="-mt-32">
        <div className="space-y-[-4rem]">
          {services.map((service, index) => (
            <div key={index} className={`relative ${service.bgColor} rounded-t-[2.5rem] p-8 md:p-12 pb-24 md:pb-32 text-white`}>
              <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-light tracking-tight font-serif">{service.title}</h2>
                    <p className="text-white/80 text-md md:text-base font-sans">{service.description}</p>
                    <Link 
                      href={service.link}
                      className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-white text-black rounded-full hover:bg-gray-100"
                    >
                      <span className="sr-only">View</span>
                      <span className="text-sm">→</span>
                    </Link>
                  </div>
                  <div className="relative h-[200px] md:h-[300px] mt-6 md:mt-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
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