# Hermes Agent: AI Infra Implementation Guide for Bufalo Contracting

This guide outlines how to leverage **Hermes Agent** (by Nous Research) to build autonomous "Invisible Infrastructure" for Bufalo Contracting. Hermes is uniquely suited for this because it can run serverless (Modal/Daytona), integrate with 15+ messaging platforms (WhatsApp/SMS), and use MCP tools to interact with CRMs and local data.

---

## 1. Implementation Ideas (The "Boring" Agents)

### A. The "Insurance Advocate" Agent (Existing)
- **Function:** Analyzes storm damage photos and cross-references them with local weather data (via MCP) to generate a "Claim Readiness Report" for the PM.
- **How it works:** 
  1. **Trigger:** PM uploads photos to a dedicated Telegram/WhatsApp thread.
  2. **Tools:** Vision (to analyze photos), Weather MCP (to find storm dates), CRM MCP (to pull customer history).
  3. **Output:** A structured PDF summary the PM can show the insurance adjuster on-site.
- **Hermes Feature:** Use **Skills System** to teach it Bufalo's specific "Excellence is Our Edge" inspection criteria.

### B. The "Bilingual Lead Triage" Agent (Existing)
- **Function:** 24/7 qualification of web and SMS leads in English and Spanish.
- **How it works:**
  1. **Trigger:** New lead from website or SMS.
  2. **Tools:** Messaging Gateway (WhatsApp/SMS), CRM MCP (to check for duplicate leads).
  3. **Output:** Qualifies the lead (roof age, leak status, insurance provider) and books an inspection directly into the PM's calendar.
- **Hermes Feature:** **Voice Mode** can be used for automated outbound "Speed-to-Lead" calls if the lead doesn't respond to SMS.

### C. The "Pizza Tracker" Status Agent (Existing)
- **Function:** Proactively updates customers on job milestones without human intervention.
- **How it works:**
  1. **Trigger:** CRM status change (e.g., "Materials Delivered").
  2. **Tools:** CRM MCP, Messaging Gateway.
  3. **Output:** "Hi [Name], your shingles were just delivered to your driveway. Our crew will be there at 7 AM tomorrow. - Bufalo Bot."
- **Hermes Feature:** **Scheduled Automations (Cron)** to check for status changes every 15 minutes.

### D. The "Auto-Supplement" Agent (New)
- **Function:** Automatically identifies and drafts insurance supplement requests based on on-site photo documentation.
- **How it works:**
  1. **Trigger:** PM uploads photos of unexpected damage (e.g., rotted decking, extra shingle layers) to a dedicated chat.
  2. **Tools:** Vision (to identify damage), Xactimate MCP (to suggest line items), Email MCP (to draft and send).
  3. **Output:** A pre-filled supplement request email to the insurance adjuster, with photos attached.
- **Hermes Feature:** **Memory System** to learn common supplement scenarios and adjusters' preferred formats.

### E. The "Vision-Based QC" Agent (New)
- **Function:** Ensures job quality by automatically verifying critical installation points from crew photos.
- **How it works:**
  1. **Trigger:** Crew uploads 
close-out photos of critical installation points (e.g., flashing, valleys) to a dedicated chat.
  2. **Tools:** Vision (to analyze photos against standards), Messaging Gateway (to alert crew/PM).
  3. **Output:** An immediate 
pass/fail notification. If a fail, it highlights the issue and requests re-submission.
- **Hermes Feature:** **Skills System** to embed Bufalo's specific QC checklist and visual standards.

### F. The "Storm-Pulse" Agent (New)
- **Function:** Proactively identifies storm-affected past clients and sends targeted outreach.
- **How it works:**
  1. **Trigger:** Local weather event (hail/wind) detected in Bufalo's service area (via Weather MCP).
  2. **Tools:** Weather MCP (for storm data), CRM MCP (to identify past clients in affected zip codes), Messaging Gateway (for SMS outreach).
  3. **Output:** Personalized SMS to past clients: "Hey [Name], big hail just hit your area. Want us to swing by for a free inspection tomorrow?"
- **Hermes Feature:** **Scheduled Automations (Cron)** to run after significant weather events.

### G. The "Real-Time Bridge" Agent (New)
- **Function:** Facilitates seamless, real-time communication between English-speaking office staff and Spanish-speaking crews.
- **How it works:**
  1. **Trigger:** Office staff posts job notes/instructions in English to a dedicated chat/CRM field.
  2. **Tools:** Translation API (integrated via MCP), Messaging Gateway (WhatsApp/SMS).
  3. **Output:** Hermes translates the message to Spanish and sends it to the crew lead. Crew lead replies in Spanish, and Hermes translates back to English for the office staff.
- **Hermes Feature:** **Context Files** to maintain job-specific terminology and ensure accurate translations.

