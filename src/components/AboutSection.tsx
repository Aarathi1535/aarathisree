import React from 'react';
import { motion } from 'framer-motion';

const pillars = [
  {
    title: 'Artificial Intelligence & Computer Vision',
    desc: 'Building multimodal and vision-language systems, OCR pipelines, document intelligence solutions, and AI-powered applications that combine computer vision with robust backend workflows.',
    badge: '01 // VISION AI',
  },
  {
    title: 'Large Language Models & Applied NLP',
    desc: 'Developing automated subjective answer evaluation systems, rubric scoring mechanisms, contextual analysis, and generative AI solutions that assist grading and automate complex language workflows.',
    badge: '02 // GENERATIVE NLP',
  },
  {
    title: 'Explainable & Trustworthy AI',
    desc: 'Integrating Explainable AI (XAI) techniques such as SHAP and LIME to interpret complex ML models, particularly in cybersecurity, network traffic analysis, and decision-support systems.',
    badge: '03 // XAI & SECURITY',
  },
  {
    title: 'Software Engineering & Scalable Systems',
    desc: 'Architecting modular, production-ready full-stack applications using Next.js, Django, Flask, robust role-based access control (RBAC), audit logging, and scalable backend pipelines.',
    badge: '04 // ARCHITECTURE',
  },
];

export const AboutSection: React.FC = () => {
  return (
    <section 
      id="about" 
      className="relative w-screen bg-[#070204] text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Burgundy Ambient Glows */}
      <div className="absolute top-1/3 left-1/6 w-[36rem] h-[36rem] bg-[#800020]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#4A0018]/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-4 mb-6"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#C04A6E]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            MY STORY
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#C04A6E] via-[#800020]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 max-w-5xl"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight uppercase leading-[0.92] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              BUILDING INTELLIGENT SYSTEMS AT THE INTERSECTION
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.3)]">
              OF AI RESEARCH AND SOFTWARE ENGINEERING.
            </span>
          </h2>
        </motion.div>

        {/* Exact Bio Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 pb-12 border-b border-[#800020]/30 text-sm md:text-[15px] font-light text-[#CDB4B4] leading-[1.9] tracking-wide"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          <p>
            I am an <strong className="text-white font-medium">AI/ML researcher and software engineer</strong> focused on transforming advances in artificial intelligence into practical, scalable, and reliable systems. My work spans <strong className="text-[#F3EBEB] font-medium">computer vision, multimodal AI, large language models, explainable AI, and backend engineering</strong>, with experience taking ideas from research and experimentation toward real-world applications.
          </p>
          <p>
            Currently, I work as a <strong className="text-white font-medium">Research Fellow at the Centre for Visual Information Technology (CVIT), IIIT Hyderabad</strong>, where I work on applied AI research and intelligent systems. My interests lie particularly in building AI systems that are not only accurate, but also <strong className="text-[#F3EBEB] font-medium">interpretable, scalable, and useful in real-world environments</strong>.
          </p>
        </motion.div>

        {/* 4 Focus Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="relative p-8 rounded-sm border border-[#800020]/40 bg-[#120408]/80 backdrop-blur-xl overflow-hidden transition-all duration-500 hover:border-[#C04A6E]/80 group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Corner L-Pins */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#800020] group-hover:border-[#C04A6E] transition-colors" />

              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C04A6E] block mb-3">
                {pillar.badge}
              </span>

              <h3
                className="text-2xl sm:text-3xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F3EBEB] transition-colors uppercase leading-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {pillar.title}
              </h3>

              <p
                className="text-xs sm:text-[13.5px] text-[#CDB4B4] font-light leading-relaxed group-hover:text-[#E8D8D8] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {pillar.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
