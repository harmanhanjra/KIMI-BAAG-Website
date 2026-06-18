import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Search, Package, Truck, CheckCircle } from 'lucide-react';

export function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [tracked, setTracked] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // SHOPIFY ORDER API INTEGRATION POINT
    // Integrate with Shopify Order API to fetch real tracking data
    setTracked(true);
  };

  const trackingSteps = [
    { status: 'completed', label: 'Order Placed', date: '15 Jan 2026' },
    { status: 'completed', label: 'Order Processed', date: '16 Jan 2026' },
    { status: 'completed', label: 'Shipped', date: '17 Jan 2026' },
    { status: 'current', label: 'In Transit', date: 'Expected 20 Jan 2026' },
    { status: 'pending', label: 'Delivered', date: '' },
  ];

  return (
    <>
      <SEO title="Track Your Order | BAAG" description="Track your BAAG order in real-time. Enter your order number and email to get started." url="/track-order" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'Track Order' }]} />
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">Order Tracking</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>TRACK YOUR ORDER</h1>
          </div>

          {!tracked ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-xs tracking-[0.1em] uppercase text-[#111111]/60 mb-2">Order Number *</label>
                <div className="relative">
                  <Package size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#111111]/30" />
                  <input type="text" required value={orderNumber} onChange={(e) => setOrderNumber(e.target.value)}
                    placeholder="e.g., BAAG-001234" className="w-full pl-12 pr-4 py-3 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs tracking-[0.1em] uppercase text-[#111111]/60 mb-2">Email *</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm" />
              </div>
              <button type="submit" className="w-full py-4 bg-[#111111] text-[#F1E9DC] text-xs tracking-[0.2em] uppercase hover:bg-[#541F2B] transition-colors flex items-center justify-center gap-2">
                <Search size={16} />
                Track Order
              </button>
            </form>
          ) : (
            <div>
              <div className="bg-white/50 p-6 rounded mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-[#111111]/60">Order Number</p>
                    <p className="text-sm font-medium">{orderNumber || 'BAAG-001234'}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#111111]/60">Status</p>
                    <p className="text-sm font-medium text-[#541F2B]">In Transit</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-[#111111]/60">
                  <span>Placed: 15 Jan 2026</span>
                  <span>Est. Delivery: 20 Jan 2026</span>
                </div>
              </div>

              {/* Tracking Steps */}
              <div className="space-y-0">
                {trackingSteps.map((step, index) => (
                  <div key={step.label} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step.status === 'completed' ? 'bg-[#541F2B] text-white' :
                        step.status === 'current' ? 'bg-[#541F2B]/20 text-[#541F2B] border-2 border-[#541F2B]' :
                        'bg-[#111111]/10 text-[#111111]/30'
                      }`}>
                        {step.status === 'completed' ? <CheckCircle size={16} /> :
                         step.status === 'current' ? <Truck size={16} /> :
                         <div className="w-2 h-2 rounded-full bg-[#111111]/30" />}
                      </div>
                      {index < trackingSteps.length - 1 && (
                        <div className={`w-0.5 h-10 ${step.status === 'completed' ? 'bg-[#541F2B]' : 'bg-[#111111]/10'}`} />
                      )}
                    </div>
                    <div className="pt-1 pb-8">
                      <p className={`text-sm font-medium ${step.status === 'pending' ? 'text-[#111111]/40' : ''}`}>{step.label}</p>
                      {step.date && <p className="text-xs text-[#111111]/50 mt-0.5">{step.date}</p>}
                    </div>
                  </div>
                ))}
              </div>

              <button onClick={() => setTracked(false)}
                className="mt-4 text-xs text-[#541F2B] hover:underline tracking-wide">
                Track another order
              </button>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
