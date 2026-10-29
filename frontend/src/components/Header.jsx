import React from 'react';
import { motion } from 'framer-motion';
import Navigation from './Navigation';
import { Palette } from 'lucide-react';

export default function Header({ activeSection, onNavigate, onToggleThemePicker, themePickerOpen }) {
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
        <a className="header__brand" href="#home" rel="home" onClick={handleBrandClick}>
          <div
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
                objectPosition: 'center 15%'
              }}
            />
          </div>
          <span className="header__name">
            <span>Gokul J</span>
            <span className="header__verification" aria-hidden="true" title="Verified Full Stack Developer">
              <svg
                className="icon icon--verified"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                fill="var(--color-primary)"
              >
                <path d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.818-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.437 2.25c-.415-.165-.866-.25-1.336-.25-2.11 0-3.818 1.79-3.818 4 0 .494.083.964.237 1.4-1.272.65-2.147 2.018-2.147 3.6 0 1.495.782 2.798 1.942 3.486-.02.17-.032.34-.032.514 0 2.21 1.708 4 3.818 4 .47 0 .92-.086 1.335-.25.62 1.334 1.926 2.25 3.437 2.25 1.512 0 2.818-.916 3.437-2.25.415.163.865.248 1.336.248 2.11 0 3.818-1.79 3.818-4 0-.174-.012-.344-.033-.513 1.158-.687 1.943-1.99 1.943-3.484zm-6.616-3.334l-4.334 6.5c-.145.217-.382.334-.625.334-.143 0-.288-.04-.416-.126l-.115-.094-2.415-2.415c-.293-.293-.293-.768 0-1.06s.768-.294 1.06 0l1.77 1.767 3.825-5.74c.23-.345.696-.436 1.04-.207.346.23.44.696.21 1.04z" />
              </svg>
            </span>
          </span>
        </a>

        <div className="header__nav">
          <Navigation activeSection={activeSection} onNavigate={onNavigate} />

          <button
            type="button"
            className="iconbtn header__themebtn js-themepicker-toggle"
            aria-expanded={themePickerOpen}
            aria-label="Toggle theme picker"
            onClick={onToggleThemePicker}
            title="Choose color theme"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <Palette size={20} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
