import React from 'react';
import Link from 'next/link';
import { Activity, Shield, AlertTriangle, ExternalLink, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#060910] border-t border-slate-800 text-slate-400 text-xs">
      {/* Safety Notice Banner */}
      <div className="bg-amber-950/20 border-b border-amber-500/20 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 text-amber-300/90 text-xs">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-amber-200">Mandatory Safety Notice:</strong> Sahaara is a
            wellbeing intelligence and care-coordination decision-support platform. It is strictly{' '}
            <span className="underline font-semibold">not a medical diagnostic system</span> and
            does not replace qualified healthcare practitioners, clinical judgment, or emergency
            services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand info */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <Activity className="w-4 h-4" />
              </div>
              <span className="font-bold text-base text-white tracking-tight">Sahaara</span>
            </div>
            <p className="text-slate-300 font-medium mb-2">Early warning that leads to care.</p>
            <p className="text-slate-400 leading-relaxed mb-4 max-w-sm">
              Coordinator-first wellbeing intelligence designed to help monitor older adults living at
              home by identifying meaningful changes in their routines, explaining evidence, and
              organising follow-up.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span>Deviathon 2.0 · GLA University</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Product
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/problem" className="hover:text-teal-400 transition-colors">
                  The Problem
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-teal-400 transition-colors">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-teal-400 transition-colors">
                  All Features (A–Q)
                </Link>
              </li>
              <li>
                <Link href="/why-sahaara" className="hover:text-teal-400 transition-colors">
                  Why Sahaara (USPs)
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-teal-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-teal-400 font-medium hover:underline">
                  Interactive Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div>
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Engineering
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-and-intelligence" className="hover:text-teal-400 transition-colors">
                  AI & Intelligence
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-teal-400 transition-colors">
                  Tech Architecture
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-teal-400 transition-colors">
                  Data Model & APIs
                </Link>
              </li>
              <li>
                <Link href="/integrations/whatsapp" className="hover:text-teal-400 transition-colors">
                  WhatsApp Integration
                </Link>
              </li>
              <li>
                <Link href="/evaluation" className="hover:text-teal-400 transition-colors">
                  Synthetic Evaluation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Governance */}
          <div>
            <h4 className="font-semibold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Governance
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/trust-and-safety" className="hover:text-teal-400 transition-colors">
                  Privacy & Safety
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-teal-400 transition-colors">
                  Limitations & Roadmap
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-teal-400 transition-colors">
                  FAQ Directory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-teal-400 transition-colors">
                  About Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-teal-400 transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex flex-wrap items-center gap-4 text-slate-500">
            <span>© 2026 Sahaara Project. All rights reserved.</span>
            <span>·</span>
            <span>Designed in alignment with India DPDP Act 2023 principles</span>
            <span>·</span>
            <span>All demonstration personas & health records are 100% synthetic</span>
          </div>

          <div className="flex items-center gap-2 text-slate-400">
            <span>Built for Deviathon 2.0</span>
            <span>·</span>
            <span>Problem statement by Samarth Life Management</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
