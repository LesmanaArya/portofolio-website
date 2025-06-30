import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Briefcase } from "lucide-react"

export function EducationExperience() {
  return (
    <section id="education-experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional experience that shaped my journey in Computer Science.
          </p>
        </div>

        <div className="space-y-16">
          {/* Education Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <GraduationCap className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="space-y-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">SMAN 16 Bekasi</CardTitle>
                      <p className="text-muted-foreground">Mathematics and Science – High School Diploma</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2019 – 2022</span>
                  </div>
                </CardHeader>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Universitas Indonesia</CardTitle>
                      <p className="text-muted-foreground">Bachelor of Computer Science</p>
                    </div>
                    <span className="text-sm text-muted-foreground">2022 – Now</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">GPA: 3.50/4.00</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Briefcase className="h-8 w-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold">Experience</h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">Teaching Assistant of Calculus 1 – Term 3</CardTitle>
                      <p className="text-muted-foreground">Universitas Indonesia</p>
                    </div>
                    <span className="text-sm text-muted-foreground">Aug – Dec 2023</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="font-medium text-primary mb-2">
                      Skills: Teaching, Teamwork, Problem Solving, Communication
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Provided academic support to students by assisting with calculus concepts and problem-solving
                      techniques
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Collaborated with a team of teaching assistants to develop accurate and effective homework
                      assignments
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Graded student's homework and quizzes with attention to fairness and consistency
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
