import { Code, Database, Globe, Cloud } from "lucide-react"

const skills = [
  {
    name: "Frontend Development",
    icon: Globe,
    description: "Crafting responsive and interactive web experiences with React and Next.js.",
  },
  {
    name: "Backend Development",
    icon: Database,
    description: "Building robust server-side applications with Node.js, Express, and various databases.",
  },
  {
    name: "Fullstack Integration",
    icon: Code,
    description: "Seamlessly connecting frontend and backend through RESTful and GraphQL APIs.",
  },
  {
    name: "Cloud Deployment",
    icon: Cloud,
    description: "Deploying and scaling applications using AWS, Docker, and Vercel.",
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-12 text-center">
          Our Quackabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-primary/10 dark:bg-secondary/10 p-6 rounded-lg">
              <skill.icon className="h-12 w-12 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-secondary dark:text-primary mb-2">{skill.name}</h3>
              <p className="text-secondary/80 dark:text-primary/80">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

