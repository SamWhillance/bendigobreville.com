import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bendigobreville.com.au',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    /* {
      url: 'https://bendigobreville.com.au/repair',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bendigobreville.com.au/maintenance',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://bendigobreville.com.au/recycling',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }, */
  ]
} 