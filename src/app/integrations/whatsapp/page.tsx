import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  MessageSquare,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Lock,
  Workflow,
  RefreshCw,
  Server,
  Zap,
  HelpCircle
} from 'lucide-react';
import { StatusBadge } from '@/components/StatusBadge';

export const metadata = {
  title: 'WhatsApp Integration: Meta Cloud API Webhook Architecture',
  description:
    'Complete two-way WhatsApp workflow: Inbound webhook verification, sender authorization, candidate observation extraction, delivery state machine, and Meta Developer App setup.'
};

export default function WhatsAppIntegrationPage() {
  const deliveryStates = [
    {
      state: 'Created',
      desc: 'Coordinator or system triggers permitted message in the platform.',
      note: 'Stored in local database with status `pending`.'
    },
    {
      state: 'Accepted by Provider',
      desc: 'Meta Graph API acknowledges HTTP 200 and assigns a `wamid` message ID.',
      note: 'Important: Provider acceptance is NOT proof of delivery!'
    },
    {
      state: 'Sent',
      desc: 'Meta dispatch servers have routed message to recipient’s cellular carrier.',
      note: 'Indicates message has left Meta infrastructure.'
    },
    {
      state: 'Delivered',
      desc: 'Webhook callback confirms message reached recipient device (double grey ticks).',
      note: 'Delivery confirmed; recipient phone is powered on and online.'
    },
    {
      state: 'Read',
      desc: 'Webhook callback confirms recipient opened chat (double blue ticks).',
      note: 'Only available if recipient has read receipts enabled.'
    },
    {
      state: 'Failed',
      desc: 'Meta delivers error webhook (e.g. 24h window closed, invalid number, template rejected).',
      note: 'System triggers retry or coordinator phone fallback.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb
        items={[
          { label: 'Technology', href: '/technology' },
          { label: 'WhatsApp Integration' }
        ]}
      />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Meta Cloud API Webhook Architecture</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Two-way WhatsApp communication,{' '}
          <span className="text-teal-400">grounded in verification.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Seniors and families in India live on WhatsApp. Sahaara integrates the official Meta WhatsApp
          Cloud API to enable accessible morning check-ins and conversational reports, protected by
          cryptographic HMAC webhook verification, sender whitelisting, and strict human review.
        </p>

        <div className="flex items-center gap-2 pt-1">
          <StatusBadge status="Planned" />
          <span className="text-xs text-slate-400">
            Sandbox tested with Meta Developer test numbers · Production deployment requires Meta Business verification
          </span>
        </div>
      </div>

      {/* INBOUND MESSAGE PIPELINE (9 STEPS) */}
      <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Inbound Flow Architecture
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            How Incoming WhatsApp Messages Are Processed
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Every incoming text is authenticated and validated before it can influence a senior’s record.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 1</span>
            <div className="font-bold text-slate-200">Message Dispatched</div>
            <p className="text-slate-400">
              Senior or authorised family member sends text ("Theek hoon" or "Mummy is dizzy") to care number.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 2</span>
            <div className="font-bold text-slate-200">Meta Webhook Ingestion</div>
            <p className="text-slate-400">
              Meta Graph API fires HTTPS POST event payload to `/api/webhooks/whatsapp`.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 3</span>
            <div className="font-bold text-slate-200">HMAC SHA-256 Verification</div>
            <p className="text-slate-400">
              Application validates `X-Hub-Signature-256` using server-side `META_APP_SECRET`. Spoofed payloads rejected with 403.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 4</span>
            <div className="font-bold text-slate-200">Sender Whitelist Matching</div>
            <p className="text-slate-400">
              Sender’s E.164 phone number is matched against `AuthorisedContact` table. Unauthorised numbers are rejected.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 5</span>
            <div className="font-bold text-slate-200">Unambiguous Profile Linking</div>
            <p className="text-slate-400">
              Associates event with senior ID only when sender relationship is verified in database records.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 6</span>
            <div className="font-bold text-slate-200">Candidate Extraction</div>
            <p className="text-slate-400">
              NLP worker extracts candidate observation entities: [symptom, appetite, onset] with extraction confidence.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 7</span>
            <div className="font-bold text-slate-200">Human Coordinator Review</div>
            <p className="text-slate-400">
              Ambiguous, idiomatic, or consequential health facts require coordinator confirmation before permanent commit.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 8</span>
            <div className="font-bold text-slate-200">Triage Queue Update</div>
            <p className="text-slate-400">
              If candidate observation reveals clinical concern, case is created or priority tier is elevated.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1.5">
            <span className="font-mono text-teal-400 font-bold">STEP 9</span>
            <div className="font-bold text-slate-200">Immutable Audit Sealing</div>
            <p className="text-slate-400">
              Raw message metadata, parsed entities, and coordinator action are committed to `audit_events`.
            </p>
          </div>
        </div>
      </section>

      {/* DELIVERY STATE MACHINE (OUTBOUND MESSAGING) */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            State Machine
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Outbound Delivery Lifecycle State Machine
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
            In safety-critical care coordination, the platform distinguishes between server transmission, carrier routing, and confirmed recipient receipt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {deliveryStates.map((st, idx) => (
            <div
              key={st.state}
              className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-teal-400 font-bold text-[11px]">
                  STATE 0{idx + 1}
                </span>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    st.state === 'Delivered'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : st.state === 'Read'
                      ? 'bg-blue-500/20 text-blue-300'
                      : st.state === 'Failed'
                      ? 'bg-rose-500/20 text-rose-300'
                      : 'bg-slate-800 text-slate-300'
                  }`}
                >
                  {st.state}
                </span>
              </div>
              <h4 className="font-bold text-sm text-white">{st.state}</h4>
              <p className="text-slate-400 leading-relaxed">{st.desc}</p>
              <div className="p-2 rounded bg-slate-900 text-[11px] text-slate-500 border border-slate-800/80">
                {st.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* META DEVELOPER APP DEMO CONFIGURATION */}
      <section className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Configuration Guide
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
            Meta Cloud API Environment Variables & Setup
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Required secrets configured on Vercel deployment (displayed with synthetic placeholders).
          </p>
        </div>

        <div className="p-4 rounded-xl bg-[#090d16] border border-slate-800 font-mono text-xs text-teal-300/90 space-y-2 leading-relaxed overflow-x-auto">
          <div># Meta WhatsApp Cloud API Credentials</div>
          <div>META_WHATSAPP_PHONE_NUMBER_ID="109827364512345"</div>
          <div>META_WHATSAPP_BUSINESS_ACCOUNT_ID="209871625341234"</div>
          <div>META_WHATSAPP_ACCESS_TOKEN="EAAKl...[SERVER_ONLY_SECRET]"</div>
          <div>META_WEBHOOK_VERIFY_TOKEN="sahaara_deviathon_webhook_secret_2026"</div>
          <div>META_APP_SECRET="9f8e7d6c5b...[SERVER_ONLY_SECRET]"</div>
          <div className="pt-2 text-slate-500">
            # Webhook Subscriptions Required: messages, message_deliveries
          </div>
        </div>

        <div className="bg-amber-950/20 border border-amber-500/30 p-4 rounded-xl text-xs text-amber-200/90 leading-relaxed flex items-start gap-2.5">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-200">Commercial & Operational Reality:</strong> Meta Developer test numbers can only send to registered tester phone numbers. In production, pre-approved Meta message templates are required for outbound conversations initiated by the care team, and Meta conversation fees apply. We never claim production WhatsApp messaging is free.
          </div>
        </div>
      </section>

      {/* Bottom CTA to Evaluation Page */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
        <Link
          href="/evaluation"
          className="text-teal-400 font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Synthetic Benchmark Results (200 Seniors / 90 Days)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-slate-400 hover:text-slate-200 transition-colors"
        >
          Test Scenario 2 WhatsApp Ingestion in Simulator →
        </Link>
      </div>
    </div>
  );
}
