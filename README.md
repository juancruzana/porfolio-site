# Portafolio Juan Cruz Ana — Plan de adaptación v2

Este README guía la migración del portafolio actual (`portfolio-one-blush-pxhizrtqdo.vercel.app`) a la versión nueva: **single-page bilingüe, estética cartoon / neo-brutalista, con una sola secuencia de scroll interactivo**.

Está escrito para vos y para cualquier agente que trabaje sobre el repo. Si algo de acá contradice al código actual, **gana este archivo**.

---

## 0. Fuentes de verdad

| Archivo | Qué define |
|---|---|
| `CLAUDE.md` | Audiencia, tesis, estructura, los 3 proyectos, prohibiciones, datos de contacto |
| `claude/copy-en-v1.md` | Todo el texto del sitio en inglés (fuente única del copy) |
| `README.md` (este) | Cómo se adapta el código, sistema visual nuevo y movimiento |

**Este README reemplaza dos líneas de `CLAUDE.md`:**

- *Personalidad visual:* ~~Editorial y sobrio~~ → **Cartoon / neo-brutalista, con copy serio.** Lo juguetón es el envoltorio; las fichas técnicas se leen como documentación.
- *Movimiento:* ~~fade + 8px, nada más~~ → **reveals con CSS nativo + una única secuencia scroll-driven en Food Store.** Sin scroll-jacking.

Todo lo demás de `CLAUDE.md` sigue vigente (EN primero, sin sección de skills, sin terminal falsa, etc.).

### Cambios v2.1 (2026-10-14) — pisan lo que diga el resto de este archivo

1. **Densidad.** Más información por pantalla sin sumar texto: menos aire vertical (`py-12 md:py-16` por sección), escala `hero`/`section`/`sub` más chica, y la franja de datos vive en la columna derecha del hero.
2. **Proyectos = tarjetas.** Título, descripción, tecnologías y captura 16:10 (más links a repo/demo si existen). Ya no hay plantilla de 7 puntos ni acordeón de decisiones; esa plantilla quedó guardada en `../componentes-guardados/case-study/`.
3. **Los proyectos vienen de la base.** Tabla `projects` en Neon Postgres, creada desde Vercel → Storage (`db/schema.sql`, `db/seed.sql`, se cargan con `pnpm db:setup`). `lib/projects.ts` la lee con el driver HTTP de Neon; la página se regenera cada 1 h (ISR). Sin `DATABASE_URL` se usa `lib/projects.seed.ts`. La cantidad de proyectos la define la base, no este archivo. (Se descartó Supabase: el plan gratis no tenía lugar para otro proyecto y pausa los inactivos.)
4. **Education vuelve, como tabla** (Year · School · Degree), entre Work y About, con link en el nav.
5. **Sin secuencia de Food Store ni `motion`.** Se descartó y quedó guardada en `../componentes-guardados/order-sequence/`. No aplican §2 (`motion`), §6.3 ni su ítem en §10.

---

## 1. Estado actual → objetivo

| Hoy | Objetivo | Acción |
|---|---|---|
| Logo `~/jcana` estilo terminal | Nombre `Juan Cruz Ana` en display | Reemplazar |
| Nav: Home, Skills, Experience, Projects, Education | Nav: Work, Education, About, Contact + `EN / ES` | Reemplazar |
| Hero "Software Development student… Data Scientist" | Hero de `copy-en-v1.md` §2 | Reemplazar |
| Métricas `4+ / 2+ / 3` | Franja de datos verificables (`2 · 2024 · C1`) | Reemplazar |
| Sección **Skills** con categorías | — (las tecnologías viven en cada proyecto) | **Borrar** |
| Sección **Experience** | Una línea en About + CV | **Borrar** (ver Pendientes) |
| 4 proyectos (E-commerce, Rick & Morty, Workflow Engine, Dashboard) | 3 casos: Food Store, Sellos Ana, Post-sale Automation | **Borrar los 4**, crear los 3 |
| Sección **Education** (tabla) | Tabla en estilo neo-brutalista (v2.1) | Rehacer |
| Solo inglés, una ruta | Rutas reales `/en` y `/es` | Agregar i18n |
| — | Marquee, mascota, secuencia Food Store | Agregar |

Se mantiene: **Next.js (App Router) + TypeScript + Tailwind**, deploy en Vercel.

---

## 2. Stack y dependencias

Base existente: Next.js App Router · TypeScript `strict` · TailwindCSS · Vercel.

Se agregan:

| Paquete | Para qué | Por qué este y no otro |
|---|---|---|
| `motion` | Secuencia de Food Store y springs de hover | Idiomático en React, `useScroll` alcanza para una sola secuencia. GSAP sería más herramienta de la que hace falta. |
| `@rive-app/react-canvas` | Mascota animada | Las animaciones de Rive se manejan con *state machines*: mismo concepto que la FSM de Food Store, y eso se puede contar. |

