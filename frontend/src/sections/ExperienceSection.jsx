import React from 'react';
import { EXPERIENCE_AND_TRAINING } from '../data/portfolioData';
import { Briefcase, Award, Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section className="section" id="experience">
      <div className="section__header">
        <div className="section__pretitle">Practical Background</div>
        <h2 className="section__title">Internship &amp; Training</h2>
        <p className="section__subtitle">
          Structured professional learning and software engineering internship experience forming a solid foundation for full-stack delivery.
        </p>
      </div>

      <div className="timeline">
        {EXPERIENCE_AND_TRAINING.map((item, index) => (
          <div key={index} className="timeline__item">
            <div className="timeline__dot" />
            <div className="timeline__badge">{item.type}</div>
            <h3 className="timeline__title">{item.title}</h3>
            <div className="timeline__meta">
              <strong>{item.organization}</strong> &bull; {item.location} &bull; <em>{item.period}</em>
            </div>
            <p className="timeline__desc">{item.summary}</p>
            <div className="timeline__skills">
              {item.skills.map((skill) => (
                <span key={skill} className="timeline__skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
