"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const sectionItems = [
  { name: "About", href: "#about" },
  { name: "Career", href: "#experiencetimeline" },
  { name: "What I Bring", href: "#whatibring" },
  { name: "Contact", href: "#contact" },
];

export function Navigation({ hasBlog = false }: { hasBlog?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isBlogActive = pathname.startsWith("/blog");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      if (!isHome) return;

      const sections = sectionItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const handleSectionClick = (href: string) => {
    if (isHome) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {isHome ? (
            <button
              onClick={handleLogoClick}
              aria-label="Back to top"
              className="font-display font-bold text-sm text-foreground border border-foreground/20 px-2.5 py-1 rounded-sm tracking-[0.1em] hover:border-primary/50 hover:text-primary transition-colors duration-200"
            >
              KM
            </button>
          ) : (
            <Link
              href="/"
              aria-label="Back to home"
              className="font-display font-bold text-sm text-foreground border border-foreground/20 px-2.5 py-1 rounded-sm tracking-[0.1em] hover:border-primary/50 hover:text-primary transition-colors duration-200"
            >
              KM
            </Link>
          )}

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {sectionItems.map((item) =>
              isHome ? (
                <button
                  key={item.name}
                  onClick={() => handleSectionClick(item.href)}
                  className={`font-mono text-xs tracking-wider px-4 py-2 transition-colors uppercase ${
                    activeSection === item.href.substring(1)
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={`/${item.href}`}
                  className="font-mono text-xs tracking-wider px-4 py-2 transition-colors uppercase text-muted-foreground hover:text-foreground"
                >
                  {item.name}
                </Link>
              )
            )}
            {hasBlog && (
              <Link
                href="/blog"
                className={`font-mono text-xs tracking-wider px-4 py-2 transition-colors uppercase ${
                  isBlogActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Blog
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile nav */}
        {isOpen && (
          <div className="md:hidden border-t border-border/30 bg-background/95 backdrop-blur-md">
            <div className="px-2 py-3 space-y-1">
              {sectionItems.map((item) =>
                isHome ? (
                  <button
                    key={item.name}
                    onClick={() => handleSectionClick(item.href)}
                    className={`block font-mono text-xs tracking-widest uppercase px-4 py-3 w-full text-left transition-colors ${
                      activeSection === item.href.substring(1)
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={`/${item.href}`}
                    className="block font-mono text-xs tracking-widest uppercase px-4 py-3 w-full text-left transition-colors text-muted-foreground hover:text-foreground"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
              {hasBlog && (
                <Link
                  href="/blog"
                  className={`block font-mono text-xs tracking-widest uppercase px-4 py-3 w-full text-left transition-colors ${
                    isBlogActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
