import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  Users,
  AlertTriangle,
  ArrowRight,
  TrendingDown,
  PhoneCall,
  Activity,
  HeartCrack,
  Clock,
  ShieldAlert,
  Search,
  CheckCircle2,
  HelpCircle,
  FileText
} from 'lucide-react';

export const metadata = {
  title: 'The Problem: Fragmented Observations in Elder Care',
  description:
    'Why gradual routine changes in older adults living at home go unnoticed across fragmented WhatsApp chats, sensor logs, and phone check-ins.'
};

export default function ProblemPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'The Problem' }]} />

      {/* Header Banner */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-semibold">
          <AlertTriangle className="w-3.5 h-3.5" />
          <span>The Challenge Space · Deviathon 2.0</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Why gradual changes in elderly wellbeing{' '}
          <span className="text-rose-400">slip through the cracks.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Older adults living independently rarely experience sudden, unannounced declines. More often,
          subtle shifts in mobility, sleep, medication adherence, and appetite unfold quietly over days.
          Because information is scattered across phone calls, family WhatsApp chats, and isolated sensors,
          care teams struggle to see the bigger picture until a crisis occurs.
        </p>
      </div>

      {/* Demographic Context Callouts (LASI / MoHFW Research) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-2">
          <div className="text-3xl font-extrabold text-teal-400 font-mono">12% → 319M</div>
          <div className="font-bold text-sm text-slate-200">Demographic Transition in India</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            According to the Longitudinal Ageing Study in India (LASI) and MoHFW data, older adults constitute ~12% of the population, projected to expand to ~319 million by 2050, with millions living independently in urban centers.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-2">
          <div className="text-3xl font-extrabold text-amber-400 font-mono">29 Studies</div>
          <div className="font-bold text-sm text-slate-200">Systematic RPM Evidence (2024)</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            A Nature Digital Medicine systematic review showed that remote monitoring improves specific adherence and safety metrics, but isolated data without human care coordination fails to improve long-term outcomes.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-2">
          <div className="text-3xl font-extrabold text-rose-400 font-mono">35 Articles</div>
          <div className="font-bold text-sm text-slate-200">Digital Adherence Limits (2026)</div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Published systematic reviews indicate that reminder apps alone show variable efficacy. Without contextual understanding and human follow-up, passive notification pings lead to alarm fatigue.
          </p>
        </div>
      </div>

      {/* 6 Core Friction Points in Detail */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Operational Root Causes
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Six Structural Breakdowns in Modern Elder Care
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Friction 1 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
              01
            </div>
            <h4 className="font-bold text-base text-white">Fragmented Communication Silos</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Care-relevant signals live in separate universes: a daughter’s WhatsApp text in Delhi, a visiting attendant’s verbal report, a smartwatch step reading, a pillbox reminder ping, and a coordinator’s handwritten call notes. No single entity connects these data points into a unified timeline.
            </p>
          </div>

          {/* Friction 2 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
              02
            </div>
            <h4 className="font-bold text-base text-white">Failure of Universal Population Thresholds</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Conventional medical monitoring uses fixed rules (e.g. &lt;3,000 steps = sedentary; &lt;6 hours sleep = sleep deficit). But an 84-year-old recovering from hip surgery and a 71-year-old active gardener have vastly different normal habits. Population thresholds create endless false alarms for one and missed decline for the other.
            </p>
          </div>

          {/* Friction 3 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
              03
            </div>
            <h4 className="font-bold text-base text-white">Alert Overload & Coordinator Burnout</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Care coordinators monitoring 50 to 150 seniors simultaneously face dozens of disconnected pings each morning. When systems generate uncontextualised alerts for every minor fluctuation, coordinators experience alarm fatigue and inadvertently overlook subtle genuine deteriorations.
            </p>
          </div>

          {/* Friction 4 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
              04
            </div>
            <h4 className="font-bold text-base text-white">Incomplete, Delayed, & Conflicting Data</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Real-world data is imperfect: sensors run out of battery, seniors forget to wear bands, Wi-Fi drops, and subjective reports contradict objective readings (e.g., senior reports "feeling great" to avoid burdening family, while their step count has halved). Systems must handle missingness and conflict transparently.
            </p>
          </div>

          {/* Friction 5 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
              05
            </div>
            <h4 className="font-bold text-base text-white">Digital Accessibility & Literacy Barriers</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Most elderly individuals in India do not use complex mobile apps with multi-step navigation, English menus, and login screens. Forcing seniors into specialized apps results in rapid abandonment. Any effective solution must work over ubiquitous channels like WhatsApp and natural voice.
            </p>
          </div>

          {/* Friction 6 */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-bold">
              06
            </div>
            <h4 className="font-bold text-base text-white">The Follow-Up Black Hole</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Detecting a concern is only 20% of the battle. In unstructured workflows, there is no system of record tracking who called the senior, what was discussed, whether the family was briefed, or what follow-up task was scheduled. Unclosed alerts represent a major patient safety hazard.
            </p>
          </div>
        </div>
      </section>

      {/* ILLUSTRATIVE SCENARIO: Senior B (Mrs. Sarojini Verma) */}
      <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
              Illustrative Problem Case
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
              Senior B: When Four Minor Changes Add Up to High Risk
            </h3>
          </div>
          <span className="text-xs px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-semibold">
            Non-Diagnostic Wellbeing Review
          </span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          Consider <strong>Mrs. Sarojini Verma (74)</strong>, living alone in Delhi. Over a 72-hour period, four separate events occurred across different channels:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="text-[10px] font-mono text-slate-500">OBSERVATION 1 · PEDOMETER</div>
            <div className="text-sm font-bold text-slate-200">Activity Decline</div>
            <p className="text-xs text-slate-400">
              Steps fell from 3,800 to 1,420 steps (-62%).
            </p>
            <div className="text-[11px] text-slate-500 italic">In isolation: Maybe she stayed in to read?</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="text-[10px] font-mono text-slate-500">OBSERVATION 2 · SLEEP SYNC</div>
            <div className="text-sm font-bold text-slate-200">Sleep Fragmentation</div>
            <p className="text-xs text-slate-400">
              Sleep dropped to 4.8 hours with 4 awakenings.
            </p>
            <div className="text-[11px] text-slate-500 italic">In isolation: Bad night of sleep happens to everyone.</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="text-[10px] font-mono text-slate-500">OBSERVATION 3 · WHATSAPP CHAT</div>
            <div className="text-sm font-bold text-slate-200">Son’s Passing Remark</div>
            <p className="text-xs text-slate-400">
              Son texted: "Mummy said she skipped lunch and felt tired."
            </p>
            <div className="text-[11px] text-slate-500 italic">In isolation: Elder appetite varies naturally.</div>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <div className="text-[10px] font-mono text-slate-500">OBSERVATION 4 · MEDICATION LOG</div>
            <div className="text-sm font-bold text-slate-200">Unconfirmed Afternoon Dose</div>
            <p className="text-xs text-slate-400">
              Routine Metformin dose unconfirmed for &gt;2 hours.
            </p>
            <div className="text-[11px] text-slate-500 italic">In isolation: Easy to forget to tap "Taken".</div>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-teal-950/30 border border-teal-500/30 space-y-2 text-xs text-slate-300 leading-relaxed">
          <h4 className="font-bold text-sm text-teal-300">
            Why Sahaara Treats This Combination as a High-Priority Check-In:
          </h4>
          <p>
            In existing fragmented systems, these 4 events trigger zero alerts because none of them crosses a catastrophic threshold. But when evaluated together against Mrs. Verma’s 45-day personal baseline, the probability of an underlying infection, dehydration, or cardiovascular fatigue is severe. Sahaara prompts coordinator Priya Sharma to place an empathetic 5-minute verification call, potentially preventing an acute hospital emergency.
          </p>
        </div>
      </section>

      {/* WHAT EXISTING APPROACHES ALREADY DO (FAIR COMPETITIVE BENCHMARK) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Competitive Reality
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            What Existing Approaches Already Do (And Where Gaps Remain)
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Sahaara respects existing commercial offerings. We do not claim competitors lack care or intelligence. Here is how conventional categories address this space:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm">Conventional Reminder Apps</h4>
            <p className="text-slate-400 leading-relaxed">
              <strong>What they do well:</strong> Provide timely medication alarms and calendar notifications.
            </p>
            <p className="text-slate-500 leading-relaxed">
              <strong>The operational gap:</strong> They operate in a single dimension. A missed alarm does not check step counts, sleep records, or family messages, and has no care coordinator assigned to follow up.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm">Emergency SOS & Panic Buttons</h4>
            <p className="text-slate-400 leading-relaxed">
              <strong>What they do well:</strong> Excellent for acute crises when a senior is conscious and capable of pressing a button after a fall.
            </p>
            <p className="text-slate-500 leading-relaxed">
              <strong>The operational gap:</strong> They are purely reactive. They provide zero early warning during the 3 to 5 days of insidious decline preceding the fall.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm">Telecare & Scheduled Call Services</h4>
            <p className="text-slate-400 leading-relaxed">
              <strong>What they do well:</strong> Provide warm human conversation and companion check-ins.
            </p>
            <p className="text-slate-500 leading-relaxed">
              <strong>The operational gap:</strong> Calls are scheduled at arbitrary times without data context. If a senior politely says "Sab theek hai" on a 2-minute call, the coordinator has no objective visibility into sleep disruption or mobility loss.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#0f172a] border border-slate-800 space-y-2">
            <h4 className="font-bold text-slate-200 text-sm">Remote Patient Monitoring (RPM) Dashboards</h4>
            <p className="text-slate-400 leading-relaxed">
              <strong>What they do well:</strong> Display complex clinical charts (ECG, SpO2, blood pressure) for hospital outpatient teams.
            </p>
            <p className="text-slate-500 leading-relaxed">
              <strong>The operational gap:</strong> Overly medicalized, high sensor cost, and relies on population thresholds. They rarely integrate informal family WhatsApp messages or track operational social follow-up.
            </p>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-teal-950/60 to-slate-900 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-bold text-lg text-white">See How Sahaara Solves This</h3>
          <p className="text-xs text-slate-300 mt-1">
            Explore the product architecture, multi-signal ingestion, and coordinator workflow.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/product"
            className="px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
          >
            <span>Product Overview</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="/demo"
            className="px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
          >
            <span>Test in Simulator</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
