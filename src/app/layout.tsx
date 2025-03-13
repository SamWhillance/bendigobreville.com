import "./globals.css";

import {
  Cormorant_Garamond,
  DM_Sans,
  Inter,
  Lato,
  Playfair_Display,
} from "next/font/google";

import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Bendigo Breville - Premium Coffee Machine Repair Specialists",
  description:
    "Expert Breville coffee machine repair, maintenance, and recycling services in Bendigo. Professional technicians, fast service, guaranteed results.",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${lato.variable} scroll-smooth`}
    >
      <body className={`${inter.className} bg-[#0f0f12] text-white`}>
        <div className="fixed inset-0 bg-gradient-to-br from-[#0f0f12] via-[#1a1a24] to-[#0f0f12] z-[-2]"></div>
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.03] z-[-1]"></div>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-CBQVZTTY25" />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
