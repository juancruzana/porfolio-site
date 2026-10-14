import type { Content } from '@/content'

export function Education({ c }: { c: Content['education'] }) {
  return (
    <section id="education" aria-labelledby="education-title" className="border-t-3 border-ink">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
        <h2 id="education-title" className="reveal text-section">
          {c.title}
        </h2>
        <div className="reveal brutal mt-6 overflow-hidden bg-paper md:mt-8">
          <table aria-labelledby="education-title" className="w-full table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[24%] sm:w-[18%]" />
              <col className="w-[38%] sm:w-[44%]" />
              <col />
            </colgroup>
            <thead className="border-b-3 border-ink bg-yellow">
              <tr>
                {[c.columns.year, c.columns.school, c.columns.degree].map((column) => (
                  <th
                    key={column}
                    scope="col"
                    className="px-3 py-2.5 text-caption font-semibold uppercase tracking-[0.1em] sm:px-5"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {c.items.map((item) => (
                <tr key={item.school} className="border-t-2 border-dashed border-ink first:border-t-0">
                  <td className="px-3 py-4 align-top text-caption font-semibold tabular-nums sm:whitespace-nowrap sm:px-5">
                    {item.years}
                  </td>
                  <th scope="row" className="px-3 py-4 align-top font-normal sm:px-5">
                    <span className="block font-semibold leading-snug">{item.school}</span>
                    <span className="mt-1 block text-caption text-muted">{item.location}</span>
                  </th>
                  <td className="px-3 py-4 align-top sm:px-5">
                    <span className="block font-semibold leading-snug">{item.degree}</span>
                    {item.field && <span className="mt-1 block text-caption text-muted">{item.field}</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
