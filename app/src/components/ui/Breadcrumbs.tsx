import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="py-4">
      <ol className="flex items-center flex-wrap gap-1 text-xs text-[#111111]/60">
        <li>
          <Link to="/" className="hover:text-[#541F2B] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-1">
            <ChevronRight size={12} className="text-[#111111]/30" />
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-[#541F2B] transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-[#111111]">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
