import type { LookbookImage } from '@/types';
import { assetPath } from '@/lib/asset';

export const lookbookImages: LookbookImage[] = [
  {
    id: 'lb_001',
    src: assetPath('images/lookbook/street-1.jpg'),
    category: 'Street',
    alt: 'BAAG street style - London urban setting',
  },
  {
    id: 'lb_002',
    src: assetPath('images/lookbook/studio-1.jpg'),
    category: 'Studio',
    alt: 'BAAG studio editorial',
  },
  {
    id: 'lb_003',
    src: assetPath('images/lookbook/punjab-1.jpg'),
    category: 'Punjab',
    alt: 'BAAG Punjab collection - Golden fields at sunset',
  },
  {
    id: 'lb_004',
    src: assetPath('images/lookbook/detail-1.jpg'),
    category: 'Detail',
    alt: 'BAAG embroidery detail - Gold threadwork',
  },
  {
    id: 'lb_005',
    src: assetPath('images/lookbook/after-dark-1.jpg'),
    category: 'After Dark',
    alt: 'BAAG nighttime editorial - Urban rooftop',
  },
  {
    id: 'lb_006',
    src: assetPath('images/lookbook/street-2.jpg'),
    category: 'Street',
    alt: 'BAAG street style - Couple in gallery space',
  },
  {
    id: 'lb_007',
    src: assetPath('images/lookbook/detail-2.jpg'),
    category: 'Detail',
    alt: 'BAAG fabric detail - Oversized fit showcase',
  },
  {
    id: 'lb_008',
    src: assetPath('images/community/community-1.jpg'),
    category: 'Community',
    alt: 'BAAG community - Friends at cafe',
  },
];

export const lookbookCategories = ['All', 'Street', 'Studio', 'Punjab', 'Detail', 'After Dark', 'Community'];
