import { ScenarioItem } from '@/types';

export const scenariosList: ScenarioItem[] = [
  {
    id: 'scenario-1',
    title: 'Scenario 1: Stable Routine',
    subtitle: 'Regular daily cadence across all monitored channels',
    category: 'Baseline Normal',
    severity: 'Stable',
    senior: {
      id: 'SEN-8012',
      name: 'Mrs. Sarojini Verma',
      age: 74,
      city: 'Delhi (Vasant Kunj)',
      livingArrangement: 'Living independently in family apartment; son lives 15km away',
      baselineStatus: 'Well established over 45 days',
      baselineConfidence: 'High',
      dataCoverageDays: 45,
      assignedCoordinator: 'Priya Sharma (Senior Care Lead)',
      emergencyContact: 'Amit Verma (Son) - +91 98110 XXXXX'
    },
    narrative: 'Mrs. Verma has had an unvaried, healthy week. She woke at her normal hour (06:30 AM), acknowledged her morning BP medication promptly, completed her morning garden stroll (3,800 steps), and confirmed her 09:00 AM WhatsApp check-in with a cheerful voice note.',
    recentObservations: [
      { time: 'Today 06:45 AM', source: 'Sleep Tracker Sync', type: 'sleep', detail: '7.4 hrs restful sleep. Woke at 06:25 AM (Baseline: 06:30 ± 20 mins).' },
      { time: 'Today 07:15 AM', source: 'Smart Pedometer', type: 'activity', detail: 'Morning walking loop: 1,850 steps recorded in park.' },
      { time: 'Today 08:30 AM', source: 'Medication Log', type: 'medication', detail: 'Morning antihypertensive (Amlodipine 5mg) confirmed taken on time.' },
      { time: 'Today 09:05 AM', source: 'WhatsApp Check-in', type: 'checkin', detail: 'Senior sent: "Good morning beta, pooja done, feeling energetic today."' },
      { time: 'Today 01:30 PM', source: 'Smart Pedometer', type: 'activity', detail: 'Cumulative daily steps: 3,920 steps (Baseline target: 3,600 - 4,200).' }
    ],
    alert: {
      alertId: 'ALT-NONE-01',
      title: 'Routine Within Expected Baseline Bounds',
      priority: 'Low',
      detectedAt: 'Today 01:35 PM',
      engineUsed: 'Rule + Statistical',
      contributingObservations: [
        'Activity: 3,920 steps (+3% vs 30-day median)',
        'Sleep: 7.4 hrs uninterrupted (normal range 6.8 - 7.6 hrs)',
        'Check-in latency: 5 mins from prompt (within normal 15-min window)',
        'Medication adherence: 100% on schedule over past 14 days'
      ],
      baselineReference: 'Established over 45 days of continuous observation. Activity median: 3,800 steps/day. Mean wake time: 06:30 AM.',
      missingOrConflictingData: ['None. All 4 primary observation streams verified fresh within 60 minutes.'],
      rationale: 'All observations match personal historical distribution. No intervention or coordinator call required. Regular monitoring continues.',
      suggestedAction: 'No action required. Next scheduled touchpoint: Evening check-in at 08:30 PM.'
    },
    initialAuditLog: [
      { id: 'aud-101', timestamp: 'Today 06:45 AM', actor: 'System Worker (Ingest)', action: 'Observation Ingested', details: 'Sleep summary ingested via Bluetooth sync API' },
      { id: 'aud-102', timestamp: 'Today 08:30 AM', actor: 'Senior (Self-report)', action: 'Medication Confirmed', details: 'Morning dose marked taken via WhatsApp prompt' },
      { id: 'aud-103', timestamp: 'Today 09:05 AM', actor: 'WhatsApp Webhook', action: 'Check-in Acknowledged', details: 'Message mapped to SEN-8012; sentiment neutral-positive' },
      { id: 'aud-104', timestamp: 'Today 01:35 PM', actor: 'Risk Engine Evaluator', action: 'Routine Verified', details: 'Status: Green / Low Priority. No alert queued.' }
    ]
  },
  {
    id: 'scenario-2',
    title: 'Scenario 2: Gradual Change Across Multiple Signals',
    subtitle: 'Compound subtle deviations over 72 hours indicating potential decline',
    category: 'Early Warning',
    severity: 'Review Required',
    senior: {
      id: 'SEN-8012',
      name: 'Mrs. Sarojini Verma',
      age: 74,
      city: 'Delhi (Vasant Kunj)',
      livingArrangement: 'Living independently in family apartment',
      baselineStatus: 'Active baseline',
      baselineConfidence: 'High',
      dataCoverageDays: 45,
      assignedCoordinator: 'Priya Sharma (Senior Care Lead)',
      emergencyContact: 'Amit Verma (Son) - +91 98110 XXXXX'
    },
    narrative: 'Over the past 3 days, Mrs. Verma has experienced subtle, correlated shifts. Her steps dropped from 3,800 to 1,420 (-62%). Her sleep records reveal restlessness with 4 night awakenings. Today she skipped her afternoon diabetic dose, and her son texted saying she sounded weak and refused lunch. No single metric is an emergency, but the combination warrants a proactive check.',
    recentObservations: [
      { time: '2 Days Ago', source: 'Smart Pedometer', type: 'activity', detail: 'Daily steps dropped to 2,400 (-37% below personal median).' },
      { time: 'Yesterday', source: 'Sleep Tracker Sync', type: 'sleep', detail: 'Disrupted sleep: 4.8 hrs total, 4 nocturnal awakenings recorded.', isAbnormal: true },
      { time: 'Yesterday', source: 'Smart Pedometer', type: 'activity', detail: 'Daily steps further declined to 1,420 steps (-62% below median).', isAbnormal: true },
      { time: 'Today 09:30 AM', source: 'WhatsApp Check-in', type: 'checkin', detail: 'Check-in delayed by 90 minutes. Short response: "Theek hoon thoda thak gayi hoon."', isAbnormal: true },
      { time: 'Today 01:15 PM', source: 'Medication Log', type: 'medication', detail: 'Afternoon dose (Metformin 500mg) unconfirmed after reminder.', isAbnormal: true },
      { time: 'Today 02:10 PM', source: 'WhatsApp (Son: Amit)', type: 'family_report', detail: 'Son sent: "Coordinator ji, spoke to mummy on phone, she sounded breathless and said she skipped lunch."', isAbnormal: true }
    ],
    alert: {
      alertId: 'ALT-7892',
      title: 'Correlated Multi-Signal Decline (Mobility, Sleep, Nutrition)',
      priority: 'High',
      detectedAt: 'Today 02:15 PM',
      engineUsed: 'Rule + Statistical',
      contributingObservations: [
        'Mobility: 3-day continuous step drop (-62% on Day 3 vs 30-day baseline)',
        'Sleep: Significant disruption (4.8 hrs vs 7.4 hrs norm; 4 awakenings)',
        'Medication: Afternoon maintenance dose unconfirmed for >2 hours',
        'Family report: Authorized contact reports breathlessness and skipped meal'
      ],
      baselineReference: 'Normal baseline 3,800 steps/day, 7.2 hrs sleep, 100% medication adherence. Current composite deviation z-score = 2.84.',
      missingOrConflictingData: ['Blood pressure and pulse readings not available (no connected cuff).'],
      rationale: 'While no single metric breached catastrophic limits, the multi-signal convergence of fatigue, poor sleep, missed medication, and reported breathlessness presents high likelihood of early respiratory or cardiovascular decompensation.',
      suggestedAction: 'Phone call to senior immediately to assess breathlessness and mental clarity. Contact son Amit to coordinate physical check if unresponsive.'
    },
    initialAuditLog: [
      { id: 'aud-201', timestamp: 'Today 09:30 AM', actor: 'System Worker', action: 'Latency Flagged', details: 'Check-in delayed by 90 mins; sentiment flagged mildly negative' },
      { id: 'aud-202', timestamp: 'Today 01:15 PM', actor: 'Scheduler Service', action: 'Missed Dose Flagged', details: 'Metformin unconfirmed after reminder timeout' },
      { id: 'aud-203', timestamp: 'Today 02:10 PM', actor: 'Meta Webhook Worker', action: 'Family Observation Ingested', details: 'Message from Amit Verma (+91 98110 XXXXX) parsed: breathlessness, meal refusal' },
      { id: 'aud-204', timestamp: 'Today 02:15 PM', actor: 'Risk Engine (Multi-Signal)', action: 'Alert Raised (HIGH)', details: 'Priority: High. Assigned to Priya Sharma. SLA: 45 minutes.' }
    ]
  },
  {
    id: 'scenario-3',
    title: 'Scenario 3: Sudden Explicit Concern (Reported Fall)',
    subtitle: 'Direct high-severity safety event requiring immediate human escalation',
    category: 'Urgent Safety',
    severity: 'Urgent Attention',
    senior: {
      id: 'SEN-3421',
      name: 'Col. R.K. Bakshi (Retd.)',
      age: 82,
      city: 'Pune (Koregaon Park)',
      livingArrangement: 'Lives alone with daytime attendant (attendant leaves at 5 PM)',
      baselineStatus: 'Established baseline (60 days)',
      baselineConfidence: 'High',
      dataCoverageDays: 60,
      assignedCoordinator: 'Arun Deshmukh (Emergency Triage)',
      emergencyContact: 'Major Vikram Bakshi (Son) - +91 97654 XXXXX'
    },
    narrative: 'At 07:15 PM, after the daytime attendant had departed, Col. Bakshi pressed his SOS pendant. Simultaneously, his neighbor texted the WhatsApp helpline stating they heard a loud thump and cries for help from his ground-floor flat. This is an explicit critical event requiring rapid response.',
    recentObservations: [
      { time: 'Today 05:00 PM', source: 'Caregiver Check-out', type: 'system', detail: 'Attendant Ramesh logged out. Col. Bakshi reported resting comfortably in recliner.' },
      { time: 'Today 07:12 PM', source: 'SOS Pendant Gateway', type: 'system', detail: 'CRITICAL: SOS button depressed for 3 seconds in hallway area.', isAbnormal: true },
      { time: 'Today 07:15 PM', source: 'WhatsApp (Neighbor: Dr. Joshi)', type: 'family_report', detail: 'Neighbor texted: "Colonel sahab flat se awaz aayi girne ki. Main darwaza khatkhata raha hoon."', isAbnormal: true }
    ],
    alert: {
      alertId: 'ALT-9901',
      title: 'CRITICAL: Explicit Fall / SOS Trigger in Residence',
      priority: 'Critical',
      detectedAt: 'Today 07:13 PM',
      engineUsed: 'Deterministic Rule',
      contributingObservations: [
        'Hardware SOS trigger from Hallway Gateway at 07:12 PM',
        'Corroborating neighbor WhatsApp report of fall sounds at 07:15 PM',
        'Attendant off-duty; senior confirmed alone in residence'
      ],
      baselineReference: 'Deterministic Safety Rule: Rule_FALL_OR_SOS_EXPLICIT fired. Statistical baseline bypassed.',
      missingOrConflictingData: ['Senior telephone unanswered on first dial attempt.'],
      rationale: 'Hardware SOS trigger reinforced by auditory neighbor report indicates physical fall with immediate risk of trauma, fracture, or inability to rise.',
      suggestedAction: 'Immediate emergency protocol: 1. Dispatch neighbor Dr. Joshi who has spare key. 2. Alert son Vikram Bakshi. 3. Standby local ambulance dispatch if uncontactable in 3 mins.'
    },
    initialAuditLog: [
      { id: 'aud-301', timestamp: 'Today 07:12 PM', actor: 'IoT Hardware Gateway', action: 'SOS Signal Received', details: 'Device ID: SOS-BK-04; Location: Hallway' },
      { id: 'aud-302', timestamp: 'Today 07:13 PM', actor: 'Deterministic Safety Engine', action: 'Alert Raised (CRITICAL)', details: 'Rule_FALL_OR_SOS_EXPLICIT triggered. SLA: 5 minutes.' },
      { id: 'aud-303', timestamp: 'Today 07:15 PM', actor: 'Meta Webhook Worker', action: 'Corroborating Report Appended', details: 'Inbound message from registered neighbor Dr. Joshi linked to ALT-9901' }
    ]
  },
  {
    id: 'scenario-4',
    title: 'Scenario 4: Missing & Incomplete Observation Data',
    subtitle: 'Sensors offline and morning check-in unanswered—managing uncertainty',
    category: 'Data Quality',
    severity: 'Review Required',
    senior: {
      id: 'SEN-5104',
      name: 'Mrs. Kaushalya Devi',
      age: 79,
      city: 'Jaipur (C-Scheme)',
      livingArrangement: 'Lives alone; daughter resides in Bangalore',
      baselineStatus: 'Active baseline',
      baselineConfidence: 'Medium',
      dataCoverageDays: 22,
      assignedCoordinator: 'Neha Mathur (Care Coordinator)',
      emergencyContact: 'Sunita Sharma (Daughter) - +91 94140 XXXXX'
    },
    narrative: 'Mrs. Kaushalya Devi’s smart wristband stopped syncing at 02:00 AM last night (likely battery depletion). Her 08:30 AM morning check-in has not been answered by 11:30 AM (3 hours overdue). The system must distinguish between device failure and physical incapacitation without premature panic.',
    recentObservations: [
      { time: 'Last Night 02:14 AM', source: 'Smart Pedometer', type: 'system', detail: 'Pedometer battery low warning (5%). Last step sync received.' },
      { time: 'Today 08:30 AM', source: 'WhatsApp Scheduler', type: 'checkin', detail: 'Morning check-in dispatched: "Suprabhat Maaji, kaisa mehsoos ho raha hai?"' },
      { time: 'Today 10:30 AM', source: 'System Monitor', type: 'system', detail: 'Check-in unacknowledged after 120 mins grace window.', isAbnormal: true },
      { time: 'Today 11:30 AM', source: 'System Monitor', type: 'system', detail: 'No incoming data from any source for 9.5 hours.', isAbnormal: true }
    ],
    alert: {
      alertId: 'ALT-6120',
      title: 'Prolonged Absence of Observations & Overdue Check-in',
      priority: 'Medium',
      detectedAt: 'Today 11:30 AM',
      engineUsed: 'Rule + Statistical',
      contributingObservations: [
        'Total sensor silence for 9.5 hours (Pedometer battery was 5% at last ping)',
        'Morning WhatsApp check-in unread and unanswered for 180 minutes',
        'Senior lives alone with no morning visitor scheduled'
      ],
      baselineReference: 'Historical median check-in response time: 24 minutes. Senior usually recharges band on Sundays (today is Tuesday).',
      missingOrConflictingData: [
        'Pedometer stream: OFFLINE (Battery likely drained)',
        'WhatsApp read receipts: Single tick (Message delivered to network but phone potentially uncharged or senior away)'
      ],
      rationale: 'High uncertainty: Probability of simple dead phone/wristband battery is high, but risk of incapacitation cannot be dismissed given living-alone status.',
      suggestedAction: 'Coordinator telephone call to senior’s landline. If unanswered, call local building security guard (+91 98290 XXXXX) to perform a courteous door knock.'
    },
    initialAuditLog: [
      { id: 'aud-401', timestamp: 'Last Night 02:14 AM', actor: 'Device Bridge', action: 'Telemetry Dropped', details: 'Battery alert 5% logged; stream marked stale' },
      { id: 'aud-402', timestamp: 'Today 10:30 AM', actor: 'Grace Timer Service', action: 'Check-in Overdue', details: '120-min grace period expired without reply' },
      { id: 'aud-403', timestamp: 'Today 11:30 AM', actor: 'Data Quality Engine', action: 'Alert Raised (MEDIUM)', details: 'Prolonged absence flagged with explicit "Missing Data" label' }
    ]
  },
  {
    id: 'scenario-5',
    title: 'Scenario 5: Conflicting Multi-Source Reports',
    subtitle: 'Senior reports feeling great, while caregiver notes confusion and dizziness',
    category: 'Source Discrepancy',
    severity: 'Review Required',
    senior: {
      id: 'SEN-6219',
      name: 'Mr. Brij Mohan Lal',
      age: 81,
      city: 'Lucknow (Gomti Nagar)',
      livingArrangement: 'Lives with spouse; visiting nurse visits daily at 11 AM',
      baselineStatus: 'Active baseline',
      baselineConfidence: 'High',
      dataCoverageDays: 52,
      assignedCoordinator: 'Mohit Saxena (Care Coordinator)',
      emergencyContact: 'Alok Lal (Son in London) - +44 7700 XXXXX'
    },
    narrative: 'At 09:00 AM, Mr. Lal replied to his WhatsApp check-in: "Sab badhiya hai beta, no problem." However, at 11:45 AM, the visiting nurse logged a report stating Mr. Lal was disoriented regarding the day of the week and required assistance standing due to mild orthostatic dizziness.',
    recentObservations: [
      { time: 'Today 09:02 AM', source: 'WhatsApp (Senior Direct)', type: 'checkin', detail: 'Senior text: "Sab badhiya hai beta, no problem. Chai peeli."' },
      { time: 'Today 10:30 AM', source: 'Smart Pedometer', type: 'activity', detail: 'Low movement: 410 steps (Baseline morning expectation: 1,200 steps).' },
      { time: 'Today 11:45 AM', source: 'Nurse Portal (Sister Mary)', type: 'call', detail: 'Nurse report: "Patient disoriented to date. Blood pressure sitting 138/84, standing drops to 102/68 with reported lightheadedness."', isAbnormal: true }
    ],
    alert: {
      alertId: 'ALT-4518',
      title: 'Discrepancy Between Self-Report and Objective Clinical Observation',
      priority: 'Medium',
      detectedAt: 'Today 11:50 AM',
      engineUsed: 'Rule + Statistical',
      contributingObservations: [
        'Direct check-in claimed normal wellness ("Sab badhiya")',
        'Clinical caregiver measured significant orthostatic BP drop (36 mmHg systolic difference)',
        'Caregiver noted temporal disorientation and lightheadedness on standing'
      ],
      baselineReference: 'Senior has mild mild cognitive impairment history with tendency to minimize symptoms on direct questioning.',
      missingOrConflictingData: ['Self-report directly conflicts with visiting nurse objective assessment.'],
      rationale: 'Elderly individuals frequently minimize physical deficits to maintain perceived autonomy. Ingestion engine reconciled conflict by prioritizing objective nurse vitals and flagging the self-report discrepancy for coordinator awareness.',
      suggestedAction: 'Coordinator contact with visiting nurse to verify hydration status and notify spouse to monitor standing transfers until doctor review.'
    },
    initialAuditLog: [
      { id: 'aud-501', timestamp: 'Today 09:02 AM', actor: 'WhatsApp Webhook', action: 'Self-Report Logged', details: 'Positive sentiment logged from verified senior number' },
      { id: 'aud-502', timestamp: 'Today 11:45 AM', actor: 'Visiting Caregiver Portal', action: 'Clinical Note Added', details: 'Nurse Mary entered orthostatic hypotension observation' },
      { id: 'aud-503', timestamp: 'Today 11:50 AM', actor: 'Reconciliation Engine', action: 'Discrepancy Detected', details: 'Alert ALT-4518 raised with High Divergence indicator' }
    ]
  },
  {
    id: 'scenario-6',
    title: 'Scenario 6: Duplicate Inbound Message Suppression',
    subtitle: 'Multiple family members texting about the same event—idempotency in action',
    category: 'System Resilience',
    severity: 'Stable',
    senior: {
      id: 'SEN-8012',
      name: 'Mrs. Sarojini Verma',
      age: 74,
      city: 'Delhi (Vasant Kunj)',
      livingArrangement: 'Living independently in family apartment',
      baselineStatus: 'Active baseline',
      baselineConfidence: 'High',
      dataCoverageDays: 45,
      assignedCoordinator: 'Priya Sharma (Senior Care Lead)',
      emergencyContact: 'Amit Verma (Son) - +91 98110 XXXXX'
    },
    narrative: 'Mrs. Verma’s daughter in Mumbai and son in Delhi both sent WhatsApp messages within 90 seconds informing the care team that Mrs. Verma has a planned dental appointment tomorrow morning. The platform must recognize duplicate event semantics and prevent dual alert generation.',
    recentObservations: [
      { time: 'Today 03:10 PM', source: 'WhatsApp (Son: Amit)', type: 'family_report', detail: 'Son texted: "Mummy has a dental checkup tomorrow at 10 AM, will be away from phone."' },
      { time: 'Today 03:11 PM', source: 'WhatsApp (Daughter: Ritu)', type: 'family_report', detail: 'Daughter texted: "Hi, just letting you know mom has dentist appointment tomorrow 10am."' }
    ],
    alert: {
      alertId: 'ALT-SUPP-06',
      title: 'Scheduled Absence Logged (Duplicate Event Merged)',
      priority: 'Low',
      detectedAt: 'Today 03:12 PM',
      engineUsed: 'Deterministic Rule',
      contributingObservations: [
        'Son message at 03:10 PM parsed: [Event: Dental appointment, Date: Tomorrow 10 AM]',
        'Daughter message at 03:11 PM parsed: [Event: Dentist, Date: Tomorrow 10 AM]',
        'Semantic entity deduplication identified 98% intent match within 120-second temporal window'
      ],
      baselineReference: 'Routine schedule modification.',
      missingOrConflictingData: ['None.'],
      rationale: 'Idempotency and semantic deduplication successfully grouped two inbound messages into a single calendar annotation, avoiding duplicate coordinator tasks.',
      suggestedAction: 'Automatic WhatsApp confirmation sent to both children: "Dental appointment noted for tomorrow 10:00 AM. Morning check-in window adjusted."'
    },
    initialAuditLog: [
      { id: 'aud-601', timestamp: 'Today 03:10 PM', actor: 'Meta Webhook Worker', action: 'Inbound Message 1', details: 'Message ID: wamid.HBg... (Amit Verma)' },
      { id: 'aud-602', timestamp: 'Today 03:11 PM', actor: 'Meta Webhook Worker', action: 'Inbound Message 2', details: 'Message ID: wamid.HBg... (Ritu Verma)' },
      { id: 'aud-603', timestamp: 'Today 03:12 PM', actor: 'Deduplication Pipeline', action: 'Semantic Match Detected', details: 'Duplicate alert suppressed; calendar note updated' }
    ]
  },
  {
    id: 'scenario-7',
    title: 'Scenario 7: Delayed Third-Party Integration Recovery',
    subtitle: 'Batch telemetry upload after 12-hour internet outage with back-dated sorting',
    category: 'System Resilience',
    severity: 'Stable',
    senior: {
      id: 'SEN-2908',
      name: 'Dr. Ashok Sen',
      age: 76,
      city: 'Kolkata (Salt Lake)',
      livingArrangement: 'Living with spouse in apartment',
      baselineStatus: 'Active baseline',
      baselineConfidence: 'High',
      dataCoverageDays: 38,
      assignedCoordinator: 'Soma Mukherjee (Care Coordinator)',
      emergencyContact: 'Debashis Sen (Son) - +91 98300 XXXXX'
    },
    narrative: 'A broadband fiber cut in Salt Lake disconnected Dr. Sen’s home gateway for 12 hours. At 04:00 PM, connectivity was restored and a batch of 720 minute-by-minute sensor records arrived simultaneously. The system must process them according to their original timestamps without triggering a false "activity burst" anomaly.',
    recentObservations: [
      { time: '04:00 AM - 04:00 PM', source: 'Home Gateway', type: 'system', detail: 'Connectivity lost. Data cached on local gateway memory.' },
      { time: 'Today 04:05 PM', source: 'Batch Ingestion API', type: 'activity', detail: '720 cached telemetry packets ingested in 4.2 seconds.', isAbnormal: false },
      { time: 'Today 04:06 PM', source: 'Temporal Alignment Worker', type: 'system', detail: 'Observations chronologically re-indexed into proper historical hours.' }
    ],
    alert: {
      alertId: 'ALT-BATCH-07',
      title: 'Historical Batch Telemetry Successfully Re-aligned',
      priority: 'Low',
      detectedAt: 'Today 04:07 PM',
      engineUsed: 'Rule + Statistical',
      contributingObservations: [
        'Retrospective step analysis reveals Dr. Sen took 3,450 steps normally throughout the day',
        'Sleep last night was 6.9 hours',
        'No actual emergency or anomaly occurred during the 12-hour transmission outage'
      ],
      baselineReference: 'Historical baseline intact. Ingestion pipeline sorted by observation_timestamp rather than created_at.',
      missingOrConflictingData: ['Data gap resolved.'],
      rationale: 'Robust pipeline avoided misinterpreting sudden batch ingestion as an acute behavioral anomaly. All metrics confirmed within baseline limits upon temporal re-indexing.',
      suggestedAction: 'No coordinator call needed. System logs gateway reconnect and clears previous "Communication Stale" warning.'
    },
    initialAuditLog: [
      { id: 'aud-701', timestamp: 'Today 04:00 AM', actor: 'Heartbeat Monitor', action: 'Connection Dropped', details: 'Gateway GW-SL-09 unreachable' },
      { id: 'aud-702', timestamp: 'Today 04:05 PM', actor: 'Gateway Reconnect', action: 'Batch Ingest Started', details: 'Ingested 720 time-series packets' },
      { id: 'aud-703', timestamp: 'Today 04:07 PM', actor: 'Baseline Re-evaluator', action: 'Baseline Cleared', details: 'Re-indexed metrics normal. False alarm prevented.' }
    ]
  },
  {
    id: 'scenario-8',
    title: 'Scenario 8: False-Positive Candidate (Festival / Visitors)',
    subtitle: 'Sharp routine deviation caused by benign social event—coordinator verification',
    category: 'Edge Case Verification',
    severity: 'Review Required',
    senior: {
      id: 'SEN-8012',
      name: 'Mrs. Sarojini Verma',
      age: 74,
      city: 'Delhi (Vasant Kunj)',
      livingArrangement: 'Living independently in family apartment',
      baselineStatus: 'Active baseline',
      baselineConfidence: 'High',
      dataCoverageDays: 45,
      assignedCoordinator: 'Priya Sharma (Senior Care Lead)',
      emergencyContact: 'Amit Verma (Son) - +91 98110 XXXXX'
    },
    narrative: 'Mrs. Verma’s step count reached 9,200 steps (142% above normal median), she slept only 4.5 hours, and her routine was severely disrupted. A naive algorithm would flag an acute manic episode or pacing anxiety. In reality, it was Diwali and her grandchildren were visiting from Canada.',
    recentObservations: [
      { time: 'Yesterday', source: 'Smart Pedometer', type: 'activity', detail: 'High movement: 9,200 steps (Baseline: 3,800 steps, +142% spike).', isAbnormal: true },
      { time: 'Last Night', source: 'Sleep Tracker Sync', type: 'sleep', detail: 'Sleep duration: 4.5 hrs, bedtime delayed to 01:30 AM.', isAbnormal: true },
      { time: 'Today 09:15 AM', source: 'WhatsApp Check-in', type: 'checkin', detail: 'Check-in response: "Good morning! Grandkids arrived yesterday, very happy and busy."' }
    ],
    alert: {
      alertId: 'ALT-3310',
      title: 'Atypical Activity Spike & Delayed Bedtime (Benign Context)',
      priority: 'Low',
      detectedAt: 'Today 09:20 AM',
      engineUsed: 'Rule + Statistical',
      contributingObservations: [
        'Activity +142% above 30-day baseline median',
        'Bedtime shifted 4 hours later than habitual 09:30 PM routine',
        'Senior WhatsApp explicitly explains context: Family visiting for festival'
      ],
      baselineReference: 'Normal baseline 3,800 steps. Statistical anomaly model flagged high deviation z = +3.12.',
      missingOrConflictingData: ['None.'],
      rationale: 'Statistical models cannot know cultural or family calendars without human or contextual inputs. The explainable card presents the high z-score alongside the WhatsApp explanation, allowing the coordinator to instantly dismiss without panicking the family.',
      suggestedAction: 'Coordinator marks alert as "Dismissed - Benign Social Event (Family Visiting)". Temporarily widens variance tolerance for 3 days.'
    },
    initialAuditLog: [
      { id: 'aud-801', timestamp: 'Today 06:00 AM', actor: 'Statistical Anomaly Model', action: 'Anomaly Candidate Raised', details: 'Isolation Forest flagged z = +3.12 activity outlier' },
      { id: 'aud-802', timestamp: 'Today 09:15 AM', actor: 'WhatsApp Webhook', action: 'Contextual Message Received', details: 'Message parsed: "Grandkids arrived yesterday"' },
      { id: 'aud-803', timestamp: 'Today 09:20 AM', actor: 'Evidence Aggregator', action: 'Priority Downgraded', details: 'Context appended; tagged for quick coordinator dismissal' }
    ]
  }
];
