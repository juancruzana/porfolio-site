import type { Content } from './types'

/**
 * Traducción de content/en.ts (también borrador: cuando cambie el inglés, cambiar esto).
 * Si falta un campo, no compila. Los textos de los proyectos están en la base (columnas `_es`).
 */
export const es: Content = {
  meta: {
    title: 'Juan Cruz Ana — Desarrollador full-stack',
    description:
      'Desarrollador full-stack en Mendoza, Argentina, con permiso de trabajo en la UE. Proyectos destacados: una máquina de estados de pedidos, un catálogo para un cliente real y un pipeline de automatización posventa.',
    ogLocale: 'es_AR',
  },
  skipToContent: 'Saltar al contenido',
  nav: {
    home: 'Juan Cruz Ana, volver arriba',
    language: 'Idioma',
    links: { work: 'Proyectos', education: 'Formación', about: 'Sobre mí', contact: 'Contacto' },
  },
  hero: {
    sticker: 'Desarrollador full-stack',
    firstName: 'Juan Cruz',
    lastName: 'Ana',
    tagline:
      'Construyo los sistemas detrás de un pedido: el catálogo, el checkout y todo lo que pasa después de la venta.',
    intro:
      'Estudiante de desarrollo de software en la UTN Mendoza. Abajo están los proyectos que construí, el stack de cada uno y dónde estudié.',
    cue: 'Ver proyectos',
  },
  marquee: {
    items: ['Permiso de trabajo en la UE', 'Desde Mendoza', 'Abierto a remoto y reubicación', 'Inglés C1', 'Alemán básico'],
    pause: 'Pausar la cinta',
    play: 'Reanudar la cinta',
  },
  dataStrip: {
    label: 'Datos clave',
    items: [
      { value: '+2', label: 'proyectos en producción' },
      { value: '2023', label: 'trabajando para clientes reales desde' },
      { value: 'C1', label: 'nivel de inglés' },
    ],
  },
  work: {
    title: 'Proyectos',
    labels: { repo: 'Repositorio', live: 'Sitio en vivo' },
  },
  education: {
    title: 'Formación',
    columns: { year: 'Año', school: 'Institución', degree: 'Título' },
    items: [
      {
        years: 'En curso',
        school: 'Universidad Tecnológica Nacional',
        location: 'Mendoza, Argentina',
        degree: 'Tecnicatura',
        field: 'Desarrollo de Software',
      },
      {
        years: '2024',
        school: 'CoderHouse',
        location: 'Online',
        degree: 'Curso de Data Science',
        field: 'Ciencia de datos',
      },
      {
        years: '2019 – 2023',
        school: 'Instituto AMICANA',
        location: 'Mendoza, Argentina',
        degree: 'Curso de idioma',
        field: 'Inglés',
      },
    ],
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy Juan Cruz. Estudio desarrollo de software en la UTN FRM, en Mendoza, Argentina, donde estoy terminando mi proyecto final sobre automatización posventa. En 2024 hice un curso de data science en CoderHouse y empecé a desarrollar software para clientes reales.',
      'Antes de eso, desarrollé interfaces frontend para una red de salud digital en Mendoza.',
      'Tengo permiso de trabajo en la UE, trabajo en inglés con nivel C1, hablo alemán básico y estoy abierto a puestos remotos y a reubicarme.',
    ],
    facts: ['UTN FRM', 'CoderHouse · Data Science', 'Inglés C1', 'Alemán básico', 'Permiso de trabajo UE'],
  },
  contact: {
    title: 'Hablemos',
    intro: 'El mail es la forma más rápida de contactarme.',
    email: 'soyjuancruzana@gmail.com',
    links: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/juancruzana', icon: 'linkedin' },
      { label: 'GitHub', href: 'https://github.com/juancruzana', icon: 'github' },
    ],
  },
  footer: { location: 'Mendoza, Argentina' },
}
