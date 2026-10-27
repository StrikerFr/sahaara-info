'use client';

import React, { useState } from 'react';
import { architectureLayers } from '@/data/technologyData';
import { StatusBadge } from './StatusBadge';
import {
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap
} from 'lucide-react';

export const ArchitectureDiagram: React.FC = () => {
  const [selectedLayerId, setSelectedLayerId] = useState<string>('layer-3');

  const activeLayer =
    architectureLayers.find((l) => l.id === selectedLayerId) || architectureLayers[2];

  return (
    <div className="w-full bg-[#17231F] border border-[#273830] rounded-2xl shadow-xl overflow-hidden">
      {/* Header */}
      <div className="p-5 border-b border-[#273830] bg-[#141F1A] flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Layers className="w-4 h-4 text-[#72D8B0]" />
            <h3 className="font-bold text-base text-[#F4F2EA]">
              End-to-End Pipeline Architecture (9 Continuous Layers)
            </h3>
          </div>
          <p className="text-xs text-[#8B9B90]">
            Click on any layer below to inspect inputs, outputs, architectural guarantees, and implementation status.
          </p>
        </div>
        <StatusBadge status={activeLayer.status} />
      </div>

      {/* Interactive Layer Flow Rail */}
      <div className="p-4 sm:p-5 border-b border-[#273830] bg-[#101714]/60">
        <div className="grid grid-cols-3 sm:grid-cols-9 gap-2">
          {architectureLayers.map((layer) => {
            const isSelected = layer.id === selectedLayerId;
            return (
              <button
                key={layer.id}
                onClick={() => setSelectedLayerId(layer.id)}
                className={`p-2.5 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#245B49]/40 border-[#3A6B59] text-[#F4F2EA]'
                    : 'bg-[#17231F] border-[#273830] text-[#8B9B90] hover:text-[#E5EAE6] hover:border-[#385145]'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center font-mono font-bold text-xs ${
                    isSelected ? 'bg-[#72D8B0] text-[#101714]' : 'bg-[#202B26] text-[#A9C2AE]'
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
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#A9C2AE] font-bold mb-1">
              Layer {activeLayer.number} of 9
            </div>
            <h4 className="font-bold text-lg text-[#F4F2EA]">{activeLayer.name}</h4>
            <p className="text-xs text-[#8B9B90] mt-0.5">{activeLayer.role}</p>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {activeLayer.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[11px] px-2.5 py-1 rounded-md bg-[#202B26] text-[#A9C2AE] border border-[#2D3E35] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="text-xs text-[#C5D2C9] leading-relaxed bg-[#141F1A] p-4 rounded-xl border border-[#273830]">
          {activeLayer.description}
        </p>

        {/* Inputs vs Outputs vs Guarantees */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Inputs */}
          <div className="bg-[#141F1A] border border-[#273830] rounded-xl p-4">
            <h5 className="font-bold text-xs text-[#F4F2EA] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-[#A9C2AE]">
              <Zap className="w-3.5 h-3.5 text-[#72D8B0]" />
              <span>Inputs Ingested</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-[#8B9B90]">
              {activeLayer.inputs.map((inp, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#72D8B0]">•</span>
                  <span>{inp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Outputs */}
          <div className="bg-[#141F1A] border border-[#273830] rounded-xl p-4">
            <h5 className="font-bold text-xs text-[#F4F2EA] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-[#A9C2AE]">
              <ArrowRight className="w-3.5 h-3.5 text-[#72D8B0]" />
              <span>Outputs Produced</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-[#8B9B90]">
              {activeLayer.outputs.map((out, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-[#72D8B0]">•</span>
                  <span>{out}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Guarantees */}
          <div className="bg-[#141F1A] border border-[#273830] rounded-xl p-4">
            <h5 className="font-bold text-xs text-[#F4F2EA] uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-[#A9C2AE]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#72D8B0]" />
              <span>Architectural Guarantees</span>
            </h5>
            <ul className="space-y-1.5 text-xs text-[#8B9B90]">
              {activeLayer.guarantees.map((guar, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#72D8B0] shrink-0 mt-0.5" />
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
