# Sahaara — Early Warning That Leads to Care

> **Coordinator-first wellbeing intelligence platform for older adults living at home.**  
> Built for **Deviathon 2.0** at GLA University · Problem statement by **Samarth Life Management Pvt. Ltd.**

---

## 📌 Executive Summary

Older adults living independently rarely experience sudden, unannounced declines. More often, subtle shifts in mobility, sleep, medication adherence, and appetite unfold quietly over days. 

Because observations are scattered across phone check-ins, family WhatsApp chats, pedometer logs, and manual coordinator notes, care teams struggle to connect these signals into timely action.

**Sahaara** solves this by following a disciplined pipeline:
$$\text{Observe} \longrightarrow \text{Understand} \longrightarrow \text{Detect} \longrightarrow \text{Explain} \longrightarrow \text{Review} \longrightarrow \text{Act} \longrightarrow \text{Follow up} \longrightarrow \text{Learn}$$

1. **Personal Baselines:** Computes expected rolling 14–30 day distributions per individual rather than enforcing arbitrary population cutoffs.
2. **Multi-Signal Fusion:** Correlates disparate behavioral and observational streams over sliding 72-hour windows.
3. **Explainable Evidence Cards:** Presents exactly what changed, the historical reference, and explicitly highlights missing or delayed data.
4. **Accessible Communication:** Integrates two-way WhatsApp messaging via official Meta Cloud API webhooks with zero app friction.
5. **Closed-Loop Follow-Up:** Mandates case ownership, phone check-in note capture, resolution tagging, and immutable cryptographic audit logging.

> ⚠️ **Non-Diagnostic Decision Support Notice:**  
> Sahaara is a care-coordination and wellbeing intelligence decision-support platform. It is strictly **not a medical diagnostic system** and never replaces qualified healthcare professionals or emergency services.

---

## 🚀 Key Pages & Information Architecture

The platform is implemented across 17 dedicated pages:

- **[`/`](src/app/page.tsx)** — Homepage with hero, coordinator console preview, 4-step transformation story, 5 core pillars, and 6-step lifecycle.
- **[`/problem`](src/app/problem/page.tsx)** — Demographic context (India LASI data), 6 operational breakdowns, deep dive into Senior B (Mrs. Sarojini Verma), and competitive market analysis.
- **[`/product`](src/app/product/page.tsx)** — Product overview, 5 distinct layers (Data, Intelligence, Communication, Workflow, Audit), stakeholder definitions, boundaries, and 10-step lifecycle.
- **[`/features`](src/app/features/page.tsx)** — Searchable, filterable directory covering all **17 platform features (A through Q)** with 10-point architectural specifications.
- **[`/why-sahaara`](src/app/why-sahaara/page.tsx)** — 9 core USPs and competitive positioning matrix comparing spreadsheets, reminder apps, SOS buttons, and remote dashboards.
- **[`/how-it-works`](src/app/how-it-works/page.tsx)** — 10-step operational workflow, 72-hour case progression timeline, and handling of 3 critical edge cases.
- **[`/demo`](src/app/demo/page.tsx)** — **Interactive Coordinator Simulator** with 8 seeded scenarios, live alert acknowledgement, follow-up call logging, and real-time audit log appending.
- **[`/ai-and-intelligence`](src/app/ai-and-intelligence/page.tsx)** — 9-layer intelligence architecture, dual engine comparison (Deterministic Rules vs Isolation Forest Anomaly Detection), and LLM guardrails.
- **[`/technology`](src/app/technology/page.tsx)** — Full-stack blueprint (Next.js 16, React 19, TypeScript, Tailwind CSS, Supabase PostgreSQL, Vercel edge deployment).
- **[`/developers`](src/app/developers/page.tsx)** — Relational data model for 9 domain entities, RLS policies, and copyable REST API contracts.
- **[`/integrations/whatsapp`](src/app/integrations/whatsapp/page.tsx)** — Inbound Meta Cloud API webhook flow with HMAC SHA-256 verification, sender whitelisting, and 6-state outbound delivery state machine.
- **[`/evaluation`](src/app/evaluation/page.tsx)** — Reproducible synthetic benchmark on 200 seniors over 90 days (18,000 senior-days) demonstrating precision, recall, and false alert reduction.
- **[`/trust-and-safety`](src/app/trust-and-safety/page.tsx)** — Digital consent tracking under India DPDP Act 2023 principles, RLS isolation, and verified edge-case policies.
- **[`/roadmap`](src/app/roadmap/page.tsx)** — Transparent capability tiers (*Implemented*, *Tested*, *Experimental*, *Requires External Setup*, *Requires Real-World Validation*).
- **[`/faq`](src/app/faq/page.tsx)** — 30+ categorized questions for families, coordinators, developers, and hackathon judges.
- **[`/about`](src/app/about/page.tsx)** — Deviathon 2.0 origin, Samarth Life Management challenge statement, engineering principles, and team configuration.
- **[`/contact`](src/app/contact/page.tsx)** — Validated demonstration request form and project contact channels.

---

## 🛠️ Technology Stack

- **Framework:** Next.js 16.4.3 (App Router, Turbopack)
- **Frontend Core:** React 19.3.0, TypeScript 5
- **Styling:** Tailwind CSS v4, Lucide React Icons
- **Database Architecture:** Supabase (PostgreSQL 15+) with Row-Level Security (RLS) & append-only audit triggers
- **Messaging:** Official Meta WhatsApp Cloud API webhooks with HMAC SHA-256 verification
- **Deployment Target:** Vercel Edge Network

---

## 🧪 Synthetic Benchmark Evaluation Results

Evaluated across **200 synthetic senior profiles** over **90 simulated days** (18,000 senior-days / Run ID: `EVAL-SYNTH-2026-10B`):

| Evaluation Metric | Rules-Only Baseline | Sahaara Combined Engine | Measured Delta |
|---|---|---|---|
| **Precision (PPV)** | 64.2% | **88.4%** | **+24.2%** |
| **Recall / Sensitivity** | 71.0% | **91.2%** | **+20.2%** |
| **False Alerts / Senior-Day** | 0.18 | **0.04** | **-77.8% (Burnout reduction)** |
| **Detection Lead Time** | 8.5 hrs | **28.2 hrs** | **+19.7 hrs earlier warning** |
| **Data Coverage Resilience** | 52.0% | **86.5%** | **+34.5%** |
| **Follow-Up SLA Completion** | 68.4% | **96.5%** | **+28.1%** |

*Disclaimer: Results from synthetic scenarios demonstrate software behavior under defined test conditions. They do not establish clinical effectiveness or guarantee early detection in real-world settings.*

---

## 💻 Getting Started Locally

### Prerequisites
- Node.js >= 20.x
- npm >= 10.x

### Installation & Development
```bash
# Clone the repository
git clone https://github.com/StrikerFr/sahaara-info.git
cd sahaara-info

# Install dependencies
npm install

# Run the local development server
npm run dev

# Run production build & verify type checking
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ⚖️ License & Ethical Attribution

Developed with care for **Deviathon 2.0** at GLA University, addressing the challenge statement by **Samarth Life Management Pvt. Ltd.**  
All personal personas, health records, and phone numbers in the demonstration environment are 100% deterministically generated synthetic fixtures.
