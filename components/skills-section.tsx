import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TestTube, Zap, Settings, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Test Automation",
    icon: TestTube,
    skills: ["Playwright", "Postman", "Rest Assured"],
  },
  {
    title: "CRM & ERP Platforms",
    icon: Zap,
    skills: ["Salesforce", "Service Cloud", "Omni Studio", "Oracle Cloud ERP"],
  },
  {
    title: "Test Management & Collaboration",
    icon: Settings,
    skills: ["JIRA", "Zephyr", "Azure DevOps", "Confluence"],
  },
  {
    title: "Certifications",
    icon: Wrench,
    skills: [
      "Salesforce Certified AI Associate",
      "Professional Scrum Master I (PSM I)",
      "ISTQB Foundation Level",
    ],
  },
  {
    title: "Agile & QA Practices",
    icon: Wrench,
    skills: [
      "Agile Testing",
      "Risk-based QA",
      "Backlog grooming",
      "Sprint planning",
      "Retrospectives",
      "Defect management",
      "Reporting",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.title}
                className="h-full hover:shadow-lg transition-shadow"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 mx-auto mb-4 bg-accent/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="text-xs border-accent/30 text-muted-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
