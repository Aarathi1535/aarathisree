import React from 'react';
import { HeroSection } from './components/HeroSection';
import { HighlightsSection } from './components/HighlightsSection';
import { AboutSection } from './components/AboutSection';
import { PublicationsSection } from './components/PublicationsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { VenturesSection } from './components/VenturesSection';
import { SkillsSection } from './components/SkillsSection';
import { TickerSection } from './components/TickerSection';
import { ContactSection } from './components/ContactSection';

function App() {
  return (
    <div className="w-full min-h-screen bg-[#070204] text-[#F3EBEB] selection:bg-[#800020] selection:text-white">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Highlights / Key Accolades Bento */}
      <HighlightsSection />

      {/* 3. About Section (Story & 4 Focus Pillars - No Photo Card) */}
      <AboutSection />

      {/* 4. Peer-Reviewed Publications */}
      <PublicationsSection />

      {/* 5. Work Experience & Education Timeline */}
      <ExperienceSection />

      {/* 6. Featured Projects (ScrollStack Overlapping Cards) */}
      <ProjectsSection />

      {/* 7. Entrepreneurship: Aarshiv */}
      <VenturesSection />

      {/* 8. Technical Proficiency & Stack */}
      <SkillsSection />

      {/* 9. Achievements Ticker */}
      <TickerSection />

      {/* 10. Contact & Footer */}
      <ContactSection />
    </div>
  );
}

export default App;
