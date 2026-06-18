import { useRef } from 'react';

import { motion, useInView } from 'framer-motion';
import { Star, Instagram } from 'lucide-react';

const reviews = [
  {
    name: 'Jaspreet Singh',
    location: 'Ludhiana',
    rating: 5,
    text: 'The quality is unreal. You can feel the 280 GSM weight the moment you hold it. Proud to wear something that represents our roots.',
  },
  {
    name: 'Amrit Kaur',
    location: 'London',
    rating: 5,
    text: 'Finally, a brand that understands Punjabi identity without making it look cheap. The embroidery detail is beautiful.',
  },
  {
    name: 'Harvir Gill',
    location: 'Toronto',
    rating: 5,
    text: 'Ordered the Chardi Kala tee and immediately bought two more. The fit is perfect and the message means something real.',
  },
];

export function Community() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-[#F1E9DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">
            Community
          </p>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            THE BAAG COMMUNITY
          </h2>
        </motion.div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {reviews.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/50 p-6 lg:p-8 rounded"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#B39152"
                    stroke="#B39152"
                  />
                ))}
              </div>
              <p className="text-[#111111]/80 leading-relaxed mb-6 text-sm">
                &ldquo;{review.text}&rdquo;
              </p>
              <div>
                <p className="text-sm font-medium">{review.name}</p>
                <p className="text-xs text-[#111111]/50">{review.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <a
            href="https://instagram.com/baag"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#111111]/20 hover:bg-[#111111] hover:text-[#F1E9DC] transition-colors text-xs tracking-[0.2em] uppercase"
          >
            <Instagram size={18} />
            @baag
          </a>
        </motion.div>
      </div>
    </section>
  );
}
