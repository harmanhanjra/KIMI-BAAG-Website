import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export function PrivacyPage() {
  return (
    <>
      <SEO title="Privacy Policy | BAAG" description="Learn how BAAG collects, uses, and protects your personal information." url="/policies/privacy" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>PRIVACY POLICY</h1>
            <p className="text-sm text-[#111111]/60 mt-3">Last updated: January 2026</p>
          </div>

          <div className="space-y-8 text-sm text-[#111111]/70 leading-relaxed">
            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">1. Introduction</h2>
              <p>BAAG (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">2. Information We Collect</h2>
              <p className="mb-3">We collect information that you provide directly to us, including:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Name, email address, phone number, and shipping address</li>
                <li>Order and delivery details submitted through Netlify Forms or WhatsApp</li>
                <li>Order history and preferences</li>
                <li>Communications with our customer service team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">3. How We Use Your Information</h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Process and fulfill your orders</li>
                <li>Communicate with you about your orders and account</li>
                <li>Send you marketing communications (with your consent)</li>
                <li>Improve our website and products</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">4. Sharing Your Information</h2>
              <p>We do not sell your personal information. We may share your information with trusted service providers who assist us in operating our website, conducting our business, or servicing you, so long as those parties agree to keep this information confidential.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">5. Security</h2>
              <p>We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">6. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time.</p>
            </section>

            <section>
              <h2 className="text-lg font-medium text-[#111111] mb-3">7. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a className="text-[#541F2B] underline" href={`mailto:${import.meta.env.VITE_CONTACT_EMAIL || '2000sharmanpreet@gmail.com'}`}>
                  {import.meta.env.VITE_CONTACT_EMAIL || '2000sharmanpreet@gmail.com'}
                </a>.
              </p>
            </section>

            <div className="bg-[#541F2B]/5 p-6 rounded mt-8">
              <p className="text-xs text-[#111111]/50">
                <strong>Note:</strong> This is a template privacy policy. Please consult with a legal professional
                to customize this policy for your specific business needs and ensure compliance with applicable laws,
                including Indian data protection regulations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
