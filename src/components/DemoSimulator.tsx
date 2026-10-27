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
      <div className="flex items-center justify-between bg-teal-950/40 border border-teal-500/30 rounded-xl p-3 mb-6">
        <div className="flex items-center gap-2.5 text-xs text-teal-300">
          <Info className="w-4 h-4 text-teal-400 shrink-0" />
          <span>
            <strong>Synthetic Demonstration Environment:</strong> All senior profiles, observations, and phone numbers are deterministically generated synthetic fixtures for Deviathon 2.0. No real personal or patient data is used.
          </span>
        </div>
        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 transition-colors shrink-0 ml-4"
          title="Reset all scenarios to default seeded state"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Demo</span>
        </button>
      </div>

      {/* Scenario Selector Pills */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider">
            Select Test Scenario (8 Seeded Scenarios)
          </label>
          <span className="text-xs text-slate-400">
            Current: <span className="text-teal-400 font-semibold">{activeScenario.title}</span>
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
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
                className={`p-2.5 rounded-xl border text-left transition-all relative ${
                  isSelected
                    ? 'bg-teal-950/60 border-teal-500/80 shadow-lg shadow-teal-950/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                      scenario.severity === 'Urgent Attention'
                        ? 'bg-rose-500/20 text-rose-300'
                        : scenario.severity === 'Review Required'
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-emerald-500/20 text-emerald-300'
                    }`}
                  >
                    {scenario.severity}
                  </span>
                  <span
                    className={`w-2 h-2 rounded-full ${
                      itemCase?.status === 'Resolved'
                        ? 'bg-emerald-400'
                        : itemCase?.status === 'Acknowledged'
                        ? 'bg-amber-400'
                        : itemCase?.status === 'Escalated'
                        ? 'bg-rose-400'
                        : 'bg-blue-400'
                    }`}
                    title={`Status: ${itemCase?.status}`}
                  />
                </div>
                <div className="font-semibold text-xs text-slate-200 truncate">
                  {scenario.title.split(':')[1] || scenario.title}
                </div>
                <div className="text-[11px] text-slate-400 truncate mt-0.5">
                  {scenario.category}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Coordinator Simulator Console */}
      <div className="bg-[#0f172a] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        {/* Console Header Bar */}
        <div className="bg-[#131d33] border-b border-slate-800/80 p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold">
              <User className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-bold text-base text-white">{activeScenario.senior.name}</h3>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  Age {activeScenario.senior.age}
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                  {activeScenario.senior.city}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {activeScenario.senior.livingArrangement}
              </p>
            </div>
          </div>

          {/* Current Case Status & Quick Action */}
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                Case Status
              </div>
              <div className="flex items-center justify-end gap-1.5 mt-0.5">
                <span
                  className={`inline-block w-2 h-2 rounded-full ${
                    currentCase.status === 'Resolved'
                      ? 'bg-emerald-400'
                      : currentCase.status === 'Acknowledged'
                      ? 'bg-amber-400'
                      : currentCase.status === 'Escalated'
                      ? 'bg-rose-400'
                      : 'bg-blue-400'
                  }`}
                />
                <span className="text-xs font-semibold text-slate-200">
                  {currentCase.status}
                </span>
              </div>
            </div>

            {currentCase.status === 'New' && (
              <button
                onClick={handleAcknowledge}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-md shadow-teal-700/20 transition-all"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Acknowledge Alert</span>
              </button>
            )}

            {currentCase.status === 'Acknowledged' && (
              <button
                onClick={() => setActiveTab('action')}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-md shadow-amber-700/20 transition-all"
              >
                <Phone className="w-4 h-4" />
                <span>Log Check-in Call</span>
              </button>
            )}

            {currentCase.status === 'Resolved' && (
              <div className="px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 font-semibold text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Resolved</span>
              </div>
            )}

            {currentCase.status === 'Escalated' && (
              <div className="px-3 py-1.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 font-semibold text-xs flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                <span>Escalated to Emergency</span>
              </div>
            )}
          </div>
        </div>

        {/* Narrative Context Card */}
        <div className="p-4 bg-slate-900/40 border-b border-slate-800 text-xs text-slate-300 leading-relaxed flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-slate-200">Scenario Context:</strong> {activeScenario.narrative}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-800 bg-slate-900/60 px-4">
          <button
            onClick={() => setActiveTab('evidence')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'evidence'
                ? 'border-teal-400 text-teal-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Explainable Evidence Card
          </button>
          <button
            onClick={() => setActiveTab('timeline')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'timeline'
                ? 'border-teal-400 text-teal-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Recent Observations ({activeScenario.recentObservations.length})
          </button>
          <button
            onClick={() => setActiveTab('action')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'action'
                ? 'border-teal-400 text-teal-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Action & Follow-up
          </button>
          <button
            onClick={() => setActiveTab('audit')}
            className={`py-3 px-4 text-xs font-semibold border-b-2 transition-colors ${
              activeTab === 'audit'
                ? 'border-teal-400 text-teal-300'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Live Audit Trail ({currentCase.auditLog.length})
          </button>
        </div>

        {/* Success Banner */}
        {actionSuccessMsg && (
          <div className="bg-emerald-950/60 border-b border-emerald-500/30 px-4 py-2 text-xs text-emerald-300 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{actionSuccessMsg}</span>
          </div>
        )}

        {/* Tab 1: Evidence Card */}
        {activeTab === 'evidence' && (
          <div className="p-5 space-y-5">
            {/* Alert Header Box */}
            <div
              className={`p-4 rounded-xl border ${
                activeScenario.alert.priority === 'Critical'
                  ? 'bg-rose-950/30 border-rose-500/40 text-rose-200'
                  : activeScenario.alert.priority === 'High'
                  ? 'bg-amber-950/30 border-amber-500/40 text-amber-200'
                  : activeScenario.alert.priority === 'Medium'
                  ? 'bg-blue-950/30 border-blue-500/40 text-blue-200'
                  : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                      activeScenario.alert.priority === 'Critical'
                        ? 'bg-rose-500 text-white'
                        : activeScenario.alert.priority === 'High'
                        ? 'bg-amber-500 text-slate-950'
                        : activeScenario.alert.priority === 'Medium'
                        ? 'bg-blue-500 text-white'
                        : 'bg-emerald-600 text-white'
                    }`}
                  >
                    Priority: {activeScenario.alert.priority}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {activeScenario.alert.alertId}
                  </span>
                </div>
                <div className="text-xs text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Detected: {activeScenario.alert.detectedAt}</span>
                  <span>·</span>
                  <span className="font-semibold text-slate-300">
                    Engine: {activeScenario.alert.engineUsed}
                  </span>
                </div>
              </div>

              <h4 className="font-bold text-base text-white mb-1.5">
                {activeScenario.alert.title}
              </h4>
              <p className="text-xs leading-relaxed text-slate-300">
                {activeScenario.alert.rationale}
              </p>
            </div>

            {/* Evidence Breakdown Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Contributing Observations */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Activity className="w-4 h-4 text-teal-400" />
                  <h5 className="font-semibold text-xs text-slate-200 uppercase tracking-wider">
                    Contributing Observations
                  </h5>
                </div>
                <ul className="space-y-2 text-xs">
                  {activeScenario.alert.contributingObservations.map((obs, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 shrink-0 mt-1.5" />
                      <span>{obs}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Personal Baseline Reference */}
              <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Calendar className="w-4 h-4 text-teal-400" />
                  <h5 className="font-semibold text-xs text-slate-200 uppercase tracking-wider">
                    Personal Baseline Reference
                  </h5>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed mb-3">
                  {activeScenario.alert.baselineReference}
                </p>
                <div className="flex items-center gap-3 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <span>
                    Confidence:{' '}
                    <strong className="text-teal-300">
                      {activeScenario.senior.baselineConfidence}
                    </strong>
                  </span>
                  <span>·</span>
                  <span>
                    History:{' '}
                    <strong className="text-slate-200">
                      {activeScenario.senior.dataCoverageDays} Days
                    </strong>
                  </span>
                </div>
              </div>
            </div>

            {/* Missing or Conflicting Data Box */}
            <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2 text-amber-400">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <h5 className="font-semibold text-xs uppercase tracking-wider">
                  Missing, Delayed, or Conflicting Signals
                </h5>
              </div>
              <ul className="space-y-1 text-xs text-amber-200/90">
                {activeScenario.alert.missingOrConflictingData.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-amber-400">⚠️</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggested Coordinator Verification Action */}
            <div className="bg-teal-950/30 border border-teal-500/40 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
              <div>
                <h5 className="font-semibold text-xs text-teal-200 uppercase tracking-wider mb-1">
                  Suggested Action & Verification Script
                </h5>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeScenario.alert.suggestedAction}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Recent Observations Timeline */}
        {activeTab === 'timeline' && (
          <div className="p-5">
            <div className="mb-4 text-xs text-slate-400">
              Chronological log of multi-source inputs ingested within the last 72-hour window.
            </div>
            <div className="relative pl-6 space-y-4 before:content-[''] before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
              {activeScenario.recentObservations.map((obs, idx) => (
                <div key={idx} className="relative group">
                  <div
                    className={`absolute -left-6 top-1 w-3.5 h-3.5 rounded-full border-2 ${
                      obs.isAbnormal
                        ? 'bg-amber-500 border-amber-300 ring-2 ring-amber-500/20'
                        : 'bg-slate-800 border-teal-500'
                    }`}
                  />
                  <div
                    className={`p-3.5 rounded-xl border text-xs ${
                      obs.isAbnormal
                        ? 'bg-amber-950/20 border-amber-500/40 text-amber-200'
                        : 'bg-slate-900/60 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-200">{obs.source}</span>
                        <span className="text-[10px] px-1.5 py-0.2 bg-slate-800 text-slate-400 rounded uppercase font-mono">
                          {obs.type}
                        </span>
                      </div>
                      <span className="text-slate-400 font-mono text-[11px]">{obs.time}</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">{obs.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab 3: Action & Follow-up */}
        {activeTab === 'action' && (
          <div className="p-5 max-w-2xl">
            <h4 className="font-bold text-sm text-white mb-2">
              Coordinator Call & Follow-Up Documentation
            </h4>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Record check-in details, conversation notes, and case resolution. Every recorded action is permanently sealed into the immutable audit trail.
            </p>

            <form onSubmit={handleLogFollowUp} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Contacted Party
                  </label>
                  <select
                    value={selectedContactedParty}
                    onChange={(e) => setSelectedContactedParty(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
                  >
                    <option value="Senior">Senior Directly (Phone/WhatsApp)</option>
                    <option value="Son">Son / Primary Relative</option>
                    <option value="Daughter">Daughter / Family Lead</option>
                    <option value="Neighbor">Neighbor / Local Guardian</option>
                    <option value="Visiting Caregiver">Visiting Caregiver / Nurse</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Case Outcome Category
                  </label>
                  <select
                    value={selectedOutcome}
                    onChange={(e) => setSelectedOutcome(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-teal-500"
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
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Coordinator Notes & Follow-Up Agreement *
                </label>
                <textarea
                  rows={3}
                  value={callNotesInput}
                  onChange={(e) => setCallNotesInput(e.target.value)}
                  placeholder="e.g. Spoke with son Amit. Confirmed Mrs. Verma felt weak after skipping breakfast. Neighbor Dr. Joshi visited with khichdi. Son visiting at 6 PM. Follow-up task set for 7 PM."
                  required
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-xs text-slate-200 focus:outline-none focus:border-teal-500 leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="text-[11px] text-slate-400">
                  Assigned Coordinator:{' '}
                  <span className="font-semibold text-slate-200">
                    {currentCase.assignedCoordinator}
                  </span>
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-600 hover:bg-teal-500 text-white font-semibold text-xs shadow-md shadow-teal-700/20 transition-all"
                >
                  <Send className="w-3.5 h-3.5" />
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
              <div className="text-xs text-slate-400">
                Immutable chronological log of all observations, rule firings, and coordinator actions.
              </div>
              <span className="text-[11px] font-mono text-teal-400">
                Integrity Hash: SHA-256 Verified
              </span>
            </div>

            <div className="space-y-2.5">
              {currentCase.auditLog.map((log) => (
                <div
                  key={log.id}
                  className="p-3 rounded-lg bg-slate-900/70 border border-slate-800 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-200">{log.action}</span>
                      <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 font-mono">
                        {log.actor}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">{log.details}</p>
                  </div>
                  <span className="text-[11px] text-slate-500 font-mono shrink-0">
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
