import { TestTube, Cloud, Kanban, Award, RefreshCw } from "lucide-react";

const skillCategories = [
  {
    title: "Test Automation",
    icon: TestTube,
    skills: ["Playwright", "Selenium", "Postman", "Rest Assured", "SQL", "Axway"],
  },
  {
    title: "CRM & ERP Platforms",
    icon: Cloud,
    skills: ["Salesforce", "Service Cloud", "Agentforce", "OmniStudio", "Oracle Cloud ERP", "Oracle EBS", "ServiceNow", "Genesys"],
  },
  {
    title: "Test Management & Collaboration",
    icon: Kanban,
    skills: ["JIRA", "XRAY", "Zephyr", "Azure DevOps", "Azure Test Plans", "Confluence"],
  },
  {
    title: "Certifications",
    icon: Award,
    skills: [
      "Salesforce Certified AI Associate",
      "Professional Scrum Master I (PSM I)",
      "ISTQB Foundation Level",
    ],
  },
  {
    title: "Agile & QA Practices",
    icon: RefreshCw,
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
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-sm font-semibold text-primary tracking-[0.2em] uppercase shrink-0">
            Skills & Expertise
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.title}
                className="bg-card/60 border border-border/40 rounded-lg p-5 hover:border-primary/30 hover:bg-card/80 transition-all duration-300 group"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-7 h-7 flex-shrink-0 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xs text-foreground tracking-wide">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-tag font-mono text-[10px] tracking-wide px-2 py-1 rounded-sm border border-border/60 text-muted-foreground bg-secondary/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
