export interface Product {
  id: string;
  slug: string;
  name: string;
  punjabiName: string;
  price: number;
  compareAtPrice?: number;
  color: string;
  colorHex: string;
  sizes: string[];
  inventory: Record<string, number>;
  description: string;
  designStory: string;
  fabricDetails: string;
  careInstructions: string;
  tags: string[];
  collection: string;
  category: 't-shirts' | 'hoodies' | 'sweatshirts';
  images: {
    front: string;
    back: string;
    detail?: string;
    lifestyle?: string;
  };
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isBestseller?: boolean;
  shopifyVariantId?: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  products: string[];
  isActive: boolean;
}

export interface CartItem {
  product: Product;
  size: string;
  quantity: number;
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  content: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export interface LookbookImage {
  id: string;
  src: string;
  category: string;
  alt: string;
}

export interface SizeGuideRow {
  size: string;
  chest: { cm: number; inches: number };
  length: { cm: number; inches: number };
  shoulder: { cm: number; inches: number };
  sleeve: { cm: number; inches: number };
}
