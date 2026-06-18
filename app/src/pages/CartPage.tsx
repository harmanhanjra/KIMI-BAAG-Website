import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { useCartStore, FREE_SHIPPING_THRESHOLD } from '@/store/cartStore';
import { formatPrice } from '@/lib/format';
import { submitCodOrder, type CodCustomer } from '@/lib/codOrder';
import { Minus, Plus, Trash2, ShoppingBag, Truck, ArrowRight, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export function CartPage() {
  const { items, updateQuantity, removeItem, getSubtotal, getItemCount, clearCart } = useCartStore();
  const [checkoutMessage, setCheckoutMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [customer, setCustomer] = useState<CodCustomer>({ name: '', phone: '', address: '', city: '', state: '', postalCode: '' });

  const subtotal = getSubtotal();
  const itemCount = getItemCount();
  const progressToFreeShipping = Math.min((subtotal / FREE_SHIPPING_THRESHOLD) * 100, 100);
  const handleCheckout = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCheckoutMessage('');
    setIsProcessing(true);

    try {
      const result = await submitCodOrder(customer, items, subtotal);
      setCheckoutMessage(result.capturedByNetlify ? `Order request ${result.orderReference} saved. Opening WhatsApp...` : 'Opening WhatsApp. Please send the prepared message to complete your request.');
    } catch (error) {
      setCheckoutMessage(error instanceof Error ? error.message : 'The COD request could not be prepared.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <>
      <SEO title="Your Cart | BAAG" description="Review your BAAG cart and request cash on delivery through WhatsApp." url="/cart" />

      <main className="min-h-screen bg-[#F1E9DC] pt-20">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Breadcrumbs items={[{ label: 'Cart' }]} />
        </div>

        <div className="mx-auto max-w-7xl px-4 pb-24 sm:px-6">
          <h1 className="baag-display mb-8 text-3xl font-light sm:text-4xl">Your BAAG</h1>

          {items.length === 0 ? (
            <div className="py-20 text-center">
              <ShoppingBag size={64} className="mx-auto mb-6 text-[#111111]/20" />
              <h2 className="baag-display mb-3 text-2xl font-light">Your cart is empty</h2>
              <p className="mb-8 text-[#111111]/60">
                {checkoutMessage || 'Your next statement piece is still waiting.'}
              </p>
              <Link to="/collections/drop-001" className="inline-block bg-[#111111] px-10 py-4 text-xs font-medium uppercase tracking-normal text-[#F1E9DC] transition-colors hover:bg-[#541F2B]">
                Explore Drop 001
              </Link>
            </div>
          ) : (
            <div className="grid gap-12 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                {itemCount > 0 && (
                  <div className="flex items-center gap-3 rounded bg-[#541F2B]/5 p-4">
                    <Truck size={18} className="text-[#541F2B]" />
                    <div className="flex-1">
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#111111]/10">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${progressToFreeShipping}%` }}
                          transition={{ duration: 0.5 }}
                          className="h-full rounded-full bg-[#541F2B]"
                        />
                      </div>
                    </div>
                    <span className="text-xs text-[#111111]/60">
                      {subtotal >= FREE_SHIPPING_THRESHOLD ? 'Free shipping!' : `${formatPrice(FREE_SHIPPING_THRESHOLD - subtotal)} more`}
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  {items.map((item) => (
                    <motion.div key={`${item.product.id}-${item.size}`} layout className="flex gap-4 border-b border-[#111111]/10 pb-6 sm:gap-6">
                      <Link to={`/products/${item.product.slug}`} className="h-32 w-24 flex-shrink-0 overflow-hidden rounded bg-[#E6DED0] p-2 sm:h-40 sm:w-32">
                        <img src={item.product.images.front} alt={item.product.name} className="h-full w-full object-contain" />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <Link to={`/products/${item.product.slug}`} className="text-base font-medium transition-colors hover:text-[#541F2B]">
                              {item.product.name}
                            </Link>
                            <p className="mt-1 text-xs text-[#111111]/60">{item.product.color} / Size {item.size}</p>
                          </div>
                          <button onClick={() => removeItem(item.product.id, item.size)} className="p-1 text-[#111111]/40 transition-colors hover:text-red-600" aria-label={`Remove ${item.product.name}`}>
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center border border-[#111111]/20">
                            <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)} className="p-2 hover:bg-[#111111]/5" aria-label="Decrease quantity">
                              <Minus size={14} />
                            </button>
                            <span className="min-w-[32px] px-3 text-center text-sm">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)} className="p-2 hover:bg-[#111111]/5" aria-label="Increase quantity">
                              <Plus size={14} />
                            </button>
                          </div>
                          <p className="text-sm font-medium">{formatPrice(item.product.price * item.quantity)}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4">
                  <Link to="/shop" className="flex items-center gap-2 text-xs uppercase tracking-normal text-[#541F2B] hover:underline">
                    <ArrowRight size={14} className="rotate-180" />
                    Continue Shopping
                  </Link>
                  <button onClick={clearCart} className="text-xs text-[#111111]/50 transition-colors hover:text-[#111111]">
                    Clear Cart
                  </button>
                </div>
              </div>

              <div className="lg:sticky lg:top-24 lg:self-start">
                <div className="rounded bg-white/35 p-6">
                  <h2 className="mb-6 text-lg font-medium">Order Summary</h2>
                  <div className="mb-6 space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-[#111111]/60">Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-[#111111]/60">Shipping</span>
                      <span>Confirmed on WhatsApp</span>
                    </div>
                  </div>
                  <div className="mb-6 border-t border-[#111111]/10 pt-4">
                    <div className="flex justify-between">
                      <span className="font-medium">Total</span>
                      <span className="text-lg font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <p className="mt-1 text-xs text-[#111111]/50">Final total and delivery charge are confirmed before the COD order is accepted.</p>
                  </div>

                  <div className="mb-6 border border-[#111111]/10 bg-[#F1E9DC]/70 p-4">
                    <div className="mb-2 flex items-center gap-2 text-[#541F2B]">
                      <MessageCircle size={18} />
                      <p className="text-xs font-semibold uppercase tracking-normal">Cash on delivery request</p>
                    </div>
                    <p className="text-sm leading-6 text-[#111111]/65">
                      Submit your details to Netlify Forms and send the prepared order to BAAG on WhatsApp. No card payment is collected.
                    </p>
                  </div>
                  <form name="baag-cod-order" data-netlify="true" onSubmit={handleCheckout} className="space-y-3">
                    <input type="hidden" name="form-name" value="baag-cod-order" />
                    <input required aria-label="Full name" placeholder="Full name" value={customer.name} onChange={(e) => setCustomer({ ...customer, name: e.target.value })} className="min-h-12 w-full border border-[#111111]/20 bg-[#F1E9DC] px-3 text-sm" />
                    <input required type="tel" aria-label="Phone number" placeholder="Phone number" value={customer.phone} onChange={(e) => setCustomer({ ...customer, phone: e.target.value })} className="min-h-12 w-full border border-[#111111]/20 bg-[#F1E9DC] px-3 text-sm" />
                    <textarea required aria-label="Delivery address" placeholder="Delivery address" rows={3} value={customer.address} onChange={(e) => setCustomer({ ...customer, address: e.target.value })} className="w-full border border-[#111111]/20 bg-[#F1E9DC] p-3 text-sm" />
                    <div className="grid grid-cols-2 gap-3">
                      <input required aria-label="City" placeholder="City" value={customer.city} onChange={(e) => setCustomer({ ...customer, city: e.target.value })} className="min-h-12 border border-[#111111]/20 bg-[#F1E9DC] px-3 text-sm" />
                      <input required aria-label="State" placeholder="State" value={customer.state} onChange={(e) => setCustomer({ ...customer, state: e.target.value })} className="min-h-12 border border-[#111111]/20 bg-[#F1E9DC] px-3 text-sm" />
                    </div>
                    <input required inputMode="numeric" aria-label="Postal code" placeholder="Postal code" value={customer.postalCode} onChange={(e) => setCustomer({ ...customer, postalCode: e.target.value })} className="min-h-12 w-full border border-[#111111]/20 bg-[#F1E9DC] px-3 text-sm" />
                    <label className="flex items-start gap-2 text-xs leading-5 text-[#111111]/65">
                      <input required type="checkbox" className="mt-1" />
                      <span>I agree to send my order and delivery details to BAAG through Netlify Forms and WhatsApp for manual COD confirmation.</span>
                    </label>
                    <button disabled={isProcessing} className="w-full bg-[#111111] py-4 text-xs font-medium uppercase tracking-normal text-[#F1E9DC] transition-colors hover:bg-[#541F2B] disabled:cursor-not-allowed disabled:opacity-60">
                      {isProcessing ? 'Preparing order...' : 'Request COD on WhatsApp'}
                    </button>
                    {checkoutMessage && <p className="text-center text-xs leading-5 text-[#541F2B]">{checkoutMessage}</p>}
                  </form>
                  <p className="mt-4 text-center text-xs text-[#111111]/40">An order is confirmed only after BAAG replies on WhatsApp.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
