import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ onOpenResume }) {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section scroll spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-wrapper">
      <div className="container navbar">
        <a href="#home" className="nav-brand" onClick={(e) => handleLinkClick(e, '#home')}>
          <div className="nav-logo-mark">SM</div>
          <span>Santhosh M</span>
        </a>

        {/* Desktop Nav */}
        <nav aria-label="Main Navigation">
          <ul className="nav-menu">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.href)}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button
            onClick={onOpenResume}
            className="btn btn-secondary btn-sm btn-resume-nav"
            title="View or download resume"
          >
            <FileDown size={15} />
            <span>Resume</span>
          </button>

          <a href="#contact" className="btn btn-primary btn-sm" onClick={(e) => handleLinkClick(e, '#contact')}>
            Let's Talk
          </a>

          {/* Hamburger Mobile Toggle */}
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer animate-fade-in">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            );
          })}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn btn-secondary btn-sm"
              style={{ flex: 1 }}
            >
              <FileDown size={16} />
              <span>Resume</span>
            </button>
            <a
              href="#contact"
              className="btn btn-primary btn-sm"
              style={{ flex: 1 }}
              onClick={(e) => handleLinkClick(e, '#contact')}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
