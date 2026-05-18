"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast() {
  const [visible, setVisible] = useState(true);

  const handleClick = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={handleClick}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-lg px-5 py-3.5 cursor-pointer select-none"
          style={{
            background: "var(--bg3)",
            border: "1px solid rgba(0,229,160,0.3)",
            boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "var(--accent)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(0,229,160,0.3)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          {/* Pulsing dot */}
          <span
            className="toast-dot w-2 h-2 rounded-full flex-shrink-0"
            style={{ background: "var(--accent)" }}
          />
          <span
            className="font-mono text-xs font-semibold tracking-wide"
            style={{ color: "var(--text)" }}
          >
            What&apos;s new? → Check my projects
          </span>
          <span style={{ color: "var(--muted)", fontSize: 14 }}>↗</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
