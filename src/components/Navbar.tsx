"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";
import WhatsAppButton from "./WhatsAppButton";
import SubmitFormButton from "./SubmitForm";
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0f0f12]/80 backdrop-blur-lg py-2 shadow-lg"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between relative">
          {/* Logo - hide when at top */}
          <div
            className={`${
              isScrolled ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <Logo width={50} height={50} />
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center space-x-12 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#maintenance"
              className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
            >
              Maintenance
            </a>
            <a
              href="#services"
              className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
            >
              Services
            </a>
            <a
              href="#machines"
              className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
            >
              Machines
            </a>
            <a
              href="#testimonials"
              className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              className="text-white hover:text-amber-400 transition-colors font-medium text-lg"
            >
              FAQ
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            {/* <WhatsAppButton /> */}
            <SubmitFormButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu - Full Screen Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-40 flex items-center justify-center">
            {/* Background with blur and gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a24]/95 to-[#0f0f12]/95 backdrop-blur-md"></div>

            {/* Menu Content */}
            <div className="relative z-10 w-full max-w-sm mx-auto px-6 py-10">
              {/* Logo at top */}
              <div className="flex justify-center mb-12">
                <Logo width={80} height={80} />
              </div>

              <div className="flex flex-col space-y-8 items-center">
                <a
                  href="#maintenance"
                  className="text-white hover:text-amber-400 transition-colors text-center font-medium text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Maintenance
                </a>
                <a
                  href="#machines"
                  className="text-white hover:text-amber-400 transition-colors text-center font-medium text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Machines
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-amber-400 transition-colors text-center font-medium text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#testimonials"
                  className="text-white hover:text-amber-400 transition-colors text-center font-medium text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Testimonials
                </a>
                <a
                  href="#faq"
                  className="text-white hover:text-amber-400 transition-colors text-center font-medium text-2xl"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  FAQ
                </a>
                <div className="pt-8 flex justify-center">
                  <WhatsAppButton />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
