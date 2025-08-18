import { MetadataRoute } from 'next'
import { locales } from '@/config'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://alemsys.digital'
  
  const routes = [
    '',
    '/services',
  ]

  const sitemap: MetadataRoute.Sitemap = []

  // Adicionar rotas para cada idioma
  locales.forEach(locale => {
    routes.forEach(route => {
      sitemap.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  return sitemap
}
