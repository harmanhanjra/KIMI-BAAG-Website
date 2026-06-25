import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { assetPath } from '@/lib/asset';

const threads = [
  'top-[12%] left-[-12%] w-[62%] rotate-[8deg] delay-0',
  'top-[28%] right-[-18%] w-[72%] rotate-[-10deg] delay-200',
  'top-[48%] left-[-22%] w-[82%] rotate-[3deg] delay-500',
  'bottom-[22%] right-[-14%] w-[64%] rotate-[13deg] delay-700',
  'bottom-[10%] left-[-18%] w-[78%] rotate-[-7deg] delay-1000',
];

const floatingWords = ['ਮਿੱਟੀ', 'ਰੂਹ', 'ਚੜ੍ਹਦੀ ਕਲਾ'];

export function Hero() {
  return (
    <section className="relative min-h-[calc(100svh-2.5rem)] overflow-hidden bg-[#0D0B09] text-[#F1E9DC]">
      <div className="baag-animated-hero absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 baag-fabric-grid" />
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#0D0B09] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0D0B09] to-transparent" />

        {threads.map((thread) => (
          <span key={thread} className={`baag-thread absolute ${thread}`} />
        ))}

        <motion.div
          className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#D8C3A3]/14"
          animate={{ rotate: 360 }}
          transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 border border-[#541F2B]/35"
          animate={{ rotate: -360 }}
          transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
        />

        <div className="baag-kinetic-track absolute left-0 right-0 top-[18%] whitespace-nowrap text-[#F1E9DC]/[0.045]">
          <span>ROOTED IN PUNJAB / BUILT FOR THE WORLD / </span>
          <span>ROOTED IN PUNJAB / BUILT FOR THE WORLD / </span>
        </div>

        <div className="absolute bottom-10 right-4 hidden w-80 grid-cols-2 gap-3 lg:grid">
          {floatingWords.map((word, index) => (
            <motion.div
              key={word}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 0.5, delay: 0.5 + index * 0.1 },
                y: { duration: 4 + index * 0.35, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="baag-gurmukhi border border-[#F1E9DC]/10 bg-[#F1E9DC]/[0.035] px-4 py-3 text-center text-lg text-[#D8C3A3]/80 backdrop-blur-sm"
            >
              {word}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative z-10 baag-container flex min-h-[calc(100svh-2.5rem)] flex-col pb-8 pt-24 sm:pt-28 lg:pt-24">
        <div className="grid flex-1 items-center gap-10 py-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(24rem,0.58fr)] lg:py-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-4xl"
          >
            <p className="baag-eyebrow mb-5 text-[#D8C3A3]">
              DROP 001
            </p>
            <h1 className="baag-display max-w-4xl text-balance text-5xl font-semibold leading-[0.9] sm:text-7xl lg:text-8xl xl:text-[6.6rem]">
              Rooted in Punjab.
              <span className="block text-[#D8C3A3]">Built for the world.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#F1E9DC]/72">
              Premium Punjabi streetwear. Heavyweight craft, cultural soul.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/collections/drop-001" className="baag-button baag-button-light">
                Shop Drop 001
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/story"
                className="baag-button baag-button-outline border-[#F1E9DC]/35 text-[#F1E9DC] hover:bg-[#F1E9DC]/10"
              >
                Read The Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.18, ease: 'easeOut' }}
            className="mx-auto w-full max-w-md lg:block"
          >
            <div className="relative overflow-hidden border border-[#F1E9DC]/14 bg-[#F1E9DC]/8 p-5 backdrop-blur-md">
              <motion.div
                className="absolute left-5 top-5 h-24 w-2 bg-[#B39152]"
                animate={{ y: [0, 18, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <div className="aspect-[4/5] bg-[#E6DED0] p-5 sm:p-6">
                <img
                  src={assetPath('images/products/chardi-kala-front.png')}
                  alt="Chardi Kala BAAG t-shirt"
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <div>
                  <p className="baag-display text-2xl font-semibold sm:text-3xl">Chardi Kala</p>
                  <p className="baag-gurmukhi mt-1 text-[#D8C3A3]">ਚੜ੍ਹਦੀ ਕਲਾ</p>
                </div>
                <Link to="/products/chardi-kala" className="baag-button baag-button-light">
                  View
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown size={24} className="text-[#F1E9DC]/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
