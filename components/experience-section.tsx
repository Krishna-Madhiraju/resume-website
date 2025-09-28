import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "QA Consultant",
    company: "TTC Australia",
    period: "2025–Present",
    description:
      "Leading migration QA strategy and Azure validation for enterprise cloud transformation initiatives.",
  },
  {
    title: "Senior Test Analyst",
    company: "NZ Post",
    period: "2023–2025",
    description:
      "Led Salesforce Service Cloud testing, API testing, and Playwright automation implementation for critical postal services.",
  },
  {
    title: "QA Lead",
    company: "ACC",
    period: "2021–2023",
    description:
      "QA lead for Oracle Cloud ERP integrations, ensuring seamless data migration and system reliability.",
  },
  {
    title: "Senior Test Analyst",
    company: "Various Organizations",
    period: "2010–2020",
    description:
      "Senior Test Analyst across telecom, aviation, and government projects, building comprehensive QA frameworks.",
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experiencetimeline"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Experience Timeline
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-accent"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-center">
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8 md:ml-auto"
                  }`}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-accent font-medium">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
