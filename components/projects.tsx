"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, HardDrive } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function Projects() {
  const [activeSection, setActiveSection] = useState<'datascience' | 'software'>('datascience')

  const datascienceProjects = [
    {
      title: "Biomedical Organ Classification",
      description:
        "Deep Learning course project for classifying biomedical organs using Convolutional Neural Network and image processing techniques.",
      image: "/output.png?height=300&width=400",
      technologies: ["PyTorch", "pandas", "numpy", "seaborn", "albumentation"],
      githubUrl: "https://github.com/LesmanaArya/MyResnet18/blob/main/work3%20restnet%20copy%203.ipynb",
    },
    {
      title: "Deposit Product Subscription Prediction",
      description:
        "Predicting customer subscription to deposit products for Data Science Indonesia (DSI) competition.",
      image: "/output_roc.png?height=300&width=400",
      technologies: ["pandas", "numpy", "scikit-learn", "Seaborn", "xgboost", "catboost"],
      githubUrl: "https://drive.google.com/drive/folders/1ijoLOKxOuNPch-YVB1YttUWgNZs3q0Qc?usp=sharing",
    },
    {
      title: "Paper Citation Network Prediction",
      description:
        "Predict whether one academic paper cites another within a citation network for Gammafest IPB competition.",
      image: "/output_gammafest.png?height=300&width=400",
      technologies: ["pandas", "numpy", "scikit-learn"],
      githubUrl: "https://drive.google.com/drive/folders/1vkYKnLGMseN3dcdhfWoVkSPYjVx5U2zd?usp=sharing",
    },
    {
      title: "Commodity Price Prediction",
      description:
        "Predict commodity prices using historical data and market indicators with time series analysis for Datavidia ITB competition.",
      image: "/output_datavidia.png?height=300&width=400",
      technologies: ["pandas", "scikit-learn", "pmdarima"],
      githubUrl: "https://drive.google.com/drive/folders/1NrFc1tuxqQg2ueCVVP9W_qYugsC1uFWu?usp=sharing",
    },
    {
      title: "Comparative Analysis of Clustering Algorithms for Song Lyrics Clustering",
      description:
        "Comparing Kmeans, Agglomerative, and DBSCAN clustering algorithms on song lyrics dataset to find the best clusters for song lyrics.",
      image: "/Screenshot 2025-06-30 180801.png?height=300&width=400",
      technologies: ["pandas", "scikit-learn", "word2vec", "spacy", "nltk", "textblob"],
      githubUrl: "https://drive.google.com/drive/folders/1f_P6Wxdm4BzlDgf1NtLDFSiBK1IXZLE5?usp=sharing",
    },
    {
      title: "Reproduksi Penelitian TILDE: Term Independent Likelihood moDEl for Passage Re-ranking dan Perbandingannya dengan BERT untuk Passage Re-ranking",
      description:
        "Comparing state-of-the-art TILDE model with conventional BERT model for passage re-ranking task using Indonesian language dataset",
      image: "/Screenshot 2025-06-30 180704.png?height=300&width=400",
      technologies: ["word2vec", "spacy", "nltk", "bert"],
      githubUrl: "https://drive.google.com/drive/folders/1XIbTijutUSolA1btSbHNAQMz1Gqr9pns?usp=sharing",
    },
  ]

  const softwareProjects = [
    {
      title: "PagePerfect",
      description:
        "A bookstore website simulation with role-based authentication system featuring three user types: Employee, Writer, and User. Each role has specific permissions and functionalities for browsing books, managing carts, processing orders, and content management. Built for Platform Based Development course.",
      image: "/placeholder.jpg?height=300&width=400",
      technologies: ["Tailwind CSS", "Django"],
      githubUrl: "https://github.com/F08PBP/PagePerfect/tree/writer",
    },
    {
      title: "ADPRO-A10",
      description:
        "E-commerce platform simulation for gaming products featuring dual role system with User and Seller accounts. Sellers can manage their own game stores by adding products, while users can browse and purchase games. Includes authentication, inventory management, and order processing. Built for Advanced Programming course.",
      image: "/placeholder.jpg?height=300&width=400",
      technologies: ["Thymeleaf", "SpringBoot", "PostgreSQL"],
      githubUrl: "https://github.com/ADPRO-A10/produk-transaksi-service",
    },
    {
      title: "PacilFlix",
      description:
        "Website simulation for streaming movies and TV shows, allowing users to browse content, make watchlist, download, and manage their accounts subscription. Project for Database course",
      image: "/placeholder.jpg?height=300&width=400",
      technologies: [ "TailwindCSS", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/Kelompok8-BasisData-B/Kelompok8-TK/tree/Arya",
    },
    {
      title: "MAAMS-NG",
      description:
        "AI-powered root cause analysis platform that helps users identify the underlying causes of problems. Users input potential causes for a specific issue, and the AI validates and traces these causes back to find the true root problem through systematic analysis. Built for Software Engineering Project course to be used by FISIP UI.",
      image: "/Screenshot 2025-06-30 174843.png?height=300&width=400",
      technologies: ["NextJS", "Django", "PostgreSQL"],
      liveUrl: "https://maams-ng.netlify.app/",
      githubUrl: "https://github.com/orgs/Kelompok-5-PPL-A/repositories",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Here are some of my projects that showcase my skills and experience.
          </p>
          
          {/* Toggle Buttons */}
          <div className="flex justify-center gap-2 mb-8">
            <Button
              variant={activeSection === 'datascience' ? 'default' : 'outline'}
              onClick={() => setActiveSection('datascience')}
              className="px-6"
            >
              Data Science & ML
            </Button>
            <Button
              variant={activeSection === 'software' ? 'default' : 'outline'}
              onClick={() => setActiveSection('software')}
              className="px-6"
            >
              Software Engineering
            </Button>
          </div>
        </div>

        {/* Data Science & Machine Learning Projects */}
        {activeSection === 'datascience' && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Data Science & Machine Learning</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {datascienceProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          {project.githubUrl.includes('drive.google.com') ? (
                            <HardDrive className="h-4 w-4 mr-2" />
                          ) : (
                            <Github className="h-4 w-4 mr-2" />
                          )}
                          {project.githubUrl.includes('drive.google.com') ? 'Drive' : 'Code'}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Software Engineering Projects */}
        {activeSection === 'software' && (
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Software Engineering</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {softwareProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          {project.githubUrl.includes('drive.google.com') ? (
                            <HardDrive className="h-4 w-4 mr-2" />
                          ) : (
                            <Github className="h-4 w-4 mr-2" />
                          )}
                          {project.githubUrl.includes('drive.google.com') ? 'Drive' : 'Code'}
                        </Link>
                      </Button>
                      {project.liveUrl && (
                        <Button size="sm" asChild>
                          <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
