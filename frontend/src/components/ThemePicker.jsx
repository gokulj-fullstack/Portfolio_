import React from 'react';
import { THEMES } from '../data/themes';
import { X } from 'lucide-react';

export default function ThemePicker({ isOpen, onClose, activeTheme, onSelectTheme }) {
  if (!isOpen) return null;

  return (
    <div className={`themepicker js-themepicker ${isOpen ? 'is-open' : ''}`} style={{ maxHeight: isOpen ? '12rem' : 0 }}>
      <h3 className="themepicker__title">Select Color Theme</h3>
      <ul className="themepicker__list" id="theme-menu">
        {THEMES.map((theme) => {
          const isActive = activeTheme === theme.id;
          return (
            <li
              key={theme.id}
              className={`themepicker__item ${isActive ? 'is-active' : ''}`}
            >
              <button
                type="button"
                className="themepicker__btn js-themepicker-themeselect"
                aria-label={`Select color theme ${theme.name}`}
                aria-checked={isActive}
                data-theme={theme.id}
                onClick={() => onSelectTheme(theme.id)}
              >
                <span className="themepicker__name">{theme.name}</span>
                <span className="themepicker__palette">
                  <span
                    className="themepicker__hue"
                    style={{ backgroundColor: theme.colors.primary }}
                    title="Primary"
                  />
                  <span
                    className="themepicker__hue"
                    style={{ backgroundColor: theme.colors.secondary }}
                    title="Secondary"
                  />
                  <span
                    className="themepicker__hue"
                    style={{ backgroundColor: theme.colors.border }}
                    title="Border"
                  />
                  <span
                    className="themepicker__hue"
                    style={{ backgroundColor: theme.colors.textOffset }}
                    title="Offset Text"
                  />
                  <span
                    className="themepicker__hue"
                    style={{ backgroundColor: theme.colors.text }}
                    title="Text"
                  />
                </span>
              </button>
            </li>
          );
        })}
      </ul>
      <button
        type="button"
        className="iconbtn themepicker__close js-themepicker-close"
        aria-label="Close theme picker"
        onClick={onClose}
      >
        <X size={20} />
      </button>
    </div>
  );
}
