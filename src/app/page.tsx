"use client";
import Image from "next/image";
import ModelList from "@/components/ModelList";
import SubmitFormButton from "@/components/SubmitForm";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import { useEffect, useState, useRef } from "react";

// Add FAQ data array
const FAQs = [
  {
    id: "no-fix-no-fee",
    question: "What is your No Fix No Fee Policy?",
    answer:
      "We stand by our work with a simple promise: if we can't fix your coffee machine, you don't pay a cent. We'll only charge for successful repairs, giving you peace of mind when you choose our services.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    title: "No Fix No Fee Policy",
    category: "Policies",
  },
  {
    id: "no-surprise-fees",
    question: "Do you have hidden fees?",
    answer:
      "We provide a single, clear price upfront with our guarantee that your bill will never exceed this amount. No hidden costs or surprise fees - just one straightforward price with zero financial risk to you.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    title: "No Surprise Fees Policy",
    category: "Policies",
  },
  {
    id: "melbourne-service",
    question: "Do you service Melbourne?",
    answer:
      "While we're based in Bendigo, we sometimes travel to Melbourne specifically for Breville Oracle repairs. Due to the complexity and value of these machines, we offer this specialized service to Melbourne customers. For all other models, our services are available throughout the Greater Bendigo region. Alternatively, you're welcome to bring your machine to our Bendigo workshop for service or repair, which is often the quickest option.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        ></path>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        ></path>
      </svg>
    ),
    title: "Melbourne Service Area",
    category: "Service Areas",
  },

  // Pricing and Warranty Questions
  {
    id: "repair-cost",
    question: "How much does a coffee machine repair cost?",
    answer:
      "Repair costs vary by model: Barista Express typically ranges from $200-$300, Dual Boiler repairs range from $300-$400, and Oracle repairs from $650-$800. These prices include parts and labor. For maintenance services, we offer inspections, seal replacements, group head servicing, grinder clean outs, and general maintenance starting at $90 for simpler models and $150 for dual boiler machines. Remember, with our No Fix No Fee policy, you only pay if we successfully repair your machine.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    title: "Repair Costs",
    category: "Pricing & Warranty",
  },
  {
    id: "warranty",
    question: "Do you offer any warranty on repairs?",
    answer:
      "Yes, all our repairs come with a 90-day warranty. If your machine experiences the same issue within this period, we'll either repair it again at no cost or provide a full refund. This warranty covers both parts and labor, giving you complete peace of mind after your repair.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        ></path>
      </svg>
    ),
    title: "Repair Warranty",
    category: "Pricing & Warranty",
  },

  // Service Process Questions
  {
    id: "repair-time",
    question: "How long does a typical repair take?",
    answer:
      "Most repairs are completed within 3-5 business days or less. Sometimes less than 24 hours! More complex repairs, especially for Dual Boiler and Oracle models, may take 5-7 days. We do our best to keep most parts in stock, but if parts need to be ordered this may take longer. We'll always provide you with a timeframe estimate when you bring in your machine.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    title: "Repair Timeframe",
    category: "Service Process",
  },
  {
    id: "courtesy-machine",
    question: "Do you offer a loaner machine while mine is being repaired?",
    answer:
      "Yes, we offer courtesy machines for customers to use while their coffee machine is being repaired, subject to availability. This service ensures you don't have to go without your morning coffee during the repair process. Please ask about this option as early as possible, and we'll do our best to accommodate you.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z"
        ></path>
      </svg>
    ),
    title: "Courtesy Machines",
    category: "Service Process",
  },
  {
    id: "all-models",
    question: "Can you repair all Breville models?",
    answer:
      "Yes, we can repair all Breville models, including espresso machines and grinders. Our expertise covers everything from the Bambino to the Oracle Touch, and we maintain a network of parts suppliers to ensure we can service any Breville coffee machine model.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        ></path>
      </svg>
    ),
    title: "Model Coverage",
    category: "Service Process",
  },
  {
    id: "preparation",
    question: "What should I do before bringing in my machine?",
    answer:
      "Please empty your machine of both coffee and water before bringing it in. Leave your portafilter and accessories at home. If possible, note down any specific issues you've noticed and when they started occurring. This helps us diagnose and fix the problem more efficiently.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        ></path>
      </svg>
    ),
    title: "Preparation Instructions",
    category: "Service Process",
  },
  {
    id: "pickup-delivery",
    question: "Do you offer pickup and delivery services?",
    answer:
      "Yes, we offer convenient pickup and delivery services throughout the Greater Bendigo region. We can collect your machine from your home or workplace and return it once the service or repair is complete. This service is particularly helpful for larger heavy machines or those with busy schedules.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
        ></path>
      </svg>
    ),
    title: "Pickup & Delivery",
    category: "Service Areas",
  },
  {
    id: "grinder-repairs",
    question: "Can you repair Breville grinders as well as espresso machines?",
    answer:
      "Yes, we repair all Breville grinders, including the Smart Grinder Pro, Dose Control Pro, and built-in grinders in machines like the Barista Express and Oracle. Common repairs include burr replacement, motor issues, and adjustment mechanism fixes.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        ></path>
      </svg>
    ),
    title: "Grinder Repairs",
    category: "Specialty Questions",
  },

  // Maintenance Questions
  {
    id: "service-frequency",
    question: "How often should I service my coffee machine?",
    answer:
      "We recommend servicing your Breville coffee machine every 6-12 months, depending on usage. For heavy use (multiple coffees daily), aim for every 6 months. For lighter use, annual servicing is sufficient. Regular maintenance prevents mineral buildup, extends machine life, and ensures optimal coffee quality. Don't wait until problems arise - preventative maintenance is always more cost-effective than repairs.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        ></path>
      </svg>
    ),
    title: "Service Frequency",
    category: "Maintenance",
  },
  {
    id: "repair-signs",
    question: "What are signs my coffee machine needs repair?",
    answer:
      "Watch for these warning signs: inconsistent water flow or pressure, unusual noises (grinding, buzzing), leaking water, a hot lid, or error messages on the display. Addressing these issues early can prevent more serious damage.",
    icon: (
      <svg
        className="w-6 h-6 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        ></path>
      </svg>
    ),
    title: "Repair Signs",
    category: "Maintenance",
  },
];

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const ctaRef = useRef(null);

  // Add scroll event listener to track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate parallax transform - background moves at 80% of scroll speed
  const parallaxY = scrollY * 0.4; // This creates the 80% effect (100% - 80% = 20% movement)

  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pb-24"
        ref={heroRef}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a24] to-[#0f0f12]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f12]/90 z-10"></div>
          {/* Background image with JS-based parallax */}
          <div
            className="absolute top-0 left-0 w-full h-full will-change-transform"
            style={{
              transform: `translateY(${parallaxY}px)`,
              backfaceVisibility: "hidden",
            }}
          >
            <Image
              src="/images/bg_01.jpg"
              alt="Coffee machine background"
              fill
              priority
              className="object-cover opacity-40"
            />
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-amber-500/20 to-red-500/20 blur-3xl animate-float-medium"></div>

        {/* Hero Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center pt-16">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 blur-lg opacity-70 rounded-full scale-150 animate-breathe"></div>
              <div
                className="relative z-10 rounded-full overflow-hidden"
                style={{ width: 120, height: 120 }}
              >
                <Image
                  src="/logo.png"
                  alt="Bendigo Breville Logo"
                  width={120}
                  height={120}
                  className="rounded-full object-cover"
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white tracking-tight">
              Coffee Machine <br />
              <span className="font-light">Repair Specialists</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Expert Breville coffee machine repair and maintenance services in
              the Greater Bendigo Region.
            </p>

            <div className="flex flex-col md:flex-row gap-4 mb-24">
              <SubmitFormButton />
              <WhatsAppButton />
              <CallButton />
            </div>

            {/* Arrow Down Animation */}
            <div className="flex justify-center w-full absolute bottom-8 transform translate-y-1/2">
              <div className="animate-bounce">
                <svg
                  className="w-10 h-10 text-white/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Service Section */}
      <section id="maintenance" className="py-20 relative">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-red-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-amber-500">
              Why Regular Servicing Is Critical
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Protect your investment and avoid costly repairs with regular
              maintenance
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white">
                  Prevent Catastrophic Damage
                </h3>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Without regular servicing, your coffee machine's boilers can
                    develop serious issues that lead to permanent damage. Over
                    time, mineral deposits build up inside the boiler and steam
                    system.
                  </p>
                  <p className="font-medium text-amber-300">
                    When left unchecked, these boilers can begin blasting
                    extremely hot steam from the top, directing it right onto
                    the main electronic PCB that controls the heating elements.
                  </p>
                  <p>
                    This creates a dangerous situation where moisture and
                    electronics meet - eventually shorting the circuits and
                    causing your machine to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Overheat unpredictably</li>
                    <li>Fail to heat properly</li>
                    <li>Blow fuses and thermal switches</li>
                    <li>Develop electrical shorts</li>
                    <li>Completely stop working ("brick")</li>
                  </ul>

                  {/* Animated Damaged Coffee Machine */}
                  <div className="relative mt-8 mb-8 mx-auto max-w-xs">
                    <div className="animate-shake relative">
                      <div className="relative w-full h-64">
                        <Image
                          src="/models/920.png"
                          alt="Damaged Breville Dual Boiler"
                          fill
                          className="object-contain filter drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]"
                        />

                        {/* Steam Animation 1 - Center */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-10 h-40 opacity-0 animate-steam1">
                          <div className="w-full h-full bg-gradient-to-t from-transparent via-white/80 to-white/40 blur-md rounded-full"></div>
                        </div>

                        {/* Steam Animation 2 - Left */}
                        <div className="absolute top-0 left-1/3 transform -translate-x-1/2 w-8 h-32 opacity-0 animate-steam2">
                          <div className="w-full h-full bg-gradient-to-t from-transparent via-white/70 to-white/30 blur-md rounded-full"></div>
                        </div>

                        {/* Steam Animation 3 - Right */}
                        <div className="absolute top-0 right-1/3 transform translate-x-1/2 w-8 h-36 opacity-0 animate-steam3">
                          <div className="w-full h-full bg-gradient-to-t from-transparent via-white/75 to-white/35 blur-md rounded-full"></div>
                        </div>

                        {/* Additional Steam Particles */}
                        <div className="absolute top-2 left-[45%] w-3 h-20 opacity-0 animate-steam2">
                          <div className="w-full h-full bg-white/90 blur-md rounded-full"></div>
                        </div>

                        <div className="absolute top-1 right-[45%] w-3 h-16 opacity-0 animate-steam3">
                          <div className="w-full h-full bg-white/90 blur-md rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <p className="text-center text-amber-300 text-sm mt-2 animate-pulse font-medium">
                      The reality is that all dual boilers will eventually
                      develop a leak if left unserviced
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-amber-500/20 rounded-3xl blur-xl"></div>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 sm:p-8 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4 sm:mb-6 text-white text-center">
                    Benefits of Regular Servicing
                  </h3>
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center mr-3 sm:mr-4">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">
                          Extended Machine Life
                        </h4>
                        <p className="text-gray-300 text-sm sm:text-base">
                          Regular servicing can double or triple the lifespan of
                          your coffee machine.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center mr-3 sm:mr-4">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Cost Savings</h4>
                        <p className="text-gray-300 text-sm sm:text-base">
                          Preventative maintenance is significantly cheaper than
                          major repairs or replacement.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-r from-amber-500 to-red-500 flex items-center justify-center mr-3 sm:mr-4">
                        <svg
                          className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-medium">
                          Peace of Mind
                        </h4>
                        <p className="text-gray-300 text-sm sm:text-base">
                          Enjoy your coffee without worrying about unexpected
                          breakdowns or safety issues.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 sm:mt-8 text-center">
                    <p className="text-amber-300 font-medium mb-3 sm:mb-4 text-sm sm:text-base">
                      Service your Breville machine every 6 to 12 months
                    </p>
                    <SubmitFormButton />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Professional coffee machine services to keep your Breville running
              perfectly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repairs Card */}
            <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-500/80 to-red-500/80 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 rounded-3xl opacity-[0.07]"></div>

              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white">REPAIRS</h3>
                <p className="text-white/90 mb-6 flex-grow">
                  Prompt and professional repairs. Being part of an
                  Australia-wide network of expert technicians gives your
                  machine the best chance of repair.
                </p>

                <div className="mt-auto flex justify-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src="/bes870.png"
                      alt="Coffee machine repair"
                      width={200}
                      height={200}
                      className="mx-auto mt-6 transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Maintenance Card */}
            <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/80 to-purple-500/80 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 rounded-3xl opacity-[0.07]"></div>

              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white">
                  MAINTENANCE
                </h3>
                <p className="text-white/90 mb-6 flex-grow">
                  Coffee machines aren't cheap. Regular maintenance prevents
                  water damage to the internal components, ensuring you get
                  great value for money.
                </p>

                <div className="mt-auto flex justify-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src="/grinder.png"
                      alt="Coffee machine maintenance"
                      width={200}
                      height={200}
                      className="mx-auto mt-6 transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Recycling Card */}
            <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] md:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-500/80 to-teal-600/80 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 rounded-3xl opacity-[0.07]"></div>

              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      ></path>
                    </svg>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-white">
                  RECYCLING
                </h3>
                <p className="text-white/90 mb-6 flex-grow">
                  We are partnered with Bendigo E-Waste, a local company that
                  ensures sustainable and responsible disposal of appliances
                  broken beyond repair.
                </p>

                <div className="mt-auto flex justify-center">
                  <div className="relative w-[200px] h-[200px]">
                    <Image
                      src="/ewaste.png"
                      alt="E-waste recycling"
                      width={200}
                      height={200}
                      className="mx-auto mt-6 transform group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="machines" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
              Machines We Service
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We specialize in repairing and maintaining these popular Breville
              coffee machines
            </p>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-3xl blur-xl"></div>
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
              <ModelList />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied
              customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                  DP
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">David Pluck</h4>
                  <p className="text-gray-400 text-sm">Kangaroo Flat</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Best repairs in Bendigo, super fast reply. Can pick up and drop
                off. Knows a lot about Breville machines. Great work."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  ST
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Sarah Thompson</h4>
                  <p className="text-gray-400 text-sm">Castlemaine</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Regular maintenance from Bendigo Breville has kept my Dual
                Boiler running perfectly for years. Professional, knowledgeable,
                and always on time."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12">
                  <Image
                    src="/images/review_lobsang.png"
                    alt="Lobsang Dorje"
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Lobsang Dorje</h4>
                  <p className="text-gray-400 text-sm">Bendigo</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Took my Breville apart while I waited, found the fault and
                replaced the part. It took maybe ten minutes and I could go back
                home and continue to enjoy coffee. Quick, expert level repairs
                and very reasonably priced. Highly recommend!"
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative" ref={ctaRef}>
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>

        <div className="container mx-auto px-6 relative">
          <div className="relative rounded-3xl p-8 md:p-12 border border-white/10 text-center overflow-hidden">
            {/* Background with JS-based parallax */}
            <div className="absolute inset-0 z-0">
              <div
                className="absolute inset-0 bg-gradient-to-br from-amber-800/90 via-amber-700/80 to-red-700/80 will-change-transform"
                style={{
                  transform: `translateY(${scrollY * 0.5}px)`,
                  height: "200%",
                  top: "-50%",
                  backfaceVisibility: "hidden",
                }}
              ></div>
              <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('/images/noise.png')] bg-repeat"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-3xl backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-100 to-white tracking-tight">
                Ready to Fix Your Coffee Machine?
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
                Contact us today for fast, professional Breville coffee machine
                repairs and maintenance in Bendigo
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
                <SubmitFormButton />
                <WhatsAppButton />
                <CallButton />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 relative">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-purple-500/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold pb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Common questions about our services and policies
            </p>
          </div>

          {/* Group FAQs by category */}
          {Array.from(new Set(FAQs.map((faq) => faq.category))).map(
            (category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  {category}
                </h3>
                <div className="space-y-4">
                  {FAQs.filter((faq) => faq.category === category).map(
                    (faq) => (
                      <details
                        key={faq.id}
                        className="group bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden transition-all duration-300 hover:border-white/20"
                      >
                        <summary className="flex items-center p-6 cursor-pointer">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                            {faq.icon}
                          </div>
                          <span className="text-xl font-medium text-white flex-grow">
                            {faq.question}
                          </span>
                          <svg
                            className="w-6 h-6 text-white transform transition-transform duration-300 group-open:rotate-180"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 9l-7 7-7-7"
                            ></path>
                          </svg>
                        </summary>
                        <div className="px-6 pb-6 pt-2">
                          <p className="text-gray-300">{faq.answer}</p>
                        </div>
                      </details>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* JSON-LD Schema for FAQs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />

      {/* JSON-LD Schema for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bendigo Breville",
            image: "https://bendigobreville.com/logo.png",
            description:
              "Expert Breville coffee machine repair and maintenance services in the Greater Bendigo Region.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Bendigo",
              addressRegion: "VIC",
              addressCountry: "AU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-36.7570",
              longitude: "144.2794",
            },
            url: "https://bendigobreville.com",
            telephone: "",
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "09:30",
                closes: "18:00",
              },
            ],
            sameAs: ["https://www.facebook.com/bendigobreville"],
          }),
        }}
      />

      {/* JSON-LD Schema for Service */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Coffee Machine Repair",
            provider: {
              "@type": "LocalBusiness",
              name: "Bendigo Breville",
            },
            areaServed: {
              "@type": "GeoCircle",
              geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: "-36.7570",
                longitude: "144.2794",
              },
              geoRadius: "50000",
            },
            description:
              "Professional Breville coffee machine repair and maintenance services with a No Fix No Fee policy.",
            offers: {
              "@type": "Offer",
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "AUD",
              },
            },
          }),
        }}
      />

      {/* JSON-LD Schema for Reviews */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Bendigo Breville",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "5",
              reviewCount: "3",
            },
            review: [
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "David Pluck",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody:
                  "Best repairs in Bendigo, super fast reply. Can pick up and drop off. Knows a lot about Breville machines. Great work.",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Sarah Thompson",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody:
                  "Regular maintenance from Bendigo Breville has kept my Dual Boiler running perfectly for years. Professional, knowledgeable, and always on time.",
              },
              {
                "@type": "Review",
                author: {
                  "@type": "Person",
                  name: "Michael Chen",
                },
                reviewRating: {
                  "@type": "Rating",
                  ratingValue: "5",
                },
                reviewBody:
                  "When my Breville was beyond repair, they helped me recycle it responsibly and gave me great advice on a replacement. Honest and environmentally conscious service.",
              },
            ],
          }),
        }}
      />
    </>
  );
}
