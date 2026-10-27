import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FaqAccordion } from '@/components/FaqAccordion';
import { HelpCircle, ArrowRight, MessageSquare, Play } from 'lucide-react';

export const metadata = {
  title: 'FAQ: 30+ Questions for Families, Coordinators & Judges',
  description:
    'Searchable, categorised FAQ directory covering product concept, personal baselines, AI architecture, WhatsApp integration, privacy, and technical questions.'
};

export default function FaqPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Frequently Asked Questions Directory · 30+ Questions</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Answers to every question,{' '}
          <span className="text-teal-400">transparent and direct.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Whether you are a hackathon judge examining technical architecture, an elder-care coordinator
          triaging daily queues, or a family member seeking peace of mind, find clear, unvarnished answers
          to every operational and clinical question below.
        </p>
      </div>

      {/* FAQ Searchable Component */}
      <FaqAccordion />

      {/* Still Have Questions CTA */}
      <div className="p-8 rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-lg text-white">Still have questions for the team?</h3>
          <p className="text-xs text-slate-400 mt-1">
            Reach out directly or test the interactive simulator to see these principles in practice.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <span>Contact Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/demo"
            className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Launch Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
