import React from 'react';
import { FileText, Download, Eye, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumeBanner({ onOpenResume }) {
  return (
    <section className="section" style={{ padding: '2rem 0' }}>
      <div className="container">
        <div className="resume-banner-card">
          <div className="resume-banner-text">
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem', marginBottom: '0.4rem' }}>
              <FileText size={15} />
              <span>CURRICULUM VITAE</span>
            </div>
            <h3>Looking for my full resume & technical credentials?</h3>
            <p>
              Available for software engineering and AI/ML internship roles, startup opportunities, and technical collaborations.
            </p>
          </div>

          <div className="resume-banner-actions">
            <button onClick={onOpenResume} className="btn btn-secondary">
              <Eye size={16} />
              <span>View Resume</span>
            </button>

            <a 
              href={personalInfo.resumeUrl} 
              download="Santhosh_M_Resume.pdf"
              className="btn btn-primary"
            >
              <Download size={16} />
              <span>Download PDF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
