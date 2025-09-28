import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";
import { BuildingIcon } from "lucide-react";

const competencies = [
  {
    title: "Test Strategy & Execution",
    description:
      "Designing and executing functional, regression, system, performance, and API testing strategies aligned to business needs.",
    emoji: "🎯",
  },
  {
    title: "Salesforce Testing Expertise",
    description:
      "Omni-Channel, Email-to-Case, Web-to-Case, workflows, dashboards — ensuring seamless customer experiences.",
    emoji: "☁️",
  },
  {
    title: "Oracle Cloud ERP Testing",
    description:
      "Validating Procure-to-Pay, Contracts, and complex ERP integrations. Ensuring stable financial and operational workflows.",
    emoji: "🏢",
  },
  {
    title: "UAT & Stakeholder Engagement",
    description:
      "Leading UAT, collaborating with SMEs, and aligning testing with business objectives.",
    emoji: "🤝",
  },
  {
    title: "Defect Management & Risk Mitigation",
    description:
      "Tracking, managing, and resolving defects to ensure smooth, compliant, high-quality releases.",
    emoji: "🛡️",
  },
  {
    title: "Backend & Data Validation",
    description:
      "SQL-based backend validation, test data management, and troubleshooting data integrity issues.",
    emoji: "🗄️",
  },
  {
    title: "Agile & Test Leadership",
    description:
      "Optimising test execution, leading small QA teams, and driving continuous improvement with JIRA, XRAY, Azure DevOps.",
    emoji: "🚀",
  },
  {
    title: "API Testing",
    description:
      "Postman and Rest Assured expertise — validating integrations, ensuring seamless data exchange, and strengthening system reliability.",
    emoji: "⚡️",
  },
  {
    title: "AI Exploration",
    description:
      "nthusiastically exploring AI’s role in testing and quality engineering — experimenting with AI-driven test generation, defect prediction, and productivity tools.",
    emoji: "🤖",
  },
];

const experiences = [
  {
    title: "Senior Consultant",
    company: "TTC Australia",
    period: "July 2025 – Current",
    description:
      "Leading enterprise consulting initiatives and strategic QA implementations for large-scale digital transformation projects.",
    color: "bg-blue-500",
  },
  {
    title: "Quality Engineer - Salesforce",
    company: "NZ Post",
    period: "May 2023 – July 2025",
    description:
      "Specialized in Salesforce Service Cloud testing, API automation, and quality assurance for critical postal service operations.",
    color: "bg-teal-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Accident Compensation Corporation (ACC)",
    period: "April 2021 – May 2023",
    description:
      "Led comprehensive testing strategies for enterprise applications, focusing on risk assessment and defect management.",
    color: "bg-cyan-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Jarden",
    period: "Feb 2021 – April 2021",
    description:
      "Delivered high-quality testing solutions for financial services applications with focus on regulatory compliance.",
    color: "bg-emerald-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Waka Kotahi (NZTA)",
    period: "July 2020 – Jan 2021",
    description:
      "Managed testing initiatives for transport infrastructure systems, ensuring reliability and performance standards.",
    color: "bg-green-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Auckland Airport",
    period: "Aug 2019 – March 2020",
    description:
      "Executed comprehensive testing for airport operations systems, focusing on passenger experience and operational efficiency.",
    color: "bg-amber-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Ministry for Primary Industries (MPI)",
    period: "April 2019 – July 2019",
    description:
      "Delivered testing solutions for government regulatory systems, ensuring compliance and data integrity.",
    color: "bg-orange-500",
  },
  {
    title: "Test Analyst",
    company: "Accident Compensation Corporation (ACC)",
    period: "March 2018 – April 2019",
    description:
      "Performed systematic testing and quality assurance for healthcare and compensation management systems.",
    color: "bg-red-500",
  },
  {
    title: "Configuration Analyst",
    company: "Vodafone New Zealand",
    period: "Sep 2017 – Dec 2017",
    description:
      "Managed system configurations and testing for telecommunications infrastructure and customer service platforms.",
    color: "bg-purple-500",
  },
  {
    title: "Senior Test Analyst - Salesforce",
    company: "Prolific Corporation Ltd",
    period: "May 2014 – June 2016",
    description:
      "Specialized in Salesforce platform testing and quality assurance, delivering robust solutions for enterprise CRM implementations.",
    color: "bg-pink-500",
  },
  {
    title: "Application Developer - Salesforce",
    company: "IBM India",
    period: "Aug 2013 – May 2014",
    description:
      "Developed and tested Salesforce applications, focusing on custom development and integration solutions for enterprise clients.",
    color: "bg-indigo-500",
  },
  {
    title: "Senior Systems Engineer",
    company: "Infosys",
    period: "Dec 2010 – Aug 2013",
    description:
      "Engineered and maintained enterprise systems, providing technical solutions and quality assurance for large-scale software projects.",
    color: "bg-slate-500",
  },
];

export function SkillsExperienceSection() {
  return (
    <>
      {/* What I Bring Section */}
      <section id="whatibring" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-foreground tracking-tight">
            💡 What I Bring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {competencies.map((competency) => (
              <Card
                key={competency.title}
                className="h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 group hover:scale-105"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                      {competency.emoji}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg mb-3 text-foreground group-hover:text-primary transition-colors duration-200 tracking-tight">
                        {competency.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                        {competency.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section id="experiencetimeline" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-foreground tracking-tight">
            Experience Timeline
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="max-h-[600px] overflow-y-auto scroll-smooth border border-border/50 rounded-lg bg-card/30 backdrop-blur-sm p-6 shadow-lg">
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/30"></div>

                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="relative flex items-start">
                      <div
                        className={`absolute left-4 w-4 h-4 ${exp.color} rounded-full border-4 border-background z-10 shadow-lg`}
                      ></div>

                      <div className="ml-12 flex-1">
                        <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-primary/30">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h3 className="font-bold text-foreground text-lg leading-tight tracking-tight">
                                {exp.title}
                              </h3>
                              <div className="flex items-center gap-2 mt-1">
                                <BuildingIcon className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground font-semibold text-sm">
                                  {exp.company}
                                </span>
                              </div>
                            </div>
                            <div className="flex items-center gap-1 text-primary text-sm font-semibold ml-4">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.period}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                            {exp.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <p className="text-center text-muted-foreground text-sm mt-4 font-medium">
              Scroll to explore {experiences.length} years of professional
              experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
