import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pb-1">
      <div className="text-center max-w-4xl mx-auto">
        {/* <div className="mb-8">
          <img
            src="/placeholder.svg?height=200&width=200"
            alt="Profile"
            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-primary/20"
          />
        </div> */}

        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Arya Lesmana</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Computer Science Student with a strong passion in Data Science and AI.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Get In Touch</Link>
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/LesmanaArya" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/arya-lesmana/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>

        <div className="flex justify-center mt-8">
          <div className="animate-bounce">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  )
}