**No** se agregan: Lenis, Locomotive Scroll ni ninguna librería de smooth scroll. El scroll es nativo, siempre.

Los reveals al entrar en pantalla se hacen con CSS (`animation-timeline: view()`), sin JS.

```bash
pnpm add motion @rive-app/react-canvas
```

---

## 3. Estructura de carpetas

```
app/
  [locale]/
    layout.tsx          # <html lang>, fuentes, metadata con hreflang
    page.tsx            # compone las secciones en orden
  globals.css           # tokens + utilidades brutal / reveal / marquee
components/
  sections/
    Nav.tsx
    Hero.tsx
    Marquee.tsx
    DataStrip.tsx       # va dentro del hero (columna derecha)
    Work.tsx            # grilla de tarjetas
    Education.tsx       # tabla
    About.tsx
    Contact.tsx
  project/
    ProjectCard.tsx     # tarjeta: captura, número, título, descripción, tags, links
  mascot/
    Mascot.tsx          # Rive, carga diferida
lib/
  projects.ts         # getProjects(locale): consulta a Neon o, sin DATABASE_URL, el seed
  projects.seed.ts    # respaldo local (mismas filas que db/seed.sql)
db/
  schema.sql          # tabla projects
  seed.sql
scripts/
  db-setup.mjs        # pnpm db:setup: corre schema.sql + seed.sql contra DATABASE_URL
content/
  types.ts              # tipo Content
  en.ts                 # copy maestro (desde claude/copy-en-v1.md)
  es.ts                 # se escribe al final
public/
  projects/             # capturas 16:10 @2x en WebP/AVIF
  mascot/mascot.riv
  cv/juan-cruz-ana-cv.pdf
```

**Contenido como TypeScript tipado, no JSON.** `es.ts` se declara como `export const es: Content = {...}`: si falta un campo de la traducción, no compila. Con dos idiomas y contenido estático no hace falta `next-intl`.

---

## 4. i18n con rutas reales

```ts
// content/index.ts
import { en } from './en'
import { es } from './es'

export const locales = ['en', 'es'] as const
export type Locale = (typeof locales)[number]

export const getContent = (locale: Locale) => (locale === 'es' ? es : en)
```

```tsx
// app/[locale]/page.tsx
import { notFound } from 'next/navigation'
import { locales, getContent, type Locale } from '@/content'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!locales.includes(locale as Locale)) notFound()
  const c = getContent(locale as Locale)
  return (/* <Nav c={c.nav} /> <Hero c={c.hero} /> ... */)
}
```

```ts
// next.config.ts — la raíz manda al inglés
async redirects() {
  return [{ source: '/', destination: '/en', permanent: false }]
}
```

- El toggle `EN / ES` es un `<Link>` a la otra ruta conservando el hash (`/es#food-store`). **Nunca banderas.**
- En `generateMetadata`: `alternates.languages` con `/en` y `/es` (hreflang).

---

## 5. Sistema visual cartoon / neo-brutalista

### Principios

1. **Bordes negros gruesos** en todo lo que es "objeto": tarjetas, botones, imágenes, stickers.
2. **Sombra dura desplazada, sin blur.** En hover el elemento "se aprieta" hacia la sombra.
3. **Colores planos.** Cero degradés, cero glassmorphism.
4. **Leves rotaciones** solo en elementos decorativos (stickers, etiquetas, la mascota). Nunca en bloques de texto largo.
5. **El texto técnico no se juega.** Las fichas de proyecto mantienen columna de ~680px, cuerpo legible y jerarquía clara.

### Tokens

```css
/* app/globals.css */
:root {
  --paper:  #FFF4E0;  /* fondo crema */
  --ink:    #111111;  /* texto, bordes, sombras */
  --muted:  #5C554B;  /* texto secundario (AA sobre --paper) */
  --orange: #FF6B1A;  /* acento principal: CTA, links, estado activo */
  --yellow: #FFD23F;  /* fondos de sticker, highlights */
  --blue:   #3D5AFE;  /* uso puntual: estados de la FSM */

  --border: 3px;
  --shadow: 6px;
  --radius: 14px;
}
```

**Regla de contraste:** el naranja y el amarillo son **fondos** con texto `--ink` encima, nunca color de texto sobre `--paper` (no pasan AA). Los links van en `--ink` con subrayado grueso naranja.

### Tipografía

| Rol | Fuente | Uso |
|---|---|---|
| Display | **Bricolage Grotesque** (800) | Nombre del hero, títulos de sección y de proyecto |
| Cuerpo | **Inter** (400/600) | Todo el texto corrido de las fichas |

