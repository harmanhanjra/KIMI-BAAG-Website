import { useState } from 'react';
import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import type { Product } from '@/types';
import { formatPrice, calculateDiscount } from '@/lib/format';
import { useWishlistStore } from '@/store/wishlistStore';
import { useCartStore } from '@/store/cartStore';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  index?: number;
  variant?: 'grid' | 'list';
}

export function ProductCard({ product, index = 0, variant = 'grid' }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, toggleItem } = useWishlistStore();
  const addItem = useCartStore((s) => s.addItem);
  const inWishlist = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.compareAtPrice);
  const defaultSize = product.sizes.find((size) => product.inventory[size] > 0);

  const handleQuickAdd = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (defaultSize) addItem(product, defaultSize, 1);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3), ease: 'easeOut' }}
      className="group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        to={`/products/${product.slug}`}
        className={variant === 'list' ? 'block sm:grid sm:grid-cols-[minmax(13rem,18rem)_1fr] sm:items-center sm:gap-8' : 'block'}
      >
        <div className={`relative overflow-hidden bg-[#E6DED0] ${variant === 'list' ? 'mb-4 sm:mb-0' : 'mb-4'}`}>
          <div className="aspect-[4/5] p-3 sm:p-4">
            <img
              src={isHovered && product.images.back ? product.images.back : product.images.front}
              alt={`${product.name} in ${product.color}`}
              className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.04]"
              loading="lazy"
            />
          </div>

          <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-3">
            <div className="flex flex-col gap-2">
              {product.isNew && (
                <span className="bg-[#0D0B09] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#F1E9DC]">
                  New Drop
                </span>
              )}
              {product.isBestseller && (
                <span className="bg-[#F1E9DC] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#541F2B]">
                  Best Seller
                </span>
              )}
              {discount && (
                <span className="bg-[#541F2B] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white">
                  {discount}% Off
                </span>
              )}
            </div>

            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleItem(product.id);
              }}
              className={`flex h-11 w-11 items-center justify-center rounded-full transition-colors ${
                inWishlist
                  ? 'bg-[#541F2B] text-white'
                  : 'bg-[#F1E9DC]/90 text-[#111111] hover:bg-white'
              }`}
              aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart size={17} fill={inWishlist ? 'white' : 'none'} />
            </button>
          </div>

          <div className="absolute inset-x-0 bottom-0 translate-y-0 p-3 transition-transform duration-300 md:translate-y-full md:group-hover:translate-y-0 md:group-focus-within:translate-y-0">
            <button
              onClick={handleQuickAdd}
              disabled={!defaultSize}
              className="flex min-h-12 w-full items-center justify-center gap-2 bg-[#F1E9DC] px-4 py-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#111111] shadow-lg transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <ShoppingBag size={15} />
              Quick Add {defaultSize ? defaultSize : 'Sold Out'}
            </button>
          </div>
        </div>

        <div className={`space-y-2 ${variant === 'list' ? 'sm:max-w-xl sm:py-6' : ''}`}>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold tracking-wide text-[#111111]">{product.name}</h3>
              <p className="baag-gurmukhi mt-1 text-sm text-[#541F2B]">{product.punjabiName}</p>
            </div>
            <div
              className="mt-1 h-5 w-5 shrink-0 rounded-full border border-[#111111]/15"
              style={{ backgroundColor: product.colorHex }}
              aria-label={product.color}
            />
          </div>
          <p className="text-xs text-[#111111]/58">{product.color}</p>
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold tabular-nums">{formatPrice(product.price)}</span>
            {product.compareAtPrice && (
              <span className="text-xs text-[#111111]/40 line-through tabular-nums">
                {formatPrice(product.compareAtPrice)}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
