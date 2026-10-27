import { ArchitectureLayer, DomainEntity, ApiDoc } from '@/types';

export const architectureLayers: ArchitectureLayer[] = [
  {
    id: 'layer-1',
    number: 1,
    name: 'Input Normalisation & Ingestion',
    role: 'Standardises heterogenous observations into a uniform canonical schema',
    technologies: ['Next.js Route Handlers', 'Zod Schema Validation', 'ISO 8601 Timestamps'],
    status: 'Implemented',
    description: 'Accepts raw data from pedometers, sleep monitors, check-in buttons, WhatsApp webhooks, and manual coordinator notes. Normalises all records with strict senior ID, observation type, and temporal bounds.',
    inputs: ['Raw JSON payloads', 'WhatsApp webhook messages', 'Manual coordinator forms'],
    outputs: ['Validated CanonicalObservation records', 'Source attribution tags'],
    guarantees: ['Rejects malformed timestamps', 'Rejects negative step counts', 'Preserves raw source payload hash']
  },
  {
    id: 'layer-2',
    number: 2,
    name: 'Data Quality, Freshness & Idempotency',
    role: 'Filters duplicates, evaluates signal staleness, and measures missingness',
    technologies: ['Redis/In-Memory Deduplication', 'Idempotency Keys', 'Temporal Windowing'],
    status: 'Implemented',
    description: 'Ensures system does not process duplicate webhook events. Measures elapsed time since last valid ping per channel and flags missing data explicitly rather than imputing false zeros.',
    inputs: ['CanonicalObservation stream', 'Channel freshness timestamps'],
    outputs: ['Deduplicated observation events', 'ChannelDataFreshness metrics'],
    guarantees: ['Zero duplicate message processing', 'Explicit amber tags on stale channels (>12 hrs)']
  },
  {
    id: 'layer-3',
    number: 3,
    name: 'Personal Baseline Engine',
    role: 'Computes rolling historical normal distributions per individual',
    technologies: ['Rolling Median / IQR', 'Quantile Tracking', 'Drift Compensation'],
    status: 'Implemented',
    description: 'Maintains personal profiles over 14-to-30-day sliding windows. Accounts for individual wake habits, weekend cadence, and natural seasonal variation.',
    inputs: ['14 to 30 days of historical observations per senior'],
    outputs: ['BaselineSnapshot (median, IQR, confidence score, valid dates)'],
    guarantees: ['Labels baselines <14 days as "Provisional"', 'Prevents one-size-fits-all population cutoffs']
  },
  {
    id: 'layer-4',
    number: 4,
    name: 'Deterministic Safety Rules Engine',
    role: 'Evaluates uncompromised safety rules for explicit emergencies',
    technologies: ['Declarative Rule Engine', 'Critical Keyword Matcher', 'Strict SLA Timers'],
    status: 'Implemented',
    description: 'Instantly identifies safety-critical occurrences (SOS button press, direct fall reports, severe keyword detections, prolonged unresponsiveness) with zero machine-learning uncertainty.',
    inputs: ['Recent observations', 'Direct family texts', 'SOS hardware signals'],
    outputs: ['Deterministic Safety Alerts (Priority: Critical/High)'],
    guarantees: ['Rule evaluations execute in <10ms', 'Never bypassed or suppressed by ML scores']
  },
  {
    id: 'layer-5',
    number: 5,
    name: 'Statistical Anomaly Detection',
    role: 'Detects multi-dimensional subtle behavioral drifts',
    technologies: ['Isolation Forest (Scikit-Learn/ONNX Runtime)', 'Feature Scaling', 'SHAP Attributions'],
    status: 'Experimental',
    description: 'Evaluates multi-dimensional daily vectors (mobility drop, sleep fragmentation, check-in latency, report sentiment) to uncover correlated gradual declines that individual rules miss.',
    inputs: ['Multi-dimensional daily feature vectors [dim=6]'],
    outputs: ['Continuous anomaly score [-1.0, 1.0]', 'Top feature deviation importances'],
    guarantees: ['Only operates when baseline confidence is Medium/High', 'Clearly marked Experimental']
  },
  {
    id: 'layer-6',
    number: 6,
    name: 'Evidence Aggregation & Provenance',
    role: 'Gathers all supporting, missing, and conflicting data into an explainable case',
    technologies: ['Relational Graph Linking', 'Evidence Item Builder', 'Discrepancy Resolver'],
    status: 'Implemented',
    description: 'Connects the triggering event with all related observations over the previous 72 hours. Surfaces missing data points and flags conflicts between self-reports and objective logs.',
    inputs: ['Rule outputs', 'Anomaly scores', '72-hour observation context'],
    outputs: ['Structured EvidencePackage with full source links and uncertainty indicators'],
    guarantees: ['Every displayed metric has a clickable source timestamp and provenance reference']
  },
  {
    id: 'layer-7',
    number: 7,
    name: 'Operational Prioritisation & Triage',
    role: 'Sorts alerts into an actionable queue based on clinical urgency and SLA',
    technologies: ['Hierarchical Priority Sorter', 'SLA Countdown Monitor', 'Deduplication Grouper'],
    status: 'Implemented',
    description: 'Prevents coordinator overwhelm by grouping repeating alerts within 12 hours and sorting the triage queue strictly by SLA urgency (Critical <15m, High <45m, Medium <4h, Low <24h).',
    inputs: ['EvidencePackages', 'Coordinator on-call schedules', 'Open case table'],
    outputs: ['Ordered Coordinator Queue with real-time SLA countdowns'],
    guarantees: ['Older unacknowledged critical cases always stay at top of queue']
  },
  {
    id: 'layer-8',
    number: 8,
    name: 'Natural-Language Explanation & Grounding',
    role: 'Generates concise, human-readable briefing for the coordinator',
    technologies: ['Grounded LLM Prompting', 'Schema-Constrained Generation', 'Hallucination Guardrails'],
    status: 'Implemented',
    description: 'Summarises the evidence package into 3 clear coordinator bullet points: what changed, why it matters, and recommended check-in questions. Constrained strictly to verified database facts.',
    inputs: ['Structured EvidencePackage (JSON)'],
    outputs: ['Grounded Explanation Cards with recommended verification questions'],
    guarantees: ['Zero generative invention of unrecorded facts', 'No diagnostic conclusions allowed']
  },
  {
    id: 'layer-9',
    number: 9,
    name: 'Human Review, Action & Closed-Loop Follow-up',
    role: 'Empowers coordinator to acknowledge, assign, contact, and document resolution',
    technologies: ['PostgreSQL Transactions', 'Audit Log Triggers', 'State Machine'],
    status: 'Implemented',
    description: 'The definitive human step. Coordinator claims case, places check-in call, records call notes, tags outcome, and resolves or escalates. Persists complete audit record.',
    inputs: ['Coordinator actions', 'Call notes', 'Resolution codes'],
    outputs: ['Closed CareCase', 'Recorded FollowUpAction', 'Immutable AuditEvent'],
    guarantees: ['Mandatory outcome note required prior to case closure']
  }
];

