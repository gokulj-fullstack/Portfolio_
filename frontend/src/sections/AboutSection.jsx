import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Code2, Rocket, Briefcase } from 'lucide-react';

export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="about">
        <div className="about__header" style={{ alignItems: 'flex-start' }}>
          <div className="about__photo" style={{ flexShrink: 0 }}>
            <img
              className="responsive-image"
              src="/assets/images/gokul_avatar.jpg"
              alt="Gokul J — Full Stack Developer"
              style={{
                borderRadius: '0.875rem',
                border: '1px solid var(--color-border)',
                width: '100%',
                maxWidth: '360px',
                aspectRatio: '4/5',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                boxShadow: '0 12px 28px -6px rgba(0, 0, 0, 0.15)'
              }}
            />
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
              My focus is on designing and developing responsive frontends with <strong>React.js</strong> and <strong>Vite</strong>, coupled with high-performance, strictly validated backends using <strong>Python</strong> and <strong>FastAPI</strong>.
            </p>
            <p>
              Whether it is a custom business website, an e-commerce storefront with automated ordering, or a specialized web application, I emphasize clean architecture, accessible interfaces, and reliable data persistence.
            </p>
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
