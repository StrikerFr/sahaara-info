import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  Activity,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  UserCheck,
  Users,
  Database,
  Brain,
  MessageSquare,
  Lock,
  FileCheck,
  Workflow
} from 'lucide-react';
import { WorkflowSteps } from '@/components/WorkflowSteps';

export const metadata = {
  title: 'Product Overview: The Coordinator-First Wellbeing Engine',
  description:
    'Complete architecture and product lifecycle of Sahaara: Data Layer, Intelligence Layer, Communication Layer, Coordinator Workflow, and Auditability.'
};

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Product Overview' }]} />

      {/* Hero Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Activity className="w-3.5 h-3.5" />
          <span>System Architecture & Capabilities</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          A coordinator-first platform for{' '}
          <span className="text-teal-400">proactive home care.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Sahaara bridges the gap between passive elderly monitoring and decisive human care. By combining
          personal baselines, multi-signal evidence, and a closed-loop follow-up workflow, it equips care
          coordinators to identify and manage routine changes with speed, empathy, and complete accountability.
        </p>
      </div>

      {/* 5 Distinct System Layers */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            System Separation of Concerns
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">The Five Platform Layers</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Sahaara is modularly architected into five distinct functional layers, ensuring data integrity, strict boundaries, and auditable accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Layer 1 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono font-bold text-xs flex items-center justify-center">
              01
            </div>
            <h4 className="font-bold text-sm text-white">The Data Layer</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Standardises incoming time-series (steps, sleep, check-ins, medication logs, and family WhatsApp texts) into a canonical schema with strict timestamp verification and deduplication.
            </p>
          </div>

          {/* Layer 2 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono font-bold text-xs flex items-center justify-center">
              02
            </div>
            <h4 className="font-bold text-sm text-white">The Intelligence Layer</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Maintains rolling personal baselines (14-30 days), evaluates deterministic safety rules, applies statistical anomaly detection (Isolation Forest), and structures explainable evidence cards.
            </p>
          </div>

          {/* Layer 3 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono font-bold text-xs flex items-center justify-center">
              03
            </div>
            <h4 className="font-bold text-sm text-white">The Communication Layer</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Interfaces via official Meta WhatsApp Cloud API webhooks. Accepts colloquial Hindi and English check-ins, authenticates senders, and sends proactive coordinator-approved updates.
            </p>
          </div>

          {/* Layer 4 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono font-bold text-xs flex items-center justify-center">
              04
            </div>
            <h4 className="font-bold text-sm text-white">The Coordinator Workflow</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Priority triage queue with SLA timers, alert acknowledgement, call logging, note capture, family notification routing, and structured resolution codes.
            </p>
          </div>

          {/* Layer 5 */}
          <div className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/10 border border-teal-500/30 text-teal-400 font-mono font-bold text-xs flex items-center justify-center">
              05
            </div>
            <h4 className="font-bold text-sm text-white">The Evaluation & Audit Layer</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Immutable PostgreSQL audit logs tracking all state changes, combined with reproducible synthetic evaluation benchmarks for precision, recall, and lead time.
            </p>
          </div>
        </div>
      </section>

      {/* WHO USES SAHAARA */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Primary Stakeholders
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">Who Uses Sahaara?</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm flex items-center gap-1.5 text-teal-300">
              <UserCheck className="w-4 h-4" />
              <span>Care Coordinators</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              <strong>Primary operational users.</strong> They review the prioritised triage queue, inspect explainable evidence, claim case ownership, call seniors or families, and record outcomes.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm flex items-center gap-1.5 text-teal-300">
              <Users className="w-4 h-4" />
              <span>Older Adults (Seniors)</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              <strong>Recipients of care.</strong> They submit simple daily morning check-ins via WhatsApp, receive gentle medication reminders, and speak naturally with human coordinators without technical friction.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm flex items-center gap-1.5 text-teal-300">
              <MessageSquare className="w-4 h-4" />
              <span>Authorised Family Members</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              <strong>Informed partners.</strong> They text observations or concerns into the care WhatsApp line, receive verified wellbeing updates, and are alerted when human escalation is required.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm flex items-center gap-1.5 text-teal-300">
              <FileCheck className="w-4 h-4" />
              <span>Care Organisations & Judges</span>
            </h4>
            <p className="text-slate-400 leading-relaxed">
              <strong>Operational supervisors & evaluators.</strong> Care leadership monitors SLA compliance and case throughput. Evaluators review synthetic benchmarks and data governance integrity.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT SAHAARA DOES NOT DO */}
      <section className="bg-rose-950/20 border border-rose-500/30 rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-rose-400">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <h3 className="font-bold text-lg text-white">
            Explicit System Boundaries: What Sahaara Does NOT Do
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300 leading-relaxed">
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
            <strong className="text-rose-300 block mb-1">❌ No Medical Diagnosis:</strong>
            Sahaara never predicts or concludes disease presence (e.g. "Congestive Heart Failure" or "COVID-19"). It only flags observable deviations (e.g. "step decline + sleep disruption").
          </div>
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
            <strong className="text-rose-300 block mb-1">❌ No Autonomous Treatment or Dosing:</strong>
            The platform never prescribes drugs, suggests dosage changes, or advises on medical contraindications.
          </div>
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
            <strong className="text-rose-300 block mb-1">❌ No Government Emergency Dispatch:</strong>
            The system does not directly dispatch 108/112 emergency ambulances. It notifies human coordinators, family leads, and designated emergency contacts.
          </div>
          <div className="p-3 bg-slate-900/80 rounded-xl border border-slate-800">
            <strong className="text-rose-300 block mb-1">❌ No Silent Data Imputation:</strong>
            If a sensor drops offline, the system marks the data stream as missing; it never fabulates healthy baseline numbers to mask gaps.
          </div>
        </div>
      </section>

      {/* 10-Step Operational Lifecycle */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Detailed Lifecycle
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Complete Case Lifecycle: From Observation to Resolution
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Explore the exact 10 sequential operational steps executed by the platform and the coordinator team.
          </p>
        </div>

        <WorkflowSteps mode="ten-step" />
      </section>

      {/* Bottom CTA to Features & Demo */}
      <div className="p-8 rounded-2xl bg-[#0f172a] border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-lg text-white">Explore All 17 Product Features</h3>
          <p className="text-xs text-slate-400 mt-1">
            Inspect the full directory of core, intelligence, workflow, and governance capabilities.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/features"
            className="px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <span>All Features Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/demo"
            className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            <span>Launch Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
