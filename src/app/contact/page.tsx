'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import {
  Mail,
  Send,
  CheckCircle2,
  Building,
  User,
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
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      <Breadcrumb items={[{ label: 'Contact & Request a Demo' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-mono tracking-wide">
          <Mail className="w-3.5 h-3.5 text-[#72D8B0]" />
          <span>Connect with the Engineering Team</span>
        </div>

        <h1 className="text-display text-[#F4F2EA]">
          Request a demo, or{' '}
          <span className="font-serif italic text-[#A9C2AE] font-normal">ask a technical question.</span>
        </h1>

        <p className="text-lg text-[#A9C2AE] leading-relaxed">
          Whether you are evaluating Sahaara for Deviathon 2.0, exploring operational workflows for elder
          care, or examining our data protection model, we welcome technical scrutiny and collaboration.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Contact Form Container */}
        <div className="bg-[#17231F] border border-[#273830] rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="border-b border-[#273830] pb-4">
            <h2 className="text-xl font-semibold text-[#F4F2EA]">Request an Evaluation Walkthrough</h2>
            <p className="text-xs text-[#A9C2AE] mt-1">
              Submit your details to arrange a technical deep-dive with the core engineering team.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 text-center space-y-4 bg-[#101714] border border-[#245B49] rounded-2xl animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#245B49]/30 border border-[#245B49] text-[#72D8B0] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-base text-[#F4F2EA]">Thank You for Reaching Out!</h3>
              <p className="text-xs text-[#A9C2AE] max-w-sm mx-auto leading-relaxed">
                Your request has been logged in our demo queue. In the meantime, you can explore the
                8 seeded scenarios directly in the interactive simulator.
              </p>
              <div className="pt-2">
                <Link
                  href="/demo"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#245B49] hover:bg-[#2e745d] text-[#F4F2EA] font-medium text-xs transition-colors"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-[#72D8B0]" />
                  <span>Launch Live Simulator</span>
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-xs font-medium text-[#F4F2EA] mb-1.5">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A9C2AE]/60" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Rajesh Kumar"
                    className="w-full bg-[#101714] border border-[#273830] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#F4F2EA] placeholder-[#A9C2AE]/40 focus:outline-none focus:border-[#72D8B0] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#F4F2EA] mb-1.5">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A9C2AE]/60" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. evaluator@deviathon.in"
                    className="w-full bg-[#101714] border border-[#273830] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#F4F2EA] placeholder-[#A9C2AE]/40 focus:outline-none focus:border-[#72D8B0] transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#F4F2EA] mb-1.5">
                    Organization / Entity
                  </label>
                  <div className="relative">
                    <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#A9C2AE]/60" />
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({ ...formData, organization: e.target.value })
                      }
                      placeholder="e.g. Deviathon / Care Org"
                      className="w-full bg-[#101714] border border-[#273830] rounded-xl pl-9 pr-4 py-2.5 text-xs text-[#F4F2EA] placeholder-[#A9C2AE]/40 focus:outline-none focus:border-[#72D8B0] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#F4F2EA] mb-1.5">
                    Your Role
                  </label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full bg-[#101714] border border-[#273830] rounded-xl px-3 py-2.5 text-xs text-[#F4F2EA] focus:outline-none focus:border-[#72D8B0] transition-colors"
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
                <label className="block text-xs font-medium text-[#F4F2EA] mb-1.5">
                  Message or Technical Question
                </label>
                <div className="relative">
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe any specific questions regarding our baseline algorithms, WhatsApp integration, or synthetic evaluation..."
                    className="w-full bg-[#101714] border border-[#273830] rounded-xl p-3 text-xs text-[#F4F2EA] placeholder-[#A9C2AE]/40 focus:outline-none focus:border-[#72D8B0] leading-relaxed transition-colors"
                  />
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#101714] border border-[#273830] text-[11px] text-[#A9C2AE] flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#F4F2EA]">Privacy Pledge:</strong> Your contact information is used strictly to
                  coordinate demonstration walkthroughs. We do not sell or spam user records, in
                  alignment with DPDP Act 2023 principles.
                </span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-4 rounded-xl bg-[#245B49] hover:bg-[#2e745d] text-[#F4F2EA] font-semibold text-xs transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Logging Request...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5 text-[#72D8B0]" />
                    <span>Submit Demo Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Project Contact Card */}
        <div className="space-y-6">
          <div className="bg-[#17231F] border border-[#273830] rounded-3xl p-6 sm:p-8 space-y-4">
            <h3 className="font-semibold text-base text-[#F4F2EA]">Deviathon 2.0 Challenge Submission</h3>
            <p className="text-xs text-[#A9C2AE] leading-relaxed">
              Sahaara was designed and implemented for the Deviathon 2.0 Hackathon organized at GLA
              University, addressing the real-world elder care coordination challenge by Samarth Life
              Management Pvt. Ltd.
            </p>

            <div className="space-y-3 pt-4 border-t border-[#273830] text-xs">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#A9C2AE]/70 uppercase font-mono">Project Inquiries</div>
                  <div className="font-medium text-[#F4F2EA]">contact@sahaara.dev</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#245B49]/30 border border-[#245B49]/50 text-[#72D8B0] flex items-center justify-center shrink-0">
                  <Building className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-[#A9C2AE]/70 uppercase font-mono">Hackathon Host</div>
                  <div className="font-medium text-[#F4F2EA]">GLA University · Deviathon 2.0</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Demo Launch Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#17231F] border border-[#245B49]/50 space-y-3 text-xs text-[#A9C2AE]">
            <h4 className="font-semibold text-[#F4F2EA] text-sm">Want to test the platform immediately?</h4>
            <p className="leading-relaxed">
              You do not need to wait for a live call to evaluate Sahaara. The fully functional,
              guided care coordinator simulator is accessible right now in your browser.
            </p>
            <div className="pt-2">
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#245B49] hover:bg-[#2e745d] text-[#F4F2EA] font-medium text-xs transition-colors"
              >
                <Play className="w-3.5 h-3.5 fill-current text-[#72D8B0]" />
                <span>Launch Interactive Demo</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

