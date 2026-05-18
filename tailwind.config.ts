import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", "monospace"],
        sans: ["DM Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
      },
      colors: {
        bg: "#060608",
        bg2: "#0d0f12",
        bg3: "#13161b",
        accent: "#00e5a0",
        accent2: "#7b6ff0",
        danger: "#ff5f6d",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        pulse2: "pulse2 2s ease infinite",
        slideUp: "slideUp 0.5s ease 1.5s both",
        fadeIn: "fadeIn 0.7s ease both",
      },
      keyframes: {
        blink: {
          "0%,100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        pulse2: {
          "0%,100%": { boxShadow: "0 0 0 0 rgba(0,229,160,0.4)" },
          "50%": { boxShadow: "0 0 0 6px rgba(0,229,160,0)" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
