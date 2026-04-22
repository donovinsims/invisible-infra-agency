# Agent Framework: AI Infra Implementation Guide for [Client Name]

This guide outlines how to leverage AI agents (like Hermes or OpenClaw) to build autonomous "Invisible Infrastructure" for [Client Name].

## 1. Implementation Ideas

### A. The "Data Advocate" Agent
- **Function:** Analyzes field data/photos to generate readiness reports.
- **Trigger:** PM uploads data to a dedicated thread.
- **Output:** A structured summary report.

### B. The "Lead Triage" Agent
- **Function:** 24/7 qualification of web and SMS leads.
- **Trigger:** New lead from website or SMS.
- **Output:** Qualifies the lead and books directly into the PM's calendar.

### C. The "Status Tracker" Agent
- **Function:** Proactively updates customers on job milestones.
- **Trigger:** CRM status change.
- **Output:** Automated SMS updates to the customer.

### D. The "Automated Supplement" Agent
- **Function:** Identifies missing items and drafts requests based on field data.
- **Trigger:** PM flags an issue/uploads photos.
- **Output:** Pre-filled email requests with attached documentation.

### E. The "Vision-Based QC" Agent
- **Function:** Automatically verifies critical installation points from photos.
- **Trigger:** Crew uploads close-out photos.
- **Output:** Pass/fail notification based on quality standards.

### F. The "Margin-Guard" Agent
- **Function:** Monitors material prices and alerts to optimize procurement.
- **Trigger:** Routine check of material prices.
- **Output:** Email alert for price changes.

## 2. Technical Stack
1. **Hosting:** Serverless (Modal, Daytona) or local Daemon (OpenClaw).
2. **Messaging:** Twilio (SMS) or WhatsApp Business API.
3. **Integration:** Custom API connections or tools interacting with [Client CRM].
4. **Personality:** "Confidently Boring" – Professional, helpful, practical.

## 3. Pricing Strategy (Example)
| Agent Type | One-Time Setup | Monthly Monitoring |
| :--- | :--- | :--- |
| **Lead Triage** | $2,500 - $4,000 | $35/mo |
| **Status Tracker** | $1,500 - $2,500 | $20/mo |
| **Vision-Based QC** | $3,000 - $5,000 | $60/mo |

## 4. The Pitch
> "[Decision Maker], your PMs are great at their craft, but they're expensive receptionists. We install 'Invisible Infrastructure'—AI agents that handle follow-ups, scheduling, and status updates so your team stays focused on the work that pays. It's not magic; it's just better plumbing for your business."
