import type { Content } from '@/content'
import type { Project } from '@/lib/projects'
import { ProjectCard } from '@/components/project/ProjectCard'

export function Work({ c, projects }: { c: Content['work']; projects: Project[] }) {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t-3 border-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2 id="work-title" className="reveal text-section">
          {c.title}
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i + 1} labels={c.labels} />
          ))}
        </div>
      </div>
    </section>
  )
}
