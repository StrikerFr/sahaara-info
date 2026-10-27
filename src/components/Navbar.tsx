'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  ChevronDown,
  Menu,
  X,
  Play,
  ShieldCheck,
  FileText,
  HelpCircle,
  Layers,
  Cpu,
  HeartHandshake
} from 'lucide-react';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close mobile menu upon route change
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

  return (
    <header className="sticky top-0 z-50 w-full bg-[#090d16]/85 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-teal-600 to-teal-400 flex items-center justify-center text-white shadow-lg shadow-teal-500/20 group-hover:scale-105 transition-transform">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-white tracking-tight">Sahaara</span>
                <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.2 bg-teal-500/15 text-teal-300 border border-teal-500/30 rounded">
                  Deviathon 2.0
                </span>
              </div>
              <p className="text-[10px] text-slate-400 font-medium -mt-1 hidden sm:block">
                Early warning that leads to care
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith('/problem') ||
                  pathname.startsWith('/product') ||
                  pathname.startsWith('/features') ||
                  pathname.startsWith('/why-sahaara') ||
                  pathname.startsWith('/how-it-works')
                    ? 'text-teal-300 bg-teal-950/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Product</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 w-72 p-2 bg-[#0e1629] border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  {productLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-lg hover:bg-slate-800/70 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
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
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith('/ai-and-intelligence') ||
                  pathname.startsWith('/technology') ||
                  pathname.startsWith('/developers') ||
                  pathname.startsWith('/integrations')
                    ? 'text-teal-300 bg-teal-950/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Technology</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === 'tech' && (
                <div className="absolute top-full left-0 w-80 p-2 bg-[#0e1629] border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  {techLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-lg hover:bg-slate-800/70 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
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
                className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  pathname.startsWith('/evaluation') ||
                  pathname.startsWith('/trust-and-safety') ||
                  pathname.startsWith('/roadmap') ||
                  pathname.startsWith('/faq')
                    ? 'text-teal-300 bg-teal-950/40'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                }`}
              >
                <span>Trust & Safety</span>
                <ChevronDown className="w-4 h-4 opacity-70" />
              </button>

              {activeDropdown === 'trust' && (
                <div className="absolute top-full left-0 w-80 p-2 bg-[#0e1629] border border-slate-700/80 rounded-xl shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150">
                  {trustLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block p-2.5 rounded-lg hover:bg-slate-800/70 transition-colors group"
                    >
                      <div className="text-sm font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">
                        {item.label}
                      </div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Standalone links */}
            <Link
              href="/about"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === '/about'
                  ? 'text-teal-300 bg-teal-950/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              About & Team
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                pathname === '/contact'
                  ? 'text-teal-300 bg-teal-950/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/demo"
              className="relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 rounded-lg shadow-md shadow-teal-600/20 transition-all hover:shadow-teal-500/30 hover:scale-[1.02]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-300 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-200"></span>
              </span>
              <span>Explore Demo</span>
              <Play className="w-3.5 h-3.5 fill-current opacity-80" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/demo"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 rounded-md"
            >
              Demo
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090d16] border-b border-slate-800 px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2 px-2">
                Product
              </p>
              <div className="space-y-1">
                {productLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2 px-2">
                Technology
              </p>
              <div className="space-y-1">
                {techLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-400 mb-2 px-2">
                Trust & Safety
              </p>
              <div className="space-y-1">
                {trustLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 rounded-md"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-slate-800/80 pt-3 space-y-1">
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 rounded-md"
              >
                About & Team
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800/80 rounded-md"
              >
                Contact & Demo Request
              </Link>
            </div>

            <div className="pt-2">
              <Link
                href="/demo"
                className="block w-full text-center py-2.5 px-4 font-semibold text-sm text-white bg-teal-600 hover:bg-teal-500 rounded-lg shadow-lg shadow-teal-600/30"
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
