import type { Content } from '@/content'

const TONES = ['bg-yellow', 'bg-paper', 'bg-orange']

// Datos verificables, no métricas infladas: cada número tiene que poder chequearse.
// Va en la columna derecha del hero: una tarjeta por fila, salvo en tablet (hero a una columna), donde van en fila.
export function DataStrip({ c }: { c: Content['dataStrip'] }) {
  return (
    <section aria-label={c.label} className="w-full">
      <dl className="grid gap-3 sm:grid-cols-3 md:grid-cols-1 md:gap-4">
        {c.items.map((item, i) => (
          <div key={item.label} className={`brutal relative flex flex-row-reverse items-center justify-end gap-4 px-4 py-3 sm:flex-col-reverse sm:items-start sm:gap-1 md:flex-row-reverse md:items-center md:gap-4 ${TONES[i % TONES.length]}`}>
            <dt className="text-caption font-semibold uppercase tracking-[0.08em]">
              {item.href ? (
                // El enlace se estira sobre toda la tarjeta para que sea clickeable entera.
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="after:absolute after:inset-0">
                  {item.label}
                </a>
              ) : (
                item.label
              )}
            </dt>
            <dd className="shrink-0 font-display text-4xl font-extrabold leading-none">{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
