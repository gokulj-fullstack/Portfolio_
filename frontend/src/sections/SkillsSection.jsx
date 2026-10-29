import React from 'react';
import { TECHNICAL_SKILLS } from '../data/portfolioData';
import { Code, Layout, Server, Database, Wrench } from 'lucide-react';

export default function SkillsSection() {
  return (
    <section className="section" id="skills">
      <div className="section__header">
        <div className="section__pretitle">Core Capabilities</div>
        <h2 className="section__title">Technical Skills</h2>
        <p className="section__subtitle">
          A disciplined stack centered on modern frontend engineering with React.js &amp; Vite, and robust, high-performance backends with FastAPI and Python.
        </p>
      </div>

      <div className="skills-grid">
        {/* Programming Languages */}
        <div className="skills-grid__card">
          <div className="skills-grid__category-title">
            <Code size={20} color="var(--color-primary)" />
            <span>Programming Languages</span>
          </div>
          <ul className="skills-grid__list">
            {TECHNICAL_SKILLS.programmingLanguages.map((lang) => (
              <li key={lang.name} className="skills-grid__item">
                <div className="skills-grid__item-header">
                  <span className="skills-grid__item-name">{lang.name}</span>
                  <span className="skills-grid__item-badge">{lang.level}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Frontend Technologies */}
        <div className="skills-grid__card">
          <div className="skills-grid__category-title">
            <Layout size={20} color="var(--color-primary)" />
            <span>Frontend Architecture</span>
          </div>
          <ul className="skills-grid__list">
            {TECHNICAL_SKILLS.frontend.map((item) => (
              <li key={item.name} className="skills-grid__item">
                <div className="skills-grid__item-header">
                  <span className="skills-grid__item-name">{item.name}</span>
                  <span className="skills-grid__item-badge">{item.tag}</span>
                </div>
                <span className="skills-grid__item-desc">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Backend Technologies */}
        <div className="skills-grid__card">
          <div className="skills-grid__category-title">
            <Server size={20} color="var(--color-primary)" />
            <span>Backend &amp; REST APIs</span>
          </div>
          <ul className="skills-grid__list">
            {TECHNICAL_SKILLS.backend.map((item) => (
              <li key={item.name} className="skills-grid__item">
                <div className="skills-grid__item-header">
                  <span className="skills-grid__item-name">{item.name}</span>
                  <span className="skills-grid__item-badge">{item.tag}</span>
                </div>
                <span className="skills-grid__item-desc">{item.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Databases */}
        <div className="skills-grid__card">
          <div className="skills-grid__category-title">
            <Database size={20} color="var(--color-primary)" />
            <span>Databases</span>
          </div>
          <ul className="skills-grid__list">
            {TECHNICAL_SKILLS.databases.map((db) => (
              <li key={db.name} className="skills-grid__item">
                <div className="skills-grid__item-header">
                  <span className="skills-grid__item-name">{db.name}</span>
                  <span className="skills-grid__item-badge">{db.type}</span>
                </div>
                <span className="skills-grid__item-desc">{db.desc}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tools and Platforms */}
        <div className="skills-grid__card" style={{ gridColumn: 'span 1' }}>
          <div className="skills-grid__category-title">
            <Wrench size={20} color="var(--color-primary)" />
            <span>Tools &amp; Platforms</span>
          </div>
          <ul className="skills-grid__list">
            {TECHNICAL_SKILLS.toolsAndPlatforms.map((tool) => (
              <li key={tool.name} className="skills-grid__item">
                <div className="skills-grid__item-header">
                  <span className="skills-grid__item-name">{tool.name}</span>
                  <span className="skills-grid__item-badge">{tool.category}</span>
                </div>
                <span className="skills-grid__item-desc">{tool.desc}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
