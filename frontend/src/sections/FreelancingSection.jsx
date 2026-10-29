import React from 'react';
import { FREELANCE_SERVICES } from '../data/portfolioData';
import { 
  Globe, 
  ShoppingBag, 
  Activity, 
  Smartphone, 
  Layers, 
  Cpu, 
  Database, 
  CloudUpload, 
  Wrench,
  ArrowRight,
  MessageSquare
} from 'lucide-react';

const ICON_MAP = {
  'business-website': Globe,
  'ecommerce-website': ShoppingBag,
  'sports-fitness-website': Activity,
  'responsive-frontend': Smartphone,
  'fullstack-web-apps': Layers,
  'rest-api-development': Cpu,
  'database-integration': Database,
  'deployment-maintenance': CloudUpload,
  'website-improvements': Wrench
};

export default function FreelancingSection({ onSelectService }) {
  return (
    <section className="section" id="services">
      <div className="section__header">
        <div className="section__pretitle">Client Solutions</div>
        <h2 className="section__title">Freelancing &amp; Development Services</h2>
        <p className="section__subtitle">
          Specialized end-to-end development services for businesses, startups, and clients seeking fast, modern web applications with reliable backend foundations.
        </p>
      </div>

      <div className="services-grid">
        {FREELANCE_SERVICES.map((service) => {
          const IconComponent = ICON_MAP[service.id] || Globe;
          return (
            <div key={service.id} className="service-card">
              <div className="service-card__header">
                <div className="service-card__icon">
                  <IconComponent size={22} />
                </div>
                <h3 className="service-card__title">{service.title}</h3>
              </div>

              <p className="service-card__desc">{service.summary}</p>

              <div className="service-card__tags">
                {service.tags.map((tag) => (
                  <span key={tag} className="service-card__tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: '0.75rem', color: 'var(--color-text-offset)', marginBottom: '0.75rem' }}>
                <strong>Evidence:</strong> {service.relevantProject}
              </div>

              <a
                href="#contact"
                className="service-card__cta"
                onClick={() => {
                  if (onSelectService) {
                    onSelectService(service.title);
                  }
                }}
              >
                Discuss Your Project
                <ArrowRight size={16} />
              </a>
            </div>
          );
        })}
      </div>

      {/* Freelance CTAs Bar */}
      <div
        style={{
          marginTop: '3rem',
          padding: '2rem',
          borderRadius: '0.875rem',
          backgroundColor: 'var(--color-bg-offset)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '1.25rem'
        }}
      >
        <h3 style={{ margin: 0, fontSize: '1.5rem', color: 'var(--color-text)' }}>
          Have a project in mind? Let’s build it together.
        </h3>
        <p style={{ margin: 0, maxWidth: '38rem', color: 'var(--color-text-offset)', fontSize: '0.95rem' }}>
          From initial architecture and responsive UI design to FastAPI backend engineering and deployment, I provide dedicated freelance support tailored to your project goals.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          <a href="#contact" className="btn btn--primary">
            <MessageSquare size={18} />
            Hire Me
          </a>
          <a href="#contact" className="btn btn--secondary">
            Let’s Work Together
          </a>
          <a href="#projects" className="btn btn--outline">
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}
