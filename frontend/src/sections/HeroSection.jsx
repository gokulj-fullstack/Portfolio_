import React from 'react';
import { ArrowRight, Briefcase, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function HeroSection() {
  return (
    <div className="hero fade-in" id="home">
      <div className="hero__inner">
        <h1 className="hero__title">I make modern websites.</h1>
        <p className="hero__pretitle">
          <a href="#about">Hello, my name is {PERSONAL_INFO.name}</a>
        </p>

        <div className="hero__content">
          <p>
            I’m a <strong>Full Stack Developer</strong> and <strong>Freelancer</strong> specializing in{' '}
            <a href="#projects" className="hero__link">React.js</a>,{' '}
            <a href="#skills" className="hero__link">Vite</a>,{' '}
            <a href="#skills" className="hero__link">FastAPI</a>, and{' '}
            <a href="#skills" className="hero__link">Django</a>.
            <br className="hero__br" />
            Graduating with a B.E. in Computer Science &amp; Engineering from{' '}
            <a href="#education" className="hero__link">Tagore Engineering College (Anna University)</a>.
            <br className="hero__br" />
            Passionate about building fast, reliable technology solutions for businesses and clients.
          </p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '2.5rem' }}>
          <a href="#contact" className="btn btn--primary">
            <Sparkles size={18} />
            Hire Me
          </a>
          <a href="#projects" className="btn btn--secondary">
            View My Work
            <ArrowRight size={18} />
          </a>
          <a href="#services" className="btn btn--outline">
            <Briefcase size={18} />
            Freelancing Services
          </a>
        </div>
      </div>
    </div>
  );
}
