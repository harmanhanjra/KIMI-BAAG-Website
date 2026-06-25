import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';

const HomePage = lazy(() => import('@/pages/HomePage').then((module) => ({ default: module.HomePage })));
const ShopPage = lazy(() => import('@/pages/ShopPage').then((module) => ({ default: module.ShopPage })));
const CollectionPage = lazy(() => import('@/pages/CollectionPage').then((module) => ({ default: module.CollectionPage })));
const ProductPage = lazy(() => import('@/pages/ProductPage').then((module) => ({ default: module.ProductPage })));
const AboutPage = lazy(() => import('@/pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const StoryPage = lazy(() => import('@/pages/StoryPage').then((module) => ({ default: module.StoryPage })));
const LookbookPage = lazy(() => import('@/pages/LookbookPage').then((module) => ({ default: module.LookbookPage })));
const SizeGuidePage = lazy(() => import('@/pages/SizeGuidePage').then((module) => ({ default: module.SizeGuidePage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((module) => ({ default: module.ContactPage })));
const FAQPage = lazy(() => import('@/pages/FAQPage').then((module) => ({ default: module.FAQPage })));
const ShippingPage = lazy(() => import('@/pages/ShippingPage').then((module) => ({ default: module.ShippingPage })));
const ReturnsPage = lazy(() => import('@/pages/ReturnsPage').then((module) => ({ default: module.ReturnsPage })));
const PrivacyPage = lazy(() => import('@/pages/PrivacyPage').then((module) => ({ default: module.PrivacyPage })));
const TermsPage = lazy(() => import('@/pages/TermsPage').then((module) => ({ default: module.TermsPage })));
const TrackOrderPage = lazy(() => import('@/pages/TrackOrderPage').then((module) => ({ default: module.TrackOrderPage })));
const CartPage = lazy(() => import('@/pages/CartPage').then((module) => ({ default: module.CartPage })));
const WishlistPage = lazy(() => import('@/pages/WishlistPage').then((module) => ({ default: module.WishlistPage })));
const SearchPage = lazy(() => import('@/pages/SearchPage').then((module) => ({ default: module.SearchPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((module) => ({ default: module.NotFoundPage })));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#F1E9DC]" role="status">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-[#541F2B]/20 border-t-[#541F2B]" />
      <span className="sr-only">Loading page</span>
    </div>
  );
}

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <AnnouncementBar />
      <Header />
      <CartDrawer />
      <WhatsAppButton />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/collections/:slug" element={<CollectionPage />} />
          <Route path="/products/:slug" element={<ProductPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/story" element={<StoryPage />} />
          <Route path="/lookbook" element={<LookbookPage />} />
          <Route path="/size-guide" element={<SizeGuidePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/returns" element={<ReturnsPage />} />
          <Route path="/policies/privacy" element={<PrivacyPage />} />
          <Route path="/policies/terms" element={<TermsPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/account" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
