import React from 'react';
import {
  Eye,
  Brain,
  Search,
  FileText,
  UserCheck,
  CheckCircle2
} from 'lucide-react';

interface WorkflowStepsProps {
  mode?: 'six-step' | 'ten-step';
}

export const WorkflowSteps: React.FC<WorkflowStepsProps> = ({ mode = 'six-step' }) => {
  const sixSteps = [
    {
      num: '01',
      title: 'Collect Observations',
      desc: 'Ingest daily step counts, sleep duration, medication reports, check-ins, and family WhatsApp texts.',
      icon: Eye
    },
    {
      num: '02',
      title: 'Build Personal Context',
      desc: 'Compute expected 14–30 day baseline distributions instead of applying one-size-fits-all population cutoffs.',
      icon: Brain
    },
    {
      num: '03',
      title: 'Identify Meaningful Changes',
      desc: 'Correlate multiple subtle deviations and evaluate deterministic safety rules for explicit hazards.',
      icon: Search
    },
    {
      num: '04',
      title: 'Explain the Evidence',
      desc: 'Render evidence cards highlighting what changed, baseline reference, and missing data in plain language.',
      icon: FileText
    },
    {
      num: '05',
      title: 'Review & Act',
      desc: 'Care coordinator reviews queue, acknowledges case, and places proactive verification check-in call.',
      icon: UserCheck
    },
    {
      num: '06',
      title: 'Track the Outcome',
      desc: 'Document call notes, agreed follow-up tasks, case resolution, and record immutable audit history.',
      icon: CheckCircle2
    }
  ];

  const tenSteps = [
    {
      step: 1,
      title: 'Enrolment & Authorisation',
      actor: 'Coordinator & Family',
      desc: 'Coordinator registers senior profile, verifies living arrangement, records explicit digital consent, links authorised family WhatsApp contacts, and initializes baseline profile.'
    },
    {
      step: 2,
      title: 'Observation Ingestion',
      actor: 'Passive Sensors & Chat',
      desc: 'Observations arrive via REST API `/api/observations`, Meta WhatsApp webhook, or coordinator entry. Supports steps, sleep, check-in answers, and medication confirmations.'
    },
    {
      step: 3,
      title: 'Data Quality & Idempotency',
      actor: 'System Ingestion Worker',
      desc: 'Validates timestamps, verifies HMAC webhook signatures, deduplicates repeat events, marks stale streams, and logs raw payload hashes.'
    },
    {
      step: 4,
      title: 'Personal Baseline Engine',
      actor: 'Statistical Worker',
      desc: 'Calculates rolling 14–30 day medians and interquartile ranges (IQR). Categorises baseline as Provisional (<14d), Medium (14–29d), or High Confidence (30d+).'
    },
    {
      step: 5,
      title: 'Multi-Signal Change Detection',
      actor: 'Rules + Anomaly Engine',
      desc: 'Evaluates deterministic safety rules (SOS, direct fall mentions, severe unresponsiveness) and correlates multi-signal behavioral drift over 72-hour sliding windows.'
    },
    {
      step: 6,
      title: 'Evidence Aggregation & Grounding',
      actor: 'Evidence Builder',
      desc: 'Associates all contributing observations, historical baseline bands, and missing signals into a single structured Explainable Evidence Card.'
    },
    {
      step: 7,
      title: 'Queue Prioritisation & SLA',
      actor: 'Triage Engine',
      desc: 'Ranks cases in the coordinator triage queue by SLA urgency (Critical <15m, High <45m, Medium <4h, Low <24h). Suppresses repeat duplicate alerts.'
    },
    {
      step: 8,
      title: 'Human Review & Ownership',
      actor: 'Care Coordinator',
      desc: 'Coordinator examines evidence card, understands the exact reasons for the alert, and clicks "Acknowledge" to claim ownership and halt the escalation SLA timer.'
    },
    {
      step: 9,
      title: 'Follow-Up Interaction',
      actor: 'Coordinator & Senior',
      desc: 'Coordinator places a phone call to senior or authorised relative using the suggested verification questions, assesses situation, and coordinates local support if required.'
    },
    {
      step: 10,
      title: 'Outcome Closure & Audit Sealing',
      actor: 'Coordinator & Audit Log',
      desc: 'Coordinator logs call notes, tags outcome (e.g. Resolved with Family, False Alarm, Escalated), and seals case. Append-only audit record permanently preserved.'
    }
  ];

  if (mode === 'six-step') {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sixSteps.map((step) => {
          const IconComponent = step.icon;
          return (
            <div
              key={step.num}
              className="p-6 rounded-2xl bg-[#17231F] border border-[#273830] hover:border-[#385145] transition-colors group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[#A9C2AE] bg-[#202B26] border border-[#2D3E35] px-2 py-0.5 rounded">
                    {step.num}
                  </span>
                  <IconComponent className="w-4 h-4 text-[#72D8B0]" />
                </div>
                <h4 className="font-bold text-sm text-[#F4F2EA] mb-2">{step.title}</h4>
                <p className="text-xs text-[#95A49B] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tenSteps.map((s) => (
        <div
          key={s.step}
          className="p-5 rounded-xl bg-[#17231F] border border-[#273830] flex flex-col sm:flex-row items-start sm:items-center gap-4 hover:border-[#385145] transition-colors"
        >
          <div className="w-8 h-8 rounded-lg bg-[#202B26] border border-[#2D3E35] text-[#72D8B0] font-mono font-bold text-xs flex items-center justify-center shrink-0">
            {s.step < 10 ? `0${s.step}` : s.step}
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <h4 className="font-bold text-sm text-[#F4F2EA]">{s.title}</h4>
              <span className="text-[11px] font-mono px-2 py-0.2 rounded bg-[#202B26] text-[#A9C2AE] border border-[#2D3E35]">
                {s.actor}
              </span>
            </div>
            <p className="text-xs text-[#95A49B] leading-relaxed">{s.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
