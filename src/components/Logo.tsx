"use client";

import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export default function Logo({ width = 120, height = 120, className = "" }: LogoProps) {
  return (
    <Link href="/" className={`block relative ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-red-500 blur-lg opacity-70 rounded-full scale-150"></div>
        <div className="relative z-10 rounded-full overflow-hidden" style={{ width: width, height: height }}>
          <Image 
            src="/logo.png" 
            alt="Bendigo Breville Logo" 
            width={width} 
            height={height}
            className="rounded-full object-cover"
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%'
            }}
          />
        </div>
      </div>
    </Link>
  );
}
