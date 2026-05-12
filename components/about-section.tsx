export function AboutSection() {
  const differentiators = [
    {
      label: "Execution-First Mindset",
      body: "I am a practitioner, not a spectator. Whether it's writing Playwright scripts, querying complex SQL databases, or validating REST APIs, I am embedded in the sprint to find defects before they reach your customers.",
    },
    {
      label: "Deep Platform Expertise",
      body: "A specialist in Salesforce Service Cloud and Oracle Cloud ERP. I understand how these platforms break at the integration layer and how to secure them through rigorous E2E and data-integrity testing.",
    },
    {
      label: "AI-Native Quality",
      body: "Actively testing Salesforce Agentforce and AI agent workflows — reasoning-reliability, safety guardrails, and prompt validation to ensure AI remains an asset, not a risk. Certified Salesforce AI Associate.",
    },
    {
      label: "Tech-Agnostic Adaptability",
      body: "While I have deep domain depth, my core strength is navigating any complex system. I bring a disciplined, risk-based approach to every project, ensuring predictable and reliable releases regardless of the stack.",
    },
  ];

  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
      <div className="max-w-5xl mx-auto">

        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-sm font-semibold text-primary tracking-[0.2em] uppercase shrink-0">
            About
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Opening statement */}
        <h2 className="font-display font-bold text-[clamp(32px,5vw,56px)] text-foreground leading-[1.1] mb-12 max-w-3xl">
          I bridge the gap between complex strategy and{" "}
          <span className="text-primary italic">high-velocity delivery.</span>
        </h2>

        {/* Bio + differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">

          <div className="space-y-5">
            <p className="text-foreground text-base leading-relaxed">
              My background spans New Zealand and Australia's most regulated sectors —
              Government, Banking, Aviation, and Logistics — identifying critical failure
              points in high-stakes Salesforce, Oracle ERP, and ServiceNow environments.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I don't just "manage" quality; I execute it. An embedded practitioner
              who works directly with developers and stakeholders to ensure systems are
              production-ready from day one.
            </p>
          </div>

          <div className="space-y-1">
            <p className="font-mono text-[10px] text-muted-foreground tracking-[0.2em] uppercase mb-5">The "Doer" Advantage</p>
            <div className="space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item.label}
                  className="border-l-2 border-primary/30 pl-5 hover:border-primary transition-colors duration-300"
                >
                  <p className="font-mono text-xs text-primary tracking-widest uppercase mb-1.5">{item.label}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
