import React from 'react';
import { Check, X, Minus, HelpCircle } from 'lucide-react';

interface ComparisonRow {
  capability: string;
  spreadsheets: string;
  reminderApps: string;
  sosButtons: string;
  remoteDashboards: string;
  sahaara: string;
  note: string;
}

export const ComparisonTable: React.FC = () => {
  const rows: ComparisonRow[] = [
    {
      capability: 'Personal Baseline Adaptation',
      spreadsheets: 'None (Manual memory)',
      reminderApps: 'Static global thresholds',
      sosButtons: 'Not applicable',
      remoteDashboards: 'Depends on product (Often population thresholds)',
      sahaara: 'Core Feature: Rolling 14-30 day personal distributions',
      note: 'Sahaara detects deviations relative to an individual’s own historical routine.'
    },
    {
      capability: 'Multi-Signal Cross-Context',
      spreadsheets: 'Scattered across notes & memory',
      reminderApps: 'Single-purpose (Medication only)',
      sosButtons: 'Single trigger (Emergency only)',
      remoteDashboards: 'Often siloed per connected sensor',
      sahaara: 'Core Feature: Correlates activity, sleep, check-in, meds & family chat',
      note: 'Fuses disparate observations over 24h-72h sliding windows.'
    },
    {
      capability: 'Explainable Evidence Cards',
      spreadsheets: 'None',
      reminderApps: 'Simple push alert ("Missed dose")',
      sosButtons: 'Location ping only',
      remoteDashboards: 'Numeric charts without reasoning',
      sahaara: 'Core Feature: Shows what changed, baseline reference & missing data',
      note: 'Coordinators understand the exact justification in <15 seconds.'
    },
    {
      capability: 'Prioritised Review Queue & SLA',
      spreadsheets: 'Manual task list',
      reminderApps: 'None (Consumer alert)',
      sosButtons: 'Emergency call-centre queue',
      remoteDashboards: 'Alert lists without operational SLA tracking',
      sahaara: 'Core Feature: 4-tier queue (Critical, High, Medium, Low) with SLAs',
      note: 'Built specifically for coordinators managing multiple seniors.'
    },
    {
      capability: 'Follow-up Lifecycle & Outcome Tracking',
      spreadsheets: 'Fragmented manual text',
      reminderApps: 'None',
      sosButtons: 'Incident closed after dispatch',
      remoteDashboards: 'Rarely integrated into software',
      sahaara: 'Core Feature: Mandatory outcome capture, note logging & audit closure',
      note: 'Closing the loop from observation to confirmed human action.'
    },
    {
      capability: 'Accessible Two-Way WhatsApp Messaging',
      spreadsheets: 'Unstructured personal chats',
      reminderApps: 'Proprietary smartphone app required',
      sosButtons: 'Hardware SIM card only',
      remoteDashboards: 'Proprietary portal or email/SMS alerts',
      sahaara: 'Planned & Tested: Official Meta WhatsApp Cloud API webhooks',
      note: 'Zero app installation required for older adults or family members.'
    },
    {
      capability: 'Immutable Cryptographic Audit Trail',
      spreadsheets: 'Easily overwritten or deleted',
      reminderApps: 'None',
      sosButtons: 'Basic call timestamp logs',
      remoteDashboards: 'Basic database logs',
      sahaara: 'Core Feature: PostgreSQL RLS append-only state transition history',
      note: 'Cryptographically preserves data provenance and coordinator accountability.'
    },
    {
      capability: 'Transparent Synthetic Evaluation',
      spreadsheets: 'Not evaluated',
      reminderApps: 'Marketing claims without code benchmarks',
      sosButtons: 'Hardware reliability tests only',
      remoteDashboards: 'Commercial benchmarks without reproducible code',
      sahaara: 'Core Feature: 200 synthetic seniors over 90 days with public metrics',
      note: 'Evaluated against a rules-only baseline with explicit limitations disclosed.'
    }
  ];

  return (
    <div className="w-full overflow-x-auto bg-[#0f172a] border border-slate-800 rounded-2xl shadow-xl">
      <table className="w-full text-left border-collapse text-xs">
        <thead>
          <tr className="border-b border-slate-800 bg-[#131d33] text-slate-300">
            <th className="p-4 sm:p-5 font-bold uppercase tracking-wider text-[11px] min-w-[200px]">
              Platform Capability
            </th>
            <th className="p-4 font-semibold text-slate-400 min-w-[150px]">
              Manual Spreadsheets & Calls
            </th>
            <th className="p-4 font-semibold text-slate-400 min-w-[150px]">
              Standalone Reminder Apps
            </th>
            <th className="p-4 font-semibold text-slate-400 min-w-[150px]">
              SOS & Panic Buttons
            </th>
            <th className="p-4 font-semibold text-slate-400 min-w-[170px]">
              Remote Monitoring Dashboards
            </th>
            <th className="p-4 font-bold text-teal-300 bg-teal-950/40 border-l border-r border-teal-500/30 min-w-[220px]">
              Sahaara Integrated Platform
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800/80">
          {rows.map((row, idx) => (
            <tr
              key={idx}
              className="hover:bg-slate-900/50 transition-colors"
            >
              <td className="p-4 sm:p-5 font-semibold text-slate-200">
                <div>{row.capability}</div>
                <div className="text-[11px] text-slate-500 font-normal mt-0.5">{row.note}</div>
              </td>
              <td className="p-4 text-slate-400">{row.spreadsheets}</td>
              <td className="p-4 text-slate-400">{row.reminderApps}</td>
              <td className="p-4 text-slate-400">{row.sosButtons}</td>
              <td className="p-4 text-slate-400">{row.remoteDashboards}</td>
              <td className="p-4 font-semibold text-teal-200 bg-teal-950/20 border-l border-r border-teal-500/30">
                {row.sahaara}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="p-4 border-t border-slate-800 bg-slate-900/60 text-[11px] text-slate-400">
        <strong>Fair Comparison Note:</strong> Existing care solutions vary by provider. We do not claim competitors lack features unless verified; our differentiator is the cohesive coordinator-first integration from multi-signal observation to completed follow-up.
      </div>
    </div>
  );
};
