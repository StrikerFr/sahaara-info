import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  ShieldCheck,
  Lock,
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Eye,
  Key,
  Database,
  UserCheck
} from 'lucide-react';

export const metadata = {
  title: 'Privacy, Security & Safety: Rigorous Governance & DPDP 2023 Principles',
  description:
    'Security model, data protection principles, non-diagnostic safety disclaimers, and edge-case handling for older adults living at home.'
};

export default function TrustAndSafetyPage() {
  const edgeCases = [
    {
      title: 'An Incorrect Family Report',
      problem: 'A distant relative texts claiming the senior had a fall, but the senior is fine.',
      policy: 'Preserve source attribution. Mark report as "Candidate Observation (Unverified)". Coordinator calls senior directly to clarify before any clinical record is created or escalated.'
    },
    {
      title: 'A Misidentified or Spoofed Sender',
      problem: 'An unknown number texts the care helpline claiming to speak on behalf of a senior.',
      policy: 'Strict telephone E.164 whitelist. Inbound webhook checks AuthorisedContact table; if unregistered, message is quarantined and sender receives an automated guidance message.'
    },
    {
      title: 'Ambiguous Voice Transcription',
      problem: 'Hindi or Hinglish voice note transcription has high speech-to-text uncertainty.',
      policy: 'Candidate extraction confidence score is attached. Consequential health entities extracted with confidence <0.85 require mandatory human coordinator confirmation.'
    },
    {
      title: 'A False-Positive Candidate Alert',
      problem: 'Senior walks 9,000 steps and sleeps 4 hours due to visiting grandchildren during Diwali.',
      policy: 'Coordinators can dismiss the alert with a mandatory categorization reason ("Benign Social Event"). Reason is committed to immutable audit log to maintain transparency.'
    },
    {
      title: 'Missing Sensor Telemetry (Battery Drain)',
      problem: 'Smart wristband drops offline for 12 hours while senior is living alone.',
      policy: 'Never impute healthy zeros. Tag stream with amber warning pill, widen statistical uncertainty, and trigger a "Check Device Battery" coordinator check-in task.'
    },
    {
      title: 'A Failed WhatsApp Push Notification',
      problem: 'Cellular network outage prevents outbound WhatsApp message delivery.',
      policy: 'Delivery state machine marks status Failed. System logs delivery failure event and automatically falls back to secondary SMS or coordinator manual voice call.'
    },
    {
      title: 'An Explicit Critical Emergency Report',
      problem: 'Senior or neighbor texts "fell down, severe pain, cannot get up".',
      policy: 'Immediate Deterministic Safety Rule execution. Bypasses all machine-learning anomaly scoring. Triggers Critical alert with <15 min SLA and multi-channel on-call dispatch.'
    },
    {
      title: 'Unacknowledged Coordinator SLA Breach',
      problem: 'Primary coordinator is indisposed and does not claim an incoming High alert.',
      policy: 'Automated SLA escalation timer triggers. If unacknowledged after 45 minutes, system automatically re-routes alert to secondary on-call supervisor.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <Breadcrumb items={[{ label: 'Trust, Safety & Security' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-mono tracking-wide">
          <ShieldCheck className="w-3.5 h-3.5 text-[#72D8B0]" />
          <span>Patient Dignity & Data Protection</span>
        </div>

        <h1 className="text-display text-[#F4F2EA]">
          Privacy, security, and{' '}
          <span className="font-serif italic text-[#A9C2AE] font-normal">responsible safety.</span>
        </h1>

        <p className="text-lg text-[#A9C2AE] leading-relaxed">
          Wellbeing data from older adults is deeply sensitive. Sahaara is engineered around strict
          consent tracking, cryptographic data protection, role-based isolation, and uncompromised
          non-diagnostic boundaries.
        </p>
      </div>

      {/* MANDATORY SAFETY STATEMENT */}
      <section className="bg-[#17231F] border border-[#E5A93C]/40 rounded-3xl p-6 sm:p-8 space-y-4 text-xs sm:text-sm leading-relaxed">
        <div className="flex items-center gap-3 text-[#E5A93C]">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <h2 className="text-base sm:text-lg font-semibold text-[#F4F2EA]">
            Mandatory Clinical Safety & Non-Diagnostic Boundary
          </h2>
        </div>
        <p className="text-[#E5A93C]/95 font-medium leading-relaxed">
          Sahaara is a wellbeing monitoring and care-coordination decision-support platform. It does not
          diagnose medical conditions, prescribe treatments, replace certified healthcare practitioners,
          or guarantee that a health event will be detected.
        </p>
        <p className="text-[#A9C2AE] leading-relaxed">
          Urgent clinical concerns and emergencies must always follow appropriate human-led medical
          protocols. Automated risk scores must never delay action on an explicit urgent report or hardware
          SOS alarm.
        </p>
      </section>

      {/* CORE SECURITY & GOVERNANCE PILLARS */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Infrastructure Safeguards
          </span>
          <h2 className="text-headline text-[#F4F2EA] mt-1">Data Governance & Technical Security</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center font-bold">
              <Key className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-[#F4F2EA]">Verifiable Consent (DPDP 2023)</h3>
            <p className="text-[#A9C2AE] leading-relaxed">
              Designed in alignment with India&apos;s Digital Personal Data Protection Act (DPDP 2023). Every senior profile requires signed digital consent specifying permitted observation channels, WhatsApp access, and authorized family contacts.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center font-bold">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-[#F4F2EA]">Row-Level Security (RLS)</h3>
            <p className="text-[#A9C2AE] leading-relaxed">
              PostgreSQL Row-Level Security ensures that coordinators can only view assigned seniors, family members can only inspect authorized updates, and public demo environments only interact with isolated synthetic fixtures.
            </p>
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center font-bold">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="font-semibold text-base text-[#F4F2EA]">Immutable Cryptographic Audit</h3>
            <p className="text-[#A9C2AE] leading-relaxed">
              Every status transition, rule evaluation, and call note is written to append-only tables (<code className="text-[#72D8B0] font-mono">audit_events</code>). UPDATE and DELETE operations are revoked at the database role level, ensuring unalterable legal and clinical provenance.
            </p>
          </div>
        </div>
      </section>

      {/* 8 CRITICAL REAL-WORLD EDGE CASES */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Operational Policy
          </span>
          <h2 className="text-headline text-[#F4F2EA] mt-1">
            How Sahaara Handles 8 Complex Care Scenarios
          </h2>
          <p className="text-sm text-[#A9C2AE] mt-1.5 max-w-2xl leading-relaxed">
            Real elder-care is fraught with noisy sensors, conflicting stories, and urgent moments. Here are our verified protocols:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {edgeCases.map((ec, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-2.5"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#72D8B0] font-bold">0{idx + 1}.</span>
                <h3 className="font-semibold text-sm text-[#F4F2EA]">{ec.title}</h3>
              </div>
              <p className="text-[#A9C2AE]/80 italic">&ldquo;{ec.problem}&rdquo;</p>
              <p className="text-[#A9C2AE] pt-2 border-t border-[#273830] leading-relaxed">
                <strong className="text-[#72D8B0] font-medium">Policy:</strong> {ec.policy}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA to Roadmap Page */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/roadmap"
          className="text-[#72D8B0] font-medium hover:underline flex items-center gap-1.5"
        >
          <span>Next: Platform Limitations & Future Engineering Roadmap</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/faq"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          Read Privacy & Safety FAQs →
        </Link>
      </div>
    </div>
  );
}

