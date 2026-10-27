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
      color: 'border-emerald-500/30 bg-emerald-950/10'
    },
    {
      name: 'Experimental & In Progress',
      status: 'In progress' as StatusType,
      desc: 'Active engineering exploring multi-dimensional anomaly detection and bilingual Hindi NLP extraction.',
      color: 'border-amber-500/30 bg-amber-950/10'
    },
    {
      name: 'Requires External Setup',
      status: 'Requires external setup' as StatusType,
      desc: 'Dependent on third-party credentials, Meta Business verification, and telephony provider contracts.',
      color: 'border-slate-700 bg-slate-900/40'
    },
    {
      name: 'Requires Real-World Validation',
      status: 'Requires real-world validation' as StatusType,
      desc: 'Prospective observational study with real human seniors, requiring institutional ethics review.',
      color: 'border-rose-500/30 bg-rose-950/10'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Limitations & Roadmap' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Compass className="w-3.5 h-3.5" />
          <span>Capability Truthfulness & Engineering Horizons</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          What is built today, and{' '}
          <span className="text-teal-400">what remains ahead.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Too many hackathon submissions claim to have completed everything from clinical AI to live
          automated telephony. Sahaara strictly separates what has been implemented and tested from what
          remains experimental, configuration-dependent, or planned for future real-world pilots.
        </p>
      </div>

      {/* ROADMAP ITEMS BY TIER */}
      <section className="space-y-12">
        {tiers.map((tier) => {
          const matchingItems = roadmapItems.filter((item) =>
            tier.name.includes('Implemented')
              ? item.tier === 'Implemented'
              : tier.name.includes('Experimental')
              ? item.tier === 'In progress'
              : item.tier === tier.status
          );

          return (
            <div key={tier.name} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <div>
                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{tier.desc}</p>
                </div>
                <StatusBadge status={tier.status} />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                {matchingItems.map((item) => (
                  <div
                    key={item.id}
                    className={`p-5 rounded-2xl border space-y-3 flex flex-col justify-between ${tier.color}`}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-[10px] text-teal-400 font-bold uppercase">
                          {item.quarter}
                        </span>
                        <StatusBadge status={item.tier} size="sm" />
                      </div>
                      <h4 className="font-bold text-sm text-slate-200">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{item.description}</p>
                    </div>

                    <div className="pt-3 border-t border-slate-800/80 space-y-2 text-[11px]">
                      <div>
                        <strong className="text-slate-300">Dependencies:</strong>{' '}
                        <span className="text-slate-400">{item.dependencies.join(', ')}</span>
                      </div>
                      <div className="p-2 rounded bg-slate-900/80 border border-slate-800 text-slate-400">
                        <strong className="text-slate-300">Constraint / Reality:</strong>{' '}
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
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
        <Link
          href="/faq"
          className="text-teal-400 font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Browse 30+ Categorised FAQs</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-slate-400 hover:text-slate-200 transition-colors"
        >
          Explore Implemented Features in Demo Simulator →
        </Link>
      </div>
    </div>
  );
}
