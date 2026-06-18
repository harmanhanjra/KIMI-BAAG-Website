import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { lookbookImages, lookbookCategories } from '@/data/lookbook';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Lookbook() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === 'All'
      ? lookbookImages
      : lookbookImages.filter((img) => img.category === activeCategory);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-10"
        >
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[#B39152] mb-3">
              Visual Diary
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#F1E9DC]"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              THE LOOKBOOK
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 border border-[#F1E9DC]/20 text-[#F1E9DC]/60 hover:border-[#F1E9DC] hover:text-[#F1E9DC] flex items-center justify-center transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 border border-[#F1E9DC]/20 text-[#F1E9DC]/60 hover:border-[#F1E9DC] hover:text-[#F1E9DC] flex items-center justify-center transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex gap-3 mb-8 overflow-x-auto pb-2"
        >
          {lookbookCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs tracking-[0.15em] uppercase whitespace-nowrap px-4 py-2 transition-colors ${
                activeCategory === cat
                  ? 'bg-[#F1E9DC] text-[#111111]'
                  : 'text-[#F1E9DC]/60 hover:text-[#F1E9DC] border border-[#F1E9DC]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Horizontal Scroll Gallery */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {filtered.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] sm:w-[400px] snap-start"
            >
              <div className="aspect-[3/4] rounded overflow-hidden bg-[#F1E9DC]/10">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-[#F1E9DC]/50 mt-3 tracking-wide uppercase">
                {image.category}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/lookbook"
            className="inline-block px-10 py-4 border border-[#F1E9DC]/30 text-[#F1E9DC] text-xs tracking-[0.2em] uppercase hover:bg-[#F1E9DC] hover:text-[#111111] transition-colors"
          >
            View The Lookbook
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
