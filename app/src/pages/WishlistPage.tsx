import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { useWishlistStore } from '@/store/wishlistStore';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export function WishlistPage() {
  const { items, clearWishlist } = useWishlistStore();
  const wishlistProducts = products.filter((p) => items.includes(p.id));

  return (
    <>
      <SEO title="Your Wishlist | BAAG" description="Save your favourite BAAG pieces for later. Premium Punjabi streetwear." url="/wishlist" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'Wishlist' }]} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl sm:text-4xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>WISHLIST</h1>
            {items.length > 0 && (
              <button onClick={clearWishlist} className="text-xs text-[#111111]/50 hover:text-[#111111] transition-colors">
                Clear All
              </button>
            )}
          </div>

          {wishlistProducts.length === 0 ? (
            <div className="text-center py-20">
              <Heart size={64} className="text-[#111111]/20 mx-auto mb-6" />
              <h2 className="text-2xl font-light mb-3" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Your wishlist is empty</h2>
              <p className="text-[#111111]/60 mb-8">Save pieces you love for quick access later.</p>
              <Link to="/shop" className="inline-block px-10 py-4 bg-[#111111] text-[#F1E9DC] text-xs tracking-[0.2em] uppercase hover:bg-[#541F2B] transition-colors">
                Browse Collection
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {wishlistProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
