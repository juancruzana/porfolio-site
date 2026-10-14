import Image from 'next/image'
import type { Content } from '@/content'
import type { Project } from '@/lib/projects'
import { Arrow } from '@/components/icons'

type Props = {
  project: Project
  index: number
  labels: Content['work']['labels']
}

// Tarjeta compacta: captura 16:10 enmarcada, número, título, descripción, tecnologías y links.
export function ProjectCard({ project, index, labels }: Props) {
  const titleId = `${project.id}-title`
  const number = String(index).padStart(2, '0')
  const links = [
    { href: project.liveUrl, label: labels.live },
    { href: project.repoUrl, label: labels.repo },
  ].filter((link): link is { href: string; label: string } => Boolean(link.href))

  return (
    <article id={project.id} aria-labelledby={titleId} className="reveal brutal frame flex flex-col">
      <div className="frame__bar" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <div className="relative aspect-[16/10] border-b-3 border-ink">
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            sizes="(min-width: 1152px) 356px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        ) : (
          // Sin captura todavía: el número del proyecto sobre el amarillo, decorativo.
          <div aria-hidden="true" className="grid h-full place-items-center bg-yellow font-display text-[5rem] font-extrabold leading-none">
            {number}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4 md:p-5">
        <p aria-hidden="true" className="text-caption font-semibold tabular-nums text-muted">
          {number}
        </p>
        <h3 id={titleId} className="mt-1 text-2xl leading-tight">
          {project.title}
        </h3>
        <p className="mt-2 text-[0.9375rem] leading-relaxed text-muted">{project.description}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5 pb-4">
          {project.tags.map((tag) => (
            <li key={tag} className="chip">
              {tag}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t-2 border-dashed border-ink pt-3 text-[0.9375rem]">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} target="_blank" rel="noreferrer" className="link inline-flex items-center gap-1.5">
                  {link.label}
                  <span className="sr-only">: {project.title}</span>
                  <Arrow direction="up-right" />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  )
}
