"use client";

import { useEffect, useRef, useState } from "react";
import {
  Cloud,
  Building2,
  Sparkles,
  ExternalLink,
  Award,
  Trophy,
} from "lucide-react";

const specializations = [
  {
    title: "Salesforce Testing",
    description:
      "Omni-Channel, Email-to-Case, Web-to-Case, OmniStudio workflows, and dashboards — ensuring seamless customer experiences across Service Cloud.",
    icon: Cloud,
  },
  {
    title: "Oracle Cloud ERP",
    description:
      "Validating Procure-to-Pay, Contracts, and complex ERP integrations. Ensuring stable financial and operational workflows with zero-downtime deployments.",
    icon: Building2,
  },
  {
    title: "AI-Native Quality",
    description:
      "Testing Salesforce Agentforce and AI agent workflows — reasoning-reliability, safety guardrails, and prompt validation. Certified Salesforce AI Associate.",
    icon: Sparkles,
  },
];

const capabilities = [
  {
    title: "Test Strategy & Execution",
    description:
      "Functional, regression, system, performance, and API testing strategies aligned to business needs.",
  },
  {
    title: "UAT & Stakeholder Engagement",
    description:
      "Leading UAT, collaborating with SMEs, and aligning testing with business objectives.",
  },
  {
    title: "Defect Management & Risk",
    description:
      "Tracking, managing, and resolving defects to ensure smooth, compliant, high-quality releases.",
  },
  {
    title: "Backend & Data Validation",
    description:
      "SQL-based backend validation, test data management, and troubleshooting data integrity issues.",
  },
  {
    title: "Agile & Test Leadership",
    description:
      "Optimising test execution, leading small QA teams, and driving continuous improvement.",
  },
  {
    title: "API Testing",
    description:
      "Postman and Rest Assured — validating integrations, ensuring seamless data exchange and system reliability.",
  },
];

const trailhead = {
  profileUrl: "https://www.salesforce.com/trailblazer/krishna-madhiraju",
  rank: "Expeditioner",
  badges: 71,
  points: 38650,
  trails: 7,
  highlight: "Agentblazer Innovator '26",
};

const toolCategories = [
  {
    label: "Automation",
    tools: ["Postman", "SQL", "Axway"],
    familiar: ["Playwright", "Selenium", "Rest Assured"],
  },
  {
    label: "Platforms",
    tools: ["Salesforce", "Oracle Cloud ERP", "Oracle EBS", "ServiceNow", "OmniStudio", "Agentforce", "Genesys"],
  },
  {
    label: "Management",
    tools: ["JIRA", "XRAY", "Zephyr", "Azure DevOps", "Azure Test Plans", "Confluence"],
  },
];

