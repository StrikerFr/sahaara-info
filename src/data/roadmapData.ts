import { RoadmapItem } from '@/types';

export const roadmapItems: RoadmapItem[] = [
  // IMPLEMENTED
  {
    id: 'road-1',
    title: 'Senior Profile & Enrolment Registry',
    tier: 'Implemented',
    quarter: 'Phase 1 (Complete)',
    description: 'Relational data model for senior profiles, living arrangements, time zones, coordinator assignments, and authorised family contact linking.',
    dependencies: ['Supabase / PostgreSQL Schema', 'Next.js App Router'],
    riskOrConstraint: 'Zero real personal data permitted in public test environments.'
  },
  {
    id: 'road-2',
    title: 'Personal Baseline Calculation Engine',
    tier: 'Implemented',
    quarter: 'Phase 1 (Complete)',
    description: 'Rolling median and IQR baseline calculation per individual across activity, sleep, check-in latency, and medication adherence.',
    dependencies: ['Observation Repository', 'Statistical Windowing Worker'],
    riskOrConstraint: 'Requires minimum 7 days of observations for provisional baseline; 14+ days for standard baseline.'
  },
  {
    id: 'road-3',
    title: 'Deterministic Safety Rule Engine',
    tier: 'Implemented',
    quarter: 'Phase 1 (Complete)',
    description: 'Immediate alert generation for explicit emergency reports, hardware SOS button signals, and critical unresponsiveness intervals.',
    dependencies: ['Rule Declarations', 'Critical Keyword Lexicon'],
    riskOrConstraint: 'Safety critical: Rules must never be muted by statistical model scores.'
  },
  {
    id: 'road-4',
    title: 'Coordinator Triage Queue & Follow-Up Lifecycle',
    tier: 'Implemented',
    quarter: 'Phase 1 (Complete)',
    description: 'Priority-sorted operational queue with SLA countdowns, coordinator assignment, call logging, note capture, and closure tracking.',
    dependencies: ['CareCase State Machine', 'PostgreSQL RLS'],
    riskOrConstraint: 'Requires coordinator discipline to record timely call outcomes.'
  },
  {
    id: 'road-5',
    title: 'Cryptographic Immutable Audit Logging',
    tier: 'Implemented',
    quarter: 'Phase 1 (Complete)',
    description: 'Append-only audit event logging for all system observations, rule evaluations, status changes, and follow-up notes.',
    dependencies: ['PostgreSQL INSERT-only Triggers'],
    riskOrConstraint: 'Storage scaling for large multi-year cohorts requires tiered archival.'
  },

  // TESTED
  {
    id: 'road-6',
    title: 'Synthetic Cohort Benchmark Suite (200 Seniors / 90 Days)',
    tier: 'Implemented',
    quarter: 'Phase 2 (Tested)',
    description: 'Reproducible synthetic evaluation demonstrating precision (88.4%), recall (91.2%), and false alert reduction versus a rules-only baseline.',
    dependencies: ['Synthetic Data Generator Script', 'Test Metric Evaluator'],
    riskOrConstraint: 'Does not constitute clinical trial validation on real human patients.'
  },
  {
    id: 'road-7',
    title: 'Multi-Signal Temporal Event Grouping',
    tier: 'Implemented',
    quarter: 'Phase 2 (Tested)',
    description: 'Correlates distinct observations within 24h/72h windows to generate unified composite evidence cards without duplicative pings.',
    dependencies: ['Temporal Alignment Engine'],
    riskOrConstraint: 'Requires tuning temporal window thresholds to match human behavioral cycles.'
  },

  // EXPERIMENTAL
  {
    id: 'road-8',
    title: 'Multi-Dimensional Isolation Forest Anomaly Detection',
    tier: 'In progress',
    quarter: 'Phase 3 (Active)',
    description: 'Unsupervised anomaly detection evaluating composite behavioral feature vectors to catch non-linear routine drifts.',
    dependencies: ['Python ONNX Runtime or Scikit-learn Worker', 'Feature Extraction Pipeline'],
    riskOrConstraint: 'Unsupervised scores do not indicate clinical etiology; requires human coordinator interpretation.'
  },
  {
    id: 'road-9',
    title: 'Bilingual Hindi-English Natural Language Entity Extraction',
    tier: 'In progress',
    quarter: 'Phase 3 (Active)',
    description: 'Extraction of symptoms, appetite changes, and emotional tone from colloquial family WhatsApp messages and transcribed notes.',
    dependencies: ['NLP Pipeline', 'Prompt Guardrails'],
    riskOrConstraint: 'Ambiguity in colloquial idioms requires mandatory coordinator confirmation.'
  },

  // REQUIRES EXTERNAL SETUP
  {
    id: 'road-10',
    title: 'Production Meta WhatsApp Cloud API Deployment',
    tier: 'Requires external setup',
    quarter: 'Phase 4',
    description: 'Live bidirectional WhatsApp messaging with Meta Business verification, approved HSM templates, and webhook handling.',
    dependencies: ['Meta Developer App Verification', 'Registered Business Phone Number', 'Pre-Approved Message Templates'],
    riskOrConstraint: 'Meta conversation fees apply for production traffic; 24-hour service window limitations.'
  },
  {
    id: 'road-11',
    title: 'Automated Telephony & Voice Check-in IVR Gateway',
    tier: 'Requires external setup',
    quarter: 'Phase 4',
    description: 'Outbound voice call triggers for automated Hindi check-in calls with real-time speech recognition and synthesis.',
    dependencies: ['Telephony Provider (Exotel/Twilio)', 'Real-time Streaming STT/TTS Provider', 'Telecom Regulatory Approvals'],
    riskOrConstraint: 'Telephony per-minute charges; cellular coverage dependencies in rural and semi-urban areas.'
  },

  // PLANNED
  {
    id: 'road-12',
    title: 'Google Health Connect & Apple HealthKit Hubs',
    tier: 'Planned',
    quarter: 'Phase 5',
    description: 'Direct mobile sync connectors allowing family members to link consumer smartwatches with background auto-sync.',
    dependencies: ['Mobile Companion App (React Native/Flutter)', 'Health Connect / HealthKit API Entitlements'],
    riskOrConstraint: 'Requires senior or family member to operate a compatible modern smartphone.'
  },
  {
    id: 'road-13',
    title: 'Coordinator Workload Balancing & Smart Shift Handover',
    tier: 'Planned',
    quarter: 'Phase 5',
    description: 'Automated queue re-allocation based on coordinator capacity, timezone coverage, and active case complexity.',
    dependencies: ['Staff Scheduling Tables', 'Queue Optimization Algorithm'],
    riskOrConstraint: 'Operational integration with care partner human resource workflows.'
  },

  // REQUIRES REAL-WORLD VALIDATION
  {
    id: 'road-14',
    title: 'Prospective Clinical & Usability Pilot with Samarth Life',
    tier: 'Requires real-world validation',
    quarter: 'Phase 6',
    description: 'Supervised real-world observational pilot with consented older adults to measure coordinator workload reduction, usability, and alert precision in live elder care.',
    dependencies: ['Institutional Ethics Review (IEC)', 'Participant Informed Consent', 'Partner Caregiver Training'],
    riskOrConstraint: 'Clinical outcomes, hospitalization reduction, and real-world safety must be empirically evaluated.'
  }
];
