import { notFound } from 'next/navigation'
import { getContent, isLocale, locales } from '@/content'
import { Nav } from '@/components/sections/Nav'
import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { DataStrip } from '@/components/sections/DataStrip'
import { Work } from '@/components/sections/Work'
import { Education } from '@/components/sections/Education'
import { About } from '@/components/sections/About'
import { Contact, Footer } from '@/components/sections/Contact'
import { getProjects } from '@/lib/projects'

export const dynamicParams = false
// Los proyectos vienen de la base: la página se regenera como mucho una vez por hora.
export const revalidate = 3600

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const c = getContent(locale)
  const projects = await getProjects(locale)

  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-full border-3 border-ink bg-yellow px-4 py-2 font-semibold focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {c.skipToContent}
      </a>
      <Nav locale={locale} c={c.nav} />
      <main id="main">
        <Hero c={c.hero} aside={<DataStrip c={c.dataStrip} />} />
        <Marquee c={c.marquee} />
        <Work c={c.work} projects={projects} />
        <Education c={c.education} />
        <About c={c.about} />
        <Contact c={c.contact} />
      </main>
      <Footer c={c.footer} />
    </>
  )
}
