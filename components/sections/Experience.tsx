import type { Content } from '@/content'

// Lista simple, del más reciente al más antiguo: período a la izquierda, puesto y empresa a la derecha.
export function Experience({ c }: { c: Content['experience'] }) {
  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t-3 border-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2 id="experience-title" className="reveal text-section">
          {c.title}
        </h2>
        <ol className="reveal brutal mt-6 overflow-hidden bg-paper md:mt-8">
          {c.items.map((item) => (
            <li
              key={`${item.company}-${item.years}`}
              className="grid gap-1 border-t-2 border-dashed border-ink px-3 py-4 first:border-t-0 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6 sm:px-5"
            >
              <p className="text-caption font-semibold tabular-nums sm:whitespace-nowrap">{item.years}</p>
              <div>
                <h3 className="text-xl leading-tight">{item.role}</h3>
                <p className="mt-1 font-semibold">
                  {item.company}
                  <span className="font-normal text-muted"> · {item.location}</span>
                </p>
                <p className="mt-2 max-w-copy text-[0.9375rem] leading-relaxed text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
