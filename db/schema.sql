-- Proyectos del portafolio (Neon Postgres). Lo corre `pnpm db:setup` junto con db/seed.sql;
-- también se puede pegar en el SQL Editor de Neon. Se puede correr más de una vez.
-- La web solo lee, desde el servidor: DATABASE_URL nunca llega al navegador.

create table if not exists projects (
  id             text primary key,               -- slug, también es el ancla de la tarjeta (#food-store)
  position       integer not null default 0,     -- orden en la grilla, de menor a mayor
  published      boolean not null default true,  -- false = oculto sin borrarlo
  title_en       text not null,
  title_es       text,                           -- null = se muestra el inglés
  description_en text not null,
  description_es text,
  tags           text[] not null default '{}',   -- tecnologías, en el orden en que se muestran
  image_url      text,                           -- /projects/x.webp (en /public) o una URL de un host permitido en next.config.js
  image_alt_en   text,
  image_alt_es   text,
  repo_url       text,
  live_url       text,
  created_at     timestamptz not null default now()
);