const experiences = [
  {
    title: "Senior Consultant",
    company: "Ministry of Education",
    period: "March 2026 – Present",
    description: [
      "E2E testing for a national student assessment platform — workflows, data warehouse integrations, and batch file transfers",
      "SQL reconciliation of frontend data against backend records for reporting accuracy",
      "UAT delivery with education sector stakeholders for compliance and reporting sign-off",
    ],
    isCurrent: true,
  },
  {
    title: "Senior Consultant",
    company: "TTC NZ — Kāinga Ora",
    period: "Jan 2026 – March 2026",
    description: [
      "Functional, integration, and regression testing of ServiceNow workflows for housing inspection teams",
      "Multi-system validation across ServiceNow, Oracle EBS, and internal web applications",
      "SQL-based backend validation of inspection data and work orders",
    ],
    isCurrent: false,
  },
  {
    title: "Senior Consultant",
    company: "TTC AU — NGM Bank",
    period: "July 2025 – Dec 2025",
    description: [
      "Risk-based test strategy for a cloud migration programme — rehost, re-platform, refactor, rebuild, and replace",
      "Test suite and defect management via Azure Test Plans with real-time release visibility",
      "UAT coordination with business stakeholders and test exit reporting with execution metrics",
    ],
    isCurrent: false,
  },
  {
    title: "Quality Engineer — Salesforce",
    company: "Sentify — NZ Post",
    period: "May 2023 – July 2025",
    description: [
      "QA across Salesforce Service Cloud and OmniStudio — Email-to-Case, Omni-Channel, and OmniStudio workflows",
      "Contributed to Playwright test automation — supporting reduced execution time and improved sprint-level coverage",
      "API and regression testing via Postman, with exposure to Rest Assured for integration validation",
    ],
    isCurrent: false,
  },
  {
    title: "Senior Test Analyst",
    company: "Expert 360 — ACC New Zealand",
    period: "April 2021 – May 2023",
    description: [
      "Oracle Cloud ERP testing — Procure-to-Pay and Contracts — ensuring zero-downtime deployments",
      "Validated 15+ ERP integrations and financial data flows",
      "Business Acceptance Testing with 20+ users and Deloitte stakeholders",
    ],
    isCurrent: false,
  },
  {
    title: "Senior Test Analyst",
    company: "QualIT / PlanIT — Consulting",
    period: "April 2019 – April 2021",
    description:
      "Contracted across public sector, transport, aviation, and financial services clients — delivering risk-based testing for regulatory, operational, and citizen-facing systems.",
    isCurrent: false,
    assignments: [
      {
        client: "Jarden",
        period: "Feb 2021 – April 2021",
        description: "Financial services applications — regulatory compliance and data integrity testing.",
      },
      {
        client: "Waka Kotahi (NZTA)",
        period: "July 2020 – Jan 2021",
        description: "National transport infrastructure systems — reliability and performance of citizen-facing services.",
      },
      {
        client: "Auckland Airport",
        period: "Aug 2019 – March 2020",
        description: "Airport operations systems supporting passenger experience and airside/landside workflows.",
      },
      {
        client: "Ministry for Primary Industries (MPI)",
        period: "April 2019 – July 2019",
        description: "Government regulatory and biosecurity systems — compliance and data integrity.",
      },
    ],
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
      <span className="font-mono text-sm font-semibold text-primary tracking-[0.2em] uppercase shrink-0">
        {children}
      </span>
      <div className="flex-1 h-px bg-border" />
    </div>
  );
}

const VISIBLE_COUNT = 5;

