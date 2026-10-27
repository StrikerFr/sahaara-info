import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import {
  Brain,
  Cpu,
  Layers,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Code2,
  Workflow,
  Sparkles,
  Zap,
  Lock
} from 'lucide-react';

export const metadata = {
  title: 'AI & Intelligence Architecture: 9-Layer Explainable Pipeline',
  description:
    'Technical deep dive into Sahaara’s 9-layer intelligence architecture: personal baseline computation, deterministic safety rules, Isolation Forest anomaly detection, and grounded natural-language explanation.'
};

export default function AiIntelligencePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28">
      <Breadcrumb items={[{ label: 'AI & Intelligence' }]} />

      {/* Header Intro */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-medium">
          <Brain className="w-3.5 h-3.5" />
          <span>Intelligence Architecture & Grounding</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          Explainable, grounded intelligence. <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#A9C2AE]">Zero black-box guesses.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          Healthcare decision-support requires unshakeable transparency. Sahaara couples deterministic
          safety rules with personal baseline statistical distributions and supervised NLP extraction,
          strictly preventing generative hallucinations and ensuring coordinators always understand the
          evidence behind an alert.
        </p>
      </div>

      {/* Interactive 9-Layer Architecture Diagram */}
      <ArchitectureDiagram />

      {/* RULES VS ANOMALY DETECTION (COMPARISON) */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Dual Engine Philosophy
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Deterministic rules vs. <span className="font-serif italic font-normal text-[#A9C2AE]">statistical anomaly detection.</span>
          </h2>
          <p className="text-sm text-[#A9C2AE] leading-relaxed">
            Why Sahaara combines declarative safety rules with machine learning rather than relying exclusively on either.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Rules Engine */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#72D8B0] font-bold uppercase text-[11px] tracking-wider">
                ENGINE 1 · DETERMINISTIC RULES
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-[#245B49]/30 text-[#72D8B0] border border-[#245B49]/50 font-semibold">
                Safety Critical
              </span>
            </div>

            <h4 className="font-bold text-base text-[#F4F2EA]">Declarative Safety Guardrails</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              Applied immediately upon observation ingestion. Evaluates explicit conditions with 100% mathematical certainty and zero latency.
            </p>

            <ul className="space-y-2.5 text-[#D8E2DC] pt-3 border-t border-[#273830]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">SOS Button & Fall Events:</strong> Immediate Critical alert with &lt;15 min SLA.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Critical Keyword Match:</strong> Evaluates explicit phrases ("fell down", "chest pain", "unconscious").
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Guaranteed Execution:</strong> Rules can never be suppressed, downgraded, or bypassed by an ML score.
                </span>
              </li>
            </ul>
          </div>

          {/* Anomaly Detection Engine */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[#A9C2AE] font-bold uppercase text-[11px] tracking-wider">
                ENGINE 2 · ISOLATION FOREST
              </span>
              <span className="text-[10px] px-2.5 py-0.5 rounded bg-[#202B26] text-[#A9C2AE] border border-[#2E4037] font-semibold">
                Multi-Dimensional Drift
              </span>
            </div>

            <h4 className="font-bold text-base text-[#F4F2EA]">Statistical Pattern Recognition</h4>
            <p className="text-[#A9C2AE] leading-relaxed">
              Evaluates multi-dimensional behavioral vectors to detect compound, insidious declines that no individual threshold catches.
            </p>

            <ul className="space-y-2.5 text-[#D8E2DC] pt-3 border-t border-[#273830]">
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Feature Representation:</strong> [mobility_dev, sleep_dev, checkin_delay, med_delay, sentiment_shift].
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Continuous Anomaly Score:</strong> Normalised to [0 - 100] attention modifier.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Strictly Advisory:</strong> Anomaly scores suggest review priority; they never constitute clinical diagnosis.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SAMPLE INPUT AND OUTPUT (JSON CONTRACTS) */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-8 sm:p-10 space-y-6 shadow-xl">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Technical Transparency
          </span>
          <h3 className="text-2xl font-medium text-[#F4F2EA] mt-1">
            Sample Canonical Ingestion & Generated Alert Payload
          </h3>
          <p className="text-xs sm:text-sm text-[#A9C2AE] mt-1">
            How a multi-signal observation stream is ingested and transformed into a structured, grounded evidence card.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-xs font-mono">
          {/* Input JSON */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[#8F9A92]">
              <span className="font-bold text-[#F4F2EA]">1. Inbound Ingestion Request</span>
              <span className="text-[#72D8B0]">POST /api/observations</span>
            </div>
            <pre className="p-4 rounded-xl bg-[#141F1A] border border-[#273830] text-[#A9C2AE] overflow-x-auto leading-relaxed">
{`{
  "senior_id": "SEN-8012",
  "observation_type": "multi_signal_event",
  "recorded_at": "2026-10-28T08:45:00Z",
  "signals": {
    "daily_steps": 1420,
    "sleep_hours": 4.8,
    "nocturnal_awakenings": 4,
    "medication_afternoon_confirmed": false,
    "family_message": "Mummy sounded breathless and skipped lunch"
  },
  "source_channels": ["pedometer", "sleep_tracker", "whatsapp"]
}`}
            </pre>
          </div>

          {/* Output JSON */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[#8F9A92]">
              <span className="font-bold text-[#F4F2EA]">2. Synthesized Evidence Payload</span>
              <span className="text-[#E2B77E]">Alert Generated (ALT-7892)</span>
            </div>
            <pre className="p-4 rounded-xl bg-[#141F1A] border border-[#273830] text-[#A9C2AE] overflow-x-auto leading-relaxed">
{`{
  "alert_id": "ALT-7892",
  "priority": "High",
  "sla_minutes": 45,
  "engine": "MultiSignal_Correlation",
  "z_score_composite": 2.84,
  "evidence": {
    "mobility": "1,420 steps (-62% vs 30d median: 3,800)",
    "sleep": "4.8 hrs (Norm: 7.4 hrs, 4 awakenings)",
    "medication": "Metformin 500mg unconfirmed (+120 min)",
    "family_report": "Breathlessness & anorexia reported"
  },
  "missing_data": ["Blood pressure reading unavailable"],
  "suggested_action": "Immediate call to assess breathlessness."
}`}
            </pre>
          </div>
        </div>
      </section>

      {/* WHY THE LLM IS NOT THE PRIMARY SAFETY ENGINE */}
      <section className="bg-[#B87922]/10 border border-[#B87922]/30 rounded-3xl p-8 sm:p-10 space-y-5 text-xs text-[#D8E2DC] leading-relaxed">
        <div className="flex items-center gap-2.5 text-[#E2B77E]">
          <AlertTriangle className="w-5 h-5 shrink-0 text-[#B87922]" />
          <h3 className="font-bold text-base text-[#F4F2EA]">
            Architectural Guardrail: Why the LLM Is Not the Primary Safety Engine
          </h3>
        </div>
        <p className="text-sm text-[#A9C2AE]">
          In poorly architected healthcare products, teams pass raw health logs into a generative Large
          Language Model (LLM) and ask it to &ldquo;decide if the patient is sick&rdquo;. This is fundamentally dangerous:
        </p>
        <ul className="space-y-2.5 text-xs text-[#D8E2DC]">
          <li className="flex items-start gap-2">
            <span className="text-[#B87922] font-bold">•</span>
            <span>
              <strong className="text-[#F4F2EA]">Generative Hallucinations:</strong> LLMs can invent unrecorded clinical facts or hallucinate medical explanations not present in the data.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B87922] font-bold">•</span>
            <span>
              <strong className="text-[#F4F2EA]">Probabilistic Inconsistency:</strong> The same patient logs can yield contradictory priority recommendations across subsequent API invocations.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#B87922] font-bold">•</span>
            <span>
              <strong className="text-[#F4F2EA]">Sahaara’s Grounded Architecture:</strong> In Sahaara, risk priority and alert generation are computed <strong className="text-[#72D8B0]">strictly by deterministic code and statistical models</strong>. The LLM is restricted exclusively to summarising pre-computed, verified JSON facts into plain English bullet points. It cannot alter risk scores or invent supporting data.
            </span>
          </li>
        </ul>
      </section>

      {/* Bottom CTA to Technology Page */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/technology"
          className="text-[#72D8B0] font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Tech Stack, Database Schema & Vercel Deployment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          Test Evidence Cards in Simulator →
        </Link>
      </div>
    </div>
  );
}
