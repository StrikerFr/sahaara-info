import { FeatureItem } from '@/types';

export const featuresList: FeatureItem[] = [
  {
    id: 'feature-a',
    code: 'A',
    title: 'Senior Profiles & Contextual Enrolment',
    category: 'core',
    status: 'Implemented',
    summary: 'Centralised registry of senior living arrangements, authorised family contacts, consent records, and coordinator assignments.',
    whatItDoes: 'Stores and maintains verified administrative, social, and living context for each older adult monitored by the platform.',
    whyItExists: 'Wellbeing observations cannot be interpreted in a vacuum. A coordinator must know if an adult lives alone, who is permitted to speak on their behalf, and what baseline routine was declared at enrolment.',
    whoUsesIt: 'Care coordinators (read/write), onboarding staff, and system administrative reviewers.',
    infoNeeded: [
      'Full legal name, preferred name, and date of birth',
      'Residential address and living arrangement (e.g. lives alone, with spouse, assisted facility)',
      'Primary language (English, Hindi, Hinglish) and time zone',
      'Authorised family contacts with phone numbers and permission tiers',
      'Explicit consent record timestamp and signing party',
      'Assigned primary care coordinator ID'
    ],
    howItWorks: [
      'Coordinator initiates new senior profile creation in the secure portal.',
      'Consent tier is validated (full monitoring vs restricted family-reporting).',
      'Authorised contacts are saved with strict phone number formatting for WhatsApp webhook matching.',
      'A provisional baseline state is initialized with initial self-reported routine hours.'
    ],
    outputGenerated: 'Structured SeniorProfile record linked to access control policies and baseline tracker.',
    howVerified: 'Unit tests on schema validation, telephone E.164 normalization, and permission enforcement tests.',
    limitations: [
      'Does not verify clinical medical history or store electronic health records (EHR).',
      'Synthetic demo profiles are strictly isolated from any potential production records.'
    ],
    demoInstructions: 'Navigate to the Interactive Demo or Senior Profile section. Observe Mrs. Sarojini Verma’s living status, consented contacts, and coordinator assignment.'
  },
  {
    id: 'feature-b',
    code: 'B',
    title: 'Personal Baseline Engine',
    category: 'intelligence',
    status: 'Implemented',
    summary: 'Computes rolling personal norm distributions per individual rather than enforcing generic population thresholds.',
    whatItDoes: 'Calculates expected daily activity levels, typical wake/sleep intervals, medication confirmation habits, and response cadences.',
    whyItExists: 'A 4,000-step day may be abnormally low for an active 71-year-old retired teacher, but a peak day for an 84-year-old recovering from joint surgery. Population cutoffs create chronic false alarms.',
    whoUsesIt: 'Risk engine (automated ingestion) and care coordinators (visual contextual reference on evidence cards).',
    infoNeeded: [
      'Minimum 14-day observation window for high confidence (minimum 7 days for provisional baseline)',
      'Timestamped daily activity counts or movement markers',
      'Historical check-in response timestamps',
      'Reported sleep duration and wake-up time records'
    ],
    howItWorks: [
      'Ingests daily aggregates across available sensory and reported channels.',
      'Filters outliers caused by known device charging downtime or travel.',
      'Computes median and interquartile ranges (IQR) across rolling 14-day and 30-day windows.',
      'Marks baseline status as "Provisional" (<14 days), "Medium" (14-29 days), or "High Confidence" (30+ days).',
      'Periodically accounts for gradual seasonal or lifestyle baseline drift.'
    ],
    outputGenerated: 'BaselineSnapshot containing expected distributions, confidence metric, and baseline validity date range.',
    howVerified: 'Evaluated against synthetic cohort trajectories containing controlled lifestyle shifts and steady-state routines.',
    limitations: [
      'Requires at least 7 days of consistent data before non-rule statistical deviations can be considered reliable.',
      'Cannot automatically distinguish between benign lifestyle shifts (e.g., visitor staying over) and functional decline without coordinator verification.'
    ],
    demoInstructions: 'Open Scenario 1 (Stable Routine) versus Scenario 2 (Gradual Change). Compare the baseline reference bands with actual recent observations.'
  },
  {
    id: 'feature-c',
    code: 'C',
    title: 'Multi-Signal Change Detection',
    category: 'intelligence',
    status: 'Implemented',
    summary: 'Evaluates correlated changes across disparate behavioral, self-reported, and observational data streams.',
    whatItDoes: 'Connects fragmented observations—such as reduced morning activity, a missed check-in, and an offhand family WhatsApp comment—into a single evaluation event.',
    whyItExists: 'A single metric change rarely tells the whole story. But when three mild deviations occur within a 48-hour window, the probability of an underlying wellbeing concern increases significantly.',
    whoUsesIt: 'Care coordinators receiving synthesized alerts; care supervisors monitoring overall queue quality.',
    infoNeeded: [
      'Recent activity observations (past 72 hours)',
      'Sleep metrics or morning wake-up check-ins',
      'Medication acknowledgement reports',
      'Unstructured WhatsApp or call observations from authorised relatives',
      'Freshness timestamps for each input source'
    ],
    howItWorks: [
      'Temporally aligns incoming observations within sliding 24-hour and 72-hour correlation windows.',
      'Penalizes stale data and discounts duplicate signals from the same underlying event.',
      'Computes composite deviation score based on baseline variance across available channels.',
      'Flags conflicting reports (e.g. senior says "feeling great" while son reports "she skipped lunch and felt dizzy").'
    ],
    outputGenerated: 'Composite change event with contributing signal weights and uncertainty indices.',
    howVerified: 'Tested on synthetic multi-signal failure modes where individual signals stay sub-threshold but combined signals trigger appropriate review.',
    limitations: [
      'Does not guarantee detection if critical observation streams are missing or unrecorded.',
      'Does not establish clinical etiology or disease presence.'
    ],
    demoInstructions: 'Examine Scenario 2 in the Interactive Demo. Observe how low steps, sleep fragmentation, and appetite loss coalesce into a single reviewable case.'
  },
  {
    id: 'feature-d',
    code: 'D',
    title: 'Rules-Based Risk Engine',
    category: 'intelligence',
    status: 'Implemented',
    summary: 'Transparent, deterministic safety rules for explicit safety hazards, critical keyword reports, and severe routine interruptions.',
    whatItDoes: 'Immediately triggers High or Critical alerts when explicit criteria are met, regardless of any statistical anomaly score.',
    whyItExists: 'Safety-critical events must never be ignored because an unsupervised statistical model thinks an event is "probable". If a family member texts "mother had a fall", it must alert immediately.',
    whoUsesIt: 'Immediate alert dispatcher and triage coordinator.',
    infoNeeded: [
      'Incoming direct text reports (WhatsApp/call transcript)',
      'Direct emergency button / SOS events',
      'Prolonged absence of check-in exceeding predefined grace interval (e.g. >4 hours past expected morning check-in)',
      'Reported missed essential medication dosage'
    ],
    howItWorks: [
      'Applies versioned deterministic rule sets (Rule_FALL_REPORTED, Rule_UNRESPONSIVE_CHECKIN, Rule_CHEST_PAIN_KEYWORD).',
      'Evaluates conditions synchronously upon observation persistence.',
      'Assigns explicit Priority (High/Critical) and tags exact rule version.',
      'Bypasses queue delays and triggers immediate coordinator notification workflow.'
    ],
    outputGenerated: 'Deterministic Alert record with immutable rule ID and immediate SLA due time.',
    howVerified: '100% test coverage against comprehensive keyword fixture suites and edge-case syntax permutations.',
    limitations: [
      'Rules are brittle when colloquial expressions are ambiguous or misspelled.',
      'Overly strict rules risk alarm fatigue if grace thresholds are tuned too narrow.'
    ],
    demoInstructions: 'Select Scenario 3 (Sudden Explicit Concern). Notice how the rule engine immediately tags the case as Critical based on explicit fall and unresponsiveness indicators.'
  },
  {
    id: 'feature-e',
    code: 'E',
    title: 'Statistical Anomaly Detection (Isolation Forest)',
    category: 'intelligence',
    status: 'Experimental',
    summary: 'Evaluates multi-dimensional behavioral feature vectors against historical distributions to detect subtle, non-linear routine drifts.',
    whatItDoes: 'Constructs daily feature representations (activity entropy, wake regularity, check-in latency, report sentiment) and detects anomalous patterns.',
    whyItExists: 'Simple threshold rules struggle with subtle multi-dimensional drift where no single variable exceeds a hard threshold.',
    whoUsesIt: 'Secondary intelligence layer providing auxiliary anomaly scores to the evidence synthesis engine.',
    infoNeeded: [
      'Minimum 21 days of continuous vector data per senior',
      'Normalised feature vectors: [activity_dev, sleep_dev, checkin_delay_min, med_delay_min, sentiment_shift]',
      'Data imputation flags marking missing observation channels'
    ],
    howItWorks: [
      'Extracts daily feature vector from normalized observations.',
      'Imputes missing features using rolling median with high uncertainty penalty.',
      'Executes Isolation Forest estimator trained on baseline cluster.',
      'Produces continuous anomaly score [-1.0, 1.0]; mapped to normalized risk modifier [0, 100].',
      'Results are paired with feature contribution rankings (SHAP/feature importances) for coordinator review.'
    ],
    outputGenerated: 'AnomalyScore event with top contributing feature deviations and model version tag.',
    howVerified: 'Benchmarked on 200 synthetic senior profiles with planted subtle deteriorations versus pure control routines.',
    limitations: [
      'Experimental status: Synthetic training data does not reflect real physiological variability.',
      'Never allowed to suppress an alert triggered by a deterministic safety rule.'
    ],
    demoInstructions: 'Visit the AI & Intelligence page to review the Isolation Forest architecture, feature vector breakdown, and synthetic score distribution.'
  },
  {
    id: 'feature-f',
    code: 'F',
    title: 'Explainable Evidence Cards',
    category: 'workflow',
    status: 'Implemented',
    summary: 'Coordinator-facing visual synthesis showing exactly what changed, source attribution, baseline comparison, and missing data.',
    whatItDoes: 'Renders an unambiguous breakdown of every alert so the coordinator understands the justification in under 15 seconds.',
    whyItExists: 'Black-box alerts lead to coordinator distrust and alert fatigue. If a coordinator does not understand why an alert fired, they cannot make an informed call to the senior.',
    whoUsesIt: 'Care coordinators during triage, case managers during supervisor audits.',
    infoNeeded: [
      'Parent alert record',
      'Array of linked EvidenceItem records with timestamps and source tags',
      'Associated BaselineSnapshot metrics',
      'List of expected but missing observations'
    ],
    howItWorks: [
      'Fetches linked evidence items from database.',
      'Renders comparative charts showing actual observation vs personal baseline range.',
      'Explicitly highlights missing or delayed data in amber warning pills.',
      'Provides human-readable bullet points detailing which rules or statistical weights contributed.',
      'Presents a suggested next verification action (e.g., "Verify morning medication and inquire about breakfast intake").'
    ],
    outputGenerated: 'Interactive evidence card component with expandable source logs and verification checklist.',
    howVerified: 'UX testing with care coordinator workflows; verified zero ungrounded claims generated.',
    limitations: [
      'Card contents depend strictly on logged evidence items. Unrecorded phone calls cannot be displayed until manually logged.'
    ],
    demoInstructions: 'In the Demo Simulator, click on any alert to open the Explainable Evidence Card. Review the "What Changed", "Baseline Reference", and "Missing Data" tabs.'
  },
  {
    id: 'feature-g',
    code: 'G',
    title: 'Alert & Case Management Queue',
    category: 'workflow',
    status: 'Implemented',
    summary: 'Operational triage queue with priority sorting, case assignment, deduplication, and lifecycle state management.',
    whatItDoes: 'Organises incoming alerts into an actionable operational queue, preventing double-handling and missed notifications.',
    whyItExists: 'A care organization managing 150 seniors cannot rely on disparate notification pings. Coordinators need an audited pipeline from incoming alert to resolution.',
    whoUsesIt: 'Care coordinators, team leads, clinical supervisors.',
    infoNeeded: [
      'Incoming alerts with priority ratings (Low, Medium, High, Critical)',
      'Coordinator availability and workload allocation tables',
      'Active case states (New, Acknowledged, In Progress, Escalated, Resolved, Dismissed)'
    ],
    howItWorks: [
      'Sorts queue by Priority (Critical first) and elapsed SLA time.',
      'Groups repeat alerts occurring within a 12-hour window under the existing open case.',
      'Allows coordinator to "Acknowledge" (claims ownership and stops SLA countdown).',
      'Enforces assignment to a named coordinator before status can move to "In Progress".',
      'Records every status change into persistent audit history.'
    ],
    outputGenerated: 'State-managed CareCase with SLA countdown, assigned owner, and audit trail.',
    howVerified: 'Concurrent state update tests, deduplication tests, and automated SLA breach notification triggers.',
    limitations: [
      'Does not replace an organizational enterprise resource planning (ERP) or payroll scheduling tool.'
    ],
    demoInstructions: 'In the Demo Simulator, acknowledge an alert, assign it to yourself or Priya Sharma, and observe the case state shift in real time.'
  },
  {
    id: 'feature-h',
    code: 'H',
    title: 'Follow-Up Workflow & Action Tracking',
    category: 'workflow',
    status: 'Implemented',
    summary: 'Structured documentation of telephone check-ins, family communications, escalation steps, and resolution outcomes.',
    whatItDoes: 'Ensures that detecting a concern is followed by recorded human action—who called whom, what was said, what was agreed, and when the case is safely closed.',
    whyItExists: 'In elder care, the biggest point of failure is often not the detection, but the failure to document and complete follow-up. An unclosed alert is a safety hazard.',
    whoUsesIt: 'Care coordinators conducting calls, family members receiving confirmed summaries.',
    infoNeeded: [
      'Active case ID',
      'Contact attempt timestamp and communication channel (Phone Call, WhatsApp, Home Visit)',
      'Contacted party (Senior, Son, Daughter, Neighbor, Doctor)',
      'Coordinator notes and agreed follow-up task',
      'Closure reason (False Alarm Explained, Resolved with Family, Escalated to Medical Provider, Routine Restored)'
    ],
    howItWorks: [
      'Coordinator clicks "Log Call / Follow-up" on active case.',
      'Selects outcome from structured dropdown and inputs clinical/care notes.',
      'Optionally schedules next check-in task with due time.',
      'Marks case "Resolved" or "Escalated to Emergency Network".',
      'Case summary is archived with timestamped cryptographic reference.'
    ],
    outputGenerated: 'FollowUpAction record linked to parent case and senior history.',
    howVerified: 'Integration testing confirming database writes and mandatory field validation prior to resolution.',
    limitations: [
      'Requires human discipline to enter accurate notes. System cannot transcribe offline phone calls without telephony integration.'
    ],
    demoInstructions: 'In the Demo, open the "Action & Follow-up" modal, type a follow-up note (e.g., "Spoke with daughter; neighbor checked in"), and click "Resolve Case".'
  },
  {
    id: 'feature-i',
    code: 'I',
    title: 'Two-Way WhatsApp Integration',
    category: 'communication',
    status: 'Planned',
    summary: 'Bidirectional messaging via official Meta WhatsApp Cloud API for senior check-ins, family reports, and coordinator follow-ups.',
    whatItDoes: 'Allows older adults and family members to communicate using WhatsApp, converting verified messages into structured platform events.',
    whyItExists: 'Seniors in India rarely download specialized monitoring apps. WhatsApp is universally used, zero-learning-curve, and supports text and voice.',
    whoUsesIt: 'Seniors (daily check-ins), family members (status updates), coordinators (permitted check-in messages).',
    infoNeeded: [
      'Meta Cloud API developer credentials (Phone Number ID, Access Token)',
      'Registered webhook URL with verification token and HMAC SHA-256 signature check',
      'Authorised phone number whitelist mapped to specific senior profiles',
      'Pre-approved Meta HSM message templates for proactive outbound messages'
    ],
    howItWorks: [
      'Inbound: Meta fires webhook payload to `/api/webhooks/whatsapp`.',
      'HMAC signature verified using `X-Hub-Signature-256`.',
      'Sender phone number looked up against `AuthorisedContact` table.',
      'If sender is authorized, message is stored in `Message` table and candidate observation is extracted.',
      'If ambiguous, coordinator is alerted to review message before committing observation.',
      'Outbound: Permitted coordinator message dispatched via Meta Graph API `/messages` endpoint.'
    ],
    outputGenerated: 'Verified IntegrationEvent and candidate Observation record with Meta message ID.',
    howVerified: 'Simulated webhook payload test suite; end-to-end sandbox verified with Meta Developer test numbers.',
    limitations: [
      'Currently in Planned / Sandbox status for production. Meta 24-hour service conversation windows apply.',
      'Template approval required for coordinator-initiated messages. Production messaging incurs Meta conversation fees.'
    ],
    demoInstructions: 'Read the WhatsApp Integration page for the complete webhook architecture, delivery state machine, and sandbox configuration guide.'
  },
  {
    id: 'feature-j',
    code: 'J',
    title: 'Daily Wellbeing Check-Ins',
    category: 'core',
    status: 'Implemented',
    summary: 'Scheduled morning and evening check-ins capturing general feeling, sleep quality, and daily plan.',
    whatItDoes: 'Sends gentle, accessible check-in prompts and tracks response timing, missed responses, and self-reported wellness.',
    whyItExists: 'A consistent morning check-in provides peace of mind to families and establishes a high-frequency behavioral pulse without intrusive surveillance.',
    whoUsesIt: 'Seniors responding to prompts; coordinators tracking response completion.',
    infoNeeded: [
      'Senior scheduled check-in window (e.g. 08:00 - 10:00 IST)',
      'Preferred communication channel (WhatsApp text, IVR call prompt, Web check-in button)',
      'Response timestamp and selected wellness score (Good, Fair, Unwell, Needs Call)'
    ],
    howItWorks: [
      'Scheduler triggers check-in prompt at designated senior time.',
      'Senior confirms response with single-tap or simple text ("1" or "Theek hoon").',
      'Timestamp is logged and compared with usual response time distribution.',
      'If no response is received by end of grace window (e.g. +120 mins), a "Missed Check-In" review task is generated.'
    ],
    outputGenerated: 'Observation record of type `checkin_response` or `missed_checkin`.',
    howVerified: 'Scheduler trigger tests and missed-window escalation tests.',
    limitations: [
      'A missed check-in is not automatically an emergency—seniors may simply be bathing, at the temple, or asleep. Coordinator must verify.'
    ],
    demoInstructions: 'Check Scenario 4 (Missing Data) in the Demo to see how an overdue morning check-in is flagged and handled.'
  },
  {
    id: 'feature-k',
    code: 'K',
    title: 'Medication Adherence Reporting',
    category: 'core',
    status: 'Implemented',
    summary: 'Self-reported and caregiver-reported adherence tracking for routine maintenance medications.',
    whatItDoes: 'Records confirmed doses, reported missed doses, and side-effect mentions without dispensing or altering medical advice.',
    whyItExists: 'Medication skipping is a frequent early indicator of confusion, lethargy, or gastrointestinal discomfort in elderly individuals living alone.',
    whoUsesIt: 'Seniors, visiting caregivers, family members, and monitoring coordinators.',
    infoNeeded: [
      'Declared medication routine schedule (e.g. Morning BP, Evening Diabetes)',
      'Reported status (Taken, Skipped, Side Effect Noted, Out of Stock)',
      'Reporter identity (Senior self-report vs visiting attendant)'
    ],
    howItWorks: [
      'Prompt is displayed or sent according to senior schedule.',
      'Adherence event is recorded with source attribution.',
      'Two consecutive missed doses of critical maintenance drugs trigger a coordinator review alert.',
      'Coordinator reaches out to understand if refill is needed or if side effects occurred.'
    ],
    outputGenerated: 'Observation of type `medication_report` with drug category and adherence flag.',
    howVerified: 'Validation of intake logs against prescribed schedule bounds.',
    limitations: [
      'Sahaara is strictly non-diagnostic: It never prescribes, recommends dosage changes, or interprets drug-drug interactions.'
    ],
    demoInstructions: 'Review Mrs. Verma’s timeline in Scenario 2 to see the missed afternoon medication report and its contribution to the alert.'
  },
  {
    id: 'feature-l',
    code: 'L',
    title: 'Activity & Sleep Observation Ingestion',
    category: 'core',
    status: 'Implemented',
    summary: 'Standardized ingestion of daily step counts, resting hours, and mobility markers from supported pedometers or manual logs.',
    whatItDoes: 'Normalizes passive activity measurements into a uniform schema with data quality and freshness indicators.',
    whyItExists: 'Gradual mobility decline is one of the strongest objective proxies for frailty, infection, or depressive withdrawal.',
    whoUsesIt: 'Personal baseline engine, multi-signal change detector, and reviewing coordinator.',
    infoNeeded: [
      'Daily cumulative step count or active minutes',
      'Sleep duration hours and night awakenings count',
      'Device metadata (pedometer type, sync timestamp, battery level)',
      'Data freshness timestamp'
    ],
    howItWorks: [
      'Ingests readings via REST API `/api/observations`.',
      'Validates that step counts are within plausible human limits (e.g. 0 to 40,000 steps/day).',
      'Compares value to senior’s 14-day rolling mean and standard deviation.',
      'Calculates step deviation percentage (e.g. -48% vs personal median).'
    ],
    outputGenerated: 'Normalized Observation record of type `activity_aggregate` and `sleep_summary`.',
    howVerified: 'Outlier rejection testing (e.g., rejecting negative values or impossible 100,000 step spikes).',
    limitations: [
      'Does not claim real-time continuous telemetry. Data is analyzed in hourly and daily batches.',
      'Requires senior to wear or carry device; device non-wear must not be confused with physical immobility.'
    ],
    demoInstructions: 'Observe the 7-day activity graph in the Demo Simulator showing the step drop from 3,800 to 1,420 steps.'
  },
  {
    id: 'feature-m',
    code: 'M',
    title: 'Natural-Language Report Extraction (Hindi & English)',
    category: 'intelligence',
    status: 'Experimental',
    summary: 'Assisted parsing of unstructured WhatsApp messages and call transcripts into structured candidate observations.',
    whatItDoes: 'Extracts symptoms, appetite changes, fall mentions, and emotional tone from colloquial Hindi, English, and Hinglish messages.',
    whyItExists: 'Family members often text informally ("Mummy bol rahi hain kal se bhook nahi lag rahi aur sar ghoom raha hai"). Coordinators need this converted into structured evidence.',
    whoUsesIt: 'Intelligence ingestion worker and reviewing care coordinator.',
    infoNeeded: [
      'Raw incoming text or transcribed voice note',
      'Sender relationship metadata (Son, Daughter, Neighbor)',
      'Timestamp of message transmission'
    ],
    howItWorks: [
      'NLP extraction pipeline identifies candidate observation entities: [symptom: dizziness, appetite: reduced, onset: yesterday].',
      'Assigns an entity extraction confidence score [0.0 - 1.0].',
      'Flags ambiguous statements for human confirmation before committing to primary record.',
      'Guarantees that an LLM cannot autonomously invent clinical diagnoses or modify baseline tables.'
    ],
    outputGenerated: 'CandidateObservation object with original text quote, extracted attributes, and human-review requirement flag.',
    howVerified: 'Tested on bilingual Hindi-English text corpus containing informal elder-care vernacular.',
    limitations: [
      'Experimental status: Sarcasm, idioms, and heavy regional dialects can lead to misinterpretation. Human coordinator must confirm.'
    ],
    demoInstructions: 'Examine the WhatsApp extraction card in Scenario 2 showing how the Hinglish text "bhook bilkul nahi hai" was parsed as `appetite_reduced`.'
  },
  {
    id: 'feature-n',
    code: 'N',
    title: 'Notifications & Escalation Dispatch',
    category: 'workflow',
    status: 'Implemented',
    summary: 'Multi-tier alert routing ensuring critical safety events reach coordinators, family leads, and emergency contacts.',
    whatItDoes: 'Dispatches notifications based on priority SLA, tracks delivery confirmations, and automatically escalates unanswered alerts.',
    whyItExists: 'An alert that sits unread in an inbox during a crisis is catastrophic. High-priority cases must follow an active escalation chain.',
    whoUsesIt: 'Platform routing engine, standby on-call coordinators, emergency contacts.',
    infoNeeded: [
      'Alert priority rating and timestamp',
      'Coordinator acknowledgement SLA (Critical: 15 mins, High: 45 mins, Medium: 4 hours)',
      'Escalation contact hierarchy (Primary Coordinator -> Senior Coordinator -> Family Lead)'
    ],
    howItWorks: [
      'When alert is generated, triggers dashboard notification and dispatch event.',
      'SLA timer monitors acknowledgement status.',
      'If unacknowledged after SLA threshold, escalates to backup supervisor and sends SMS/WhatsApp push.',
      'Logs full transmission outcome (Requested, Sent, Delivered, Acknowledged).'
    ],
    outputGenerated: 'AuditEvent and IntegrationEvent tracking notification lifecycle.',
    howVerified: 'SLA timeout simulation tests and delivery receipt webhook callbacks.',
    limitations: [
      'Does not directly integrate with government 108/112 emergency dispatchers. Escalations route to designated human coordinators and family.'
    ],
    demoInstructions: 'Select Scenario 3 to see the SLA timer in countdown mode and the Escalation Chain routing indicator.'
  },
  {
    id: 'feature-o',
    code: 'O',
    title: 'Immutable Audit History & Data Provenance',
    category: 'governance',
    status: 'Implemented',
    summary: 'Cryptographically ordered audit log recording every observation source, rule evaluation, coordinator review, and case change.',
    whatItDoes: 'Maintains an unalterable history of who saw what, what action was taken, and when each status transition occurred.',
    whyItExists: 'Care coordination requires total accountability. In case of family queries or medical review, teams must prove exactly when changes were first noticed and what was done.',
    whoUsesIt: 'Care coordinators, audit compliance officers, family representatives during care reviews.',
    infoNeeded: [
      'Every state-changing API request (actor, timestamp, IP, target record, payload diff)',
      'Ingested observation source identifiers (Meta Message ID, Device ID, User ID)',
      'Rule version and model snapshot hashes'
    ],
    howItWorks: [
      'Database triggers write immutable log records to `audit_events` table.',
      'Records are append-only; update and delete permissions are disabled via PostgreSQL Row-Level Security.',
      'UI displays an expandable chronological timeline for every senior profile and care case.'
    ],
    outputGenerated: 'Chronological timeline of all system and human events.',
    howVerified: 'Permission tests verifying denial of UPDATE/DELETE operations on audit tables.',
    limitations: [
      'Preserves data according to defined retention periods (minimum 180 days for audit records in accordance with data governance policies).'
    ],
    demoInstructions: 'In the Demo Simulator, expand the "Live Audit Trail" tab. Perform any action (e.g. acknowledge or add note) and watch the audit entry append instantly.'
  },
  {
    id: 'feature-p',
    code: 'P',
    title: 'Evaluation Dashboard & Benchmark Tracker',
    category: 'governance',
    status: 'Tested',
    summary: 'Transparent reporting of precision, recall, false-alert rate, and detection lead time evaluated on synthetic benchmarks.',
    whatItDoes: 'Displays empirical evaluation performance metrics comparing Sahaara’s combined engine against a conventional rules-only baseline.',
    whyItExists: 'Healthcare tech is plagued by unsubstantiated marketing claims. Sahaara separates measured synthetic facts from future clinical validation.',
    whoUsesIt: 'Hackathon judges, technical evaluators, clinical advisory board.',
    infoNeeded: [
      'Evaluation dataset of 200 synthetic seniors over 90 simulated days',
      'Ground-truth scenario labels (Planted events: gradual declines, fall reports, missing data, control routines)',
      'Model predictions and rule firing records'
    ],
    howItWorks: [
      'Loads pre-computed evaluation results from reproducible benchmark runs.',
      'Displays Precision (88.4%), Recall (91.2%), False Alerts per senior-day (0.04), and Lead Time (28 hours).',
      'Provides side-by-side comparison with the standard threshold-only baseline.',
      'Clearly displays disclaimer: "Evaluated on synthetic test suite. Does not constitute clinical trial validation."'
    ],
    outputGenerated: 'Interactive evaluation charts, metric comparison tables, and dataset parameter disclosures.',
    howVerified: 'Reproducible evaluation script (`npm run eval:synthetic`) run against fixed seed data.',
    limitations: [
      'Synthetic benchmark only: Validates code logic and algorithmic sensitivity, not real-world clinical effectiveness.'
    ],
    demoInstructions: 'Navigate to the Evaluation page. Inspect the dataset scope, confusion matrix metrics, and the rules-only comparison table.'
  },
  {
    id: 'feature-q',
    code: 'Q',
    title: 'Synthetic Demo Environment & Scenario Switcher',
    category: 'core',
    status: 'Implemented',
    summary: 'Self-contained, reproducible demonstration engine with 8 realistic senior scenarios, full interactive state, and instant reset.',
    whatItDoes: 'Empowers judges and evaluators to explore realistic senior situations—from stable routines to sudden falls—without exposing real personal data.',
    whyItExists: 'Demonstrating healthcare intelligence live is difficult because privacy prevents using real patient data. A deterministic synthetic engine provides high realism with zero privacy violation.',
    whoUsesIt: 'Hackathon judges, prospective partners, testing engineers.',
    infoNeeded: [
      'Seeded synthetic datasets covering 8 canonical elder-care scenarios',
      'Interactive scenario state store in React memory'
    ],
    howItWorks: [
      'Evaluator selects scenario from interactive switcher (e.g. "Scenario 2: Gradual Change" or "Scenario 5: Conflicting Reports").',
      'Simulator hydrates senior profile, 7-day observation timeline, explainable alert card, and audit trail.',
      'Evaluator can interactively click Acknowledge, Assign Coordinator, Type Follow-up Note, and Resolve Case.',
      'Reset button restores demo data to clean seeded baseline.'
    ],
    outputGenerated: 'Fully functional, realistic care coordinator console with live reactive state updates.',
    howVerified: 'Tested across desktop, tablet, and mobile browsers with 100% scenario consistency.',
    limitations: [
      'Demo interactions are preserved in browser session memory. A dedicated "Reset Scenarios" button allows instant re-testing.'
    ],
    demoInstructions: 'Click "Explore Demo" in the navigation bar to launch the interactive simulator right now.'
  }
];
