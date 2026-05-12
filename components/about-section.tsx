export function AboutSection() {
  const differentiators = [
    {
      label: "Execution-First Mindset",
      body: "I am a practitioner, not a spectator. Whether it's writing Playwright scripts, querying complex SQL databases, or validating REST APIs, I'm embedded in the sprint to find defects before they reach your customers.",
    },
    {
      label: "Deep Platform Expertise",
      body: "A specialist in Salesforce Service Cloud and Oracle Cloud ERP. I understand how these platforms break at the integration layer and how to secure them through rigorous E2E and data-integrity testing.",
    },
    {
      label: "AI-Native Quality",
      body: "Ensuring AI remains an asset, not a risk. I validate Agentforce and AI agent workflows for reasoning accuracy, safety guardrails, and prompt reliability — so autonomous features ship with confidence. Certified Salesforce AI Associate.",
    },
    {
      label: "Tech-Agnostic Adaptability",
      body: "While I have deep domain expertise, my core strength is navigating any complex system. I bring a disciplined, risk-based approach to every project, ensuring predictable and reliable releases regardless of the stack.",
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
        <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-4">The Quality Guardian</p>
        <h2 className="font-display font-bold text-[clamp(32px,5vw,56px)] text-foreground leading-[1.1] mb-12 max-w-3xl">
          I provide the technical certainty required to{" "}
          <span className="text-primary italic">ship complex systems.</span>
        </h2>

        {/* Bio + differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12 items-start">

          <div className="space-y-5">
            <p className="text-foreground text-base leading-relaxed">
              In enterprise delivery, quality is often the bottleneck; I transform it
              into a competitive advantage. By embedding directly within the sprint, I
              identify critical failure points across high-stakes, regulated
              organisations before they ever reach a user.
            </p>
            <p className="text-muted-foreground text-base leading-relaxed">
              I don't just "check" software — I break it, fix it, and harden it.
              Whether it's architecting a risk-based test strategy for a massive cloud
              migration or validating complex cross-system data flows, I own the quality
              outcome from discovery to release.
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
