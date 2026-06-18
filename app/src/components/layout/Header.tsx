import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { useWishlistStore } from '@/store/wishlistStore';
import { mainNavigation } from '@/data/navigation';
import { AnimatedBrandMark } from '@/components/ui/AnimatedBrandMark';
import { MobileNav } from './MobileNav';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = useCartStore((s) => s.getItemCount());
  const openCart = useCartStore((s) => s.openCart);
  const wishlistCount = useWishlistStore((s) => s.items.length);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileNavOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const isHomePage = location.pathname === '/';
  const showTransparent = isHomePage && !isScrolled;

  return (
    <>
      <header
        style={{ top: 'var(--announcement-height, 52px)' }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          showTransparent
            ? 'bg-transparent'
            : 'bg-[#F1E9DC]/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 lg:h-20 lg:grid-cols-[1fr_auto_1fr]">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileNavOpen(true)}
              className={`min-h-11 min-w-11 lg:hidden p-2 -ml-2 transition-colors ${
                showTransparent ? 'text-white' : 'text-[#111111]'
              }`}
              aria-label="Open menu"
            >
              <Menu size={22} />
            </button>

            {/* Desktop Navigation - Left */}
            <nav className="hidden lg:flex items-center gap-7 justify-self-start">
              {mainNavigation.slice(0, 3).map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors hover:text-[#541F2B] ${
                    showTransparent ? 'text-white/90' : 'text-[#111111]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="justify-self-center">
              <AnimatedBrandMark
                className={`px-4 transition-colors ${
                  showTransparent ? 'text-white' : 'text-[#111111]'
                }`}
                markClassName="text-2xl sm:text-3xl"
              />
            </div>

            <div className="flex items-center justify-end gap-4 justify-self-end">
              {/* Desktop Navigation - Right */}
              <nav className="hidden lg:flex items-center gap-7">
                {mainNavigation.slice(3).map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-xs tracking-[0.15em] uppercase font-medium transition-colors hover:text-[#541F2B] ${
                      showTransparent ? 'text-white/90' : 'text-[#111111]'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              {/* Right Icons */}
              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className={`min-h-11 min-w-11 p-2 transition-colors hover:text-[#541F2B] ${
                    showTransparent ? 'text-white/90' : 'text-[#111111]'
                  }`}
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <Link
                  to="/wishlist"
                  className={`hidden sm:flex min-h-11 min-w-11 items-center justify-center p-2 transition-colors hover:text-[#541F2B] relative ${
                    showTransparent ? 'text-white/90' : 'text-[#111111]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart size={20} />
                  {wishlistCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#541F2B] text-white text-[10px] rounded-full flex items-center justify-center">
                      {wishlistCount}
                    </span>
                  )}
                </Link>
                <button
                  onClick={openCart}
                  className={`min-h-11 min-w-11 p-2 transition-colors hover:text-[#541F2B] relative ${
                    showTransparent ? 'text-white/90' : 'text-[#111111]'
                  }`}
                  aria-label="Cart"
                >
                  <ShoppingBag size={20} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#541F2B] text-white text-[10px] rounded-full flex items-center justify-center">
                      {cartItemCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <MobileNav
        isOpen={isMobileNavOpen}
        onClose={() => setIsMobileNavOpen(false)}
      />

      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#F1E9DC]"
          >
            <div className="max-w-3xl mx-auto px-4 pt-20">
              <div className="flex items-center justify-between mb-8">
                <h2
                  className="text-2xl font-light tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Search
                </h2>
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="p-2 hover:bg-[#111111]/5 rounded-full transition-colors"
                  aria-label="Close search"
                >
                  <X size={24} />
                </button>
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const input = form.querySelector('input') as HTMLInputElement;
                  if (input.value.trim()) {
                    window.location.href = `/search?q=${encodeURIComponent(input.value.trim())}`;
                  }
                }}
              >
                <input
                  type="text"
                  name="q"
                  placeholder="Search products..."
                  autoFocus
                  className="w-full bg-transparent border-b-2 border-[#111111]/20 focus:border-[#541F2B] py-4 text-xl outline-none transition-colors placeholder:text-[#111111]/40"
                />
              </form>
              <div className="mt-12">
                <p className="text-xs uppercase tracking-[0.15em] text-[#111111]/50 mb-4">
                  Popular Searches
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Chardi Kala', 'Oversized T-Shirt', 'Drop 001', 'Punjabi Rooh'].map(
                    (term) => (
                      <Link
                        key={term}
                        to={`/search?q=${encodeURIComponent(term)}`}
                        className="px-4 py-2 bg-[#111111]/5 hover:bg-[#111111]/10 rounded-full text-sm transition-colors"
                      >
                        {term}
                      </Link>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
