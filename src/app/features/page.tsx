import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FeatureFilter } from '@/components/FeatureFilter';
import { Layers, ShieldCheck, ArrowRight, Play } from 'lucide-react';

export const metadata = {
  title: 'All Features: Complete Platform Directory (A–Q)',
  description:
    'Searchable, filterable directory of all 17 Sahaara features with 10-point architectural specifications, status labels, and judge demonstration guides.'
};

export default function FeaturesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      <Breadcrumb items={[{ label: 'All Features (A–Q)' }]} />

      {/* Hero Intro */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-medium">
          <Layers className="w-3.5 h-3.5" />
          <span>Complete Capability Directory · 17 Features</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          Every feature documented with <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#A9C2AE]">technical truthfulness.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          Every single capability is detailed across ten architectural criteria: what it does, why it
          exists, who uses it, required inputs, internal mechanics, output generated, verification method,
          honest limitations, implementation status, and exact demonstration instructions for evaluators.
        </p>
      </div>

      {/* Searchable and Filterable Directory */}
      <FeatureFilter />

      {/* Bottom CTA to Demo */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#17231F] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-bold text-lg text-[#F4F2EA]">Experience These Features in Action</h3>
          <p className="text-xs text-[#A9C2AE] mt-1 max-w-xl">
            Test the baseline engine, multi-signal evidence cards, and follow-up logging in the live simulator.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/demo"
            className="px-5 py-3 rounded-xl bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-current text-[#72D8B0]" />
            <span>Launch Interactive Demo</span>
          </Link>
          <Link
            href="/why-sahaara"
            className="px-5 py-3 rounded-xl bg-[#202B26] hover:bg-[#283A31] text-[#D8E2DC] font-medium text-xs border border-[#2E4037] transition-colors cursor-pointer"
          >
            <span>Read 9 USPs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
