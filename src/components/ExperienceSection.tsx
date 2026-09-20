import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface StopItem {
  id: string;
  year: string;
  title: string;
  organization: string;
  location?: string;
  badge?: string;
  bullets?: string[];
  description?: string;
  link?: { label: string; url: string };
}

const workExperience: StopItem[] = [
  {
    id: 'w1',
    year: 'JUL 2026 – PRESENT',
    title: 'Research Fellow',
    organization: 'CVIT, IIIT Hyderabad (under Prof. C. V. Jawahar)',
    location: 'Hyderabad, India',
    badge: 'Current Role',
    bullets: [
      'Digital Exam Evaluation Platform: Developing a Next.js-based digital exam evaluation platform with role-based TA grading and script management.',
      'Implementing an interactive grading canvas, RBAC, audit logging, and secure immutable storage for reliable evaluation workflows.',
      'Engineered scalable cloud backend deployment pipelines under the guidance of Prof. C. V. Jawahar at CVIT.',
    ],
  },
  {
    id: 'w2',
    year: 'MAR – JUN 2026',
    title: 'Freelancer / AI Engineer',
    organization: 'Aarshiv (aarshivai.netlify.app)',
    location: 'Remote',
    link: { label: 'Live Site ↗', url: 'https://aarshivai.netlify.app/' },
    bullets: [
      'Built and deployed web platforms for multiple business clients, delivering products used by 1000+ active users.',
      'Developed a high-speed data scraping engine generating 100+ verified leads in 5 minutes.',
      'Created an AI evaluator with detailed feedback for an MBBS coaching institute with 98% accuracy.',
    ],
  },
  {
    id: 'w3',
    year: 'DEC 2025 – FEB 2026',
    title: 'Data Analyst Intern',
    organization: 'Unstop',
    location: 'Remote',
    bullets: [
      'Built automated SQL dashboards for KPI tracking and data reporting.',
      'Extracted and generated actionable insights for executive business decision-making.',
    ],
  },
  {
    id: 'w4',
    year: 'JUL – OCT 2025',
    title: 'Tech Lead Intern & App Developer Intern',
    organization: 'SnapGro',
    location: 'Remote',
    bullets: [
      'Designed scalable backend system architecture for mobile and web platforms.',
      'Led development and deployment of 5+ core features across the tech stack.',
      'Optimized backend queries and caching, reducing API response time by 20%.',
    ],
  },
  {
    id: 'w5',
    year: 'APR – OCT 2024',
    title: 'Research & Project Intern',
    organization: 'Society for Data Science',
    location: 'Pune, India',
    bullets: [
      'Built LLM + OCR automated answer grading system achieving 86.5% accuracy.',
      'Designed end-to-end pipeline resulting in a published research paper at IEEE PuneCon 2024.',
    ],
  },
  {
    id: 'w6',
    year: 'APR – JUN 2024',
    title: 'Python Developer Intern',
    organization: 'Infosys Springboard',
    location: 'Remote',
    bullets: [
      'Built automated OCR bank cheque processing system with 85% accuracy.',
      'Automated SQL data extraction and transformation pipelines for secure banking data handling.',
    ],
  },
];

const educationList: StopItem[] = [
  {
    id: 'e1',
    year: '2022 – 2026',
    title: 'B.Tech in CSE (Data Science)',
    organization: 'Pragati Engineering College',
    location: 'Andhra Pradesh, India',
    badge: 'CGPA: 9.39',
    description:
      'Specialized in Data Science, Machine Learning, Deep Learning, and Distributed Systems. Maintained a 9.39 CGPA while publishing research and leading campus technical initiatives.',
  },
  {
    id: 'e2',
    year: '2020 – 2022',
    title: 'Class 12 / Intermediate (MPC)',
    organization: 'CBSE Class 12',
    location: 'Andhra Pradesh, India',
    badge: '98.4% CBSE',
    bullets: [
      '98.4% CBSE',
      'JEE Main — 99 Percentile',
      'JEE Main AIR — 10,548',
    ],
  },
  {
    id: 'e3',
    year: '2008 – 2020',
    title: 'Class 10 / Secondary Education',
    organization: 'CBSE School',
    location: 'Al Jubail, Kingdom of Saudi Arabia',
    badge: '93.2% CBSE',
    bullets: [
      '93.2% CBSE',
    ],
  },
];

