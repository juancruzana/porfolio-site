-- Datos iniciales: los mismos que lib/projects.seed.ts. Lo corre `pnpm db:setup`; se puede correr más de una vez.

insert into projects
  (id, position, title_en, description_en, tags, image_url, image_alt_en, repo_url)
values
  (
    'food-store', 1, 'Food Store',
    'An online food store where every order moves through an explicit state machine, and every move is logged.',
    array['FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'MercadoPago'],
    null, null,
    'https://github.com/WooferByte/Metodolog-a-SDD---Gest-on-de-Desarrollo-de-Software'
  ),
  (
    'sellos-ana', 2, 'Sellos Ana',
    'A catalog and quote-request site for a family graphic studio in Mendoza that makes custom stamps and corporate gifts.',
    array['Next.js', 'TypeScript', 'Supabase', 'Resend', 'Tailwind CSS'],
    '/projects/sellos-ana.webp',
    'Sellos Ana home page: the headline “Arte que deja su marca”, a short pitch and the catalog button.',
    null
  ),
  (
    'post-sale-automation', 3, 'Post-sale Automation',
    'An n8n pipeline that processes e-commerce orders end to end, and an AI chatbot that answers customers on WhatsApp, Telegram and email.',
    array['n8n', 'PostgreSQL', 'GPT-4o-mini', 'Grafana', 'Docker'],
    '/projects/post-sale-automation.webp',
    'n8n workflow that processes an order: webhook, order registration, stock check and two branches, confirmed and out of stock.',
    'https://github.com/juancruzana/Automatizacion-de-Atencion-al-Cliente-E-commerce'
  )
on conflict (id) do update set
  position       = excluded.position,
  title_en       = excluded.title_en,
  description_en = excluded.description_en,
  tags           = excluded.tags,
  image_url      = excluded.image_url,
  image_alt_en   = excluded.image_alt_en,
  repo_url       = excluded.repo_url;

-- Textos en español (si quedan en null, /es muestra el inglés).
update projects set description_es = 'Una tienda de comida online donde cada pedido avanza por una máquina de estados explícita, y cada cambio queda registrado.' where id = 'food-store';
update projects set description_es = 'Un catálogo con pedido de presupuesto para un estudio gráfico familiar de Mendoza que hace sellos personalizados y regalos empresariales.', image_alt_es = 'Inicio de Sellos Ana: el título “Arte que deja su marca”, una presentación breve y el botón al catálogo.' where id = 'sellos-ana';
update projects set title_es = 'Automatización posventa', description_es = 'Un pipeline en n8n que procesa pedidos de e-commerce de punta a punta, y un chatbot con IA que responde a clientes por WhatsApp, Telegram y email.', image_alt_es = 'Workflow de n8n que procesa un pedido: webhook, registro del pedido, control de stock y dos ramas, confirmado y sin stock.' where id = 'post-sale-automation';
