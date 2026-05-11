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
          <div className="space-y-5 mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty font-medium text-justify">
              With <strong>12+ years in QA leadership</strong>, I help organisations ship faster and with greater confidence.
              I specialise in <strong>Salesforce</strong> and <strong>Oracle Cloud ERP</strong> testing, bringing
              risk-based strategies and technical depth to complex transformations across banking, government,
              aviation, and logistics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty text-justify">
              I translate business requirements into clear test strategies, lead UAT with stakeholders, and ensure
              every release builds trust. Currently, I’m exploring how <strong>AI</strong> can augment quality
              engineering — from automated test generation to predictive defect analysis.
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
