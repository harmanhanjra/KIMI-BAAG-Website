import { SEO } from '@/components/SEO';
import { assetPath } from '@/lib/asset';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  { year: '2024', title: 'The Seed', description: 'BAAG was conceived in Punjab—a vision to create fashion that carries cultural identity with modern sophistication.' },
  { year: '2025', title: 'The Craft', description: 'Months of fabric testing, silhouette refinement, and partnership building with ethical manufacturers across India.' },
  { year: '2026', title: 'DROP 001', description: 'Our debut collection launches. Five pieces. Five stories. The beginning of a global movement rooted in Punjabi identity.' },
];

export function StoryPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <SEO title="Our Story | BAAG" description="From Punjab to the world. Discover the journey behind BAAG and the vision that drives us forward." url="/story" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        {/* Hero */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img src={assetPath('images/story/punjab-landscape.jpg')} alt="Punjab at golden hour" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute inset-0 flex items-end pb-16 px-4 sm:px-6">
            <div className="max-w-7xl mx-auto w-full">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <p className="text-xs tracking-[0.3em] uppercase text-white/70 mb-3">Our Story</p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  ROOTED IN PUNJAB.
                  <br />
                  BUILT FOR THE WORLD.
                </h1>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center space-y-6">
              <p className="text-lg sm:text-xl leading-relaxed text-[#111111]/80">
                BAAG began with a simple observation: the world is full of streetwear brands, but none that spoke to our identity as Punjabis in a way that felt sophisticated, modern, and genuinely ours.
              </p>
              <p className="text-lg sm:text-xl leading-relaxed text-[#111111]/80">
                We saw brands borrowing from South Asian aesthetics without understanding them. We saw Punjabi fashion trapped between traditional costume and generic western wear. We believed there was a middle ground—clothing that carries cultural depth while competing on the global stage.
              </p>
              <p className="text-2xl sm:text-3xl text-[#541F2B] mt-8" style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}>
                ਪੰਜਾਬ ਤੋਂ ਦੁਨੀਆ ਤੱਕ
              </p>
              <p className="text-sm text-[#111111]/60 italic">From Punjab to the world.</p>
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section ref={ref} className="py-20 lg:py-28 bg-white/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
              <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">Timeline</p>
              <h2 className="text-3xl sm:text-4xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>THE JOURNEY SO FAR</h2>
            </motion.div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div key={milestone.year} initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 + index * 0.15 }} className="flex gap-6 sm:gap-10">
                  <div className="flex-shrink-0 w-16 sm:w-24">
                    <span className="text-2xl sm:text-3xl font-light text-[#541F2B]" style={{ fontFamily: "'Cormorant Garamond', serif" }}>{milestone.year}</span>
                  </div>
                  <div className="border-l-2 border-[#541F2B]/20 pl-6 sm:pl-10 pb-4">
                    <h3 className="text-lg font-medium mb-2">{milestone.title}</h3>
                    <p className="text-sm text-[#111111]/70 leading-relaxed">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Future */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">Looking Ahead</p>
              <h2 className="text-3xl sm:text-4xl font-light mb-8" style={{ fontFamily: "'Cormorant Garamond', serif" }}>THE FUTURE OF BAAG</h2>
              <p className="text-[#111111]/70 leading-relaxed max-w-2xl mx-auto mb-6">
                This is only the beginning. We envision BAAG becoming a globally recognized label that represents Punjabi creativity at the highest level. Future drops will expand into hoodies, accessories, and collaborative pieces.
              </p>
              <p className="text-[#111111]/70 leading-relaxed max-w-2xl mx-auto">
                We are building community, not just customers. Through our drops, events, and digital presence, we aim to create a space where Punjabi identity is celebrated with sophistication and pride.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
