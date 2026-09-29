import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import Experience from './components/Experience';
import Education from './components/Education';
import ResumeBanner from './components/ResumeBanner';
import ResumeModal from './components/ResumeModal';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="portfolio-app">
      {/* Sticky Top Navbar */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Area */}
      <main>
        {/* Hero Section */}
        <Hero onOpenResume={() => setResumeModalOpen(true)} />

        {/* About Section */}
        <About />

        {/* Technical Skills Toolkit */}
        <Skills />

        {/* Flagship Projects Section */}
        <Projects onSelectProject={(project) => setSelectedProject(project)} />

        {/* Practical Project & Product Experience */}
        <Experience />

        {/* Formal Education & Genuine Milestones */}
        <Education />

        {/* Resume Banner CTA */}
        <ResumeBanner onOpenResume={() => setResumeModalOpen(true)} />

        {/* Contact & Inquiry Section */}
        <Contact />
      </main>

      {/* Developer Footer */}
      <Footer />

      {/* Deep-Dive Project Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Resume Preview Modal */}
      {resumeModalOpen && (
        <ResumeModal
          onClose={() => setResumeModalOpen(false)}
        />
      )}
    </div>
  );
}
