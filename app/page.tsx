import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Header } from "@/components/header"
import { EducationExperience } from "@/components/education-experience"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <EducationExperience />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}
