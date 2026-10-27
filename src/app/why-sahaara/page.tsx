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
      details: 'Machine learning models are probabilistic. If an incoming message reports a fall or SOS button trigger, deterministic safety rules trigger an immediate Critical alert with an SLA of <15 minutes. Unsupervised anomaly models are strictly advisory.'
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28">
      <Breadcrumb items={[{ label: 'Why Sahaara (USPs)' }]} />

      {/* Header Intro */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-medium">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Core Differentiators · Deviathon 2.0</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          What makes Sahaara different from <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#A9C2AE]">conventional monitoring.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          We do not claim that individual features such as reminders, smartwatches, or check-in calls are
          globally unique. Our defensible competitive advantage is the <strong className="text-[#F4F2EA] font-semibold">integrated operational workflow</strong> that
          connects personal baselines, multi-signal evidence, explainable alerts, and audited human follow-up.
        </p>
      </div>

      {/* 9 USPs Grid */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Evidence-Based Value
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Nine core unique <span className="font-serif italic font-normal text-[#A9C2AE]">selling propositions.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usps.map((usp) => (
            <div
              key={usp.num}
              className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3.5 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] font-mono font-bold text-xs flex items-center justify-center">
                  {usp.num}
                </div>
                <h4 className="font-bold text-base text-[#F4F2EA]">{usp.title}</h4>
                <p className="text-xs font-semibold text-[#A9C2AE] leading-relaxed">
                  {usp.summary}
                </p>
                <p className="text-xs text-[#8F9A92] leading-relaxed pt-1 border-t border-[#273830]">
                  {usp.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* COMPETITIVE MATRIX SECTION */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Objective Comparison
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Competitive <span className="font-serif italic font-normal text-[#A9C2AE]">positioning matrix.</span>
          </h2>
          <p className="text-sm text-[#A9C2AE] leading-relaxed">
            Comparing Sahaara’s integrated coordinator-first approach against established market categories.
          </p>
        </div>

        <ComparisonTable />
      </section>

      {/* Positioning Summary Banner */}
      <div className="p-8 sm:p-12 rounded-3xl bg-[#17231F] border border-[#273830] space-y-6 text-xs text-[#A9C2AE] leading-relaxed shadow-xl">
        <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
          The Competitive Verdict
        </span>
        <blockquote className="p-6 rounded-2xl bg-[#141F1A] border-l-4 border-[#245B49] text-[#F4F2EA] font-serif italic text-lg sm:text-xl leading-relaxed">
          &ldquo;Sahaara turns fragmented wellbeing signals into explainable, prioritised care actions — helping coordinators recognise changes, verify what is happening, and ensure that follow-ups are recorded.&rdquo;
        </blockquote>
        <div className="pt-2 flex flex-wrap items-center gap-4">
          <Link
            href="/demo"
            className="px-5 py-3 rounded-xl bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs transition-colors cursor-pointer"
          >
            Test the Integrated Workflow in Demo
          </Link>
          <Link
            href="/evaluation"
            className="text-xs text-[#72D8B0] font-semibold hover:underline flex items-center gap-1.5"
          >
            <span>Review Synthetic Benchmark Results</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
