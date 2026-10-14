import { neon } from '@neondatabase/serverless'
import type { Locale } from '@/content/locales'
import { seedProjects } from './projects.seed'

/** Fila de `public.projects` (db/schema.sql). Los campos `_es` son opcionales: si faltan, se usa el inglés. */
export type ProjectRow = {
  id: string
  title_en: string
  title_es: string | null
  description_en: string
  description_es: string | null
  tags: string[]
  image_url: string | null
  image_alt_en: string | null
  image_alt_es: string | null
  repo_url: string | null
  live_url: string | null
}

/** Lo que necesita la tarjeta, ya resuelto al idioma de la página. */
export type Project = {
  id: string
  title: string
  description: string
  tags: string[]
  image: { src: string; alt: string } | null
  repoUrl: string | null
  liveUrl: string | null
}

/**
 * Proyectos publicados, en orden. Lee la tabla de Neon Postgres con su driver HTTP (cada consulta es un `fetch`);
 * la página es estática y se regenera como mucho una vez por hora (`revalidate` en app/[locale]/page.tsx).
 * Sin `DATABASE_URL` (local o antes de crear la base) usa los datos de projects.seed.ts.
 */
export async function getProjects(locale: Locale): Promise<Project[]> {
  const rows = await fetchRows()
  return rows.map((row) => toProject(row, locale))
}

async function fetchRows(): Promise<ProjectRow[]> {
  const url = process.env.DATABASE_URL
  if (!url) return seedProjects

  // neon() se crea acá y no arriba del módulo: sin DATABASE_URL tira, y rompería el build.
  // Si la consulta falla, el error sube a propósito: en el build frena el deploy y en una
  // revalidación Next sigue sirviendo la versión anterior de la página.
  const sql = neon(url)
  const rows = await sql`
    select id, title_en, title_es, description_en, description_es, tags,
           image_url, image_alt_en, image_alt_es, repo_url, live_url
    from projects
    where published
    order by position, id
  `
  return rows as ProjectRow[]
}

function toProject(row: ProjectRow, locale: Locale): Project {
  const es = locale === 'es'
  const title = (es && row.title_es) || row.title_en

  return {
    id: row.id,
    title,
    description: (es && row.description_es) || row.description_en,
    tags: row.tags,
    image: row.image_url ? { src: row.image_url, alt: (es && row.image_alt_es) || row.image_alt_en || title } : null,
    repoUrl: row.repo_url,
    liveUrl: row.live_url,
  }
}
