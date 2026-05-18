"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 h-16 flex items-center justify-between px-8"
        style={{
          borderBottom: "1px solid var(--border)",
          background: "rgba(6,6,8,0.85)",
          backdropFilter: "blur(12px)",
        }}
      >
        <a
          href="#home"
          className="font-mono text-sm font-bold tracking-widest no-underline"
          style={{ color: "var(--accent)" }}
        >
          <span style={{ color: "var(--muted)" }}>~/</span>jcana
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs font-medium tracking-widest uppercase no-underline transition-colors duration-200"
                style={{ color: "var(--muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--muted)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 rounded"
          style={{ border: "1px solid var(--border)", background: "none", color: "var(--text)", cursor: "pointer" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="fixed top-16 left-0 right-0 z-40 flex flex-col gap-5 px-8 py-6 md:hidden"
          style={{ background: "var(--bg2)", borderBottom: "1px solid var(--border)" }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm uppercase tracking-widest no-underline transition-colors duration-200"
              style={{ color: "var(--muted)" }}
              onClick={() => setOpen(false)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
