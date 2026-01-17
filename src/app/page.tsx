import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { SkillsSection } from "@/components/skills-section"
import { ToolsSection } from "@/components/tools-section"
import { CertificationsSection } from "@/components/certifications-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"
import { Navbar } from "@/components/navbar"

export default function Home() {
  return (
    <main className="w-full dark bg-slate-900">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsSection />
      <ToolsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  )
}
