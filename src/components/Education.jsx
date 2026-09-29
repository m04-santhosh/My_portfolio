import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, CheckCircle, Sparkles } from 'lucide-react';
import { personalInfo, genuineAchievements } from '../data/portfolioData';

export default function Education() {
  const { education } = personalInfo;

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label font-mono">// 05. Education & Milestones</div>
          <h2 className="section-title">Academic & Engineering Highlights</h2>
          <p className="section-subtitle">
            Formal engineering foundation paired with proven project milestones.
          </p>
        </div>

        <div className="edu-achieve-grid">
          {/* Education Card */}
          <div className="edu-card">
            <div>
              <div className="edu-badge">
                <GraduationCap size={16} />
                <span>FORMAL DEGREE PROGRAM</span>
              </div>
              <h3 className="edu-degree">{education.degree}</h3>
              <div className="edu-specialization">
                Specialization: {education.specialization}
              </div>
              <div className="edu-institution">
                {education.institution}
              </div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.8rem', lineHeight: '1.6' }}>
                Coursework focused on Artificial Intelligence, Machine Learning, Data Structures & Algorithms, Database Management Systems, Computer Networks, and Object-Oriented Software Design.
              </p>
            </div>

            <div className="edu-footer">
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Calendar size={14} />
                <span>{education.period}</span>
              </span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <MapPin size={14} />
                <span>{education.location}</span>
              </span>
            </div>
          </div>

          {/* Genuine Highlights / Milestones */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
              <Sparkles size={18} style={{ color: 'var(--accent-cyan)' }} />
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                Demonstrated Milestones
              </h3>
            </div>

            <div className="achievements-list">
              {genuineAchievements.map((item, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-icon">
                    <Award size={18} />
                  </div>
                  <div className="achievement-content">
                    <h4>{item.title}</h4>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
