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
    links: { work: 'Proyectos', experience: 'Experiencia', education: 'Formación', about: 'Sobre mí', contact: 'Contacto' },
  },
  hero: {
    sticker: 'Desarrollador full-stack',
    firstName: 'Juan Cruz',
    lastName: 'Ana',
    tagline:
      'Convierto ideas en productos que funcionan, del análisis a la puesta en producción.',
    intro:
      'Hoy trabajo como freelance y CEO de mis propios proyectos. Cuando necesitás ideas creativas, análisis de producto, soluciones inteligentes y adaptación al cambio, ahí es donde más valor aporto.',
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
      { value: '+2', label: 'proyectos en producción', href: 'https://github.com/juancruzana' },
      { value: '2023', label: 'trabajando para clientes reales desde', href: 'https://www.linkedin.com/in/juancruzana' },
      { value: 'C1', label: 'nivel de inglés' },
    ],
  },
  work: {
    title: 'Proyectos',
    labels: { repo: 'Repositorio', live: 'Sitio en vivo' },
  },
  experience: {
    title: 'Experiencia',
    items: [
      {
        years: '2025 – Actualidad',
        role: 'Desarrollador full-stack freelance',
        company: 'Independiente',
        location: 'Mendoza, Argentina',
        description: 'Proyectos de punta a punta para clientes reales, desde el relevamiento hasta producción.',
      },
      {
        years: 'Abr – Sep 2025',
        role: 'Desarrollador frontend',
        company: 'RST, Salud Tecnológica Argentina',
        location: 'Híbrido',
        description:
          'Construí y mantuve interfaces para productos de salud digital con React, TypeScript y TailwindCSS, integradas con APIs REST.',
      },
    ],
  },
  education: {
    title: 'Formación',
    columns: { year: 'Año', school: 'Institución', degree: 'Título' },
    items: [
      {
        years: '2024 – 2027',
        school: 'Universidad Tecnológica Nacional',
        location: 'Mendoza, Argentina',
        degree: 'Tecnicatura Universitaria en Desarrollo de Software',
        field: 'Desarrollo de Software',
      },
      {
        years: '2024',
        school: 'CoderHouse',
        href: '/certificates/DataScienceCertificates.pdf',
        location: 'Online',
        degree: 'Curso de Data Science',
        field: 'Ciencia de datos',
      },
      {
        years: '2019 – 2023',
        school: 'Instituto AMICANA',
        href: '/certificates/EnglishCourseCerficateAMICANA.pdf',
        location: 'Mendoza, Argentina',
        degree: 'Curso de idioma',
        field: 'Inglés',
      },
      {
        years: '2018 – 2023',
        school: 'Instituto Nuestra Señora del Rosario',
        location: 'Mendoza, Argentina',
        degree: 'Título secundario',
      },
    ],
  },
  about: {
    title: 'Sobre mí',
    paragraphs: [
      'Soy Juan Cruz, desarrollador full stack y Técnico Universitario en Programación (UTN FRM, Mendoza). Desde 2024 construyo software para clientes que lo usan todos los días: catálogos, plataformas de pedidos con pagos y automatizaciones de procesos.',
      'Mi evidencia más fuerte está en el frontend (React, Next.js, TypeScript en modo estricto), pero resuelvo el sistema completo: backend en FastAPI, esquemas en PostgreSQL, control de acceso por roles, pagos y tiempo real. Lo que más me interesa son las costuras entre capas, que es donde aparecen los fallos difíciles.',
      'Antes de eso pasé por RST Argentina, donde desarrollé interfaces para plataformas de salud digital. Mi proyecto final fue un sistema de automatización posventa sobre n8n, auditado formalmente.',
      'Tengo ciudadanía italiana, así que puedo trabajar en la UE sin necesidad de visa. Trabajo en inglés con nivel C1, hablo alemán básico y busco un puesto remoto en un equipo internacional o reubicarme en Europa.',
    ],
    facts: ['UTN FRM', 'Inglés C1', 'Ciudadano europeo'],
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
