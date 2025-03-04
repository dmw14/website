import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Yojana Yantra",
      description: "App/website for government schemes with eligibility analysis",
      status: "Ongoing",
      tags: ["React", "Node.js", "Firebase"],
    },
    {
      title: "Todo List with Authentication",
      description: "React-based task manager with login system",
      tags: ["React", "Firebase", "CSS"],
    },
    {
      title: "Spotify Clone",
      description: "UI/UX redesign project",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Samsung Website Clone",
      description: "UI/UX redesign project",
      tags: ["React", "Tailwind CSS"],
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 md:px-6 bg-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle>{project.title}</CardTitle>
                  {project.status && (
                    <Badge variant="outline" className="bg-primary/20">
                      {project.status}
                    </Badge>
                  )}
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="ghost" size="sm">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
                <Button variant="ghost" size="sm">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

