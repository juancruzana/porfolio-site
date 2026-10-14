import { ImageResponse } from 'next/og'
import { getContent, isLocale } from '@/content'

// Imagen que muestran LinkedIn, WhatsApp, etc. al compartir el link, una por idioma.
// Edge y no Node: la versión Node de next/og en Next 14 arma rutas con path.join sobre una URL y en Windows
// tira "Invalid URL" (rompe el dev y el build local). La respuesta sale con cache inmutable: se genera una vez.
export const runtime = 'edge'
export const alt = 'Juan Cruz Ana — Full-stack developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const INK = '#111111'
const PAPER = '#fff4e0'

// Satori (el motor de next/og) necesita TTF: la API de Google Fonts los da si no se le pide woff2.
async function loadFont(family: string, text: string) {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=${family}&text=${encodeURIComponent(text)}`)).text()
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1]
    return url ? await (await fetch(url)).arrayBuffer() : null
  } catch {
    return null // sin red: sale con la fuente por defecto, no rompe el build
  }
}

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const c = getContent(isLocale(locale) ? locale : 'en')
  const facts = c.marquee.items.filter((_, i) => i !== 1 && i !== 2) // sin "Mendoza" ni "remoto": entran 3

  const displayText = `${c.hero.firstName}${c.hero.lastName}`
  const bodyText = `${c.hero.sticker}${c.hero.tagline}${facts.join('')}★`
  const [display, body] = await Promise.all([
    loadFont('Bricolage+Grotesque:opsz,wght@96,800', displayText),
    loadFont('Inter:wght@600', bodyText.toUpperCase() + bodyText),
  ])
  const fonts = [
    ...(display ? [{ name: 'Display', data: display, weight: 800 as const }] : []),
    ...(body ? [{ name: 'Body', data: body, weight: 600 as const }] : []),
  ]

  return new ImageResponse(
    (
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%', background: PAPER, color: INK, fontFamily: 'Body' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, padding: '56px 72px 0' }}>
          <div
            style={{
              display: 'flex',
              alignSelf: 'flex-start',
              padding: '8px 22px',
              border: `4px solid ${INK}`,
              borderRadius: 999,
              background: '#ffd23f',
              boxShadow: `4px 4px 0 ${INK}`,
              fontSize: 24,
              letterSpacing: 2,
              textTransform: 'uppercase',
              transform: 'rotate(-2deg)',
            }}
          >
            {c.hero.sticker}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 28, marginTop: 30, fontFamily: 'Display', fontSize: 132, lineHeight: 1, letterSpacing: -4 }}>
            <span>{c.hero.firstName}</span>
            <span
              style={{
                padding: '0 18px 8px',
                border: `6px solid ${INK}`,
                borderRadius: 18,
                background: '#ff6b1a',
                boxShadow: `12px 12px 0 ${INK}`,
                transform: 'rotate(-1.5deg)',
              }}
            >
              {c.hero.lastName}
            </span>
          </div>
          <div style={{ display: 'flex', marginTop: 44, maxWidth: 980, fontSize: 34, lineHeight: 1.35 }}>{c.hero.tagline}</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 28,
            padding: '22px 40px',
            borderTop: `5px solid ${INK}`,
            background: '#ffd23f',
            fontSize: 26,
            letterSpacing: 1,
            textTransform: 'uppercase',
          }}
        >
          {facts.flatMap((fact, i) => (i ? [<span key={`s${i}`}>★</span>, <span key={fact}>{fact}</span>] : [<span key={fact}>{fact}</span>]))}
        </div>
      </div>
    ),
    { ...size, fonts },
  )
}
