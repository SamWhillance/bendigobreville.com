import "./globals.css";

import { Inter, Playfair_Display } from "next/font/google";

import Footer from "@/components/Footer";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Bendigo Breville - Professional Appliance Repair Services",
  description: "Expert Breville appliance repair, maintenance, and parts in Bendigo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={playfair.variable}>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
} 