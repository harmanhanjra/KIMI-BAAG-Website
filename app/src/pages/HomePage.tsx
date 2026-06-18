import { SEO } from '@/components/SEO';
import { Hero } from '@/components/home/Hero';
import { DropProducts } from '@/components/home/DropProducts';
import { FeaturedProduct } from '@/components/home/FeaturedProduct';
import { BrandStatement } from '@/components/home/BrandStatement';
import { Newsletter } from '@/components/home/Newsletter';

export function HomePage() {
  return (
    <>
      <SEO
        title="BAAG | Rooted in Punjab. Built for the World."
        description="Premium Punjabi streetwear. Heavyweight oversized t-shirts and hoodies designed with cultural soul and modern ambition. DROP 001 now live."
        url="/"
      />
      <main>
        <Hero />
        <DropProducts />
        <FeaturedProduct />
        <BrandStatement />
        <Newsletter />
      </main>
    </>
  );
}
