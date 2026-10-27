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
  MessageSquare,
  Sparkles,
  AlertTriangle,
  Play,
  Heart,
  Layers,
  FileText,
  Search,
  Lock,
  Eye,
  Brain
} from 'lucide-react';
import { WorkflowSteps } from '@/components/WorkflowSteps';
import { StatusBadge } from '@/components/StatusBadge';

export default function HomePage() {
  return (
    <div className="w-full space-y-24 py-8 sm:py-16">
      {/* SECTION B: HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span>Deviathon 2.0 Challenge · Problem by Samarth Life Management</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
            A change in routine should{' '}
            <span className="bg-gradient-to-r from-teal-400 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
              never go unnoticed.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Sahaara connects everyday wellbeing observations, personal baselines, and human-led
            follow-up to help care teams identify meaningful changes in older adults living at home.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-sm shadow-xl shadow-teal-700/25 transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Explore Interactive Demo</span>
            </Link>

            <Link
              href="/product"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold text-sm border border-slate-700/80 transition-colors"
            >
              <span>Product Architecture</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Non-Diagnostic Micro-Notice */}
          <p className="text-[11px] text-slate-500 max-w-lg mx-auto">
            Decision-support & care-coordination platform. Not a medical diagnostic system. Evaluated on synthetic benchmark fixtures.
          </p>
        </div>

        {/* Dashboard Preview Component (Realistic Illustration) */}
        <div className="mt-12 max-w-5xl mx-auto rounded-2xl bg-[#0f172a] border border-slate-800 shadow-2xl overflow-hidden">
          {/* Mock Window Header */}
          <div className="bg-[#131d33] px-4 py-3 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
              <span className="text-xs text-slate-400 font-mono ml-2">
                sahaara-coordinator-console.internal / triage-queue
              </span>
            </div>
            <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-500/30">
              SYNTHETIC PREVIEW
            </span>
          </div>

          {/* Mock Content */}
          <div className="p-5 sm:p-8 space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
              <div>
                <div className="text-xs font-mono uppercase text-teal-400 font-semibold">
                  Active Priority Triage
                </div>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  Senior Profile: Mrs. Sarojini Verma (Age 74 · Vasant Kunj)
                </h3>
                <p className="text-xs text-slate-400">
                  Living independently · Baseline: 45 days established · Coordinator: Priya Sharma
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>High Priority Alert (SLA: 32 mins remaining)</span>
                </span>
              </div>
            </div>

            {/* 3-Column Preview: Signals, Evidence Card, Action Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Column 1: Multi-Signals */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-4 h-4 text-teal-400" />
                  <span>Incoming Observations</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300">Pedometer Steps</span>
                    <span className="font-mono text-amber-400 font-bold">1,420 (-62%)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300">Night Sleep</span>
                    <span className="font-mono text-amber-400 font-bold">4.8h (4 Awakenings)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300">WhatsApp Check-in</span>
                    <span className="font-mono text-amber-400 font-bold">Delayed (+90 min)</span>
                  </div>
                  <div className="p-2 rounded bg-slate-800/60 border border-slate-700/60 flex items-center justify-between">
                    <span className="text-slate-300">Son Text (WhatsApp)</span>
                    <span className="font-mono text-rose-400 font-bold">"Skipped lunch"</span>
                  </div>
                </div>
              </div>

              {/* Column 2: Explainable Evidence Card */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3">
                <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Brain className="w-4 h-4 text-teal-400" />
                  <span>Synthesized Evidence</span>
                </div>
                <div className="text-xs text-slate-300 leading-relaxed space-y-2">
                  <p>
                    <strong className="text-white">Why Prioritised:</strong> Correlated decline across 3 continuous days. Individual step drop combined with sleep disruption and reported appetite loss exceeds personal baseline tolerance (z = 2.84).
                  </p>
                  <div className="p-2 bg-amber-950/20 border border-amber-500/30 rounded text-[11px] text-amber-300">
                    ⚠️ Missing: Blood pressure reading (no cuff connected).
                  </div>
                </div>
              </div>

              {/* Column 3: Coordinator Action */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-3 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Phone className="w-4 h-4 text-teal-400" />
                    <span>Human Follow-Up Action</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    Assigned to: <strong className="text-white">Priya Sharma</strong>.
                    Recommended: Call senior to assess breathlessness and verify lunch intake.
                  </p>
                </div>

                <Link
                  href="/demo"
                  className="w-full text-center py-2 px-3 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-md shadow-teal-700/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Test This Case in Simulator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: PROBLEM-TO-SOLUTION STORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Transforming Fragmented Noise
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            From Isolated Signals to Closed-Loop Care
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Elderly wellbeing signals arrive across separate channels. Sahaara connects them into an understandable workflow from observation to human action.
          </p>
        </div>

        {/* 4-Step Transformation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Step 1 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 relative">
            <div className="text-xs font-mono font-bold text-slate-500">STEP 1</div>
            <div className="text-rose-400 font-bold text-sm">Fragmented Signals</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Family WhatsApp chats, pedometer syncs, telephone calls, missed check-ins, and pill reports arrive in silos.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-900 p-2 rounded border border-slate-800">
              Result: Critical gradual trends are missed or ignored until acute collapse.
            </div>
          </div>

          {/* Step 2 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 relative">
            <div className="text-xs font-mono font-bold text-slate-500">STEP 2</div>
            <div className="text-teal-400 font-bold text-sm">Personal Baselines</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Calculates normal historical distributions for each individual over 14-30 days rather than generic population cutoffs.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-900 p-2 rounded border border-slate-800">
              Result: Noise is filtered; genuine behavioral drift is highlighted.
            </div>
          </div>

          {/* Step 3 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 relative">
            <div className="text-xs font-mono font-bold text-slate-500">STEP 3</div>
            <div className="text-amber-400 font-bold text-sm">Explainable Evidence</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Synthesizes contributing observations, source attribution, and missing data into an actionable triage queue.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-900 p-2 rounded border border-slate-800">
              Result: Coordinator understands exactly why an alert fired in &lt;15s.
            </div>
          </div>

          {/* Step 4 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 relative">
            <div className="text-xs font-mono font-bold text-slate-500">STEP 4</div>
            <div className="text-emerald-400 font-bold text-sm">Closed-Loop Follow-up</div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Mandatory case ownership, phone check-in call documentation, outcome tagging, and immutable audit logging.
            </p>
            <div className="text-[11px] text-slate-500 bg-slate-900 p-2 rounded border border-slate-800">
              Result: Every alert leads to documented human action and resolution.
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: THE 5 CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Architectural Philosophy
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            The Five Pillars of Sahaara
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            Engineered around realistic human behavior, operational discipline, and technical transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
              01
            </div>
            <h4 className="font-bold text-base text-white">Personal Baselines</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Older adults have profoundly different normal patterns. What is active for an 84-year-old might be bedridden for a 70-year-old. We evaluate deviations against individual history.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
              02
            </div>
            <h4 className="font-bold text-base text-white">Multi-Signal Observation</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              No single sensor is reliable on its own. Sahaara fuses passive mobility, sleep hours, check-in responsiveness, medication logs, and family messages across 72-hour correlation windows.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
              03
            </div>
            <h4 className="font-bold text-base text-white">Explainable Evidence Cards</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero black-box risk numbers. Coordinators see exactly which observations contributed, the baseline reference, and what data is missing or unverified before placing a call.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
              04
            </div>
            <h4 className="font-bold text-base text-white">Accessible Communication</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Seniors in India rarely adopt complex apps. We accept check-ins and observations through standard WhatsApp and conversational Hindi without requiring digital literacy training.
            </p>
          </div>

          {/* Pillar 5 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3 hover:border-teal-500/40 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
              05
            </div>
            <h4 className="font-bold text-base text-white">Closed-Loop Follow-up</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Early detection is useless if no one acts. Sahaara assigns alert ownership, tracks SLA countdowns, captures call notes, and seals outcomes into an immutable audit trail.
            </p>
          </div>

          {/* Pillar 6 / Bonus Safety */}
          <div className="p-6 rounded-2xl bg-teal-950/30 border border-teal-500/40 space-y-3 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/50 flex items-center justify-center text-teal-300 font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-white mt-3">Human-in-the-Loop Safety</h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                AI and statistical rules advise; licensed human coordinators decide. Explicit emergency reports follow deterministic protocols with zero ML delay.
              </p>
            </div>
            <Link
              href="/trust-and-safety"
              className="text-xs text-teal-400 font-semibold hover:underline flex items-center gap-1"
            >
              <span>Explore Safety Policy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION F: HOW SAHAARA WORKS (6 STEPS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Operational Lifecycle
          </h2>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            How Sahaara Works in 6 Steps
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-2">
            A clear, repeatable workflow from sensory ingestion to verified outcome.
          </p>
        </div>

        <WorkflowSteps mode="six-step" />

        <div className="text-center mt-8">
          <Link
            href="/how-it-works"
            className="inline-flex items-center gap-2 text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            <span>View the complete 10-step system walkthrough and edge-case policies</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* SECTION G & H: WHY SAHAARA IS DIFFERENT & TRUST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <div className="space-y-5">
            <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
              Differentiators Without Novelty Hype
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
              Why Sahaara Stands Apart in Deviathon 2.0
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We do not claim that reminders, SOS buttons, or monitoring dashboards are globally novel. Our defensible competitive differentiator is the integrated operational workflow:
            </p>

            <ul className="space-y-3 text-xs text-slate-300">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Individual Baseline Context:</strong> Deviations are calculated against the senior’s own rolling 14-30 day pattern, preventing chronic false alarms.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Cross-Signal Fusion:</strong> Fuses activity, sleep, check-ins, medication logs, and family WhatsApp reports into unified evidence.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Triage to Follow-up:</strong> Every alert must be claimed by a coordinator, documented with phone notes, and resolved with an outcome code.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Auditability:</strong> State changes are written to append-only PostgreSQL tables for complete legal and clinical accountability.
                </span>
              </li>
            </ul>

            <div className="pt-2">
              <Link
                href="/why-sahaara"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors"
              >
                <span>Read Full 9 USPs & Competitive Matrix</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Trust & Transparency Panel */}
          <div className="bg-[#090d16] border border-slate-800 p-6 rounded-2xl space-y-4">
            <h4 className="font-bold text-sm text-slate-200 uppercase tracking-wider flex items-center gap-2 text-teal-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Trust & Transparency Commitments</span>
            </h4>

            <div className="space-y-3 text-xs text-slate-400 leading-relaxed">
              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-slate-200">No Autonomous Medical Diagnosis:</strong> Sahaara detects routine deviations for coordinator review. It never diagnoses illness or prescribes treatments.
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-slate-200">Missing-Data Awareness:</strong> Signals that drop offline are marked with explicit warning pills; we never fabricate healthy default values.
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-slate-200">Synthetic Data Disclosed:</strong> Public evaluations and demo personas are deterministically generated synthetic fixtures to guarantee zero patient privacy exposure.
              </div>

              <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                <strong className="text-slate-200">DPDP 2023 Principles:</strong> Designed with purpose specification, verifiable digital consent, and role-based access restrictions.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION I: FINAL CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#131d33] to-[#0f172a] border border-slate-800 shadow-2xl space-y-6">
          <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Ready to Evaluate Sahaara?
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            See how an observation becomes an action.
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Test the 8 reproducible scenarios—from stable routines to sudden falls and missing sensor data—in our guided, fully interactive demonstration.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow-xl shadow-teal-700/25 transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Launch Interactive Demo</span>
            </Link>

            <Link
              href="/features"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm border border-slate-700 transition-colors"
            >
              <span>Explore All 17 Features</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
