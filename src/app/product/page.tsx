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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28">
      <Breadcrumb items={[{ label: 'Product Overview' }]} />

      {/* Hero Intro */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-medium">
          <Activity className="w-3.5 h-3.5" />
          <span>System Architecture & Capabilities</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          A coordinator-first platform for <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#A9C2AE]">proactive home care.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          Sahaara bridges the gap between passive elderly monitoring and decisive human care. By combining
          personal baselines, multi-signal evidence, and a closed-loop follow-up workflow, it equips care
          coordinators to identify and manage routine changes with speed, empathy, and complete accountability.
        </p>
      </div>

      {/* 5 Distinct System Layers */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            System Separation of Concerns
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            The five platform <span className="font-serif italic font-normal text-[#A9C2AE]">architectural layers.</span>
          </h2>
          <p className="text-sm text-[#A9C2AE] leading-relaxed">
            Sahaara is modularly architected into five distinct functional layers, ensuring data integrity, strict boundaries, and auditable accountability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
          {/* Layer 1 */}
          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] font-mono font-bold text-xs flex items-center justify-center">
              01
            </div>
            <h4 className="font-bold text-sm text-[#F4F2EA]">The Data Layer</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Standardises incoming time-series (steps, sleep, check-ins, medication logs, and family WhatsApp texts) into a canonical schema with strict timestamp verification and deduplication.
            </p>
          </div>

          {/* Layer 2 */}
          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] font-mono font-bold text-xs flex items-center justify-center">
              02
            </div>
            <h4 className="font-bold text-sm text-[#F4F2EA]">The Intelligence Layer</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Maintains rolling personal baselines (14-30 days), evaluates deterministic safety rules, applies statistical anomaly detection (Isolation Forest), and structures explainable evidence cards.
            </p>
          </div>

          {/* Layer 3 */}
          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] font-mono font-bold text-xs flex items-center justify-center">
              03
            </div>
            <h4 className="font-bold text-sm text-[#F4F2EA]">Communication Layer</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Interfaces via official Meta WhatsApp Cloud API webhooks. Accepts colloquial Hindi and English check-ins, authenticates senders, and sends proactive coordinator-approved updates.
            </p>
          </div>

          {/* Layer 4 */}
          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] font-mono font-bold text-xs flex items-center justify-center">
              04
            </div>
            <h4 className="font-bold text-sm text-[#F4F2EA]">Coordinator Workflow</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Priority triage queue with SLA timers, alert acknowledgement, call logging, note capture, family notification routing, and structured resolution codes.
            </p>
          </div>

          {/* Layer 5 */}
          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] font-mono font-bold text-xs flex items-center justify-center">
              05
            </div>
            <h4 className="font-bold text-sm text-[#F4F2EA]">Evaluation & Audit</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Immutable PostgreSQL audit logs tracking all state changes, combined with reproducible synthetic evaluation benchmarks for precision, recall, and lead time.
            </p>
          </div>
        </div>
      </section>

      {/* WHO USES SAHAARA */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Primary Stakeholders
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Who uses Sahaara <span className="font-serif italic font-normal text-[#A9C2AE]">day to day?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 text-xs">
          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-2.5">
            <h4 className="font-bold text-[#F4F2EA] text-sm flex items-center gap-2">
              <UserCheck className="w-4 h-4 text-[#72D8B0]" />
              <span>Care Coordinators</span>
            </h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              <strong className="text-[#F4F2EA]">Primary operational users.</strong> They review the prioritised triage queue, inspect explainable evidence, claim case ownership, call seniors or families, and record outcomes.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-2.5">
            <h4 className="font-bold text-[#F4F2EA] text-sm flex items-center gap-2">
              <Users className="w-4 h-4 text-[#72D8B0]" />
              <span>Older Adults (Seniors)</span>
            </h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              <strong className="text-[#F4F2EA]">Recipients of care.</strong> They submit simple daily morning check-ins via WhatsApp, receive gentle medication reminders, and speak naturally with human coordinators without technical friction.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-2.5">
            <h4 className="font-bold text-[#F4F2EA] text-sm flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#72D8B0]" />
              <span>Family Members</span>
            </h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              <strong className="text-[#F4F2EA]">Informed partners.</strong> They text observations or concerns into the care WhatsApp line, receive verified wellbeing updates, and are alerted when human escalation is required.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-2.5">
            <h4 className="font-bold text-[#F4F2EA] text-sm flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-[#72D8B0]" />
              <span>Care Leadership & Judges</span>
            </h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              <strong className="text-[#F4F2EA]">Operational supervisors & evaluators.</strong> Care leadership monitors SLA compliance and case throughput. Evaluators review synthetic benchmarks and data governance integrity.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT SAHAARA DOES NOT DO */}
      <section className="bg-[#B94343]/10 border border-[#B94343]/30 rounded-3xl p-8 sm:p-10 space-y-6">
        <div className="flex items-center gap-2.5 text-[#E89898]">
          <AlertTriangle className="w-5 h-5 shrink-0 text-[#B94343]" />
          <h3 className="font-bold text-lg text-[#F4F2EA]">
            Explicit System Boundaries: What Sahaara Does NOT Do
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#D8E2DC] leading-relaxed">
          <div className="p-4 bg-[#141F1A] rounded-xl border border-[#273830]">
            <strong className="text-[#E89898] block mb-1">❌ No Medical Diagnosis:</strong>
            Sahaara never predicts or concludes disease presence (e.g. &ldquo;Congestive Heart Failure&rdquo; or &ldquo;COVID-19&rdquo;). It only flags observable deviations (e.g. &ldquo;step decline + sleep disruption&rdquo;).
          </div>
          <div className="p-4 bg-[#141F1A] rounded-xl border border-[#273830]">
            <strong className="text-[#E89898] block mb-1">❌ No Autonomous Treatment or Dosing:</strong>
            The platform never prescribes drugs, suggests dosage changes, or advises on medical contraindications.
          </div>
          <div className="p-4 bg-[#141F1A] rounded-xl border border-[#273830]">
            <strong className="text-[#E89898] block mb-1">❌ No Direct Ambulance Dispatch:</strong>
            The system does not directly dispatch 108/112 emergency ambulances. It notifies human coordinators, family leads, and designated emergency contacts.
          </div>
          <div className="p-4 bg-[#141F1A] rounded-xl border border-[#273830]">
            <strong className="text-[#E89898] block mb-1">❌ No Silent Data Imputation:</strong>
            If a sensor drops offline, the system marks the data stream as missing; it never fabulates healthy baseline numbers to mask gaps.
          </div>
        </div>
      </section>

      {/* 10-Step Operational Lifecycle */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Detailed Lifecycle
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Complete case lifecycle: <span className="font-serif italic font-normal text-[#A9C2AE]">from observation to resolution.</span>
          </h2>
          <p className="text-sm text-[#A9C2AE] leading-relaxed">
            Explore the exact 10 sequential operational steps executed by the platform and the coordinator team.
          </p>
        </div>

        <WorkflowSteps mode="ten-step" />
      </section>

      {/* Bottom CTA to Features & Demo */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#17231F] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-bold text-lg text-[#F4F2EA]">Explore All 17 Product Features</h3>
          <p className="text-xs text-[#A9C2AE] mt-1 max-w-xl">
            Inspect the full directory of core, intelligence, workflow, and governance capabilities.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/features"
            className="px-5 py-3 rounded-xl bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>All Features Directory</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#72D8B0]" />
          </Link>
          <Link
            href="/demo"
            className="px-5 py-3 rounded-xl bg-[#202B26] hover:bg-[#283A31] text-[#D8E2DC] font-medium text-xs border border-[#2E4037] transition-colors cursor-pointer"
          >
            <span>Launch Demo</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
