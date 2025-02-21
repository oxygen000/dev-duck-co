"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Cursor from "@/components/ui/cusror/cusrsor";
import AnimatedText from "@/components/ui/AnimatedText";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedTheme = localStorage.getItem("theme") || "light";
      setTheme(updatedTheme);
      setIsLoading(true); 

      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <main className={`min-h-screen ${theme === "dark" ? "dark:bg-background-dark" : "bg-background-light"} transition-colors duration-300`}>
      {isLoading ? (
        <AnimatePresence>
          <AnimatedText />
        </AnimatePresence>
      ) : (
        <>
          <div className="cursor">
            <Cursor />
          </div>
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Footer />
        </>
      )}
    </main>
  );
}
