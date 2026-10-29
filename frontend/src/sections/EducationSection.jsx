import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen, Globe2, FileText } from 'lucide-react';

export default function EducationSection() {
  const { education, certifications, languages, resumeUrl } = PERSONAL_INFO;

  return (
    <section className="section" id="education">
      <div className="section__header">
        <div className="section__pretitle">Academic &amp; Professional Credentials</div>
        <h2 className="section__title">Education &amp; Certifications</h2>
        <p className="section__subtitle">
          Formal engineering degree in Computer Science and Engineering from Anna University, plus industry-recognized full-stack certifications.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        <div className="education-card" style={{ margin: 0 }}>
          <div className="education-card__icon">
            <GraduationCap size={32} />
          </div>

          <div>
            <h3 className="education-card__degree">
              {education.degree} in {education.major}
            </h3>
            <div className="education-card__college">
              {education.institution}
            </div>
            <div className="education-card__university">
              Affiliated with {education.university}
            </div>
            <p className="education-card__desc">
              {education.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
              <span className="education-card__year">
                Graduation Year: {education.graduationYear}
              </span>
              {education.cgpa && (
                <span
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '0.35rem',
                    backgroundColor: 'rgba(var(--color-primary-rgb, 255, 51, 95), 0.12)',
                    color: 'var(--color-primary)',
                    fontSize: '0.8125rem',
                    fontWeight: 700
                  }}
                >
                  CGPA: {education.cgpa}
                </span>
              )}
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundColor: 'var(--color-bg-offset)',
            border: '1px solid var(--color-border)',
            borderRadius: '1rem',
            padding: '1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            gap: '1.25rem'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.75rem' }}>
              <Award size={24} />
              <span>Certifications</span>
            </div>
            {certifications && certifications.map((c, idx) => (
              <div key={idx} style={{ marginBottom: '0.75rem' }}>
                <div style={{ fontWeight: 600, color: 'var(--color-text)' }}>{c.title}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--color-text-offset)' }}>{c.issuer}</div>
              </div>
            ))}

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', color: 'var(--color-primary)', fontWeight: 700, fontSize: '1rem', marginTop: '1.25rem', marginBottom: '0.5rem' }}>
              <Globe2 size={20} />
              <span>Languages</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {languages && languages.map((lang, idx) => (
                <span
                  key={idx}
                  style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.65rem',
                    borderRadius: '0.35rem',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    fontSize: '0.8125rem',
                    color: 'var(--color-text)',
                    fontWeight: 500
                  }}
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>

          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1rem' }}>
            <a
              href={resumeUrl || '/assets/Gokul_J_Resume.pdf'}
              target="_blank"
              rel="noopener noreferrer"
              download="Gokul_J_Resume.pdf"
              className="btn btn--secondary"
              style={{ width: '100%', justifyContent: 'center', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
            >
              <FileText size={18} />
              <span>Download Official Resume (PDF)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
