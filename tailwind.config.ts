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
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        surface: "var(--surface)",
        "surface-warm": "var(--surface-warm)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        border: "var(--border)",
      },
      fontFamily: {
        body: ["var(--font-body)"],
        heading: ["var(--font-heading)"],
      },
      borderRadius: {
        token: "var(--radius)",
      },
      spacing: {
        section: "var(--space-section)",
      },
      maxWidth: {
        container: "var(--container)",
      },
    },
  },
  plugins: [],
};

export default config;
