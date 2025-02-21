"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter } from "next/font/google";

const interFont = Inter({ subsets: ["latin"], weight: "400" });

const projects = [
  {
    title: "E-commerce Admin ",
    image: "/projects/ecommerce-admin-angular.PNG?height=200&width=300",
    tags: ["Next.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://ecommerce-admin-angular-bice.vercel.app/Dashboard",
    githubUrl: "https://github.com/oxygen000/ecommerce-admin-angular",
  },
  {
    title: "E-commerce Next.js",
    image: "/projects/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Bun", "MongoDB"],
    liveUrl: "https://quacktask.example.com",
    githubUrl: "https://github.com/oxygen000/e-commerce-project",
  },
  {
    title: "Movie Rating Angular",
    image: "/projects/movie-rating-app.PNG?height=200&width=300",
    tags: ["Angular", "Scss", "TheMovieDb API"],
    liveUrl: "https://movie-rating-app-indol.vercel.app/home",
    githubUrl: "https://github.com/oxygen000/movie-rating-app",
  },
   {
    title: "Book Reviews Angular",
    image: "/projects/book-reviews-angular.PNG?height=200&width=300",
    tags: ["Angular", "Scss", "GoogleBooks API"],
    liveUrl: "https://book-reviews-rose.vercel.app/",
    githubUrl: "https://github.com/oxygen000/book-reviews",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      cardsRef.current,
      { opacity: 0, y: 50, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 data-cursor="hover" className={`${interFont.className} text-3xl md:text-3xl  text-secondary dark:text-primary mb-12 text-center`}>
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={project.title} ref={(el) => { cardsRef.current[index] = el; }}>
              <Card className="bg-primary/10 dark:bg-secondary/10 hover:shadow-lg transition-shadow duration-300 border border-primary/20 dark:border-secondary/20">
                <CardHeader>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className={`${interFont.className} mb-4  text-secondary dark:text-primary`}>
                    {project.title}
                  </CardTitle>
                  <div className="flex flex-wrap gap-2 mb-4 ">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className={`${interFont.className}  bg-primary/20 hover:bg-primary/20 cursor-none dark:bg-secondary/20 text-primary dark:text-secondary`}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className={`${interFont.className} text-xs flex justify-center gap-4`}>
                  <Button
                    variant="outline"
                    className="bg-primary/10 cursor-none dark:bg-secondary/10 text-primary dark:text-secondary hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors duration-300 "
                    onClick={() => window.open(project.liveUrl, "_blank")}
                    data-cursor="hover"
                  >
                    <ExternalLink  className="mr-2 h-4 w-4 " />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-primary/10 cursor-none dark:bg-secondary/10 text-primary dark:text-secondary hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors duration-300"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                    data-cursor="hover"
                  >
                    <Github className="mr-2 h-4 w-4 " />
                    GitHub
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
