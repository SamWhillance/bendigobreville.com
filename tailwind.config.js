/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        "dm-sans": ["var(--font-dm-sans)", "serif"],
      },
      colors: {
        ocean: "#E6EEF0",
      },
    },
  },
  plugins: [],
};
