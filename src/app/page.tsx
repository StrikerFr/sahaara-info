import React from 'react';
import Link from 'next/link';
import {
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  User,
  Phone,
  Sparkles,
  AlertTriangle,
  Play,
  Brain,
  FileCheck,
  Calendar,
  Layers
} from 'lucide-react';
import { WorkflowSteps } from '@/components/WorkflowSteps';

export default function HomePage() {
  return (
    <div className="w-full space-y-28 sm:space-y-36 py-8 sm:py-16">
      {/* SECTION: EDITORIAL HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8 max-w-5xl">
          {/* Institutional / Challenge Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#A9C2AE] text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-[#72D8B0]" />
            <span className="tracking-wide">Deviathon 2.0 Challenge · Problem by Samarth Life Management</span>
          </div>

          {/* Oversized Editorial Display Headline */}
          <h1 className="text-display font-medium text-[#F4F2EA] leading-[1.05] tracking-tight">
            A change in routine <br />
            should <span className="font-serif italic font-normal text-[#A9C2AE]">never</span> go unnoticed.
          </h1>

          {/* Lead Paragraph */}
          <p className="text-lg sm:text-2xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
            Sahaara connects everyday wellbeing observations, individual baselines, and human-led
            coordination to help care teams identify subtle behavioral shifts in older adults living at home.
          </p>

          {/* Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-sm shadow-sm transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current text-[#72D8B0]" />
              <span>Explore Interactive Demo</span>
            </Link>

            <Link
              href="/product"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#17231F] hover:bg-[#202B26] text-[#D8E2DC] font-medium text-sm border border-[#273830] hover:border-[#384E42] transition-colors"
            >
              <span>Product Architecture</span>
              <ArrowRight className="w-4 h-4 text-[#8F9A92]" />
            </Link>
          </div>

          {/* Non-Diagnostic Micro-Notice */}
          <p className="text-xs text-[#8F9A92] flex items-center gap-2 pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8F9A92]" />
            <span>Clinical-grade decision-support & care-coordination platform. Not a medical diagnostic tool. Evaluated on synthetic benchmark fixtures.</span>
          </p>
        </div>

        {/* Console Preview Component */}
        <div className="mt-16 sm:mt-20 max-w-6xl mx-auto rounded-2xl bg-[#17231F] border border-[#273830] shadow-2xl overflow-hidden">
          {/* Architectural Window Header */}
          <div className="bg-[#141E1A] px-5 py-3.5 border-b border-[#273830] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#273830]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#273830]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#273830]" />
              </div>
              <span className="text-xs text-[#8F9A92] font-mono ml-2">
                sahaara-coordinator-console / triage-queue / priority-case-02
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#72D8B0]" />
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A9C2AE]">
                SYNTHETIC PREVIEW
              </span>
            </div>
          </div>

          {/* Console Body */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-[#273830]">
              <div>
                <div className="text-[11px] font-mono uppercase text-[#72D8B0] font-semibold tracking-wider">
                  Active Priority Triage
                </div>
                <h3 className="text-xl font-bold text-[#F4F2EA] mt-1">
                  Senior Profile: Mrs. Sarojini Verma (Age 74 · Vasant Kunj)
                </h3>
                <p className="text-xs text-[#8F9A92] mt-0.5">
                  Living independently · Baseline: 45 days established · Assigned Coordinator: Priya Sharma
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#B87922]/20 border border-[#B87922]/40 text-[#E2B77E] text-xs font-semibold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-[#B87922]" />
                  <span>High Priority Alert (SLA: 32 mins remaining)</span>
                </span>
              </div>
            </div>

            {/* 3-Column Preview: Signals, Evidence Card, Action Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Column 1: Multi-Signals */}
              <div className="bg-[#141F1A] p-5 rounded-xl border border-[#273830] space-y-3.5">
                <div className="text-xs font-semibold text-[#F4F2EA] uppercase tracking-wider flex items-center gap-2">
                  <Activity className="w-4 h-4 text-[#72D8B0]" />
                  <span>Incoming Observations</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded bg-[#17231F] border border-[#273830] flex items-center justify-between">
                    <span className="text-[#A9C2AE]">Pedometer Steps</span>
                    <span className="font-mono text-[#E2B77E] font-semibold">1,420 (-62%)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#17231F] border border-[#273830] flex items-center justify-between">
                    <span className="text-[#A9C2AE]">Night Sleep</span>
                    <span className="font-mono text-[#E2B77E] font-semibold">4.8h (4 Awakenings)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#17231F] border border-[#273830] flex items-center justify-between">
                    <span className="text-[#A9C2AE]">WhatsApp Check-in</span>
                    <span className="font-mono text-[#E2B77E] font-semibold">Delayed (+90 min)</span>
                  </div>
                  <div className="p-2.5 rounded bg-[#17231F] border border-[#273830] flex items-center justify-between">
                    <span className="text-[#A9C2AE]">Son Text (WhatsApp)</span>
                    <span className="font-mono text-[#E89898] font-semibold">&ldquo;Skipped lunch&rdquo;</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Explainable Evidence Card */}
              <div className="bg-[#141F1A] p-5 rounded-xl border border-[#273830] space-y-3.5">
                <div className="text-xs font-semibold text-[#F4F2EA] uppercase tracking-wider flex items-center gap-2">
                  <Brain className="w-4 h-4 text-[#72D8B0]" />
                  <span>Synthesized Evidence</span>
                </div>
                <div className="text-xs text-[#D8E2DC] leading-relaxed space-y-2.5">
                  <p>
                    <strong className="text-[#F4F2EA]">Why Prioritised:</strong> Correlated decline across 3 continuous days. Individual step drop combined with sleep disruption and reported appetite loss exceeds personal baseline tolerance (z = 2.84).
                  </p>
                  <div className="p-2.5 bg-[#B87922]/15 border border-[#B87922]/30 rounded text-[11px] text-[#E2B77E]">
                    ⚠️ Missing: Blood pressure reading (no cuff connected).
                  </div>
                </div>
              </div>

              {/* Column 3: Coordinator Action */}
              <div className="bg-[#141F1A] p-5 rounded-xl border border-[#273830] space-y-3.5 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-[#F4F2EA] uppercase tracking-wider flex items-center gap-2 mb-2">
                    <Phone className="w-4 h-4 text-[#72D8B0]" />
                    <span>Human Follow-Up Action</span>
                  </div>
                  <p className="text-xs text-[#A9C2AE] leading-relaxed mb-3">
                    Assigned to: <strong className="text-[#F4F2EA]">Priya Sharma</strong>.<br />
                    Recommended protocol: Call senior directly to assess breathlessness and verify hydration and lunch intake.
                  </p>
                </div>

                <Link
                  href="/demo"
                  className="w-full text-center py-2.5 px-3 rounded-lg bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Test This Case in Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#72D8B0]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: PROBLEM-TO-SOLUTION EDITORIAL STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#273830] pt-24 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
              The Fundamental Challenge
            </span>
            <h2 className="text-headline font-medium text-[#F4F2EA] leading-tight">
              Elderly wellbeing does not collapse overnight. <br />
              <span className="font-serif italic font-normal text-[#A9C2AE]">It fades in whispers.</span>
            </h2>
            <p className="text-sm text-[#A9C2AE] leading-relaxed">
              Family members WhatsApp occasionally. A smartwatch measures steps. A neighbour notices an unwashed cup. In isolation, every signal appears benign. Without synthesis, early deterioration remains invisible until hospitalisation.
            </p>
            <div className="pt-2">
              <Link
                href="/problem"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#72D8B0] hover:text-[#A9C2AE] transition-colors"
              >
                <span>Read in-depth geriatric care problem analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {/* Step 1 */}
            <div className="p-6 rounded-xl bg-[#17231F] border border-[#273830] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#8F9A92]">PHASE 01</span>
                <span className="text-xs font-medium text-[#E89898]">Fragmented Signals</span>
              </div>
              <h4 className="font-bold text-sm text-[#F4F2EA]">Isolated Sensory & Relational Inputs</h4>
              <p className="text-xs text-[#A9C2AE] leading-relaxed">
                Family WhatsApp messages, pedometer syncs, telephone calls, missed check-ins, and pill reports arrive in silos across separate devices and family members.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-xl bg-[#17231F] border border-[#273830] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#8F9A92]">PHASE 02</span>
                <span className="text-xs font-medium text-[#72D8B0]">Personal Baselines</span>
              </div>
              <h4 className="font-bold text-sm text-[#F4F2EA]">Individual Statistical Normalization</h4>
              <p className="text-xs text-[#A9C2AE] leading-relaxed">
                Calculates normal historical distributions for each individual over 14–30 rolling days rather than enforcing generic population cutoffs.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-xl bg-[#17231F] border border-[#273830] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#8F9A92]">PHASE 03</span>
                <span className="text-xs font-medium text-[#E2B77E]">Explainable Evidence</span>
              </div>
              <h4 className="font-bold text-sm text-[#F4F2EA]">Transparent Triage Synthesis</h4>
              <p className="text-xs text-[#A9C2AE] leading-relaxed">
                Synthesizes contributing observations, source attribution, and missing data into an actionable triage queue with zero black-box obscurity.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-xl bg-[#17231F] border border-[#273830] space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-semibold text-[#8F9A92]">PHASE 04</span>
                <span className="text-xs font-medium text-[#72D8B0]">Closed-Loop Follow-up</span>
              </div>
              <h4 className="font-bold text-sm text-[#F4F2EA]">Verified Human Action & Audit Trail</h4>
              <p className="text-xs text-[#A9C2AE] leading-relaxed">
                Mandatory coordinator case ownership, check-in documentation, outcome tagging, and tamper-evident audit logging for complete accountability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: ARCHITECTURAL PHILOSOPHY (5 PILLARS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#273830] pt-24 sm:pt-32">
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Architectural Philosophy
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Engineered for human reality, <span className="font-serif italic font-normal text-[#A9C2AE]">not tech novelty.</span>
          </h2>
          <p className="text-sm text-[#A9C2AE] leading-relaxed">
            Every layer in Sahaara is designed around the actual behavior of Indian elders, family communication patterns, and care coordinator accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="text-xs font-mono font-bold text-[#72D8B0]">01</div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Personal Baselines</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Older adults have profoundly different normal patterns. What is active for an 84-year-old might be bedridden for a 70-year-old. We evaluate deviations against individual history.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="text-xs font-mono font-bold text-[#72D8B0]">02</div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Multi-Signal Fusion</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              No single sensor is reliable on its own. Sahaara fuses passive mobility, sleep hours, check-in responsiveness, medication logs, and family messages across 72-hour correlation windows.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="text-xs font-mono font-bold text-[#72D8B0]">03</div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Explainable Evidence Cards</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Zero black-box risk numbers. Coordinators see exactly which observations contributed, the baseline reference, and what data is missing or unverified before placing a call.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="text-xs font-mono font-bold text-[#72D8B0]">04</div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Accessible Interfaces</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Seniors in India rarely adopt complex standalone apps. We accept check-ins and observations through standard WhatsApp and conversational Hindi without requiring digital literacy training.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="text-xs font-mono font-bold text-[#72D8B0]">05</div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Closed-Loop Follow-up</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Early detection is useless if no one acts. Sahaara assigns alert ownership, tracks SLA countdowns, captures call notes, and seals outcomes into an immutable audit trail.
            </p>
          </div>

          {/* Pillar 6 / Safety */}
          <div className="p-7 rounded-2xl bg-[#202B26] border border-[#2E4037] space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-mono font-bold text-[#72D8B0]">06</div>
              <h4 className="font-bold text-base text-[#F4F2EA]">Human-in-the-Loop Safety</h4>
              <p className="text-xs text-[#A9C2AE] leading-relaxed">
                Statistical rules and NLP advise; human care professionals decide. Explicit emergency reports follow deterministic bypass protocols with zero delay.
              </p>
            </div>
            <Link
              href="/trust-and-safety"
              className="text-xs text-[#72D8B0] font-semibold hover:underline flex items-center gap-1.5 pt-2"
            >
              <span>Explore Safety Architecture</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION: HOW IT WORKS LIFECYCLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#273830] pt-24 sm:pt-32">
        <div className="max-w-3xl mb-14 space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Operational Lifecycle
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            How Sahaara works <span className="font-serif italic font-normal text-[#A9C2AE]">in 6 core steps.</span>
          </h2>
          <p className="text-sm text-[#A9C2AE] leading-relaxed">
            A reliable, repeatable loop from sensory ingestion to verified clinical and family follow-up.
          </p>
        </div>

        <WorkflowSteps mode="six-step" />

        <div className="text-center mt-12">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#72D8B0] hover:text-[#A9C2AE] transition-colors"
          >
            <span>View the complete 10-step system walkthrough and edge-case policies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION: WHY SAHAARA IS DIFFERENT & TRUST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#273830] pt-24 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch bg-[#17231F] border border-[#273830] rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
              Differentiators Without Novelty Hype
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#F4F2EA] leading-tight">
              Why Sahaara stands apart in Deviathon 2.0
            </h3>
            <p className="text-sm text-[#A9C2AE] leading-relaxed">
              We do not claim that reminders, SOS buttons, or monitoring dashboards are globally novel. Our defensible competitive differentiator is the integrated operational workflow:
            </p>

            <ul className="space-y-3.5 text-xs text-[#D8E2DC]">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Individual Baseline Context:</strong> Deviations are calculated against the senior’s own rolling 14-30 day pattern, preventing chronic false alarms.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Cross-Signal Fusion:</strong> Fuses activity, sleep, check-ins, medication logs, and family WhatsApp reports into unified evidence.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Triage to Follow-up:</strong> Every alert must be claimed by a coordinator, documented with phone notes, and resolved with an outcome code.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Auditability:</strong> State changes are written to append-only PostgreSQL tables for complete legal and clinical accountability.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/why-sahaara"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs transition-colors"
              >
                <span>Read Full 9 USPs & Competitive Matrix</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#72D8B0]" />
              </Link>
            </div>
          </div>

          {/* Trust & Transparency Panel */}
          <div className="lg:col-span-5 bg-[#141F1A] border border-[#273830] p-6 sm:p-7 rounded-2xl space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-[#F4F2EA] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#72D8B0]" />
              <span>Trust & Governance Commitments</span>
            </h4>

            <div className="space-y-3 text-xs text-[#A9C2AE] leading-relaxed">
              <div className="p-3.5 rounded-lg bg-[#17231F] border border-[#273830]">
                <strong className="text-[#F4F2EA]">No Autonomous Medical Diagnosis:</strong> Sahaara detects routine deviations for coordinator review. It never diagnoses illness or prescribes treatments.
              </div>

              <div className="p-3.5 rounded-lg bg-[#17231F] border border-[#273830]">
                <strong className="text-[#F4F2EA]">Missing-Data Awareness:</strong> Signals that drop offline are marked with explicit warning pills; we never fabricate healthy default values.
              </div>

              <div className="p-3.5 rounded-lg bg-[#17231F] border border-[#273830]">
                <strong className="text-[#F4F2EA]">Synthetic Data Disclosed:</strong> Public evaluations and demo personas are deterministically generated synthetic fixtures to guarantee zero patient privacy exposure.
              </div>

              <div className="p-3.5 rounded-lg bg-[#17231F] border border-[#273830]">
                <strong className="text-[#F4F2EA]">DPDP 2023 Principles:</strong> Designed with purpose specification, verifiable digital consent, and role-based access restrictions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION: FINAL EDITORIAL INVITATION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-10 sm:p-16 rounded-3xl bg-[#17231F] border border-[#273830] shadow-xl space-y-6">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Ready to Evaluate Sahaara?
          </span>

          <h2 className="text-3xl sm:text-4xl font-medium text-[#F4F2EA] tracking-tight">
            See how an observation <br />
            <span className="font-serif italic font-normal text-[#A9C2AE]">becomes human care.</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#A9C2AE] max-w-xl mx-auto leading-relaxed">
            Test the 8 reproducible scenarios—from stable routines to sudden falls and missing sensor data—in our guided, fully interactive demonstration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-sm shadow-sm transition-all cursor-pointer"
            >
              <Play className="w-4 h-4 fill-current text-[#72D8B0]" />
              <span>Launch Interactive Demo</span>
            </Link>

            <Link
              href="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#202B26] hover:bg-[#283A31] text-[#D8E2DC] font-medium text-sm border border-[#2E4037] transition-colors"
            >
              <span>Explore All 17 Features</span>
              <ArrowRight className="w-4 h-4 text-[#8F9A92]" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

