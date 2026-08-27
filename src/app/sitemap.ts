import { MetadataRoute } from 'next'
import { articles } from '@/data/articleData'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: 'https://www.gopalahuja.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://www.gopalahuja.com/insights',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://www.gopalahuja.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]

  const dynamicRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `https://www.gopalahuja.com/insights/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticRoutes, ...dynamicRoutes]
}
