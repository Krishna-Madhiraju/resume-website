"use client";

import { Mail, Phone, MapPin } from "lucide-react";

function LinkedInSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
          Get In Touch
        </h2>

        <div className="bg-card border border-border/50 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <a href="mailto:krishna3589@gmail.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 shrink-0 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Email</p>
                <p className="text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">
                  krishna3589@gmail.com
                </p>
              </div>
            </a>

            <a href="tel:+64212999930" className="flex items-center gap-4 group">
              <div className="w-10 h-10 shrink-0 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Phone</p>
                <p className="text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">
                  +64 212 9999 30
                </p>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 shrink-0 bg-accent/10 rounded-lg flex items-center justify-center">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="text-sm font-semibold text-foreground">
                  Wellington, New Zealand
                </p>
              </div>
            </div>

            <a
              href="https://linkedin.com/in/krishna-madhiraju"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 group"
            >
              <div className="w-10 h-10 shrink-0 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <LinkedInSVG className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">LinkedIn</p>
                <p className="text-sm font-semibold text-accent group-hover:text-accent/80 transition-colors">
                  linkedin.com/in/krishna-madhiraju
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
