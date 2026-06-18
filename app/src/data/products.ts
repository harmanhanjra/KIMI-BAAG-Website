import type { Product } from '@/types';

export const products: Product[] = [
  {
    id: 'prod_001',
    slug: 'chardi-kala',
    name: 'CHARDI KALA',
    punjabiName: 'ਚੜ੍ਹਦੀ ਕਲਾ',
    price: 1799,
    compareAtPrice: 2199,
    color: 'Washed Cream',
    colorHex: '#F5F0E8',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inventory: { XS: 5, S: 12, M: 18, L: 15, XL: 10, XXL: 6 },
    description: 'A premium oversized heavyweight t-shirt embodying the eternal Punjabi spirit of rising after every fall. Chardi Kala is not just optimism—it is defiance woven into fabric.',
    designStory: 'Chardi Kala is a philosophical cornerstone of Punjabi resilience. This piece captures that unbreakable spirit in 280 GSM heavyweight cotton, with the phrase embroidered in antique gold thread as a quiet reminder that no setback is permanent. The washed cream color represents the clarity that comes after overcoming darkness.',
    fabricDetails: '280 GSM heavyweight combed cotton. 100% premium cotton with pre-shrunk construction. Reinforced ribbed neckline. Dropped shoulders for an authentic oversized silhouette. High-density embroidery.',
    careInstructions: 'Machine wash cold with similar colors. Turn inside out before washing. Do not bleach. Tumble dry low or hang dry for best results. Iron on low heat if needed. Do not iron directly on embroidery.',
    tags: ['oversized', 'heavyweight', 'embroidered', 'drop-001'],
    collection: 'drop-001',
    category: 't-shirts',
    images: {
      front: '/images/products/chardi-kala-front.png',
      back: '/images/products/chardi-kala-back.png',
      detail: '/images/lookbook/detail-1.jpg',
      lifestyle: '/images/lookbook/punjab-1.jpg',
    },
    rating: 4.9,
    reviewCount: 47,
    isNew: true,
    isBestseller: true,
    shopifyVariantId: 'gid://shopify/ProductVariant/51440344531222',
  },
  {
    id: 'prod_002',
    slug: 'punjabi-rooh',
    name: 'PUNJABI ROOH',
    punjabiName: 'ਪੰਜਾਬੀ ਰੂਹ',
    price: 1899,
    compareAtPrice: 2299,
    color: 'Washed Black',
    colorHex: '#1A1A1A',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inventory: { XS: 3, S: 8, M: 14, L: 20, XL: 12, XXL: 7 },
    description: 'The spirit cannot be imitated. Punjabi Rooh is for those who carry their identity with quiet confidence—an essential piece that speaks without shouting.',
    designStory: 'Punjabi Rooh celebrates the intangible essence of being Punjabi—the pride, the warmth, the unshakeable sense of self. The washed black finish gives it a lived-in authenticity, while the gold embroidery adds a touch of refined luxury. This is the piece that makes a statement in any room across the world.',
    fabricDetails: '280 GSM heavyweight combed cotton. Garment-washed for a soft, lived-in feel from day one. 100% premium cotton. Reinforced ribbed neckline. Dropped shoulders. High-density gold embroidery.',
    careInstructions: 'Machine wash cold with similar colors. Turn inside out before washing. Do not bleach. Tumble dry low or hang dry. Iron on low heat. Do not iron directly on embroidery.',
    tags: ['oversized', 'heavyweight', 'embroidered', 'drop-001'],
    collection: 'drop-001',
    category: 't-shirts',
    images: {
      front: '/images/products/punjabi-rooh-front.png',
      back: '/images/products/punjabi-rooh-back.png',
      detail: '/images/lookbook/detail-2.jpg',
      lifestyle: '/images/lookbook/street-1.jpg',
    },
    rating: 4.8,
    reviewCount: 38,
    isNew: true,
    isBestseller: true,
    shopifyVariantId: 'gid://shopify/ProductVariant/51440352493846',
  },
  {
    id: 'prod_003',
    slug: 'baag-signature',
    name: 'BAAG SIGNATURE',
    punjabiName: 'ਬਾਗ਼ ਦਸਤਖਤ',
    price: 1699,
    color: 'Wine Burgundy',
    colorHex: '#541F2B',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inventory: { XS: 8, S: 15, M: 22, L: 18, XL: 14, XXL: 9 },
    description: 'The essential BAAG identity piece. Our signature burgundy oversized tee represents the bold ambition and cultural roots that define everything we create.',
    designStory: 'The BAAG Signature is our cornerstone piece—the one that started it all. The wine burgundy color was chosen to represent both luxury and our cultural depth. The back features our full identity: "BAAG" in commanding serif typography above our mantra "ROOTED IN PUNJAB. BUILT FOR THE WORLD." This is the piece that introduces us to the world.',
    fabricDetails: '280 GSM heavyweight combed cotton. 100% premium cotton. Pre-shrunk construction. Reinforced ribbed neckline. Dropped shoulders. Screen-printed back graphic with soft hand feel.',
    careInstructions: 'Machine wash cold with similar colors. Turn inside out before washing. Do not bleach. Tumble dry low or hang dry. Iron on low heat inside out.',
    tags: ['oversized', 'heavyweight', 'printed', 'drop-001', 'signature'],
    collection: 'drop-001',
    category: 't-shirts',
    images: {
      front: '/images/products/baag-signature-front.png',
      back: '/images/products/baag-signature-back.png',
      detail: '/images/lookbook/detail-1.jpg',
      lifestyle: '/images/lookbook/street-2.jpg',
    },
    rating: 4.9,
    reviewCount: 62,
    isNew: true,
    isBestseller: true,
    shopifyVariantId: 'gid://shopify/ProductVariant/51440353345814',
  },
  {
    id: 'prod_004',
    slug: 'mitti',
    name: 'MITTI',
    punjabiName: 'ਮਿੱਟੀ',
    price: 1599,
    compareAtPrice: 1999,
    color: 'Earth Olive',
    colorHex: '#62624A',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inventory: { XS: 4, S: 6, M: 10, L: 12, XL: 8, XXL: 5 },
    description: 'Born from the soil. Mitti is a tribute to the Punjabi connection with the land—grounded, authentic, and unshakeable.',
    designStory: 'Mitti means soil, earth, homeland. This piece is for those who never forget where they come from, no matter how far they travel. The earth olive color is drawn directly from the Punjab countryside, while the gold embroidery honours the richness of our soil and our roots.',
    fabricDetails: '280 GSM heavyweight combed cotton. 100% premium cotton. Pigment-dyed for a unique, slightly varied color that improves with wear. Reinforced ribbed neckline. Dropped shoulders. High-density embroidery.',
    careInstructions: 'Machine wash cold with similar colors. Turn inside out before washing. Do not bleach. Tumble dry low or hang dry. Iron on low heat. Do not iron directly on embroidery.',
    tags: ['oversized', 'heavyweight', 'embroidered', 'drop-001'],
    collection: 'drop-001',
    category: 't-shirts',
    images: {
      front: '/images/products/mitti-front.png',
      back: '/images/products/mitti-back.png',
      detail: '/images/lookbook/detail-2.jpg',
      lifestyle: '/images/lookbook/punjab-1.jpg',
    },
    rating: 4.7,
    reviewCount: 29,
    isNew: true,
    shopifyVariantId: 'gid://shopify/ProductVariant/51440351805718',
  },
  {
    id: 'prod_005',
    slug: 'sher',
    name: 'SHER',
    punjabiName: 'ਸ਼ੇਰ',
    price: 1999,
    compareAtPrice: 2499,
    color: 'Deep Black',
    colorHex: '#0D0D0D',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    inventory: { XS: 2, S: 5, M: 8, L: 10, XL: 6, XXL: 3 },
    description: 'Quiet strength and fearless identity. Sher is for those who lead without needing to announce it—the ones whose presence alone commands respect.',
    designStory: 'The lion has been a symbol of Punjabi courage for centuries. Sher captures that fearless identity in its purest form. The deep black represents the depth of inner strength, while the gold lion embroidery is a subtle mark of quiet power. This is our most premium piece from DROP 001.',
    fabricDetails: '280 GSM heavyweight combed cotton. 100% premium cotton. Garment-washed for supreme softness. Reinforced ribbed neckline with double-needle stitching. Dropped shoulders. Gold-toned lion embroidery with "ਸ਼ੇਰ" text.',
    careInstructions: 'Machine wash cold with similar colors. Turn inside out before washing. Do not bleach. Tumble dry low or hang dry. Iron on low heat. Do not iron directly on embroidery.',
    tags: ['oversized', 'heavyweight', 'embroidered', 'drop-001', 'premium'],
    collection: 'drop-001',
    category: 't-shirts',
    images: {
      front: '/images/products/sher-front.png',
      back: '/images/products/sher-back.png',
      detail: '/images/lookbook/detail-1.jpg',
      lifestyle: '/images/lookbook/after-dark-1.jpg',
    },
    rating: 5.0,
    reviewCount: 23,
    isNew: true,
    shopifyVariantId: 'gid://shopify/ProductVariant/51440355082518',
  },
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};

export const getProductsByCollection = (collectionSlug: string): Product[] => {
  return products.filter((p) => p.collection === collectionSlug);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const current = products.find((p) => p.id === productId);
  if (!current) return products.slice(0, limit);
  return products
    .filter((p) => p.id !== productId && p.collection === current.collection)
    .slice(0, limit);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter((p) => p.category === category);
};
