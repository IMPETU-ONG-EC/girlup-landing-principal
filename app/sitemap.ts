import { SITE } from '@/src/seo/site';
import type {MetadataRoute} from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls:MetadataRoute.Sitemap = [
    // ES
    {url: `${SITE.url}/es`, lastModified: now, changeFrequency: 'weekly', priority: 1},
    {url: `${SITE.url}/es/nosotros`, lastModified: now, changeFrequency: 'monthly', priority: 0.8},
    {url: `${SITE.url}/es/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.7},

    // EN
    {url: `${SITE.url}/en`, lastModified: now, changeFrequency: 'weekly', priority: 1},
    {url: `${SITE.url}/en/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.8},
    {url: `${SITE.url}/en/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7}
  ] as const;

  return urls;
}