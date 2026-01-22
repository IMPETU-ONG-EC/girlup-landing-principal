import { SITE } from '@/src/seo/site';
import type {MetadataRoute} from 'next';
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/']
      }
    ],
    sitemap: `${SITE.url}/sitemap.xml`
  };
}