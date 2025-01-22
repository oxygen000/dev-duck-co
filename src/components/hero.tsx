import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="home"
      className="py-20 bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary/10 dark:to-secondary/10"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold text-secondary dark:text-primary mb-6">Dev Duck Co</h1>
          <p className="text-xl md:text-2xl text-secondary dark:text-primary mb-8">Quacking Good Fullstack Solutions</p>
          <Button size="lg" className="bg-accent hover:bg-accent/80 text-accent-foreground">
            Dive Into Our Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <Image
            src="/placeholder.svg?height=300&width=300"
            alt="Dev Duck Co Logo"
            width={300}
            height={300}
            className="rounded-full border-4 border-secondary dark:border-primary"
          />
        </div>
      </div>
    </section>
  )
}

