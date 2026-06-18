import type { NavItem } from '@/types';

export const mainNavigation: NavItem[] = [
  { label: 'New Drop', href: '/collections/drop-001' },
  {
    label: 'Shop',
    href: '/shop',
    children: [
      { label: 'Shop All', href: '/shop' },
      { label: 'T-Shirts', href: '/shop?category=t-shirts' },
      { label: 'Hoodies', href: '/shop?category=hoodies' },
    ],
  },
  { label: 'T-Shirts', href: '/shop?category=t-shirts' },
  { label: 'Hoodies', href: '/shop?category=hoodies' },
  { label: 'Lookbook', href: '/lookbook' },
  { label: 'Our Story', href: '/story' },
];

export const footerNavigation = {
  shop: [
    { label: 'New Drop', href: '/collections/drop-001' },
    { label: 'T-Shirts', href: '/shop?category=t-shirts' },
    { label: 'Hoodies', href: '/shop?category=hoodies' },
    { label: 'Shop All', href: '/shop' },
  ],
  about: [
    { label: 'Our Story', href: '/story' },
    { label: 'Lookbook', href: '/lookbook' },
    { label: 'Journal', href: '/story#journal' },
    { label: 'Contact', href: '/contact' },
  ],
  help: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Size Guide', href: '/size-guide' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Returns', href: '/returns' },
    { label: 'Track Order', href: '/track-order' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/policies/privacy' },
    { label: 'Terms & Conditions', href: '/policies/terms' },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com/baag' },
    { label: 'Pinterest', href: 'https://pinterest.com/baag' },
    { label: 'TikTok', href: 'https://tiktok.com/@baag' },
    { label: 'YouTube', href: 'https://youtube.com/baag' },
  ],
};

export const announcementMessages = [
  'BAAG DROP 001 — NOW LIVE',
  'FREE SHIPPING IN INDIA ABOVE ₹1,999',
  'LIMITED PIECES. NO GUARANTEED RESTOCK.',
  'ਪੰਜਾਬ ਤੋਂ ਦੁਨੀਆ ਤੱਕ',
];
