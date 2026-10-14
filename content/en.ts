import type { Content } from './types'

/**
 * BORRADOR — `claude/copy-en-v1.md` no está en el repo.
 * Este copy sale del sitio anterior y de los repos de cada proyecto (README, CLAUDE.md, modelos).
 * Reemplazarlo campo por campo con el copy maestro. Los `TODO` son pendientes de README §11:
 * bloquean publicar.
 */
export const en: Content = {
  meta: {
    title: 'Juan Cruz Ana — Full-stack developer',
    description:
      'Full-stack developer based in Mendoza, Argentina, with EU work authorization. Selected work: an order state machine, a catalog for a real client and a post-sale automation pipeline.',
    ogLocale: 'en_US',
  },
  skipToContent: 'Skip to content',
  nav: {
    home: 'Juan Cruz Ana, back to top',
    language: 'Language',
    links: { work: 'Work', education: 'Education', about: 'About', contact: 'Contact' },
  },
  hero: {
    sticker: 'Full-stack developer',
    firstName: 'Juan Cruz',
    lastName: 'Ana',
    tagline:
      'I build the systems behind an order: the catalog, the checkout and everything that happens after the sale.',
    intro:
      'Software development student at UTN Mendoza. Below are the projects I’ve built, the stack behind each one and where I studied.',
    cue: 'See the work',
  },
  marquee: {
    items: ['EU work authorization', 'Based in Mendoza', 'Open to remote & relocation', 'English C1', 'Basic German'],
    pause: 'Pause the ticker',
    play: 'Play the ticker',
  },
  dataStrip: {
    label: 'Key facts',
    items: [
      // TODO README §11.1: "2" si Food Store está desplegado, "1" si no.
      { value: '+2', label: 'projects live in production' },
      { value: '2023', label: 'building for real clients since' },
      { value: 'C1', label: 'English level' },
    ],
  },
  work: {
    title: 'Work',
    labels: { repo: 'Repository', live: 'Live site' },
  },
  education: {
    title: 'Education',
    columns: { year: 'Year', school: 'School', degree: 'Degree' },
    items: [
      {
        years: 'Ongoing',
        school: 'Universidad Tecnológica Nacional',
        location: 'Mendoza, Argentina',
        degree: 'Technical Degree',
        field: 'Software Development',
      },
      {
        years: '2024',
        school: 'CoderHouse',
        location: 'Online',
        degree: 'Data Science Course',
        field: 'Data Science',
      },
      {
        years: '2019 – 2023',
        school: 'AMICANA Institute',
        location: 'Mendoza, Argentina',
        degree: 'Language Course',
        field: 'English',
      },
      {
        years: '2018 – 2023',
        school: 'Instituto Nuestra Señora del Rosario',
        location: 'Mendoza, Argentina',
        degree: 'High School Diploma',
      },
    ],
  },
  about: {
    title: 'About',
    paragraphs: [
      'I’m Juan Cruz. I study software development at UTN FRM in Mendoza, Argentina, where I’m finishing my final degree project on post-sale automation. In 2024 I took a data science course at CoderHouse and started building software for real clients.',
      // README §11.9: el único empleo formal no puede quedar solo en el CV.
      'Before that, I built frontend interfaces for a health-tech network in Mendoza.',
      'I have EU work authorization, I work in English at C1 level, I speak basic German, and I’m open to remote roles and relocation.',
    ],
    facts: ['UTN FRM', 'CoderHouse · Data Science', 'English C1', 'Basic German', 'EU work authorization'],
    // TODO README §11.7 — cuando exista public/cv/juan-cruz-ana-cv.pdf:
    // cv: { label: 'Download my CV (PDF)', href: '/cv/juan-cruz-ana-cv.pdf' },
  },
  contact: {
    title: 'Let’s talk',
    intro: 'Email is the fastest way to reach me.',
    email: 'soyjuancruzana@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juancruzana', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/juancruzana', icon: 'github' },
    ],
  },
  footer: { location: 'Mendoza, Argentina' },
}
