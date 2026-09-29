import React from 'react';
import { GraduationCap, Code2, Bot, Rocket, CheckCircle2 } from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  GraduationCap: GraduationCap,
  Code2: Code2,
  Bot: Bot,
  Rocket: Rocket
};

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label font-mono">// 01. Background</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Engineering real-world software across the entire development lifecycle.
          </p>
        </div>

        <div className="about-grid">
          {/* Bio text */}
          <div className="about-bio-container">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index} className="about-bio-text">
                {paragraph}
              </p>
            ))}

            <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Specialized in AI/ML model deployment & end-to-end full-stack architectures.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Strong focus on data integrity, clean APIs, and responsive user experiences.</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.925rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--accent-cyan)', flexShrink: 0 }} />
                <span>Based in Bengaluru — India's premier technology and engineering ecosystem.</span>
              </div>
            </div>
          </div>

          {/* 4 Compact Highlights Cards */}
          <div className="about-highlights-grid">
            {aboutHighlights.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Code2;
              return (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon-wrap">
                    <IconComponent size={22} />
                  </div>
                  <h3 className="highlight-title">{item.title}</h3>
                  <div className="highlight-subtitle">{item.subtitle}</div>
                  <p className="highlight-desc">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
