import type { ReactNode } from 'react'
import type { Content } from '@/content'
import { Arrow } from '@/components/icons'
import { HeroMascot } from '@/components/mascot/HeroMascot'

// `aside` ocupa la columna derecha (en mobile va debajo del texto): hoy, la franja de datos.
export function Hero({ c, aside }: { c: Content['hero']; aside?: ReactNode }) {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-10 pt-8 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(0,18rem)] lg:grid-cols-[minmax(0,1fr)_minmax(0,20rem)] md:pb-14 md:pt-12">
      <div>
        <p className="sticker">{c.sticker}</p>
        <h1 className="mt-5 text-hero">
          {c.firstName}{' '}
          <br />
          <span className="mt-3 inline-block rounded-[0.12em] border-3 border-ink bg-orange px-[0.14em] pb-[0.04em] shadow-brutal [rotate:-1.5deg] md:border-[5px] md:shadow-[10px_10px_0_var(--ink)]">
            {c.lastName}
          </span>
        </h1>
        <p className="mt-7 max-w-copy text-sub font-semibold">{c.tagline}</p>
        <p className="mt-3 max-w-copy text-muted">{c.intro}</p>
        <a href="#work" className="link mt-5 inline-flex items-center gap-2">
          {c.cue}
          <Arrow direction="down" />
        </a>
      </div>
      <div className="flex flex-col items-center gap-6 md:items-stretch">
        <HeroMascot />
        {aside}
      </div>
    </section>
  )
}
