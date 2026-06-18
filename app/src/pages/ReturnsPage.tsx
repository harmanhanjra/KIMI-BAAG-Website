import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { RefreshCw, CheckCircle, XCircle, Clock } from 'lucide-react';

export function ReturnsPage() {
  return (
    <>
      <SEO title="Returns & Exchanges | BAAG" description="Learn about BAAG return and exchange policies. Size exchanges accepted within 7 days for unworn items with tags attached." url="/returns" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'Returns & Exchanges' }]} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">Returns Policy</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>RETURNS & EXCHANGES</h1>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            <div className="text-center p-6">
              <Clock size={28} className="text-[#541F2B] mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">7-Day Window</h3>
              <p className="text-xs text-[#111111]/60">Request a return or exchange within 7 days of delivery.</p>
            </div>
            <div className="text-center p-6">
              <RefreshCw size={28} className="text-[#541F2B] mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">Size Exchanges</h3>
              <p className="text-xs text-[#111111]/60">Exchange for a different size, subject to availability.</p>
            </div>
            <div className="text-center p-6">
              <CheckCircle size={28} className="text-[#541F2B] mx-auto mb-4" />
              <h3 className="text-sm font-medium mb-2">Easy Process</h3>
              <p className="text-xs text-[#111111]/60">Simple online return initiation with pickup service.</p>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-medium mb-4">Exchange Policy</h2>
              <p className="text-sm text-[#111111]/70 leading-relaxed mb-3">
                We accept size exchanges within 7 days of delivery. The item must be unworn, unwashed, and in its original
                condition with all tags attached. To initiate an exchange, please contact our customer service team or use
                the returns portal in your account.
              </p>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Exchanges are subject to stock availability. If your requested size is unavailable, we will issue a
                store credit or refund.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">Return Conditions</h2>
              <ul className="space-y-3">
                {[
                  'Item must be unworn, unwashed, and unworn',
                  'All original tags must be attached',
                  'Item must be in original packaging',
                  'Return request must be made within 7 days of delivery',
                  'Sale items are final sale and cannot be returned',
                ].map((condition) => (
                  <li key={condition} className="flex items-start gap-3 text-sm text-[#111111]/70">
                    <CheckCircle size={16} className="text-[#541F2B] flex-shrink-0 mt-0.5" />
                    {condition}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">Non-Returnable Items</h2>
              <ul className="space-y-3">
                {[
                  'Items worn, washed, or altered',
                  'Items without original tags',
                  'Sale or discounted items marked as final sale',
                  'Accessories and underwear for hygiene reasons',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-[#111111]/70">
                    <XCircle size={16} className="text-[#541F2B] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-medium mb-4">Refund Process</h2>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Once we receive and inspect your return, we will process your refund within 5-7 business days.
                Refunds will be issued to the original payment method. For COD orders, refunds will be processed
                via bank transfer.
              </p>
            </section>

            <div className="bg-[#541F2B]/5 p-6 rounded mt-8">
              <p className="text-xs text-[#111111]/50">
                <strong>Note:</strong> Return shipping costs are the responsibility of the customer unless the item
                was defective or incorrectly sent. We recommend using a trackable shipping service.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