export function SkillsExperienceSection() {
  const [showAll, setShowAll] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const bringRef = useRef<HTMLDivElement>(null);

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
    const bringEls = bringRef.current?.querySelectorAll(".scroll-animate");
    bringEls?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [showAll]);

  return (
    <>
      {/* Experience Timeline */}
      <section id="experiencetimeline" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto" ref={timelineRef}>
          <SectionLabel>Career</SectionLabel>

          <div>
            {(showAll ? experiences : experiences.slice(0, VISIBLE_COUNT)).map((exp, index) => (
              <div
                key={index}
                className="scroll-animate timeline-entry border-t border-border/20 py-8 group last:border-b last:border-border/20"
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
                    <h3 className="font-display font-semibold text-2xl sm:text-3xl text-foreground leading-snug mb-2 group-hover:text-primary transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
                      <span className="font-mono text-xs text-primary tracking-wide">{exp.company}</span>
                      <span className="text-border/60 select-none">·</span>
                      <span className="font-mono text-xs text-muted-foreground">{exp.period}</span>
                    </div>
                    {Array.isArray(exp.description) ? (
                      <ul className="space-y-1.5 max-w-2xl">
                        {exp.description.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-muted-foreground text-sm leading-relaxed">
                            <span className="mt-[7px] w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-2xl">{exp.description}</p>
                    )}
                    {"assignments" in exp && exp.assignments && (
                      <div className="mt-5 space-y-3">
                        {exp.assignments.map((a, i) => (
                          <div key={i} className="pl-4 border-l-2 border-primary/20 hover:border-primary/50 transition-colors duration-200">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 mb-0.5">
                              <span className="font-mono text-xs text-primary tracking-wide">{a.client}</span>
                              <span className="text-border/60 select-none">·</span>
                              <span className="font-mono text-[11px] text-muted-foreground">{a.period}</span>
                            </div>
                            <p className="text-muted-foreground text-xs leading-relaxed">{a.description}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <span className="font-mono text-4xl font-bold text-foreground/[0.06] select-none shrink-0 hidden sm:block pt-1">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {experiences.length > VISIBLE_COUNT && (
            <button
              onClick={() => setShowAll(!showAll)}
              className="mt-6 font-mono text-xs tracking-wider uppercase text-primary hover:text-primary/80 transition-colors duration-200 flex items-center gap-2 group"
            >
              <span className="border-b border-primary/30 group-hover:border-primary/60 pb-0.5">
                {showAll ? "Show recent roles" : `Show earlier career (${experiences.length - VISIBLE_COUNT} more)`}
              </span>
            </button>
          )}
        </div>
      </section>

      {/* What I Bring */}
      <section id="whatibring" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-5xl mx-auto" ref={bringRef}>
          <SectionLabel>What I Bring</SectionLabel>

          {/* Specializations — the differentiators */}
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-6">
            Platform Specializations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-16">
            {specializations.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.title}
                  className="scroll-animate border-l-[3px] border-l-primary bg-card/70 border border-border/30 rounded-sm p-6 hover:bg-card transition-colors duration-300 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200">
                    <IconComponent className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-base text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Capabilities — foundational skills */}
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-6">
            Core Capabilities
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5 mb-16">
            {capabilities.map((item, i) => (
              <div
                key={item.title}
                className="scroll-animate border-l-2 border-primary/25 pl-4 hover:border-primary transition-colors duration-300 group"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="font-semibold text-sm text-foreground mb-1 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Tools & Platforms */}
          <p className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-6">
            Core Tools & Platforms
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {toolCategories.map(({ label, tools, familiar }) => (
              <div
                key={label}
                className="bg-card/60 border border-border/40 rounded-sm p-5"
              >
                <p className="font-mono text-[10px] font-semibold text-primary tracking-widest uppercase mb-3">
                  {label}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="skill-tag font-sans font-medium text-[11px] tracking-wide px-2.5 py-1 rounded-sm border border-border/60 text-muted-foreground bg-secondary/50"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                {familiar && familiar.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-border/30">
                    <p className="font-mono text-[9px] text-muted-foreground/60 tracking-widest uppercase mb-2">
                      Working Knowledge
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {familiar.map((tool) => (
                        <span
                          key={tool}
                          className="skill-tag font-sans font-medium text-[11px] tracking-wide px-2.5 py-1 rounded-sm border border-dashed border-border/40 text-muted-foreground/60"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Salesforce Trailhead */}
          <div className="mt-16">
            <p className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-6">
              Salesforce Trailhead
            </p>

            <a
              href={trailhead.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="scroll-animate block bg-card/70 border border-border/30 rounded-sm p-6 hover:bg-card hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                {/* Rank badge */}
                <div className="flex items-center gap-4 shrink-0">
                  <div className="w-14 h-14 rounded-lg bg-[#032D60]/10 border border-[#032D60]/20 flex items-center justify-center group-hover:border-[#032D60]/40 transition-colors duration-300">
                    <Trophy className="w-7 h-7 text-[#032D60]" />
                  </div>
                  <div>
                    <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/60 mb-0.5">Rank</p>
                    <p className="font-display font-bold text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {trailhead.rank}
                    </p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6 sm:gap-8 sm:ml-auto">
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-primary">{trailhead.badges}</p>
                    <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/60 mt-0.5">Badges</p>
                  </div>
                  <div className="w-px h-8 bg-border/40" />
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-primary">{trailhead.points.toLocaleString()}</p>
                    <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/60 mt-0.5">Points</p>
                  </div>
                  <div className="w-px h-8 bg-border/40" />
                  <div className="text-center">
                    <p className="font-display font-bold text-2xl text-primary">{trailhead.trails}</p>
                    <p className="font-mono text-[9px] tracking-[0.15em] uppercase text-muted-foreground/60 mt-0.5">Trails</p>
                  </div>
                </div>
              </div>

              {/* Agentblazer highlight + profile link */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-5 pt-5 border-t border-border/30">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  <span className="font-mono text-xs tracking-wide text-foreground/80 font-medium">
                    {trailhead.highlight}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase text-primary group-hover:text-primary/80 transition-colors">
                  View profile
                  <ExternalLink className="w-3 h-3" />
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
