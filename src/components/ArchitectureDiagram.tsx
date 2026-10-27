'use client';

import React, { useState } from 'react';
import { architectureLayers } from '@/data/technologyData';
import { StatusBadge } from './StatusBadge';
import {
  Layers,
  CheckCircle2,
  Cpu,
  Database,
  ArrowRight,
  ShieldCheck,
  Zap,
  Activity,
  Users
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-3');

  const activeLayer =
    architectureLayers.find((l) => l.id === selectedLayerId) || architectureLayers[2];

  return (
    <div className="w-full bg-[#0f172a] border border-slate-800 rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-slate-800 bg-[#131d33] flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-5 h-5 text-teal-400" />
            <h3 className="font-bold text-base text-white">
              End-to-End Pipeline Architecture (9 Continuous Layers)
            </h3>
          </div>
          <p className="text-xs text-slate-400">
            Click on any layer below to inspect inputs, outputs, architectural guarantees, and implementation status.
          </p>
        </div>
        <StatusBadge status={activeLayer.status} />
      </div>

      {/* Interactive Layer Flow Rail */}
      <div className="p-4 sm:p-6 border-b border-slate-800 bg-slate-900/50">
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
          {architectureLayers.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-teal-950/80 border-teal-500 shadow-md shadow-teal-950/50 text-white'
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                    isSelected ? 'bg-teal-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}
                >
                  {layer.number}
                </div>
                <div className="text-[10px] font-semibold leading-tight truncate w-full">
                  {layer.name.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Layer Detail Inspector */}
      <div className="p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-teal-400 font-bold mb-1">
              Layer {activeLayer.number} of 9
            </div>
            <h4 className="font-bold text-lg text-white">{activeLayer.name}</h4>
            <p className="text-xs text-slate-400 mt-0.5">{activeLayer.role}</p>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {activeLayer.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-slate-300 leading-relaxed bg-[#0c1322] p-4 rounded-xl border border-slate-800/80">
          {activeLayer.description}
        </p>

        {/* Inputs vs Outputs vs Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Inputs */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <h5 className="font-bold text-xs text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-1.5 text-teal-400">
              <Zap className="w-3.5 h-3.5" />
              <span>Inputs Ingested</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {activeLayer.inputs.map((inp, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-teal-400">•</span>
                  <span>{inp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outputs */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <h5 className="font-bold text-xs text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-1.5 text-teal-400">
              <ArrowRight className="w-3.5 h-3.5" />
              <span>Outputs Produced</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {activeLayer.outputs.map((out, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-teal-400">•</span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantees */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
            <h5 className="font-bold text-xs text-slate-200 uppercase tracking-wider mb-2 flex items-center gap-1.5 text-teal-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Architectural Guarantees</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {activeLayer.guarantees.map((guar, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0 mt-0.5" />
                  <span>{guar}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
