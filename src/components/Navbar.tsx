'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  ChevronDown,
  Menu,
  X,
  Play
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const productLinks = [
    { label: 'The Problem', href: '/problem', desc: 'Fragmented elder-care signals & missed trends' },
    { label: 'Product Overview', href: '/product', desc: 'Coordinator-first wellbeing intelligence' },
    { label: 'All Features (A–Q)', href: '/features', desc: 'Searchable directory of 17 capabilities' },
    { label: 'Why Sahaara (USPs)', href: '/why-sahaara', desc: '9 core differentiators & competitive matrix' },
    { label: 'How It Works', href: '/how-it-works', desc: '10-step pipeline from observation to action' },
  ];

  const techLinks = [
    { label: 'AI & Intelligence', href: '/ai-and-intelligence', desc: '9-layer pipeline & personal baseline model' },
    { label: 'Tech Stack & Architecture', href: '/technology', desc: 'Next.js, Supabase, Vercel & edge flow' },
    { label: 'Data Model & API Docs', href: '/developers', desc: 'Relational entities & REST API contracts' },
    { label: 'WhatsApp Integration', href: '/integrations/whatsapp', desc: 'Official Meta Cloud API webhook lifecycle' },
  ];

  const trustLinks = [
    { label: 'Evaluation & Benchmarks', href: '/evaluation', desc: '200 synthetic seniors over 90 days results' },
    { label: 'Privacy & Safety', href: '/trust-and-safety', desc: 'DPDP 2023 design, RLS & non-diagnostic policy' },
    { label: 'Limitations & Roadmap', href: '/roadmap', desc: 'Honest tier status: Implemented to Planned' },
    { label: 'FAQ', href: '/faq', desc: '30+ questions for families, coordinators & judges' },
  ];

  const isProductActive =
    pathname.startsWith('/problem') ||
    pathname.startsWith('/product') ||
    pathname.startsWith('/features') ||
    pathname.startsWith('/why-sahaara') ||
    pathname.startsWith('/how-it-works');

  const isTechActive =
    pathname.startsWith('/ai-and-intelligence') ||
    pathname.startsWith('/technology') ||
    pathname.startsWith('/developers') ||
    pathname.startsWith('/integrations');

  const isTrustActive =
    pathname.startsWith('/evaluation') ||
    pathname.startsWith('/trust-and-safety') ||
    pathname.startsWith('/roadmap') ||
    pathname.startsWith('/faq');

  return (
    <header className="sticky top-0 z-50 w-full bg-[#101714]/90 backdrop-blur-md border-b border-[#24332B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#245B49] border border-[#3A6B59] flex items-center justify-center text-[#F4F2EA] transition-colors group-hover:bg-[#2E725C]">
              <Activity className="w-4 h-4 text-[#72D8B0]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-[#F4F2EA] tracking-tight font-sans">
                  Sahaara
                </span>
                <span className="text-[10px] font-mono tracking-wider px-1.5 py-0.2 bg-[#17231F] text-[#A9C2AE] border border-[#2D3F35] rounded">
                  Deviathon 2.0
                </span>
              </div>
              <p className="text-[11px] text-[#8B9B90] font-normal leading-tight hidden sm:block">
                Early warning that leads to care
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  isProductActive
                    ? 'text-[#F4F2EA] bg-[#17231F]'
                    : 'text-[#B8C6BD] hover:text-[#F4F2EA] hover:bg-[#17231F]/60'
                }`}
              >
                <span>Product</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8B9B90]" />
              </button>

              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 w-72 p-2 bg-[#17231F] border border-[#2D3F35] rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in duration-100">
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-lg hover:bg-[#202B26] transition-colors group"
                    >
                      <div className="text-xs font-semibold text-[#E5EAE6] group-hover:text-[#72D8B0] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#8B9B90] mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Tech Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('tech')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  isTechActive
                    ? 'text-[#F4F2EA] bg-[#17231F]'
                    : 'text-[#B8C6BD] hover:text-[#F4F2EA] hover:bg-[#17231F]/60'
                }`}
              >
                <span>Technology</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8B9B90]" />
              </button>

              {activeDropdown === 'tech' && (
                <div className="absolute top-full left-0 w-80 p-2 bg-[#17231F] border border-[#2D3F35] rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in duration-100">
                  {techLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-lg hover:bg-[#202B26] transition-colors group"
                    >
                      <div className="text-xs font-semibold text-[#E5EAE6] group-hover:text-[#72D8B0] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#8B9B90] mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Trust Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('trust')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                  isTrustActive
                    ? 'text-[#F4F2EA] bg-[#17231F]'
                    : 'text-[#B8C6BD] hover:text-[#F4F2EA] hover:bg-[#17231F]/60'
                }`}
              >
                <span>Trust & Safety</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#8B9B90]" />
              </button>

              {activeDropdown === 'trust' && (
                <div className="absolute top-full left-0 w-80 p-2 bg-[#17231F] border border-[#2D3F35] rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in duration-100">
                  {trustLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-lg hover:bg-[#202B26] transition-colors group"
                    >
                      <div className="text-xs font-semibold text-[#E5EAE6] group-hover:text-[#72D8B0] transition-colors">
                        {item.label}
                      </div>
                      <div className="text-[11px] text-[#8B9B90] mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                pathname === '/about'
                  ? 'text-[#F4F2EA] bg-[#17231F]'
                  : 'text-[#B8C6BD] hover:text-[#F4F2EA] hover:bg-[#17231F]/60'
              }`}
            >
              About & Team
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-xs font-medium rounded-lg transition-colors ${
                pathname === '/contact'
                  ? 'text-[#F4F2EA] bg-[#17231F]'
                  : 'text-[#B8C6BD] hover:text-[#F4F2EA] hover:bg-[#17231F]/60'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/demo"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-[#F4F2EA] bg-[#245B49] hover:bg-[#2E725C] border border-[#3A6B59] rounded-lg transition-all"
            >
              <span className="w-2 h-2 rounded-full bg-[#72D8B0]" />
              <span>Explore Demo</span>
              <Play className="w-3 h-3 fill-current opacity-80" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/demo"
              className="px-3 py-1.5 text-xs font-semibold text-[#F4F2EA] bg-[#245B49] rounded-md"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#B8C6BD] hover:text-[#F4F2EA] hover:bg-[#17231F] rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#101714] border-b border-[#24332B] px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#A9C2AE] mb-2 px-2">
                Product
              </p>
              <div className="space-y-1">
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-xs font-medium text-[#E5EAE6] hover:bg-[#17231F] rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-[#24332B] pt-3">
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#A9C2AE] mb-2 px-2">
                Technology
              </p>
              <div className="space-y-1">
                {techLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-xs font-medium text-[#E5EAE6] hover:bg-[#17231F] rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-[#24332B] pt-3">
              <p className="text-[11px] font-mono uppercase tracking-wider text-[#A9C2AE] mb-2 px-2">
                Trust & Safety
              </p>
              <div className="space-y-1">
                {trustLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-xs font-medium text-[#E5EAE6] hover:bg-[#17231F] rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-[#24332B] pt-3 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-xs font-medium text-[#E5EAE6] hover:bg-[#17231F] rounded-md"
              >
                About & Team
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-xs font-medium text-[#E5EAE6] hover:bg-[#17231F] rounded-md"
              >
                Contact & Demo Request
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/demo"
                className="block w-full text-center py-2.5 px-4 font-semibold text-xs text-[#F4F2EA] bg-[#245B49] hover:bg-[#2E725C] rounded-lg"
              >
                Launch Interactive Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
