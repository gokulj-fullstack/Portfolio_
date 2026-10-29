import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { FileText } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Header({ activeSection, onNavigate }) {
  const handleBrandClick = (e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('home');
    }
  };

  return (
    <motion.header
      className="header"
      role="banner"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="header__inner container">
        <a
          className="header__brand"
          href="#home"
          rel="home"
          onClick={handleBrandClick}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.85rem',
            textDecoration: 'none'
          }}
        >
          <div
            className="header__avatar-wrapper"
            style={{
              width: 44,
              height: 44,
              borderRadius: '50%',
              overflow: 'hidden',
              backgroundColor: 'var(--color-bg-offset)',
              border: '2px solid var(--color-primary)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}
          >
            <img
              className="header__avatar"
              src="/assets/images/gokul_transparent.png"
              alt="Gokul J"
              width="44"
              height="44"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                margin: 0,
                display: 'block'
              }}
            />
          </div>
          <span
            className="header__name"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: '1.25rem',
              fontWeight: 700,
              letterSpacing: '-0.015em',
              lineHeight: 1
            }}
          >
            Gokul J
          </span>
        </a>

        <div className="header__nav">
          <Navigation activeSection={activeSection} onNavigate={onNavigate} />

          <a
            href={PERSONAL_INFO.resumeUrl || '/assets/Gokul_J_Resume.pdf'}
            target="_blank"
            rel="noopener noreferrer"
            download="Gokul_J_Resume.pdf"
            className="header__resumebtn"
            title="Download Resume (PDF)"
            aria-label="Download Resume (PDF)"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.75rem',
              borderRadius: '0.5rem',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: 'var(--color-primary)',
              border: '1px solid var(--color-primary)',
              textDecoration: 'none',
              transition: 'all 0.2s ease',
              marginLeft: '0.5rem',
              flexShrink: 0
            }}
          >
            <FileText size={15} />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
