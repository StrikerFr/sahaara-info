import React from 'react';
import Link from 'next/link';
import { Activity, AlertTriangle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#0D1512] border-t border-[#24332B] text-[#95A49B] text-xs">
      {/* Safety Notice Banner */}
      <div className="bg-[#1A1914] border-b border-[#3D3320] py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex items-start sm:items-center gap-3 text-[#E0B86F] text-xs leading-relaxed">
          <AlertTriangle className="w-4 h-4 text-[#D48D3B] shrink-0 mt-0.5 sm:mt-0" />
          <p>
            <strong className="text-[#F4F2EA]">Mandatory Safety Notice:</strong> Sahaara is a
            wellbeing intelligence and care-coordination decision-support platform. It is strictly{' '}
            <span className="underline font-semibold text-[#F4F2EA]">not a medical diagnostic system</span> and
            does not replace qualified healthcare practitioners, clinical judgment, or emergency services.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-14">
          {/* Brand info */}
          <div className="col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[#245B49] flex items-center justify-center text-[#F4F2EA]">
                <Activity className="w-4 h-4 text-[#72D8B0]" />
              </div>
              <span className="font-bold text-base text-[#F4F2EA] tracking-tight">Sahaara</span>
            </div>
            <p className="text-[#C5D2C9] font-medium text-xs">Early warning that leads to care.</p>
            <p className="text-[#8B9B90] leading-relaxed max-w-sm text-xs">
              Coordinator-first wellbeing intelligence designed to help monitor older adults living at
              home by identifying meaningful changes in their routines, explaining evidence, and
              organising appropriate follow-up.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#17231F] border border-[#27372F] text-[11px] text-[#A9C2AE]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#72D8B0]" />
              <span>Deviathon 2.0 · GLA University</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <h4 className="font-semibold text-[#F4F2EA] uppercase tracking-wider text-[11px] mb-3.5">
              Product
            </h4>
            <ul className="space-y-2 text-[#95A49B]">
              <li>
                <Link href="/problem" className="hover:text-[#F4F2EA] transition-colors">
                  The Problem
                </Link>
              </li>
              <li>
                <Link href="/product" className="hover:text-[#F4F2EA] transition-colors">
                  Product Overview
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-[#F4F2EA] transition-colors">
                  All Features (A–Q)
                </Link>
              </li>
              <li>
                <Link href="/why-sahaara" className="hover:text-[#F4F2EA] transition-colors">
                  Why Sahaara (USPs)
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-[#F4F2EA] transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-[#72D8B0] font-medium hover:underline">
                  Interactive Demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div>
            <h4 className="font-semibold text-[#F4F2EA] uppercase tracking-wider text-[11px] mb-3.5">
              Engineering
            </h4>
            <ul className="space-y-2 text-[#95A49B]">
              <li>
                <Link href="/ai-and-intelligence" className="hover:text-[#F4F2EA] transition-colors">
                  AI & Intelligence
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-[#F4F2EA] transition-colors">
                  Tech Architecture
                </Link>
              </li>
              <li>
                <Link href="/developers" className="hover:text-[#F4F2EA] transition-colors">
                  Data Model & APIs
                </Link>
              </li>
              <li>
                <Link href="/integrations/whatsapp" className="hover:text-[#F4F2EA] transition-colors">
                  WhatsApp Integration
                </Link>
              </li>
              <li>
                <Link href="/evaluation" className="hover:text-[#F4F2EA] transition-colors">
                  Synthetic Evaluation
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Trust & Governance */}
          <div>
            <h4 className="font-semibold text-[#F4F2EA] uppercase tracking-wider text-[11px] mb-3.5">
              Governance
            </h4>
            <ul className="space-y-2 text-[#95A49B]">
              <li>
                <Link href="/trust-and-safety" className="hover:text-[#F4F2EA] transition-colors">
                  Privacy & Safety
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-[#F4F2EA] transition-colors">
                  Limitations & Roadmap
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-[#F4F2EA] transition-colors">
                  FAQ Directory
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#F4F2EA] transition-colors">
                  About Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#F4F2EA] transition-colors">
                  Request a Demo
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#24332B] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#727B73]">
          <div className="flex flex-wrap items-center gap-3">
            <span>© 2026 Sahaara Project.</span>
            <span>·</span>
            <span>Designed in alignment with India DPDP Act 2023 principles</span>
            <span>·</span>
            <span>Demonstration records are 100% synthetic fixtures</span>
          </div>

          <div className="flex items-center gap-2 text-[#95A49B]">
            <span>Deviathon 2.0 Challenge</span>
            <span>·</span>
            <span>Problem statement by Samarth Life Management</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
