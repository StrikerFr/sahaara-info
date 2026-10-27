import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { FaqAccordion } from '@/components/FaqAccordion';
import { HelpCircle, ArrowRight, Play } from 'lucide-react';

export const metadata = {
  title: 'FAQ: 30+ Questions for Families, Coordinators & Judges',
  description:
    'Searchable, categorised FAQ directory covering product concept, personal baselines, AI architecture, WhatsApp integration, privacy, and technical questions.'
};

export default function FaqPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <Breadcrumb items={[{ label: 'Frequently Asked Questions' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-mono tracking-wide">
          <HelpCircle className="w-3.5 h-3.5 text-[#72D8B0]" />
          <span>Frequently Asked Questions Directory · 30+ Questions</span>
        </div>

        <h1 className="text-display text-[#F4F2EA]">
          Answers to every question,{' '}
          <span className="font-serif italic text-[#A9C2AE] font-normal">transparent and direct.</span>
        </h1>

        <p className="text-lg text-[#A9C2AE] leading-relaxed">
          Whether you are a hackathon judge examining technical architecture, an elder-care coordinator
          triaging daily queues, or a family member seeking peace of mind, find clear, unvarnished answers
          to every operational and clinical question below.
        </p>
      </div>

      {/* FAQ Searchable Component */}
      <FaqAccordion />

      {/* Still Have Questions CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#17231F] border border-[#273830] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl font-semibold text-[#F4F2EA]">Still have questions for the team?</h2>
          <p className="text-sm text-[#A9C2AE]">
            Reach out directly or test the interactive simulator to see these principles in practice.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-full bg-[#245B49] hover:bg-[#2e745d] text-[#F4F2EA] font-medium text-xs transition-colors flex items-center gap-2"
          >
            <span>Contact Team</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#72D8B0]" />
          </Link>
          <Link
            href="/demo"
            className="px-5 py-2.5 rounded-full bg-[#101714] hover:bg-[#202B26] text-[#F4F2EA] font-medium text-xs border border-[#273830] transition-colors flex items-center gap-2"
          >
            <Play className="w-3 h-3 text-[#72D8B0] fill-current" />
            <span>Launch Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

