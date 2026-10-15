export type Link = { label: string; href: string }

/** Perfil externo con logo: se muestra en el nav (solo ícono) y en Contacto (ícono + texto). */
export type SocialLink = Link & { icon: 'github' | 'linkedin' }

export type Content = {
  meta: { title: string; description: string; ogLocale: string }
  skipToContent: string
  nav: {
    home: string
    language: string
    links: { work: string; experience: string; education: string; about: string; contact: string }
  }
  hero: {
    sticker: string
    firstName: string
    lastName: string
    tagline: string
    intro: string
    cue: string
  }
  marquee: { items: string[]; pause: string; play: string }
  dataStrip: { label: string; items: { value: string; label: string; href?: string }[] }
  work: {
    title: string
    /** Los proyectos vienen de la base (lib/projects.ts); acá solo los textos fijos de la tarjeta. */
    labels: { repo: string; live: string }
  }
  experience: {
    title: string
    /** Del más reciente al más antiguo. */
    items: { years: string; role: string; company: string; location: string; description: string }[]
  }
  education: {
    title: string
    columns: { year: string; school: string; degree: string }
    /** `field` es opcional: el secundario no lo lleva. */
    items: { years: string; school: string; location: string; degree: string; field?: string; href?: string }[]
  }
  about: {
    title: string
    paragraphs: string[]
    facts: string[]
    cv?: Link
  }
  contact: {
    title: string
    intro: string
    email: string
    links: SocialLink[]
  }
  footer: { location: string }
}
