"use client";

export default function SubmitFormButton() {
  return (
    <a
      href="https://slow-flavor-7b8.notion.site/196b33e58a0980b7ba79c69aecdc8a65?pvs=105"
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden group rounded-full bg-gradient-to-r from-amber-500 to-red-500 px-6 py-3 text-white font-medium transition-all duration-300 hover:shadow-glow"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:scale-150"></div>
      </div>
      <span className="relative flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
        </svg>
        Request Repair
      </span>
    </a>
  );
} 