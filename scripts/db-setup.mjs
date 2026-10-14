// Crea la tabla y carga los proyectos iniciales en la base de DATABASE_URL (db/schema.sql + db/seed.sql).
// Uso: `pnpm db:setup` (lee .env.local). Se puede correr más de una vez: no duplica filas.
import { readFile } from 'node:fs/promises'
import { Pool, neonConfig } from '@neondatabase/serverless'

if (!process.env.DATABASE_URL) {
  console.error('Falta DATABASE_URL en .env.local: `vercel env pull .env.local`, o copiarla del panel de Neon.')
  process.exit(1)
}

// El Pool habla por WebSocket (el driver HTTP acepta una sola sentencia por consulta). Node 22+ lo trae global.
neonConfig.webSocketConstructor = WebSocket
const pool = new Pool({ connectionString: process.env.DATABASE_URL })

try {
  for (const file of ['db/schema.sql', 'db/seed.sql']) {
    await pool.query(await readFile(new URL(`../${file}`, import.meta.url), 'utf8'))
    console.log(`✓ ${file}`)
  }
  const { rows } = await pool.query('select position, id, published from projects order by position, id')
  console.table(rows)
} finally {
  await pool.end()
}