Cargadas con `next/font/google`. Escala de 5 tamaños, igual que antes: hero, sección, subtítulo, cuerpo, caption.

### Utilidades

```css
.brutal {
  border: var(--border) solid var(--ink);
  border-radius: var(--radius);
  box-shadow: var(--shadow) var(--shadow) 0 var(--ink);
  transition: transform 150ms ease, box-shadow 150ms ease;
}
.brutal-interactive:hover,
.brutal-interactive:focus-visible {
  transform: translate(3px, 3px);
  box-shadow: 3px 3px 0 var(--ink);
}
.brutal-interactive:active {
  transform: translate(var(--shadow), var(--shadow));
  box-shadow: 0 0 0 var(--ink);
}

:focus-visible {
  outline: 3px solid var(--blue);
  outline-offset: 3px;
}
```

### Previews de proyecto

Se mantienen las reglas de `CLAUDE.md` (16:10, @2x, datos reales, sin chrome del navegador). Lo único que cambia es el marco: la captura va dentro de un `.brutal` con una barrita superior dibujada (tres círculos con borde negro), en lugar del mockup sutil de laptop.

---

## 6. Movimiento

### 6.1 Reveals (CSS nativo, sin JS)

```css
@media (prefers-reduced-motion: no-preference) {
  @supports (animation-timeline: view()) {
    .reveal {
      animation: reveal linear both;
      animation-timeline: view();
      animation-range: entry 0% entry 40%;
    }
  }
}
@keyframes reveal {
  from { opacity: 0; transform: translateY(16px) rotate(-1deg); }
  to   { opacity: 1; transform: none; }
}
```

Chrome, Edge y Safari 26+ lo soportan. Firefox estable todavía no: ahí el contenido simplemente aparece sin animación, que es el fallback correcto.

### 6.2 Marquee

Franja entre el hero y los datos duros. **Contenido: tu línea logística, no logos de tecnologías** (eso está prohibido).

```
EU WORK AUTHORIZATION ★ BASED IN MENDOZA ★ OPEN TO REMOTE & RELOCATION ★ ENGLISH C1 ★
```

```css
.marquee { overflow: hidden; border-block: var(--border) solid var(--ink); background: var(--yellow); }
.marquee__track { display: flex; width: max-content; animation: marquee 30s linear infinite; }
@keyframes marquee { to { transform: translateX(-50%); } }
@media (prefers-reduced-motion: reduce) { .marquee__track { animation: none; } }
```

El contenido se renderiza **dos veces** dentro del track para que el loop no tenga salto. La segunda copia lleva `aria-hidden="true"`.

### 6.3 La secuencia de Food Store (la única)

Un ticket de pedido dibujado recorre la FSM mientras scrolleás, y al lado el feed del admin suma una fila por cada transición. Reemplaza al video en loop que estaba planeado.

- Sección de `300vh` con un hijo `sticky` de `100vh`.
- El progreso del scroll (0 → 1) se mapea a los estados del camino feliz: `PENDIENTE → CONFIRMADO → EN_PREP → ENTREGADO`. `CANCELADO` aparece como rama lateral en gris, para que se vea que existe y que es terminal.
- Con `prefers-reduced-motion`: los 4 estados en fila, estáticos.

```tsx
// components/food-store/OrderSequence.tsx
'use client'
import { useRef, useState } from 'react'
import { useScroll, useMotionValueEvent, useReducedMotion } from 'motion/react'
import { OrderStatesStatic } from './OrderStatesStatic'

const STATES = ['PENDIENTE', 'CONFIRMADO', 'EN_PREP', 'ENTREGADO'] as const

export function OrderSequence() {
  const reduce = useReducedMotion()
  return reduce ? <OrderStatesStatic states={STATES} /> : <OrderSequenceScroll />
}

function OrderSequenceScroll() {
  const ref = useRef<HTMLElement>(null)
  const [step, setStep] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })

  useMotionValueEvent(scrollYProgress, 'change', (p) => {
    setStep(Math.min(STATES.length - 1, Math.floor(p * STATES.length)))
  })

  return (
    <section ref={ref} className="relative h-[300vh]" aria-label="Order lifecycle">
      <div className="sticky top-0 grid h-screen place-items-center gap-8 md:grid-cols-2">
        {/* <OrderTicket state={STATES[step]} />  */}
        {/* <AdminFeed upTo={step} />            */}
        <p className="sr-only" aria-live="polite">Order status: {STATES[step]}</p>
      </div>
    </section>
  )
}
```

**Mobile:** en pantallas angostas ticket y feed van apilados y la sección baja a `200vh`. Si en un teléfono real se siente pesado, en mobile se muestra la versión estática y listo.

### Reglas de movimiento (no negociables)

