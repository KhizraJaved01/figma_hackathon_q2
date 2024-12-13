import type { Config } from "tailwindcss";  // Import the Config type from Tailwind

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",  // Watch files in the 'pages' folder
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",  // Watch files in the 'components' folder
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  // Watch files in the 'app' folder
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",  // Custom background color using CSS variables
        foreground: "var(--foreground)",  // Custom foreground color using CSS variables
      },
      fontFamily: {
        josefin: ['Josefin Sans', 'sans-serif'],  // Custom font-family
      },
    },
  },
  plugins: [],
};

export default config;
