/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0E7490",       
          foreground: "#F0FDF4",    
        },
        secondary: {
          DEFAULT: "#A78BFA",       
          foreground: "#1E1B4B",    
        },
        accent: {
          DEFAULT: "#0e56cd",       
          foreground: "#FFFFFF",
        },
        highlight: {
          DEFAULT: "#EAB308",       
          foreground: "#1C1917",
        },
        background: {
          light: "#FAF9F6",         
          dark: "#111827",          
        },
        button: {
          DEFAULT: "#9A3412",       
          hover: "#7C2D12",         
          foreground: "#FFFFFF",
        },
      },
      borderRadius: {
        DEFAULT: "8px",
      },
      boxShadow: {
        DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.08)",
        "accent-glow": "0 0 10px 3px #F97316",
        "button-glow": "0 0 8px 3px #9A3412",
      },
      dropShadow: {
        "accent-glow": "8px 8px 12px #F97316",
        "button-glow": "6px 6px 10px #9A3412",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
