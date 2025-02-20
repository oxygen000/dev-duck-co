"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Image from "next/image";
import Footer from "@/components/footer";
import Cursor from "@/components/ui/cusror/cusrsor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      {isLoading ? (
        <div className="fixed inset-0 flex items-center justify-center bg-background-light dark:bg-background-dark z-50">
          <div className="animate-pulse">
            <Image
              src="/loading.png" 
              alt="Loading"
              width={250} 
              height={250} 
              className="rounded-full" 
            />
          </div>
        </div>
      ) : (
        <>
          <Cursor/>
          <Header />
          <Hero />
          <Skills />
          <Projects />
          <Footer/>
        </>
      )}
    </main>
  );
}