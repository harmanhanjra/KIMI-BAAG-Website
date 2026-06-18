import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export function Newsletter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // SHOPIFY CUSTOMER API INTEGRATION POINT
      // Integrate with Shopify Customer API or email service
    }
  };

  return (
    <section ref={ref} className="bg-[#0D0B09] py-20 text-[#F1E9DC] lg:py-28">
      <div className="baag-container grid gap-10 lg:grid-cols-[0.8fr_0.7fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="baag-eyebrow mb-4 text-[#B39152]">Private access</p>
          <h2 className="baag-display text-balance text-4xl font-semibold leading-[0.95] sm:text-5xl lg:text-7xl">
            Enter the BAAG before the next drop.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#F1E9DC]/68">
            Get early access, restock notes, and behind-the-label stories before
            they hit the public feed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="border border-[#F1E9DC]/14 bg-[#F1E9DC]/8 p-5 sm:p-7"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex min-h-64 flex-col items-center justify-center gap-3 text-center"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#541F2B]">
                <Check size={25} />
              </div>
              <p className="baag-display text-3xl font-semibold">Welcome to the circle.</p>
              <p className="text-sm text-[#F1E9DC]/62">You will hear from us soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="newsletter-email" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#F1E9DC]/62">
                  Email address *
                </label>
                <input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="min-h-12 w-full border border-[#F1E9DC]/20 bg-[#F1E9DC]/10 px-4 py-3 text-sm text-[#F1E9DC] outline-none transition-colors placeholder:text-[#F1E9DC]/40 focus:border-[#B39152]"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="newsletter-phone" className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-[#F1E9DC]/62">
                  Phone for WhatsApp updates
                </label>
                <input
                  id="newsletter-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="min-h-12 w-full border border-[#F1E9DC]/20 bg-[#F1E9DC]/10 px-4 py-3 text-sm text-[#F1E9DC] outline-none transition-colors placeholder:text-[#F1E9DC]/40 focus:border-[#B39152]"
                  placeholder="Optional"
                />
              </div>
              <button type="submit" className="baag-button baag-button-light w-full">
                Join The Drop List
                <ArrowRight size={16} />
              </button>
              <p className="text-xs leading-5 text-[#F1E9DC]/42">
                No spam. Just drops, stories, and first access.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
