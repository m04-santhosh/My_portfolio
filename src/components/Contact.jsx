import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, Loader2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', _gotcha: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // 1. Client-Side Validation
    const cleanName = formData.name.trim();
    const cleanEmail = formData.email.trim();
    const cleanMessage = formData.message.trim();

    if (!cleanName) {
      setStatus({ type: 'error', message: 'Please enter your name.' });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      setStatus({ type: 'error', message: 'Please provide a valid email address.' });
      return;
    }

    if (!cleanMessage || cleanMessage.length < 10) {
      setStatus({ type: 'error', message: 'Please enter a message of at least 10 characters.' });
      return;
    }

    if (cleanMessage.length > 5000) {
      setStatus({ type: 'error', message: 'Message exceeds maximum length (5000 characters).' });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          message: cleanMessage,
          _gotcha: formData._gotcha, // Honeypot spam trap
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent directly to Santhosh. I will get back to you shortly.',
        });
        setFormData({ name: '', email: '', message: '', _gotcha: '' });
      } else {
        setStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please email me directly at santhosh.muruga04@gmail.com.',
        });
      }
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus({
        type: 'error',
        message: 'Network error or service unavailable. You can reach me directly at santhosh.muruga04@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-label font-mono">// 06. Get In Touch</div>
          <h2 className="section-title">Let's Build Something</h2>
          <p className="section-subtitle">
            Have an idea, project, internship opportunity or collaboration in mind? I'd love to connect.
          </p>
        </div>

        <div className="contact-grid">
          {/* Direct Channels */}
          <div className="contact-info-panel">
            <div className="contact-channels-list">
              {/* Email */}
              <div className="contact-channel-card">
                <div className="contact-channel-icon">
                  <Mail size={20} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div className="contact-channel-label">EMAIL ADDRESS</div>
                  <div className="contact-channel-value" style={{ wordBreak: 'break-all' }}>
                    {personalInfo.email}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="btn-icon"
                  title="Copy email to clipboard"
                  style={{ width: '34px', height: '34px' }}
                >
                  {copied ? <Check size={15} style={{ color: '#10b981' }} /> : <Copy size={15} />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="contact-channel-card"
              >
                <div className="contact-channel-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <div className="contact-channel-label">LINKEDIN PROFILE</div>
                  <div className="contact-channel-value">linkedin.com/in/santhu1004</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer noopener"
                className="contact-channel-card"
              >
                <div className="contact-channel-icon">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <div className="contact-channel-label">GITHUB REPOSITORIES</div>
                  <div className="contact-channel-value">github.com/m04-santhosh</div>
                </div>
              </a>

              {/* Location */}
              <div className="contact-channel-card">
                <div className="contact-channel-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact-channel-label">LOCATION</div>
                  <div className="contact-channel-value">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with Production Endpoint */}
          <div className="contact-form-card">
            {status.message && (
              <div className={`form-feedback ${status.type}`}>
                {status.type === 'success' ? (
                  <CheckCircle2 size={18} style={{ flexShrink: 0 }} />
                ) : (
                  <AlertCircle size={18} style={{ flexShrink: 0 }} />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Spam Protection Honeypot Field (invisible to normal users) */}
              <input
                type="text"
                name="_gotcha"
                value={formData._gotcha}
                onChange={handleChange}
                tabIndex="-1"
                autoComplete="off"
                style={{ display: 'none' }}
                aria-hidden="true"
              />

              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Chen"
                  className="form-input"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. alex@company.com"
                  className="form-input"
                  disabled={isSubmitting}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team opening, or idea..."
                  className="form-textarea"
                  rows={5}
                  disabled={isSubmitting}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', opacity: isSubmitting ? 0.75 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" style={{ animation: 'spin 1s linear infinite' }} />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
