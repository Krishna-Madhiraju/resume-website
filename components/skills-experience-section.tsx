"use client";

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
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
    period: "July 2025 – Present",
    description:
      "Leading enterprise QA consulting for digital transformation programmes, shaping test strategy and governance for large-scale implementations.",
    isCurrent: true,
  },
  {
    title: "Quality Engineer — Salesforce",
    company: "NZ Post",
    period: "May 2023 – July 2025",
    description:
      "Owned Salesforce Service Cloud testing end-to-end — from test strategy through Playwright automation and Postman API validation — for mission-critical postal operations.",
    isCurrent: false,
  },
  {
    title: "Senior Test Analyst",
    company: "Accident Compensation Corporation (ACC)",
    period: "April 2021 – May 2023",
    description:
      "QA lead for Oracle Cloud ERP integration programmes. Shaped risk-based test strategies and managed end-to-end defect lifecycle for complex government insurance systems.",
    isCurrent: false,
  },
  {
    title: "Senior Test Analyst",
    company: "Jarden",
    period: "Feb 2021 – April 2021",
    description:
      "Delivered testing across financial services applications with a focus on regulatory compliance and data integrity.",
    isCurrent: false,
  },
  {
    title: "Senior Test Analyst",
    company: "Waka Kotahi (NZTA)",
    period: "July 2020 – Jan 2021",
    description:
      "Led testing for national transport infrastructure systems, ensuring reliability and performance of citizen-facing services.",
    isCurrent: false,
  },
  {
    title: "Senior Test Analyst",
    company: "Auckland Airport",
    period: "Aug 2019 – March 2020",
    description:
      "Validated airport operations systems supporting passenger experience and airside/landside operational workflows.",
    isCurrent: false,
  },
  {
    title: "Senior Test Analyst",
    company: "Ministry for Primary Industries (MPI)",
    period: "April 2019 – July 2019",
    description:
      "Delivered testing for government regulatory and biosecurity systems, ensuring compliance and data integrity.",
    isCurrent: false,
  },
  {
    title: "Test Analyst",
    company: "Accident Compensation Corporation (ACC)",
    period: "March 2018 – April 2019",
    description:
      "Executed systematic testing for healthcare and compensation management systems within ACC's enterprise portfolio.",
    isCurrent: false,
  },
  {
    title: "Configuration Analyst",
    company: "Vodafone New Zealand",
    period: "Sep 2017 – Dec 2017",
    description:
      "Managed system configuration and testing across telco infrastructure and customer service platforms.",
    isCurrent: false,
  },
  {
    title: "Senior Test Analyst — Salesforce",
    company: "Prolific Corporation Ltd",
    period: "May 2014 – June 2016",
    description:
      "Built test frameworks and delivered high-quality Salesforce platform testing for enterprise CRM implementations.",
    isCurrent: false,
  },
  {
    title: "Application Developer — Salesforce",
    company: "IBM India",
    period: "Aug 2013 – May 2014",
    description:
      "Developed and tested Salesforce applications for enterprise clients, focusing on custom development and system integration.",
    isCurrent: false,
  },
  {
    title: "Senior Systems Engineer",
    company: "Infosys",
    period: "Dec 2010 – Aug 2013",
    description:
      "Engineered and maintained enterprise systems across multiple client accounts, providing QA and technical solutions at scale.",
    isCurrent: false,
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-14">
      <span className="font-mono text-xs text-primary tracking-[0.25em] uppercase shrink-0">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

export function SkillsExperienceSection() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const els = timelineRef.current?.querySelectorAll(".scroll-animate");
    els?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Experience Timeline */}
      <section id="experiencetimeline" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto" ref={timelineRef}>
          <SectionLabel>Career</SectionLabel>

          <div>
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="scroll-animate border-t border-border/20 py-8 group last:border-b last:border-border/20"
                style={{ transitionDelay: `${Math.min(index * 55, 280)}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    {exp.isCurrent && (
                      <div className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-[0.2em] uppercase text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-sm mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        Current
                      </div>
                    )}
                    <h3 className="font-display text-2xl sm:text-3xl text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                      <span className="font-mono text-xs text-primary tracking-wide">{exp.company}</span>
                      <span className="text-border/60 select-none">·</span>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">
                      {exp.description}
                    </p>
                  </div>
                  <span className="font-mono text-4xl font-bold text-foreground/[0.04] select-none shrink-0 hidden sm:block pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What I Bring */}
      <section id="whatibring" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>What I Bring</SectionLabel>

          <p className="font-mono text-xs text-muted-foreground mb-12 tracking-wide">
            Core competencies built across 12 years of enterprise QA
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((competency) => {
              const IconComponent = competency.icon;
              return (
                <Card
                  key={competency.title}
                  className="h-full bg-card/60 border-border/40 hover:border-primary/30 transition-all duration-300 hover:bg-card/80 group"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 flex-shrink-0 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200 mt-0.5">
                        <IconComponent className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-sm mb-1.5 text-foreground group-hover:text-primary transition-colors duration-200">
                          {competency.title}
                        </h3>
                        <p className="text-muted-foreground text-xs leading-relaxed">
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
