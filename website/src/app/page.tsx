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
    <div className="main-wrapper">
      {/* Navigation - Minimal & Assertive */}
      <nav style={{ borderBottom: '1px solid var(--border-subtle)', background: 'var(--bg-base)', position: 'sticky', top: 0, zIndex: 100 }}>
        <div className="container flex justify-between items-center py-6">
          <div className="logo" style={{ fontWeight: 800, fontSize: '1rem', letterSpacing: '-0.04em' }}>
            INVISIBLE <span style={{ color: 'var(--brand-accent)' }}>INFRA</span>
          </div>
          <div className="flex items-center gap-12">
            <div className="flex gap-8">
              <a href="#systems" style={{ textDecoration: 'none', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Systems</a>
              <a href="#audit" style={{ textDecoration: 'none', color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Audit</a>
            </div>
            <button className="btn btn-primary" style={{ padding: '0.6rem 1.2rem', fontSize: '0.7rem' }} onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}>
              GET INFRA AUDIT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero - Extreme Hierarchy & Whitespace */}
      <section className="section container">
        <div style={{ maxWidth: '900px' }}>
          <span className="eyebrow">Operational Infrastructure for Trades</span>
          <h1 style={{ lineHeight: 0.9 }}>
            Stop selling AI. Start installing <span style={{ color: 'var(--brand-accent)' }}>Systems.</span>
          </h1>
          <p className="mb-12" style={{ fontSize: '1.5rem', color: 'var(--text-main)', maxWidth: '70ch' }}>
            We install the automated infrastructure that makes contractors run 10 years ahead of their competitors. No consulting. No hype. Just better plumbing.
          </p>
          <div className="flex gap-6 items-center flex-mobile-col">
            <button className="btn btn-primary" onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}>
              REQUEST INFRA AUDIT
            </button>
            <a href="#systems" style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-dim)', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              See System Playbook ↓
            </a>
          </div>
        </div>

        <div className="hr" />

        {/* Improved Trust Strip - Credible Categories & Outcomes */}
        <div className="flex flex-col gap-8">
          <span style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-dim)', letterSpacing: '0.2em' }}>Deployed Infrastructure In</span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: 'var(--brand-accent)', fontSize: '1.25rem', fontWeight: 800 }}>98%</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Lead Response Rate</span>
            </div>
            <div className="panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: 'var(--brand-accent)', fontSize: '1.25rem', fontWeight: 800 }}>-30%</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Office Phone Volume</span>
            </div>
            <div className="panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: 'var(--brand-accent)', fontSize: '1.25rem', fontWeight: 800 }}>14 Days</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Avg. Install Time</span>
            </div>
            <div className="panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ color: 'var(--brand-accent)', fontSize: '1.25rem', fontWeight: 800 }}>$5k+</span>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)' }}>Found Claims/Job</span>
            </div>
          </div>
          <div className="flex gap-8 items-center opacity-40 grayscale" style={{ fontSize: '0.75rem', fontWeight: 700 }}>
            <span>ROOFING</span>
            <span>HVAC</span>
            <span>PLUMBING</span>
            <span>ELECTRICAL</span>
            <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
            <span>ROSCOE, IL</span>
          </div>
        </div>
      </section>

      {/* Infrastructure Systems - Architectural Layout */}
      <section id="systems" style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container section">
          <div className="mb-20">
            <span className="eyebrow">The System Stack</span>
            <h2>Invisible Infrastructure.</h2>
            <p>We don't "help" you. We install the systems that remove manual steps between a lead and a check.</p>
          </div>

          <div className="grid-features">
            <div className="feature-item">
              <span className="badge mb-4">01. Lead Response</span>
              <h3>60-Second Bridge</h3>
              <p style={{ fontSize: '1rem' }}>Instant, bilingual SMS response to every web lead. Beats the competition before they finish their coffee.</p>
            </div>
            <div className="feature-item">
              <span className="badge mb-4">02. Logistics</span>
              <h3>The "Pizza" Tracker</h3>
              <p style={{ fontSize: '1rem' }}>Automated CRM-triggered status updates. Customers know when materials land and when crews arrive—without calling your office.</p>
            </div>
            <div className="feature-item">
              <span className="badge mb-4">03. Financials</span>
              <h3>Auto-Supplementer</h3>
              <p style={{ fontSize: '1rem' }}>AI-backed documentation for storm damage. Analyzes photos and drafts insurance supplements instantly. Protects your net margins.</p>
            </div>
            <div className="feature-item">
              <span className="badge mb-4">04. Reputation</span>
              <h3>Review Engine</h3>
              <p style={{ fontSize: '1rem' }}>Hands-free review solicitation the second a job is marked "Closed" in your CRM. Reputation built while you sleep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Section - Credible & Structured */}
      <section id="audit" className="section container">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <span className="eyebrow">Teardown Request</span>
            <h2 className="mb-8">Request an Infrastructure Audit.</h2>
            <p className="mb-8">We will crawl your current lead response funnel and return a detailed teardown of your gaps. No sales pitch, just data.</p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4 items-start">
                <div style={{ padding: '0.25rem', border: '1px solid var(--brand-accent)', color: 'var(--brand-accent)', fontSize: '0.75rem' }}>✓</div>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Response Time Benchmarking</span>
                  <p style={{ fontSize: '0.875rem' }}>We'll test your current manual response and compare it to local winners.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div style={{ padding: '0.25rem', border: '1px solid var(--brand-accent)', color: 'var(--brand-accent)', fontSize: '0.75rem' }}>✓</div>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>Lead Leak Analysis</span>
                  <p style={{ fontSize: '0.875rem' }}>Identify exactly where web leads go cold after hours.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div style={{ padding: '0.25rem', border: '1px solid var(--brand-accent)', color: 'var(--brand-accent)', fontSize: '0.75rem' }}>✓</div>
                <div>
                  <span style={{ fontSize: '0.875rem', fontWeight: 700, display: 'block', marginBottom: '0.25rem' }}>System Map</span>
                  <p style={{ fontSize: '0.875rem' }}>A custom 24-month roadmap for your specific CRM (JobNimbus, AccuLynx, etc.).</p>
                </div>
              </div>
            </div>

            <div className="panel mt-12" style={{ borderLeft: '4px solid var(--brand-accent)', padding: '2rem' }}>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-main)', fontStyle: 'italic' }}>
                "You’ll receive a complete teardown of lead response, follow-up, and handoff gaps within 24 hours of submission."
              </p>
            </div>
          </div>

          <div className="reveal">
            {formStatus === 'success' ? (
              <div className="panel text-center py-20">
                <h3 className="mb-4" style={{ color: 'var(--brand-accent)' }}>Submission Received.</h3>
                <p>Infrastructure scan in progress. Check your inbox for the audit within 24 hours.</p>
              </div>
            ) : (
              <form className="panel" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label className="form-label">Business Identity</label>
                  <input className="form-input" type="text" placeholder="e.g. Winnebago Roofing" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Decision Maker Email</label>
                  <input className="form-input" type="email" placeholder="owner@business.com" required />
                </div>
                <div className="form-field">
                  <label className="form-label">Current CRM Stack</label>
                  <select className="form-input" required>
                    <option value="">Select CRM...</option>
                    <option value="jobnimbus">JobNimbus</option>
                    <option value="acculynx">AccuLynx</option>
                    <option value="hubspot">HubSpot</option>
                    <option value="other">Other / None</option>
                  </select>
                </div>
                <div className="form-field">
                  <label className="form-label">Primary Bottleneck</label>
                  <textarea className="form-input" rows={3} placeholder="Missed calls, slow estimates, etc..." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'Processing Identity...' : 'REQUEST INFRA AUDIT'}
                </button>
                <p className="mt-4 text-center" style={{ fontSize: '0.65rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Secure Data Handoff • No Sales Call Required
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer - Functional */}
      <footer className="border-t border-subtle bg-base" style={{ borderTop: '1px solid var(--border-subtle)', padding: '4rem 0' }}>
        <div className="container flex justify-between items-center flex-mobile-col gap-8">
          <div style={{ fontWeight: 800, fontSize: '0.875rem' }}>
            INVISIBLE <span style={{ color: 'var(--brand-accent)' }}>INFRA</span>
          </div>
          <div className="flex gap-8" style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            <span>Roscoe, IL</span>
            <span>Winnebago County</span>
            <span>Operating Systems for Trades</span>
          </div>
          <p style={{ fontSize: '0.65rem', color: 'var(--text-dim)' }}>© {new Date().getFullYear()}</p>
        </div>
      </footer>

      <style jsx>{`
        .flex-mobile-col {
          @media (max-width: 768px) {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
