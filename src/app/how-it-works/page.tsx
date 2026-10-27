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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28">
      <Breadcrumb items={[{ label: 'How It Works' }]} />

      {/* Header Intro */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-medium">
          <Workflow className="w-3.5 h-3.5" />
          <span>Operational Lifecycle & Policies</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          How Sahaara works: <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#A9C2AE]">step by step.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          From the moment a senior is registered to daily observation ingestion, baseline comparison,
          evidence aggregation, coordinator review, and audit sealing, every step is designed for clarity,
          speed, and clinical accountability.
        </p>
      </div>

      {/* 10-Step Detailed Process */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Sequential Pipeline
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            The 10 sequential steps from <span className="font-serif italic font-normal text-[#A9C2AE]">observation to outcome.</span>
          </h2>
        </div>

        <WorkflowSteps mode="ten-step" />
      </section>

      {/* Case Timeline: 72-Hour Walkthrough */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="border-b border-[#273830] pb-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Illustrative Timeline
          </span>
          <h3 className="text-2xl sm:text-3xl font-medium text-[#F4F2EA] mt-1">
            Chronology of a Managed Case: Mrs. Sarojini Verma
          </h3>
          <p className="text-xs sm:text-sm text-[#A9C2AE] mt-1 max-w-2xl">
            How a series of subtle observations over 72 hours transitioned into an explainable alert, coordinator call, and documented resolution.
          </p>
        </div>

        <div className="space-y-4 text-xs">
          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#72D8B0] uppercase font-bold">
                Day 1 · 08:30 AM
              </span>
              <div className="font-semibold text-sm text-[#F4F2EA] mt-0.5">Mild Step Count Reduction</div>
              <p className="text-[#A9C2AE] mt-0.5 leading-relaxed">
                Pedometer records 2,400 steps (37% below personal 3,800-step baseline). Flagged as mild outlier; no alert queued yet.
              </p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded bg-[#202B26] text-[#A9C2AE] border border-[#2E4037] shrink-0 font-mono">
              Status: Monitored
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#E2B77E] uppercase font-bold">
                Day 2 · 06:45 AM
              </span>
              <div className="font-semibold text-sm text-[#F4F2EA] mt-0.5">Nocturnal Sleep Disruption</div>
              <p className="text-[#A9C2AE] mt-0.5 leading-relaxed">
                Sleep tracker records 4.8 hours with 4 awakenings (historical norm 7.4 hrs). Daily step count falls further to 1,420 steps.
              </p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded bg-[#B87922]/20 text-[#E2B77E] border border-[#B87922]/40 shrink-0 font-mono">
              Status: Cross-Signal Watch
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#E89898] uppercase font-bold">
                Day 3 · 02:10 PM
              </span>
              <div className="font-semibold text-sm text-[#F4F2EA] mt-0.5">Family WhatsApp Text & Missed Pill</div>
              <p className="text-[#A9C2AE] mt-0.5 leading-relaxed">
                Afternoon diabetic pill unconfirmed. Son Amit texts WhatsApp helpline stating mother sounded breathless and skipped lunch. Multi-Signal Engine fires High Priority Alert (ALT-7892).
              </p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded bg-[#B94343]/20 text-[#E89898] border border-[#B94343]/40 shrink-0 font-mono">
              Status: High Alert Queued
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#72D8B0] uppercase font-bold">
                Day 3 · 02:18 PM
              </span>
              <div className="font-semibold text-sm text-[#F4F2EA] mt-0.5">Coordinator Claim & Empathetic Call</div>
              <p className="text-[#A9C2AE] mt-0.5 leading-relaxed">
                Coordinator Priya Sharma acknowledges alert within 3 minutes (SLA: 45m). Places telephone call to son Amit, learning Mrs. Verma had started new eye drops causing mild dizziness. Neighbor visits with khichdi.
              </p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded bg-[#245B49]/30 text-[#72D8B0] border border-[#245B49]/50 shrink-0 font-mono">
              Status: Action Logged
            </span>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-mono text-[#72D8B0] uppercase font-bold">
                Day 3 · 03:00 PM
              </span>
              <div className="font-semibold text-sm text-[#F4F2EA] mt-0.5">Case Resolved & Audit Trail Sealed</div>
              <p className="text-[#A9C2AE] mt-0.5 leading-relaxed">
                Priya documents call notes and marks case &ldquo;Resolved with Family&rdquo;. Scheduled check-in task set for 7:00 PM. Immutable cryptographic audit log permanently committed.
              </p>
            </div>
            <span className="text-[11px] px-2.5 py-1 rounded bg-[#245B49]/40 text-[#72D8B0] border border-[#72D8B0]/40 shrink-0 font-mono">
              Status: Closed & Sealed
            </span>
          </div>
        </div>
      </section>

      {/* THREE CRITICAL EDGE CASES */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Robustness Under Failure
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            How Sahaara handles <span className="font-serif italic font-normal text-[#A9C2AE]">critical edge cases.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Edge Case 1: Missing Data */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="flex items-center gap-2 text-[#E2B77E]">
              <AlertTriangle className="w-4 h-4 shrink-0 text-[#B87922]" />
              <h4 className="font-bold text-sm text-[#F4F2EA]">What Happens When Data Is Missing?</h4>
            </div>
            <p className="text-[#A9C2AE] leading-relaxed">
              If a pedometer battery drains or a check-in is unanswered, Sahaara <strong className="text-[#F4F2EA]">never silently fills missing values with assumed normal numbers</strong>.
            </p>
            <ul className="space-y-2 text-[#8F9A92]">
              <li className="flex items-start gap-2">
                <span className="text-[#B87922]">•</span>
                <span>The stream is tagged with an explicit amber warning pill.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B87922]">•</span>
                <span>The risk engine widens uncertainty bands and lowers confidence tier.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B87922]">•</span>
                <span>If total silence exceeds configured hours, a "Check Connection / Device Battery" coordinator task is raised.</span>
              </li>
            </ul>
          </div>

          {/* Edge Case 2: Integration Failure */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="flex items-center gap-2 text-[#72D8B0]">
              <RefreshCw className="w-4 h-4 shrink-0" />
              <h4 className="font-bold text-sm text-[#F4F2EA]">What Happens When an API Fails?</h4>
            </div>
            <p className="text-[#A9C2AE] leading-relaxed">
              If local broadband cuts out or the Meta webhook encounters network latency, sensor gateways cache observations locally.
            </p>
            <ul className="space-y-2 text-[#8F9A92]">
              <li className="flex items-start gap-2">
                <span className="text-[#72D8B0]">•</span>
                <span>All inbound requests use idempotent keys to eliminate duplicate processing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#72D8B0]">•</span>
                <span>Upon reconnect, batch data is re-indexed by original occurrence timestamp.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#72D8B0]">•</span>
                <span>Temporal sorting prevents sudden batch delivery from triggering false "burst activity" alarms.</span>
              </li>
            </ul>
          </div>

          {/* Edge Case 3: Urgent Safety Report */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="flex items-center gap-2 text-[#E89898]">
              <ShieldAlert className="w-4 h-4 shrink-0 text-[#B94343]" />
              <h4 className="font-bold text-sm text-[#F4F2EA]">What If an Urgent Concern Is Reported?</h4>
            </div>
            <p className="text-[#A9C2AE] leading-relaxed">
              If an explicit fall report, chest pain keyword, or hardware SOS button trigger arrives, machine learning models are <strong className="text-[#F4F2EA]">completely bypassed</strong>.
            </p>
            <ul className="space-y-2 text-[#8F9A92]">
              <li className="flex items-start gap-2">
                <span className="text-[#B94343]">•</span>
                <span>Deterministic Rule (Rule_FALL_OR_SOS) fires synchronously in &lt;10ms.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B94343]">•</span>
                <span>Case is pinned to the absolute top of the triage queue with a 15-minute SLA.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B94343]">•</span>
                <span>Immediate automated SMS/push notification is dispatched to standby on-call coordinators.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA to Demo */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#17231F] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-bold text-lg text-[#F4F2EA]">Experience the Lifecycle Live</h3>
          <p className="text-xs text-[#A9C2AE] mt-1 max-w-xl">
            Test the coordinator workflow, acknowledge alerts, and record follow-up notes in the interactive simulator.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/demo"
            className="px-5 py-3 rounded-xl bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Launch Interactive Demo</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#72D8B0]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
