import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const productDetails = ['280 GSM cotton', 'Antique gold embroidery', 'Oversized drop shoulder'];

export function FeaturedProduct() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="overflow-hidden bg-[#111111] py-20 text-[#F1E9DC] lg:py-28">
      <div className="baag-container grid gap-10 lg:grid-cols-[0.58fr_0.42fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="relative"
        >
          <div className="grid grid-cols-[0.72fr_0.42fr] items-end gap-3 sm:gap-5">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="/images/products/chardi-kala-front.png"
                alt="CHARDI KALA front view"
                className="h-full w-full object-contain bg-[#E6DED0] p-5"
                loading="lazy"
              />
            </div>
            <div className="space-y-3">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/products/chardi-kala-back.png"
                  alt="CHARDI KALA back view"
                  className="h-full w-full object-contain bg-[#E6DED0] p-4"
                  loading="lazy"
                />
              </div>
              <p className="baag-gurmukhi text-lg text-[#D8C3A3] sm:text-2xl">ਚੜ੍ਹਦੀ ਕਲਾ</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
          className="space-y-8"
        >
          <div>
            <p className="baag-eyebrow mb-4 text-[#B39152]">Featured</p>
            <h2 className="baag-display text-balance text-5xl font-semibold leading-[0.9] sm:text-6xl lg:text-7xl">
              Chardi Kala.
              <span className="block text-[#D8C3A3]">Always rising.</span>
            </h2>
          </div>

          <p className="max-w-lg text-base leading-8 text-[#F1E9DC]/72">
            A heavyweight tee with quiet embroidery and everyday strength.
          </p>

          <div className="grid gap-3">
            {productDetails.map((detail) => (
              <div key={detail} className="flex items-center justify-between border-b border-[#F1E9DC]/12 py-3">
                <span className="text-sm text-[#F1E9DC]/72">{detail}</span>
                <span className="h-2 w-2 bg-[#B39152]" />
              </div>
            ))}
          </div>

          <Link to="/products/chardi-kala" className="baag-button baag-button-light w-full sm:w-auto">
            Discover Chardi Kala
            <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
