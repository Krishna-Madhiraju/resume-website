"use client";

import { Mail, Phone, MapPin } from "lucide-react";

function LinkedInSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const contacts = [
  {
    label: "Email",
    value: "krishna3589@gmail.com",
    href: "mailto:krishna3589@gmail.com",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+64 212 9999 30",
    href: "tel:+64212999930",
    icon: Phone,
  },
  {
    label: "Location",
    value: "Wellington, New Zealand",
    href: null,
    icon: MapPin,
  },
  {
    label: "LinkedIn",
    value: "krishna-madhiraju",
    href: "https://linkedin.com/in/krishna-madhiraju",
    icon: null,
    isLinkedIn: true,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-14">
          <span className="font-mono text-xs text-primary tracking-[0.25em] uppercase shrink-0">
            Get In Touch
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl">
          {contacts.map((contact) => {
            const IconComponent = contact.isLinkedIn ? null : contact.icon;
            const inner = (
              <div className="flex items-center gap-4 bg-card/60 border border-border/40 rounded-lg px-5 py-4 hover:border-primary/30 hover:bg-card/80 transition-all duration-200 group">
                <div className="w-8 h-8 flex-shrink-0 bg-primary/10 rounded-md flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  {contact.isLinkedIn ? (
                    <LinkedInSVG className="h-4 w-4 text-primary" />
                  ) : IconComponent ? (
                    <IconComponent className="h-4 w-4 text-primary" />
                  ) : null}
                </div>
                <div>
                  <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-muted-foreground mb-0.5">
                    {contact.label}
                  </p>
                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {contact.value}
                  </p>
                </div>
              </div>
            );

            return contact.href ? (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.isLinkedIn ? "_blank" : undefined}
                rel={contact.isLinkedIn ? "noopener noreferrer" : undefined}
              >
                {inner}
              </a>
            ) : (
              <div key={contact.label}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
