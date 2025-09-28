import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function AboutSection() {
  const qualities = [
    "Detail-Oriented",
    "Risk-Based Thinker",
    "Quality Advocate",
    "Problem Solver",
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground tracking-tight">
          About Me
        </h2>

        <Card className="p-8 mb-8 shadow-lg border-border/50 bg-card/80 backdrop-blur-sm">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8 font-medium text-justify">
              I help organisations deliver reliable software faster — with fewer
              defects and greater confidence. With <strong>12+ years</strong> in
              QA leadership, I specialise in <strong>Salesforce</strong> and
              <strong> Oracle Cloud ERP</strong> testing,{" "}
              <strong>risk-based strategies</strong>, and automation.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8 text-justify">
              My approach blends technical depth with business focus, ensuring
              testing adds measurable value — from preventing costly defects in
              production to accelerating release cycles. I’ve worked across
              banking, government, aviation, and logistics, helping teams
              de-risk complex transformations and deliver seamless customer
              experiences.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8 text-justify">
              I’m known for bringing clarity to chaos: translating business
              requirements into test strategies, coaching teams on quality-first
              practices, and ensuring every release builds stakeholder trust.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8 text-justify">
              Currently, I’m exploring how <strong>AI</strong> can transform
              quality engineering — from automated test generation to predictive
              defect analysis — so I can bring smarter, future-ready solutions
              to my clients.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-justify">
              If you’re scaling Salesforce, modernising ERP, or driving digital
              transformation, let’s connect — I’d love to show how quality can
              become your competitive advantage.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {qualities.map((quality) => (
              <Badge
                key={quality}
                variant="secondary"
                className="px-4 py-2 text-sm font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
              >
                {quality}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
