import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        serif: ["var(--font-lora)"],
      },
      colors: {
        "my-bg-green": "var(--bg-green)",
        "my-bg-cream": "var(--bg-cream)",
        "primary-foreground-800": "var(--primary-foreground-800)",
        "primary-foreground-100": "var(--primary-foreground-100)",

        "secondary-foreground-800": "var(--secondary-foreground-800)",
        "secondary-foreground-100": "var(--secondary-foreground-100)",
      },
    },
  },
  plugins: [],
};
export default config;
