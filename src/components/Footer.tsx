import Link from "next/link";
import Logo from "./Logo";
import SubmitFormButton from "./SubmitForm";
import WhatsAppButton from "./WhatsAppButton";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0f0f12] pt-20 pb-10 overflow-hidden">
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-amber-500/10 to-red-500/10 blur-3xl"></div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a0a0e]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {/* Brand Column */}
          <div className="flex flex-col items-center md:items-start">
            <Logo width={80} height={80} className="mb-6" />
            <p className="text-gray-400 text-center md:text-left mb-6">
              Expert Breville coffee machine repair and maintenance services in
              the Greater Bendigo Region.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/bendigobreville"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                aria-label="Visit our Facebook page"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">
              Business Hours
            </h3>
            <ul className="space-y-4">
              <li className="text-gray-400">
                <span className="font-medium">By Appointment Only</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-xl font-bold mb-6">Location</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="w-5 h-5 text-amber-500 mt-1 mr-3"
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
                <span className="text-gray-400">
                  Kennington, Bendigo,
                  <br />
                  VIC, 3550
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright and Credits */}
        <div className="border-t border-white/10 pt-6 mt-6 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Bendigo Breville. All rights reserved.
            <span className="mx-2">|</span>
            <span>
              Website by{" "}
              <a
                href="https://samwhillance.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-500 hover:text-amber-400 transition-colors"
              >
                Samuel Whillance
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
