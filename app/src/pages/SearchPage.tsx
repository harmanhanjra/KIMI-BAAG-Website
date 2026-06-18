import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [searchInput, setSearchInput] = useState(query);

  useEffect(() => {
    setSearchInput(query);
  }, [query]);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const lowerQuery = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(lowerQuery) ||
        p.punjabiName.toLowerCase().includes(lowerQuery) ||
        p.description.toLowerCase().includes(lowerQuery) ||
        p.tags.some((t) => t.toLowerCase().includes(lowerQuery)) ||
        p.color.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchParams({ q: searchInput.trim() });
    }
  };

  return (
    <>
      <SEO title={`${query ? `Search: ${query}` : 'Search'} | BAAG`} description="Search BAAG products. Find premium Punjabi streetwear including oversized t-shirts and hoodies." url="/search" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <div className="py-12 text-center">
            <h1 className="text-3xl sm:text-4xl font-light mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>SEARCH</h1>
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
              <div className="relative">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#111111]/30" />
                <input type="text" value={searchInput} onChange={(e) => setSearchInput(e.target.value)}
                  placeholder="Search products..." autoFocus
                  className="w-full pl-12 pr-4 py-4 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm" />
              </div>
            </form>
          </div>

          {query && (
            <div>
              <div className="flex items-center justify-between mb-8">
                <p className="text-sm text-[#111111]/60">
                  {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
                </p>
                {results.length > 0 && (
                  <button className="flex items-center gap-2 text-xs tracking-[0.1em] uppercase text-[#111111]/60">
                    <SlidersHorizontal size={14} />
                    Filter
                  </button>
                )}
              </div>

              {results.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-lg text-[#111111]/60 mb-2">No products found</p>
                  <p className="text-sm text-[#111111]/40">Try different keywords or browse our collection</p>
                </div>
              ) : (
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                  {results.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
