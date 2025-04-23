"use client";

export default function CallButton() {
  return (
    <a
      href="tel:+61468385315"
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden group rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-white font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute inset-0 w-full h-full opacity-20">
        <div className="absolute inset-0 opacity-20 transition-transform duration-1000 group-hover:translate-y-2"></div>
      </div>
      <span className="relative flex items-center justify-center gap-2">
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57a1.02 1.02 0 0 0-1.02.24l-2.2 2.2a15.045 15.045 0 0 1-6.59-6.59l2.2-2.21a.96.96 0 0 0 .25-1A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path>
        </svg>
        Call Now
      </span>
    </a>
  );
}
