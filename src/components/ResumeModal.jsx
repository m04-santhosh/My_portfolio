import React, { useEffect } from 'react';
import { X, Download, ExternalLink, Mail, Phone, MapPin, GraduationCap, Code, Cpu } from 'lucide-react';
import { personalInfo, projects, skillCategories } from '../data/portfolioData';

export default function ResumeModal({ onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" style={{ maxWidth: '780px' }} onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>Resume Preview</h3>
            <div style={{ fontSize: '0.8rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)' }}>
              Santhosh_M_Resume.pdf
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <a
              href={personalInfo.resumeUrl}
              download="Santhosh_M_Resume.pdf"
              className="btn btn-primary btn-sm"
            >
              <Download size={14} />
              <span>Download PDF</span>
            </a>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="modal-body" style={{ background: 'rgba(10, 13, 20, 0.95)' }}>
          {/* Header section in Resume */}
          <div style={{ borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              {personalInfo.name}
            </h2>
            <div style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', fontWeight: 600, marginTop: '0.2rem' }}>
              {personalInfo.role}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.2rem', marginTop: '0.75rem', fontSize: '0.825rem', color: 'var(--text-secondary)' }}>
              <span>📍 {personalInfo.location}</span>
              <span>📧 {personalInfo.email}</span>
              <a href={personalInfo.github} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                🐙 github.com/m04-santhosh
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" style={{ color: 'var(--text-secondary)' }}>
                💼 linkedin.com/in/santhu1004
              </a>
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="modal-section-title">// Education</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
              <div>
                <strong style={{ color: 'var(--text-primary)' }}>{personalInfo.education.degree}</strong>
                <div style={{ color: '#38bdf8', fontSize: '0.85rem' }}>Specialization: {personalInfo.education.specialization}</div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{personalInfo.education.institution}</div>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                {personalInfo.education.period}
              </div>
            </div>
          </div>

          {/* Core Projects */}
          <div>
            <div className="modal-section-title">// Selected Engineered Projects</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {projects.slice(0, 3).map((p) => (
                <div key={p.id} style={{ background: 'rgba(255,255,255,0.02)', padding: '0.85rem', borderRadius: '8px', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <strong style={{ color: 'var(--text-primary)', fontSize: '0.95rem' }}>{p.name}</strong>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--accent-cyan)' }}>
                      {p.techStack.slice(0, 3).join(' • ')}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
                    {p.shortDesc}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Overview */}
          <div>
            <div className="modal-section-title">// Technical Skills</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.75rem', fontSize: '0.825rem' }}>
              {skillCategories.map((cat) => (
                <div key={cat.name}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.2rem' }}>
                    {cat.name}:
                  </strong>
                  <span style={{ color: 'var(--text-secondary)' }}>
                    {cat.skills.join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            To update or replace this CV, place a fresh file at <code className="font-mono">/public/resume.pdf</code>.
          </span>
          <a
            href={personalInfo.resumeUrl}
            download="Santhosh_M_Resume.pdf"
            className="btn btn-primary btn-sm"
          >
            <Download size={14} />
            <span>Download PDF Document</span>
          </a>
        </div>
      </div>
    </div>
  );
}
