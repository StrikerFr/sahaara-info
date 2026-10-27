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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28">
      <Breadcrumb items={[{ label: 'Tech Stack & Architecture' }]} />

      {/* Hero Intro */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-medium">
          <Cpu className="w-3.5 h-3.5" />
          <span>Full-Stack Engineering Blueprint</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          Modern, reliable, and <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#A9C2AE]">deployment-conscious.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          Sahaara is architected to balance rapid hackathon iteration with serious production-grade
          engineering: Next.js full-stack edge routing, Supabase PostgreSQL with cryptographic Row-Level
          Security, and official Meta WhatsApp Cloud API webhooks.
        </p>
      </div>

      {/* COMPLETE ARCHITECTURAL PIPELINE (FLOW DIAGRAM) */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-8 sm:p-12 space-y-8 shadow-xl">
        <div className="border-b border-[#273830] pb-5">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Data Pipeline Flow
          </span>
          <h3 className="text-2xl sm:text-3xl font-medium text-[#F4F2EA] mt-1">
            End-to-End Conceptual Flow Pipeline
          </h3>
          <p className="text-xs sm:text-sm text-[#A9C2AE] mt-1">
            How observations flow continuously from heterogeneous devices to audited coordinator action.
          </p>
        </div>

        {/* Visual Pipeline Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-xs">
          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#72D8B0]">PHASE 1</span>
            <div className="font-bold text-[#F4F2EA]">Observation Sources</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Pedometers, sleep monitors, check-in buttons, WhatsApp texts, attendant logs.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#72D8B0]">PHASE 2</span>
            <div className="font-bold text-[#F4F2EA]">Ingestion & Deduplication</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Next.js API route handlers validate Zod schemas, verify HMAC signatures, and deduplicate events.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#72D8B0]">PHASE 3</span>
            <div className="font-bold text-[#F4F2EA]">Baselines & Dual Engine</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Computes rolling 14-30d personal baselines; evaluates safety rules and Isolation Forest vectors.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#72D8B0]">PHASE 4</span>
            <div className="font-bold text-[#F4F2EA]">Triage Queue & SLA</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Prioritises cases into Critical, High, Medium, Low tiers with countdown escalation timers.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#141F1A] border border-[#273830] space-y-2">
            <span className="text-[10px] font-mono font-bold text-[#72D8B0]">PHASE 5</span>
            <div className="font-bold text-[#F4F2EA]">Action & Audit Sealing</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Coordinator claims case, logs phone notes, selects outcome, and seals append-only audit trail.
            </p>
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGY TIERS */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Technical Stack Breakdown
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Core system technologies <span className="font-serif italic font-normal text-[#A9C2AE]">& architectural rationale.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          {/* Frontend */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center font-bold">
              UI
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Frontend & Interaction</h4>
            <div className="space-y-3 text-[#A9C2AE] leading-relaxed">
              <div>
                <strong className="text-[#F4F2EA]">Next.js 16 (App Router):</strong> Server components for fast edge rendering, zero layout shifts, and SEO indexability.
              </div>
              <div>
                <strong className="text-[#F4F2EA]">React 19 & TypeScript:</strong> Strict compile-time typing across all domain models, eliminating runtime state errors.
              </div>
              <div>
                <strong className="text-[#F4F2EA]">Tailwind CSS v4:</strong> Responsive, WCAG AA accessible color contrast palette with restrained dark forest surfaces.
              </div>
              <div>
                <strong className="text-[#F4F2EA]">Lucide React:</strong> Clean, crisp technical iconography for health signals, evidence cards, and status tags.
              </div>
            </div>
          </div>

          {/* Backend */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center font-bold">
              API
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Backend & Application Logic</h4>
            <div className="space-y-3 text-[#A9C2AE] leading-relaxed">
              <div>
                <strong className="text-[#F4F2EA]">Next.js Route Handlers:</strong> Secure server-side API endpoints (`/api/observations`, `/api/alerts/queue`).
              </div>
              <div>
                <strong className="text-[#F4F2EA]">Server-Only Secrets:</strong> Meta developer tokens and database service keys are isolated from client bundles.
              </div>
              <div>
                <strong className="text-[#F4F2EA]">Zod Schema Validation:</strong> Rejects malformed timestamps, impossible step counts, and invalid phone strings.
              </div>
              <div>
                <strong className="text-[#F4F2EA]">Idempotency Filters:</strong> In-memory and database deduplication preventing repeat webhook processing.
              </div>
            </div>
          </div>

          {/* Database & Security */}
          <div className="p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="w-9 h-9 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center font-bold">
              DB
            </div>
            <h4 className="font-bold text-base text-[#F4F2EA]">Database & Security Layer</h4>
            <div className="space-y-3 text-[#A9C2AE] leading-relaxed">
              <div>
                <strong className="text-[#F4F2EA]">Supabase (PostgreSQL 15+):</strong> Relational integrity across 13 domain tables with foreign key constraints.
              </div>
              <div>
                <strong className="text-[#F4F2EA]">Row-Level Security (RLS):</strong> Granular SQL policies restricting coordinator and family read/write privileges.
              </div>
              <div>
                <strong className="text-[#F4F2EA]">Append-Only Audit Triggers:</strong> Database triggers write immutable logs; UPDATE/DELETE permissions are revoked.
              </div>
              <div>
                <strong className="text-[#F4F2EA]">Encrypted Transport:</strong> Enforces HTTPS/TLS 1.3 across all client and webhook communication channels.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY NEXT.JS + SUPABASE (ARCHITECTURAL RATIONALE) */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-8 sm:p-10 space-y-4 text-xs text-[#A9C2AE] leading-relaxed shadow-xl">
        <h3 className="font-bold text-base text-[#F4F2EA] flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-[#72D8B0]" />
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
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/developers"
          className="text-[#72D8B0] font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Data Model Schema & Interactive API Reference</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/integrations/whatsapp"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          Explore WhatsApp Cloud API Webhooks →
        </Link>
      </div>
    </div>
  );
}
