import type { Metadata } from 'next'
import { Bricolage_Grotesque, Inter } from 'next/font/google'
import { getContent, isLocale } from '@/content'
import '../globals.css'

// Variable con eje opsz: a tamaño hero el navegador usa el corte display, no el de texto.
const display = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-display',
  display: 'swap',
})

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-body',
  display: 'swap',
})

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

type Props = { params: Promise<{ locale: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const c = getContent(isLocale(locale) ? locale : 'en')

  return {
    metadataBase: new URL(siteUrl),
    title: c.meta.title,
    description: c.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', es: '/es', 'x-default': '/en' },
    },
    openGraph: {
      type: 'website',
      url: `/${locale}`,
      siteName: 'Juan Cruz Ana',
      title: c.meta.title,
      description: c.meta.description,
      locale: c.meta.ogLocale,
    },
    // La imagen sale de opengraph-image.tsx; con esto X/Twitter también la muestra grande.
    twitter: { card: 'summary_large_image' },
  }
}

export default async function LocaleLayout({ children, params }: Props & { children: React.ReactNode }) {
  const { locale } = await params

  return (
    <html lang={locale} className={`${display.variable} ${body.variable}`} data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}
