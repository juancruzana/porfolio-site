'use client'

import { useState } from 'react'
import type { Content } from '@/content'
import { PauseIcon, PlayIcon } from '@/components/icons'

/**
 * Franja entre el hero y los datos duros: la línea logística, nunca logos de tecnologías (README §6.2).
 * El contenido va dos veces para que el loop no salte; la segunda copia es aria-hidden.
 * El botón de pausa cubre WCAG 2.2.2 (contenido en movimiento que dura más de 5 s).
 */
export function Marquee({ c }: { c: Content['marquee'] }) {
  const [paused, setPaused] = useState(false)

  const group = (copy: boolean) => (
    <ul className="marquee__group" aria-hidden={copy || undefined}>
      {c.items.map((item) => (
        <li
          key={item}
          className="flex items-center gap-6 whitespace-nowrap px-3 py-3 font-display font-extrabold text-lg uppercase tracking-wide md:text-xl"
        >
          {item}
          <span aria-hidden="true">★</span>
        </li>
      ))}
    </ul>
  )

  return (
    <div className={`marquee${paused ? ' is-paused' : ''}`}>
      <div className="marquee__viewport">
        <div className="marquee__track">
          {group(false)}
          {group(true)}
        </div>
      </div>
      <button
        type="button"
        onClick={() => setPaused((value) => !value)}
        aria-label={paused ? c.play : c.pause}
        className="marquee__toggle grid w-12 shrink-0 place-items-center border-l-3 border-ink bg-paper transition-colors hover:bg-ink hover:text-paper"
      >
        {paused ? <PlayIcon /> : <PauseIcon />}
      </button>
    </div>
  )
}
