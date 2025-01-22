module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFD700", // Duck yellow
          foreground: "#000000",
        },
        secondary: {
          DEFAULT: "#4682B4", // Steel blue
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#228B22", // Forest green
          foreground: "#FFFFFF",
        },
        background: {
          light: "#F0F8FF", // Alice blue
          dark: "#1E3A5F", // Dark blue
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

