import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '#home', num: '01' },
  { label: 'About', href: '#about', num: '02' },
  { label: 'Skills', href: '#skills', num: '03' },
  { label: 'Projects', href: '#projects', num: '04' },
  { label: 'Services', href: '#services', num: '05' },
  { label: 'Experience', href: '#experience', num: '06' },
  { label: 'Education', href: '#education', num: '07' },
  { label: 'Contact', href: '#contact', num: '08' }
];

export default function Navigation({ activeSection, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    if (onNavigate) {
      onNavigate(targetId);
    }
  };

  return (
    <nav className={`nav js-nav ${mobileOpen ? 'is-open' : ''}`} role="navigation">
      {/* Mobile-Only Hamburger Toggle Button (Hidden on Laptops & Desktops) */}
      <button
        type="button"
        className="iconbtn nav__togglebtn js-nav-toggle"
        aria-expanded={mobileOpen}
        aria-label="Toggle navigation menu"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Horizontal Navigation & Mobile Drawer with Framer Motion */}
      <div className="nav__content">
        <ul className="nav__menu js-nav-menu" id="nav-menu">
          {NAV_ITEMS.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <li
                key={item.href}
                className={`nav__item ${isActive ? 'nav__item--active' : ''}`}
                style={{ position: 'relative' }}
              >
                <motion.a
                  href={item.href}
                  className="nav__link"
                  onClick={(e) => handleLinkClick(e, item.href)}
                  aria-current={isActive ? 'page' : undefined}
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.96 }}
                  style={{
                    color: isActive ? 'var(--color-primary)' : 'var(--color-text)',
                    fontWeight: isActive ? 700 : 600,
                    textTransform: 'capitalize',
                    fontFamily: "'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: '0.9375rem',
                    letterSpacing: '0.01em',
                    transition: 'color 0.2s ease'
                  }}
                >
                  <span
                    className="nav__num"
                    aria-hidden="true"
                    style={{
                      color: isActive ? 'var(--color-primary)' : 'var(--color-text-offset)',
                      opacity: isActive ? 1 : 0.7
                    }}
                  >
                    {item.num}
                  </span>
                  {item.label}
                </motion.a>

                {/* Framer Motion Dynamic Sliding Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="nav__active-indicator"
                    transition={{
                      type: 'spring',
                      stiffness: 400,
                      damping: 32
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </div>

      {/* Mobile Drawer Backdrop when open */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              zIndex: 90
            }}
          />
        )}
      </AnimatePresence>
    </nav>
  );
}
