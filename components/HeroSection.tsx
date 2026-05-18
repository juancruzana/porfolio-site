"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROLES = [
  "FullStack Engineer",
  "Data Scientist",
  "Workflow Automator",
];

function useTypingEffect(words: string[]) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      timeout = setTimeout(() => {
        setText(word.slice(0, charIndex + 1));
        if (charIndex + 1 === word.length) {
          setTimeout(() => setDeleting(true), 2200);
        } else {
          setCharIndex((c) => c + 1);
        }
      }, 90);
    } else {
      timeout = setTimeout(() => {
        setText(word.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
          setCharIndex(0);
        } else {
          setCharIndex((c) => c - 1);
        }
      }, 45);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, words]);

  return text;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export default function HeroSection() {
  const typedRole = useTypingEffect(ROLES);

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex items-center py-8"
      style={{ maxWidth: 1080, margin: "0 auto", padding: "2rem" }}
    >
      <div className="w-full">
        {/* Name */}
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="font-display font-extrabold leading-none mb-3"
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "#fff",
          }}
        >
          Juan Cruz
          <br />
          <span style={{ color: "rgba(255,255,255,0.2)" }}>Ana</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.35}
          className="font-mono font-medium mb-8 flex items-center gap-2"
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            color: "var(--accent2)",
            minHeight: "2.2rem",
          }}
        >
          <span>{typedRole}</span>
          <span className="cursor" />
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="mb-10 leading-relaxed"
          style={{
            color: "var(--muted)",
            maxWidth: 560,
            fontSize: 15,
            lineHeight: 1.8,
          }}
        >
          Software Development student at <strong>National Technological University of Mendoza</strong> and <strong>Data Scientist</strong>. I
          specialize in building scalable web applications and automating
          complex workflows, bridging the gap between data-driven insights and
          functional code.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.65}
          className="flex gap-4 flex-wrap"
        >
          <a
            href="#projects"
            className="font-mono text-xs font-bold tracking-widest uppercase px-7 py-3 rounded transition-all duration-200 no-underline inline-block"
            style={{ background: "var(--accent)", color: "#060608" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00ffb3";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="font-mono text-xs font-bold tracking-widest uppercase px-7 py-3 rounded transition-all duration-200 no-underline inline-block"
            style={{
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--border)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text)";
            }}
          >
            My Experience
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.8}
          className="flex gap-10 mt-14 pt-10 flex-wrap"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          {[
            { num: "4+", label: "Projects Built" },
            { num: "2+", label: "Years Freelancing" },
            { num: "3", label: "Languages Spoken" },
          ].map((s) => (
            <div key={s.label}>
              <div
                className="font-display font-extrabold text-4xl"
                style={{ color: "#fff", fontFamily: "Syne, sans-serif" }}
              >
                {s.num}
              </div>
              <div
                className="font-mono text-xs uppercase tracking-widest mt-1"
                style={{ color: "var(--muted)" }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
