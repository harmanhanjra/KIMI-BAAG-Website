import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export function TermsPage() {
  return (
    <>
      <SEO title="Terms & Conditions | BAAG" description="Read the terms and conditions for using the BAAG website and purchasing our products." url="/policies/terms" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>TERMS & CONDITIONS</h1>
            <p className="text-sm text-[#111111]/60 mt-3">Last updated: January 2026</p>
          </div>

          <div className="space-y-8 text-sm text-[#111111]/70 leading-relaxed">
            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">1. Overview</h2>
              <p>This website is operated by BAAG. Throughout the site, the terms &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to BAAG. By visiting our site and/or purchasing something from us, you engage in our &ldquo;Service&rdquo; and agree to be bound by these Terms and Conditions.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">2. Online Store Terms</h2>
              <p>By agreeing to these Terms, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">3. Products and Pricing</h2>
              <p className="mb-3">All products are subject to availability. We reserve the right to discontinue any product at any time. Prices for our products are subject to change without notice.</p>
              <p>We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor&apos;s display of any color will be accurate.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">4. Orders and Payment</h2>
              <p>We reserve the right to refuse any order you place with us. We may limit or cancel quantities purchased per person, per household, or per order. Payment must be received prior to our acceptance of an order.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">5. Shipping and Delivery</h2>
              <p>Delivery timelines are estimates and not guaranteed. We are not liable for any delays in shipments. Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">6. Returns and Exchanges</h2>
              <p>Please refer to our Returns & Exchanges page for detailed information about our return policy.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">7. Intellectual Property</h2>
              <p>All content on this site, including text, graphics, logos, images, and software, is the property of BAAG and protected by copyright and other intellectual property laws.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">8. Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
            </section>

            <div className="bg-[#541F2B]/5 p-6 rounded mt-8">
              <p className="text-xs text-[#111111]/50">
                <strong>Note:</strong> This is a template terms and conditions document. Please consult with a legal
                professional to customize these terms for your specific business needs and ensure compliance with
                applicable Indian laws.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