export const ExperienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'education'>('work');
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const activeItems = activeTab === 'work' ? workExperience : educationList;

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-[#070204] text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white pt-8 pb-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#800020]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#C04A6E]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            CAREER &amp; JOURNEY
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#C04A6E] via-[#800020]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-10"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                WORK EXPERIENCE
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.3)]">
                &amp; EDUCATION.
              </span>
            </h2>
          </div>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1 rounded-sm border border-[#800020]/50 bg-[#120408] mt-6 md:mt-0">
            <button
              onClick={() => setActiveTab('work')}
              className={`px-4 py-2 text-[10.5px] font-mono tracking-widest uppercase transition-all duration-300 rounded-sm ${
                activeTab === 'work'
                  ? 'bg-[#800020] text-white shadow-[0_0_15px_rgba(128,0,32,0.5)]'
                  : 'text-[#947878] hover:text-[#F3EBEB]'
              }`}
            >
              WORK EXPERIENCE
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 text-[10.5px] font-mono tracking-widest uppercase transition-all duration-300 rounded-sm ${
                activeTab === 'education'
                  ? 'bg-[#800020] text-white shadow-[0_0_15px_rgba(128,0,32,0.5)]'
                  : 'text-[#947878] hover:text-[#F3EBEB]'
              }`}
            >
              EDUCATION
            </button>
          </div>
        </motion.div>

        {/* Minimalist Route Map */}
        <div className="relative w-full pt-4">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#800020]/30" />
          
          {/* Animated Burgundy Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#C04A6E] via-[#800020] to-[#4A0018]/10 shadow-[0_0_10px_#C04A6E] origin-top"
          />

          <div className="space-y-12">
            {activeItems.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.7, delay: idx * 0.06 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10.5px] font-mono tracking-[0.18em] text-[#C04A6E] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#C04A6E]/0 group-hover:border-[#C04A6E]/50 group-hover:scale-150 transition-all duration-700 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#1A0008] border border-[#800020] group-hover:bg-[#C04A6E] group-hover:border-[#C04A6E] group-hover:shadow-[0_0_12px_#C04A6E] transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#C04A6E]">
                      {stop.year}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3
                      className="text-2xl sm:text-3xl tracking-wide text-white group-hover:text-[#F3EBEB] transition-colors leading-none uppercase"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {stop.title}
                    </h3>
                    {stop.badge && (
                      <span className="px-2 py-0.5 text-[9px] font-mono tracking-wider uppercase bg-[#2A000D] border border-[#800020] text-[#C04A6E] rounded-sm">
                        {stop.badge}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span 
                      className="text-[11px] font-medium tracking-[0.16em] uppercase text-[#D4B8B8]"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.organization}
                    </span>
                    {stop.location && (
                      <span className="text-[10px] font-mono text-[#947878]">
                        &bull; {stop.location}
                      </span>
                    )}
                    {stop.link && (
                      <a
                        href={stop.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] font-mono text-[#C04A6E] hover:underline"
                      >
                        {stop.link.label}
                      </a>
                    )}
                  </div>
                  
                  {stop.description && (
                    <p 
                      className="text-xs sm:text-[13px] font-light text-[#CDB4B4] leading-[1.7] max-w-lg group-hover:text-[#E8D8D8] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {stop.description}
                    </p>
                  )}

                  {stop.bullets && (
                    <ul className="space-y-1.5 mt-2 max-w-xl">
                      {stop.bullets.map((b, bIdx) => (
                        <li
                          key={bIdx}
                          className="text-xs sm:text-[13px] font-light text-[#CDB4B4] leading-[1.7] flex items-start space-x-2"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span className="text-[#C04A6E] shrink-0 mt-0.5">›</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
