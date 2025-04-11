"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Cursor from "@/components/ui/cusror/cusrsor";

export default function Home() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme") || "light";
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const updatedTheme = localStorage.getItem("theme") || "light";
      setTheme(updatedTheme);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <main
      className={`min-h-screen ${
        theme === "dark" ? "dark:bg-background-dark" : "bg-background-light"
      } transition-colors duration-300`}
    >
      <div className="cursor">
        <Cursor />
      </div>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}
