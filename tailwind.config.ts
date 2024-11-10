import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      serif: ['"Playfair Display"', 'Georgia', 'serif'],
      quicksand: ['"Quicksand"', 'Arial', 'sans-serif'],
    },
    extend: {
      colors:{
        primary:"green"
      },
      screens: {
        'xxs': '468px',
        'xmd':'863px'
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      textColor: {
        'custom-black': 'rgba(0, 0, 0, 0.7)',
    },
    },
  },
  plugins: [],
};
export default config;
