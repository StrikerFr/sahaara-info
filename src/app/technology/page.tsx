import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  Cpu,
  Layers,
  Database,
  Server,
  Cloud,
  Lock,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCode2,
  Workflow,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'Technology Stack & Architecture: Full-Stack Engineering Spec',
  description:
    'Detailed technical documentation of Sahaara’s technology stack: Next.js 16 App Router, TypeScript, Tailwind CSS, Supabase PostgreSQL, Row-Level Security, and Vercel edge deployment.'
};

export default function TechnologyPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Tech Stack & Architecture' }]} />

      {/* Hero Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5" />
          <span>Full-Stack Engineering Blueprint</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Modern, reliable, and{' '}
          <span className="text-teal-400">deployment-conscious.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Sahaara is architected to balance rapid hackathon iteration with serious production-grade
          engineering: Next.js full-stack edge routing, Supabase PostgreSQL with cryptographic Row-Level
          Security, and official Meta WhatsApp Cloud API webhooks.
        </p>
      </div>

      {/* COMPLETE ARCHITECTURAL PIPELINE (FLOW DIAGRAM) */}
      <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Data Pipeline Flow
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            End-to-End Conceptual Flow Pipeline
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            How observations flow continuously from heterogeneous devices to audited coordinator action.
          </p>
        </div>

        {/* Visual Pipeline Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-400">PHASE 1</span>
            <div className="font-bold text-slate-200">Observation Sources</div>
            <p className="text-slate-400 leading-relaxed">
              Pedometers, sleep monitors, check-in buttons, WhatsApp texts, attendant logs.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-400">PHASE 2</span>
            <div className="font-bold text-slate-200">Ingestion & Idempotency</div>
            <p className="text-slate-400 leading-relaxed">
              Next.js API route handlers validate Zod schemas, verify HMAC signatures, and deduplicate events.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-400">PHASE 3</span>
            <div className="font-bold text-slate-200">Baselines & Dual Engine</div>
            <p className="text-slate-400 leading-relaxed">
              Computes rolling 14-30d personal baselines; evaluates safety rules and Isolation Forest vectors.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-400">PHASE 4</span>
            <div className="font-bold text-slate-200">Triage Queue & SLA</div>
            <p className="text-slate-400 leading-relaxed">
              Prioritises cases into Critical, High, Medium, Low tiers with countdown escalation timers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="text-[10px] font-mono font-bold text-teal-400">PHASE 5</span>
            <div className="font-bold text-slate-200">Action & Audit Sealing</div>
            <p className="text-slate-400 leading-relaxed">
              Coordinator claims case, logs phone notes, selects outcome, and seals append-only audit trail.
            </p>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGY TIERS */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Technical Stack Breakdown
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">Core System Technologies & Rationale</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Frontend */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center font-bold">
              UI
            </div>
            <h4 className="font-bold text-base text-white">Frontend & Interaction</h4>
            <div className="space-y-2 text-slate-400 leading-relaxed">
              <div>
                <strong className="text-slate-200">Next.js 16 (App Router):</strong> Server components for fast edge rendering, zero layout shifts, and SEO indexability.
              </div>
              <div>
                <strong className="text-slate-200">React 19 & TypeScript:</strong> Strict compile-time typing across all domain models, eliminating runtime state errors.
              </div>
              <div>
                <strong className="text-slate-200">Tailwind CSS v4:</strong> Responsive, WCAG AA accessible color contrast palette with restrained dark surfaces.
              </div>
              <div>
                <strong className="text-slate-200">Lucide React:</strong> Clean, crisp technical iconography for health signals, evidence cards, and status tags.
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center font-bold">
              API
            </div>
            <h4 className="font-bold text-base text-white">Backend & Application Logic</h4>
            <div className="space-y-2 text-slate-400 leading-relaxed">
              <div>
                <strong className="text-slate-200">Next.js Route Handlers:</strong> Secure server-side API endpoints (`/api/observations`, `/api/alerts/queue`).
              </div>
              <div>
                <strong className="text-slate-200">Server-Only Secrets:</strong> Meta developer tokens and database service keys are isolated from client bundles.
              </div>
              <div>
                <strong className="text-slate-200">Zod Schema Validation:</strong> Rejects malformed timestamps, impossible step counts, and invalid phone strings.
              </div>
              <div>
                <strong className="text-slate-200">Idempotency Filters:</strong> In-memory and database deduplication preventing repeat webhook processing.
              </div>
            </div>
          </div>

          {/* Database & Security */}
          <div className="p-6 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-3">
            <div className="w-9 h-9 rounded-xl bg-teal-500/10 border border-teal-500/30 text-teal-400 flex items-center justify-center font-bold">
              DB
            </div>
            <h4 className="font-bold text-base text-white">Database & Security Layer</h4>
            <div className="space-y-2 text-slate-400 leading-relaxed">
              <div>
                <strong className="text-slate-200">Supabase (PostgreSQL 15+):</strong> Relational integrity across 13 domain tables with foreign key constraints.
              </div>
              <div>
                <strong className="text-slate-200">Row-Level Security (RLS):</strong> Granular SQL policies restricting coordinator and family read/write privileges.
              </div>
              <div>
                <strong className="text-slate-200">Append-Only Audit Triggers:</strong> Database triggers write immutable logs; UPDATE/DELETE permissions are revoked.
              </div>
              <div>
                <strong className="text-slate-200">Encrypted Transport:</strong> Enforces HTTPS/TLS 1.3 across all client and webhook communication channels.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NEXT.JS + SUPABASE (ARCHITECTURAL RATIONALE) */}
      <section className="bg-gradient-to-r from-teal-950/40 to-slate-900 border border-teal-500/30 rounded-3xl p-6 sm:p-8 space-y-4 text-xs text-slate-300 leading-relaxed">
        <h3 className="font-bold text-base text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-teal-400" />
          <span>Architectural Rationale: Why Next.js and Supabase Instead of Microservices?</span>
        </h3>
        <p>
          In a 48-hour hackathon and for lean healthcare deployments, decomposing a product into 7
          disconnected microservices (e.g. separate auth service, notification worker, database proxy)
          creates deployment fragility, cold-start latency, and networking failure points.
        </p>
        <p>
          Next.js 16 provides unified full-stack capability: API routes protect backend credentials,
          server components render with zero layout shift, and Vercel edge deployment eliminates server
          maintenance. Pairing this with Supabase PostgreSQL delivers enterprise-grade Row-Level Security,
          relational data safety, and cryptographic auditability in a single, robust stack.
        </p>
      </section>

      {/* Bottom CTA to Developers Page */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
        <Link
          href="/developers"
          className="text-teal-400 font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Data Model Schema & Interactive API Reference</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/integrations/whatsapp"
          className="text-slate-400 hover:text-slate-200 transition-colors"
        >
          Explore WhatsApp Cloud API Webhooks →
        </Link>
      </div>
    </div>
  );
}
