import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemePicker from './components/ThemePicker';

import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import FreelancingSection from './sections/FreelancingSection';
import ExperienceSection from './sections/ExperienceSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('theme') || 'default';
  });
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('General Inquiry');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'services', 'experience', 'education', 'contact'];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectTheme = (themeId) => {
    setActiveTheme(themeId);
  };

  const handleSelectServiceFromCard = (serviceTitle) => {
    setSelectedService(serviceTitle);
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="layout" role="document">
      <ThemePicker
        isOpen={themePickerOpen}
        onClose={() => setThemePickerOpen(false)}
        activeTheme={activeTheme}
        onSelectTheme={handleSelectTheme}
      />

      <Header
        activeSection={activeSection}
        themePickerOpen={themePickerOpen}
        onToggleThemePicker={() => setThemePickerOpen(!themePickerOpen)}
      />

      <main className="main container" role="main" id="main" tabIndex="-1">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <FreelancingSection onSelectService={handleSelectServiceFromCard} />
        <ExperienceSection />
        <EducationSection />
        <ContactSection selectedService={selectedService} />
      </main>

      <Footer />
    </div>
  );
}
