import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbProps {
  items: Array<{ label: string; href?: string }>;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center text-xs text-[#95A49B] py-3 mb-6">
      <Link
        href="/"
        className="flex items-center gap-1.5 hover:text-[#F4F2EA] transition-colors"
      >
        <Home className="w-3.5 h-3.5 text-[#A9C2AE]" />
        <span>Home</span>
      </Link>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <ChevronRight className="w-3.5 h-3.5 mx-2 text-[#465A50] shrink-0" />
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-[#F4F2EA] transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-[#F4F2EA] font-medium">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
