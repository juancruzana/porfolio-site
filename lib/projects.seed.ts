import type { ProjectRow } from './projects'

/**
 * Respaldo local mientras no hay base: las mismas filas que inserta db/seed.sql, en el mismo orden.
 * Si cambia uno, cambiar el otro. Con la base conectada, este archivo deja de leerse.
 */
export const seedProjects: ProjectRow[] = [
  {
    id: 'food-store',
    title_en: 'Food Store',
    title_es: null,
    description_en:
      'An online food store where every order moves through an explicit state machine, and every move is logged.',
    description_es:
      'Una tienda de comida online donde cada pedido avanza por una máquina de estados explícita, y cada cambio queda registrado.',
    tags: ['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'MercadoPago'],
    image_url: null,
    image_alt_en: null,
    image_alt_es: null,
    repo_url: 'https://github.com/WooferByte/Metodolog-a-SDD---Gest-on-de-Desarrollo-de-Software',
    live_url: null,
  },
  {
    id: 'sellos-ana',
    title_en: 'Sellos Ana',
    title_es: null,
    description_en:
      'A catalog and quote-request site for a family graphic studio in Mendoza that makes custom stamps and corporate gifts.',
    description_es:
      'Un catálogo con pedido de presupuesto para un estudio gráfico familiar de Mendoza que hace sellos personalizados y regalos empresariales.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Tailwind CSS'],
    image_url: '/projects/sellos-ana.webp',
    image_alt_en: 'Sellos Ana home page: the headline “Arte que deja su marca”, a short pitch and the catalog button.',
    image_alt_es: 'Inicio de Sellos Ana: el título “Arte que deja su marca”, una presentación breve y el botón al catálogo.',
    repo_url: null,
    live_url: 'https://www.anaregalos.com.ar/',
  },
  {
    id: 'post-sale-automation',
    title_en: 'Post-sale Automation',
    title_es: 'Automatización posventa',
    description_en:
      'An n8n pipeline that processes e-commerce orders end to end, and an AI chatbot that answers customers on WhatsApp, Telegram and email.',
    description_es:
      'Un pipeline en n8n que procesa pedidos de e-commerce de punta a punta, y un chatbot con IA que responde a clientes por WhatsApp, Telegram y email.',
    tags: ['n8n', 'PostgreSQL', 'GPT-4o-mini', 'Grafana', 'Docker'],
    image_url: '/projects/post-sale-automation.webp',
    image_alt_en:
      'n8n workflow that processes an order: webhook, order registration, stock check and two branches, confirmed and out of stock.',
    image_alt_es: 'Workflow de n8n que procesa un pedido: webhook, registro del pedido, control de stock y dos ramas, confirmado y sin stock.',
    repo_url: 'https://github.com/juancruzana/Automatizacion-de-Atencion-al-Cliente-E-commerce',
    live_url: null,
  },
]
