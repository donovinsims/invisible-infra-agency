# [Client Name] AI Infra ROI Calculator - Design & Planning

## Quiz Flow
- **Question 1: Weekly Web Leads** (Determines if Lead Triage agent is relevant)
- **Question 2: Current CRM Software** (Determines integration complexity)
- **Question 3: Special Needs/Demographics** (Determines specific Agent applicability)
- **Question 4: Biggest Project Management Time Drain** (Determines which agents solve pain points)

## Agent Matching Logic
| Agent | Triggered By | ROI Focus |
| :--- | :--- | :--- |
| **Lead Triage** | High lead volume | Reduce lead response time |
| **Status Tracker** | Any selection | Reduce inbound status calls |
| **Auto-Doc** | Operations/Documentation selected | Recover lost value |
| **Vision QC** | Job documentation selected | Reduce warranty callbacks |

## ROI Calculation Formulas
- **Time Saved:** (Weekly leads × time per lead) / 60 = hours/week
- **Monthly Value:** Hours/week × 4 weeks × $HourlyRate
- **Leads Recovered:** Improved response time × conversion uplift = additional leads

## Visual Design System (Mobile-First)
- **Colors:** Primary, Accent, Success, Neutral, Text.
- **Typography:** Inter or equivalent, larger base sizes (16px+) for readability.
- **Spacing:** Generous touch targets (44px min).
- **Animations:** Fade-in, slide-up, progress bars (respect reduced motion).

## Data Model (Suggested)
- `quiz_responses`
- `agent_recommendations`
- `demo_requests`
