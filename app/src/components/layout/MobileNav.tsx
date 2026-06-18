import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { mainNavigation } from '@/data/navigation';
import { AnimatedBrandMark } from '@/components/ui/AnimatedBrandMark';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[55] lg:hidden"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.25 }}
            className="fixed top-0 left-0 bottom-0 w-[86vw] max-w-sm bg-[#0D0B09] text-[#F1E9DC] z-[56] lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-10 border-b border-[#F1E9DC]/12 pb-5">
                <AnimatedBrandMark
                  className="items-start text-[#F1E9DC]"
                  markClassName="text-3xl"
                  onClick={onClose}
                />
                <button
                  onClick={onClose}
                  className="min-h-11 min-w-11 p-2 -mr-2 text-[#F1E9DC]/70 hover:text-[#F1E9DC]"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-1">
                {mainNavigation.map((item) => (
                  <div key={item.href}>
                    <Link
                      to={item.href}
                      onClick={onClose}
                      className="block border-b border-[#F1E9DC]/10 py-4 text-lg uppercase tracking-[0.1em] text-[#F1E9DC] transition-colors hover:text-[#D8C3A3]"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="pl-4 py-2 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            to={child.href}
                            onClick={onClose}
                            className="block py-2 text-sm tracking-[0.05em] text-[#F1E9DC]/65 transition-colors hover:text-[#D8C3A3]"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              <div className="mt-10 border-t border-[#F1E9DC]/10 pt-6">
                <Link
                  to="/wishlist"
                  onClick={onClose}
                  className="block py-3 text-sm uppercase tracking-[0.1em] text-[#F1E9DC]/70 transition-colors hover:text-[#D8C3A3]"
                >
                  Wishlist
                </Link>
                <Link
                  to="/cart"
                  onClick={onClose}
                  className="block py-3 text-sm uppercase tracking-[0.1em] text-[#F1E9DC]/70 transition-colors hover:text-[#D8C3A3]"
                >
                  Cart
                </Link>
              </div>

              <p className="mt-10 max-w-xs text-xs leading-6 tracking-wide text-[#F1E9DC]/45">
                Rooted in Punjab. Built for the World.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
