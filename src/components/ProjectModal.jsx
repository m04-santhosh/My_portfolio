import React, { useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Check, 
  Layers, 
  AlertCircle, 
  Sparkles,
  ArrowRight,
  GitBranch
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
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

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div className="modal-title-group">
            <h3>{project.name}</h3>
            <div className="modal-subtitle">{project.subtitle}</div>
          </div>
          <button 
            className="modal-close-btn" 
            onClick={onClose}
            aria-label="Close project modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Problem & Solution Grid */}
          <div className="modal-callout-grid">
            <div className="modal-callout-card">
              <div className="modal-callout-header problem">
                <AlertCircle size={16} />
                <span>The Engineering Challenge</span>
              </div>
              <p className="modal-text-block">{project.problem}</p>
            </div>

            <div className="modal-callout-card">
              <div className="modal-callout-header solution">
                <Sparkles size={16} />
                <span>Engineered Solution</span>
              </div>
              <p className="modal-text-block">{project.solution}</p>
            </div>
          </div>

          {/* Architecture / Pipeline Section */}
          {project.pipeline && (
            <div className="project-architecture-preview" style={{ margin: '0.5rem 0' }}>
              <div className="arch-header">
                <span className="arch-title">
                  <Layers size={15} />
                  <span>Forensic Multi-Modal Pipeline</span>
                </span>
                <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  Visual + Acoustic Synthesis
                </span>
              </div>

              <div className="pipeline-flow-scroll">
                {project.pipeline.map((p, idx) => (
                  <React.Fragment key={p.step}>
                    <div className="pipeline-node" style={{ minWidth: '150px' }}>
                      <div className="pipeline-node-step">STAGE {p.step}</div>
                      <div className="pipeline-node-name">{p.title}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {p.desc}
                      </div>
                    </div>
                    {idx < project.pipeline.length - 1 && (
                      <span className="pipeline-arrow">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {project.architecture && (
            <div className="project-architecture-preview" style={{ margin: '0.5rem 0' }}>
              <div className="arch-header">
                <span className="arch-title">
                  <GitBranch size={15} />
                  <span>System Architecture & Data Flow</span>
                </span>
                <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                  End-to-End Orchestration
                </span>
              </div>

              <div className="pipeline-flow-scroll">
                {project.architecture.steps.map((st, idx) => (
                  <React.Fragment key={st.label}>
                    <div className="pipeline-node" style={{ minWidth: '160px' }}>
                      <div className="pipeline-node-step">NODE 0{idx + 1}</div>
                      <div className="pipeline-node-name">{st.label}</div>
                      <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
                        {st.desc}
                      </div>
                    </div>
                    {idx < project.architecture.steps.length - 1 && (
                      <span className="pipeline-arrow">→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {/* Key Features List */}
          <div>
            <div className="modal-section-title">// Core Features & Capabilities</div>
            <div className="project-features-list">
              {project.keyFeatures.map((feat, i) => (
                <div key={i} className="feature-bullet">
                  <Check size={15} className="feature-bullet-icon" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack Tags */}
          <div>
            <div className="modal-section-title">// Technologies & Tools</div>
            <div className="project-tech-tags">
              {project.techStack.map((tech) => (
                <span key={tech} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="modal-footer">
          <div className="project-actions">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer noopener"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} />
                <span>View Source Code</span>
              </a>
            )}

            {project.liveUrl && (
              <a 
                href={project.liveUrl} 
                target="_blank" 
                rel="noreferrer noopener"
                className="btn btn-primary btn-sm"
              >
                <ExternalLink size={16} />
                <span>Live Demo</span>
              </a>
            )}
          </div>

          <button onClick={onClose} className="btn btn-outline btn-sm">
            Close Deep Dive
          </button>
        </div>
      </div>
    </div>
  );
}
