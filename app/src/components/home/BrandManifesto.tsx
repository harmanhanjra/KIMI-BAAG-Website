import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const principles = ['Mitti', 'Rooh', 'Chardi Kala'];

export function BrandManifesto() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#0D0B09] py-20 text-[#F1E9DC] lg:py-28">
      <div className="baag-container grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-end">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="baag-eyebrow mb-4 text-[#B39152]">The BAAG thesis</p>
          <h2 className="baag-display text-balance text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-7xl">
            Culture is not decoration.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="max-w-3xl"
        >
          <p className="text-lg leading-8 text-[#F1E9DC]/78">
            BAAG is made for the ones who carry home into every room they enter.
            Heavy cotton, restrained graphics, and Gurmukhi details turn Punjabi
            identity into something precise, wearable, and global.
          </p>
          <p className="baag-gurmukhi mt-7 text-2xl leading-relaxed text-[#D8C3A3] sm:text-3xl">
            ਮਿੱਟੀ ਨਾਲ ਜੁੜੇ। ਦੁਨੀਆ ਵੱਲ ਵਧਦੇ।
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {principles.map((item) => (
              <div key={item} className="border border-[#F1E9DC]/14 px-4 py-4">
                <p className="baag-display text-2xl font-semibold text-[#D8C3A3]">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
