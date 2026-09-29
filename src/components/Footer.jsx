import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>{personalInfo.name}</h4>
            <p>{personalInfo.role}</p>
          </div>

          <ul className="footer-links">
            <li>
              <a href={personalInfo.github} target="_blank" rel="noreferrer noopener" className="footer-link">
                GitHub
              </a>
            </li>
            <li>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer noopener" className="footer-link">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${personalInfo.email}`} className="footer-link">
                Email
              </a>
            </li>
            <li>
              <button 
                onClick={scrollToTop} 
                className="btn-icon" 
                title="Back to Top"
                aria-label="Back to Top"
                style={{ width: '32px', height: '32px' }}
              >
                <ArrowUp size={14} />
              </button>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 Santhosh M. All rights reserved.
          </div>
          <div className="footer-tech-tag">
            Built with React &amp; Vite • Precision Dark Architecture
          </div>
        </div>
      </div>
    </footer>
  );
}
