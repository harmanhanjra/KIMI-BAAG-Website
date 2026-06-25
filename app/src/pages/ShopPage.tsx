import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProductCard } from '@/components/ui/ProductCard';
import { products } from '@/data/products';
import { SlidersHorizontal, Grid3X3, LayoutList, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const sortOptions = [
  { value: 'featured', label: 'Featured' },
  { value: 'newest', label: 'Newest' },
  { value: 'price-low', label: 'Price: Low to High' },
  { value: 'price-high', label: 'Price: High to Low' },
  { value: 'bestselling', label: 'Best Selling' },
];

const filters = {
  category: ['t-shirts', 'hoodies'],
  color: ['Washed Cream', 'Washed Black', 'Wine Burgundy', 'Earth Olive', 'Deep Black'],
  size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  price: ['Under ₹1,500', '₹1,500 - ₹2,000', 'Over ₹2,000'],
};

export function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);
  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const categoryParam = searchParams.get('category');

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Category filter from URL
    if (categoryParam) {
      result = result.filter((p) => p.category === categoryParam);
    }

    // Active filters
    Object.entries(activeFilters).forEach(([type, values]) => {
      if (values.length === 0) return;
      if (type === 'category') {
        result = result.filter((p) => values.includes(p.category));
      } else if (type === 'color') {
        result = result.filter((p) => values.includes(p.color));
      } else if (type === 'size') {
        result = result.filter((p) => values.some((s) => p.sizes.includes(s)));
      } else if (type === 'price') {
        result = result.filter((p) => {
          return values.some((range) => {
            if (range === 'Under ₹1,500') return p.price < 1500;
            if (range === '₹1,500 - ₹2,000') return p.price >= 1500 && p.price <= 2000;
            if (range === 'Over ₹2,000') return p.price > 2000;
            return true;
          });
        });
      }
    });

    // Sort
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'bestselling':
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      default:
        break;
    }

    return result;
  }, [categoryParam, activeFilters, sortBy]);

  const toggleFilter = (type: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[type] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [type]: updated };
    });
  };

  const clearFilters = () => {
    setActiveFilters({});
    setSearchParams({});
  };

  const activeFilterCount = Object.values(activeFilters).flat().length;

  const pageTitle = categoryParam
    ? categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1)
    : 'Shop All';

  return (
    <>
      <SEO
        title={`${pageTitle} | BAAG`}
        description="Browse our premium Punjabi streetwear collection. Heavyweight oversized t-shirts and hoodies designed with cultural soul."
        url={categoryParam ? `/shop?category=${categoryParam}` : '/shop'}
      />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs
            items={[{ label: categoryParam ? pageTitle : 'Shop All' }]}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <h1
                className="text-3xl sm:text-4xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                {pageTitle}
              </h1>
              <p className="text-sm text-[#111111]/60 mt-1">
                {filteredProducts.length} products
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:justify-end">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex min-h-11 items-center gap-2 border border-[#111111]/20 px-4 py-2 text-xs uppercase tracking-[0.15em] transition-colors hover:border-[#111111]"
              >
                <SlidersHorizontal size={14} />
                Filters
                {activeFilterCount > 0 && (
                  <span className="w-5 h-5 bg-[#541F2B] text-white text-[10px] rounded-full flex items-center justify-center">
                    {activeFilterCount}
                  </span>
                )}
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                aria-label="Sort products"
                className="min-h-11 min-w-0 flex-1 border border-[#111111]/20 bg-transparent px-3 py-2 text-xs tracking-wide outline-none sm:flex-none sm:px-4"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <div className="hidden sm:flex border border-[#111111]/20">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-[#111111] text-[#F1E9DC]' : ''}`}
                >
                  <Grid3X3 size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-[#111111] text-[#F1E9DC]' : ''}`}
                >
                  <LayoutList size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Active Filter Chips */}
          {activeFilterCount > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(activeFilters).map(([type, values]) =>
                values.map((value) => (
                  <button
                    key={`${type}-${value}`}
                    onClick={() => toggleFilter(type, value)}
                    className="flex items-center gap-1 px-3 py-1.5 bg-[#111111]/5 text-xs hover:bg-[#111111]/10 transition-colors"
                  >
                    {value}
                    <X size={12} />
                  </button>
                ))
              )}
              <button
                onClick={clearFilters}
                className="text-xs text-[#541F2B] hover:underline px-2"
              >
                Clear all
              </button>
            </div>
          )}

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden mb-8"
              >
                <div className="border border-[#111111]/10 p-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {Object.entries(filters).map(([type, values]) => (
                    <div key={type}>
                      <p className="text-xs tracking-[0.15em] uppercase text-[#111111]/60 mb-3">
                        {type}
                      </p>
                      <div className="space-y-2">
                        {values.map((value) => (
                          <label
                            key={value}
                            className="flex items-center gap-2 text-sm cursor-pointer"
                          >
                            <input
                              type="checkbox"
                              checked={
                                activeFilters[type]?.includes(value) || false
                              }
                              onChange={() => toggleFilter(type, value)}
                              className="rounded border-[#111111]/30"
                            />
                            <span className="capitalize">{value}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg text-[#111111]/60 mb-4">
                No products match your filters.
              </p>
              <button
                onClick={clearFilters}
                className="text-[#541F2B] hover:underline text-sm"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div
              className={`grid gap-4 sm:gap-6 ${
                viewMode === 'grid'
                  ? 'grid-cols-2 lg:grid-cols-3'
                  : 'grid-cols-1'
              }`}
            >
              {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                    variant={viewMode}
                  />
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}
