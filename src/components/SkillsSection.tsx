import React from 'react';
import { motion } from 'framer-motion';

interface SkillItem {
  name: string;
  percent: number;
}

interface SkillCategory {
  title: string;
  subtitle: string;
  badge: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'AI, ML & Computer Vision',
    subtitle: 'Deep Learning, LLMs, Vision & XAI',
    badge: '01 // AI & ML',
    skills: [
      { name: 'Machine Learning & Scikit-Learn', percent: 95 },
      { name: 'LLMs & Prompt Engineering', percent: 90 },
      { name: 'OCR & Computer Vision (OpenCV)', percent: 88 },
      { name: 'Pandas, NumPy & PyData Stack', percent: 92 },
      { name: 'Explainable AI (SHAP & LIME)', percent: 85 },
      { name: 'Power BI & Data Visualization', percent: 88 },
    ],
  },
  {
    title: 'Backend & Architecture',
    subtitle: 'Languages, Databases & APIs',
    badge: '02 // BACKEND',
    skills: [
      { name: 'Python (Advanced)', percent: 95 },
      { name: 'SQL (MySQL, SQLite, Query Tuning)', percent: 90 },
      { name: 'MongoDB (NoSQL Document Store)', percent: 82 },
      { name: 'Flask & Django (REST APIs)', percent: 88 },
      { name: 'Java & OOP Principles', percent: 78 },
      { name: 'Git & CI/CD Workflows', percent: 88 },
    ],
  },
  {
    title: 'CS Fundamentals',
    subtitle: 'Core Academic & Theoretical Mastery',
    badge: '03 // CS CORE',
    skills: [
      { name: 'Data Structures & Algorithms (DSA)', percent: 88 },
      { name: 'Database Management Systems (DBMS)', percent: 90 },
      { name: 'Computer Networks (QUIC/UDP/TCP)', percent: 85 },
      { name: 'Operating Systems', percent: 82 },
      { name: 'Data Mining & Pattern Analytics', percent: 88 },
      { name: 'Frontend Technologies (HTML/CSS/JS)', percent: 80 },
    ],
  },
];

export const SkillsSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative w-screen bg-[#070204] text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[34rem] h-[34rem] bg-[#800020]/15 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
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
            COMPETENCIES
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#C04A6E] via-[#800020]/40 to-transparent" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                TECHNICAL PROFICIENCY
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.3)]">
                &amp; STACK.
              </span>
            </h2>
          </div>
          <p
            className="text-xs sm:text-sm font-light text-[#CDB4B4] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Comprehensive breakdown of programming languages, machine learning frameworks, databases, and core computer science foundations.
          </p>
        </motion.div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.08 }}
              className="relative p-8 rounded-sm border border-[#800020]/50 bg-[#120408]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.85)] group hover:border-[#C04A6E]/80 transition-all duration-500"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/60 to-transparent" />
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#800020]" />
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#800020]" />

              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C04A6E] block mb-2">
                {cat.badge}
              </span>
              
              <h3
                className="text-2xl sm:text-3xl font-normal text-white uppercase mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {cat.title}
              </h3>
              
              <p className="text-[11.5px] font-mono text-[#947878] mb-8">
                {cat.subtitle}
              </p>

              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-xs mb-1.5">
                      <span className="text-[#CDB4B4] font-light">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[#C04A6E] text-[11px]">
                        {skill.percent}%
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1F040C] rounded-full overflow-hidden border border-[#800020]/30">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.percent}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
                        className="h-full bg-gradient-to-r from-[#800020] via-[#A61B45] to-[#C04A6E]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
