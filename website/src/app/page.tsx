"use client";

import React, { useState } from 'react';

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="py-6 border-b border-subtle bg-base sticky top-0 z-50 bg-opacity-90 backdrop-blur-sm" style={{ backgroundColor: 'var(--bg-base)' }}>
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-brand-primary" style={{ backgroundColor: 'var(--brand-primary)' }}></div>
            <span style={{ fontWeight: 800, fontSize: '1.25rem', letterSpacing: '-0.04em' }}>INVISIBLE INFRA</span>
          </div>
          <div className="flex items-center gap-12">
            <div className="nav-links flex gap-8">
              <a href="#how-it-works" className="btn-quiet" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>HOW IT WORKS</a>
              <a href="#pricing" className="btn-quiet" style={{ textDecoration: 'none', fontWeight: 600, fontSize: '0.875rem' }}>PRICING</a>
            </div>
            <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              GET FREE AUDIT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="section">
        <div className="container">
          <div style={{ maxWidth: '900px' }}>
            <p className="brand-text mb-4" style={{ fontWeight: 700, letterSpacing: '0.1em', fontSize: '0.875rem' }}>OPERATIONAL INFRASTRUCTURE FOR TRADES</p>
            <h1>Stop selling AI. Start installing <span className="brand-text">Systems that scale.</span></h1>
            <p className="text-secondary mb-12" style={{ fontSize: '1.25rem', lineHeight: '1.6' }}>
              We don't do "consulting." We install the automated infrastructure that handles missed calls, lead response, and job scheduling while your team stays in the field. 
            </p>
            <div className="flex gap-4 flex-mobile-col">
              <button className="btn btn-primary" style={{ padding: '1rem 2.5rem' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                REQUEST INFRASTRUCTURE AUDIT
              </button>
              <button className="btn btn-secondary" style={{ padding: '1rem 2.5rem' }}>
                VIEW IMPLEMENTATION GUIDE
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Trust & Proof Strip */}
      <section className="py-12 border-y border-subtle bg-surface" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="flex justify-between items-center flex-wrap gap-8">
            <div className="flex flex-col">
              <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>SERVICE AREA</span>
              <span style={{ fontWeight: 700 }}>WINNEBAGO COUNTY, IL</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>IMPLEMENTATION</span>
              <span style={{ fontWeight: 700 }}>7–21 DAYS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>AVERAGE RESULTS</span>
              <span style={{ fontWeight: 700 }}>30% ADMIN REDUCTION</span>
            </div>
            <div className="flex flex-col">
              <span className="text-muted" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>COMPATIBLE CRMS</span>
              <span style={{ fontWeight: 700 }}>JOBNIMBUS / ACCULYNX / HUBSPOT</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features - Schematic Layout */}
      <section id="how-it-works" className="section">
        <div className="container">
          <div className="mb-20">
            <h2 className="mb-4">Confidently Boring Growth.</h2>
            <p className="text-secondary">We install the "Invisible Infrastructure" that removes manual steps between a lead coming in and a job getting scheduled.</p>
          </div>

          <div className="grid grid-cols-2">
            <div className="infra-card">
              <h3 className="mb-4">60-Second Lead Response</h3>
              <p>Every lead from your website or phone line gets an immediate SMS response. We qualify the lead in English or Spanish and alert your PMs instantly.</p>
              <div className="mt-4 pt-4 border-t border-subtle" style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                ELIMINATES: LEAD DECAY & MISSED OPPORTUNITIES
              </div>
            </div>
            <div className="infra-card">
              <h3 className="mb-4">Automated Status Pipeline</h3>
              <p>The "Pizza Tracker" for local service. Your customers get proactive updates on material deliveries, crew arrivals, and job completion without a single phone call.</p>
              <div className="mt-4 pt-4 border-t border-subtle" style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                ELIMINATES: "WHERE IS MY CREW?" PHONE CALLS
              </div>
            </div>
            <div className="infra-card">
              <h3 className="mb-4">Vision-Based Documentation</h3>
              <p>We install AI agents that analyze site photos to identify insurance supplements and installation errors in real-time. Recover 15% more value on every claim.</p>
              <div className="mt-4 pt-4 border-t border-subtle" style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                ELIMINATES: LOST PROFITS FROM POOR DOCUMENTATION
              </div>
            </div>
            <div className="infra-card">
              <h3 className="mb-4">Review Referral Engine</h3>
              <p>The moment a job is marked "Complete" in your CRM, our systems trigger review requests and hyper-local neighbor referrals automatically.</p>
              <div className="mt-4 pt-4 border-t border-subtle" style={{ fontSize: '0.875rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                ELIMINATES: MANUAL REPUTATION MANAGEMENT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Implementation Info */}
      <section id="pricing" className="section bg-surface" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="grid grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="mb-6">The 21-Day Install</h2>
              <p className="mb-8 text-secondary">We don't sell software licenses. We sell outcomes. We spend time understanding how your business actually runs, then we install the systems that remove the bottlenecks.</p>
              <ul style={{ listStyle: 'none', display: 'grid', gap: '1rem' }}>
                <li className="flex gap-3 items-center">
                  <div className="w-1.5 h-1.5 bg-brand-primary"></div>
                  <span>One-time setup fee (Strictly scoped)</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-1.5 h-1.5 bg-brand-primary"></div>
                  <span>$20–$50/mo monitoring fee</span>
                </li>
                <li className="flex gap-3 items-center">
                  <div className="w-1.5 h-1.5 bg-brand-primary"></div>
                  <span>No vendor lock-in. You own the systems.</span>
                </li>
              </ul>
            </div>
            <div className="infra-card bg-base" style={{ backgroundColor: 'var(--bg-base)' }}>
              <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-strong)' }}>
                <h3 className="mb-2">Phase 1: Diagnosis</h3>
                <p style={{ fontSize: '0.875rem' }}>We crawl your site, review your CRM workflows, and identify your "lead leaks."</p>
              </div>
              <div style={{ paddingBottom: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-strong)' }}>
                <h3 className="mb-2">Phase 2: Installation</h3>
                <p style={{ fontSize: '0.875rem' }}>We build the Zaps, Agents, and prompts. We connect your website to your backend.</p>
              </div>
              <div>
                <h3 className="mb-2">Phase 3: Activation</h3>
                <p style={{ fontSize: '0.875rem' }}>Your team is trained. The system is live. Lead response is now sub-60 seconds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Form Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="grid grid-cols-2 gap-20">
            <div>
              <h2 className="mb-6">Get Your Infrastructure Audit</h2>
              <p className="text-secondary mb-8">We will perform a technical teardown of your website, lead response time, and CRM handoff gaps. You'll get a concrete action plan within 24 hours.</p>
              
              <div className="infra-card" style={{ borderLeft: '4px solid var(--brand-primary)' }}>
                <p style={{ fontWeight: 600, color: 'var(--text-main)', marginBottom: '1rem' }}>The Audit Includes:</p>
                <ul style={{ listStyle: 'none', display: 'grid', gap: '0.75rem', fontSize: '0.875rem' }}>
                  <li>✓ Speed-to-lead benchmark test</li>
                  <li>✓ Mobile conversion friction report</li>
                  <li>✓ Automation opportunity roadmap</li>
                  <li>✓ Estimated ROI calculation</li>
                </ul>
              </div>
            </div>

            <div>
              {formStatus === 'success' ? (
                <div className="infra-card text-center py-20" style={{ border: '2px solid var(--brand-primary)' }}>
                  <h3 className="mb-4">Audit Requested.</h3>
                  <p>Our team is already beginning the crawl. Check your inbox for your 24-hour teardown report.</p>
                </div>
              ) : (
                <form className="infra-card" onSubmit={handleSubmit}>
                  <div className="field-group">
                    <label htmlFor="biz-name">Business Name</label>
                    <input type="text" id="biz-name" placeholder="e.g. Winnebago Windows" required />
                  </div>
                  <div className="field-group">
                    <label htmlFor="email">Owner/Manager Email</label>
                    <input type="email" id="email" placeholder="name@yourbusiness.com" required />
                  </div>
                  <div className="field-group">
                    <label htmlFor="crm">Primary CRM Software</label>
                    <select id="crm" required>
                      <option value="">Select current software...</option>
                      <option value="jobnimbus">JobNimbus</option>
                      <option value="acculynx">AccuLynx</option>
                      <option value="hubspot">HubSpot</option>
                      <option value="other">Other / None</option>
                    </select>
                  </div>
                  <div className="mb-8">
                    <p className="text-muted" style={{ fontSize: '0.875rem' }}>
                      <strong>Reassurance:</strong> Your data is used strictly for the audit. No sales spam. We'll send your report within 24 business hours.
                    </p>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem' }} disabled={formStatus === 'submitting'}>
                    {formStatus === 'submitting' ? 'PROCESSING AUDIT...' : 'REQUEST FREE 24-HOUR AUDIT'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-subtle">
        <div className="container flex justify-between items-center flex-wrap gap-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-brand-primary"></div>
            <span style={{ fontWeight: 800, letterSpacing: '-0.04em' }}>INVISIBLE INFRA</span>
          </div>
          <p className="text-muted" style={{ fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} ROSCOE, IL. BUILT FOR THE TRADES.
          </p>
          <div className="flex gap-8">
            <a href="#" className="btn-quiet" style={{ fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none' }}>TWITTER</a>
            <a href="#" className="btn-quiet" style={{ fontSize: '0.75rem', fontWeight: 700, textDecoration: 'none' }}>LINKEDIN</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
