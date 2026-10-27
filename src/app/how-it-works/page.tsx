import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { WorkflowSteps } from '@/components/WorkflowSteps';
import {
  Workflow,
  ArrowRight,
  ShieldAlert,
  AlertTriangle,
  RefreshCw,
  CheckCircle2,
  Clock,
  UserCheck,
  Database,
  Brain,
  MessageSquare
} from 'lucide-react';

export const metadata = {
  title: 'How It Works: 10-Step Operational Flow & Edge Case Policies',
  description:
    'Comprehensive step-by-step guide to Sahaara: from enrolment and baseline computation to multi-signal detection, coordinator review, and edge-case policies.'
};

export default function HowItWorksPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'How It Works' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Workflow className="w-3.5 h-3.5" />
          <span>Operational Lifecycle & Policies</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          How Sahaara works:{' '}
          <span className="text-teal-400">Step by step.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          From the moment a senior is registered to daily observation ingestion, baseline comparison,
          evidence aggregation, coordinator review, and audit sealing, every step is designed for clarity,
          speed, and clinical accountability.
        </p>
      </div>

      {/* 10-Step Detailed Process */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Sequential Pipeline
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            The 10 Sequential Steps from Observation to Outcome
          </h3>
        </div>

        <WorkflowSteps mode="ten-step" />
      </section>

      {/* Case Timeline: 72-Hour Walkthrough */}
      <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Illustrative Timeline
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Chronology of a Managed Case: Mrs. Sarojini Verma
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            How a series of subtle observations over 72 hours transitioned into an explainable alert, coordinator call, and documented resolution.
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-teal-400 uppercase font-bold">
                Day 1 · 08:30 AM
              </span>
              <div className="font-semibold text-slate-200 mt-0.5">Mild Step Count Reduction</div>
              <p className="text-slate-400 mt-0.5">
                Pedometer records 2,400 steps (37% below personal 3,800-step baseline). Flagged as mild outlier; no alert queued yet.
              </p>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700 shrink-0 font-mono">
              Status: Monitored
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-amber-400 uppercase font-bold">
                Day 2 · 06:45 AM
              </span>
              <div className="font-semibold text-slate-200 mt-0.5">Nocturnal Sleep Disruption</div>
              <p className="text-slate-400 mt-0.5">
                Sleep tracker records 4.8 hours with 4 awakenings (historical norm 7.4 hrs). Daily step count falls further to 1,420 steps.
              </p>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-500/30 shrink-0 font-mono">
              Status: Cross-Signal Watch
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-rose-400 uppercase font-bold">
                Day 3 · 02:10 PM
              </span>
              <div className="font-semibold text-slate-200 mt-0.5">Family WhatsApp Text & Missed Pill</div>
              <p className="text-slate-400 mt-0.5">
                Afternoon diabetic pill unconfirmed. Son Amit texts WhatsApp helpline stating mother sounded breathless and skipped lunch. Multi-Signal Engine fires High Priority Alert (ALT-7892).
              </p>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-500/30 shrink-0 font-mono">
              Status: High Alert Queued
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-teal-400 uppercase font-bold">
                Day 3 · 02:18 PM
              </span>
              <div className="font-semibold text-slate-200 mt-0.5">Coordinator Claim & Empathetic Call</div>
              <p className="text-slate-400 mt-0.5">
                Coordinator Priya Sharma acknowledges alert within 3 minutes (SLA: 45m). Places telephone call to son Amit, learning Mrs. Verma had started new eye drops causing mild dizziness. Neighbor visits with khichdi.
              </p>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-teal-950 text-teal-300 border border-teal-500/30 shrink-0 font-mono">
              Status: Action Logged
            </span>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold">
                Day 3 · 03:00 PM
              </span>
              <div className="font-semibold text-slate-200 mt-0.5">Case Resolved & Audit Trail Sealed</div>
              <p className="text-slate-400 mt-0.5">
                Priya documents call notes and marks case "Resolved with Family". Scheduled check-in task set for 7:00 PM. Immutable cryptographic audit log permanently committed.
              </p>
            </div>
            <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-500/30 shrink-0 font-mono">
              Status: Closed & Sealed
            </span>
          </div>
        </div>
      </section>

      {/* THREE CRITICAL EDGE CASES */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Robustness Under Failure
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            How Sahaara Handles Three Critical Edge Cases
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Edge Case 1: Missing Data */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-amber-400">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <h4 className="font-bold text-sm text-white">What Happens When Data Is Missing?</h4>
            </div>
            <p className="text-slate-300 leading-relaxed">
              If a pedometer battery drains or a check-in is unanswered, Sahaara <strong>never silently fills missing values with assumed normal numbers</strong>.
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400">•</span>
                <span>The stream is tagged with an explicit amber warning pill.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400">•</span>
                <span>The risk engine widens uncertainty bands and lowers confidence tier.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-amber-400">•</span>
                <span>If total silence exceeds configured hours, a "Check Connection / Device Battery" coordinator task is raised.</span>
              </li>
            </ul>
          </div>

          {/* Edge Case 2: Integration Failure */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-blue-400">
              <RefreshCw className="w-4 h-4 shrink-0" />
              <h4 className="font-bold text-sm text-white">What Happens When an API Fails?</h4>
            </div>
            <p className="text-slate-300 leading-relaxed">
              If local broadband cuts out or the Meta webhook encounters network latency, sensor gateways cache observations locally.
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-blue-400">•</span>
                <span>All inbound requests use idempotent keys to eliminate duplicate processing.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-400">•</span>
                <span>Upon reconnect, batch data is re-indexed by original occurrence timestamp.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-blue-400">•</span>
                <span>Temporal sorting prevents sudden batch delivery from triggering false "burst activity" alarms.</span>
              </li>
            </ul>
          </div>

          {/* Edge Case 3: Urgent Safety Report */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-rose-400">
              <ShieldAlert className="w-4 h-4 shrink-0" />
              <h4 className="font-bold text-sm text-white">What If an Urgent Concern Is Reported?</h4>
            </div>
            <p className="text-slate-300 leading-relaxed">
              If an explicit fall report, chest pain keyword, or hardware SOS button trigger arrives, machine learning models are <strong>completely bypassed</strong>.
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-start gap-1.5">
                <span className="text-rose-400">•</span>
                <span>Deterministic Rule (Rule_FALL_OR_SOS) fires synchronously in &lt;10ms.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-400">•</span>
                <span>Case is pinned to the absolute top of the triage queue with a 15-minute SLA.</span>
              </li>
              <li className="flex items-start gap-1.5">
                <span className="text-rose-400">•</span>
                <span>Immediate automated SMS/push notification is dispatched to standby on-call coordinators.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA to Demo */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-lg text-white">Experience the Lifecycle Live</h3>
          <p className="text-xs text-slate-300 mt-1">
            Test the coordinator workflow, acknowledge alerts, and record follow-up notes in the interactive simulator.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/demo"
            className="px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-lg shadow-teal-700/20"
          >
            <span>Launch Interactive Demo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
