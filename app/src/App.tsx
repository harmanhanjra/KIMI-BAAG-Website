import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/layout/CartDrawer';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';

import { HomePage } from '@/pages/HomePage';
import { ShopPage } from '@/pages/ShopPage';
import { CollectionPage } from '@/pages/CollectionPage';
import { ProductPage } from '@/pages/ProductPage';
import { AboutPage } from '@/pages/AboutPage';
import { StoryPage } from '@/pages/StoryPage';
import { LookbookPage } from '@/pages/LookbookPage';
import { SizeGuidePage } from '@/pages/SizeGuidePage';
import { ContactPage } from '@/pages/ContactPage';
import { FAQPage } from '@/pages/FAQPage';
import { ShippingPage } from '@/pages/ShippingPage';
import { ReturnsPage } from '@/pages/ReturnsPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { TermsPage } from '@/pages/TermsPage';
import { TrackOrderPage } from '@/pages/TrackOrderPage';
import { CartPage } from '@/pages/CartPage';
import { WishlistPage } from '@/pages/WishlistPage';
import { SearchPage } from '@/pages/SearchPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnnouncementBar />
      <Header />
      <CartDrawer />
      <WhatsAppButton />

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

      <Footer />
    </Router>
  );
}

export default App;
