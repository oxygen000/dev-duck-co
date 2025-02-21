"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function PortfolioIntro() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const parallaxVariants = {
    initial: { x: "-50%", y: "-50%" },
    animate: { 
      x: `${mousePosition.x * 0.02}px`, 
      y: `${mousePosition.y * 0.02}px` 
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black overflow-hidden">
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-full h-full bg-red-600 z-50"
      />

      <motion.div 
        variants={parallaxVariants}
        animate="animate"
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 1 }}
        className="text-center text-white z-10"
      >
        <motion.h1 className="text-6xl font-extrabold flex gap-4">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Abdel Hamed
          </motion.span>
          <motion.span
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          >
            Reda
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="mt-4 text-xl text-gray-300"
        >
          Full-Stack Developer | Next.js | Angular | Express.js
        </motion.p>

        
      </motion.div>
    </div>
  );
}
