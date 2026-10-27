'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/Breadcrumb';
import { domainEntities, apiEndpoints } from '@/data/technologyData';
import { StatusBadge } from '@/components/StatusBadge';
import {
  Code2,
  Database,
  ArrowRight,
  Copy,
  Check,
  Lock,
  Layers,
  FileCode,
  Sparkles
} from 'lucide-react';

export default function DevelopersPage() {
  const [selectedEntityName, setSelectedEntityName] = useState<string>('SeniorProfile');
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null);

  const activeEntity =
    domainEntities.find((e) => e.name === selectedEntityName) || domainEntities[0];

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedEndpoint(id);
    setTimeout(() => setCopiedEndpoint(null), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-20 sm:space-y-28">
      <Breadcrumb items={[{ label: 'Developers & API Reference' }]} />

      {/* Header Intro */}
      <div className="max-w-4xl space-y-6">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#17231F] border border-[#273830] text-[#72D8B0] text-xs font-medium">
          <Code2 className="w-3.5 h-3.5" />
          <span>Developer Documentation & Data Contracts</span>
        </div>

        <h1 className="text-display font-medium text-[#F4F2EA] tracking-tight leading-[1.08]">
          Relational domain entities & <br className="hidden sm:inline" />
          <span className="font-serif italic font-normal text-[#A9C2AE]">REST API contracts.</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#A9C2AE] font-light leading-relaxed max-w-3xl">
          Explore the exact PostgreSQL domain entities, database relationships, Row-Level Security
          policies, and REST API route handlers powering the Sahaara platform.
        </p>
      </div>

      {/* PART 1: DOMAIN ENTITIES SCHEMA VIEWER */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            Data Architecture
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            Relational domain entities <span className="font-serif italic font-normal text-[#A9C2AE]">(PostgreSQL / Supabase).</span>
          </h2>
          <p className="text-sm text-[#A9C2AE] leading-relaxed">
            Select any entity below to inspect table schema, field constraints, relationships, security policy, and retention rules.
          </p>
        </div>

        {/* Entity Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
          {domainEntities.map((entity) => {
            const isSelected = entity.name === selectedEntityName;
            return (
              <button
                key={entity.name}
                onClick={() => setSelectedEntityName(entity.name)}
                className={`px-3.5 py-2 rounded-xl text-xs font-mono font-semibold whitespace-nowrap transition-colors flex items-center gap-2 cursor-pointer ${
                  isSelected
                    ? 'bg-[#202B26] text-[#F4F2EA] border border-[#245B49] shadow-sm'
                    : 'bg-[#141F1A] text-[#8F9A92] hover:text-[#D8E2DC] hover:bg-[#17231F] border border-[#273830]'
                }`}
              >
                <Database className="w-3.5 h-3.5 text-[#72D8B0]" />
                <span>{entity.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Entity Schema Table */}
        <div className="bg-[#17231F] border border-[#273830] rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 border-b border-[#273830] bg-[#141E1A] flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2.5 mb-1.5">
                <span className="font-mono text-xs text-[#72D8B0] font-bold">
                  Table: {activeEntity.table}
                </span>
                <StatusBadge status={activeEntity.status} size="sm" />
              </div>
              <h4 className="font-bold text-lg text-[#F4F2EA]">{activeEntity.name}</h4>
              <p className="text-xs text-[#A9C2AE] mt-0.5">{activeEntity.purpose}</p>
            </div>
            <div className="text-right text-xs text-[#8F9A92]">
              <div>
                <strong>Retention:</strong> {activeEntity.retentionPolicy}
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6 text-xs">
            {/* Fields Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#273830] text-[#8F9A92] font-mono text-[11px]">
                    <th className="pb-3">Field Name</th>
                    <th className="pb-3">SQL Type</th>
                    <th className="pb-3">Required</th>
                    <th className="pb-3">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#273830]/70 font-mono text-[#D8E2DC]">
                  {activeEntity.fields.map((field) => (
                    <tr key={field.name} className="hover:bg-[#141F1A]/50">
                      <td className="py-3 font-bold text-[#72D8B0]">{field.name}</td>
                      <td className="py-3 text-[#A9C2AE]">{field.type}</td>
                      <td className="py-3">
                        {field.required ? (
                          <span className="text-[#E2B77E]">NOT NULL</span>
                        ) : (
                          <span className="text-[#8F9A92]">NULLABLE</span>
                        )}
                      </td>
                      <td className="py-3 font-sans text-[#D8E2DC] text-xs">
                        {field.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Relationships & Security Policies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 border-t border-[#273830]">
              <div className="bg-[#141F1A] p-5 rounded-xl border border-[#273830]">
                <h5 className="font-bold uppercase tracking-wider text-[11px] mb-2.5 text-[#72D8B0]">
                  Entity Relationships
                </h5>
                <ul className="space-y-1.5 text-[#A9C2AE]">
                  {activeEntity.relationships.map((rel, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#72D8B0]">•</span>
                      <span>{rel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#141F1A] p-5 rounded-xl border border-[#273830]">
                <h5 className="font-bold uppercase tracking-wider text-[11px] mb-2.5 text-[#72D8B0]">
                  Row-Level Security (RLS) Policy
                </h5>
                <p className="text-[#A9C2AE] leading-relaxed">{activeEntity.securityPolicy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: REST API REFERENCE */}
      <section className="space-y-8 border-t border-[#273830] pt-20">
        <div className="max-w-3xl space-y-3">
          <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#72D8B0] font-semibold">
            API Contracts
          </span>
          <h2 className="text-section-title font-medium text-[#F4F2EA]">
            REST API route <span className="font-serif italic font-normal text-[#A9C2AE]">handlers & contracts.</span>
          </h2>
          <p className="text-sm text-[#A9C2AE] leading-relaxed">
            Documenting the live route handlers implemented in the repository, with schemas, status codes, and copyable payloads.
          </p>
        </div>

        <div className="space-y-5">
          {apiEndpoints.map((api) => {
            const endpointKey = `${api.method}-${api.endpoint}`;
            const isCopied = copiedEndpoint === endpointKey;
            return (
              <div
                key={endpointKey}
                className="bg-[#17231F] border border-[#273830] rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Endpoint Header */}
                <div className="p-5 border-b border-[#273830] bg-[#141E1A] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-mono font-bold ${
                        api.method === 'GET'
                          ? 'bg-[#245B49]/30 text-[#72D8B0] border border-[#245B49]/50'
                          : api.method === 'POST'
                          ? 'bg-[#245B49]/40 text-[#A9C2AE] border border-[#245B49]/60'
                          : api.method === 'PATCH'
                          ? 'bg-[#B87922]/20 text-[#E2B77E] border border-[#B87922]/40'
                          : 'bg-[#B94343]/20 text-[#E89898] border border-[#B94343]/40'
                      }`}
                    >
                      {api.method}
                    </span>
                    <span className="font-mono text-sm font-bold text-[#F4F2EA]">{api.endpoint}</span>
                    <StatusBadge status={api.status} size="sm" />
                  </div>

                  <div className="text-xs font-mono text-[#8F9A92]">
                    Auth: <span className="text-[#F4F2EA]">{api.auth}</span>
                  </div>
                </div>

                {/* Endpoint Body */}
                <div className="p-6 space-y-5 text-xs">
                  <div>
                    <h5 className="font-semibold text-[#F4F2EA] text-sm mb-1">{api.title}</h5>
                    <p className="text-[#A9C2AE]">{api.purpose}</p>
                  </div>

                  {/* Request vs Response Payloads */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 font-mono">
                    {api.requestSchema && (
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-[#8F9A92] text-[11px]">
                          <span>Request Payload (JSON)</span>
                          <button
                            onClick={() =>
                              handleCopy(JSON.stringify(api.requestSchema, null, 2), endpointKey)
                            }
                            className="flex items-center gap-1.5 hover:text-[#72D8B0] transition-colors cursor-pointer"
                          >
                            {isCopied ? (
                              <Check className="w-3.5 h-3.5 text-[#72D8B0]" />
                            ) : (
                              <Copy className="w-3.5 h-3.5" />
                            )}
                            <span>{isCopied ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                        <pre className="p-4 rounded-xl bg-[#121B17] border border-[#273830] text-[#72D8B0] text-[11px] overflow-x-auto leading-relaxed">
                          {JSON.stringify(api.requestSchema, null, 2)}
                        </pre>
                      </div>
                    )}

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-[#8F9A92] text-[11px]">
                        <span>Response Payload (JSON)</span>
                      </div>
                      <pre className="p-4 rounded-xl bg-[#121B17] border border-[#273830] text-[#D8E2DC] text-[11px] overflow-x-auto leading-relaxed">
                        {JSON.stringify(api.responseSchema, null, 2)}
                      </pre>
                    </div>
                  </div>

                  {/* Status codes */}
                  <div className="pt-3 border-t border-[#273830] flex flex-wrap items-center gap-4 text-[11px]">
                    <span className="font-bold text-[#8F9A92]">Status Codes:</span>
                    {api.statusCodes.map((sc) => (
                      <span key={sc.code} className="flex items-center gap-1.5 text-[#A9C2AE]">
                        <span
                          className={`font-mono font-bold ${
                            sc.code < 300
                              ? 'text-[#72D8B0]'
                              : sc.code < 500
                              ? 'text-[#E2B77E]'
                              : 'text-[#E89898]'
                          }`}
                        >
                          {sc.code}
                        </span>
                        <span>{sc.description}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA to WhatsApp Page */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#273830] text-xs">
        <Link
          href="/integrations/whatsapp"
          className="text-[#72D8B0] font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Inspect WhatsApp Cloud API Webhook Lifecycle</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-[#A9C2AE] hover:text-[#F4F2EA] transition-colors"
        >
          Test API Outputs in Simulator →
        </Link>
      </div>
    </div>
  );
}
