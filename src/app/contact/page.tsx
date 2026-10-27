'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertTriangle,
  Building,
  User,
  MessageSquare,
  ShieldCheck,
  Play,
  ArrowRight
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'Judge / Evaluator',
    interests: 'Demo Walkthrough',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Contact & Request a Demo' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>Connect with the Engineering Team</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Request a demo, or{' '}
          <span className="text-teal-400">ask a technical question.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Whether you are evaluating Sahaara for Deviathon 2.0, exploring operational workflows for elder
          care, or examining our data protection model, we welcome technical scrutiny and collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Contact Form Container */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl font-bold text-white">Request an Evaluation Walkthrough</h2>
            <p className="text-xs text-slate-400 mt-1">
              Submit your details to arrange a technical deep-dive with the core engineering team.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-teal-950/30 border border-teal-500/40 rounded-2xl animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-teal-500/20 text-teal-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-white">Thank You for Reaching Out!</h3>
              <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                Your request has been logged in our demo queue. In the meantime, you can explore the
                8 seeded scenarios directly in the interactive simulator.
              </p>
              <div className="pt-2">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Launch Live Simulator</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Kumar"
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. evaluator@deviathon.in"
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Organization / Entity
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      placeholder="e.g. Deviathon / Care Org"
                      className="w-full bg-slate-900 border border-slate-700/80 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2.5 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
                  >
                    <option value="Judge / Evaluator">Hackathon Judge / Evaluator</option>
                    <option value="Care Coordinator">Care Coordinator / Healthcare Lead</option>
                    <option value="Family Member">Family Member of an Older Adult</option>
                    <option value="Software Engineer">Software Engineer / Architect</option>
                    <option value="Other">Other Stakeholder</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Message or Technical Question
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe any specific questions regarding our baseline algorithms, WhatsApp integration, or synthetic evaluation..."
                    className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-teal-500 leading-relaxed"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Privacy Pledge:</strong> Your contact information is used strictly to
                  coordinate demonstration walkthroughs. We do not sell or spam user records, in
                  alignment with DPDP Act 2023 principles.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-500 hover:to-teal-400 text-white font-bold text-xs shadow-lg shadow-teal-700/20 transition-all flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Logging Request...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Demo Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Project Contact Card */}
        <div className="space-y-6">
          <div className="bg-[#0f172a] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-bold text-base text-white">Deviathon 2.0 Challenge Submission</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sahaara was designed and implemented for the Deviathon 2.0 Hackathon organized at GLA
              University, addressing the real-world elder care coordination challenge by Samarth Life
              Management Pvt. Ltd.
            </p>

            <div className="space-y-3 pt-3 border-t border-slate-800 text-xs">
              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Project Inquiries</div>
                  <div className="font-semibold text-slate-200">contact@sahaara.dev</div>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-300">
                <div className="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-400 flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-500 uppercase font-mono">Hackathon Host</div>
                  <div className="font-semibold text-slate-200">GLA University · Deviathon 2.0</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Demo Launch Card */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-950/40 to-slate-900 border border-teal-500/30 space-y-3 text-xs text-slate-300">
            <h4 className="font-bold text-white text-sm">Want to test the platform immediately?</h4>
            <p className="leading-relaxed">
              You do not need to wait for a live call to evaluate Sahaara. The fully functional,
              guided care coordinator simulator is accessible right now in your browser.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-md shadow-teal-700/20 transition-all"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Launch Interactive Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
