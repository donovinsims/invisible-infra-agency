"use client";

import React, { useState } from 'react';

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulated connection to DenchClaw/OpenClaw backend
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <div className="container py-20">
      {/* Hero Section */}
      <section className="animate-fade-up text-center mb-16">
        <h1 style={{ fontFamily: 'var(--font-outfit)', marginBottom: '1.5rem' }}>
          Stop selling AI.<br />
          Start installing <span style={{ color: 'var(--brand-primary)' }}>Infrastructure</span>.
        </h1>
        <p className="mx-auto mb-8">
          We build the "Invisible Infrastructure" that makes local service businesses run 10 years ahead of their competitors. No hype. No retainers. Just systems that work.
        </p>
        <div className="flex justify-center gap-4">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            View Installation Plans
          </button>
          <button style={{ background: 'transparent', border: '1px solid var(--border-subtle)', color: 'var(--text-primary)' }}>
            Learn How It Works
          </button>
        </div>
      </section>

      {/* Problem/Solution Grid */}
      <section className="grid grid-cols-2 gap-8 mb-20">
        <div className="card animate-fade-up delay-100">
          <h3 className="mb-4">The Chaos You Know</h3>
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
            <li className="mb-2">✕ Missed calls during jobs.</li>
            <li className="mb-2">✕ Leads sitting in inboxes for days.</li>
            <li className="mb-2">✕ Estimates that never get sent.</li>
            <li className="mb-2">✕ Buried in admin work instead of running the business.</li>
          </ul>
        </div>
        <div className="card animate-fade-up delay-200">
          <h3 className="mb-4">The Infrastructure We Install</h3>
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)' }}>
            <li className="mb-2">✓ 60-Second Lead Response (Bilingual).</li>
            <li className="mb-2">✓ Automated Status Updates (The "Pizza Tracker").</li>
            <li className="mb-2">✓ Hands-free Review Generation.</li>
            <li className="mb-2">✓ AI Documentation for Insurance Claims.</li>
          </ul>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="animate-fade-up delay-300 text-center mb-20 bg-secondary p-16 rounded-3xl" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <h2 className="mb-8">Confidently Boring Growth</h2>
        <div className="grid grid-cols-3 gap-8">
          <div>
            <h4 className="mb-2">One-Time Setup</h4>
            <p>We build your infrastructure in 7–21 days. No endless retainers.</p>
          </div>
          <div>
            <h4 className="mb-2">Tool Agnostic</h4>
            <p>We leverage what works—whether it's simple automation or modern agent frameworks like Hermes.</p>
          </div>
          <div>
            <h4 className="mb-2">Flat Fee</h4>
            <p>One-time setup fee + $20–$50/mo monitoring to keep everything healthy.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-xl mx-auto animate-fade-up delay-300">
        <div className="text-center mb-8">
          <h2 className="mb-4">Fix Your Infrastructure</h2>
          <p>Based in Roscoe, Illinois. Serving Winnebago County and beyond.</p>
        </div>

        {formStatus === 'success' ? (
          <div className="card text-center py-12">
            <h3 className="mb-4" style={{ color: 'var(--accent-success)' }}>Infrastructure Logged.</h3>
            <p>We've received your request. Expect a text within 60 seconds (literally).</p>
          </div>
        ) : (
          <form className="card" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name">Business Name</label>
              <input type="text" id="name" required placeholder="e.g. Roscoe Roofing" />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="owner@business.com" />
            </div>
            <div className="mb-4">
              <label htmlFor="bottleneck">Biggest Bottleneck</label>
              <select id="bottleneck" required>
                <option value="">Select one...</option>
                <option value="missed-calls">Missed Calls / Slow Response</option>
                <option value="scheduling">Scheduling Chaos</option>
                <option value="reviews">Need More Reviews</option>
                <option value="admin">Too Much Admin Work</option>
              </select>
            </div>
            <button type="submit" disabled={formStatus === 'submitting'} style={{ width: '100%' }}>
              {formStatus === 'submitting' ? 'Logging Request...' : 'Request Free Audit'}
            </button>
          </form>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-subtle text-center text-sm text-secondary" style={{ borderTop: '1px solid var(--border-subtle)' }}>
        <p>© {new Date().getFullYear()} Invisible Infrastructure Agency. Roscoe, IL.</p>
      </footer>
    </div>
  );
}
