import { Card, CardContent } from "@/components/ui/card"
import { Calculator, BarChart3, Users, ActivityIcon} from "lucide-react"

export function About() {
  return (
      <section id="about" className="py-1 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            6th-term Computer Science undergraduate at Universitas Indonesia with a strong passion for Data Science and
            Artificial Intelligence. Also served as a Teaching Assistant, where I guide fellow students while
            deepening my understanding of key concepts through teaching.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="/IMG_0445 copy full face.jpg?height=300&width=300"
              alt="About me"
              className="rounded-lg shadow-lg w-3/4 mx-auto"
            />
          </div>
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              Hello! I'm a Computer Science student at Universitas Indonesia with a deep fascination for Data Science
              and Artificial Intelligence. I enjoy developing models and extracting meaningful insights from
              data to solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed">
              I also participated in various projects and competitions, where I applied my skills in programming and data analysis to create innovative solutions.
            </p>
             <p className="text-lg leading-relaxed">
              Other than that, i also served as a teaching assistant, particularly about mathematic course. I help fellow students understand fundamental concepts and graded their task.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-4 gap-8">
          <Card>
            <CardContent className="p-6 text-center">
              <ActivityIcon className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
              <p className="text-muted-foreground">
                Strong foundation in calculus, statistics, and for data science applications.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Calculator className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Data Analysis</h3>
              <p className="text-muted-foreground">
                Extracting insights from datasets using statistical methods and visualization tools.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Machine Learning</h3>
              <p className="text-muted-foreground">
                Building predictive model using ML and DL frameworks.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Teaching & Mentoring</h3>
              <p className="text-muted-foreground">
                Guiding students in foundational concepts and fostering collaborative learning environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
