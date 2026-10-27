import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { DemoSimulator } from '@/components/DemoSimulator';
import { Play, Sparkles, ShieldCheck, CheckCircle2, Info, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Interactive Demonstration: Guided Care Coordinator Simulator',
  description:
    'Hands-on interactive demonstration of Sahaara for Deviathon 2.0 judges. Test 8 reproducible scenarios, acknowledge alerts, log follow-up actions, and inspect live audit trails.'
};

export default function DemoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Breadcrumb items={[{ label: 'Interactive Demonstration' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Interactive Product Simulator · 8 Seeded Scenarios</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Experience Sahaara as a{' '}
          <span className="text-teal-400">Care Coordinator.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Test the complete operational workflow—from multi-signal observation ingestion and personal
          baseline comparison to explainable triage, coordinator check-in calls, and immutable audit
          sealing. Select any of the 8 canonical scenarios below to explore.
        </p>
      </div>

      {/* Interactive Simulator Component */}
      <DemoSimulator />

      {/* Evaluator & Judge Walkthrough Guide */}
      <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Evaluation Guide for Deviathon 2.0 Judges
          </h2>
          <h3 className="text-xl font-bold text-white mt-1">
            Five Recommended Steps to Test Platform Depth
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-mono text-teal-400 font-bold">TEST 1</span>
            <h4 className="font-semibold text-slate-200">Inspect Multi-Signal Fusion</h4>
            <p className="text-slate-400 leading-relaxed">
              Select <strong>Scenario 2 (Gradual Change)</strong>. Notice how steps, sleep, and a WhatsApp remark coalesce into a single High alert without duplicate pings.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-mono text-teal-400 font-bold">TEST 2</span>
            <h4 className="font-semibold text-slate-200">Acknowledge Case</h4>
            <p className="text-slate-400 leading-relaxed">
              Click <strong>"Acknowledge Alert"</strong> in the top console. Observe the case status shift to "Acknowledged" and the SLA countdown halt.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-mono text-teal-400 font-bold">TEST 3</span>
            <h4 className="font-semibold text-slate-200">Log Check-In Call</h4>
            <p className="text-slate-400 leading-relaxed">
              Switch to <strong>"Action & Follow-up"</strong>. Type conversational check-in notes, select an outcome code, and click "Save Follow-up & Close Case".
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-mono text-teal-400 font-bold">TEST 4</span>
            <h4 className="font-semibold text-slate-200">Verify Audit Provenance</h4>
            <p className="text-slate-400 leading-relaxed">
              Switch to the <strong>"Live Audit Trail"</strong> tab. Verify that your recent actions were appended in real-time with actor identity and timestamps.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-2">
            <span className="font-mono text-teal-400 font-bold">TEST 5</span>
            <h4 className="font-semibold text-slate-200">Deterministic Rule Test</h4>
            <p className="text-slate-400 leading-relaxed">
              Switch to <strong>Scenario 3 (Fall / SOS)</strong>. Observe how the deterministic rule immediately marks the case Critical regardless of baseline score.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
        <Link
          href="/ai-and-intelligence"
          className="text-teal-400 font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Explore the 9-Layer AI & Intelligence Architecture</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/evaluation"
          className="text-slate-400 hover:text-slate-200 transition-colors"
        >
          View Synthetic Benchmark Results (200 Seniors / 90 Days) →
        </Link>
      </div>
    </div>
  );
}
