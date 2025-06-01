// scripts/generate-sitemap.js
import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// __dirname equivalente en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Rutas de tu app
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/staff', changefreq: 'monthly', priority: 0.8 },
  { url: '/product', changefreq: 'monthly', priority: 0.7 },
  { url: '/benefice', changefreq: 'monthly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/work', changefreq: 'monthly', priority: 0.7 },
];

// Base URL del sitio (ajustar en producción)
const hostname = 'https://localhost:5173';

async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname });
  const writeStream = createWriteStream(resolve(__dirname, '../public', 'sitemap.xml'));

  sitemapStream.pipe(writeStream);
  routes.forEach(route => sitemapStream.write(route));
  sitemapStream.end();

  await streamToPromise(sitemapStream);
  console.log('✅ Sitemap generado en /public/sitemap.xml');
}

generateSitemap().catch(console.error);