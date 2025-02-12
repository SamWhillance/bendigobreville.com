"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import WhatsAppLink from "./WhatsAppLink";

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
      className={`fixed w-full z-50 top-0 transition-all duration-100 ease-out ${
        isScrolled ? "p-2" : "p-0"
      }`}
    >
      <div
        className={`relative overflow-hidden text-white transition-all duration-100 ease-out ${
          isScrolled ? "rounded-[2.5rem] p-2" : "rounded-none p-6"
        }`}
      >
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/bg_beans_sm.jpeg"
            alt=""
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="w-full pr-2 flex justify-between">
          <Link
            href="/"
            className={`flex items-center relative transition-all font-bold ${
              isScrolled ? "text-md" : "text-xl"
            }`}
          >
            <Logo />
            Bendigo Breville
          </Link>

          <div className="flex items-center space-x-8 pl-2 pr-2">
            <WhatsAppLink />
            <a
              href="https://www.facebook.com/profile.php?id=100083324981791"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-200 hover:text-white"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
