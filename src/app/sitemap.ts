import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/lib/getBaseUrl';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];
}
