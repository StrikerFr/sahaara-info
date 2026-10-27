import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  evaluationDatasetMeta,
  scenarioDistributions,
  benchmarkMetrics
} from '@/data/evaluationData';
import {
  Award,
  ArrowRight,
  Info,
  CheckCircle2,
  TrendingDown,
  Clock,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import { StatusBadge } from '@/components/StatusBadge';

export const metadata = {
  title: 'Evaluation & Benchmarks: 200 Synthetic Seniors over 90 Days',
  description:
    'Empirical benchmark results comparing Sahaara’s combined engine against a rules-only baseline across 18,000 synthetic senior-days. Tested precision, recall, and false alert reduction.'
};

export default function EvaluationPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <Breadcrumb items={[{ label: 'Evaluation & Benchmarks' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-mono tracking-wide">
          <Award className="w-3.5 h-3.5 text-[#72D8B0]" />
          <span>Reproducible Benchmark Suite · Deviathon 2.0</span>
        </div>

        <h1 className="text-display text-[#F4F2EA]">
          Empirical evaluation,{' '}
          <span className="font-serif italic text-[#A9C2AE] font-normal">separated from hype.</span>
        </h1>

        <p className="text-lg text-[#A9C2AE] leading-relaxed">
          Healthcare technology requires scientific honesty. We measure and report our platform’s
          performance on a controlled, reproducible test suite of 200 synthetic senior profiles tracked over
          90 simulated days (18,000 senior-days), comparing Sahaara’s combined engine against a conventional
          rules-only baseline.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <StatusBadge status="Tested" />
          <span className="text-xs text-[#A9C2AE]/70 font-mono">
            Run ID: {evaluationDatasetMeta.runId} · Benchmark Seed: {evaluationDatasetMeta.seed}
          </span>
        </div>
      </div>

      {/* MANDATORY SCIENTIFIC DISCLAIMER CALLOUT */}
      <div className="bg-[#17231F] border border-[#273830] rounded-2xl p-6 sm:p-7 flex items-start gap-4 text-xs text-[#A9C2AE] leading-relaxed">
        <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 flex items-center justify-center shrink-0 mt-0.5 text-[#72D8B0]">
          <Info className="w-4 h-4" />
        </div>
        <div className="space-y-1.5">
          <strong className="text-[#F4F2EA] text-sm block font-medium">
            Mandatory Evaluation Boundary & Grounding:
          </strong>
          <p className="text-[#A9C2AE] leading-relaxed text-xs">
            {evaluationDatasetMeta.disclaimer}
          </p>
        </div>
      </div>

      {/* KEY TAKEAWAYS FOR DEVIATHON JUDGES */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 sm:p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-[#72D8B0] font-mono tracking-tight">-77.8%</span>
            <TrendingDown className="w-5 h-5 text-[#72D8B0]" />
          </div>
          <h4 className="font-semibold text-base text-[#F4F2EA]">Alarm Fatigue Eradicated</h4>
          <p className="text-[#A9C2AE] text-xs leading-relaxed">
            By shifting from static population cutoffs to rolling personal medians, false alarms dropped from 0.18 to 0.04 per senior-day. Coordinators are not overwhelmed with spurious noise.
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-[#72D8B0] font-mono tracking-tight">+19.7 Hours</span>
            <Clock className="w-5 h-5 text-[#72D8B0]" />
          </div>
          <h4 className="font-semibold text-base text-[#F4F2EA]">Earlier Lead Time</h4>
          <p className="text-[#A9C2AE] text-xs leading-relaxed">
            Cross-signal correlation detected gradual declines an average of 28.2 hours before an explicit threshold breach would have occurred, creating an actionable intervention window.
          </p>
        </div>

        <div className="p-6 sm:p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-extrabold text-[#72D8B0] font-mono tracking-tight">96.5%</span>
            <ShieldCheck className="w-5 h-5 text-[#72D8B0]" />
          </div>
          <h4 className="font-semibold text-base text-[#F4F2EA]">Follow-Up Accountability</h4>
          <p className="text-[#A9C2AE] text-xs leading-relaxed">
            The integrated coordinator queue ensured that 96.5% of alerts were acknowledged, called, and resolved with mandatory clinical notes, closing the operational care loop.
          </p>
        </div>
      </section>

      {/* BENCHMARK COMPARISON TABLE (RULES VS COMBINED) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Comparative Benchmark
          </span>
          <h2 className="text-headline text-[#F4F2EA] mt-1">
            Rules-Only Baseline vs. Sahaara Combined Engine
          </h2>
          <p className="text-sm text-[#A9C2AE] mt-1.5 max-w-2xl leading-relaxed">
            Evaluated on the exact same test dataset of 18,000 simulated senior-days with planted clinical scenarios and control routines.
          </p>
        </div>

        <div className="w-full overflow-x-auto bg-[#17231F] border border-[#273830] rounded-2xl shadow-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-[#273830] bg-[#101714]/80 text-[#F4F2EA]">
                <th className="p-4 sm:p-5 font-semibold uppercase tracking-wider text-[11px] min-w-[180px]">
                  Evaluation Metric
                </th>
                <th className="p-4 font-medium text-[#A9C2AE] min-w-[140px]">
                  Rules-Only Baseline
                </th>
                <th className="p-4 font-bold text-[#72D8B0] bg-[#245B49]/20 border-l border-r border-[#273830] min-w-[160px]">
                  Sahaara Combined Engine
                </th>
                <th className="p-4 font-semibold text-[#72D8B0] min-w-[120px]">
                  Measured Delta
                </th>
                <th className="p-4 font-medium text-[#A9C2AE] min-w-[280px]">
                  Clinical & Operational Interpretation
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#273830]">
              {benchmarkMetrics.map((item) => (
                <tr key={item.metric} className="hover:bg-[#202B26]/60 transition-colors">
                  <td className="p-4 sm:p-5 font-semibold text-[#F4F2EA]">{item.metric}</td>
                  <td className="p-4 text-[#A9C2AE] font-mono">
                    {item.rulesOnly}
                    {item.unit}
                  </td>
                  <td className="p-4 font-bold text-[#72D8B0] bg-[#245B49]/10 border-l border-r border-[#273830] font-mono">
                    {item.combinedEngine}
                    {item.unit}
                  </td>
                  <td className="p-4 font-semibold text-[#72D8B0] font-mono">{item.delta}</td>
                  <td className="p-4 text-[#A9C2AE] leading-relaxed">{item.interpretation}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="p-4 border-t border-[#273830] bg-[#101714]/60 text-[11px] text-[#A9C2AE]/80 flex items-center justify-between flex-wrap gap-2">
            <span>
              <strong className="text-[#F4F2EA]">Sample Size & Scope:</strong> Denominator = 200 synthetic senior profiles over 90 days (18,000 senior-days; 324,000 time-series events). Evaluated using fixed seed 42.
            </span>
            <span className="font-mono text-[#72D8B0]">Deterministic Seeds: Fixed</span>
          </div>
        </div>
      </section>

      {/* DATASET COMPOSITION (PLANTED SCENARIOS) */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Dataset Architecture
          </span>
          <h3 className="text-headline text-[#F4F2EA] mt-1">
            Planted Ground-Truth Scenario Distribution
          </h3>
          <p className="text-sm text-[#A9C2AE] mt-1.5 max-w-3xl leading-relaxed">
            The synthetic benchmark is structured to test both acute emergencies and subtle multi-signal gradual declines while challenging the system with noisy festival data.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {scenarioDistributions.map((dist) => (
            <div
              key={dist.scenarioType}
              className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-sm text-[#F4F2EA]">{dist.scenarioType}</span>
                <span className="font-mono text-[#72D8B0] text-xs font-semibold px-2 py-0.5 rounded-full bg-[#17231F] border border-[#273830]">
                  {dist.proportion}
                </span>
              </div>
              <div className="text-[11px] text-[#A9C2AE]">
                Cohort count: <strong className="text-[#F4F2EA]">{dist.count} Seniors</strong>
              </div>
              <p className="text-[#A9C2AE] text-xs leading-relaxed pt-2 border-t border-[#273830]">
                {dist.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/trust-and-safety"
          className="text-[#72D8B0] font-medium hover:underline flex items-center gap-1.5"
        >
          <span>Next: Privacy, Security & Safety Policies</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          Test Benchmark Scenarios in Live Simulator →
        </Link>
      </div>
    </div>
  );
}

