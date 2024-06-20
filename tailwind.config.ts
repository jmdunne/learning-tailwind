import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Import custom colors here
    extend: {
      colors: {
        vuejs: {
          100: "#42b883",
          200: "#35a674",
          300: "#289461",
          400: "#1c824e",
          500: "#0f703b",
          600: "#025e28",
          700: "#004c16",
          800: "#003a03",
          900: "#002700",
        },
      },
    },
  },
  plugins: [],
};
export default config;
