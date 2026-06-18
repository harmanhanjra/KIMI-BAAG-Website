import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { lookbookImages, lookbookCategories } from '@/data/lookbook';
import { motion } from 'framer-motion';

export function LookbookPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? lookbookImages
    : lookbookImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <SEO title="Lookbook | BAAG" description="Explore the BAAG visual diary. Street, studio, Punjab, and after-dark campaign photography." url="/lookbook" />

      <main className="bg-[#111111] min-h-screen pt-20">
        {/* Hero */}
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.3em] uppercase text-[#B39152] mb-3">Visual Diary</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-[#F1E9DC]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>THE LOOKBOOK</h1>
            </motion.div>
          </div>
        </section>

        {/* Filter */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            {lookbookCategories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-[0.15em] uppercase px-5 py-2.5 transition-colors ${
                  activeCategory === cat ? 'bg-[#F1E9DC] text-[#111111]' : 'text-[#F1E9DC]/60 border border-[#F1E9DC]/20 hover:text-[#F1E9DC]'
                }`}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {filtered.map((image, index) => (
              <motion.div key={image.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.08 }} className="break-inside-avoid">
                <div className={`relative overflow-hidden rounded group ${index % 3 === 0 ? 'aspect-[3/4]' : index % 3 === 1 ? 'aspect-square' : 'aspect-[4/5]'}`}>
                  <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-xs text-white/80 tracking-[0.15em] uppercase">{image.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
