import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blog: {
          bg: "rgb(var(--bg))",
          fg: "rgb(var(--fg))",
          muted: "rgb(var(--muted))",
          border: "rgb(var(--border))",
          accent: "rgb(var(--accent))",
          "accent-hover": "rgb(var(--accent-hover))",
          card: "rgb(var(--card))",
          "card-border": "rgb(var(--card-border))",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 1px 3px rgba(0, 0, 0, 0.08)",
        md: "0 4px 20px rgba(0, 0, 0, 0.08)",
        "dark-sm": "0 1px 3px rgba(0, 0, 0, 0.3)",
        "dark-md": "0 4px 20px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
