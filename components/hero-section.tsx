"use client";

import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto mb-6">
            <Image
              src="/professional-headshot-of-krishna-madhiraju-softwar.jpg"
              alt="Krishna Madhiraju professional headshot"
              fill
              className="rounded-full object-cover border-4 border-primary shadow-lg"
              priority
            />
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl -z-10 scale-110"></div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance tracking-tight">
            Krishna Madhiraju
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-primary font-semibold mb-3 tracking-wide">
            Senior Quality Consultant
          </h2>
          <p className="text-sm text-muted-foreground mb-5 tracking-wide">
            Wellington, New Zealand &nbsp;·&nbsp; Available for new engagements
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-7">
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">Salesforce &amp; Oracle ERP</span>
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">API &amp; Integration Testing</span>
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">AI-Augmented Testing</span>
            <span className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary border border-primary/20 rounded-full">Testing AI Systems &amp; Agents</span>
          </div>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed font-medium text-justify">
            QA Consultant with 12+ years helping organisations accelerate releases,
            reduce defects, and build confidence in their software — through
            strategic test leadership, risk-based QA, and specialist Salesforce
            and Oracle ERP testing.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="/Krishna_Madhiraju_Resume.pdf" download>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </a>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToContact}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 font-semibold"
          >
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}
