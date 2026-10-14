import type { Content } from '@/content'
import { Arrow } from '@/components/icons'

export function About({ c }: { c: Content['about'] }) {
  return (
    <section id="about" aria-labelledby="about-title" className="border-t-3 border-ink">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,19rem)] md:py-16">
        <div className="max-w-copy">
          <h2 id="about-title" className="reveal text-section">
            {c.title}
          </h2>
          <div className="mt-5 space-y-4">
            {c.paragraphs.map((paragraph) => (
              <p key={paragraph} className="reveal">
                {paragraph}
              </p>
            ))}
          </div>
          {c.cv && (
            <a href={c.cv.href} className="link mt-6 inline-flex items-center gap-2">
              {c.cv.label}
              <Arrow direction="down" />
            </a>
          )}
        </div>

        {/* Decorativo: los mismos datos ya están en los párrafos. */}
        <ul aria-hidden="true" className="flex flex-wrap content-start gap-3 md:flex-col md:items-start md:pt-20">
          {c.facts.map((fact, i) => (
            <li key={fact} className={`sticker${i % 2 ? ' sticker--right' : ''}`}>
              {fact}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
