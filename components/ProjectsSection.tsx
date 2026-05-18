"use client";

import { motion } from "framer-motion";

const PROJECTS = [
  {
    num: "01",
    title: "E-commerce Platform",
    description:
      "A full-stack application featuring product listings, real-time stock control, and user authentication — built to scale.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Node.js"],
  },
  {
    num: "02",
    title: "Rick & Morty Explorer",
    description:
      "A React + TypeScript SPA leveraging the Rick and Morty API with advanced filtering, search, and a clean responsive UI.",
    stack: ["React", "TypeScript", "REST API"],
  },
  {
    num: "03",
    title: "Automated Workflow Engine",
    description:
      "Integration of n8n and FastAPI to automate repetitive data tasks — reducing manual effort through intelligent pipeline orchestration.",
    stack: ["n8n", "FastAPI", "Python", "Docker"],
  },
  {
    num: "04",
    title: "Data Analytics Dashboard",
    description:
      "A Python-based visualization tool for interpreting complex datasets, featuring interactive charts and exportable reports.",
    stack: ["Python", "NumPy", "Matplotlib", "PowerBI"],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{ padding: "6rem 2rem", maxWidth: 1080, margin: "0 auto" }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        Featured Work
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-extrabold mb-8"
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "var(--text)",
          lineHeight: 1.1,
        }}
      >
        Projects
      </motion.h2>

      <div
        className="grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {PROJECTS.map((proj, i) => (
          <motion.div
            key={proj.num}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="proj-card relative flex flex-col gap-4 rounded-lg p-7 transition-all duration-200"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,229,160,0.2)";
              e.currentTarget.style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            <div
              className="font-mono text-xs font-medium"
              style={{ color: "var(--muted)" }}
            >
              {proj.num}
            </div>
            <div
              className="font-display font-bold text-xl"
              style={{ fontFamily: "Syne, sans-serif", color: "#fff" }}
            >
              {proj.title}
            </div>
            <div
              className="text-sm leading-relaxed flex-1"
              style={{ color: "var(--muted)" }}
            >
              {proj.description}
            </div>
            <div className="flex flex-wrap gap-2">
              {proj.stack.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2 py-1 rounded-sm"
                  style={{
                    background: "rgba(0,229,160,0.07)",
                    border: "1px solid rgba(0,229,160,0.15)",
                    color: "var(--accent)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
