import Image from "next/image";
import Link from "next/link";
import ModelList from "@/components/ModelList";
import SubmitFormButton from "@/components/SubmitForm";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a24] to-[#0f0f12]"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f12]/90 z-10"></div>
          {/* Background image with fallback gradient already applied underneath */}
          <div className="absolute top-0 left-0 w-full h-full">
            <Image 
              src="/images/coffee-bg.jpg" 
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
        <div className="container mx-auto px-6 relative z-10 mt-[-5rem]">
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 blur-lg opacity-70 rounded-full scale-150"></div>
              <div className="relative z-10">
                <Image 
                  src="/logo.png" 
                  alt="Bendigo Breville Logo" 
                  width={120} 
                  height={120}
                  className="relative z-10"
                />
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-amber-100 to-white tracking-tight">
              Coffee Machine <br />
              <span className="font-light">Repair Specialists</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mb-10 leading-relaxed">
              Expert Breville coffee machine repair and maintenance services in the Greater Bendigo Region.
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 mb-16">
              <SubmitFormButton />
              <WhatsAppButton />
            </div>
            
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg className="w-10 h-10 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Models Section */}
      <section id="machines" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
              Machines We Service
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We specialize in repairing and maintaining these popular Breville coffee machines
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
      
      {/* Services Section */}
      <section id="services" className="py-24 relative">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Our Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Professional coffee machine services to keep your Breville running perfectly
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Repairs Card */}
            <div className="group relative overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02]">
              <div className="absolute inset-0 bg-gradient-to-br from-[#C1CACD]/80 to-[#9CBCC9] opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 opacity-[0.07]"></div>
              
              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">REPAIRS</h3>
                <p className="text-white/90 mb-6 flex-grow">
                  Prompt and professional repairs. Being part of an Australia-wide network of expert technicians gives your machine the best chance of repair.
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#9CBCC9]/80 to-[#3C8D9E] opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 opacity-[0.07]"></div>
              
              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">MAINTENANCE</h3>
                <p className="text-white/90 mb-6 flex-grow">
                  Coffee machines aren't cheap. Regular maintenance prevents water damage to the internal components, ensuring you get great value for money.
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#8DB7BB]/80 to-[#436c70] opacity-90 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute inset-0 opacity-[0.07]"></div>
              
              <div className="relative p-8 md:p-10 h-full flex flex-col">
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
                    </svg>
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold mb-4 text-white">RECYCLING</h3>
                <p className="text-white/90 mb-6 flex-grow">
                  We are partnered with Bendigo E-Waste, a local company that ensures sustainable and responsible disposal of appliances broken beyond repair.
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
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-teal-500">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-teal-500 flex items-center justify-center text-white font-bold text-xl">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">James Wilson</h4>
                  <p className="text-gray-400 text-sm">Bendigo</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "My Breville Oracle was making strange noises and leaking. The team fixed it quickly and now it works better than when it was new. Excellent service!"
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center text-white font-bold text-xl">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Sarah Thompson</h4>
                  <p className="text-gray-400 text-sm">Castlemaine</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Regular maintenance from Bendigo Breville has kept my Dual Boiler running perfectly for years. Professional, knowledgeable, and always on time."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-xl">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="text-white font-medium">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">Bendigo</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "When my Breville was beyond repair, they helped me recycle it responsibly and gave me great advice on a replacement. Honest and environmentally conscious service."
              </p>
              <div className="mt-4 flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-red-500/20 rounded-3xl blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative">
          <div className="bg-gradient-to-r from-amber-500/10 to-red-500/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-red-500">
              Ready to Fix Your Coffee Machine?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Contact us today for fast, professional Breville coffee machine repairs and maintenance in Bendigo
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6">
              <SubmitFormButton />
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
