import { FaqItem } from '@/types';

export const faqList: FaqItem[] = [
  // GENERAL
  {
    id: 'faq-gen-1',
    category: 'General',
    question: 'What exactly is Sahaara?',
    answer: 'Sahaara is a coordinator-first wellbeing intelligence platform designed to help monitor older adults living at home. It identifies meaningful changes in everyday routines by combining multiple observation streams (activity, sleep, check-ins, medication logs, and family messages), explains the underlying evidence, and guides human care coordinators through structured follow-up. It is a decision-support system, not a medical diagnostic tool.',
    tags: ['Overview', 'Definition', 'Core Concept']
  },
  {
    id: 'faq-gen-2',
    category: 'General',
    question: 'Who is Sahaara designed for?',
    answer: 'Sahaara is designed for four primary groups: 1) Care coordinators who need a clear, prioritised triage queue to manage multiple seniors effectively; 2) Older adults living independently who need simple, non-intrusive check-ins without complicated new apps; 3) Family members seeking peace of mind through permitted updates and a direct reporting channel; and 4) Elder-care organisations (such as Samarth Life Management) seeking operational consistency and auditable follow-up.',
    tags: ['Audience', 'Users', 'Stakeholders']
  },
  {
    id: 'faq-gen-3',
    category: 'General',
    question: 'What problem does it solve?',
    answer: 'Older adults often experience subtle, gradual declines across activity, appetite, sleep, and mood before an acute emergency occurs. In existing workflows, these signals are fragmented across family WhatsApp chats, phone logs, smartwatches, and coordinator notes. Because signals arrive in isolation, coordinators suffer from alert fatigue and missed trends. Sahaara synthesises these fragmented signals into personal baselines and explainable care actions.',
    tags: ['Problem Space', 'Value Proposition']
  },
  {
    id: 'faq-gen-4',
    category: 'General',
    question: 'Is Sahaara a healthcare or medical diagnostic application?',
    answer: 'No. Sahaara is strictly a decision-support and care-coordination platform. It does not diagnose medical conditions, recommend drug therapies, interpret clinical lab tests, or replace certified healthcare professionals. Any explicit medical emergencies must be handled immediately through established emergency services.',
    tags: ['Safety', 'Non-Diagnostic', 'Disclaimer']
  },
  {
    id: 'faq-gen-5',
    category: 'General',
    question: 'Does Sahaara replace a physical caregiver or family member?',
    answer: 'Not at all. Sahaara is designed to empower human caregivers and coordinators, not replace them. By automating the tracking of routine baselines and highlighting meaningful deviations, it gives human coordinators the exact context they need to make compassionate, timely, and effective check-in calls.',
    tags: ['Caregiving', 'Human-in-the-Loop']
  },
  {
    id: 'faq-gen-6',
    category: 'General',
    question: 'Is Sahaara only for seniors who live alone?',
    answer: 'While older adults living alone benefit most from passive monitoring and check-ins, Sahaara is also valuable for seniors living with working adult children or daytime attendants. In shared homes, gradual changes during working hours often go unnoticed by busy family members until an acute issue develops.',
    tags: ['Living Arrangements', 'Target Demographic']
  },
  {
    id: 'faq-gen-7',
    category: 'General',
    question: 'Can a family use Sahaara without a professional coordinator?',
    answer: 'The current architectural priority is coordinator-first, designed for care organisations managing multiple seniors. While an independent family-led mode is technically feasible and on our future roadmap, human coordinator oversight provides essential triage discipline, reduces familial panic, and prevents false-alarm burnout.',
    tags: ['Coordinator Model', 'Family Tier']
  },

  // PRODUCT
  {
    id: 'faq-prod-1',
    category: 'Product',
    question: 'How does Sahaara recognise a change in routine?',
    answer: 'Sahaara establishes a personal baseline for each senior across available metrics (e.g. typical daily steps, usual wake time, medication confirmation time, and check-in response delay). When new observations arrive, the system computes the statistical deviation from that specific senior’s 14-to-30-day baseline rather than comparing against arbitrary one-size-fits-all medical thresholds.',
    tags: ['Personal Baseline', 'Detection Logic']
  },
  {
    id: 'faq-prod-2',
    category: 'Product',
    question: 'What is a personal baseline and how is it built?',
    answer: 'A personal baseline is a statistical representation of an individual’s typical daily routines. It begins with self-reported habits during onboarding (provisional baseline) and refines over 14 to 30 days using rolling medians and interquartile ranges (IQR). It accounts for natural day-to-day fluctuations, day-of-week patterns, and gradual seasonal drift.',
    tags: ['Baseline Engine', 'Statistics']
  },
  {
    id: 'faq-prod-3',
    category: 'Product',
    question: 'Why combine multiple observations instead of relying on a single sensor?',
    answer: 'Individual sensors are noisy and prone to false alarms. A low step count could simply mean the senior forgot their wristband or stayed in bed watching cricket. But if low step counts coincide with disrupted sleep, a missed medication dose, and a family member reporting loss of appetite, the composite confidence of a real problem is exponentially higher.',
    tags: ['Multi-Signal', 'Sensor Fusion', 'Context']
  },
  {
    id: 'faq-prod-4',
    category: 'Product',
    question: 'What happens when data is missing or a sensor goes offline?',
    answer: 'Sahaara explicitly tracks data freshness and coverage. Missing observations are never filled with assumed healthy defaults. The system marks missing streams with visible amber indicators, adjusts the alert confidence score, and if silence exceeds a configured threshold, raises a specific "Data Quality / Check Connection" task rather than an acute medical alert.',
    tags: ['Missing Data', 'Data Quality', 'Robustness']
  },
  {
    id: 'faq-prod-5',
    category: 'Product',
    question: 'What happens when different sources disagree?',
    answer: 'Source discrepancies (such as a senior texting "feeling great" while a visiting nurse logs dizziness and low blood pressure) are flagged explicitly as "Conflicting Evidence" on the evidence card. The platform prioritises verified objective measurements over subjective pleasantries while alerting the coordinator to investigate the discrepancy gently.',
    tags: ['Discrepancy', 'Reconciliation', 'Evidence']
  },
  {
    id: 'faq-prod-6',
    category: 'Product',
    question: 'How are alerts prioritised in the coordinator queue?',
    answer: 'Alerts are categorized into four transparent tiers: Critical (explicit emergency reports, SOS events, immediate SLA <15 mins), High (multi-signal acute deviations, SLA <45 mins), Medium (unanswered check-ins, single noticeable deviations, SLA <4 hours), and Low (routine schedule adjustments, informational updates). Deterministic safety rules always take precedence over statistical anomaly scores.',
    tags: ['Triage', 'Priority Queue', 'SLA']
  },
  {
    id: 'faq-prod-7',
    category: 'Product',
    question: 'Can coordinators dismiss an alert?',
    answer: 'Yes, but every dismissal requires a documented rationale (e.g., "False Alarm - Senior confirmed family visiting", "Known Device Issue", "Temporary Routine Shift"). Dismissals are permanently recorded in the immutable audit log to maintain full accountability and prevent silent neglect.',
    tags: ['Dismissal', 'Audit Trail', 'Coordinator Control']
  },
  {
    id: 'faq-prod-8',
    category: 'Product',
    question: 'Can follow-up actions and call outcomes be tracked?',
    answer: 'Yes. Every alert is coupled to a structured follow-up workflow. Coordinators record who was contacted (Senior, Son, Daughter, Neighbor), what was discussed, what immediate actions were taken, and when the case is considered resolved. Unclosed cases remain visible on the supervisor dashboard.',
    tags: ['Follow-up', 'Case Management', 'Accountability']
  },
  {
    id: 'faq-prod-9',
    category: 'Product',
    question: 'Can records be corrected or deleted if an error was made?',
    answer: 'Under our data governance framework, erroneous observations can be amended or annotated with corrective notes by authorised coordinators, but the original raw event and amendment history are preserved in the immutable audit log for clinical and legal defensibility. Seniors and authorized guardians can request deletion in compliance with the DPDP Act 2023.',
    tags: ['Data Correction', 'Compliance', 'Auditability']
  },

  // AI & METHODOLOGY
  {
    id: 'faq-ai-1',
    category: 'AI & Methodology',
    question: 'Does Sahaara use Artificial Intelligence?',
    answer: 'Yes, but in a disciplined, multi-layered architecture. We use AI for: 1) Statistical anomaly detection (Isolation Forest for multi-dimensional behavioral drift); 2) Natural language processing to extract structured candidate observations from Hindi, English, and Hinglish messages; and 3) Assisted summarisation to generate concise human-readable evidence cards. AI does not make autonomous clinical judgments.',
    tags: ['AI Architecture', 'Machine Learning', 'NLP']
  },
  {
    id: 'faq-ai-2',
    category: 'AI & Methodology',
    question: 'Why use deterministic rules as well as anomaly detection?',
    answer: 'Machine learning models are probabilistic and can miss obvious explicit events or hallucinate under out-of-distribution conditions. If someone texts "fell down and cannot stand", a system must never rely on an anomaly score to decide if it is serious. Deterministic rules provide guaranteed, unshakeable safety guardrails, while anomaly detection finds subtle gradual trends.',
    tags: ['Safety Rules', 'Hybrid Architecture', 'Deterministic vs Probabilistic']
  },
  {
    id: 'faq-ai-3',
    category: 'AI & Methodology',
    question: 'Does the AI diagnose illnesses or conditions?',
    answer: 'No. The AI never outputs diagnoses such as "Alzheimer\'s", "Pneumonia", or "Heart Failure". Instead, it outputs verifiable observational statements such as: "Step count decreased by 62% over 3 days, accompanied by 4 nocturnal sleep disruptions and an unconfirmed afternoon medication dose."',
    tags: ['Non-Diagnostic', 'Ethical AI', 'Grounding']
  },
  {
    id: 'faq-ai-4',
    category: 'AI & Methodology',
    question: 'How does the system explain an alert to the coordinator?',
    answer: 'Every alert is accompanied by an Explainable Evidence Card showing: 1) What exact metrics changed; 2) Which specific observations contributed; 3) The historical baseline reference; 4) Timestamps and source attribution; 5) Missing or stale data points; and 6) Recommended verification questions for the coordinator’s check-in call.',
    tags: ['Explainability', 'XAI', 'Transparency']
  },
  {
    id: 'faq-ai-5',
    category: 'AI & Methodology',
    question: 'Can a Large Language Model (LLM) invent supporting evidence?',
    answer: 'No. We strictly forbid generative models from creating or modifying primary observation records. Ingestion works via structured entity extraction bound to deterministic schemas. When an LLM is used to summarize evidence, it is constrained strictly to the verified database records using strict grounded retrieval; any hallucinated fact fails schema validation.',
    tags: ['Hallucination Prevention', 'Grounded AI']
  },
  {
    id: 'faq-ai-6',
    category: 'AI & Methodology',
    question: 'How are incorrect natural-language extractions corrected?',
    answer: 'All candidate observations extracted from conversational messages (WhatsApp or voice) are displayed with extraction confidence scores. Consequential or ambiguous observations are flagged for human coordinator confirmation before they are permanently committed to the senior’s baseline profile.',
    tags: ['Human Review', 'NLP Verification']
  },
  {
    id: 'faq-ai-7',
    category: 'AI & Methodology',
    question: 'Does an anomaly score mean a specific medical probability?',
    answer: 'No. An anomaly score (e.g. z = 2.8 or Isolation Forest score = -0.42) indicates mathematical rarity relative to that individual’s historical routine. It does not mean "a 78% probability of disease". We explicitly train coordinators to treat scores as attention-prioritisation hints, not medical probabilities.',
    tags: ['Statistical Reality', 'Anomaly Scores']
  },
  {
    id: 'faq-ai-8',
    category: 'AI & Methodology',
    question: 'How do you evaluate accuracy without real patient harm?',
    answer: 'We evaluate using a reproducible synthetic benchmark consisting of 200 synthetic senior profiles tracked over 90 simulated days with planted clinical scenarios (gradual frailty, sudden falls, sensor outages, festive noise). We measure Precision (88.4%), Recall (91.2%), False Alerts per senior-day (0.04), and Lead Time (28 hours) against a rules-only baseline.',
    tags: ['Evaluation', 'Synthetic Testing', 'Benchmarks']
  },

  // INTEGRATIONS
  {
    id: 'faq-int-1',
    category: 'Integrations',
    question: 'Does the WhatsApp integration really work or is it a mock?',
    answer: 'Our architecture is built directly on the official Meta WhatsApp Cloud API. In our development environment, we demonstrate webhook signature verification (HMAC SHA-256), telephone whitelist mapping, and outbound message dispatch using Meta developer test numbers. For production deployments, WhatsApp Business verification, approved templates, and recipient opt-in are required.',
    tags: ['WhatsApp Cloud API', 'Meta Integration']
  },
  {
    id: 'faq-int-2',
    category: 'Integrations',
    question: 'Can seniors send regular messages without learning a new interface?',
    answer: 'Yes. Seniors simply send standard WhatsApp messages to the verified care number. They can reply with single digits, simple English words ("Yes", "Taken"), or conversational Hindi ("Haan beta dawai le li"). The system matches incoming messages to their profile using their verified phone number.',
    tags: ['Accessibility', 'Senior UX', 'WhatsApp']
  },
  {
    id: 'faq-int-3',
    category: 'Integrations',
    question: 'Can family members send reports through WhatsApp?',
    answer: 'Yes, provided their phone number is registered in the senior’s `AuthorisedContact` table with reporting privileges. Unregistered numbers that text the platform receive an automated message informing them to contact the care coordinator for authorization.',
    tags: ['Family Access', 'Security', 'Authorization']
  },
  {
    id: 'faq-int-4',
    category: 'Integrations',
    question: 'Is WhatsApp messaging completely free?',
    answer: 'No. While Meta provides sandbox test messages for developers, production business messaging is subject to Meta’s conversation-based pricing (Service vs Utility conversation rates) and 24-hour customer service window restrictions. We disclose these operational costs transparently.',
    tags: ['Costs', 'Meta Pricing', 'Commercial Feasibility']
  },
  {
    id: 'faq-int-5',
    category: 'Integrations',
    question: 'Can Sahaara make automated telephone calls?',
    answer: 'Automated telephony (IVR check-in calls or emergency outbound alerts) is a Planned capability that requires external integration with telecom providers (such as Exotel or Twilio). In our current implementation, coordinators place calls via standard telephony and log the outcomes directly into the portal.',
    tags: ['Telephony', 'IVR', 'Roadmap']
  },
  {
    id: 'faq-int-6',
    category: 'Integrations',
    question: 'Does Sahaara support Hindi and English voice notes?',
    answer: 'Voice note transcription and parsing is currently in Experimental status. When an audio note arrives via WhatsApp, it is processed via speech-to-text models with multilingual Indian English and Hindi support. Because speech recognition can misinterpret colloquial terms or background noise, transcribed candidate notes require coordinator confirmation.',
    tags: ['Voice Notes', 'Hindi STT', 'Experimental']
  },
  {
    id: 'faq-int-7',
    category: 'Integrations',
    question: 'Does Sahaara work with every smartwatch or fitness band?',
    answer: 'No. Sahaara provides an open REST ingestion API (`/api/observations`). Any device that can sync data to a cloud API (e.g. Google Health Connect, Apple HealthKit, or Bluetooth gateway hubs) can ingest data. We do not claim universal proprietary wearable compatibility.',
    tags: ['Hardware Compatibility', 'REST API']
  },
  {
    id: 'faq-int-8',
    category: 'Integrations',
    question: 'What happens when a third-party API or network is unavailable?',
    answer: 'The system implements idempotent event storage, retries with exponential backoff, and gateway caching. When third-party connections drop, observations are queued locally and backfilled once connectivity restores, with temporal re-indexing to prevent false spike alerts.',
    tags: ['Resilience', 'Offline Handling', 'Fault Tolerance']
  },

  // PRIVACY & SAFETY
  {
    id: 'faq-priv-1',
    category: 'Privacy & Safety',
    question: 'Who can see a senior’s private information?',
    answer: 'Access is governed by strict Role-Based Access Control (RBAC) and database Row-Level Security (RLS). Assigned care coordinators can view full operational profiles; family members can only view summaries for seniors they are explicitly authorised to support; and technical evaluators only interact with synthetic demo data.',
    tags: ['Access Control', 'RBAC', 'RLS']
  },
  {
    id: 'faq-priv-2',
    category: 'Privacy & Safety',
    question: 'How are family members authorised?',
    answer: 'During senior enrolment, the senior (or their designated legal guardian) signs an explicit consent record listing authorized family members, their verified phone numbers, and their permitted access level (e.g., General Updates vs Emergency Escalation).',
    tags: ['Consent', 'Onboarding', 'Authorization']
  },
  {
    id: 'faq-priv-3',
    category: 'Privacy & Safety',
    question: 'Can a family member see every clinical note or coordinator log?',
    answer: 'No. Coordinators can designate notes as "Internal Clinical / Operational" or "Shared with Family". Sensitive coordinator observations, unverified hypotheses, or administrative notes remain restricted to the care organisation.',
    tags: ['Note Visibility', 'Privacy']
  },
  {
    id: 'faq-priv-4',
    category: 'Privacy & Safety',
    question: 'What happens during a life-threatening emergency?',
    answer: 'If an explicit emergency occurs (e.g. SOS press, fall detected, chest pain mentioned), the system activates its Urgent Response Policy: the alert is tagged Critical with an immediate <15 min SLA, simultaneous SMS/call notifications are dispatched to on-call coordinators and registered family leads, and immediate emergency contact numbers are surfaced prominently.',
    tags: ['Emergency Protocol', 'Critical SLA']
  },
  {
    id: 'faq-priv-5',
    category: 'Privacy & Safety',
    question: 'How does Sahaara align with India’s Digital Personal Data Protection Act (DPDP 2023)?',
    answer: 'Sahaara is architected around DPDP 2023 core principles: 1) Purpose specification and data minimisation (we only collect observations necessary for care coordination); 2) Verifiable digital consent tracking; 3) Right to correction and erasure; 4) Strict server-side encryption for secrets; and 5) Immutable audit logs for traceability. Formal legal audit is required prior to commercial launch.',
    tags: ['DPDP Act 2023', 'Data Protection', 'Compliance']
  },
  {
    id: 'faq-priv-6',
    category: 'Privacy & Safety',
    question: 'Is the platform clinically validated in hospital trials?',
    answer: 'No. Sahaara has been validated on reproducible synthetic datasets and algorithmic simulation suites for Deviathon 2.0. We make zero claims of hospital clinical trials, CE mark, or FDA clearance. Real-world prospective validation is an essential future milestone.',
    tags: ['Clinical Status', 'Truthfulness', 'Honest Claims']
  },
  {
    id: 'faq-priv-7',
    category: 'Privacy & Safety',
    question: 'Can Sahaara guarantee 100% early detection of all health events?',
    answer: 'No technology can guarantee detection of every health event. If a senior suffers a sudden acute event without wearing a device or sending a report, passive algorithms cannot predict it. Sahaara is an early-warning support tool that reduces missed signals, not an infallible shield.',
    tags: ['Limitations', 'Honesty', 'Safety']
  },

  // TECHNICAL ARCHITECTURE
  {
    id: 'faq-tech-1',
    category: 'Technical Architecture',
    question: 'What is the full technology stack?',
    answer: 'The application is built on Next.js 16 (App Router, Turbopack, React 19, TypeScript), styled with Tailwind CSS v4, Lucide React icons, and deployed on Vercel. Application data, authentication, and Row-Level Security are architected for Supabase (PostgreSQL), with Meta WhatsApp Cloud API for bidirectional messaging.',
    tags: ['Tech Stack', 'Next.js', 'PostgreSQL']
  },
  {
    id: 'faq-tech-2',
    category: 'Technical Architecture',
    question: 'Why Next.js and Supabase instead of a fragmented microservice architecture?',
    answer: 'For a 48-hour hackathon and a lean production deployment, Next.js provides full-stack synergy: server-side API routes protect confidential API keys, server components maximize render performance, and Supabase PostgreSQL delivers enterprise-grade Row-Level Security, relational integrity, and cryptographic auditability without complex microservice overhead.',
    tags: ['Architecture Rationale', 'Simplicity', 'Reliability']
  },
  {
    id: 'faq-tech-3',
    category: 'Technical Architecture',
    question: 'Where is the application hosted and deployed?',
    answer: 'The web application is hosted on Vercel’s global edge network, with automated CI/CD builds, zero server maintenance, and strict environment-variable isolation. Database logic is targeted for managed Supabase PostgreSQL clusters with automated backups.',
    tags: ['Deployment', 'Vercel', 'Hosting']
  },
  {
    id: 'faq-tech-4',
    category: 'Technical Architecture',
    question: 'How is the database structured?',
    answer: 'The relational schema contains 13 domain tables: `senior_profiles`, `authorised_contacts`, `consent_records`, `observations`, `baseline_snapshots`, `alerts`, `evidence_items`, `care_cases`, `follow_up_actions`, `messages`, `integration_events`, `audit_events`, and `evaluation_runs`. Foreign keys ensure referential integrity.',
    tags: ['Database Schema', 'PostgreSQL', 'Tables']
  },
  {
    id: 'faq-tech-5',
    category: 'Technical Architecture',
    question: 'How does the risk engine compute priority scores?',
    answer: 'Priority is computed hierarchically: 1) Deterministic rules evaluate critical keywords and SOS triggers—if matched, priority is instantly Critical; 2) Multi-signal correlation computes composite z-scores across active signals—if z > 2.5 across multiple channels, priority is High; 3) Single-signal deviations or overdue timers assign Medium; 4) Normal bounds assign Low.',
    tags: ['Algorithm', 'Risk Engine', 'Scoring']
  },
  {
    id: 'faq-tech-6',
    category: 'Technical Architecture',
    question: 'How are incoming webhooks secured against spoofing and replay attacks?',
    answer: 'All inbound Meta webhooks are authenticated by computing HMAC SHA-256 signatures of the raw payload using the pre-shared `META_APP_SECRET` and comparing against the `X-Hub-Signature-256` header. Event IDs are cached in an idempotency table to eliminate replay processing.',
    tags: ['Security', 'HMAC', 'Webhook Verification']
  },
  {
    id: 'faq-tech-7',
    category: 'Technical Architecture',
    question: 'What does the synthetic evaluation prove and what does it not prove?',
    answer: 'It proves that our code correctly normalises diverse observation streams, computes personal rolling baselines, reliably triggers deterministic safety rules, groups compound multi-signal events, suppresses duplicates, and enforces coordinator workflows under controlled conditions. It does not prove clinical efficacy in elderly human populations.',
    tags: ['Synthetic Evaluation', 'Scientific Integrity']
  },
  {
    id: 'faq-tech-8',
    category: 'Technical Architecture',
    question: 'What remains to be built on the future engineering roadmap?',
    answer: 'Planned milestones include: 1) Production Meta WhatsApp Business verification; 2) Telephony IVR gateway integration for automated Hindi check-in calls; 3) Native Google Health Connect and Apple HealthKit integration hubs; and 4) An ethical clinical pilot in partnership with established elder-care providers with full institutional oversight.',
    tags: ['Roadmap', 'Future Engineering', 'Milestones']
  }
];
