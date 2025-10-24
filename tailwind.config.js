/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6", // Tailwind Blue 500
          light: "#60a5fa", // Blue 300
          dark: "#1e40af", // Blue 700
        },
        secondary: "#0ea5e9", // Tailwind Sky 500
        accent: {
          light: "#f1f5f9", // Slate 100
          dark: "#0f172a", // Slate 900
        },
        typography: {
          light: "#f3f4f6", // Gray 100
          dark: "#111827", // Gray 900
        },
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
        serif: ["Playfair Display", "ui-serif", "serif"],
        mono: ["Source Code Pro", "ui-monospace", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.5rem", // small rounded corners
      },
    },
  },
  plugins: [],
}
