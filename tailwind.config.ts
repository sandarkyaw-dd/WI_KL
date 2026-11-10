import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#07131F",
          850: "#0A192F",
          800: "#0F2537",
          700: "#16344E",
          600: "#1E476A",
        },
        slateBlue: {
          500: "#4A6D8C",
          400: "#658AA9",
          300: "#8FAFC9",
          200: "#BCD1E3",
          100: "#E3EDF5",
          50: "#F4F8FB",
        },
        gold: {
          600: "#B38F24",
          500: "#D4AF37",
          400: "#E2C35D",
          300: "#EED78C",
          100: "#FAF3DD",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
        sans: ["var(--font-sans)", "Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "float": "float 3s ease-in-out infinite",
        "pulse-subtle": "pulseSubtle 2.5s ease-in-out infinite",
        "btn-pulse-glow": "btnPulseGlow 2.2s ease-in-out infinite",
        "auto-shimmer": "autoShimmer 2.8s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        pulseSubtle: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.03)", opacity: "0.9" },
        },
        btnPulseGlow: {
          "0%": {
            transform: "scale(1)",
            boxShadow: "0 10px 25px rgba(11, 30, 48, 0.35), 0 0 0 0 rgba(218, 165, 32, 0.65)",
          },
          "50%": {
            transform: "scale(1.025)",
            boxShadow: "0 14px 32px rgba(11, 30, 48, 0.45), 0 0 0 9px rgba(218, 165, 32, 0)",
          },
          "100%": {
            transform: "scale(1)",
            boxShadow: "0 10px 25px rgba(11, 30, 48, 0.35), 0 0 0 0 rgba(218, 165, 32, 0)",
          },
        },
        autoShimmer: {
          "0%, 25%": { transform: "translateX(-100%)" },
          "55%, 100%": { transform: "translateX(100%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
