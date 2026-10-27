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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      <Breadcrumb items={[{ label: 'Developers & API Reference' }]} />

      {/* Header Intro */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-semibold">
          <Code2 className="w-3.5 h-3.5" />
          <span>Developer Documentation & Data Contracts</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Relational domain entities &{' '}
          <span className="text-teal-400">REST API contracts.</span>
        </h1>

        <p className="text-base text-slate-300 leading-relaxed">
          Explore the exact PostgreSQL domain entities, database relationships, Row-Level Security
          policies, and REST API route handlers powering the Sahaara platform.
        </p>
      </div>

      {/* PART 1: DOMAIN ENTITIES SCHEMA VIEWER */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            Data Architecture
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">
            Relational Domain Entities (PostgreSQL / Supabase)
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
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
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold whitespace-nowrap transition-colors flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-teal-500/20 text-teal-300 border border-teal-500/40'
                    : 'bg-[#0f172a] text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                <Database className="w-3.5 h-3.5" />
                <span>{entity.name}</span>
              </button>
            );
          })}
        </div>

        {/* Active Entity Schema Table */}
        <div className="bg-[#0f172a] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="p-5 border-b border-slate-800 bg-[#131d33] flex flex-wrap items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-xs text-teal-400 font-bold">
                  Table: {activeEntity.table}
                </span>
                <StatusBadge status={activeEntity.status} size="sm" />
              </div>
              <h4 className="font-bold text-base text-white">{activeEntity.name}</h4>
              <p className="text-xs text-slate-400 mt-0.5">{activeEntity.purpose}</p>
            </div>
            <div className="text-right text-xs text-slate-400">
              <div>
                <strong>Retention:</strong> {activeEntity.retentionPolicy}
              </div>
            </div>
          </div>

          <div className="p-5 space-y-5 text-xs">
            {/* Fields Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono text-[11px]">
                    <th className="pb-2">Field Name</th>
                    <th className="pb-2">SQL Type</th>
                    <th className="pb-2">Required</th>
                    <th className="pb-2">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-mono text-slate-300">
                  {activeEntity.fields.map((field) => (
                    <tr key={field.name} className="hover:bg-slate-900/40">
                      <td className="py-2.5 font-bold text-teal-300">{field.name}</td>
                      <td className="py-2.5 text-slate-400">{field.type}</td>
                      <td className="py-2.5">
                        {field.required ? (
                          <span className="text-amber-400">NOT NULL</span>
                        ) : (
                          <span className="text-slate-500">NULLABLE</span>
                        )}
                      </td>
                      <td className="py-2.5 font-sans text-slate-300 text-xs">
                        {field.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Relationships & Security Policies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h5 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-2 text-teal-400">
                  Entity Relationships
                </h5>
                <ul className="space-y-1 text-slate-300">
                  {activeEntity.relationships.map((rel, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-teal-400">•</span>
                      <span>{rel}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <h5 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-2 text-teal-400">
                  Row-Level Security (RLS) Policy
                </h5>
                <p className="text-slate-300 leading-relaxed">{activeEntity.securityPolicy}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PART 2: REST API REFERENCE */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xs font-mono uppercase font-bold text-teal-400 tracking-wider">
            API Contracts
          </h2>
          <h3 className="text-2xl font-bold text-white mt-1">REST API Route Handlers</h3>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Documenting the live route handlers implemented in the repository, with schemas, status codes, and copyable payloads.
          </p>
        </div>

        <div className="space-y-4">
          {apiEndpoints.map((api) => {
            const endpointKey = `${api.method}-${api.endpoint}`;
            const isCopied = copiedEndpoint === endpointKey;
            return (
              <div
                key={endpointKey}
                className="bg-[#0f172a] border border-slate-800 rounded-2xl overflow-hidden shadow-xl"
              >
                {/* Endpoint Header */}
                <div className="p-4 sm:p-5 border-b border-slate-800 bg-[#131d33] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span
                      className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${
                        api.method === 'GET'
                          ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                          : api.method === 'POST'
                          ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                          : api.method === 'PATCH'
                          ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                          : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                      }`}
                    >
                      {api.method}
                    </span>
                    <span className="font-mono text-sm font-bold text-white">{api.endpoint}</span>
                    <StatusBadge status={api.status} size="sm" />
                  </div>

                  <div className="text-xs font-mono text-slate-400">
                    Auth: <span className="text-slate-200">{api.auth}</span>
                  </div>
                </div>

                {/* Endpoint Body */}
                <div className="p-5 space-y-4 text-xs">
                  <div>
                    <h5 className="font-semibold text-slate-200 text-sm mb-1">{api.title}</h5>
                    <p className="text-slate-400">{api.purpose}</p>
                  </div>

                  {/* Request vs Response Payloads */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono">
                    {api.requestSchema && (
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-slate-400 text-[11px]">
                          <span>Request Payload (JSON)</span>
                          <button
                            onClick={() =>
                              handleCopy(JSON.stringify(api.requestSchema, null, 2), endpointKey)
                            }
                            className="flex items-center gap-1 hover:text-teal-400 transition-colors"
                          >
                            {isCopied ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                            <span>{isCopied ? 'Copied' : 'Copy'}</span>
                          </button>
                        </div>
                        <pre className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 text-teal-300 text-[11px] overflow-x-auto leading-relaxed">
                          {JSON.stringify(api.requestSchema, null, 2)}
                        </pre>
                      </div>
                    )}

                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between text-slate-400 text-[11px]">
                        <span>Response Payload (JSON)</span>
                      </div>
                      <pre className="p-3.5 rounded-xl bg-[#090d16] border border-slate-800 text-slate-300 text-[11px] overflow-x-auto leading-relaxed">
                        {JSON.stringify(api.responseSchema, null, 2)}
                      </pre>
                    </div>
                  </div>

                  {/* Status codes */}
                  <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center gap-4 text-[11px]">
                    <span className="font-bold text-slate-400">Status Codes:</span>
                    {api.statusCodes.map((sc) => (
                      <span key={sc.code} className="flex items-center gap-1.5 text-slate-300">
                        <span
                          className={`font-mono font-bold ${
                            sc.code < 300
                              ? 'text-emerald-400'
                              : sc.code < 500
                              ? 'text-amber-400'
                              : 'text-rose-400'
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
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800 text-xs">
        <Link
          href="/integrations/whatsapp"
          className="text-teal-400 font-semibold hover:underline flex items-center gap-1.5"
        >
          <span>Next: Inspect WhatsApp Cloud API Webhook Lifecycle</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/demo"
          className="text-slate-400 hover:text-slate-200 transition-colors"
        >
          Test API Outputs in Simulator →
        </Link>
      </div>
    </div>
  );
}
