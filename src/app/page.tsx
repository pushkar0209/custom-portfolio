import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { NeuralCoreSection } from "@/components/NeuralCoreSection";
import { IdentitySection } from "@/components/IdentitySection";
import { ArchitectureSection } from "@/components/ArchitectureSection";
import { PlaygroundSection } from "@/components/PlaygroundSection";
import { VisionSection } from "@/components/VisionSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { CaseStudySection } from "@/components/CaseStudySection";
import { BlogSection } from "@/components/BlogSection";
import { GallerySection } from "@/components/GallerySection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative overflow-hidden">
        <HeroSection />
        <IdentitySection />
        <NeuralCoreSection />
        <SkillsSection />
        <ArchitectureSection />
        <ExperienceSection />
        <PlaygroundSection />
        <ProjectsSection />
        <CaseStudySection />
        <GallerySection />
        <VisionSection />
        <BlogSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}