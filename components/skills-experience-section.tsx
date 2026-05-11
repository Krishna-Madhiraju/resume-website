import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  BuildingIcon,
  Target,
  Cloud,
  Building2,
  Users,
  ShieldCheck,
  Database,
  GitBranch,
  Zap,
  Sparkles,
} from "lucide-react";

const competencies = [
  {
    title: "Test Strategy & Execution",
    description:
      "Designing and executing functional, regression, system, performance, and API testing strategies aligned to business needs.",
    icon: Target,
  },
  {
    title: "Salesforce Testing Expertise",
    description:
      "Omni-Channel, Email-to-Case, Web-to-Case, workflows, dashboards — ensuring seamless customer experiences.",
    icon: Cloud,
  },
  {
    title: "Oracle Cloud ERP Testing",
    description:
      "Validating Procure-to-Pay, Contracts, and complex ERP integrations. Ensuring stable financial and operational workflows.",
    icon: Building2,
  },
  {
    title: "UAT & Stakeholder Engagement",
    description:
      "Leading UAT, collaborating with SMEs, and aligning testing with business objectives.",
    icon: Users,
  },
  {
    title: "Defect Management & Risk Mitigation",
    description:
      "Tracking, managing, and resolving defects to ensure smooth, compliant, high-quality releases.",
    icon: ShieldCheck,
  },
  {
    title: "Backend & Data Validation",
    description:
      "SQL-based backend validation, test data management, and troubleshooting data integrity issues.",
    icon: Database,
  },
  {
    title: "Agile & Test Leadership",
    description:
      "Optimising test execution, leading small QA teams, and driving continuous improvement with JIRA, XRAY, Azure DevOps.",
    icon: GitBranch,
  },
  {
    title: "API Testing",
    description:
      "Postman and Rest Assured expertise — validating integrations, ensuring seamless data exchange, and strengthening system reliability.",
    icon: Zap,
  },
  {
    title: "AI Exploration",
    description:
      "Enthusiastically exploring AI's role in testing and quality engineering — experimenting with AI-driven test generation, defect prediction, and productivity tools.",
    icon: Sparkles,
  },
];

const experiences = [
  {
    title: "Senior Consultant",
    company: "TTC Australia",
    period: "July 2025 – Current",
    description:
      "Leading enterprise QA consulting for digital transformation programmes, shaping test strategy and governance for large-scale implementations.",
    color: "bg-blue-500",
  },
  {
    title: "Quality Engineer – Salesforce",
    company: "NZ Post",
    period: "May 2023 – July 2025",
    description:
      "Owned Salesforce Service Cloud testing end-to-end — from test strategy through Playwright automation and Postman API validation — for mission-critical postal operations.",
    color: "bg-teal-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Accident Compensation Corporation (ACC)",
    period: "April 2021 – May 2023",
    description:
      "QA lead for Oracle Cloud ERP integration programmes. Shaped risk-based test strategies and managed end-to-end defect lifecycle for complex government insurance systems.",
    color: "bg-cyan-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Jarden",
    period: "Feb 2021 – April 2021",
    description:
      "Delivered testing across financial services applications with a focus on regulatory compliance and data integrity.",
    color: "bg-emerald-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Waka Kotahi (NZTA)",
    period: "July 2020 – Jan 2021",
    description:
      "Led testing for national transport infrastructure systems, ensuring reliability and performance of citizen-facing services.",
    color: "bg-green-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Auckland Airport",
    period: "Aug 2019 – March 2020",
    description:
      "Validated airport operations systems supporting passenger experience and airside/landside operational workflows.",
    color: "bg-amber-500",
  },
  {
    title: "Senior Test Analyst",
    company: "Ministry for Primary Industries (MPI)",
    period: "April 2019 – July 2019",
    description:
      "Delivered testing for government regulatory and biosecurity systems, ensuring compliance and data integrity.",
    color: "bg-orange-500",
  },
  {
    title: "Test Analyst",
    company: "Accident Compensation Corporation (ACC)",
    period: "March 2018 – April 2019",
    description:
      "Executed systematic testing for healthcare and compensation management systems within ACC's enterprise portfolio.",
    color: "bg-red-500",
  },
  {
    title: "Configuration Analyst",
    company: "Vodafone New Zealand",
    period: "Sep 2017 – Dec 2017",
    description:
      "Managed system configuration and testing across telco infrastructure and customer service platforms.",
    color: "bg-purple-500",
  },
  {
    title: "Senior Test Analyst – Salesforce",
    company: "Prolific Corporation Ltd",
    period: "May 2014 – June 2016",
    description:
      "Built test frameworks and delivered high-quality Salesforce platform testing for enterprise CRM implementations.",
    color: "bg-pink-500",
  },
  {
    title: "Application Developer – Salesforce",
    company: "IBM India",
    period: "Aug 2013 – May 2014",
    description:
      "Developed and tested Salesforce applications for enterprise clients, focusing on custom development and system integration.",
    color: "bg-indigo-500",
  },
  {
    title: "Senior Systems Engineer",
    company: "Infosys",
    period: "Dec 2010 – Aug 2013",
    description:
      "Engineered and maintained enterprise systems across multiple client accounts, providing QA and technical solutions at scale.",
    color: "bg-slate-500",
  },
];

export function SkillsExperienceSection() {
  return (
    <>
      {/* Experience Timeline Section */}
      <section id="experiencetimeline" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-foreground tracking-tight">
            Experience Timeline
          </h2>
          <div className="relative">
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/30"></div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start">
                  <div
                    className={`absolute left-4 w-4 h-4 ${exp.color} rounded-full border-4 border-background z-10 shadow-lg`}
                  ></div>

                  <div className="ml-14 flex-1">
                    <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-4 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-1">
                        <div className="flex-1">
                          <h3 className="font-bold text-foreground text-base leading-tight tracking-tight">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <BuildingIcon className="h-3.5 w-3.5 text-muted-foreground" />
                            <span className="text-muted-foreground font-semibold text-sm">
                              {exp.company}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 text-primary text-xs font-semibold shrink-0">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What I Bring Section */}
      <section id="whatibring" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-center text-foreground tracking-tight">
            What I Bring
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-sm">
            Core competencies built across 12 years of enterprise QA
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencies.map((competency) => {
              const IconComponent = competency.icon;
              return (
                <Card
                  key={competency.title}
                  className="h-full hover:shadow-xl hover:border-primary/50 transition-all duration-300 bg-card/80 backdrop-blur-sm border-border/50 group hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-primary transition-colors duration-200 tracking-tight">
                          {competency.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {competency.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
