import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Truck, Clock, Globe, Package } from 'lucide-react';

export function ShippingPage() {
  return (
    <>
      <SEO title="Shipping & Delivery | BAAG" description="Learn about BAAG shipping options, delivery times, and tracking your order. Free shipping on orders above ₹1,999 in India." url="/shipping" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'Shipping & Delivery' }]} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">Delivery Information</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>SHIPPING & DELIVERY</h1>
          </div>

          <div className="grid sm:grid-cols-2 gap-8 mb-16">
            <div className="p-6 bg-white/30 rounded text-center">
              <Truck size={28} className="text-[#541F2B] mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">Free Shipping in India</h3>
              <p className="text-sm text-[#111111]/60">On all orders above ₹1,999. Standard delivery 4-7 business days.</p>
            </div>
            <div className="p-6 bg-white/30 rounded text-center">
              <Clock size={28} className="text-[#541F2B] mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">Express Delivery</h3>
              <p className="text-sm text-[#111111]/60">2-3 business days available at checkout for select cities.</p>
            </div>
            <div className="p-6 bg-white/30 rounded text-center">
              <Globe size={28} className="text-[#541F2B] mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">International Shipping</h3>
              <p className="text-sm text-[#111111]/60">We ship to UK, Canada, USA, Australia & Europe. 10-20 business days.</p>
            </div>
            <div className="p-6 bg-white/30 rounded text-center">
              <Package size={28} className="text-[#541F2B] mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">Order Tracking</h3>
              <p className="text-sm text-[#111111]/60">Track your order in real-time. Notifications via email and WhatsApp.</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-medium mb-4">India Shipping</h2>
              <p className="text-sm text-[#111111]/70 leading-relaxed mb-3">
                We ship to all states and union territories across India. Orders are typically processed within 1-2 business days
                and delivered within 4-7 business days depending on your location.
              </p>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Cash on delivery (COD) is available for most locations within India. A COD fee of ₹50 may apply.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">International Shipping</h2>
              <p className="text-sm text-[#111111]/70 leading-relaxed mb-3">
                We currently ship to the United Kingdom, Canada, United States, Australia, and select European countries.
                International orders are shipped via express courier and typically arrive within 10-20 business days.
              </p>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Please note that international orders may be subject to customs duties and taxes, which are the responsibility
                of the recipient. These charges vary by country.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">Order Tracking</h2>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Once your order ships, you will receive an email and WhatsApp notification with your tracking number.
                You can also track your order using our Track Order page or by logging into your account.
              </p>
            </section>

            <div className="bg-[#541F2B]/5 p-6 rounded mt-8">
              <p className="text-xs text-[#111111]/50">
                <strong>Note:</strong> Delivery times are estimates and may vary during peak seasons, sale periods, or due to
                unforeseen circumstances. We will keep you informed of any delays.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
