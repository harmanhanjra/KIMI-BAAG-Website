import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface AnimatedBrandMarkProps {
  className?: string;
  markClassName?: string;
  onClick?: () => void;
  showThread?: boolean;
  to?: string;
}

const letters = ['B', 'A', 'A', 'G'];

export function AnimatedBrandMark({
  className = '',
  markClassName = '',
  onClick,
  showThread = true,
  to = '/',
}: AnimatedBrandMarkProps) {
  return (
    <Link
      to={to}
      aria-label="BAAG home"
      onClick={onClick}
      className={`group inline-flex min-h-12 flex-col items-center justify-center gap-1 ${className}`}
    >
      <span
        className={`baag-display relative flex items-center gap-1 text-3xl font-bold leading-none tracking-normal ${markClassName}`}
      >
        {letters.map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            animate={{ y: [0, -2, 0], opacity: [0.86, 1, 0.86] }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: index * 0.12,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </span>
      {showThread && (
        <motion.span
          aria-hidden="true"
          className="h-px w-12 bg-current opacity-70"
          animate={{ scaleX: [0.45, 1, 0.45], opacity: [0.35, 0.9, 0.35] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      )}
    </Link>
  );
}
