export type StatusType =
  | 'Implemented'
  | 'Tested'
  | 'Experimental'
  | 'In progress'
  | 'Planned'
  | 'Requires configuration'
  | 'Requires real-world validation';

export interface FeatureItem {
  id: string;
  code: string;
  title: string;
  category: 'core' | 'intelligence' | 'workflow' | 'communication' | 'governance';
  status: StatusType;
  summary: string;
  whatItDoes: string;
  whyItExists: string;
  whoUsesIt: string;
  infoNeeded: string[];
  howItWorks: string[];
  outputGenerated: string;
  howVerified: string;
  limitations: string[];
  demoInstructions: string;
}

export interface ScenarioEvent {
  time: string;
  source: string;
  type: 'activity' | 'sleep' | 'checkin' | 'medication' | 'family_report' | 'system' | 'call';
  detail: string;
  isAbnormal?: boolean;
}

export interface ScenarioItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  severity: 'Stable' | 'Review Required' | 'Urgent Attention';
  senior: {
    id: string;
    name: string;
    age: number;
    city: string;
    livingArrangement: string;
    baselineStatus: string;
    baselineConfidence: 'Provisional' | 'Medium' | 'High';
    dataCoverageDays: number;
    assignedCoordinator: string;
    emergencyContact: string;
  };
  narrative: string;
  recentObservations: ScenarioEvent[];
  alert: {
    alertId: string;
    title: string;
    priority: 'Low' | 'Medium' | 'High' | 'Critical';
    detectedAt: string;
    engineUsed: 'Deterministic Rule' | 'Isolation Forest Model' | 'Direct Human Report' | 'Rule + Statistical';
    contributingObservations: string[];
    baselineReference: string;
    missingOrConflictingData: string[];
    rationale: string;
    suggestedAction: string;
  };
  initialAuditLog: Array<{
    id: string;
    timestamp: string;
    actor: string;
    action: string;
    details: string;
  }>;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Product' | 'AI & Methodology' | 'Integrations' | 'Privacy & Safety' | 'Technical Architecture';
  tags: string[];
}

export interface ArchitectureLayer {
  id: string;
  number: number;
  name: string;
  role: string;
  technologies: string[];
  status: StatusType;
  description: string;
  inputs: string[];
  outputs: string[];
  guarantees: string[];
}

export interface DomainEntity {
  name: string;
  table: string;
  purpose: string;
  status: StatusType;
  fields: Array<{
    name: string;
    type: string;
    required: boolean;
    description: string;
  }>;
  relationships: string[];
  securityPolicy: string;
  retentionPolicy: string;
}

export interface ApiDoc {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE';
  endpoint: string;
  title: string;
  purpose: string;
  auth: string;
  status: StatusType;
  requestSchema?: Record<string, any>;
  responseSchema: Record<string, any>;
  statusCodes: Array<{ code: number; description: string }>;
}

export interface RoadmapItem {
  id: string;
  title: string;
  tier: 'Implemented' | 'In progress' | 'Planned' | 'Requires external setup' | 'Requires real-world validation';
  quarter: string;
  description: string;
  dependencies: string[];
  riskOrConstraint: string;
}
