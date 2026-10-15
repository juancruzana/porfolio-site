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
    links: { work: 'Work', experience: 'Experience', education: 'Education', about: 'About', contact: 'Contact' },
  },
  hero: {
    sticker: 'Full-stack developer',
    firstName: 'Juan Cruz',
    lastName: 'Ana',
    tagline:
      'I turn ideas into products that work, from analysis to production.',
    intro:
      'Currently freelance and CEO of my own projects. When you need creative ideas, product analysis, smart solutions and adaptability, that’s where I add the most value.',
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
      { value: '+2', label: 'projects live in production', href: 'https://github.com/juancruzana' },
      { value: '2023', label: 'building for real clients since', href: 'https://www.linkedin.com/in/juancruzana' },
      { value: 'C1', label: 'English level' },
    ],
  },
  work: {
    title: 'Work',
    labels: { repo: 'Repository', live: 'Live site' },
  },
  experience: {
    title: 'Experience',
    items: [
      {
        years: '2025 – Present',
        role: 'Freelance Full Stack Developer',
        company: 'Self-employed',
        location: 'Mendoza, Argentina',
        description: 'End-to-end projects for real clients, from scoping to production.',
      },
      {
        years: 'Apr – Sep 2025',
        role: 'Frontend Developer',
        company: 'RST, Salud Tecnológica Argentina',
        location: 'Hybrid',
        description:
          'Built and maintained interfaces for health-tech products with React, TypeScript and TailwindCSS, integrated with REST APIs.',
      },
    ],
  },
  education: {
    title: 'Education',
    columns: { year: 'Year', school: 'School', degree: 'Degree' },
    items: [
      {
        years: '2024 – 2027',
        school: 'Universidad Tecnológica Nacional',
        location: 'Mendoza, Argentina',
        degree: 'Technical Degree',
        field: 'Software Development',
      },
      {
        years: '2024',
        school: 'CoderHouse',
        href: '/certificates/DataScienceCertificates.pdf',
        location: 'Online',
        degree: 'Data Science Course',
        field: 'Data Science',
      },
      {
        years: '2019 – 2023',
        school: 'AMICANA Institute',
        href: '/certificates/EnglishCourseCerficateAMICANA.pdf',
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
      'I’m Juan Cruz, a full-stack developer with a university degree in Programming (UTN FRM, Mendoza). Since 2024 I’ve been building software for clients who use it every day: catalogs, ordering platforms with payments, and process automation.',
      'My strongest evidence is on the frontend (React, Next.js, strict TypeScript), but I deliver the whole system: FastAPI backends, PostgreSQL schemas, role-based access control, payments and real-time updates. What I pay most attention to is the seams between layers, which is where the hard failures live.',
      // README §11.9: el único empleo formal no puede quedar solo en el CV.
      'Before that I worked at RST Argentina, building interfaces for digital health platforms. My final project was a post-sale automation system on n8n, formally audited.',
      'I hold Italian citizenship, so I can work anywhere in the EU without sponsorship. I work in English at C1, speak basic German, and I’m looking for a remote role on an international team or a position in Europe.',
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
