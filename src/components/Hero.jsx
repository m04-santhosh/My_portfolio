import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileDown, 
  Mail, 
  MapPin, 
  Cpu, 
  Code, 
  Database, 
  ChevronDown,
  Sparkles,
  Terminal as TerminalIcon
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Hero({ onOpenResume }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Headline & Calls to Action */}
          <div className="hero-content">
            <div className="hero-meta">
              <span className="status-pill">
                <span className="status-dot"></span>
                <span>{personalInfo.status}</span>
              </span>
              <span className="hero-location">
                <MapPin size={14} />
                <span>{personalInfo.location}</span>
              </span>
            </div>

            <h2 className="hero-title-greeting">
              Hi, I'm <span className="hero-name">{personalInfo.name}</span>.
            </h2>

            <h1 className="hero-role">
              <span className="text-gradient">AI & Full-Stack</span> Developer
            </h1>

            <p className="hero-description">
              {personalInfo.tagline}
            </p>

            <div className="hero-cta-group">
              <button 
                onClick={() => scrollTo('projects')} 
                className="btn btn-primary"
              >
                <span>View My Projects</span>
                <ArrowRight size={17} />
              </button>

              <button 
                onClick={onOpenResume} 
                className="btn btn-secondary"
              >
                <FileDown size={17} />
                <span>Download Resume</span>
              </button>
            </div>

            <div className="hero-social-links">
              <span className="hero-social-label">Connect:</span>
              <a 
                href={personalInfo.github} 
                target="_blank" 
                rel="noreferrer noopener"
                className="btn-icon"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={18} />
              </a>

              <a 
                href={personalInfo.linkedin} 
                target="_blank" 
                rel="noreferrer noopener"
                className="btn-icon"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={18} />
              </a>

              <a 
                href={`mailto:${personalInfo.email}`}
                className="btn-icon"
                title="Send an Email"
                aria-label="Send an Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right Column: AI + Code + Data Visual Component */}
          <div className="hero-visual-container">
            <div className="hero-terminal-card">
              {/* Terminal Title Bar */}
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="terminal-dot dot-red"></span>
                  <span className="terminal-dot dot-yellow"></span>
                  <span className="terminal-dot dot-green"></span>
                </div>
                <div className="terminal-tab-title">
                  <TerminalIcon size={13} />
                  <span>santhosh-stack.config.ts</span>
                </div>
                <span className="font-mono" style={{ fontSize: '0.7rem', color: '#10b981' }}>● READY</span>
              </div>

              {/* Terminal Body with Interactive AI + Code + Data Pillars */}
              <div className="terminal-body">
                {/* 3 Pillar Matrix Nodes */}
                <div className="developer-matrix-grid">
                  <div className="matrix-node">
                    <div className="matrix-icon-wrap">
                      <Cpu size={18} />
                    </div>
                    <div className="matrix-title">AI & ML</div>
                    <div className="matrix-sub">XGBoost • CV</div>
                  </div>

                  <div className="matrix-node">
                    <div className="matrix-icon-wrap">
                      <Code size={18} />
                    </div>
                    <div className="matrix-title">Full-Stack</div>
                    <div className="matrix-sub">FastAPI • React</div>
                  </div>

                  <div className="matrix-node">
                    <div className="matrix-icon-wrap">
                      <Database size={18} />
                    </div>
                    <div className="matrix-title">Data</div>
                    <div className="matrix-sub">Pipelines • SQL</div>
                  </div>
                </div>

                {/* Developer Profile Monogram / Architecture preview snippet */}
                <div className="terminal-code-block">
                  <div>
                    <span className="code-keyword">const </span>
                    <span className="code-fn">developer</span> = &#123;
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">name:</span> <span className="code-str">"{personalInfo.name}"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">focus:</span> <span className="code-str">"AI Systems & Full-Stack Apps"</span>,
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">flagships:</span> [
                    <span className="code-str">"NAVISCAPE"</span>, 
                    <span className="code-str">"TrustGuard"</span>, 
                    <span className="code-str">"UDIP"</span>
                    ],
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">coreStack:</span> [<span className="code-str">"Python"</span>, <span className="code-str">"FastAPI"</span>, <span className="code-str">"React"</span>],
                  </div>
                  <div style={{ paddingLeft: '1.2rem' }}>
                    <span className="code-prop">buildsRealProducts:</span> <span className="code-keyword">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Live Engineering Status */}
                <div className="terminal-status-footer font-mono">
                  <span>Engineered with precision</span>
                  <span style={{ color: 'var(--accent-cyan)' }}>B.E. CSE (AI & DS) '27</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a 
        href="#about" 
        onClick={(e) => { e.preventDefault(); scrollTo('about'); }}
        className="scroll-indicator"
        aria-label="Scroll down to About section"
      >
        <span>EXPLORE</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </a>
    </section>
  );
}
