import { Link } from 'react-router-dom';
import { X, Minus, Plus, Trash2, Truck, ShoppingBag } from 'lucide-react';
import { useCartStore, FREE_SHIPPING_THRESHOLD } from '@/store/cartStore';
import { formatPrice } from '@/lib/format';
import { motion, AnimatePresence } from 'framer-motion';

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getSubtotal,
    getItemCount,
  } = useCartStore();

  const subtotal = getSubtotal();
  const itemCount = getItemCount();
  const progressToFreeShipping = Math.min(
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
    100
  );
  const remainingForFreeShipping = Math.max(
    FREE_SHIPPING_THRESHOLD - subtotal,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black/40 z-[55]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#F1E9DC] z-[56] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#111111]/10">
              <h2
                className="text-xl tracking-[0.1em] font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                YOUR BAAG
              </h2>
              <button
                onClick={closeCart}
                className="p-2 -mr-2 hover:bg-[#111111]/5 rounded-full transition-colors"
                aria-label="Close cart"
              >
                <X size={20} />
              </button>
            </div>

            {/* Free Shipping Progress */}
            {itemCount > 0 && (
              <div className="px-6 py-4 bg-[#541F2B]/5">
                <div className="flex items-center gap-2 mb-2">
                  <Truck size={16} className="text-[#541F2B]" />
                  <p className="text-xs text-[#111111]/70">
                    {remainingForFreeShipping > 0 ? (
                      <>
                        Add{' '}
                        <span className="font-medium">
                          {formatPrice(remainingForFreeShipping)}
                        </span>{' '}
                        more for free shipping
                      </>
                    ) : (
                      <span className="text-[#541F2B] font-medium">
                        You qualify for free shipping!
                      </span>
                    )}
                  </p>
                </div>
                <div className="w-full h-1.5 bg-[#111111]/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${progressToFreeShipping}%` }}
                    transition={{ duration: 0.5 }}
                    className="h-full bg-[#541F2B] rounded-full"
                  />
                </div>
              </div>
            )}

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag size={48} className="text-[#111111]/20 mb-4" />
                  <p className="text-lg font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    Your cart is empty
                  </p>
                  <p className="text-sm text-[#111111]/60 mb-6">
                    Your next statement piece is still waiting.
                  </p>
                  <Link
                    to="/collections/drop-001"
                    onClick={closeCart}
                    className="px-8 py-3 bg-[#111111] text-[#F1E9DC] text-xs tracking-[0.15em] uppercase hover:bg-[#541F2B] transition-colors"
                  >
                    Explore Drop 001
                  </Link>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div
                      key={`${item.product.id}-${item.size}`}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex gap-4"
                    >
                      <Link
                        to={`/products/${item.product.slug}`}
                        onClick={closeCart}
                        className="w-24 h-28 bg-[#111111]/5 rounded overflow-hidden flex-shrink-0"
                      >
                        <img
                          src={item.product.images.front}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <Link
                              to={`/products/${item.product.slug}`}
                              onClick={closeCart}
                              className="text-sm font-medium tracking-wide hover:text-[#541F2B] transition-colors"
                            >
                              {item.product.name}
                            </Link>
                            <p className="text-xs text-[#111111]/60 mt-0.5">
                              {item.product.color} / Size {item.size}
                            </p>
                          </div>
                          <button
                            onClick={() =>
                              removeItem(item.product.id, item.size)
                            }
                            className="p-1 text-[#111111]/40 hover:text-red-600 transition-colors"
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-[#111111]/20 rounded">
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity - 1
                                )
                              }
                              className="p-1.5 hover:bg-[#111111]/5 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="px-2 text-xs font-medium min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(
                                  item.product.id,
                                  item.size,
                                  item.quantity + 1
                                )
                              }
                              className="p-1.5 hover:bg-[#111111]/5 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <p className="text-sm font-medium">
                            {formatPrice(item.product.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="border-t border-[#111111]/10 p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#111111]/70">Subtotal</span>
                  <span className="text-lg font-medium">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="text-xs text-[#111111]/50">
                  Delivery charge and COD eligibility are confirmed on WhatsApp.
                </p>
                <Link
                  to="/cart"
                  onClick={closeCart}
                  className="block w-full py-4 bg-[#111111] text-[#F1E9DC] text-center text-xs tracking-[0.2em] uppercase font-medium hover:bg-[#541F2B] transition-colors"
                >
                  Request Cash on Delivery
                </Link>
                <Link
                  to="/shop"
                  onClick={closeCart}
                  className="block w-full py-3 border border-[#111111]/20 text-center text-xs tracking-[0.15em] uppercase hover:border-[#111111] transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