export const domainEntities: DomainEntity[] = [
  {
    name: 'SeniorProfile',
    table: 'senior_profiles',
    purpose: 'Stores administrative identity, living arrangement, language, and primary coordinator assignment.',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Unique identifier for senior' },
      { name: 'full_name', type: 'VARCHAR(255)', required: true, description: 'Legal name of senior' },
      { name: 'date_of_birth', type: 'DATE', required: true, description: 'Date of birth for age calculation' },
      { name: 'living_arrangement', type: 'VARCHAR(100)', required: true, description: 'Living alone, with spouse, etc.' },
      { name: 'primary_language', type: 'VARCHAR(50)', required: true, description: 'English, Hindi, Hinglish' },
      { name: 'assigned_coordinator_id', type: 'UUID (FK)', required: false, description: 'Assigned care coordinator' },
      { name: 'is_active', type: 'BOOLEAN', required: true, description: 'Active monitoring toggle' }
    ],
    relationships: ['Has many AuthorisedContacts', 'Has many Observations', 'Has many Alerts'],
    securityPolicy: 'RLS: Only assigned coordinator and senior supervisor can read/update.',
    retentionPolicy: 'Retained for active care subscription duration + 3 years.'
  },
  {
    name: 'AuthorisedContact',
    table: 'authorised_contacts',
    purpose: 'Stores verified family members and neighbors authorised to report or receive updates via WhatsApp.',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Contact unique identifier' },
      { name: 'senior_id', type: 'UUID (FK)', required: true, description: 'Target senior profile' },
      { name: 'full_name', type: 'VARCHAR(255)', required: true, description: 'Contact name' },
      { name: 'relationship', type: 'VARCHAR(100)', required: true, description: 'Son, Daughter, Neighbor, Doctor' },
      { name: 'phone_e164', type: 'VARCHAR(20)', required: true, description: 'Normalized E.164 phone number' },
      { name: 'is_emergency_contact', type: 'BOOLEAN', required: true, description: 'Primary escalation recipient' },
      { name: 'can_submit_reports', type: 'BOOLEAN', required: true, description: 'Permitted to text WhatsApp bot' }
    ],
    relationships: ['Belongs to SeniorProfile', 'Has many Messages'],
    securityPolicy: 'Strict phone index lookup; server-side only.',
    retentionPolicy: 'Deleted upon family request or profile closure.'
  },
  {
    name: 'ConsentRecord',
    table: 'consent_records',
    purpose: 'Verifiable legal and privacy consent for data collection and communications.',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Consent record identifier' },
      { name: 'senior_id', type: 'UUID (FK)', required: true, description: 'Target senior profile' },
      { name: 'consent_version', type: 'VARCHAR(20)', required: true, description: 'Version tag of consent policy' },
      { name: 'granted_by', type: 'VARCHAR(255)', required: true, description: 'Name of signee (senior or guardian)' },
      { name: 'scope_monitoring', type: 'BOOLEAN', required: true, description: 'Permits passive observation ingest' },
      { name: 'scope_whatsapp', type: 'BOOLEAN', required: true, description: 'Permits WhatsApp messaging' },
      { name: 'timestamp', type: 'TIMESTAMPTZ', required: true, description: 'Exact signing timestamp' }
    ],
    relationships: ['Belongs to SeniorProfile'],
    securityPolicy: 'Append-only. Cannot be deleted without formal legal purge.',
    retentionPolicy: 'Retained 5 years past service termination.'
  },
  {
    name: 'Observation',
    table: 'observations',
    purpose: 'Canonical time-series record of passive sensory, self-reported, or caregiver-entered facts.',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Observation identifier' },
      { name: 'senior_id', type: 'UUID (FK)', required: true, description: 'Associated senior' },
      { name: 'observation_type', type: 'VARCHAR(50)', required: true, description: 'activity, sleep, checkin, med, report' },
      { name: 'recorded_at', type: 'TIMESTAMPTZ', required: true, description: 'Actual event occurrence timestamp' },
      { name: 'source_channel', type: 'VARCHAR(50)', required: true, description: 'pedometer, whatsapp, portal, phone' },
      { name: 'metric_value', type: 'NUMERIC', required: false, description: 'Numeric reading (e.g. step count)' },
      { name: 'payload_json', type: 'JSONB', required: true, description: 'Structured attributes and notes' }
    ],
    relationships: ['Belongs to SeniorProfile', 'Linked to EvidenceItems'],
    securityPolicy: 'Encrypted at rest. Coordinator read-only access.',
    retentionPolicy: '90-day hot storage; archived to compressed analytical cold store.'
  },
  {
    name: 'BaselineSnapshot',
    table: 'baseline_snapshots',
    purpose: 'Historical rolling norm distributions computed per senior.',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Snapshot identifier' },
      { name: 'senior_id', type: 'UUID (FK)', required: true, description: 'Associated senior' },
      { name: 'computed_at', type: 'TIMESTAMPTZ', required: true, description: 'Calculation timestamp' },
      { name: 'window_days', type: 'INT', required: true, description: 'Observation window (14, 30)' },
      { name: 'confidence_tier', type: 'VARCHAR(20)', required: true, description: 'Provisional, Medium, High' },
      { name: 'metrics_summary', type: 'JSONB', required: true, description: 'Median and IQR per signal type' }
    ],
    relationships: ['Belongs to SeniorProfile'],
    securityPolicy: 'Internal system calculation only.',
    retentionPolicy: 'Retained 365 days for historical trajectory comparison.'
  },
  {
    name: 'Alert',
    table: 'alerts',
    purpose: 'System-generated notification indicating meaningful routine change or safety hazard.',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Alert identifier' },
      { name: 'senior_id', type: 'UUID (FK)', required: true, description: 'Associated senior' },
      { name: 'priority', type: 'VARCHAR(20)', required: true, description: 'Low, Medium, High, Critical' },
      { name: 'title', type: 'VARCHAR(255)', required: true, description: 'Concise summary of concern' },
      { name: 'engine_source', type: 'VARCHAR(50)', required: true, description: 'DeterministicRule, IsolationForest, MultiSignal' },
      { name: 'rule_or_model_id', type: 'VARCHAR(100)', required: true, description: 'Identifier of logic evaluated' },
      { name: 'status', type: 'VARCHAR(30)', required: true, description: 'New, Acknowledged, InProgress, Resolved, Dismissed' },
      { name: 'sla_due_at', type: 'TIMESTAMPTZ', required: true, description: 'Escalation deadline timestamp' }
    ],
    relationships: ['Belongs to SeniorProfile', 'Has many EvidenceItems', 'Has one CareCase'],
    securityPolicy: 'Coordinators can view and update status; immutable creation.',
    retentionPolicy: 'Retained indefinitely as clinical audit record.'
  },
  {
    name: 'CareCase',
    table: 'care_cases',
    purpose: 'Operational container managing the human resolution lifecycle of an alert.',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Case identifier' },
      { name: 'alert_id', type: 'UUID (FK)', required: true, description: 'Parent alert' },
      { name: 'senior_id', type: 'UUID (FK)', required: true, description: 'Associated senior' },
      { name: 'assigned_coordinator_id', type: 'UUID (FK)', required: false, description: 'Responsible owner' },
      { name: 'case_status', type: 'VARCHAR(30)', required: true, description: 'Open, InReview, Escalated, Closed' },
      { name: 'opened_at', type: 'TIMESTAMPTZ', required: true, description: 'Case creation time' },
      { name: 'closed_at', type: 'TIMESTAMPTZ', required: false, description: 'Case resolution time' }
    ],
    relationships: ['Belongs to Alert', 'Has many FollowUpActions'],
    securityPolicy: 'Coordinator write access; audited updates.',
    retentionPolicy: 'Permanent operational record.'
  },
  {
    name: 'FollowUpAction',
    table: 'follow_up_actions',
    purpose: 'Documented human actions taken by coordinator (call, family update, escalation).',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Action identifier' },
      { name: 'case_id', type: 'UUID (FK)', required: true, description: 'Associated CareCase' },
      { name: 'coordinator_id', type: 'UUID (FK)', required: true, description: 'Authoring coordinator' },
      { name: 'action_type', type: 'VARCHAR(50)', required: true, description: 'PhoneCall, WhatsAppMessage, Escalation, DoctorNotify' },
      { name: 'contacted_party', type: 'VARCHAR(100)', required: true, description: 'Senior, Son, Daughter, Neighbor' },
      { name: 'notes', type: 'TEXT', required: true, description: 'Documented conversation details' },
      { name: 'outcome_code', type: 'VARCHAR(50)', required: true, description: 'RoutineRestored, EmergencyEscalated, FalseAlarm' }
    ],
    relationships: ['Belongs to CareCase'],
    securityPolicy: 'Append-only. Cannot be modified once saved.',
    retentionPolicy: 'Permanent clinical record.'
  },
  {
    name: 'AuditEvent',
    table: 'audit_events',
    purpose: 'Cryptographically ordered log of all system state transitions and administrative actions.',
    status: 'Implemented',
    fields: [
      { name: 'id', type: 'UUID (PK)', required: true, description: 'Event identifier' },
      { name: 'actor_id', type: 'VARCHAR(100)', required: true, description: 'User ID or System Worker' },
      { name: 'action', type: 'VARCHAR(100)', required: true, description: 'ALERT_ACKNOWLEDGED, CASE_RESOLVED, etc.' },
      { name: 'entity_table', type: 'VARCHAR(50)', required: true, description: 'Target table name' },
      { name: 'entity_id', type: 'UUID', required: true, description: 'Target row UUID' },
      { name: 'timestamp', type: 'TIMESTAMPTZ', required: true, description: 'Immutable log timestamp' },
      { name: 'details_json', type: 'JSONB', required: true, description: 'Payload state diff' }
    ],
    relationships: ['Cross-references all domain entities'],
    securityPolicy: 'PostgreSQL RLS: INSERT only; UPDATE and DELETE completely revoked.',
    retentionPolicy: 'Retained for 7 years.'
  }
];

