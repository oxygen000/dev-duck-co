import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "DuckMart",
    description: "A feature-rich e-commerce platform for rubber ducks and accessories.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["Next.js", "Express", "MongoDB", "Stripe"],
    liveUrl: "https://duckmart.example.com",
    githubUrl: "https://github.com/devduckco/duckmart",
  },
  {
    title: "QuackTask",
    description: "A real-time collaborative task manager for efficient team coordination.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    liveUrl: "https://quacktask.example.com",
    githubUrl: "https://github.com/devduckco/quacktask",
  },
  {
    title: "DuckWeather",
    description: "An interactive weather dashboard with playful duck-themed visualizations.",
    image: "/placeholder.svg?height=200&width=300",
    tags: ["React", "D3.js", "Node.js", "OpenWeatherMap API"],
    liveUrl: "https://duckweather.example.com",
    githubUrl: "https://github.com/devduckco/duckweather",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-12 text-center">
          Our Nest of Projects
        </h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="bg-primary/10 dark:bg-secondary/10 hover:shadow-lg transition-shadow duration-300 border border-primary/20 dark:border-secondary/20">
                <CardHeader>
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="rounded-t-lg object-cover"
                  />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-semibold text-secondary dark:text-primary mb-2">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-secondary/80 dark:text-primary/80 mb-4">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/20 dark:bg-secondary/20 text-primary dark:text-secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    className="bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors duration-300"
                    onClick={() => window.open(project.liveUrl, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-primary/10 dark:bg-secondary/10 text-primary dark:text-secondary hover:bg-primary/20 dark:hover:bg-secondary/20 transition-colors duration-300"
                    onClick={() => window.open(project.githubUrl, "_blank")}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}