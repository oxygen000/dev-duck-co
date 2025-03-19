"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const interFont = Inter({ subsets: ["latin"], weight: "400" });

const projects = [
  {
    title: "E-commerce Admin ",
    image: "/projects/ecommerce-admin-angular.PNG",
    tags: ["Angular", "scss", "MongoDB"],
    liveUrl: "https://ecommerce-admin-angular-bice.vercel.app/Dashboard",
    githubUrl: "https://github.com/oxygen000/ecommerce-admin-angular",
  },
  {
    title: "Dhul Hijjah",
    image: "/projects/dhul-hijjah.jpg",
    tags: ["Nextjs", "tailwindcss", "Bun"],
    liveUrl: "https://dhul-hijjah.vercel.app/",
    githubUrl: "https://github.com/oxygen000/dhul-hijjah",
  },
  {
    title: "Movie Rating Angular",
    image: "/projects/movie-rating-app.PNG",
    tags: ["Angular", "Scss", "TheMovieDb API"],
    liveUrl: "https://movie-rating-app-indol.vercel.app/home",
    githubUrl: "https://github.com/oxygen000/movie-rating-app",
  },
  {
    title: "Book Reviews Angular",
    image: "/projects/book-reviews-angular.PNG",
    tags: ["Angular", "Scss", "GoogleBooks API"],
    liveUrl: "https://book-reviews-rose.vercel.app/",
    githubUrl: "https://github.com/oxygen000/book-reviews",
  },
  {
    title: "Dashboard",
    image: "/projects/mes-coca-cola.PNG",
    tags: ["NextJs", "tailwindcss", "Bun"],
    liveUrl: "https://mes-coca-cola.vercel.app/",
    githubUrl: "https://github.com/oxygen000/mes-coca-cola",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    
    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          scrub: 1,
          markers: false,
        },
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background-light dark:bg-background-dark overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className={`${interFont.className} text-4xl md:text-5xl font-bold text-secondary dark:text-primary mb-16 text-center`}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div key={project.title} ref={(el) => { cardsRef.current[index] = el; }} className="relative">
              <Card  className="flex flex-col  md:flex-row w-full h-full  mx-auto bg-primary/10 dark:bg-secondary/10 hover:shadow-xl transition-shadow duration-300 border border-primary/20 dark:border-secondary/20 ">
                <div className="w-full md:w-1/2">
                  <Image src={project.image} alt={project.title} width={500} height={300} className="rounded-l-lg object-cover w-full h-full" />
                </div>
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-center text-center">
                  <CardHeader>
                    <CardTitle className={`${interFont.className} mb-4 text-secondary dark:text-primary text-2xl md:text-3xl font-semibold`}>
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap justify-center gap-3 mb-6">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="bg-primary/20 hover:bg-primary/20 dark:bg-secondary/20 text-primary dark:text-secondary text-sm px-3 py-1">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-center gap-4">
                    <Button variant="outline" className=" cursor-none text-md py-2 px-4 bg-primary/10 dark:bg-secondary/10 hover:bg-primary/20 dark:hover:bg-secondary/20" onClick={() => window.open(project.liveUrl, "_blank")}>
                      <ExternalLink className="mr-2 h-5 w-5" />
                      Live Demo
                    </Button>
                    <Button variant="outline" className=" cursor-none text-md py-2 px-4 bg-primary/10 dark:bg-secondary/10 hover:bg-primary/20 dark:hover:bg-secondary/20" onClick={() => window.open(project.githubUrl, "_blank")}>
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </Button>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
