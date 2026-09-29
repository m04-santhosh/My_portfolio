import React from 'react';
import { Briefcase, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label font-mono">// 04. Practical Engineering</div>
          <h2 className="section-title">Project & Product Experience</h2>
          <p className="section-subtitle">
            Hands-on technical development building real software architectures, machine learning workflows, and automation platforms.
          </p>
        </div>

        <div className="experience-timeline">
          {experience.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-header">
                <div>
                  <h3 className="exp-role-title">{item.role}</h3>
                  <div className="exp-track">{item.track}</div>
                </div>

                <div className="exp-meta">
                  <span className="exp-period">{item.period}</span>
                  <span className="exp-location">
                    <MapPin size={12} style={{ display: 'inline', marginRight: '3px' }} />
                    {item.location}
                  </span>
                </div>
              </div>

              <p className="exp-overview">{item.description}</p>

              <ul className="exp-bullets">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="exp-bullet-item">
                    <CheckCircle2 size={16} className="exp-bullet-arrow" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
