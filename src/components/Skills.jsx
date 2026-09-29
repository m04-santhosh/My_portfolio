import React from 'react';
import { 
  Code, 
  Layout, 
  Server, 
  BrainCircuit, 
  Database, 
  Wrench 
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const categoryIcons = {
  Languages: Code,
  Frontend: Layout,
  Backend: Server,
  "AI / Data": BrainCircuit,
  Databases: Database,
  "Tools & Platforms": Wrench
};

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label font-mono">// 02. Technical Toolkit</div>
          <h2 className="section-title">Technical Capabilities</h2>
          <p className="section-subtitle">
            Core programming languages, frameworks, machine learning libraries, and tools I use to build production systems.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.name] || Code;
            return (
              <div key={category.name} className="skill-category-card">
                <div className="skill-category-header">
                  <div className="skill-category-icon">
                    <Icon size={18} />
                  </div>
                  <h3 className="skill-category-name">{category.name}</h3>
                </div>

                <div className="skill-tags-wrap">
                  {category.skills.map((skill) => (
                    <div key={skill} className="skill-tag-item">
                      <span className="skill-tag-dot"></span>
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
