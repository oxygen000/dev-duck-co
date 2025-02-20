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
          DEFAULT: "#6D28D9", 
          foreground: "#FFFFFF", 
        },
        secondary: {
          DEFAULT: "#1E40AF", 
          foreground: "#FFFFFF", 
        },
        accent: {
          DEFAULT: "#DB2777", 
          foreground: "#FFFFFF", 
        },
        background: {
          light: "#F3F4F6", 
          dark: "#111827", 
        },
        highlight: {
          DEFAULT: "#F59E0B", 
          foreground: "#FFFFFF", 
        },
        button: {
          DEFAULT: "#7C3AED", 
          hover: "#6D28D9", 
          foreground: "#FFFFFF", 
        },
      },
      borderRadius: {
        DEFAULT: "8px", 
      },
      boxShadow: {
        DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.1)", 
      },
      dropShadow: {
        'yellow-glow': '8px 8px 10px #FAEA10', 
        'dark-glow': '8px 8px 10px #FFD700',  
      },
      boxShadow: {
        'yellow-glow': '0 0 15px 4px #FAEA10', 
        'dark-glow': '0 0 15px 4px #FFD700', 
      },
      
    },
    
  },
  plugins: [require("tailwindcss-animate")],
};