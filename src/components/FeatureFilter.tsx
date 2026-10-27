'use client';

import React, { useState, useMemo } from 'react';
import { featuresList } from '@/data/featuresData';
import { StatusBadge } from './StatusBadge';
import { Search, Filter, ChevronRight, CheckCircle2, AlertCircle } from 'lucide-react';

export const FeatureFilter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [expandedFeatureId, setExpandedFeatureId] = useState<string | null>('feature-a');

  const filteredFeatures = useMemo(() => {
    return featuresList.filter((feature) => {
      const matchesSearch =
        feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.whatItDoes.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.code.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || feature.category === selectedCategory;

      const matchesStatus =
        selectedStatus === 'all' || feature.status === selectedStatus;

      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [searchQuery, selectedCategory, selectedStatus]);

  const categories = [
    { id: 'all', label: 'All Features' },
    { id: 'core', label: 'Core Profiles & Logs' },
    { id: 'intelligence', label: 'Baseline & AI Engine' },
    { id: 'workflow', label: 'Coordinator Workflow' },
    { id: 'communication', label: 'WhatsApp & Channels' },
    { id: 'governance', label: 'Audit & Evaluation' }
  ];

  const statuses = [
    'all',
    'Implemented',
    'Tested',
    'Experimental',
    'In progress',
    'Planned'
  ];

  return (
    <div className="w-full space-y-6">
      {/* Controls Bar */}
      <div className="bg-[#17231F] border border-[#273830] rounded-2xl p-5 shadow-xl space-y-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Search bar */}
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8B9B90]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search features (e.g. baseline, WhatsApp, multi-signal, audit)..."
              className="w-full bg-[#101714] border border-[#273830] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#E5EAE6] placeholder-[#6C7A71] focus:outline-none focus:border-[#72D8B0] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8B9B90] hover:text-[#F4F2EA]"
              >
                Clear
              </button>
            )}
          </div>

          {/* Status selector */}
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-3.5 h-3.5 text-[#8B9B90] shrink-0" />
            <span className="text-xs text-[#8B9B90] whitespace-nowrap">Status:</span>
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-[#101714] border border-[#273830] rounded-lg px-2.5 py-2 text-xs text-[#C5D2C9] focus:outline-none focus:border-[#72D8B0]"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s === 'all' ? 'All Statuses' : s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-[#245B49] text-[#F4F2EA] border border-[#3A6B59]'
                  : 'bg-[#141F1A] text-[#8B9B90] hover:text-[#E5EAE6] border border-[#273830]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Counter */}
        <div className="text-xs text-[#8B9B90] flex items-center justify-between pt-2 border-t border-[#273830]">
          <span>
            Showing <strong className="text-[#F4F2EA]">{filteredFeatures.length}</strong> of{' '}
            <strong>{featuresList.length}</strong> registered platform capabilities
          </span>
          <span className="text-[11px] text-[#6C7A71]">
            Categorized & transparently verified against repository code
          </span>
        </div>
      </div>

      {/* Feature Cards Grid / Accordions */}
      <div className="space-y-3.5">
        {filteredFeatures.map((feat) => {
          const isExpanded = expandedFeatureId === feat.id;
          return (
            <div
              key={feat.id}
              id={feat.id}
              className={`bg-[#17231F] border rounded-2xl transition-all overflow-hidden ${
                isExpanded ? 'border-[#385145] shadow-xl' : 'border-[#273830] hover:border-[#33463C]'
              }`}
            >
              {/* Header / Click to Expand */}
              <button
                onClick={() => setExpandedFeatureId(isExpanded ? null : feat.id)}
                className="w-full text-left p-5 flex items-start sm:items-center justify-between gap-4 hover:bg-[#1E2B25]/60 transition-colors"
              >
                <div className="flex items-start sm:items-center gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#202B26] border border-[#2D3E35] flex items-center justify-center text-[#72D8B0] font-mono font-bold text-xs shrink-0 mt-0.5 sm:mt-0">
                    {feat.code}
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-bold text-sm sm:text-base text-[#F4F2EA]">{feat.title}</h3>
                      <StatusBadge status={feat.status} size="sm" />
                    </div>
                    <p className="text-xs text-[#95A49B] leading-relaxed">{feat.summary}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-[#A9C2AE] hidden sm:inline-block">
                    {isExpanded ? 'Collapse' : 'Details'}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-md bg-[#202B26] flex items-center justify-center text-[#95A49B] transition-transform ${
                      isExpanded ? 'rotate-90 text-[#72D8B0]' : ''
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </div>
              </button>

              {/* Expanded Detailed 10-Point Analysis */}
              {isExpanded && (
                <div className="border-t border-[#273830] bg-[#141F1A] p-5 sm:p-6 space-y-6 text-xs text-[#C5D2C9]">
                  {/* Grid 1: What it does & Why it exists */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#17231F] border border-[#273830] rounded-xl p-4">
                      <h4 className="font-bold text-[#F4F2EA] text-xs uppercase tracking-wider mb-1.5 text-[#A9C2AE]">
                        1. What It Does
                      </h4>
                      <p className="leading-relaxed text-[#95A49B]">{feat.whatItDoes}</p>
                    </div>

                    <div className="bg-[#17231F] border border-[#273830] rounded-xl p-4">
                      <h4 className="font-bold text-[#F4F2EA] text-xs uppercase tracking-wider mb-1.5 text-[#A9C2AE]">
                        2. Why It Exists
                      </h4>
                      <p className="leading-relaxed text-[#95A49B]">{feat.whyItExists}</p>
                    </div>
                  </div>

                  {/* Grid 2: Who uses it & Information needed */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#17231F] border border-[#273830] rounded-xl p-4">
                      <h4 className="font-bold text-[#F4F2EA] text-xs uppercase tracking-wider mb-1.5 text-[#A9C2AE]">
                        3. Who Uses It
                      </h4>
                      <p className="leading-relaxed text-[#95A49B]">{feat.whoUsesIt}</p>
                    </div>

                    <div className="bg-[#17231F] border border-[#273830] rounded-xl p-4">
                      <h4 className="font-bold text-[#F4F2EA] text-xs uppercase tracking-wider mb-1.5 text-[#A9C2AE]">
                        4. Information Required
                      </h4>
                      <ul className="space-y-1.5 text-[#95A49B]">
                        {feat.infoNeeded.map((info, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-[#72D8B0] mt-0.5">•</span>
                            <span>{info}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 5. How It Works Steps */}
                  <div className="bg-[#17231F] border border-[#273830] rounded-xl p-4">
                    <h4 className="font-bold text-[#F4F2EA] text-xs uppercase tracking-wider mb-2 text-[#A9C2AE]">
                      5. How It Works (Internal Pipeline)
                    </h4>
                    <ol className="space-y-1.5 pl-1 text-[#95A49B]">
                      {feat.howItWorks.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="font-mono text-[#72D8B0] font-bold">{idx + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>

                  {/* Grid 3: Output & Verification */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#17231F] border border-[#273830] rounded-xl p-4">
                      <h4 className="font-bold text-[#F4F2EA] text-xs uppercase tracking-wider mb-1.5 text-[#A9C2AE]">
                        6. Output Generated
                      </h4>
                      <p className="leading-relaxed text-[#95A49B]">{feat.outputGenerated}</p>
                    </div>

                    <div className="bg-[#17231F] border border-[#273830] rounded-xl p-4">
                      <h4 className="font-bold text-[#F4F2EA] text-xs uppercase tracking-wider mb-1.5 text-[#A9C2AE]">
                        7. How Output Is Verified
                      </h4>
                      <p className="leading-relaxed text-[#95A49B]">{feat.howVerified}</p>
                    </div>
                  </div>

                  {/* Grid 4: Limitations & Judge Demonstration Guide */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-[#1F1C18] border border-[#483721] rounded-xl p-4">
                      <h4 className="font-bold text-[#E0A96D] text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[#D48D3B]" />
                        <span>8. Honest Limitations</span>
                      </h4>
                      <ul className="space-y-1 text-[#D2B99C]">
                        {feat.limitations.map((lim, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span>•</span>
                            <span>{lim}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#172821] border border-[#2B4B3D] rounded-xl p-4">
                      <h4 className="font-bold text-[#72D8B0] text-xs uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#72D8B0]" />
                        <span>10. How a Judge Can Demonstrate It</span>
                      </h4>
                      <p className="leading-relaxed text-[#B9DFC8]">{feat.demoInstructions}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
