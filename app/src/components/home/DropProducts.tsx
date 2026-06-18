import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import { ProductCard } from '@/components/ui/ProductCard';

export function DropProducts() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="bg-[#F1E9DC] py-20 lg:py-28">
      <div className="baag-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_0.55fr] lg:items-end"
        >
          <div>
            <p className="baag-eyebrow mb-4 text-[#541F2B]">DROP 001</p>
            <h2 className="baag-display text-balance text-4xl font-semibold leading-[0.95] text-[#111111] sm:text-5xl lg:text-7xl">
              Five pieces.
              <span className="block text-[#541F2B]">No noise.</span>
            </h2>
          </div>
          <div className="space-y-5">
            <p className="text-base leading-7 text-[#111111]/68">
              Heavy cotton. Clean cuts. Gurmukhi details.
            </p>
            <Link to="/shop" className="baag-button baag-button-dark w-full sm:w-auto">
              Shop All
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
