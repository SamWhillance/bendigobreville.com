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
  title: "Bendigo Breville - Professional Appliance Repair Services",
  description:
    "Expert Breville appliance repair, maintenance, and parts in Bendigo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${dmSans.variable} ${lato.variable}`}
    >
      <body className={inter.className}>
        <GoogleAnalytics GA_MEASUREMENT_ID="G-CBQVZTTY25" />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