### H. The "Margin-Guard" Agent (New)
- **Function:** Monitors material prices and alerts the owner to optimize procurement or adjust quotes.
- **How it works:**
  1. **Trigger:** Daily/weekly check of key material prices (e.g., shingles, lumber) from local suppliers (via Web Search MCP).
  2. **Tools:** Web Search MCP, Email MCP (for alerts).
  3. **Output:** Email alert to owner if price changes exceed a threshold, suggesting 
actions like "Buy Now" or "Adjust Quote Buffer."
- **Hermes Feature:** **Memory System** to track historical price data and identify trends.

---

## 2. How to Build (The Technical Stack)

1. **Hosting:** Use **Modal** or **Daytona**. 
   - *Why:* Serverless persistence. The agent "hibernates" when not in use, costing nearly $0 in idle time. This protects your margins on the $20-$50/mo monitoring fee.
2. **Messaging:** Connect via the **Messaging Gateway**.
   - *Setup:* Link Hermes to a Twilio (SMS) or WhatsApp Business API account.
3. **Integration:** Build/Use **MCP Servers**.
   - *Action:* Create a simple MCP server for JobNimbus or AccuLynx (Bufalo's likely CRMs) so Hermes can read/write job data. For new agents, additional MCPs for Weather APIs, Vision APIs, and Translation APIs will be needed.
4. **Personality:** Define the **SOUL.md**.
   - *Tone:* "Confidently Boring." Professional, helpful, non-hyped, and focused on practical restoration facts.
5. **Skills & Memory:** Leverage Hermes' **Skills System** for custom workflows and **Memory System** for persistent knowledge.

---

## 3. Pricing Strategy (One-Time + Monthly)

| Agent Type | One-Time Setup | Monthly Monitoring | Justification |
| :--- | :--- | :--- | :--- |
| **Lead Triage** | $2,500 - $4,000 | $35/mo | Covers WhatsApp API + Modal hosting + lead sync health. |
| **Insurance Advocate** | $3,500 - $5,000 | $50/mo | Covers Vision API costs + Weather data access + PDF generation. |
| **Status Tracker** | $1,500 - $2,500 | $20/mo | Covers CRM polling + SMS delivery logs. |
| **Auto-Supplement** | $4,000 - $6,000 | $75/mo | Covers Vision API, Xactimate integration, advanced skill development. |
| **Vision-Based QC** | $3,000 - $5,000 | $60/mo | Covers Vision API, custom skill training, image storage. |
| **Storm-Pulse** | $3,500 - $5,500 | $70/mo | Covers Weather API, CRM integration, targeted SMS campaigns. |
| **Real-Time Bridge** | $2,000 - $3,500 | $45/mo | Covers Translation API, multi-language messaging. |
| **Margin-Guard** | $2,500 - $4,000 | $55/mo | Covers Web Scraping/API for pricing, alert system. |

---

## 4. How to Position & Sell (The "Vibe" Way)

### The "Boring" Pitch
> "Andy, your PMs are great at roofs, but they're expensive receptionists. Every minute they spend texting 'we'll be there at 7 AM' is a minute they aren't closing a $20k insurance claim. We install 'Invisible Infrastructure'—AI agents that handle the follow-up, the scheduling, and the status updates while your team stays on the roof. It's not magic; it's just better plumbing for your business."

### Key Selling Points:
1. **Zero Idle Cost:** "You only pay for the work the agent actually does. If there are no leads, your cost is zero."
2. **Bilingual by Default:** "Capture the Spanish-speaking market 24/7 without hiring a bilingual night-shift admin."
3. **Insurance Accuracy:** "Our Advocate Agent ensures your PMs never walk into an adjustment without the data they need to win the claim."
4. **Uncover Hidden Profits:** "Our Auto-Supplement Agent finds the 10-20% of claim value you're currently leaving on the table."
5. **Guaranteed Quality:** "The Vision-Based QC Agent ensures every job meets your 'Excellence is Our Edge' standard, reducing warranty callbacks."
6. **First-Mover Advantage:** "The Storm-Pulse Agent gets you to storm-hit clients before your competitors even know it hailed."

### The "Wedge" Offer:
"Let's start with the **Status Tracker**. It's the lowest friction, reduces your office phone calls by 30% immediately, and we can have it live in 10 days. If it doesn't save you 5 hours of admin work in the first month, you don't pay the setup fee."

---

**Top 3 next actions I should take today:**
1. **Confirm the CRM:** Ask the salesperson "Do you guys use JobNimbus, AccuLynx, or something else?" (This determines which MCP we build).
2. **Set up a Modal account:** This will be your "hosting home" for the Hermes Agents.
3. **Draft the SOUL.md:** Use the "Confidently Boring" voice profile to define how the Bufalo Bot should speak.
