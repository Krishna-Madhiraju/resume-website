import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { SkillsExperienceSection } from "@/components/skills-experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ScrollProgress } from "@/components/scroll-progress";
import { getBlogPosts } from "@/lib/blog";

export default function HomePage() {
  const hasBlog = getBlogPosts().length > 0;

  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Navigation hasBlog={hasBlog} />
      <HeroSection />
      <AboutSection />
      <SkillsExperienceSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
