import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Automated Regression Suite for Salesforce",
    description:
      "Playwright scripts boosting regression coverage and reducing manual testing effort for Salesforce Service Cloud implementations.",
    technologies: ["Playwright", "JavaScript", "Salesforce", "CI/CD"],
    githubUrl: "https://github.com/krishna-madhiraju",
    liveUrl: "#",
  },
  {
    title: "Migration Test Framework",
    description:
      "Risk-based validation framework for rehost/replatform/refactor migrations, ensuring data integrity and system reliability.",
    technologies: ["Azure", "SQL", "Risk Assessment", "Test Strategy"],
    githubUrl: "https://github.com/krishna-madhiraju",
    liveUrl: "#",
  },
  {
    title: "API Test Kit",
    description:
      "Comprehensive Postman collections and Rest Assured templates for enterprise API testing and validation.",
    technologies: ["Postman", "Rest Assured", "Java", "API Testing"],
    githubUrl: "https://github.com/krishna-madhiraju",
    liveUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
          Key Projects & Contributions
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Showcasing impactful solutions that have driven quality improvements and operational efficiency
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow group">
              <CardHeader>
                <CardTitle className="text-lg text-balance leading-tight">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full">
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-md border border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
