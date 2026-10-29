import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function EducationSection() {
  const { education } = PERSONAL_INFO;

  return (
    <section className="section" id="education">
      <div className="section__header">
        <div className="section__pretitle">Academic Credentials</div>
        <h2 className="section__title">Education</h2>
        <p className="section__subtitle">
          Formal engineering degree in Computer Science and Engineering affiliated with Anna University.
        </p>
      </div>

      <div className="education-card">
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
          <span className="education-card__year">
            Graduation Year: {education.graduationYear}
          </span>
        </div>
      </div>
    </section>
  );
}
