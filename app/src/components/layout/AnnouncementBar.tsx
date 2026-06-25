import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { announcementMessages } from '@/data/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    document.documentElement.style.setProperty(
      '--announcement-height',
      isVisible ? '40px' : '0px'
    );

    return () => {
      document.documentElement.style.setProperty('--announcement-height', '0px');
    };
  }, [isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcementMessages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] flex h-10 items-center bg-[#111111] px-4 text-[#F1E9DC]">
      <div className="max-w-7xl mx-auto text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={currentIndex}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-xs font-medium uppercase tracking-normal sm:text-sm"
          >
            {announcementMessages[currentIndex]}
          </motion.p>
        </AnimatePresence>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F1E9DC]/60 hover:text-[#F1E9DC] transition-colors"
        aria-label="Close announcement"
      >
        <X size={14} />
      </button>
    </div>
  );
}
