import React, { useState } from 'react';
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

  const handleLinkClick = (href) => {
    setMobileOpen(false);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <nav className={`nav js-nav ${mobileOpen ? 'is-open' : ''}`} role="navigation">
      <button
        type="button"
        className="iconbtn nav__togglebtn js-nav-toggle"
        aria-expanded={mobileOpen}
        aria-label="Toggle navigation menu"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <div
        className="nav__content"
        style={{
          display: mobileOpen ? 'flex' : undefined,
          opacity: mobileOpen ? 1 : undefined,
          visibility: mobileOpen ? 'visible' : undefined
        }}
      >
        <ul className="nav__menu js-nav-menu" id="nav-menu">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <li
                key={item.href}
                className={`nav__item ${isActive ? 'nav__item--active' : ''}`}
              >
                <a
                  href={item.href}
                  className="nav__link"
                  onClick={() => handleLinkClick(item.href)}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <span className="nav__num" aria-hidden="true">
                    {item.num}
                  </span>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="nav__bg">
        <div className="nav__bg__circle" />
      </div>
    </nav>
  );
}
