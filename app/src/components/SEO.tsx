import { useEffect } from 'react';
import { generateSEOMeta } from '@/lib/seo';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

export function SEO({ title, description, image, url, type, keywords }: SEOProps) {
  const keywordKey = keywords?.join(',') ?? '';

  useEffect(() => {
    const seo = generateSEOMeta({
      title,
      description,
      image,
      url,
      type,
      keywords: keywordKey ? keywordKey.split(',') : undefined,
    });
    document.title = seo.title;

    // Remove existing meta tags we manage
    const existingMeta = document.querySelectorAll('meta[data-seo]');
    existingMeta.forEach((el) => el.remove());

    // Add new meta tags
    seo.meta.forEach((meta) => {
      const metaEl = document.createElement('meta');
      metaEl.setAttribute('data-seo', 'true');
      Object.entries(meta).forEach(([key, value]) => {
        metaEl.setAttribute(key, value);
      });
      document.head.appendChild(metaEl);
    });

    return () => {
      const metaToRemove = document.querySelectorAll('meta[data-seo]');
      metaToRemove.forEach((el) => el.remove());
    };
  }, [title, description, image, url, type, keywordKey]);

  return null;
}
