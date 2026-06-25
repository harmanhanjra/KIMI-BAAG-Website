import { assetPath } from '@/lib/asset';

const siteUrl = (
  import.meta.env.VITE_SITE_URL ||
  'https://harmanhanjra.github.io/KIMI-BAAG-Website'
).replace(/\/$/, '');

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: string;
  keywords?: string[];
}

export const defaultSEO = {
  title: 'BAAG | Rooted in Punjab. Built for the World.',
  description:
    'Premium Punjabi streetwear. Heavyweight oversized t-shirts and hoodies designed with cultural soul and modern ambition. DROP 001 now live.',
  image: assetPath('images/hero/baag-drop-001.jpg'),
  url: siteUrl,
  type: 'website',
  keywords: [
    'Punjabi streetwear brand',
    'premium oversized t-shirts India',
    'Punjabi clothing brand',
    'luxury streetwear India',
    'oversized Punjabi t-shirts',
    'heavyweight t-shirts India',
    'modern Punjabi fashion',
    'BAAG clothing',
    'Punjabi hoodies',
    'cultural streetwear India',
  ],
};

export const generateSEOMeta = (props: SEOProps) => {
  const { title, description, image, url, type = 'website', keywords } = props;
  const fullTitle = title.includes('BAAG') ? title : `${title} | BAAG`;

  return {
    title: fullTitle,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: (keywords || defaultSEO.keywords).join(', ') },
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description,

},
      { property: 'og:type', content: type },
      { property: 'og:image', content: image || defaultSEO.image },
      { property: 'og:url', content: url || defaultSEO.url },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image || defaultSEO.image },
    ],
  };
};

export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency?: string;
  availability?: string;
  sku?: string;
  brand?: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku || product.name.toLowerCase().replace(/\s+/g, '-'),
    brand: {
      '@type': 'Brand',
      name: product.brand || 'BAAG',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: product.currency || 'INR',
      price: product.price,
      availability: product.availability || 'https://schema.org/InStock',
      url: `${siteUrl}/products/${product.name.toLowerCase().replace(/\s+/g, '-')}`,
    },
  };
};

export const generateOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BAAG',
    description: 'Premium Punjabi streetwear. Rooted in Punjab. Built for the World.',
    url: defaultSEO.url,
    logo: `${siteUrl}${assetPath('images/hero/baag-drop-001.jpg')}`,
    sameAs: [
      'https://instagram.com/baag',
      'https://tiktok.com/@baag',
      'https://youtube.com/baag',
      'https://pinterest.com/baag',
    ],
  };
};

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${defaultSEO.url}${item.url}`,
    })),
  };
};

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};
