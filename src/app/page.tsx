"use client"; // أضف هذا السطر في الأعلى
import Header from "@/components/header"
import Hero from "@/components/hero"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
    </main>
  )
}

