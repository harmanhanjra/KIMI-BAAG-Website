import { useState } from 'react';
import { SEO } from '@/components/SEO';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { sizeGuideData, howToMeasure } from '@/data/sizeGuide';
import { Ruler, Info } from 'lucide-react';

export function SizeGuidePage() {
  const [unit, setUnit] = useState<'cm' | 'inches'>('cm');

  return (
    <>
      <SEO title="Size Guide | BAAG" description="Find your perfect fit with our detailed size guide for oversized t-shirts. Measurements in centimetres and inches." url="/size-guide" />

      <main className="bg-[#F1E9DC] min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6">
          <Breadcrumbs items={[{ label: 'Size Guide' }]} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-24">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.3em] uppercase text-[#541F2B] mb-3">Fit Guide</p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-light" style={{ fontFamily: "'Cormorant Garamond', serif" }}>SIZE GUIDE</h1>
            <p className="text-[#111111]/60 mt-3 max-w-xl mx-auto">Our oversized fit is intentionally relaxed. For the true look, order your regular size. Size down for a closer fit.</p>
          </div>

          {/* Unit Toggle */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex border border-[#111111]/20">
              <button onClick={() => setUnit('cm')} className={`px-6 py-2 text-xs tracking-[0.15em] uppercase ${unit === 'cm' ? 'bg-[#111111] text-[#F1E9DC]' : ''}`}>CM</button>
              <button onClick={() => setUnit('inches')} className={`px-6 py-2 text-xs tracking-[0.15em] uppercase ${unit === 'inches' ? 'bg-[#111111] text-[#F1E9DC]' : ''}`}>Inches</button>
            </div>
          </div>

          {/* Size Table */}
          <div className="overflow-x-auto mb-16">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-[#111111]">
                  <th className="text-left py-3 px-4 text-xs tracking-[0.15em] uppercase">Size</th>
                  <th className="text-center py-3 px-4 text-xs tracking-[0.15em] uppercase">Chest</th>
                  <th className="text-center py-3 px-4 text-xs tracking-[0.15em] uppercase">Length</th>
                  <th className="text-center py-3 px-4 text-xs tracking-[0.15em] uppercase">Shoulder</th>
                  <th className="text-center py-3 px-4 text-xs tracking-[0.15em] uppercase">Sleeve</th>
                </tr>
              </thead>
              <tbody>
                {sizeGuideData.map((row, index) => (
                  <tr key={row.size} className={`border-b border-[#111111]/10 ${index % 2 === 0 ? 'bg-white/30' : ''}`}>
                    <td className="py-4 px-4 font-medium">{row.size}</td>
                    <td className="text-center py-4 px-4">{unit === 'cm' ? row.chest.cm : row.chest.inches}</td>
                    <td className="text-center py-4 px-4">{unit === 'cm' ? row.length.cm : row.length.inches}</td>
                    <td className="text-center py-4 px-4">{unit === 'cm' ? row.shoulder.cm : row.shoulder.inches}</td>
                    <td className="text-center py-4 px-4">{unit === 'cm' ? row.sleeve.cm : row.sleeve.inches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* How to Measure */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            {howToMeasure.map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-white/30 rounded">
                <Ruler size={20} className="text-[#541F2B] flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-medium mb-1">{item.title}</h3>
                  <p className="text-xs text-[#111111]/60 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Fit Note */}
          <div className="bg-[#541F2B]/5 p-6 rounded flex gap-4">
            <Info size={20} className="text-[#541F2B] flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-medium mb-2">Oversized Fit Note</h3>
              <p className="text-sm text-[#111111]/70 leading-relaxed">
                Our t-shirts are designed with a deliberately oversized silhouette featuring dropped shoulders and a relaxed body.
                If you are between sizes or prefer a closer fit, we recommend sizing down. For the authentic oversized look shown
                in our campaign imagery, choose your regular size. Model is 6&apos;0&quot; and wears size L.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
