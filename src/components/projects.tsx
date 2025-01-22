import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

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
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-12 text-center">
          Our Nest of Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="bg-primary/10 dark:bg-secondary/10">
              <CardHeader>
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg"
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
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={() => window.open(project.liveUrl, "_blank")}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                <Button variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                  <Github className="mr-2 h-4 w-4" />
                  GitHub
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

