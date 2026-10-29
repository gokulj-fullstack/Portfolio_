import React from 'react';
import { ArrowUp, Github, Mail, Linkedin, FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer h-card" role="contentinfo">
      <div className="footer__inner container">
        <div className="footer__item">
          <strong>&copy; 2025–2026</strong>
          <br />
          <a className="p-name u-url" rel="me" href="#home">
            {PERSONAL_INFO.name}
          </a>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-offset)', marginTop: '0.25rem' }}>
            Full Stack Developer | Freelancer
          </div>
        </div>

        <div className="footer__item">
          <strong>Education</strong>
          <br />
          <span>Tagore Engineering College</span>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-offset)' }}>
            Anna University &bull; Class of 2025
          </div>
        </div>

        <div className="footer__item">
          <strong>Core Stack</strong>
          <br />
          <span>React.js &bull; FastAPI &bull; Django</span>
          <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-offset)' }}>
            Vite &bull; Python &bull; SQL &bull; Web
          </div>
        </div>

        <div className="footer__item">
          <strong>Quick Links</strong>
          <br />
          <a href="#services" style={{ marginRight: '0.5rem' }}>Services</a>
          <a href="#projects" style={{ marginRight: '0.5rem' }}>Projects</a>
          <a href="#contact" style={{ marginRight: '0.5rem' }}>Contact</a>
          <a
            href={PERSONAL_INFO.resumeUrl || '/assets/Gokul_J_Resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download="Gokul_J_Resume.pdf"
            style={{ fontWeight: 600, color: 'var(--color-primary)' }}
          >
            Resume (PDF)
          </a>
        </div>

        <div className="footer__item footer__item--right">
          <a
            href={PERSONAL_INFO.resumeUrl || '/assets/Gokul_J_Resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download="Gokul_J_Resume.pdf"
            className="footer__icon"
            title="Download Resume (PDF)"
            aria-label="Download Resume (PDF)"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <FileText size={20} />
          </a>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
            title="GitHub Profile"
            aria-label="GitHub Profile"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Github size={20} />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="footer__icon"
            title="LinkedIn Profile"
            aria-label="LinkedIn Profile"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="footer__icon"
            title="Send Email"
            aria-label="Send Email"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Mail size={20} />
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="footer__icon"
            title="Back to Top"
            aria-label="Back to Top"
            style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', background: 'none', border: 'none' }}
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
}
