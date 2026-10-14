/** @type {import('next').NextConfig} */
const nextConfig = {
  // Las capturas de los proyectos viven en /public/projects. Si alguna pasa a otro host, agregarlo en
  // `images.remotePatterns` o next/image la rechaza.
  // La raíz manda al inglés (README §4).
  async redirects() {
    return [{ source: '/', destination: '/en', permanent: false }]
  },
}

module.exports = nextConfig
