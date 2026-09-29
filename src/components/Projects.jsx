import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  ArrowRight, 
  Check, 
  GitBranch, 
  Sparkles, 
  ShieldCheck, 
  Navigation, 
  Database, 
  Bot 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

const filterCategories = ['All', 'AI / ML', 'Full Stack', 'Data', 'Web'];

export default function Projects({ onSelectProject }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category.includes(activeFilter);
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-label font-mono">// 03. Flagship Works</div>
          <h2 className="section-title">Engineered Projects & Systems</h2>
          <p className="section-subtitle">
            Real-world AI applications, intelligent data platforms, and full-stack software built with production architectures.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="projects-filter-bar">
          {filterCategories.map((filter) => (
            <button
              key={filter}
              className={`filter-tab ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card animate-fade-in">
              <div className="project-header-top">
                <div className="project-badge-group">
                  {project.category.map((cat) => (
                    <span key={cat} className="project-flag">
                      {cat}
                    </span>
                  ))}
                  {project.featured && (
                    <span className="project-flag" style={{ borderColor: 'rgba(245, 158, 11, 0.4)', color: '#fbbf24', background: 'rgba(245, 158, 11, 0.08)' }}>
                      ★ Flagship
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="btn btn-secondary btn-sm"
                  title="Inspect architecture, problem & solution"
                >
                  <span>Deep Dive</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <h3 className="project-title">{project.name}</h3>
              <div className="project-subtitle">{project.subtitle}</div>
              <p className="project-desc">{project.shortDesc}</p>

              {/* Special Flagship Architecture Preview */}
              {project.pipeline && (
                <div className="project-architecture-preview">
                  <div className="arch-header">
                    <span className="arch-title">
                      <ShieldCheck size={14} />
                      <span>Forensic Multi-Modal Pipeline</span>
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      6-Stage Verification
                    </span>
                  </div>

                  <div className="pipeline-flow-scroll">
                    {project.pipeline.map((p, idx) => (
                      <React.Fragment key={p.step}>
                        <div className="pipeline-node">
                          <div className="pipeline-node-step">0{p.step}</div>
                          <div className="pipeline-node-name">{p.title}</div>
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
                <div className="project-architecture-preview">
                  <div className="arch-header">
                    <span className="arch-title">
                      <GitBranch size={14} />
                      <span>{project.id === 'naviscape' ? 'Safety-Aware Routing Architecture' : 'Tabular Intelligence Pipeline'}</span>
                    </span>
                    <span className="font-mono" style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      XGBoost + FastAPI + React
                    </span>
                  </div>

                  <div className="pipeline-flow-scroll">
                    {project.architecture.steps.slice(0, 5).map((st, idx) => (
                      <React.Fragment key={st.label}>
                        <div className="pipeline-node">
                          <div className="pipeline-node-step">N-0{idx + 1}</div>
                          <div className="pipeline-node-name">{st.label}</div>
                        </div>
                        {idx < Math.min(project.architecture.steps.length - 1, 4) && (
                          <span className="pipeline-arrow">→</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              {/* Key Features Preview (Top 4) */}
              <div className="project-features-list">
                {project.keyFeatures.slice(0, 4).map((feat, i) => (
                  <div key={i} className="feature-bullet">
                    <Check size={14} className="feature-bullet-icon" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Card Footer: Tech tags and links */}
              <div className="project-footer">
                <div className="project-tech-tags">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-secondary btn-sm"
                      title="View GitHub Repository"
                      aria-label={`${project.name} GitHub Repository`}
                    >
                      <GithubIcon size={15} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="btn btn-primary btn-sm"
                      title="Open Live Demonstration"
                      aria-label={`${project.name} Live Demo`}
                    >
                      <ExternalLink size={15} />
                      <span>Live</span>
                    </a>
                  )}

                  <button
                    onClick={() => onSelectProject(project)}
                    className="btn btn-outline btn-sm"
                  >
                    View Specs
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