- Scroll nativo. Nada que intercepte la rueda ni el touch.
- Una sola sección fija (`sticky`) en todo el sitio.
- Todo respeta `prefers-reduced-motion`.
- Springs de Motion solo en hover y press, nunca en layout.

---

## 7. Mascota

Una versión ilustrada de vos, en el hero (y opcionalmente en Contact, saludando).

- **Ilustración original.** Dibujada por vos o encargada a un ilustrador. No generada por IA: es la pieza que más se nota y la que define si el estilo se ve memorable o amateur.
- **Animada en Rive** con una state machine chica: `idle → wave (hover) → look (sigue el cursor)`.
- **Carga diferida:** `next/dynamic` con `ssr: false` y, mientras carga, un PNG estático del mismo personaje con las mismas dimensiones (cero layout shift).
- Con `prefers-reduced-motion`: solo el PNG.
- `aria-hidden="true"`: es decorativa.

```tsx
// components/mascot/Mascot.tsx
'use client'
import { useRive } from '@rive-app/react-canvas'

export default function Mascot() {
  const { RiveComponent } = useRive({
    src: '/mascot/mascot.riv',
    stateMachines: 'Main',
    autoplay: true,
  })
  return <RiveComponent aria-hidden="true" className="h-64 w-64" />
}
```

Mientras no exista la ilustración, el hero funciona sin mascota. **No se pone un placeholder genérico.**

---

## 8. Accesibilidad y performance

- Contraste AA en todo el texto (ver regla de contraste en §5).
- Foco visible en todo lo interactivo; navegación completa por teclado.
- Cada tarjeta de proyecto tiene ancla propia: su `id` en la base (`#food-store`, `#sellos-ana`, `#post-sale-automation`).
- **Menos de 1 MB en la carga inicial.** Rive y Motion solo se cargan donde se usan; imágenes debajo del pliegue con lazy load; capturas en AVIF/WebP vía `next/image`.
- Lighthouse objetivo: Performance ≥ 90, Accessibility 100, en mobile.

---

## 9. Plan de migración

Una rama por fase, cada una deployable en un preview de Vercel.

1. **Limpieza.** Borrar Skills, Experience, Education, los 4 proyectos, el logo `~/jcana` y las métricas `4+ / 2+ / 3`.
2. **Contenido.** Crear `content/types.ts` y `content/en.ts` desde `claude/copy-en-v1.md`. Las notas en castellano del copy no se pasan.
3. **Estructura.** Rutas `[locale]`, redirect de `/`, secciones en el orden de `CLAUDE.md`, `ProjectCase` como plantilla única. Todavía sin estilo nuevo.
4. **Sistema visual.** Tokens, fuentes, utilidades `.brutal`, previews enmarcadas.
5. **Movimiento.** Reveals, marquee, secuencia de Food Store.
6. **Mascota.** Solo cuando exista la ilustración.
7. **Español.** `content/es.ts`, cuando el inglés ya no se toque.
8. **QA.** Teclado, reduced motion, Firefox, Safari, mobile real, Lighthouse, peso.

---

## 10. Definition of done

- [ ] Base de Neon conectada al proyecto de Vercel y `pnpm db:setup` corrido (si no, se ve el seed)
- [ ] `/en` y `/es` sirven contenido real; `/` redirige a `/en`
- [ ] Ninguna sección de skills ni logos de tecnologías sueltos
- [ ] Un solo CTA dominante (el mail en Contact)
- [ ] Email `soyjuancruzana@gmail.com` (nunca la variante con `11`)
- [ ] Ninguna captura con barra de URL o pestañas
- [ ] ~~La secuencia de Food Store funciona con scroll, con teclado y con reduced motion~~ (descartada en v2.1)
- [ ] Carga inicial < 1 MB
- [ ] Sin scroll-jacking en ningún navegador

---

## 11. Pendientes que bloquean publicar (no codear)

Del copy (`claude/copy-en-v1.md`):

1. ¿Food Store está desplegado? Define `2` o `1` en la franja y si hay link de demo.
2. El bug real de Food Store para "A problem that cost me".
3. Sellos Ana: ¿entra el incidente de la policy de Storage en lugar del build de Vercel?
4. Sellos Ana: "what I'd do differently".
5. Tesis n8n: tu rol exacto en el equipo.
6. Tesis n8n: tercera decisión técnica.
7. CV en PDF para linkear desde About.

Nuevos con esta versión:

8. **Ilustración de la mascota:** ¿la dibujás vos o la encargás?
9. **RST Argentina:** al borrar la sección Experience, tu único empleo formal queda solo en el CV. Recomendación: una oración en About (*"Before that, I built frontend interfaces for a health-tech network in Mendoza."*). Un recruiter busca empleo formal y no hay que hacérselo buscar.