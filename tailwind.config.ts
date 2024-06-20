import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'yellow-light': '#F8FFE5',
        'blue': '#3083DC',
        'black': '#000000',
        'tahiti': '#3ab7bf',
      },
      screens: {
        'sm': '480px',
        'md': '640px',
        'lg': '1024px',
        'xl': '1440px',
      }
    },
  },
  plugins: [],
};
export default config;
