import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { faqData, faqCategories } from '@/data/faq';
import { generateFAQSchema } from '@/lib/seo';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function FAQPage() {
  const [openId, setOpenId] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? faqData
    : faqData.filter((f) => f.category === activeCategory);

  const faqSchema = generateFAQSchema(faqData.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <>
      <SEO title="FAQ | BAAG" description="Find answers to frequently asked questions about BAAG products, sizing, shipping, returns, and more." url="/faq" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'FAQ' }]} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">Help Centre</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>FREQUENTLY ASKED QUESTIONS</h1>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {['All', ...faqCategories].map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs tracking-[0.1em] uppercase transition-colors ${activeCategory === cat ? 'bg-[#111111] text-[#F1E9DC]' : 'border border-[#111111]/20 hover:border-[#111111]'}`}>
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-0">
            {filtered.map((faq, index) => (
              <div key={index} className="border-b border-[#111111]/10">
                <button onClick={() => setOpenId(openId === index ? null : index)}
                  className="w-full flex items-center justify-between py-5 text-left">
                  <span className="text-sm sm:text-base font-medium pr-4">{faq.question}</span>
                  <ChevronDown size={18} className={`flex-shrink-0 transition-transform ${openId === index ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {openId === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden">
                      <p className="text-sm text-[#111111]/70 leading-relaxed pb-5">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
