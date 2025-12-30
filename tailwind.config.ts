import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B1220",
        steel: "#1F2A44",
        fog: "#F6F7FB",
        line: "rgba(15, 23, 42, 0.10)",
        accent: "#18A6A6"
      },
      boxShadow: {
        soft: "0 12px 40px rgba(2, 6, 23, 0.08)"
      }
    }
  },
  plugins: []
} satisfies Config;
