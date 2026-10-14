'use client'

import Link from 'next/link'
import { useEffect, useLayoutEffect, useState } from 'react'
import { localeNames, locales, type Locale } from '@/content/locales'

// En el servidor useLayoutEffect avisa y no hace nada; en el cliente corre antes de pintar.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect

/**
 * Qué se estaba viendo al tocar el switch: el elemento con id más interno que cruza el borde superior
 * de la pantalla y cuánto de él ya quedó arriba. El mismo scrollY no alcanza: el español es más largo
 * y en mobile la página se corre. Vive en el módulo porque al cambiar de idioma se remonta todo el árbol.
 */
let anchor: { id: string; ratio: number } | null = null

function saveAnchor() {
  const inView = Array.from(document.querySelectorAll<HTMLElement>('main [id]')).filter((node) => {
    const { top, bottom } = node.getBoundingClientRect()
    return top <= 0 && bottom > 0
  })
  const node = inView[inView.length - 1]
  if (!node) return
  const { top, height } = node.getBoundingClientRect()
  anchor = { id: node.id, ratio: -top / height }
}

// Link a la otra ruta conservando el hash (/es#food-store). Nunca banderas (README §4).
export function LocaleSwitch({ current, label }: { current: Locale; label: string }) {
  const [hash, setHash] = useState('')

  useIsomorphicLayoutEffect(() => {
    const node = anchor && document.getElementById(anchor.id)
    if (anchor && node) {
      const { top, height } = node.getBoundingClientRect()
      // 'instant': el html tiene scroll-behavior: smooth y si no se vería el desplazamiento.
      window.scrollTo({ top: window.scrollY + top + anchor.ratio * height, behavior: 'instant' })
    }
    anchor = null
  }, [])

  useEffect(() => {
    const sync = () => setHash(window.location.hash)
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  return (
    <div
      role="group"
      aria-label={label}
      className="inline-flex gap-[3px] rounded-full border-3 border-ink bg-paper p-[3px] text-caption font-semibold shadow-brutal-sm"
    >
      {locales.map((locale) => {
        const text = (
          <>
            <span aria-hidden="true">{locale.toUpperCase()}</span>
            <span className="sr-only">{localeNames[locale]}</span>
          </>
        )

        return locale === current ? (
          <span key={locale} aria-current="true" className="rounded-full bg-yellow px-3 py-1">
            {text}
          </span>
        ) : (
          // scroll={false}: sin esto Next salta al inicio (o al hash) en cada cambio de idioma.
          <Link
            key={locale}
            href={`/${locale}${hash}`}
            scroll={false}
            onClick={saveAnchor}
            hrefLang={locale}
            lang={locale}
            className="rounded-full px-3 py-1 transition-colors hover:bg-ink hover:text-paper"
          >
            {text}
          </Link>
        )
      })}
    </div>
  )
}
