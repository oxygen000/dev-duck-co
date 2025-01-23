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
          DEFAULT: "#6D28D9", // لون أساسي (بنفسجي غامق)
          foreground: "#FFFFFF", // لون النص فاتح (أبيض)
        },
        secondary: {
          DEFAULT: "#1E40AF", // لون ثانوي (أزرق غامق)
          foreground: "#FFFFFF", // لون النص فاتح (أبيض)
        },
        accent: {
          DEFAULT: "#DB2777", // لون التمييز (وردي غامق)
          foreground: "#FFFFFF", // لون النص فاتح (أبيض)
        },
        background: {
          light: "#F3F4F6", // خلفية فاتحة (رمادي فاتح)
          dark: "#111827", // خلفية داكنة (رمادي غامق جدًا)
        },
        highlight: {
          DEFAULT: "#F59E0B", // لون التمييز الإضافي (برتقالي)
          foreground: "#FFFFFF", // لون النص فاتح (أبيض)
        },
        button: {
          DEFAULT: "#7C3AED", // لون الأزرار (بنفسجي)
          hover: "#6D28D9", // لون الأزرار عند التمرير (بنفسجي غامق)
          foreground: "#FFFFFF", // لون النص على الأزرار (أبيض)
        },
      },
      borderRadius: {
        DEFAULT: "8px", // زوايا دائرية للأزرار والعناصر
      },
      boxShadow: {
        DEFAULT: "0 4px 6px rgba(0, 0, 0, 0.1)", // ظل خفيف للأزرار والعناصر
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};