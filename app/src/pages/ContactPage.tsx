import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Mail, MessageCircle, MapPin, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const contactCategories = ['Order Support', 'Sizing Help', 'Returns', 'Collaboration', 'Wholesale', 'Press', 'General Enquiry'];

export function ContactPage() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // SHOPIFY/EMAIL SERVICE INTEGRATION POINT
    setTimeout(() => setFormState('success'), 1000);
  };

  return (
    <>
      <SEO title="Contact Us | BAAG" description="Get in touch with the BAAG team for order support, sizing help, collaborations, and more." url="/contact" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">Get in Touch</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>CONTACT US</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-4">
                <Mail size={20} className="text-[#541F2B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Email</h3>
                  <p className="text-sm text-[#111111]/60">[YOUR_EMAIL]</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="flex gap-4">
                <MessageCircle size={20} className="text-[#541F2B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-medium mb-1">WhatsApp</h3>
                  <p className="text-sm text-[#111111]/60">[YOUR_WHATSAPP_NUMBER]</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="flex gap-4">
                <Clock size={20} className="text-[#541F2B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Support Hours</h3>
                  <p className="text-sm text-[#111111]/60">Monday - Saturday<br />10:00 AM - 7:00 PM IST</p>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="flex gap-4">
                <MapPin size={20} className="text-[#541F2B] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-medium mb-1">Address</h3>
                  <p className="text-sm text-[#111111]/60">[YOUR_BUSINESS_ADDRESS]</p>
                </div>
              </motion.div>

              <div className="pt-6 border-t border-[#111111]/10">
                <p className="text-xs text-[#111111]/50">
                  Note: Replace the placeholders above with your actual contact details before launch.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              {formState === 'success' ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                  <div className="w-16 h-16 bg-[#541F2B] rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                  </div>
                  <h2 className="text-2xl font-light mb-2" style={{ fontFamily: "'Cormorant Garamond', serif" }}>Message Sent</h2>
                  <p className="text-[#111111]/60">We will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-[0.1em] uppercase text-[#111111]/60 mb-2">Name *</label>
                      <input type="text" required className="w-full px-4 py-3 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.1em] uppercase text-[#111111]/60 mb-2">Email *</label>
                      <input type="email" required className="w-full px-4 py-3 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs tracking-[0.1em] uppercase text-[#111111]/60 mb-2">Phone</label>
                      <input type="tel" className="w-full px-4 py-3 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm" />
                    </div>
                    <div>
                      <label className="block text-xs tracking-[0.1em] uppercase text-[#111111]/60 mb-2">Order Number</label>
                      <input type="text" className="w-full px-4 py-3 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase text-[#111111]/60 mb-2">Category *</label>
                    <select required value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-3 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm">
                      <option value="">Select a category</option>
                      {contactCategories.map((cat) => (<option key={cat} value={cat}>{cat}</option>))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.1em] uppercase text-[#111111]/60 mb-2">Message *</label>
                    <textarea required rows={5} className="w-full px-4 py-3 bg-white/50 border border-[#111111]/10 outline-none focus:border-[#541F2B] transition-colors text-sm resize-none" />
                  </div>

                  <button type="submit" disabled={formState === 'submitting'}
                    className="px-10 py-4 bg-[#111111] text-[#F1E9DC] text-xs tracking-[0.2em] uppercase hover:bg-[#541F2B] transition-colors disabled:opacity-50">
                    {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
