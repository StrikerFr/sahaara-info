import React from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  Award,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users
} from 'lucide-react';

export const metadata = {
  title: 'About the Project: Deviathon 2.0 & Samarth Life Challenge',
  description:
    'Origin, engineering principles, and team configuration for Sahaara, developed for Deviathon 2.0 at GLA University addressing the Samarth Life Management elder-care problem statement.'
};

export default function AboutPage() {
  const principles = [
    {
      title: 'Technical Truthfulness',
      desc: 'We never fabricate clinical claims, invent benchmark numbers, or present planned future work as implemented code. Capabilities are labeled transparently.'
    },
    {
      title: 'Human-in-the-Loop Decisions',
      desc: 'AI and anomaly models are decision-support tools. A qualified, compassionate care coordinator always remains responsible for reviewing evidence and making decisions.'
    },
    {
      title: 'Accessible by Design',
      desc: 'Older adults in India should not be forced to navigate complex mobile apps. We leverage channels they already use daily—namely WhatsApp and natural Hindi.'
    },
    {
      title: 'Closed-Loop Accountability',
      desc: 'An alert without documented follow-up is an operational failure. Every case must record who contacted whom, what was discussed, and the verified resolution.'
    }
  ];

  const teamRoles = [
    {
      role: 'Product Architecture & UX Design',
      focus: 'Coordinator triage interface, evidence cards, accessible senior interactions, and multi-page information architecture.'
    },
    {
      role: 'Full-Stack Engineering & API Logic',
      focus: 'Next.js server-side route handlers, Zod schema validation, Supabase PostgreSQL schema, and Meta WhatsApp Cloud API webhooks.'
    },
    {
      role: 'Intelligence & Baseline Modeling',
      focus: 'Personal baseline rolling IQR calculations, deterministic safety rules, Isolation Forest feature vectors, and synthetic benchmark generators.'
    },
    {
      role: 'Data Protection & Security Governance',
      focus: 'India DPDP Act 2023 principles, PostgreSQL Row-Level Security, append-only cryptographic audit trails, and non-diagnostic guardrails.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <Breadcrumb items={[{ label: 'About & Team' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-mono tracking-wide">
          <Award className="w-3.5 h-3.5 text-[#72D8B0]" />
          <span>Deviathon 2.0 · GLA University</span>
        </div>

        <h1 className="text-display text-[#F4F2EA]">
          Engineering early warning that{' '}
          <span className="font-serif italic text-[#A9C2AE] font-normal">leads to human care.</span>
        </h1>

        <p className="text-lg text-[#A9C2AE] leading-relaxed">
          Sahaara was designed and implemented for <strong className="text-[#F4F2EA]">Deviathon 2.0</strong> at GLA University,
          responding to the problem statement submitted by <strong className="text-[#F4F2EA]">Samarth Life Management Pvt. Ltd.</strong>—an
          elder-care organisation dedicated to supporting senior citizens living at home across India.
        </p>
      </div>

      {/* ORIGIN & MOTIVATION SECTION */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Project Origin
          </span>
          <h2 className="text-headline text-[#F4F2EA] mt-1">
            The Samarth Life Management Problem Statement
          </h2>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#A9C2AE] leading-relaxed">
          <p>
            With millions of older adults living independently in Indian cities while their adult children
            work in other cities or abroad, care organisations face an acute challenge: how can care
            coordinators detect gradual changes in health, mobility, sleep, and routine before a severe
            crisis occurs?
          </p>
          <p>
            Current care models often rely on sporadic phone calls or unstructured WhatsApp chats. A
            coordinator might speak to an elder for two minutes on Monday, hear &ldquo;Everything is fine, beta,&rdquo;
            and have zero visibility into the fact that the senior’s step count fell by 60% over the weekend
            and their afternoon medication dose was missed.
          </p>
          <div className="p-5 rounded-2xl bg-[#101714] border border-[#273830] text-[#A9C2AE] text-xs leading-relaxed">
            <strong className="text-[#72D8B0] block mb-1 font-semibold">The Sahaara Objective:</strong> To build a coordinator-first wellbeing intelligence
            system that unifies fragmented observations, compares them against personal historical baselines,
            presents explainable evidence, and ensures that every concern leads to documented human action.
          </div>
        </div>
      </section>

      {/* ENGINEERING PRINCIPLES */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Our North Star
          </span>
          <h2 className="text-headline text-[#F4F2EA] mt-1">Four Core Engineering Principles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
          {principles.map((pr, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#17231F] border border-[#273830] space-y-2.5 hover:border-[#72D8B0]/40 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-[#72D8B0] font-bold">0{idx + 1}.</span>
                <h3 className="font-semibold text-base text-[#F4F2EA]">{pr.title}</h3>
              </div>
              <p className="text-[#A9C2AE] leading-relaxed">{pr.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM RESPONSIBILITIES */}
      <section className="bg-[#17231F] border border-[#273830] rounded-3xl p-6 sm:p-10 space-y-6">
        <div>
          <span className="text-xs font-mono uppercase font-bold text-[#72D8B0] tracking-widest block">
            Execution Team
          </span>
          <h2 className="text-headline text-[#F4F2EA] mt-1">
            Interdisciplinary Engineering Disciplines
          </h2>
          <p className="text-sm text-[#A9C2AE] mt-1.5 leading-relaxed">
            Built as a collaborative full-stack effort combining software architecture, data modeling, UX research, and clinical safety.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {teamRoles.map((role, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#101714] border border-[#273830] space-y-3"
            >
              <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center font-mono font-bold text-xs">
                0{idx + 1}
              </div>
              <h3 className="font-semibold text-sm text-[#F4F2EA]">{role.role}</h3>
              <p className="text-[#A9C2AE] leading-relaxed">{role.focus}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/contact"
          className="text-[#72D8B0] font-medium hover:underline flex items-center gap-1.5"
        >
          <span>Next: Request a Demo or Contact the Team</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          Test the Complete Solution in Demo Simulator →
        </Link>
      </div>
    </div>
  );
}

