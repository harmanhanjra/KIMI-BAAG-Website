import { Link } from 'react-router-dom';
import { footerNavigation } from '@/data/navigation';
import { AnimatedBrandMark } from '@/components/ui/AnimatedBrandMark';
import { Instagram, Youtube } from 'lucide-react';

const socialIconClass =
  'flex min-h-11 min-w-11 items-center justify-center border border-[#F1E9DC]/12 text-[#F1E9DC]/62 transition-colors hover:border-[#D8C3A3] hover:text-[#D8C3A3]';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0D0B09] text-[#F1E9DC]">
      <div className="absolute inset-0 baag-fabric-grid opacity-20" aria-hidden="true" />
      <div className="relative z-10 baag-container py-16 lg:py-20">
        <div className="grid gap-12 border-b border-[#F1E9DC]/10 pb-12 lg:grid-cols-[0.95fr_1.2fr] lg:gap-16">
          <div>
            <AnimatedBrandMark
              className="items-start text-[#F1E9DC]"
              markClassName="text-5xl sm:text-6xl"
            />
            <p className="mt-7 max-w-md text-sm leading-7 text-[#F1E9DC]/62">
              Premium Punjabi streetwear shaped by identity, heavyweight craft,
              and a global point of view.
            </p>
            <p className="baag-gurmukhi mt-6 text-xl leading-relaxed text-[#D8C3A3]">
              ਮਿੱਟੀ ਨਾਲ ਜੁੜੇ। ਦੁਨੀਆ ਵੱਲ ਵਧਦੇ।
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <FooterColumn title="Shop" items={footerNavigation.shop} />
            <FooterColumn title="About" items={footerNavigation.about} />
            <FooterColumn title="Help" items={footerNavigation.help} />
            <FooterColumn title="Legal" items={footerNavigation.legal} />
          </div>
        </div>

        <div className="flex flex-col gap-7 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            {footerNavigation.social.map((item) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={socialIconClass}
                aria-label={item.label}
              >
                {item.label === 'Instagram' && <Instagram size={19} />}
                {item.label === 'YouTube' && <Youtube size={19} />}
                {item.label === 'TikTok' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.33 6.34 6.34 6.34 0 006.33-6.33V8.73a8.28 8.28 0 004.83 1.54V6.83a4.85 4.85 0 01-1.05-.14z" />
                  </svg>
                )}
                {item.label === 'Pinterest' && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                )}
              </a>
            ))}
          </div>

          <p className="text-xs tracking-wide text-[#F1E9DC]/40">
            &copy; 2026 BAAG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-[#B39152]">
        {title}
      </h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              to={item.href}
              className="text-sm leading-6 text-[#F1E9DC]/66 transition-colors hover:text-[#F1E9DC]"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
