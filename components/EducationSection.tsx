"use client";

import { motion } from "framer-motion";

const EDUCATION = [
  {
    years: "Ongoing",
    institution: "Universidad Tecnológica Nacional",
    location: "Mendoza, Argentina",
    degree: "Technical Degree",
    field: "Software Development",
  },
  {
    years: "2019 – 2023",
    institution: "AMICANA Institute",
    location: "Mendoza, Argentina",
    degree: "Language Course",
    field: "English",
  },
  {
    years: "2024",
    institution: "CoderHouse",
    location: "Online",
    degree: "Data Science Course",
    field: "Data Science",
  },
];

const rowVariants = {
  hidden: { opacity: 0, y: 12 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.1 + i * 0.1,
    },
  }),
};

export default function EducationSection() {
  return (
    <section
      id="education"
      style={{ padding: "6rem 2rem", maxWidth: 1080, margin: "0 auto" }}
    >
      {/* Section label */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-mono text-xs font-bold tracking-widest uppercase mb-4 flex items-center gap-4"
        style={{ color: "var(--accent)" }}
      >
        Academic Background
        <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
      </motion.p>

      {/* Heading */}
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
        Education
      </motion.h2>

      {/* Table */}
      <div style={{ width: "100%", overflowX: "auto" }}>
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            tableLayout: "fixed",
          }}
        >
          {/* Column widths */}
          <colgroup>
            <col style={{ width: "22%" }} />
            <col style={{ width: "45%" }} />
            <col style={{ width: "33%" }} />
          </colgroup>

          {/* Header row */}
          <thead>
            <motion.tr
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              {["Year", "School", "Degree"].map((col) => (
                <th
                  key={col}
                  className="font-mono text-xs font-bold tracking-widest uppercase text-left"
                  style={{
                    color: "var(--muted)",
                    padding: "0 0 1rem 0",
                    letterSpacing: "0.15em",
                  }}
                >
                  {col}
                </th>
              ))}
            </motion.tr>
          </thead>

          {/* Body rows */}
          <tbody>
            {EDUCATION.map((edu, i) => (
              <motion.tr
                key={edu.institution}
                custom={i}
                variants={rowVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{
                  borderBottom: "1px dashed rgba(255,255,255,0.06)",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "rgba(0,229,160,0.03)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {/* Year */}
                <td
                  className="font-mono text-xs font-medium align-top"
                  style={{
                    color: "var(--muted)",
                    padding: "1.75rem 1rem 1.75rem 0",
                    whiteSpace: "nowrap",
                    letterSpacing: "0.05em",
                  }}
                >
                  {edu.years}
                </td>

                {/* School */}
                <td
                  className="align-top"
                  style={{ padding: "1.75rem 1rem 1.75rem 0" }}
                >
                  <span
                    className="font-mono text-xs font-semibold block"
                    style={{
                      color: "var(--text)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {edu.institution}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--muted)", letterSpacing: "0.04em" }}
                  >
                    {edu.location}
                  </span>
                </td>

                {/* Degree */}
                <td
                  className="align-top"
                  style={{ padding: "1.75rem 0 1.75rem 0" }}
                >
                  <span
                    className="font-mono text-xs font-semibold block"
                    style={{
                      color: "var(--accent2)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      marginBottom: "0.3rem",
                    }}
                  >
                    {edu.degree}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{
                      color: "var(--muted)",
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                    }}
                  >
                    {edu.field}
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
