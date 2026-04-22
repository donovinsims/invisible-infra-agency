"use client";

import React, { useState, useEffect } from 'react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 2000);
  };

  return (
    <div className="main-wrapper">
      {/* Background Pattern */}
      <div className="fixed-bg" style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        opacity: 0.03,
        backgroundImage: `radial-gradient(var(--text-main) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-glass border-b border-subtle py-4 backdrop-blur-md' : 'py-8'}`} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        padding: scrolled ? '1rem 0' : '2rem 0',
        backgroundColor: scrolled ? 'var(--bg-glass)' : 'transparent',
        borderBottom: scrolled ? '1px solid var(--border-subtle)' : 'none',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}>
        <div className="container flex justify-between items-center">
          <div className="logo" style={{ fontWeight: 800, fontSize: '1.5rem', letterSpacing: '-0.05em' }}>
            INVISIBLE <span style={{ color: 'var(--brand-accent)' }}>INFRA</span>
          </div>
          <div className="nav-links flex gap-8 items-center">
            <a href="#how-it-works" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>HOW IT WORKS</a>
            <a href="#pricing" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>PRICING</a>
            <button className="btn btn-secondary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }} onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              GET AUDIT
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="section-padding container flex flex-col items-center text-center mt-16">
        <div className="reveal stagger-1" style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'var(--brand-accent-glow)', border: '1px solid var(--border-vibrant)', borderRadius: '2rem', fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-accent)', marginBottom: '2rem', letterSpacing: '0.1em' }}>
          LOCAL SERVICE INFRASTRUCTURE
        </div>
        <h1 className="reveal stagger-2" style={{ marginBottom: '2rem' }}>
          Stop selling AI.<br />
          Start installing <span style={{ color: 'var(--brand-accent)' }}>Infrastructure.</span>
        </h1>
        <p className="reveal stagger-3 mx-auto mb-12" style={{ maxWidth: '700px' }}>
          We don't do "consulting." We install the automated systems that make contractors and service companies run 10 years ahead of their competition. 
        </p>
        <div className="reveal stagger-3 flex gap-4 flex-mobile-col">
          <button className="btn btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            REQUEST FREE INFRA AUDIT
          </button>
          <button className="btn btn-secondary">
            SEE OUR PLAYBOOK
          </button>
        </div>
      </header>

      {/* Trust Section */}
      <section className="container text-center mb-32 reveal stagger-3" style={{ opacity: 0.6 }}>
        <p style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: '2rem' }}>Trusted by local trades in</p>
        <div className="flex flex-wrap justify-center gap-12 items-center" style={{ fontWeight: 700, fontSize: '1.25rem' }}>
          <span>ROSCOE</span>
          <span style={{ color: 'var(--brand-accent)' }}>•</span>
          <span>ROCKFORD</span>
          <span style={{ color: 'var(--brand-accent)' }}>•</span>
          <span>WINNEBAGO</span>
          <span style={{ color: 'var(--brand-accent)' }}>•</span>
          <span>CHERRY VALLEY</span>
        </div>
      </section>

      {/* Features Grid */}
      <section id="how-it-works" className="section-padding bg-surface" style={{ backgroundColor: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="mb-20">
            <h2 className="mb-4">Confidently Boring Growth.</h2>
            <p>We replace manual steps with invisible infrastructure. No hype, just better plumbing.</p>
          </div>
          <div className="grid-2">
            <div className="feature-card reveal stagger-1">
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>⚡️</div>
              <h3 className="mb-4">60-Second Hook</h3>
              <p>Every lead from your site gets a text response in under a minute. English or Spanish. We beat the competition while you're still on the roof.</p>
            </div>
            <div className="feature-card reveal stagger-2">
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>📦</div>
              <h3 className="mb-4">The Pizza Tracker</h3>
              <p>Automated SMS updates for every milestone. "Materials delivered," "Crew arriving tomorrow," "Job complete." Zero office calls required.</p>
            </div>
            <div className="feature-card reveal stagger-3">
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>📄</div>
              <h3 className="mb-4">Insurance Advocate</h3>
              <p>AI documentation that analyzes storm damage photos and drafts supplement requests instantly. Recover 15-20% more on every claim.</p>
            </div>
            <div className="feature-card reveal stagger-1">
              <div style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>⭐</div>
              <h3 className="mb-4">Review Engine</h3>
              <p>The second a job is marked "Complete" in your CRM, the review sequence triggers. 5-star reputations built on autopilot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Process */}
      <section id="pricing" className="section-padding container">
        <div className="glass-panel text-center">
          <h2 className="mb-8">How We Work</h2>
          <div className="grid-2" style={{ textAlign: 'left' }}>
            <div>
              <h4 className="mb-2" style={{ color: 'var(--brand-accent)' }}>7-21 DAY INSTALL</h4>
              <p>We spend time understanding your leaks, then we install the systems. One-time setup fee.</p>
            </div>
            <div>
              <h4 className="mb-2" style={{ color: 'var(--brand-accent)' }}>$20-$50 MONITORING</h4>
              <p>A small monthly fee to keep the plumbing healthy. No vendor lock-in. No bloated tech stack.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding container">
        <div className="grid-2 gap-16">
          <div className="reveal">
            <h2 className="mb-6">Is your infrastructure leaking money?</h2>
            <p className="mb-8">We'll crawl your site, review your current response times, and show you exactly where leads are falling through the cracks. For free.</p>
            <div style={{ padding: '2rem', background: 'var(--bg-surface)', borderLeft: '4px solid var(--brand-accent)', borderRadius: '0 var(--radius-sm) var(--radius-sm) 0' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--text-main)', marginBottom: '1rem' }}>"Most contractors lose 30% of their leads because they take 4 hours to call back. We fix that in a week."</p>
              <p style={{ fontSize: '0.875rem', fontWeight: 700 }}>— INVISIBLE INFRA TEAM</p>
            </div>
          </div>

          <div className="reveal">
            {formStatus === 'success' ? (
              <div className="glass-panel text-center py-20">
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                <h3 className="mb-4">Infrastructure Logged</h3>
                <p>We're already crawling your site. Expect an audit in your inbox soon.</p>
              </div>
            ) : (
              <form className="glass-panel" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Business Name</label>
                  <input type="text" placeholder="e.g. Winnebago Windows" required />
                </div>
                <div className="form-group">
                  <label>Owner Email</label>
                  <input type="email" placeholder="you@business.com" required />
                </div>
                <div className="form-group">
                  <label>Current CRM</label>
                  <select required>
                    <option value="">Select CRM...</option>
                    <option value="jobnimbus">JobNimbus</option>
                    <option value="acculynx">AccuLynx</option>
                    <option value="hubspot">HubSpot</option>
                    <option value="other">Other / None</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={formStatus === 'submitting'}>
                  {formStatus === 'submitting' ? 'ANALYZING...' : 'REQUEST FREE AUDIT'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="section-padding border-t border-subtle" style={{ borderTop: '1px solid var(--border-subtle)', background: 'var(--bg-surface)' }}>
        <div className="container flex justify-between items-center flex-mobile-col gap-8">
          <div className="logo" style={{ fontWeight: 800, fontSize: '1rem' }}>
            INVISIBLE INFRA
          </div>
          <p style={{ fontSize: '0.875rem' }}>© {new Date().getFullYear()} ROSCOE, ILLINOIS. WINNEBAGO COUNTY FIRST.</p>
          <div className="flex gap-4">
            <a href="#" style={{ color: 'var(--text-dim)' }}>TWITTER</a>
            <a href="#" style={{ color: 'var(--text-dim)' }}>LINKEDIN</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .main-wrapper {
          min-height: 100vh;
        }
        @media (max-width: 768px) {
          .flex-mobile-col {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
}
