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
        teal:     "#00B4D8",
        "teal-deep": "#0094B3",
        onyx:     "#0A0A0A",
        charcoal: "#111111",
        smoke:    "#1A1A1A",
        gold:     "#C4973C",
        "gold-light": "#DDB96A",
        ivory:    "#F5F0E8",
        cream:    "#EDE8DC",
        mist:     "#A0A0A0",
        orange:   "#E8431A",
        /* legacy */
        terra:    "#E8431A",
        navy:     "#1C2B3A",
        sand:     "#EDE8DC",
        ink:      "#0A0A0A",
        muted:    "#A0A0A0",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans:    ["var(--font-grotesk)", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.23, 1, 0.32, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
