"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

const pills = [
  "Salesforce & Oracle ERP",
  "API & Integration Testing",
  "AI-Augmented Testing",
  "Testing AI Systems & Agents",
];

export function HeroSection() {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/6 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/4 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12 lg:gap-20 items-center py-12 lg:py-0">

        {/* Left: Text stack */}
        <div className="order-2 lg:order-1">
          {/* Role label — mono, small, above name */}
          <p className="font-mono text-xs text-primary tracking-[0.25em] uppercase mb-5">
            Senior Quality Consultant
          </p>

          {/* Name — display serif, massive */}
          <h1 className="font-display text-[clamp(52px,8vw,88px)] text-foreground leading-[0.95] mb-6">
            Krishna<br />Madhiraju
          </h1>

          {/* Location + availability */}
          <p className="font-mono text-xs text-muted-foreground tracking-wider mb-8">
            Wellington, New Zealand &nbsp;·&nbsp; Available for new engagements
          </p>

          {/* Technical pill tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {pills.map((pill) => (
              <span
                key={pill}
                className="font-mono text-[11px] tracking-wide px-3 py-1.5 rounded-sm border border-primary/25 bg-primary/8 text-primary"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-base leading-relaxed max-w-xl mb-10">
            QA Consultant with 12+ years helping organisations accelerate releases,
            reduce defects, and build confidence in their software — through
            strategic test leadership, risk-based QA, and specialist Salesforce
            and Oracle ERP testing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/Krishna_Madhiraju_Resume.pdf" download>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border border-border hover:border-primary/50 text-foreground hover:text-primary bg-transparent hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>

        {/* Right: Headshot */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="relative">
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-3xl scale-110" />
            <div className="absolute inset-0 rounded-2xl bg-primary/10 blur-xl scale-105" />

            {/* Photo */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-[300px] lg:h-[300px] rounded-2xl overflow-hidden border border-primary/20">
              <Image
                src="/professional-headshot-of-krishna-madhiraju-softwar.jpg"
                alt="Krishna Madhiraju"
                fill
                className="object-cover"
                priority
              />
              {/* Subtle teal overlay at bottom for depth */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-primary/15 to-transparent" />
            </div>

            {/* Available badge */}
            <div className="absolute -bottom-3 -right-3 flex items-center gap-1.5 bg-card border border-border px-3 py-1.5 rounded-sm shadow-xl">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-[10px] text-primary tracking-widest uppercase">Available</span>
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
