import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { roadmapItems } from '@/data/roadmapData';
import { StatusBadge } from '@/components/StatusBadge';
import {
  Compass,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  AlertCircle,
  HelpCircle,
  Workflow
} from 'lucide-react';
import { StatusType } from '@/types';

export const metadata = {
  title: 'Limitations & Future Roadmap: Transparent Capability Tiers',
  description:
    'Honest, verified roadmap categorised into Implemented, Tested, Experimental, Requires External Setup, and Requires Real-World Validation.'
};

export default function RoadmapPage() {
  const tiers = [
    {
      name: 'Implemented & Tested',
      status: 'Implemented' as StatusType,
      desc: 'Capabilities built into the repository, verified by integration tests and synthetic simulation.',
      cardBorder: 'border-[#245B49]/50 bg-[#17231F]'
    },
    {
      name: 'Experimental & In Progress',
      status: 'In progress' as StatusType,
      desc: 'Active engineering exploring multi-dimensional anomaly detection and bilingual Hindi NLP extraction.',
      cardBorder: 'border-[#E5A93C]/40 bg-[#17231F]'
    },
    {
      name: 'Requires External Setup',
      status: 'Requires external setup' as StatusType,
      desc: 'Dependent on third-party credentials, Meta Business verification, and telephony provider contracts.',
      cardBorder: 'border-[#273830] bg-[#17231F]'
    },
    {
      name: 'Requires Real-World Validation',
      status: 'Requires real-world validation' as StatusType,
      desc: 'Prospective observational study with real human seniors, requiring institutional ethics review.',
      cardBorder: 'border-[#ef4444]/30 bg-[#17231F]'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <Breadcrumb items={[{ label: 'Limitations & Roadmap' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-mono tracking-wide">
          <Compass className="w-3.5 h-3.5 text-[#72D8B0]" />
          <span>Capability Truthfulness & Engineering Horizons</span>
        </div>

        <h1 className="text-display text-[#F4F2EA]">
          What is built today, and{' '}
          <span className="font-serif italic text-[#A9C2AE] font-normal">what remains ahead.</span>
        </h1>

        <p className="text-lg text-[#A9C2AE] leading-relaxed">
          Too many hackathon submissions claim to have completed everything from clinical AI to live
          automated telephony. Sahaara strictly separates what has been implemented and tested from what
          remains experimental, configuration-dependent, or planned for future real-world pilots.
        </p>
      </div>

      {/* ROADMAP ITEMS BY TIER */}
      <section className="space-y-14">
        {tiers.map((tier) => {
          const matchingItems = roadmapItems.filter((item) =>
            tier.name.includes('Implemented')
              ? item.tier === 'Implemented'
              : tier.name.includes('Experimental')
              ? item.tier === 'In progress'
              : item.tier === tier.status
          );

          return (
            <div key={tier.name} className="space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#273830] pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-semibold text-[#F4F2EA]">{tier.name}</h2>
                  <p className="text-xs sm:text-sm text-[#A9C2AE] mt-1">{tier.desc}</p>
                </div>
                <StatusBadge status={tier.status} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs">
                {matchingItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-6 rounded-2xl border space-y-4 flex flex-col justify-between ${tier.cardBorder}`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[11px] text-[#72D8B0] font-semibold tracking-wider uppercase">
                          {item.quarter}
                        </span>
                        <StatusBadge status={item.tier} size="sm" />
                      </div>
                      <h3 className="font-semibold text-base text-[#F4F2EA]">{item.title}</h3>
                      <p className="text-[#A9C2AE] leading-relaxed">{item.description}</p>
                    </div>

                    <div className="pt-4 border-t border-[#273830] space-y-2.5 text-[11px]">
                      <div>
                        <strong className="text-[#F4F2EA]">Dependencies:</strong>{' '}
                        <span className="text-[#A9C2AE]">{item.dependencies.join(', ')}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-[#101714] border border-[#273830] text-[#A9C2AE] leading-relaxed">
                        <strong className="text-[#F4F2EA] block mb-0.5">Constraint / Reality:</strong>{' '}
                        {item.riskOrConstraint}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* Bottom CTA to FAQ */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/faq"
          className="text-[#72D8B0] font-medium hover:underline flex items-center gap-1.5"
        >
          <span>Next: Browse 30+ Categorised FAQs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          Explore Implemented Features in Demo Simulator →
        </Link>
      </div>
    </div>
  );
}

