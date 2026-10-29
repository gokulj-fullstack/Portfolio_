import React from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ExternalLink, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section className="section" id="projects">
      <div className="section__header">
        <div className="section__pretitle">Demonstrated Work</div>
        <h2 className="section__title">Featured Projects</h2>
        <p className="section__subtitle">
          Practical web applications and client platforms built with robust architectures, clear database models, and engaging user interfaces.
        </p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => {
          const isFeatured = index === 0;
          return (
            <article
              key={project.id}
              className={`project-card ${isFeatured ? 'project-card--featured' : ''}`}
            >
              <div className="project-card__image-wrap">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                />
                {project.hasLiveDemo ? (
                  <span className="project-card__badge project-card__badge--live">
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#fff', display: 'inline-block' }} />
                    {project.isClientProject ? '⭐ Freelance Client • Live Demo' : 'Live Deployment'}
                  </span>
                ) : (
                  <span className="project-card__badge">
                    Engineering Project
                  </span>
                )}
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__tagline">{project.tagline}</div>
                <p className="project-card__desc">{project.description}</p>

                <div style={{ marginBottom: '1rem' }}>
                  <div style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.35rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                    <Layers size={14} color="var(--color-primary)" />
                    <span>Original Technologies:</span>
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--color-text-offset)' }}>
                    {project.originalTechnologies.join(', ')}
                  </div>
                </div>

                <ul className="project-card__features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="project-card__tags">
                  {project.primaryTechTags.map((tag) => (
                    <span key={tag} className="project-card__tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  {project.hasLiveDemo && project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                      style={{
                        fontSize: '0.875rem',
                        padding: '0.55rem 1.15rem',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontWeight: 700
                      }}
                    >
                      <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#10b981', boxShadow: '0 0 8px #10b981' }} />
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  ) : null}
                  <a
                    href="#contact"
                    className="btn btn--secondary"
                    style={{ fontSize: '0.875rem', padding: '0.5rem 1rem' }}
                  >
                    Discuss Similar Project
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
