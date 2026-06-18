import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function BrandStatement() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative overflow-hidden bg-[#541F2B] py-28 text-[#F1E9DC] lg:py-40">
      <div
        className="baag-gurmukhi absolute inset-0 flex items-center justify-center text-[24vw] leading-none text-[#F1E9DC]/5"
        aria-hidden="true"
      >
        ਰੂਹ ਪੰਜਾਬੀ
      </div>
      <div className="baag-container relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.45 }}
          className="baag-eyebrow mb-6 text-[#D8C3A3]"
        >
          The line we stand on
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="baag-display mx-auto max-w-6xl text-balance text-5xl font-semibold leading-[0.88] sm:text-7xl lg:text-8xl"
        >
          Punjabi by soul.
          <span className="block text-[#D8C3A3]">Global by design.</span>
        </motion.h2>
      </div>
    </section>
  );
}
