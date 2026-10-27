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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb items={[{ label: 'All Features (A–Q)' }]} />

      {/* Hero Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Complete Capability Directory · 17 Features</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Every feature documented with{' '}
          <span className="text-teal-400">technical truthfulness.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Every single capability is detailed across ten architectural criteria: what it does, why it
          exists, who uses it, required inputs, internal mechanics, output generated, verification method,
          honest limitations, implementation status, and exact demonstration instructions for evaluators.
        </p>
      </div>

      {/* Searchable and Filterable Directory */}
      <FeatureFilter />

      {/* Bottom CTA to Demo */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-lg text-white">Experience These Features in Action</h3>
          <p className="text-xs text-slate-300 mt-1">
            Test the baseline engine, multi-signal evidence cards, and follow-up logging in the live simulator.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/demo"
            className="px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-lg shadow-teal-700/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch Interactive Demo</span>
          </Link>
          <Link
            href="/why-sahaara"
            className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            <span>Read 9 USPs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
