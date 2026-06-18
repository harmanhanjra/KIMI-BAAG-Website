import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <>
      <SEO title="Page Not Found | BAAG" description="The page you are looking for does not exist. Explore our collection of premium Punjabi streetwear." url="/404" />

      <main className="bg-[#F1E9DC] min-h-screen flex items-center justify-center pt-20">
        <div className="text-center px-4">
          <p className="text-8xl sm:text-9xl font-light text-[#541F2B]/20 mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>404</p>
          <h1 className="text-2xl sm:text-3xl font-light mb-4" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Page Not Found</h1>
          <p className="text-[#111111]/60 mb-8 max-w-md mx-auto">The page you are looking for does not exist or has been moved. Explore our collection instead.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="flex items-center gap-2 px-8 py-3 bg-[#111111] text-[#F1E9DC] text-xs tracking-[0.2em] uppercase hover:bg-[#541F2B] transition-colors">
              <Home size={14} />
              Back to Home
            </Link>
            <Link to="/shop" className="flex items-center gap-2 px-8 py-3 border border-[#111111]/20 text-xs tracking-[0.2em] uppercase hover:border-[#111111] transition-colors">
              <ArrowLeft size={14} />
              Shop Collection
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
