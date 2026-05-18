"use client";

import { motion } from "framer-motion";

const SKILLS = [
  {
    category: "Frontend",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlight: true,
  },
  {
    category: "Backend",
    tags: ["Python", "FastAPI", "Node.js", "PostgreSQL"],
    highlight: false,
  },
  {
    category: "Data Science",
    tags: ["NumPy", "Matplotlib", "Canvas", "PowerBI"],
    highlight: false,
  },
  {
    category: "Tools & DevOps",
    tags: ["Git", "n8n", "Docker"],
    highlight: false,
  },
];

const LANGUAGES = [
  { name: "English", level: "Proficient" },
  { name: "Spanish", level: "Proficient" },
  { name: "German", level: "Basic" },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      style={{
        padding: "6rem 2rem",
        maxWidth: 1080,
        margin: "0 auto",
      }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        Technical Skills
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
        What I work with
      </motion.h2>

      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
        {SKILLS.map((skill, i) => (
          <motion.div
            key={skill.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg p-6 transition-all duration-200"
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.borderColor = "rgba(0,229,160,0.3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.borderColor = "var(--border)")
            }
          >
            <div
              className="font-mono text-xs font-bold tracking-widest uppercase mb-4"
              style={{ color: "var(--accent)" }}
            >
              {skill.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-2.5 py-1 rounded-sm"
                  style={
                    skill.highlight
                      ? {
                          background: "rgba(123,111,240,0.07)",
                          border: "1px solid rgba(123,111,240,0.4)",
                          color: "var(--accent2)",
                        }
                      : {
                          background: "var(--bg3)",
                          border: "1px solid var(--border)",
                          color: "var(--text)",
                        }
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-4 mt-10"
        style={{ color: "var(--accent)" }}
      >
        Languages
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.p>

      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        {LANGUAGES.map((lang, i) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="rounded-lg p-5"
            style={{ background: "var(--bg2)", border: "1px solid var(--border)" }}
          >
            <div
              className="font-display font-bold text-base mb-1"
              style={{ fontFamily: "Syne, sans-serif", color: "#fff" }}
            >
              {lang.name}
            </div>
            <div
              className="font-mono text-xs font-medium uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              {lang.level}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
