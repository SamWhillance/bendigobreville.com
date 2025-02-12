"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 top-0 transition-all duration-300 ${
        isScrolled ? "p-2" : "p-0"
      }`}
    >
      <div
        className={`bg-black text-white ${
          isScrolled ? "rounded-full py-4" : "py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link href="/" className="text-xl font-light">
            Bendigo Breville
          </Link>

          <div className="flex items-center space-x-8">
            <Link href="/about" className="text-gray-400">
              About
            </Link>
            <a href="tel:+61468385315" className="text-gray-400">
              Call Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
