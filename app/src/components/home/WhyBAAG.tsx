import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BadgeCheck, Gem, Layers3, MapPinned } from 'lucide-react';

const features = [
  {
    icon: Layers3,
    title: '280 GSM',
    subtitle: 'Heavyweight Cotton',
    description: 'Substantial fabric with structure, drape, and the weight expected from premium streetwear.',
  },
  {
    icon: BadgeCheck,
    title: 'Oversized',
    subtitle: 'Cut With Intention',
    description: 'Dropped shoulders, generous body, and clean proportion so relaxed never reads careless.',
  },
  {
    icon: Gem,
    title: 'Limited',
    subtitle: 'Small-Batch Drops',
    description: 'Designed to feel collected, not mass produced. Scarcity is part of the language.',
  },
  {
    icon: MapPinned,
    title: 'Punjabi',
    subtitle: 'Identity First',
    description: 'Gurmukhi and Punjabi philosophy treated as the foundation of the garment, not a graphic trend.',
  },
];

export function WhyBAAG() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="bg-[#E8DDCC] py-20 lg:py-28">
      <div className="baag-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl"
        >
          <p className="baag-eyebrow mb-4 text-[#541F2B]">Why BAAG</p>
          <h2 className="baag-display text-balance text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-7xl">
            Built like a garment.
            <span className="block text-[#541F2B]">Felt like a memory.</span>
          </h2>
        </motion.div>

        <div className="grid gap-px overflow-hidden bg-[#111111]/12 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: index * 0.07 }}
                className="bg-[#F1E9DC] p-6 lg:p-7"
              >
                <div className="mb-9 flex h-12 w-12 items-center justify-center bg-[#111111] text-[#F1E9DC]">
                  <Icon size={21} aria-hidden="true" />
                </div>
                <h3 className="baag-display text-3xl font-semibold text-[#541F2B]">{feature.title}</h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#111111]/55">
                  {feature.subtitle}
                </p>
                <p className="mt-5 text-sm leading-7 text-[#111111]/68">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
