import { MetadataRoute } from 'next'
import { BASE_URL } from './layout'

export default function sitemap(): MetadataRoute.Sitemap {

return [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
