"use client";

import { Download, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 items-center py-12 lg:py-0">

        {/* Left: Text stack */}
        <div className="order-2 lg:order-1">
          <p className="hero-animate font-mono text-xs text-primary tracking-[0.25em] uppercase mb-5" style={{ animationDelay: '0ms' }}>
            Senior Quality Engineer
          </p>

          <h1 className="hero-animate font-display font-bold text-[clamp(52px,8vw,88px)] text-foreground leading-[0.95] mb-6" style={{ animationDelay: '120ms' }}>
            Krishna<br />Madhiraju
          </h1>

          <p className="hero-animate font-mono text-xs text-muted-foreground tracking-wider mb-8" style={{ animationDelay: '240ms' }}>
            Wellington, New Zealand &nbsp;·&nbsp; Available for new engagements
          </p>

          <p className="hero-animate text-muted-foreground text-base leading-relaxed max-w-xl mb-10" style={{ animationDelay: '360ms' }}>
            15+ years of hands-on QA across Salesforce, Oracle Cloud ERP, ServiceNow, and
            government systems. Functional, integration, API, and data validation specialist
            embedded in demanding enterprise programmes.
          </p>

          <div className="hero-animate flex flex-wrap gap-3" style={{ animationDelay: '480ms' }}>
            <a
              href="/Krishna_Madhiraju_Resume.pdf"
              download
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-5 py-3 bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors duration-200"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </a>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase px-5 py-3 border border-foreground/20 text-foreground rounded-sm hover:border-primary hover:text-primary transition-colors duration-200"
            >
              Get in Touch
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Right: Credentials panel */}
        <div className="hero-animate-photo order-1 lg:order-2 flex justify-center lg:justify-end" style={{ animationDelay: '100ms' }}>
          <div className="w-full max-w-[300px] space-y-3">

            {/* Stats row */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card border border-border rounded-sm p-4">
                <p className="font-display font-bold text-[42px] leading-none text-foreground">15<span className="text-primary">+</span></p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase mt-1">Years in QA</p>
              </div>
              <div className="bg-card border border-border rounded-sm p-4">
                <p className="font-display font-bold text-[42px] leading-none text-foreground">10<span className="text-primary">+</span></p>
                <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase mt-1">Enterprises served</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card border border-border rounded-sm p-4 space-y-3">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">Certifications</p>
              {[
                "Salesforce Certified AI Associate",
                "Professional Scrum Master I",
                "ISTQB Foundation Level",
              ].map((cert) => (
                <div key={cert} className="flex items-start gap-2.5">
                  <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  <span className="font-mono text-[11px] text-foreground leading-snug">{cert}</span>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
      </div>
    </section>
  );
}
