"use client";

import { motion } from "framer-motion";

const EXPERIENCES = [
  {
    date: "2024 – Present",
    role: "FullStack Developer",
    company: "Freelance Developer",
    description:
      "Independent development of web applications and automation solutions for a diverse range of clients, delivering end-to-end projects from architecture to deployment.",
  },
  {
    date: "Ongoing",
    role: "Frontend Developer",
    company: "RST Argentina — Red de Salud Tecnológica",
    description:
      "Developed and maintained frontend interfaces for health-tech platforms, ensuring responsive and accessible UIs for medical service workflows.",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{ padding: "6rem 2rem", maxWidth: 1080, margin: "0 auto" }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        Work History
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="font-display font-extrabold mb-10"
        style={{
          fontFamily: "Syne, sans-serif",
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "var(--text)",
          lineHeight: 1.1,
        }}
      >
        Experience
      </motion.h2>

      <div className="flex flex-col">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="relative pb-8"
            style={{
              display: "grid",
              gridTemplateColumns: "clamp(100px, 160px, 20%) 1fr",
              gap: "0 2rem",
              borderBottom: i < EXPERIENCES.length - 1 ? "1px solid var(--border)" : "none",
              paddingTop: "2rem",
            }}
          >
            {/* Date */}
            <div
              className="font-mono text-xs font-medium pt-1"
              style={{ color: "var(--muted)" }}
            >
              {exp.date}
            </div>

            {/* Timeline line (desktop) */}
            <div
              className="exp-line absolute hidden md:block"
              style={{
                left: "clamp(100px, 160px, 20%)",
                top: 0,
                bottom: 0,
                width: 1,
                background: "var(--border)",
                transform: "translateX(-50%)",
              }}
            />

            {/* Dot (desktop) */}
            <div
              className="exp-dot-el absolute hidden md:block"
              style={{
                left: "clamp(100px, 160px, 20%)",
                top: "2.3rem",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
                transform: "translateX(-50%)",
                zIndex: 2,
                boxShadow: "0 0 0 3px rgba(0,229,160,0.15)",
              }}
            />

            {/* Content */}
            <div>
              <div
                className="font-display font-bold text-lg mb-0.5"
                style={{ fontFamily: "Syne, sans-serif", color: "#fff" }}
              >
                {exp.role}
              </div>
              <div
                className="font-mono text-xs font-medium mb-2"
                style={{ color: "var(--accent)" }}
              >
                {exp.company}
              </div>
              <div className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {exp.description}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
