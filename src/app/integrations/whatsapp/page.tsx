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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <Breadcrumb
        items={[
          { label: 'Technology', href: '/technology' },
          { label: 'WhatsApp Integration' }
        ]}
      />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-mono tracking-wide">
          <MessageSquare className="w-3.5 h-3.5 text-[#72D8B0]" />
          <span>Meta Cloud API Webhook Architecture</span>
        </div>

        <h1 className="text-display text-[#F4F2EA]">
          Two-way WhatsApp communication,{' '}
          <span className="font-serif italic text-[#A9C2AE] font-normal">grounded in verification.</span>
        </h1>

        <p className="text-lg text-[#A9C2AE] leading-relaxed">
          Seniors and families in India live on WhatsApp. Sahaara integrates the official Meta WhatsApp
          Cloud API to enable accessible morning check-ins and conversational reports, protected by
          cryptographic HMAC webhook verification, sender whitelisting, and strict human review.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <StatusBadge status="Planned" />
          <span className="text-xs text-[#A9C2AE]/70 font-mono">
            Sandbox tested with Meta Developer test numbers · Production deployment requires Meta Business verification
          </span>
        </div>
      </div>

      {/* INBOUND MESSAGE PIPELINE (9 STEPS) */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Inbound Flow Architecture
          </span>
          <h2 className="text-headline text-[#F4F2EA] mt-1">
            How Incoming WhatsApp Messages Are Processed
          </h2>
          <p className="text-sm text-[#A9C2AE] mt-1.5 max-w-2xl leading-relaxed">
            Every incoming text is authenticated and validated before it can influence a senior’s record.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 01</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">Message Dispatched</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Senior or authorised family member sends text (&ldquo;Theek hoon&rdquo; or &ldquo;Mummy is dizzy&rdquo;) to care number.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 02</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">Meta Webhook Ingestion</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Meta Graph API fires HTTPS POST event payload to <code className="text-[#72D8B0] font-mono">/api/webhooks/whatsapp</code>.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 03</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">HMAC SHA-256 Verification</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Application validates <code className="text-[#72D8B0] font-mono">X-Hub-Signature-256</code> using server-side secret. Spoofed payloads rejected with 403.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 04</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">Sender Whitelist Matching</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Sender’s E.164 phone number is matched against <code className="text-[#72D8B0] font-mono">AuthorisedContact</code> table. Unauthorised numbers are rejected.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 05</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">Unambiguous Profile Linking</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Associates event with senior ID only when sender relationship is verified in database records.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 06</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">Candidate Extraction</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              NLP worker extracts candidate observation entities: [symptom, appetite, onset] with extraction confidence score.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 07</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">Human Coordinator Review</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Ambiguous, idiomatic, or consequential health facts require coordinator confirmation before permanent commit.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 08</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">Triage Queue Update</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              If candidate observation reveals clinical concern, case is created or priority tier is elevated.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2">
            <span className="font-mono text-[#72D8B0] font-bold text-[11px] block">STEP 09</span>
            <div className="font-semibold text-sm text-[#F4F2EA]">Immutable Audit Sealing</div>
            <p className="text-[#A9C2AE] leading-relaxed">
              Raw message metadata, parsed entities, and coordinator action are committed to <code className="text-[#72D8B0] font-mono">audit_events</code>.
            </p>
          </div>
        </div>
      </section>

      {/* DELIVERY STATE MACHINE (OUTBOUND MESSAGING) */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            State Machine
          </span>
          <h2 className="text-headline text-[#F4F2EA] mt-1">
            Outbound Delivery Lifecycle State Machine
          </h2>
          <p className="text-sm text-[#A9C2AE] mt-1.5 max-w-2xl leading-relaxed">
            In safety-critical care coordination, the platform distinguishes between server transmission, carrier routing, and confirmed recipient receipt.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {deliveryStates.map((st, idx) => (
            <div
              key={st.state}
              className="p-5 rounded-2xl bg-[#17231F] border border-[#273830] space-y-3 hover:border-[#72D8B0]/40 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[#72D8B0] font-bold text-[11px]">
                  STATE 0{idx + 1}
                </span>
                <span
                  className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full border ${
                    st.state === 'Delivered'
                      ? 'bg-[#245B49]/30 border-[#245B49] text-[#72D8B0]'
                      : st.state === 'Read'
                      ? 'bg-[#17231F] border-[#273830] text-[#A9C2AE]'
                      : st.state === 'Failed'
                      ? 'bg-[#3b1219]/40 border-[#ef4444]/40 text-[#fca5a5]'
                      : 'bg-[#101714] border-[#273830] text-[#A9C2AE]'
                  }`}
                >
                  {st.state}
                </span>
              </div>
              <h4 className="font-semibold text-sm text-[#F4F2EA]">{st.state}</h4>
              <p className="text-[#A9C2AE] leading-relaxed">{st.desc}</p>
              <div className="p-2.5 rounded-xl bg-[#101714] text-[11px] text-[#A9C2AE]/80 border border-[#273830]">
                {st.note}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* META DEVELOPER APP DEMO CONFIGURATION */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Configuration Guide
          </span>
          <h3 className="text-headline text-[#F4F2EA] mt-1">
            Meta Cloud API Environment Variables & Setup
          </h3>
          <p className="text-sm text-[#A9C2AE] mt-1.5 leading-relaxed">
            Required secrets configured on Vercel deployment (displayed with synthetic placeholders).
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] font-mono text-xs text-[#72D8B0] space-y-2 leading-relaxed overflow-x-auto">
          <div className="text-[#A9C2AE]/60"># Meta WhatsApp Cloud API Credentials</div>
          <div>META_WHATSAPP_PHONE_NUMBER_ID=&quot;109827364512345&quot;</div>
          <div>META_WHATSAPP_BUSINESS_ACCOUNT_ID=&quot;209871625341234&quot;</div>
          <div>META_WHATSAPP_ACCESS_TOKEN=&quot;EAAKl...[SERVER_ONLY_SECRET]&quot;</div>
          <div>META_WEBHOOK_VERIFY_TOKEN=&quot;sahaara_deviathon_webhook_secret_2026&quot;</div>
          <div>META_APP_SECRET=&quot;9f8e7d6c5b...[SERVER_ONLY_SECRET]&quot;</div>
          <div className="pt-2 text-[#A9C2AE]/60">
            # Webhook Subscriptions Required: messages, message_deliveries
          </div>
        </div>

        <div className="bg-[#17231F] border border-[#E5A93C]/30 p-5 rounded-2xl text-xs text-[#E5A93C]/90 leading-relaxed flex items-start gap-3">
          <AlertTriangle className="w-4 h-4 text-[#E5A93C] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#F4F2EA] font-medium">Commercial & Operational Reality:</strong> Meta Developer test numbers can only send to registered tester phone numbers. In production, pre-approved Meta message templates are required for outbound conversations initiated by the care team, and Meta conversation fees apply. We never claim production WhatsApp messaging is free.
          </div>
        </div>
      </section>

      {/* Bottom CTA to Evaluation Page */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/evaluation"
          className="text-[#72D8B0] font-medium hover:underline flex items-center gap-1.5"
        >
          <span>Next: Synthetic Benchmark Results (200 Seniors / 90 Days)</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          Test Scenario 2 WhatsApp Ingestion in Simulator →
        </Link>
      </div>
    </div>
  );
}

