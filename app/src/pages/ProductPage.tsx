import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { getProductBySlug, getRelatedProducts } from '@/data/products';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { formatPrice, calculateDiscount } from '@/lib/format';
import { ProductCard } from '@/components/ui/ProductCard';
import { generateProductSchema } from '@/lib/seo';
import {
  Heart,
  Star,
  Truck,
  Shield,
  ChevronDown,
  Minus,
  Plus,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

type ProductImageKey = 'front' | 'back' | 'detail' | 'lifestyle';

export function ProductPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = getProductBySlug(slug || '');
  const addItem = useCartStore((s) => s.addItem);
  const { isInWishlist, toggleItem } = useWishlistStore();

  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<ProductImageKey>('front');
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F1E9DC]">
        <div className="text-center">
          <h1 className="text-2xl font-light mb-4">Product Not Found</h1>
          <Link
            to="/shop"
            className="text-[#541F2B] hover:underline text-sm"
          >
            Browse all products
          </Link>
        </div>
      </div>
    );
  }

  const inWishlist = isInWishlist(product.id);
  const discount = calculateDiscount(product.price, product.compareAtPrice);
  const relatedProducts = getRelatedProducts(product.id, 4);
  const avgRating = product.rating;
  const galleryImages = (Object.entries(product.images) as [ProductImageKey, string | undefined][])
    .filter((entry): entry is [ProductImageKey, string] => Boolean(entry[1]));

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addItem(product, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    addItem(product, selectedSize, quantity);
    // SHOPIFY CHECKOUT INTEGRATION POINT
    // window.location.href = shopifyCheckoutUrl;
  };

  const accordionItems = [
    {
      id: 'details',
      title: 'Product Details',
      content: product.fabricDetails,
    },
    {
      id: 'fit',
      title: 'Fit & Sizing',
      content:
        'Our oversized fit features dropped shoulders, a relaxed chest, and a slightly elongated body. For a true oversized look as shown in our campaign, order your regular size. If you prefer a closer fit, size down. Model is 6\'0" wearing size L.',
    },
    {
      id: 'care',
      title: 'Fabric & Care',
      content: product.careInstructions,
    },
    {
      id: 'shipping',
      title: 'Shipping & Returns',
      content:
        'Free shipping on orders above ₹1,999 within India. Delivery typically takes 4-7 business days. International shipping available. Exchanges accepted within 7 days for unworn items with tags attached.',
    },
    {
      id: 'story',
      title: 'Design Story',
      content: product.designStory,
    },
  ];

  const productSchema = generateProductSchema({
    name: product.name,
    description: product.description,
    image: product.images.front,
    price: product.price,
    currency: 'INR',
    sku: product.id,
    brand: 'BAAG',
  });

  return (
    <>
      <SEO
        title={`${product.name} | BAAG`}
        description={product.description}
        image={product.images.front}
        url={`/products/${product.slug}`}
        type="product"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs
            items={[
              { label: 'Shop', href: '/shop' },
              { label: product.name },
            ]}
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-[#111111]/5 overflow-hidden">
                <motion.img
                  key={activeImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[activeImage] || product.images.front}
                  alt={`${product.name} - ${activeImage} view`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {galleryImages.map(([key, src]) => (
                  <button
                    key={key}
                    onClick={() => setActiveImage(key)}
                    className={`min-h-24 overflow-hidden border-2 transition-colors ${
                      activeImage === key ? 'border-[#541F2B]' : 'border-transparent'
                    }`}
                    aria-label={`Show ${key} image`}
                  >
                    <img
                      src={src}
                      alt={`${product.name} ${key} thumbnail`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="lg:sticky lg:top-24 lg:self-start space-y-6">
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h1
                      className="text-2xl sm:text-3xl font-light tracking-wide"
                      style={{ fontFamily: "'Cormorant Garamond', serif" }}
                    >
                      {product.name}
                    </h1>
                    <p
                      className="text-lg text-[#541F2B] mt-1"
                      style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
                    >
                      {product.punjabiName}
                    </p>
                  </div>
                  <button
                    onClick={() => toggleItem(product.id)}
                    className={`p-2 rounded-full border transition-colors ${
                      inWishlist
                        ? 'bg-[#541F2B] border-[#541F2B] text-white'
                        : 'border-[#111111]/20 hover:border-[#111111]'
                    }`}
                    aria-label={
                      inWishlist ? 'Remove from wishlist' : 'Add to wishlist'
                    }
                  >
                    <Heart size={18} fill={inWishlist ? 'white' : 'none'} />
                  </button>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <span className="text-xl font-medium">
                    {formatPrice(product.price)}
                  </span>
                  {product.compareAtPrice && (
                    <>
                      <span className="text-sm text-[#111111]/40 line-through">
                        {formatPrice(product.compareAtPrice)}
                      </span>
                      {discount && (
                        <span className="text-xs bg-[#541F2B]/10 text-[#541F2B] px-2 py-0.5">
                          Save {discount}%
                        </span>
                      )}
                    </>
                  )}
                </div>

                <div className="flex items-center gap-2 mt-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill={i < Math.floor(avgRating) ? '#B39152' : 'none'}
                        stroke={i < Math.floor(avgRating) ? '#B39152' : '#111111/30'}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-[#111111]/60">
                    {avgRating} ({product.reviewCount} reviews)
                  </span>
                </div>
              </div>

              <p className="text-sm text-[#111111]/70 leading-relaxed">
                {product.description}
              </p>

              {/* Color */}
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#111111]/60 mb-2">
                  Color: {product.color}
                </p>
                <div
                  className="w-8 h-8 rounded-full border-2 border-[#111111]/20"
                  style={{ backgroundColor: product.colorHex }}
                />
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs tracking-[0.15em] uppercase text-[#111111]/60">
                    Select Size *
                  </p>
                  <Link
                    to="/size-guide"
                    className="text-xs text-[#541F2B] hover:underline"
                  >
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => {
                    const inStock = product.inventory[size] > 0;
                    const isLowStock = product.inventory[size] <= 3;
                    return (
                      <button
                        key={size}
                        onClick={() => inStock && setSelectedSize(size)}
                        disabled={!inStock}
                        className={`relative w-12 h-12 text-xs font-medium border transition-colors ${
                          selectedSize === size
                            ? 'bg-[#111111] text-[#F1E9DC] border-[#111111]'
                            : inStock
                            ? 'border-[#111111]/20 hover:border-[#111111]'
                            : 'border-[#111111]/10 text-[#111111]/30 cursor-not-allowed line-through'
                        }`}
                      >
                        {size}
                        {isLowStock && inStock && (
                          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#541F2B] rounded-full" />
                        )}
                      </button>
                    );
                  })}
                </div>
                {selectedSize && (
                  <p className="text-xs text-[#111111]/60 mt-2">
                    {product.inventory[selectedSize] <= 3
                      ? `Only ${product.inventory[selectedSize]} left in size ${selectedSize}`
                      : `${product.inventory[selectedSize]} in stock`}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-[#111111]/60 mb-2">
                  Quantity
                </p>
                <div className="flex items-center border border-[#111111]/20 w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 hover:bg-[#111111]/5 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="px-4 text-sm font-medium min-w-[40px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 hover:bg-[#111111]/5 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleAddToCart}
                  className="w-full py-4 bg-[#111111] text-[#F1E9DC] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#541F2B] transition-colors"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="w-full py-4 border border-[#111111] text-[#111111] text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#111111] hover:text-[#F1E9DC] transition-colors"
                >
                  Buy Now
                </button>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 py-4 border-t border-[#111111]/10">
                <div className="flex items-center gap-2 text-xs text-[#111111]/60">
                  <Truck size={16} />
                  <span>Free shipping over ₹1,999</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-[#111111]/60">
                  <Shield size={16} />
                  <span>Manual COD confirmation</span>
                </div>
              </div>

              {/* Accordions */}
              <div className="border-t border-[#111111]/10 pt-4">
                {accordionItems.map((item) => (
                  <div
                    key={item.id}
                    className="border-b border-[#111111]/10"
                  >
                    <button
                      onClick={() =>
                        setOpenAccordion(
                          openAccordion === item.id ? null : item.id
                        )
                      }
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-sm font-medium">{item.title}</span>
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          openAccordion === item.id ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {openAccordion === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-[#111111]/70 leading-relaxed pb-4">
                            {item.content}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-24">
              <h2
                className="text-2xl sm:text-3xl font-light mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                You May Also Like
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                {relatedProducts.map((p, i) => (
                  <ProductCard key={p.id} product={p} index={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
