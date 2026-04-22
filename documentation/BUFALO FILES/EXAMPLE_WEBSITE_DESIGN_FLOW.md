# Bufalo AI Infra ROI Calculator - Design & Planning

## Quiz Flow

### Question 1: Weekly Web Leads
- **Type:** Select/Radio
- **Options:** 
  - 0-5 leads/week
  - 6-15 leads/week
  - 16-30 leads/week
  - 30+ leads/week
- **Purpose:** Determines if Lead Triage agent is relevant

### Question 2: Current CRM Software
- **Type:** Select
- **Options:**
  - JobNimbus
  - AccuLynx
  - HubSpot
  - Other/None
- **Purpose:** Determines integration complexity and Auto-Supplement relevance

### Question 3: Spanish-Speaking Customer Percentage
- **Type:** Slider or Select
- **Options:** 0%, 1-25%, 26-50%, 51-75%, 76-100%
- **Purpose:** Determines if Real-Time Bridge and Bilingual Lead Triage agents are relevant

### Question 4: Biggest Project Management Time Drain
- **Type:** Multi-select (choose up to 3)
- **Options:**
  - Lead follow-up and qualification
  - Customer status updates and communication
  - Job documentation and photo management
  - Insurance claim and supplement handling
  - Crew coordination and scheduling
  - Material procurement and pricing
- **Purpose:** Determines which agents solve their specific pain points

---

## Agent Matching Logic

| Agent | Triggered By | ROI Focus |
| :--- | :--- | :--- |
| **Lead Triage** | 6+ weekly leads | Reduce lead response time to <5 min |
| **Status Tracker** | Any selection | Reduce office phone calls by 30% |
| **Bilingual Lead Triage** | 26%+ Spanish-speaking customers | Capture Spanish-speaking market 24/7 |
| **Auto-Supplement** | "Insurance claim handling" selected | Recover 10-20% of claim value |
| **Vision QC** | "Job documentation" selected | Reduce warranty callbacks by 40% |
| **Storm-Pulse** | Any selection | Proactive retention after weather events |
| **Real-Time Bridge** | 26%+ Spanish-speaking customers | Reduce re-work from language barriers |
| **Margin-Guard** | "Material procurement" selected | Protect margins in inflationary environment |

---

## ROI Calculation Formulas

### Lead Triage Agent
- **Time Saved:** (Weekly leads × 15 min per lead) / 60 = hours/week
- **Monthly Value:** Hours/week × 4 weeks × $75/hr (avg PM rate) = $/month
- **Leads Recovered:** (Lead response time improvement) × (conversion rate uplift of 15%) = additional leads/month

### Status Tracker Agent
- **Time Saved:** 5 hours/week (estimated from 30% phone call reduction)
- **Monthly Value:** 5 × 4 × $75/hr = $1,500/month

### Auto-Supplement Agent
- **Leads Recovered:** (Average job value × 15% supplement recovery) × (jobs/month)
- **Monthly Value:** Leads recovered × average supplement value

### Vision QC Agent
- **Warranty Reduction:** 40% reduction in callbacks
- **Monthly Value:** (Current warranty cost/month × 40%)

---

## Visual Design System (Mobile-First)

### Mobile-First Principles
- **Primary breakpoint:** 375px (iPhone SE) as minimum
- **Touch targets:** Minimum 44px × 44px for all interactive elements
- **Spacing:** Generous vertical spacing for touch comfort
- **Typography:** Larger base sizes (16px+) for readability on small screens
- **Layout:** Single-column vertical flow, no sidebars or complex grids
- **Interactions:** Swipe, tap, and scroll optimized; no hover states as primary interaction

## Visual Design System

### Color Palette
- **Primary:** #1F2937 (Dark slate - trust, professionalism)
- **Accent:** #3B82F6 (Bright blue - action, energy)
- **Success:** #10B981 (Green - positive outcomes)
- **Neutral:** #F3F4F6 (Light gray - backgrounds)
- **Text:** #111827 (Dark gray - primary text)

### Typography (Mobile-First)
- **Headings:** Inter Bold, 28px (h1 on mobile), 20px (h2 on mobile), 16px (h3 on mobile)
- **Body:** Inter Regular, 16px (minimum for readability)
- **Small:** Inter Regular, 14px
- **Desktop scaling:** Headings scale up to 32px/24px/18px on screens >768px

### Spacing System (Mobile-First)
- **Base unit:** 8px
- **Mobile padding:** 16px (sides), 20px (vertical)
- **Mobile margins:** 16px, 24px, 32px
- **Card padding:** 20px (mobile), 24px (desktop)
- **Touch spacing:** 12px minimum between interactive elements

### Animations (Mobile-Optimized)
- **Fade-in:** 300ms ease-out
- **Slide-up:** 400ms cubic-bezier(0.34, 1.56, 0.64, 1) (GPU-accelerated)
- **Progress bar:** 600ms ease-in-out
- **Page transitions:** 250ms (reduced for mobile performance)
- **Reduced motion:** Respect `prefers-reduced-motion` for accessibility

---

## Data Model

### quiz_responses Table
```
id: int (PK)
userId: int (FK to users)
weeklyLeads: varchar (enum)
crm: varchar (enum)
spanishSpeakingPercentage: varchar (enum)
painPoints: json (array of strings)
createdAt: timestamp
```

### agent_recommendations Table
```
id: int (PK)
quizResponseId: int (FK)
agentName: varchar
relevanceScore: int (0-100)
estimatedTimeSaved: decimal (hours/week)
estimatedMonthlyValue: decimal
createdAt: timestamp
```

### demo_requests Table
```
id: int (PK)
name: varchar
email: varchar
quizResponseId: int (FK)
createdAt: timestamp
```
