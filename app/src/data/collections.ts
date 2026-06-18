import type { Collection } from '@/types';

export const collections: Collection[] = [
  {
    id: 'col_001',
    slug: 'drop-001',
    name: 'BAAG — DROP 001',
    description: 'Our debut collection. Five pieces shaped by Punjabi identity and designed for a global generation. Each piece carries a story, a philosophy, and a piece of home.',
    image: '/images/hero/baag-drop-001.jpg',
    products: ['prod_001', 'prod_002', 'prod_003', 'prod_004', 'prod_005'],
    isActive: true,
  },
];

export const getCollectionBySlug = (slug: string): Collection | undefined => {
  return collections.find((c) => c.slug === slug);
};
