"use client";

export default function SubmitFormButton() {
  return (
    <a
      href="https://slow-flavor-7b8.notion.site/196b33e58a0980b7ba79c69aecdc8a65?pvs=105"
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden group rounded-full bg-gradient-to-br from-amber-500 to-red-500 px-6 py-3 text-white font-medium transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-amber-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-150"></div>
      </div>
      <svg className="w-5 h-5 relative" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <span className="relative">Request Repair</span>
    </a>
  );
} 