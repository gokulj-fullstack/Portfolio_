import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Code2, Rocket, Briefcase, Sparkles, FileText } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="about">
        <div className="about__header">
          {/* Transparent Profile Portrait Cutout */}
          <div className="about__photo">
            <div className="about__photo-card">
              <img
                className="about__photo-card__img"
                src="/assets/images/gokul_transparent.png"
                alt="Gokul J — Full Stack Developer"
                loading="eager"
              />
            </div>
          </div>

          <div className="about__intro lead">
            <h2 className="section__title" style={{ marginTop: 0 }}>
              Hey there, I’m Gokul.
            </h2>
            <p>
              I am a <strong>Full Stack Developer</strong> and <strong>Freelancer</strong> based in Chennai, India. 
              I am completing my Bachelor of Engineering in Computer Science and Engineering from{' '}
              <strong>Tagore Engineering College, Anna University (Class of 2025)</strong>.
            </p>
            <p>
              My focus is on designing and developing responsive frontends with <strong>React.js</strong> and <strong>Vite</strong>, coupled with high-performance, strictly validated backends using <strong>Python</strong>, <strong>FastAPI</strong>, and <strong>Django</strong>.
            </p>
            <p>
              Whether it is a custom business website, an e-commerce storefront with automated ordering, or a specialized web application, I emphasize clean architecture, accessible interfaces, and reliable data persistence.
            </p>

            <div style={{ marginTop: '1.75rem', display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
              <a
                href={PERSONAL_INFO.resumeUrl || '/assets/Gokul_J_Resume.pdf'}
                target="_blank"
                rel="noopener noreferrer"
                download="Gokul_J_Resume.pdf"
                className="btn btn--primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
              <a
                href="#contact"
                className="btn btn--outline"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <div className="about__content markdown" style={{ marginTop: '2.5rem' }}>
          <h2>Professional Background &amp; Focus</h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              margin: '1.5rem 0'
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--color-bg-offset)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <GraduationCap size={20} />
                <span>Academic Foundation</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text)' }}>
                B.E. Computer Science and Engineering graduate (2025) from Tagore Engineering College, Anna University, with strong fundamentals in algorithms, database design, and software engineering.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-bg-offset)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Code2 size={20} />
                <span>Hands-on Internship</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text)' }}>
                Completed a Web Development Internship at GB Tech Corp (Tambaram), building an educational platform with authentication, dynamic content modules, and relational databases.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-bg-offset)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Rocket size={20} />
                <span>Full-Stack Training</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text)' }}>
                Underwent six months of comprehensive Python Full Stack Development training at FITA Academy covering Python, MySQL, JavaScript, Django, and React.js.
              </p>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-bg-offset)',
                border: '1px solid var(--color-border)',
                borderRadius: '0.75rem',
                padding: '1.25rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-primary)', fontWeight: 700, marginBottom: '0.5rem' }}>
                <Briefcase size={20} />
                <span>Freelance Development</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--color-text)' }}>
                Dedicated to helping businesses and individual clients create custom websites, booking portals, REST APIs, and modern tech stack migrations.
              </p>
            </div>
          </div>

          <h2>Professional Goal</h2>
          <p>
            {PERSONAL_INFO.professionalGoal}
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
            <a href="#services" className="btn btn--primary">
              Explore Freelance Services
            </a>
            <a href="#contact" className="btn btn--secondary">
              Discuss Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
