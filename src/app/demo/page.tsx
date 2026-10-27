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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-16 sm:space-y-24">
      <Breadcrumb items={[{ label: 'Interactive Demonstration' }]} />

      {/* Header Intro */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-medium">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Interactive Product Simulator · 8 Seeded Scenarios</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          Experience Sahaara as a <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#A9C2AE]">care coordinator.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          Test the complete operational workflow—from multi-signal observation ingestion and personal
          baseline comparison to explainable triage, coordinator check-in calls, and immutable audit
          sealing. Select any of the 8 canonical scenarios below to explore.
        </p>
      </div>

      {/* Interactive Simulator Component */}
      <DemoSimulator />

      {/* Evaluator & Judge Walkthrough Guide */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Evaluation Guide for Deviathon 2.0 Judges
          </span>
          <h3 className="text-2xl font-medium text-[#F4F2EA] mt-1">
            Five Recommended Steps to Test Platform Depth
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold">TEST 1</span>
            <h4 className="font-semibold text-[#F4F2EA]">Multi-Signal Fusion</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              Select <strong className="text-[#F4F2EA]">Scenario 2 (Gradual Change)</strong>. Notice how steps, sleep, and a WhatsApp remark coalesce into a single High alert without duplicate pings.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold">TEST 2</span>
            <h4 className="font-semibold text-[#F4F2EA]">Acknowledge Case</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              Click <strong className="text-[#F4F2EA]">&ldquo;Acknowledge Alert&rdquo;</strong> in the console. Observe the case status shift to "Acknowledged" and the SLA countdown halt.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold">TEST 3</span>
            <h4 className="font-semibold text-[#F4F2EA]">Log Check-In Call</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              Switch to <strong className="text-[#F4F2EA]">&ldquo;Action & Follow-up&rdquo;</strong>. Type conversational check-in notes, select an outcome code, and save follow-up.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold">TEST 4</span>
            <h4 className="font-semibold text-[#F4F2EA]">Verify Audit Provenance</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              Switch to the <strong className="text-[#F4F2EA]">&ldquo;Live Audit Trail&rdquo;</strong> tab. Verify that your recent actions were appended in real-time with SHA-256 hash stamp.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold">TEST 5</span>
            <h4 className="font-semibold text-[#F4F2EA]">Deterministic Bypass</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              Switch to <strong className="text-[#F4F2EA]">Scenario 3 (Fall / SOS)</strong>. Observe how the deterministic rule immediately marks the case Critical regardless of baseline score.
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Links */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/ai-and-intelligence"
          className="text-[#72D8B0] font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Explore the 9-Layer AI & Intelligence Architecture</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/evaluation"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          View Synthetic Benchmark Results (200 Seniors / 90 Days) →
        </Link>
      </div>
    </div>
  );
}
