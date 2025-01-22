import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-background-light dark:bg-background-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-primary mb-12 text-center">
          Send Us a Quack
        </h2>
        <form className="max-w-md mx-auto space-y-6">
          <Input type="text" placeholder="Your Name" className="bg-primary/10 dark:bg-secondary/10" />
          <Input type="email" placeholder="Your Email" className="bg-primary/10 dark:bg-secondary/10" />
          <Textarea placeholder="Your Message" className="bg-primary/10 dark:bg-secondary/10" rows={4} />
          <Button type="submit" className="w-full bg-accent hover:bg-accent/80 text-accent-foreground">
            Send Message
            <Send className="ml-2 h-5 w-5" />
          </Button>
        </form>
      </div>
    </section>
  )
}

