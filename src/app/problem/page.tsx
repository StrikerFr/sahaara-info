import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  AlertTriangle,
  ArrowRight,
  Activity,
  HeartCrack,
  Clock,
  ShieldAlert,
  CheckCircle2,
  PhoneCall,
  FileText
} from 'lucide-react';

export const metadata = {
  title: 'The Problem: Fragmented Observations in Elder Care',
  description:
    'Why gradual routine changes in older adults living at home go unnoticed across fragmented WhatsApp chats, sensor logs, and phone check-ins.'
};

export default function ProblemPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28">
      <Breadcrumb items={[{ label: 'The Problem' }]} />

      {/* Header Banner */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#E89898] text-xs font-medium">
          <AlertTriangle className="w-3.5 h-3.5 text-[#B94343]" />
          <span>The Challenge Space · Deviathon 2.0</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          Why gradual changes in elderly wellbeing <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#E89898]">slip through the cracks.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          Older adults living independently rarely experience sudden, unannounced declines. More often,
          subtle shifts in mobility, sleep, medication adherence, and appetite unfold quietly over days.
          Because information is scattered across phone calls, family WhatsApp chats, and isolated sensors,
          care teams struggle to see the bigger picture until an avoidable emergency occurs.
        </p>
      </div>

      {/* Demographic Context Callouts (LASI / MoHFW Research) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#72D8B0] font-mono">12% → 319M</div>
          <div className="font-bold text-sm text-[#F4F2EA]">Demographic Transition in India</div>
          <p className="text-xs text-[#A9C2AE] leading-relaxed">
            According to the Longitudinal Ageing Study in India (LASI) and MoHFW data, older adults constitute ~12% of the population, projected to expand to ~319 million by 2050, with millions living independently in urban centers.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#E2B77E] font-mono">29 Studies</div>
          <div className="font-bold text-sm text-[#F4F2EA]">Systematic RPM Evidence (2024)</div>
          <p className="text-xs text-[#A9C2AE] leading-relaxed">
            A Nature Digital Medicine systematic review showed that remote monitoring improves specific adherence and safety metrics, but isolated data without human care coordination fails to improve long-term outcomes.
          </p>
        </div>

        <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
          <div className="text-3xl sm:text-4xl font-extrabold text-[#E89898] font-mono">35 Articles</div>
          <div className="font-bold text-sm text-[#F4F2EA]">Digital Adherence Limits (2026)</div>
          <p className="text-xs text-[#A9C2AE] leading-relaxed">
            Published systematic reviews indicate that reminder apps alone show variable efficacy. Without contextual understanding and human follow-up, passive notification pings lead to alarm fatigue.
          </p>
        </div>
      </div>

      {/* 6 Core Friction Points in Detail */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Operational Root Causes
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Six structural breakdowns in <span className="font-serif italic font-normal text-[#A9C2AE]">modern elder care.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Friction 1 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 flex items-center justify-center text-[#72D8B0] font-mono text-xs font-bold">
              01
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Fragmented Communication Silos</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Care-relevant signals live in separate universes: a daughter’s WhatsApp text in Delhi, a visiting attendant’s verbal report, a smartwatch step reading, a pillbox reminder ping, and a coordinator’s handwritten call notes. No single entity connects these data points into a unified timeline.
            </p>
          </div>

          {/* Friction 2 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 flex items-center justify-center text-[#72D8B0] font-mono text-xs font-bold">
              02
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Failure of Universal Population Thresholds</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Conventional medical monitoring uses fixed rules (e.g. &lt;3,000 steps = sedentary; &lt;6 hours sleep = sleep deficit). But an 84-year-old recovering from hip surgery and a 71-year-old active gardener have vastly different normal habits. Population thresholds create endless false alarms for one and missed decline for the other.
            </p>
          </div>

          {/* Friction 3 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 flex items-center justify-center text-[#72D8B0] font-mono text-xs font-bold">
              03
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Alert Overload & Coordinator Burnout</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Care coordinators monitoring 50 to 150 seniors simultaneously face dozens of disconnected pings each morning. When systems generate uncontextualised alerts for every minor fluctuation, coordinators experience alarm fatigue and inadvertently overlook subtle genuine deteriorations.
            </p>
          </div>

          {/* Friction 4 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 flex items-center justify-center text-[#72D8B0] font-mono text-xs font-bold">
              04
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Incomplete, Delayed, & Conflicting Data</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Real-world data is imperfect: sensors run out of battery, seniors forget to wear bands, Wi-Fi drops, and subjective reports contradict objective readings (e.g., senior reports "feeling great" to avoid burdening family, while their step count has halved). Systems must handle missingness and conflict transparently.
            </p>
          </div>

          {/* Friction 5 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 flex items-center justify-center text-[#72D8B0] font-mono text-xs font-bold">
              05
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Digital Accessibility & Literacy Barriers</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Most elderly individuals in India do not use complex mobile apps with multi-step navigation, English menus, and login screens. Forcing seniors into specialized apps results in rapid abandonment. Any effective solution must work over ubiquitous channels like WhatsApp and natural voice.
            </p>
          </div>

          {/* Friction 6 */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 flex items-center justify-center text-[#72D8B0] font-mono text-xs font-bold">
              06
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">The Follow-Up Black Hole</h4>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Detecting a concern is only 20% of the battle. In unstructured workflows, there is no system of record tracking who called the senior, what was discussed, whether the family was briefed, or what follow-up task was scheduled. Unclosed alerts represent a major patient safety hazard.
            </p>
          </div>
        </div>
      </section>

      {/* ILLUSTRATIVE SCENARIO: Senior B (Mrs. Sarojini Verma) */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#273830] pb-5">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
              Illustrative Problem Case
            </span>
            <h3 className="text-2xl sm:text-3xl font-medium text-[#F4F2EA] mt-1">
              Senior B: When Four Minor Changes Add Up to High Risk
            </h3>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-[#B87922]/20 border border-[#B87922]/40 text-[#E2B77E] font-semibold">
            Non-Diagnostic Wellbeing Review
          </span>
        </div>

        <p className="text-sm text-[#A9C2AE] leading-relaxed">
          Consider <strong className="text-[#F4F2EA]">Mrs. Sarojini Verma (74)</strong>, living alone in Delhi. Over a 72-hour period, four separate events occurred across different channels:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <div className="text-[10px] font-mono text-[#8F9A92]">OBSERVATION 1 · PEDOMETER</div>
            <div className="text-sm font-bold text-[#F4F2EA]">Activity Decline</div>
            <p className="text-xs text-[#A9C2AE]">
              Steps fell from 3,800 to 1,420 steps (-62%).
            </p>
            <div className="text-[11px] text-[#8F9A92] italic pt-1 border-t border-[#273830]">In isolation: Maybe she stayed in to read?</div>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <div className="text-[10px] font-mono text-[#8F9A92]">OBSERVATION 2 · SLEEP SYNC</div>
            <div className="text-sm font-bold text-[#F4F2EA]">Sleep Fragmentation</div>
            <p className="text-xs text-[#A9C2AE]">
              Sleep dropped to 4.8 hours with 4 awakenings.
            </p>
            <div className="text-[11px] text-[#8F9A92] italic pt-1 border-t border-[#273830]">In isolation: Bad night of sleep happens to everyone.</div>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <div className="text-[10px] font-mono text-[#8F9A92]">OBSERVATION 3 · WHATSAPP CHAT</div>
            <div className="text-sm font-bold text-[#F4F2EA]">Son’s Passing Remark</div>
            <p className="text-xs text-[#A9C2AE]">
              Son texted: &ldquo;Mummy said she skipped lunch and felt tired.&rdquo;
            </p>
            <div className="text-[11px] text-[#8F9A92] italic pt-1 border-t border-[#273830]">In isolation: Elder appetite varies naturally.</div>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <div className="text-[10px] font-mono text-[#8F9A92]">OBSERVATION 4 · MEDICATION LOG</div>
            <div className="text-sm font-bold text-[#F4F2EA]">Unconfirmed Dose</div>
            <p className="text-xs text-[#A9C2AE]">
              Routine Metformin dose unconfirmed for &gt;2 hours.
            </p>
            <div className="text-[11px] text-[#8F9A92] italic pt-1 border-t border-[#273830]">In isolation: Easy to forget to tap &ldquo;Taken&rdquo;.</div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#202B26] border border-[#2E4037] space-y-2.5 text-xs text-[#D8E2DC] leading-relaxed">
          <h4 className="font-bold text-sm text-[#72D8B0]">
            Why Sahaara Treats This Combination as a High-Priority Check-In:
          </h4>
          <p>
            In existing fragmented systems, these 4 events trigger zero alerts because none of them crosses a catastrophic threshold. But when evaluated together against Mrs. Verma’s 45-day personal baseline, the probability of an underlying infection, dehydration, or cardiovascular fatigue is severe. Sahaara prompts coordinator Priya Sharma to place an empathetic 5-minute verification call, potentially preventing an acute hospital emergency.
          </p>
        </div>
      </section>

      {/* WHAT EXISTING APPROACHES ALREADY DO (FAIR COMPETITIVE BENCHMARK) */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Competitive Reality
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            What existing approaches already do <span className="font-serif italic font-normal text-[#A9C2AE]">(and where gaps remain).</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#A9C2AE] leading-relaxed">
            Sahaara respects existing commercial offerings. We do not claim competitors lack care or intelligence. Here is how conventional categories address this space:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <h4 className="font-bold text-[#F4F2EA] text-sm">Conventional Reminder Apps</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              <strong className="text-[#F4F2EA]">What they do well:</strong> Provide timely medication alarms and calendar notifications.
            </p>
            <p className="text-[#8F9A92] leading-relaxed">
              <strong className="text-[#E2B77E]">The operational gap:</strong> They operate in a single dimension. A missed alarm does not check step counts, sleep records, or family messages, and has no care coordinator assigned to follow up.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <h4 className="font-bold text-[#F4F2EA] text-sm">Emergency SOS & Panic Buttons</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              <strong className="text-[#F4F2EA]">What they do well:</strong> Excellent for acute crises when a senior is conscious and capable of pressing a button after a fall.
            </p>
            <p className="text-[#8F9A92] leading-relaxed">
              <strong className="text-[#E2B77E]">The operational gap:</strong> They are purely reactive. They provide zero early warning during the 3 to 5 days of insidious decline preceding the fall.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <h4 className="font-bold text-[#F4F2EA] text-sm">Telecare & Scheduled Call Services</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              <strong className="text-[#F4F2EA]">What they do well:</strong> Provide warm human conversation and companion check-ins.
            </p>
            <p className="text-[#8F9A92] leading-relaxed">
              <strong className="text-[#E2B77E]">The operational gap:</strong> Calls are scheduled at arbitrary times without data context. If a senior politely says "Sab theek hai" on a 2-minute call, the coordinator has no objective visibility into sleep disruption or mobility loss.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
            <h4 className="font-bold text-[#F4F2EA] text-sm">Remote Patient Monitoring (RPM) Dashboards</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              <strong className="text-[#F4F2EA]">What they do well:</strong> Display complex clinical charts (ECG, SpO2, blood pressure) for hospital outpatient teams.
            </p>
            <p className="text-[#8F9A92] leading-relaxed">
              <strong className="text-[#E2B77E]">The operational gap:</strong> Overly medicalized, high sensor cost, and relies on population thresholds. They rarely integrate informal family WhatsApp messages or track operational social follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#17231F] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
        <div>
          <h3 className="font-bold text-lg text-[#F4F2EA]">See How Sahaara Solves This</h3>
          <p className="text-xs text-[#A9C2AE] mt-1 max-w-xl">
            Explore the product architecture, multi-signal ingestion, and coordinator workflow.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/product"
            className="px-5 py-3 rounded-xl bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs transition-colors flex items-center gap-2 cursor-pointer"
          >
            <span>Product Overview</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#72D8B0]" />
          </Link>
          <Link
            href="/demo"
            className="px-5 py-3 rounded-xl bg-[#202B26] hover:bg-[#283A31] text-[#D8E2DC] font-medium text-xs border border-[#2E4037] transition-colors cursor-pointer"
          >
            <span>Test in Simulator</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
