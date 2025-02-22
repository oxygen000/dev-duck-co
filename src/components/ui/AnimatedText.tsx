"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function PortfolioIntro() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={`relative flex justify-center items-center min-h-screen transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      } overflow-hidden`}
    >
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl opacity-40"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(128,0,128,0.6), rgba(255,0,150,0.3))"
            : "radial-gradient(circle, rgba(0,0,255,0.3), rgba(255,165,0,0.3))",
        }}
        animate={{ x: mousePosition.x * 0.03, y: mousePosition.y * 0.03 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
        className="text-center z-10"
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold flex gap-4 justify-center"
        >
          <motion.span
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1 }}
          >
            Abdel Hamed
          </motion.span>
          <motion.span
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 1.2 }}
            className={isDark ? "text-pink-500" : "text-blue-600"}
          >
            Reda
          </motion.span>
        </motion.h1>

        <motion.div
          className="mt-2 w-48 h-1 mx-auto"
          style={{ backgroundColor: isDark ? "#ffffff" : "#333333" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, ease: "easeInOut", delay: 1.5 }}
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="mt-4 text-lg md:text-xl font-light"
        >
          Full-Stack Developer | Next.js | Angular | Express.js
        </motion.p>
      </motion.div>
    </div>
  );
}
