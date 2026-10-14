import type { Content } from '@/content'
import { Arrow } from '@/components/icons'

// El único CTA dominante del sitio: el mail.
export function Contact({ c }: { c: Content['contact'] }) {
  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t-3 border-ink bg-yellow">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 md:py-20">
        <h2 id="contact-title" className="reveal text-hero">
          {c.title}
        </h2>
        <p className="mt-4 max-w-copy text-sub">{c.intro}</p>
        <a
          href={`mailto:${c.email}`}
          className="brutal brutal-interactive mt-7 inline-flex max-w-full items-center gap-3 bg-orange px-5 py-4 font-display font-extrabold text-sub [overflow-wrap:anywhere] md:px-8 md:py-5 md:text-[2rem]"
        >
          {c.email}
          <Arrow direction="up-right" className="shrink-0" />
        </a>
        <ul className="mt-7 flex flex-wrap gap-6">
          {c.links.map((link) => (
            <li key={link.href}>
              {/* Sobre amarillo el subrayado naranja casi no se ve: acá va en tinta. */}
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="link inline-flex items-center gap-1.5 decoration-ink hover:bg-paper"
              >
                {link.label}
                <Arrow direction="up-right" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function Footer({ c }: { c: Content['footer'] }) {
  return (
    <footer className="border-t-3 border-ink">
      <p className="mx-auto max-w-6xl px-4 py-8 text-caption font-semibold sm:px-6">
        © {new Date().getFullYear()} Juan Cruz Ana · {c.location}
      </p>
    </footer>
  )
}
