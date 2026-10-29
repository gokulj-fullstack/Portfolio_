import React, { useState, useEffect, useRef } from 'react';
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

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'services', 'experience', 'education', 'contact'];

export default function App() {
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('theme') || 'default';
  });
  const [themePickerOpen, setThemePickerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedService, setSelectedService] = useState('General Inquiry');
  
  // Ref to prevent scroll listener from overriding manual click navigation
  const isNavigatingRef = useRef(false);
  const navigateTimeoutRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
    localStorage.setItem('theme', activeTheme);
  }, [activeTheme]);

  // Reliable, jitter-free scroll spy
  useEffect(() => {
    const handleScroll = () => {
      if (isNavigatingRef.current) return;

      const scrollY = window.scrollY;
      
      // Top of page is Home
      if (scrollY < 120) {
        setActiveSection('home');
        return;
      }

      // Bottom of page is Contact
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      if (windowHeight + scrollY >= documentHeight - 100) {
        setActiveSection('contact');
        return;
      }

      // Check which section is currently centered in viewport
      const offsetPoint = 160; // 160px below top
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const id = SECTION_IDS[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offsetPoint && rect.bottom > 60) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId) => {
    // 1. Immediately set active tab
    setActiveSection(sectionId);

    // 2. Temporarily lock scroll listener
    isNavigatingRef.current = true;
    if (navigateTimeoutRef.current) {
      clearTimeout(navigateTimeoutRef.current);
    }
    navigateTimeoutRef.current = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 800);

    // 3. Smoothly scroll with proper offset
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectTheme = (themeId) => {
    setActiveTheme(themeId);
  };

  const handleSelectServiceFromCard = (serviceTitle) => {
    setSelectedService(serviceTitle);
    handleNavigate('contact');
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
        onNavigate={handleNavigate}
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
