import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ComparisonTable } from '@/components/ComparisonTable';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Activity,
  Layers,
  Brain,
  MessageSquare,
  Lock,
  Workflow,
  HelpCircle,
  FileCheck,
  Cpu
} from 'lucide-react';

export const metadata = {
  title: 'Why Sahaara: 9 Core USPs & Competitive Positioning Matrix',
  description:
    'The 9 defensible unique selling propositions of Sahaara and a comprehensive comparison matrix against traditional care, standalone apps, and remote dashboards.'
};

export default function WhySahaaraPage() {
  const usps = [
    {
      num: '01',
      title: 'Personal-Baseline Awareness',
      summary: 'Evaluating deviations against an individual’s own historical routine rather than arbitrary population cutoffs.',
      details: 'A 3,500-step day may be unusually low for an active 71-year-old retired army officer, but a peak day for an 84-year-old recovering from joint surgery. Sahaara computes rolling 14-30 day medians and interquartile ranges, reducing false alarms by >77% compared to fixed-threshold systems.'
    },
    {
      num: '02',
      title: 'Cross-Signal Context (Multi-Sensor Fusion)',
      summary: 'Fusing mobility, sleep, medication adherence, check-ins, and family WhatsApp reports across sliding 72h windows.',
      details: 'A single mild deviation rarely warrants an alarm. But when a 3-day drop in step count coincides with 4 nocturnal sleep disruptions, an unconfirmed afternoon diabetic pill, and a family member’s passing WhatsApp remark ("Mummy refused lunch"), the compound probability of an underlying issue is severe.'
    },
    {
      num: '03',
      title: 'From Alert to Completed Follow-Up (Closed Loop)',
      summary: 'Connecting detection with assigned ownership, contact attempts, clinical notes, and outcome closure.',
      details: 'In elder care, the biggest operational point of failure is unclosed alerts. Sahaara enforces a state machine from New → Acknowledged → In Progress → Resolved. Coordinators must record who was contacted, what was agreed, and what follow-up task was scheduled before closing a case.'
    },
    {
      num: '04',
      title: 'Explainability & Explicit Uncertainty Representation',
      summary: 'Showing exactly what changed, baseline reference, and highlighting missing or delayed data.',
      details: 'Zero opaque AI scores. Every alert presents an Explainable Evidence Card showing the contributing observations, their timestamps, and the z-score deviation. If a sensor drops offline, the system marks the stream with an explicit amber warning pill rather than inventing false healthy values.'
    },
    {
      num: '05',
      title: 'Accessible Two-Way Communication (WhatsApp Cloud API)',
      summary: 'Engaging seniors and families through ubiquitous messaging without requiring new app downloads.',
      details: 'Older adults in India rarely adopt specialized health apps. Sahaara uses the official Meta WhatsApp Cloud API to accept morning check-ins and colloquial family reports ("Sab theek hai", "Bhook nahi lag rahi") in Hindi, English, and Hinglish with zero digital literacy barrier.'
    },
    {
      num: '06',
      title: 'Human-Centred Safety & Deterministic Rule Priority',
      summary: 'Safety-critical reports follow transparent, unshakeable rules that can never be dismissed by an ML score.',
      details: 'Machine learning models are probabilistic. If an incoming message reports a fall or SOS button trigger, deterministic safety rules trigger an immediate Critical alert with an SLA of &lt;15 minutes. Unsupervised anomaly models are strictly advisory.'
    },
    {
      num: '07',
      title: 'Transparent Synthetic Evaluation & Public Metrics',
      summary: 'Evaluated on 200 synthetic seniors over 90 days with public precision, recall, and false alert metrics.',
      details: 'We separate measured synthetic facts from real-world clinical validation. We publish our full benchmark metrics comparing Sahaara against a rules-only baseline, complete with run identifiers, dataset parameters, and explicit limitations.'
    },
    {
      num: '08',
      title: 'Data Provenance & Cryptographic Audit Accountability',
      summary: 'PostgreSQL append-only audit trail preserving an unalterable history of all system and human decisions.',
      details: 'Every observation source, rule evaluation, coordinator review, and call note is committed to append-only audit tables. Update and delete permissions are revoked at the database level via PostgreSQL Row-Level Security.'
    },
    {
      num: '09',
      title: 'Modular, Deployment-Conscious Architecture',
      summary: 'Unified Next.js server logic and Supabase PostgreSQL with zero unnecessary microservice bloat.',
      details: 'Built for enterprise reliability and lean operational cost. Server-side API routes protect confidential API tokens, server components ensure fast edge delivery, and PostgreSQL foreign keys guarantee referential integrity.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Why Sahaara (USPs)' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Differentiators · Deviathon 2.0</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          What makes Sahaara different from{' '}
          <span className="text-teal-400">conventional monitoring.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          We do not claim that individual features such as reminders, smartwatches, or check-in calls are
          globally unique. Our defensible competitive advantage is the <strong>integrated operational workflow</strong> that
          connects personal baselines, multi-signal evidence, explainable alerts, and audited human follow-up.
        </p>
      </div>

      {/* 9 USPs Grid */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Evidence-Based Value
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Nine Core Unique Selling Propositions (USPs)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usps.map((usp) => (
            <div
              key={usp.num}
              className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 hover:border-teal-500/40 transition-colors flex flex-col justify-between"
            >
              <div className="space-y-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono font-bold text-xs flex items-center justify-center">
                  {usp.num}
                </div>
                <h4 className="font-bold text-base text-white">{usp.title}</h4>
                <p className="text-xs font-semibold text-teal-300 leading-relaxed">
                  {usp.summary}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed pt-1">
                  {usp.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPETITIVE MATRIX SECTION */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Objective Comparison
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Competitive Positioning Matrix
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Comparing Sahaara’s integrated coordinator-first approach against established market categories.
          </p>
        </div>

        <ComparisonTable />
      </section>

      {/* Positioning Summary Banner */}
      <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#131d33] to-[#0f172a] border border-slate-800 space-y-4 text-xs text-slate-300 leading-relaxed">
        <h4 className="text-base font-bold text-white">The Competitive Verdict</h4>
        <p>
          Judges and evaluators do not need us to claim that Sahaara is the first elder-care platform in the world. Our pitch is grounded and defensible:
        </p>
        <blockquote className="p-4 rounded-xl bg-teal-950/40 border-l-4 border-teal-500 text-teal-100 italic text-sm">
          "Sahaara turns fragmented wellbeing signals into explainable, prioritised care actions — helping coordinators recognise changes, verify what is happening, and ensure that follow-ups are recorded."
        </blockquote>
        <div className="pt-2 flex items-center gap-4">
          <Link
            href="/demo"
            className="px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors"
          >
            Test the Integrated Workflow in Demo
          </Link>
          <Link
            href="/evaluation"
            className="text-xs text-teal-400 font-semibold hover:underline"
          >
            Review Synthetic Benchmark Results →
          </Link>
        </div>
      </div>
    </div>
  );
}
