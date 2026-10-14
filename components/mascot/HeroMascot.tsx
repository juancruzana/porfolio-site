'use client'

import dynamic from 'next/dynamic'
import Image from 'next/image'
import { useEffect, useState } from 'react'

/**
 * Pasar a true cuando existan public/mascot/mascot.riv y public/mascot/mascot.png (README §7).
 * Mientras tanto el hero funciona sin mascota: nada de placeholders genéricos.
 */
const MASCOT_READY = false

// PNG del mismo personaje y con las mismas medidas: cero layout shift mientras carga Rive.
function Poster() {
  return <Image src="/mascot/mascot.png" alt="" width={256} height={256} priority aria-hidden="true" className="h-64 w-64" />
}

const Mascot = dynamic(() => import('./Mascot'), { ssr: false, loading: Poster })

export function HeroMascot() {
  const [reduceMotion, setReduceMotion] = useState<boolean | null>(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(query.matches)
    sync()
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])

  if (!MASCOT_READY) return null
  // En el servidor y con reduced motion: solo el PNG. Rive (y su runtime) se cargan recién acá.
  return reduceMotion === false ? <Mascot /> : <Poster />
}
