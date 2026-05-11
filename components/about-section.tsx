export function AboutSection() {
  const qualities = [
    "Detail-Oriented",
    "Risk-Based Thinker",
    "Quality Advocate",
    "Problem Solver",
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs text-primary tracking-[0.25em] uppercase shrink-0">
            About
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_200px] gap-12 items-start">
          <div className="space-y-5">
            <p className="text-foreground text-lg leading-relaxed">
              With <span className="text-primary font-semibold">12+ years in QA leadership</span>, I help organisations ship
              faster and with greater confidence. I specialise in{" "}
              <span className="text-primary font-semibold">Salesforce</span> and{" "}
              <span className="text-primary font-semibold">Oracle Cloud ERP</span> testing, bringing
              risk-based strategies and technical depth to complex transformations across banking,
              government, aviation, and logistics.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I translate business requirements into clear test strategies, lead UAT with stakeholders,
              and ensure every release builds trust. Currently exploring how{" "}
              <span className="text-foreground font-medium">AI</span> can augment quality engineering —
              from automated test generation to predictive defect analysis.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {qualities.map((quality) => (
              <div
                key={quality}
                className="font-mono text-[11px] tracking-wide text-muted-foreground border border-border/50 px-3 py-2 rounded-sm hover:border-primary/30 hover:text-primary transition-colors duration-200"
              >
                {quality}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