export const apiEndpoints: ApiDoc[] = [
  {
    method: 'POST',
    endpoint: '/api/observations',
    title: 'Ingest Normalized Observation',
    purpose: 'Submits a single sensory aggregate or self-reported event for baseline processing.',
    auth: 'Bearer API Token or Coordinator Session',
    status: 'Implemented',
    requestSchema: {
      senior_id: 'SEN-8012',
      observation_type: 'activity',
      recorded_at: '2026-10-28T08:30:00Z',
      source_channel: 'smart_pedometer',
      metric_value: 3920,
      metadata: { battery_pct: 85, sync_mode: 'bluetooth_auto' }
    },
    responseSchema: {
      status: 'success',
      observation_id: 'obs_98124_xyz',
      processed_at: '2026-10-28T08:30:02Z',
      baseline_evaluation: { status: 'within_norm', z_score: 0.12 }
    },
    statusCodes: [
      { code: 201, description: 'Observation accepted and committed' },
      { code: 400, description: 'Validation failed (e.g., negative value or invalid timestamp)' },
      { code: 401, description: 'Unauthorized or missing bearer token' }
    ]
  },
  {
    method: 'GET',
    endpoint: '/api/alerts/queue',
    title: 'Fetch Coordinator Triage Queue',
    purpose: 'Retrieves all open alerts sorted strictly by priority tier and SLA deadline.',
    auth: 'Coordinator JWT Session',
    status: 'Implemented',
    responseSchema: {
      count: 4,
      queue: [
        {
          alert_id: 'ALT-7892',
          senior_name: 'Mrs. Sarojini Verma',
          priority: 'High',
          sla_minutes_remaining: 32,
          engine: 'MultiSignal',
          title: 'Correlated Multi-Signal Decline (Mobility, Sleep, Nutrition)',
          status: 'New'
        }
      ]
    },
    statusCodes: [
      { code: 200, description: 'Queue retrieved successfully' },
      { code: 403, description: 'Forbidden: Requires coordinator credentials' }
    ]
  },
  {
    method: 'PATCH',
    endpoint: '/api/alerts/:id/acknowledge',
    title: 'Acknowledge Alert & Claim Ownership',
    purpose: 'Moves alert from New to Acknowledged, assigns coordinator, and halts SLA escalation countdown.',
    auth: 'Coordinator JWT Session',
    status: 'Implemented',
    requestSchema: {
      assigned_coordinator_id: 'coord_priya_01',
      initial_note: 'Claimed by Priya Sharma. Reviewing 72-hour sleep and step trends.'
    },
    responseSchema: {
      alert_id: 'ALT-7892',
      status: 'Acknowledged',
      assigned_to: 'Priya Sharma',
      claimed_at: '2026-10-28T08:35:10Z',
      case_id: 'case_40912'
    },
    statusCodes: [
      { code: 200, description: 'Alert successfully claimed' },
      { code: 409, description: 'Conflict: Alert already claimed by another coordinator' }
    ]
  },
  {
    method: 'POST',
    endpoint: '/api/cases/:id/actions',
    title: 'Log Follow-Up Call & Outcome',
    purpose: 'Records human interaction notes and marks the case resolved or escalated.',
    auth: 'Coordinator JWT Session',
    status: 'Implemented',
    requestSchema: {
      action_type: 'PhoneCall',
      contacted_party: 'Son (Amit Verma)',
      notes: 'Spoke with son. Confirmed Mrs. Verma experienced mild dizziness after starting new eye drops. Neighbor visited with lunch.',
      outcome_code: 'ResolvedWithFamily',
      close_case: true
    },
    responseSchema: {
      action_id: 'act_77182',
      case_id: 'case_40912',
      status: 'Closed',
      closed_at: '2026-10-28T09:10:00Z',
      audit_ref: 'aud_99812'
    },
    statusCodes: [
      { code: 201, description: 'Action recorded and case status updated' },
      { code: 400, description: 'Missing mandatory outcome note' }
    ]
  },
  {
    method: 'POST',
    endpoint: '/api/webhooks/whatsapp',
    title: 'Meta WhatsApp Inbound Webhook',
    purpose: 'Receives and authenticates inbound WhatsApp messages from Meta Graph API.',
    auth: 'HMAC SHA-256 via X-Hub-Signature-256',
    status: 'Implemented',
    requestSchema: {
      object: 'whatsapp_business_account',
      entry: [
        {
          id: 'WHATSAPP_BUSINESS_ID',
          changes: [
            {
              value: {
                messaging_product: 'whatsapp',
                contacts: [{ profile: { name: 'Amit Verma' }, wa_id: '9198110XXXXX' }],
                messages: [{ from: '9198110XXXXX', id: 'wamid.HBg...', text: { body: 'Mummy is feeling breathless' }, timestamp: '1761612000' }]
              }
            }
          ]
        }
      ]
    },
    responseSchema: { status: 'EVENT_RECEIVED' },
    statusCodes: [
      { code: 200, description: 'Webhook verified and queued for processing' },
      { code: 403, description: 'Invalid HMAC signature' }
    ]
  }
];
