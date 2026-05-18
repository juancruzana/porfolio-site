import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import Toast from "@/components/Toast";

export default function Home() {
  return (
    <>
      {/* Fixed grid background */}
      <div className="grid-bg" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Page content */}
      <main style={{ paddingTop: 64, position: "relative", zIndex: 1 }}>
        <HeroSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
      </main>

      {/* Footer */}
      <footer
        className="font-mono text-xs text-center py-8 px-4"
        style={{
          borderTop: "1px solid var(--border)",
          color: "var(--muted)",
          letterSpacing: "0.05em",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span style={{ color: "var(--accent)" }}>jcana</span> — Built with
        Next.js · TypeScript · Tailwind CSS &nbsp;·&nbsp; Mendoza, Argentina
      </footer>

      {/* Floating toast */}
      <Toast />
    </>
  );
}
