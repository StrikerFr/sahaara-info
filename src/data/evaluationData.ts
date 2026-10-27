export interface BenchmarkMetric {
  metric: string;
  unit: string;
  rulesOnly: number;
  combinedEngine: number;
  delta: string;
  interpretation: string;
}

export interface ScenarioDistribution {
  scenarioType: string;
  count: number;
  proportion: string;
  description: string;
}

export const evaluationDatasetMeta = {
  runId: 'EVAL-SYNTH-2026-10B',
  executionDate: 'October 2026',
  cohortSize: 200,
  durationDays: 90,
  totalSeniorDays: 18000,
  totalObservationEvents: 324000,
  seed: 42,
  reproducibleScript: 'npm run eval:synthetic',
  disclaimer: 'Results from synthetic scenarios demonstrate software behavior under defined test conditions. They do not establish clinical effectiveness or guarantee early detection in real-world settings.'
};

export const scenarioDistributions: ScenarioDistribution[] = [
  {
    scenarioType: 'Stable Routine (Controls)',
    count: 140,
    proportion: '70.0%',
    description: 'Individuals maintaining steady daily patterns with natural random Gaussian day-to-day fluctuations.'
  },
  {
    scenarioType: 'Gradual Correlated Decline',
    count: 25,
    proportion: '12.5%',
    description: 'Subtle simultaneous drift across activity (-40% to -65%), sleep fragmentation, and missed nutrition cues.'
  },
  {
    scenarioType: 'Acute Explicit Incident (Falls/SOS)',
    count: 15,
    proportion: '7.5%',
    description: 'Sudden hardware trigger or urgent family text reporting emergency or traumatic occurrence.'
  },
  {
    scenarioType: 'Missing Data & Sensor Outages',
    count: 10,
    proportion: '5.0%',
    description: 'Connectivity cuts, battery depletion, or phone unresponsiveness for 6 to 36 hours.'
  },
  {
    scenarioType: 'Benign Lifestyle Shift (Festivals/Travel)',
    count: 10,
    proportion: '5.0%',
    description: 'Elevated activity or shifted sleeping hours caused by visitors or holidays (potential false positive traps).'
  }
];

export const benchmarkMetrics: BenchmarkMetric[] = [
  {
    metric: 'Precision (PPV)',
    unit: '%',
    rulesOnly: 64.2,
    combinedEngine: 88.4,
    delta: '+24.2%',
    interpretation: 'Personal baselines and multi-signal grouping weeded out isolated benign spikes, cutting false leads by >60%.'
  },
  {
    metric: 'Recall / Sensitivity',
    unit: '%',
    rulesOnly: 71.0,
    combinedEngine: 91.2,
    delta: '+20.2%',
    interpretation: 'Combined engine captured insidious multi-signal declines where individual metrics stayed within normal bounds.'
  },
  {
    metric: 'False Alerts / Senior-Day',
    unit: 'rate',
    rulesOnly: 0.18,
    combinedEngine: 0.04,
    delta: '-77.8%',
    interpretation: 'Reduced alert frequency from 1 alert every 5 days per senior to 1 alert every 25 days, preventing coordinator burnout.'
  },
  {
    metric: 'Detection Lead Time',
    unit: 'hours',
    rulesOnly: 8.5,
    combinedEngine: 28.2,
    delta: '+19.7 hrs',
    interpretation: 'Early cross-signal warning flagged emerging patterns over 1 day before an explicit rule breach would have triggered.'
  },
  {
    metric: 'Data Coverage Resiliency',
    unit: '%',
    rulesOnly: 52.0,
    combinedEngine: 86.5,
    delta: '+34.5%',
    interpretation: 'Explicit uncertainty handling allowed sensible decisions even when 1 of 3 sensory channels was missing.'
  },
  {
    metric: 'Follow-Up Completion',
    unit: '%',
    rulesOnly: 68.4,
    combinedEngine: 96.5,
    delta: '+28.1%',
    interpretation: 'Integrated queue and mandatory call-outcome documentation ensured nearly zero unresolved cases.'
  }
];
