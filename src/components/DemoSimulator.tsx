'use client';

import React, { useState } from 'react';
import { scenariosList } from '@/data/scenariosData';
import { StatusBadge } from './StatusBadge';
import {
  AlertTriangle,
  CheckCircle2,
  Clock,
  User,
  Activity,
  Phone,
  MessageSquare,
  ShieldAlert,
  RotateCcw,
  Sparkles,
  FileCheck,
  ChevronRight,
  Info,
  Calendar,
  Send
} from 'lucide-react';

export const DemoSimulator: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<string>('scenario-2');
  const [scenarioState, setScenarioState] = useState<{
    [scenarioId: string]: {
      status: 'New' | 'Acknowledged' | 'In Progress' | 'Resolved' | 'Escalated';
      assignedCoordinator: string;
      followUpNotes: string;
      contactedParty: string;
      outcome: string;
      auditLog: Array<{ id: string; timestamp: string; actor: string; action: string; details: string }>;
    };
  }>({
    'scenario-1': {
      status: 'Resolved',
      assignedCoordinator: 'Priya Sharma',
      followUpNotes: 'Routine confirmed normal. No intervention needed.',
      contactedParty: 'Senior',
      outcome: 'Routine Restored',
      auditLog: scenariosList[0].initialAuditLog
    },
    'scenario-2': {
      status: 'New',
      assignedCoordinator: 'Priya Sharma (Senior Care Lead)',
      followUpNotes: '',
      contactedParty: 'Son (Amit Verma)',
      outcome: 'Resolved with Family',
      auditLog: scenariosList[1].initialAuditLog
    },
    'scenario-3': {
      status: 'New',
      assignedCoordinator: 'Arun Deshmukh (Emergency Triage)',
      followUpNotes: '',
      contactedParty: 'Neighbor (Dr. Joshi)',
      outcome: 'Escalated to Emergency Network',
      auditLog: scenariosList[2].initialAuditLog
    },
    'scenario-4': {
      status: 'New',
      assignedCoordinator: 'Neha Mathur',
      followUpNotes: '',
      contactedParty: 'Senior Landline',
      outcome: 'False Alarm - Device Battery',
      auditLog: scenariosList[3].initialAuditLog
    },
    'scenario-5': {
      status: 'New',
      assignedCoordinator: 'Mohit Saxena',
      followUpNotes: '',
      contactedParty: 'Visiting Nurse Mary',
      outcome: 'Resolved with Family',
      auditLog: scenariosList[4].initialAuditLog
    },
    'scenario-6': {
      status: 'Resolved',
      assignedCoordinator: 'Priya Sharma',
      followUpNotes: 'Duplicate message semantic match. Calendar updated for dental visit.',
      contactedParty: 'Son & Daughter',
      outcome: 'Routine Restored',
      auditLog: scenariosList[5].initialAuditLog
    },
    'scenario-7': {
      status: 'Resolved',
      assignedCoordinator: 'Soma Mukherjee',
      followUpNotes: 'Gateway reconnected. Batch telemetry sorted retrospectively. Zero anomaly found.',
      contactedParty: 'System Gateway',
      outcome: 'Routine Restored',
      auditLog: scenariosList[6].initialAuditLog
    },
    'scenario-8': {
      status: 'New',
      assignedCoordinator: 'Priya Sharma',
      followUpNotes: '',
      contactedParty: 'Senior',
      outcome: 'False Alarm - Benign Social Event',
      auditLog: scenariosList[7].initialAuditLog
    }
  });

  const [activeTab, setActiveTab] = useState<'evidence' | 'timeline' | 'action' | 'audit'>('evidence');
  const [callNotesInput, setCallNotesInput] = useState('');
  const [selectedOutcome, setSelectedOutcome] = useState('Resolved with Family');
  const [selectedContactedParty, setSelectedContactedParty] = useState('Senior');
  const [actionSuccessMsg, setActionSuccessMsg] = useState<string | null>(null);

  const activeScenario = scenariosList.find((s) => s.id === selectedScenarioId) || scenariosList[1];
  const currentCase = scenarioState[selectedScenarioId] || {
    status: 'New',
    assignedCoordinator: activeScenario.senior.assignedCoordinator,
    followUpNotes: '',
    contactedParty: 'Senior',
    outcome: 'Resolved with Family',
    auditLog: activeScenario.initialAuditLog
  };

  const handleAcknowledge = () => {
    const nowStr = 'Just now';
    const newEntry = {
      id: `aud-${Date.now()}`,
      timestamp: nowStr,
      actor: currentCase.assignedCoordinator || 'Coordinator',
      action: 'Case Acknowledged',
      details: `Alert claimed by coordinator. SLA countdown stopped.`
    };

    setScenarioState((prev) => ({
      ...prev,
      [selectedScenarioId]: {
        ...prev[selectedScenarioId],
        status: 'Acknowledged',
        auditLog: [newEntry, ...prev[selectedScenarioId].auditLog]
      }
    }));

    setActionSuccessMsg('Alert successfully acknowledged! Coordinator claimed ownership.');
    setTimeout(() => setActionSuccessMsg(null), 4000);
  };

  const handleLogFollowUp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!callNotesInput.trim()) return;

    const nowStr = 'Just now';
    const isEscalation = selectedOutcome.toLowerCase().includes('escalated');
    const newStatus = isEscalation ? 'Escalated' : 'Resolved';

    const newEntry = {
      id: `aud-${Date.now()}`,
      timestamp: nowStr,
      actor: currentCase.assignedCoordinator,
      action: isEscalation ? 'EMERGENCY ESCALATION' : 'Follow-up Completed & Resolved',
      details: `Contacted: ${selectedContactedParty} · Outcome: ${selectedOutcome} · Notes: "${callNotesInput}"`
    };

    setScenarioState((prev) => ({
      ...prev,
      [selectedScenarioId]: {
        ...prev[selectedScenarioId],
        status: newStatus,
        followUpNotes: callNotesInput,
        contactedParty: selectedContactedParty,
        outcome: selectedOutcome,
        auditLog: [newEntry, ...prev[selectedScenarioId].auditLog]
      }
    }));

    setCallNotesInput('');
    setActionSuccessMsg(`Case marked as ${newStatus}. Immutable audit log updated.`);
    setActiveTab('audit');
    setTimeout(() => setActionSuccessMsg(null), 5000);
  };

  const handleReset = () => {
    const resetState = { ...scenarioState };
    scenariosList.forEach((s) => {
      resetState[s.id] = {
        status: s.id === 'scenario-1' || s.id === 'scenario-6' || s.id === 'scenario-7' ? 'Resolved' : 'New',
        assignedCoordinator: s.senior.assignedCoordinator,
        followUpNotes: '',
        contactedParty: 'Senior',
        outcome: 'Resolved with Family',
        auditLog: s.initialAuditLog
      };
    });
    setScenarioState(resetState);
    setActionSuccessMsg('Scenario state restored to initial seed.');
    setTimeout(() => setActionSuccessMsg(null), 3000);
  };

  return (
    <div className="w-full">
      {/* Synthetic Watermark Notice */}
      <div className="flex items-center justify-between bg-[#141F1A] border border-[#273830] rounded-xl p-3.5 mb-6">
        <div className="flex items-center gap-3 text-xs text-[#A9C2AE]">
          <Info className="w-4 h-4 text-[#72D8B0] shrink-0" />
          <span>
            <strong className="text-[#F4F2EA]">Synthetic Demonstration Environment:</strong> All senior profiles, observations, and phone numbers are deterministically generated synthetic fixtures for Deviathon 2.0. No real personal or patient data is used.
          </span>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202B26] hover:bg-[#283A31] text-[#D8E2DC] text-xs font-medium border border-[#2E4037] transition-colors shrink-0 ml-4 cursor-pointer"
          title="Reset all scenarios to default seeded state"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Demo</span>
        </button>
      </div>

      {/* Scenario Selector Pills */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2.5">
          <label className="text-[11px] font-semibold text-[#8F9A92] uppercase tracking-wider">
            Select Test Scenario (8 Seeded Scenarios)
          </label>
          <span className="text-xs text-[#8F9A92]">
            Current: <span className="text-[#F4F2EA] font-semibold">{activeScenario.title}</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
          {scenariosList.map((scenario) => {
            const isSelected = scenario.id === selectedScenarioId;
            const itemCase = scenarioState[scenario.id];
            return (
              <button
                key={scenario.id}
                onClick={() => {
                  setSelectedScenarioId(scenario.id);
                  setActionSuccessMsg(null);
                }}
                className={`p-3 rounded-xl border text-left transition-all relative cursor-pointer ${
                  isSelected
                    ? 'bg-[#202B26] border-[#245B49] shadow-md shadow-black/40 ring-1 ring-[#72D8B0]/30'
                    : 'bg-[#141F1A] border-[#22332B] hover:border-[#2D4238] hover:bg-[#17231F]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      scenario.severity === 'Urgent Attention'
                        ? 'bg-[#B94343]/20 text-[#E89898]'
                        : scenario.severity === 'Review Required'
                        ? 'bg-[#B87922]/20 text-[#E2B77E]'
                        : 'bg-[#245B49]/40 text-[#A9C2AE]'
                    }`}
                  >
                    {scenario.severity}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      itemCase?.status === 'Resolved'
                        ? 'bg-[#72D8B0]'
                        : itemCase?.status === 'Acknowledged'
                        ? 'bg-[#E2B77E]'
                        : itemCase?.status === 'Escalated'
                        ? 'bg-[#E89898]'
                        : 'bg-[#8F9A92]'
                    }`}
                    title={`Status: ${itemCase?.status}`}
                  />
                </div>
                <div className="font-semibold text-xs text-[#F4F2EA] truncate">
                  {scenario.title.split(':')[1] || scenario.title}
                </div>
                <div className="text-[11px] text-[#8F9A92] truncate mt-0.5">
                  {scenario.category}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Coordinator Simulator Console */}
      <div className="bg-[#17231F] border border-[#273830] rounded-2xl shadow-xl overflow-hidden">
        {/* Console Header Bar */}
        <div className="bg-[#141E1A] border-b border-[#273830] p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#245B49]/20 border border-[#245B49]/40 flex items-center justify-center text-[#72D8B0] font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-[#F4F2EA]">{activeScenario.senior.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded bg-[#202B26] text-[#A9C2AE] border border-[#2E4037]">
                  Age {activeScenario.senior.age}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#202B26] text-[#A9C2AE] border border-[#2E4037]">
                  {activeScenario.senior.city}
                </span>
              </div>
              <p className="text-xs text-[#8F9A92] mt-0.5">
                {activeScenario.senior.livingArrangement}
              </p>
            </div>
          </div>

          {/* Current Case Status & Quick Action */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#8F9A92]">
                Case Status
              </div>
              <div className="flex items-center justify-end gap-1.5 mt-0.5">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    currentCase.status === 'Resolved'
                      ? 'bg-[#72D8B0]'
                      : currentCase.status === 'Acknowledged'
                      ? 'bg-[#E2B77E]'
                      : currentCase.status === 'Escalated'
                      ? 'bg-[#E89898]'
                      : 'bg-[#A9C2AE]'
                  }`}
                />
                <span className="text-xs font-semibold text-[#F4F2EA]">
                  {currentCase.status}
                </span>
              </div>
            </div>

            {currentCase.status === 'New' && (
              <button
                onClick={handleAcknowledge}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs shadow-sm transition-all cursor-pointer"
              >
                <CheckCircle2 className="w-4 h-4 text-[#72D8B0]" />
                <span>Acknowledge Alert</span>
              </button>
            )}

            {currentCase.status === 'Acknowledged' && (
              <button
                onClick={() => setActiveTab('action')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#B87922] hover:bg-[#C9872C] text-[#F4F2EA] font-semibold text-xs shadow-sm transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Log Check-in Call</span>
              </button>
            )}

            {currentCase.status === 'Resolved' && (
              <div className="px-3 py-1.5 rounded-lg bg-[#245B49]/20 border border-[#245B49]/40 text-[#A9C2AE] font-semibold text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#72D8B0]" />
                <span>Resolved</span>
              </div>
            )}

            {currentCase.status === 'Escalated' && (
              <div className="px-3 py-1.5 rounded-lg bg-[#B94343]/20 border border-[#B94343]/40 text-[#E89898] font-semibold text-xs flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Escalated to Emergency</span>
              </div>
            )}
          </div>
        </div>

        {/* Narrative Context Card */}
        <div className="p-4 bg-[#131D19] border-b border-[#273830] text-xs text-[#A9C2AE] leading-relaxed flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[#72D8B0] shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#F4F2EA]">Scenario Context:</strong> {activeScenario.narrative}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#273830] bg-[#121B17] px-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('evidence')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'evidence'
                ? 'border-[#72D8B0] text-[#F4F2EA]'
                : 'border-transparent text-[#8F9A92] hover:text-[#D8E2DC]'
            }`}
          >
            Explainable Evidence Card
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'timeline'
                ? 'border-[#72D8B0] text-[#F4F2EA]'
                : 'border-transparent text-[#8F9A92] hover:text-[#D8E2DC]'
            }`}
          >
            Recent Observations ({activeScenario.recentObservations.length})
          </button>
          <button
            onClick={() => setActiveTab('action')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'action'
                ? 'border-[#72D8B0] text-[#F4F2EA]'
                : 'border-transparent text-[#8F9A92] hover:text-[#D8E2DC]'
            }`}
          >
            Action & Follow-up
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === 'audit'
                ? 'border-[#72D8B0] text-[#F4F2EA]'
                : 'border-transparent text-[#8F9A92] hover:text-[#D8E2DC]'
            }`}
          >
            Live Audit Trail ({currentCase.auditLog.length})
          </button>
        </div>

        {/* Success Banner */}
        {actionSuccessMsg && (
          <div className="bg-[#245B49]/30 border-b border-[#245B49]/50 px-4 py-2 text-xs text-[#A9C2AE] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#72D8B0]" />
            <span className="text-[#F4F2EA]">{actionSuccessMsg}</span>
          </div>
        )}

        {/* Tab 1: Evidence Card */}
        {activeTab === 'evidence' && (
          <div className="p-5 space-y-5">
            {/* Alert Header Box */}
            <div
              className={`p-4 rounded-xl border ${
                activeScenario.alert.priority === 'Critical'
                  ? 'bg-[#B94343]/15 border-[#B94343]/40 text-[#E89898]'
                  : activeScenario.alert.priority === 'High'
                  ? 'bg-[#B87922]/15 border-[#B87922]/40 text-[#E2B77E]'
                  : activeScenario.alert.priority === 'Medium'
                  ? 'bg-[#245B49]/20 border-[#245B49]/50 text-[#A9C2AE]'
                  : 'bg-[#1C2C25] border-[#273830] text-[#A9C2AE]'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      activeScenario.alert.priority === 'Critical'
                        ? 'bg-[#B94343] text-white'
                        : activeScenario.alert.priority === 'High'
                        ? 'bg-[#B87922] text-[#101714]'
                        : activeScenario.alert.priority === 'Medium'
                        ? 'bg-[#245B49] text-white'
                        : 'bg-[#202B26] text-[#A9C2AE]'
                    }`}
                  >
                    Priority: {activeScenario.alert.priority}
                  </span>
                  <span className="text-xs text-[#8F9A92] font-mono">
                    {activeScenario.alert.alertId}
                  </span>
                </div>
                <div className="text-xs text-[#8F9A92] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Detected: {activeScenario.alert.detectedAt}</span>
                  <span>·</span>
                  <span className="font-semibold text-[#D8E2DC]">
                    Engine: {activeScenario.alert.engineUsed}
                  </span>
                </div>
              </div>

              <h4 className="font-bold text-base text-[#F4F2EA] mb-1.5">
                {activeScenario.alert.title}
              </h4>
              <p className="text-xs leading-relaxed text-[#D8E2DC]">
                {activeScenario.alert.rationale}
              </p>
            </div>

            {/* Evidence Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contributing Observations */}
              <div className="bg-[#141F1A] border border-[#273830] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-[#72D8B0]" />
                  <h5 className="font-semibold text-xs text-[#F4F2EA] uppercase tracking-wider">
                    Contributing Observations
                  </h5>
                </div>
                <ul className="space-y-2 text-xs">
                  {activeScenario.alert.contributingObservations.map((obs, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[#D8E2DC]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#72D8B0] shrink-0 mt-1.5" />
                      <span>{obs}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personal Baseline Reference */}
              <div className="bg-[#141F1A] border border-[#273830] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-[#72D8B0]" />
                  <h5 className="font-semibold text-xs text-[#F4F2EA] uppercase tracking-wider">
                    Personal Baseline Reference
                  </h5>
                </div>
                <p className="text-xs text-[#D8E2DC] leading-relaxed mb-3">
                  {activeScenario.alert.baselineReference}
                </p>
                <div className="flex items-center gap-3 text-xs text-[#8F9A92] pt-2 border-t border-[#273830]">
                  <span>
                    Confidence:{' '}
                    <strong className="text-[#72D8B0]">
                      {activeScenario.senior.baselineConfidence}
                    </strong>
                  </span>
                  <span>·</span>
                  <span>
                    History:{' '}
                    <strong className="text-[#F4F2EA]">
                      {activeScenario.senior.dataCoverageDays} Days
                    </strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Missing or Conflicting Data Box */}
            <div className="bg-[#B87922]/15 border border-[#B87922]/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 text-[#E2B77E]">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <h5 className="font-semibold text-xs uppercase tracking-wider">
                  Missing, Delayed, or Conflicting Signals
                </h5>
              </div>
              <ul className="space-y-1 text-xs text-[#E2B77E]/90">
                {activeScenario.alert.missingOrConflictingData.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#B87922]">⚠️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggested Coordinator Verification Action */}
            <div className="bg-[#202B26] border border-[#2E4037] rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-[#72D8B0] shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-xs text-[#A9C2AE] uppercase tracking-wider mb-1">
                  Suggested Action & Verification Script
                </h5>
                <p className="text-xs text-[#D8E2DC] leading-relaxed">
                  {activeScenario.alert.suggestedAction}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Recent Observations Timeline */}
        {activeTab === 'timeline' && (
          <div className="p-5">
            <div className="mb-4 text-xs text-[#8F9A92]">
              Chronological log of multi-source inputs ingested within the last 72-hour window.
            </div>
            <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-[#273830]">
              {activeScenario.recentObservations.map((obs, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 ${
                      obs.isAbnormal
                        ? 'bg-[#B87922] border-[#E2B77E]'
                        : 'bg-[#17231F] border-[#245B49]'
                    }`}
                  />
                  <div
                    className={`p-3.5 rounded-xl border text-xs ${
                      obs.isAbnormal
                        ? 'bg-[#B87922]/15 border-[#B87922]/30 text-[#E2B77E]'
                        : 'bg-[#141F1A] border-[#273830] text-[#D8E2DC]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-[#F4F2EA]">{obs.source}</span>
                        <span className="text-[10px] px-1.5 py-0.5 bg-[#202B26] text-[#A9C2AE] rounded uppercase font-mono">
                          {obs.type}
                        </span>
                      </div>
                      <span className="text-[#8F9A92] font-mono text-[11px]">{obs.time}</span>
                    </div>
                    <p className="text-[#D8E2DC] leading-relaxed">{obs.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Action & Follow-up */}
        {activeTab === 'action' && (
          <div className="p-5 max-w-2xl">
            <h4 className="font-bold text-sm text-[#F4F2EA] mb-2">
              Coordinator Call & Follow-Up Documentation
            </h4>
            <p className="text-xs text-[#8F9A92] mb-4 leading-relaxed">
              Record check-in details, conversation notes, and case resolution. Every recorded action is permanently sealed into the immutable audit trail.
            </p>

            <form onSubmit={handleLogFollowUp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#D8E2DC] mb-1">
                    Contacted Party
                  </label>
                  <select
                    value={selectedContactedParty}
                    onChange={(e) => setSelectedContactedParty(e.target.value)}
                    className="w-full bg-[#121B17] border border-[#273830] rounded-lg px-3 py-2 text-xs text-[#F4F2EA] focus:outline-none focus:border-[#72D8B0]"
                  >
                    <option value="Senior">Senior Directly (Phone/WhatsApp)</option>
                    <option value="Son">Son / Primary Relative</option>
                    <option value="Daughter">Daughter / Family Lead</option>
                    <option value="Neighbor">Neighbor / Local Guardian</option>
                    <option value="Visiting Caregiver">Visiting Caregiver / Nurse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#D8E2DC] mb-1">
                    Case Outcome Category
                  </label>
                  <select
                    value={selectedOutcome}
                    onChange={(e) => setSelectedOutcome(e.target.value)}
                    className="w-full bg-[#121B17] border border-[#273830] rounded-lg px-3 py-2 text-xs text-[#F4F2EA] focus:outline-none focus:border-[#72D8B0]"
                  >
                    <option value="Resolved with Family">Resolved with Family (Follow-up agreed)</option>
                    <option value="Routine Restored">Routine Restored (False alarm / benign)</option>
                    <option value="Escalated to Emergency Network">Escalated to Emergency Network (Requires in-person visit)</option>
                    <option value="Doctor Appointment Scheduled">Doctor Appointment Scheduled</option>
                    <option value="Sensor Reconnected / Battery Replaced">Sensor Reconnected / Battery Replaced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#D8E2DC] mb-1">
                  Coordinator Notes & Follow-Up Agreement *
                </label>
                <textarea
                  rows={3}
                  value={callNotesInput}
                  onChange={(e) => setCallNotesInput(e.target.value)}
                  placeholder="e.g. Spoke with son Amit. Confirmed Mrs. Verma felt weak after skipping breakfast. Neighbor Dr. Joshi visited with khichdi. Son visiting at 6 PM. Follow-up task set for 7 PM."
                  required
                  className="w-full bg-[#121B17] border border-[#273830] rounded-lg p-3 text-xs text-[#F4F2EA] focus:outline-none focus:border-[#72D8B0] leading-relaxed placeholder:text-[#5E6D64]"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-[11px] text-[#8F9A92]">
                  Assigned Coordinator:{' '}
                  <span className="font-semibold text-[#F4F2EA]">
                    {currentCase.assignedCoordinator}
                  </span>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#245B49] hover:bg-[#2E6E5A] text-[#F4F2EA] font-semibold text-xs shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5 text-[#72D8B0]" />
                  <span>Save Follow-up & Close Case</span>
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Tab 4: Live Audit Trail */}
        {activeTab === 'audit' && (
          <div className="p-5">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs text-[#8F9A92]">
                Immutable chronological log of all observations, rule firings, and coordinator actions.
              </div>
              <span className="text-[11px] font-mono text-[#72D8B0]">
                Integrity Hash: SHA-256 Verified
              </span>
            </div>

            <div className="space-y-2.5">
              {currentCase.auditLog.map((log) => (
                <div
                  key={log.id}
                  className="p-3.5 rounded-lg bg-[#141F1A] border border-[#273830] text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[#F4F2EA]">{log.action}</span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#202B26] text-[#A9C2AE] font-mono">
                        {log.actor}
                      </span>
                    </div>
                    <p className="text-[#8F9A92] text-[11px]">{log.details}</p>
                  </div>
                  <span className="text-[11px] text-[#8F9A92] font-mono shrink-0">
                    {log.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
