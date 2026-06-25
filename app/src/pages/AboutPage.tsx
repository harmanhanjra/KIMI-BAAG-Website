import { SEO } from '@/components/SEO';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { assetPath } from '@/lib/asset';

const values = [
  {
    title: 'Identity Without Imitation',
    description: 'We create original work that draws from authentic Punjabi culture, never copying trends or borrowing aesthetics that are not ours.',
  },
  {
    title: 'Culture Without Cliché',
    description: 'Our cultural references carry depth and meaning. We avoid cartoonish representations and surface-level symbolism.',
  },
  {
    title: 'Quality Without Compromise',
    description: '280 GSM heavyweight cotton. Reinforced construction. Careful embroidery. Every detail matters.',
  },
  {
    title: 'Confidence Without Noise',
    description: 'We believe true confidence does not need to shout. Our designs are bold but never obnoxious.',
  },
  {
    title: 'Growth Without Forgetting Roots',
    description: 'As we expand globally, we remain grounded in where we come from. Our roots are not a limitation—they are our foundation.',
  },
];

export function AboutPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <>
      <SEO
        title="About BAAG | Our Story & Philosophy"
        description="BAAG was created for a generation that carries its roots without allowing them to define its limits. Discover our philosophy, mission, and values."
        url="/about"
      />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        {/* Hero */}
        <section className="relative py-24 lg:py-40 overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0 text-[30vw] leading-none text-center flex items-center justify-center"
              style={{ fontFamily: "'Noto Sans Gurmukhi', sans-serif" }}
            >
              ਬਾਗ਼
            </div>
          </div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-4">
                About BAAG
              </p>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-[0.95] mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                BORN FROM PUNJAB.
                <br />
                MADE FOR EVERYWHERE.
              </h1>
              <p className="text-lg text-[#111111]/70 leading-relaxed max-w-2xl mx-auto">
                BAAG was created for a generation that carries its roots without
                allowing them to define its limits. We combine Punjabi identity,
                disciplined design and modern streetwear to create pieces that feel
                personal, powerful and globally relevant.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Philosophy */}
        <section ref={ref} className="py-20 lg:py-28 bg-white/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">
                Our Philosophy
              </p>
              <h2
                className="text-3xl sm:text-4xl font-light"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                WE DO NOT TREAT CULTURE AS DECORATION
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
              className="text-center text-[#111111]/70 leading-relaxed max-w-2xl mx-auto mb-20"
            >
              Every reference must carry meaning. Every silhouette must remain
              wearable. Every release must deserve its place. We believe that
              cultural fashion should feel authentic, not performative. Our designs
              speak to those who understand the depth behind the detail.
            </motion.p>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-center mb-20"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">
                Our Mission
              </p>
              <p className="text-xl sm:text-2xl font-light leading-relaxed max-w-3xl mx-auto"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                To build a globally recognised fashion label that represents Punjabi
                creativity with sophistication, originality and pride.
              </p>
            </motion.div>

            {/* Values */}
            <div className="space-y-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="border-l-2 border-[#541F2B] pl-6 py-2"
                >
                  <h3 className="text-lg font-medium mb-2">{value.title}</h3>
                  <p className="text-sm text-[#111111]/70 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections */}
        <section className="py-20 lg:py-28">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <img
                  src={assetPath('images/story/punjab-landscape.jpg')}
                  alt="Punjab landscape"
                  className="aspect-video object-cover rounded mb-6"
                  loading="lazy"
                />
                <h3
                  className="text-2xl font-light mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Punjab
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  The land of five rivers. A place of rich history, unbreakable
                  spirit, and boundless creativity. Punjab is not just our origin—it
                  is our ongoing inspiration. Every design carries a piece of this
                  land.
                </p>
              </div>
              <div>
                <img
                  src={assetPath('images/lookbook/detail-1.jpg')}
                  alt="Craft and embroidery detail"
                  className="aspect-video object-cover rounded mb-6"
                  loading="lazy"
                />
                <h3
                  className="text-2xl font-light mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Craft
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  We partner with skilled craftspeople across India who share our
                  commitment to quality. From high-density embroidery to precision
                  stitching, every garment is built to last and improve with wear.
                </p>
              </div>
              <div>
                <img
                  src={assetPath('images/lookbook/street-2.jpg')}
                  alt="Modern ambition"
                  className="aspect-video object-cover rounded mb-6"
                  loading="lazy"
                />
                <h3
                  className="text-2xl font-light mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Modern Ambition
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  BAAG is for the globally minded. For those building careers in
                  London, studying in Toronto, creating in Mumbai, or dreaming in
                  Chandigarh. Your roots and your ambition are not in conflict—they
                  are your power.
                </p>
              </div>
              <div>
                <img
                  src={assetPath('images/lookbook/studio-1.jpg')}
                  alt="Limited drops"
                  className="aspect-video object-cover rounded mb-6"
                  loading="lazy"
                />
                <h3
                  className="text-2xl font-light mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Limited Drops
                </h3>
                <p className="text-sm text-[#111111]/70 leading-relaxed">
                  We release in small quantities intentionally. This keeps our
                  pieces exclusive and collectible. When a drop sells out, it rarely
                  returns. Each piece becomes part of a moment in time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
