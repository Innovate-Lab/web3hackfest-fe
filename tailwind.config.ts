import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        disable: "var(--disable)",
        secondary: "var(--secondary)",
        primaryGradient: "var(--primary-gradient)",
        field: "var(--bg-input)",
      },
      width: {
        pageContent: "var(--page-content-with)",
      },
      fontSize: {
        title: "var(--title-font-size)",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(2px)" },
          "30%": { transform: "translateY(4px)" },
          "40%": { transform: "translateY(6px)" },
          "50%": { transform: "translateY(8px)" },
          "60%": { transform: "translateY(10px)" },
          "70%": { transform: "translateY(8px)" },
          "80%": { transform: "translateY(6px)" },
          "90%": { transform: "translateY(4px)" },
          "95%": { transform: "translateY(2px)" },
          "100%": { transform: "translateY(0px)" },
        },
        popup: {
          "0%": { transform: "translateY(0)" },
          "20%": { transform: "translateY(2px)" },
          "30%": { transform: "translateY(4px)" },
          "40%": { transform: "translateY(6px)" },
          "50%": { transform: "translateY(8px)" },
          "60%": { transform: "translateY(10px)" },
        },
      },

      animation: {
        "wave-slow": "wave 4s ease-in infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
