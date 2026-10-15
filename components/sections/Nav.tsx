import type { Content, Locale } from '@/content'
import type { SocialLink } from '@/content/types'
import { BrandIcon } from '@/components/icons'
import { LocaleSwitch } from './LocaleSwitch'

// No es sticky. Los perfiles van solo con ícono: el nombre está en aria-label.
export function Nav({ locale, c, social }: { locale: Locale; c: Content['nav']; social: SocialLink[] }) {
  const links = [
    { href: '#work', label: c.links.work },
    { href: '#experience', label: c.links.experience },
    { href: '#education', label: c.links.education },
    { href: '#about', label: c.links.about },
    { href: '#contact', label: c.links.contact },
  ]

  return (
    <header id="top" className="mx-auto max-w-6xl px-4 pt-5 sm:px-6 md:pt-8">
      <nav className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <a href="#top" aria-label={c.home} className="mr-auto font-display font-extrabold text-xl tracking-tight sm:text-2xl">
          Juan Cruz Ana
        </a>
        <ul className="order-last flex w-full flex-wrap gap-1 sm:order-none sm:w-auto">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="inline-block rounded-full border-2 border-transparent px-3 py-1 font-semibold transition-colors hover:border-ink hover:bg-yellow"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-2">
          {social.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="grid h-9 w-9 place-items-center rounded-full border-3 border-ink bg-paper text-lg shadow-brutal-sm transition-colors hover:bg-yellow"
              >
                <BrandIcon brand={link.icon} />
              </a>
            </li>
          ))}
        </ul>
        <LocaleSwitch current={locale} label={c.language} />
      </nav>
    </header>
  )
}
