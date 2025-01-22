module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FCC6FF", // لون أساسي (Lavender Pink)
          foreground: "#333333", // لون النص داكن (رمادي غامق)
        },
        secondary: {
          DEFAULT: "#FFE6C9", // لون ثانوي (Peach Cream)
          foreground: "#333333", // لون النص داكن (رمادي غامق)
        },
        accent: {
          DEFAULT: "#FFC785", // لون التمييز (Light Orange)
          foreground: "#333333", // لون النص داكن (رمادي غامق)
        },
        background: {
          light: "#F5F5F5", // خلفية فاتحة (أبيض فاتح)
          dark: "#1E1E1E", // خلفية داكنة (أسود تقريبًا)
        },
        highlight: {
          DEFAULT: "#FFA09B", // لون التمييز الإضافي (Soft Coral)
          foreground: "#333333", // لون النص داكن (رمادي غامق)
        },
        button: {
          DEFAULT: "#FFC785", // لون الأزرار (Light Orange)
          hover: "#FFB366", // لون الأزرار عند التمرير
          foreground: "#333333", // لون النص على الأزرار
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