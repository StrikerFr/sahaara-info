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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'AI & Intelligence' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Brain className="w-3.5 h-3.5" />
          <span>Intelligence Architecture & Grounding</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Explainable, grounded intelligence.{' '}
          <span className="text-teal-400">Zero black-box guesses.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Healthcare decision-support requires unshakeable transparency. Sahaara couples deterministic
          safety rules with personal baseline statistical distributions and supervised NLP extraction,
          strictly preventing generative hallucinations and ensuring coordinators always understand the
          evidence behind an alert.
        </p>
      </div>

      {/* Interactive 9-Layer Architecture Diagram */}
      <ArchitectureDiagram />

      {/* RULES VS ANOMALY DETECTION (COMPARISON) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Dual Engine Philosophy
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Deterministic Rules vs. Statistical Anomaly Detection
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            Why Sahaara combines declarative safety rules with machine learning rather than relying exclusively on either.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {/* Rules Engine */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-teal-400 font-bold uppercase">
                ENGINE 1 · DETERMINISTIC RULES
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-semibold">
                Safety Critical
              </span>
            </div>

            <h4 className="font-bold text-base text-white">Declarative Safety Guardrails</h4>
            <p className="text-slate-400 leading-relaxed">
              Applied immediately upon observation ingestion. Evaluates explicit conditions with 100% mathematical certainty and zero latency.
            </p>

            <ul className="space-y-2 text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>SOS Button & Fall Events:</strong> Immediate Critical alert with &lt;15 min SLA.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Critical Keyword Match:</strong> Evaluates explicit phrases ("fell down", "chest pain", "unconscious").
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Guaranteed Execution:</strong> Rules can never be suppressed, downgraded, or bypassed by an ML score.
                </span>
              </li>
            </ul>
          </div>

          {/* Anomaly Detection Engine */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-mono text-purple-400 font-bold uppercase">
                ENGINE 2 · ISOLATION FOREST
              </span>
              <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-400 border border-purple-500/30 font-semibold">
                Multi-Dimensional Drift
              </span>
            </div>

            <h4 className="font-bold text-base text-white">Statistical Pattern Recognition</h4>
            <p className="text-slate-400 leading-relaxed">
              Evaluates multi-dimensional behavioral vectors to detect compound, insidious declines that no individual threshold catches.
            </p>

            <ul className="space-y-2 text-slate-300 pt-2 border-t border-slate-800">
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Feature Representation:</strong> [mobility_dev, sleep_dev, checkin_delay, med_delay, sentiment_shift].
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Continuous Anomaly Score:</strong> Normalised to [0 - 100] attention modifier.
                </span>
              </li>
              <li className="flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Strictly Advisory:</strong> Anomaly scores suggest review priority; they never constitute clinical diagnosis.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SAMPLE INPUT AND OUTPUT (JSON CONTRACTS) */}
      <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Technical Transparency
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Sample Canonical Ingestion & Generated Alert Payload
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            How a multi-signal observation stream is ingested and transformed into a structured, grounded evidence card.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-xs font-mono">
          {/* Input JSON */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-bold text-slate-200">1. Inbound Ingestion Request</span>
              <span>POST /api/observations</span>
            </div>
            <pre className="p-4 rounded-xl bg-[#090d16] border border-slate-800 text-teal-300/90 overflow-x-auto leading-relaxed">
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
            <div className="flex items-center justify-between text-slate-400">
              <span className="font-bold text-slate-200">2. Synthesized Evidence Payload</span>
              <span>Alert Generated (ALT-7892)</span>
            </div>
            <pre className="p-4 rounded-xl bg-[#090d16] border border-slate-800 text-teal-300/90 overflow-x-auto leading-relaxed">
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
      <section className="bg-amber-950/20 border border-amber-500/30 rounded-3xl p-6 sm:p-8 space-y-4 text-xs text-slate-300 leading-relaxed">
        <div className="flex items-center gap-2 text-amber-400">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <h3 className="font-bold text-base text-white">
            Architectural Guardrail: Why the LLM Is Not the Primary Safety Engine
          </h3>
        </div>
        <p>
          In poorly architected healthcare products, teams pass raw health logs into a generative Large
          Language Model (LLM) and ask it to "decide if the patient is sick". This is fundamentally dangerous:
        </p>
        <ul className="space-y-2 text-slate-300">
          <li className="flex items-start gap-1.5">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Generative Hallucinations:</strong> LLMs can invent unrecorded clinical facts or hallucinate medical explanations not present in the data.
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Probabilistic Inconsistency:</strong> The same patient logs can yield contradictory priority recommendations across subsequent API invocations.
            </span>
          </li>
          <li className="flex items-start gap-1.5">
            <span className="text-amber-400 font-bold">•</span>
            <span>
              <strong>Sahaara’s Grounded Architecture:</strong> In Sahaara, risk priority and alert generation are computed <strong>strictly by deterministic code and statistical models</strong>. The LLM is restricted exclusively to summarising pre-computed, verified JSON facts into plain English bullet points. It cannot alter risk scores or invent supporting data.
            </span>
          </li>
        </ul>
      </section>

      {/* Bottom CTA to Technology Page */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
        <Link
          href="/technology"
          className="text-teal-400 font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Tech Stack, Database Schema & Vercel Deployment</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-slate-400 hover:text-slate-200 transition-colors"
        >
          Test Evidence Cards in Simulator →
        </Link>
      </div>
    </div>
  );
}
