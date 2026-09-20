import React from 'react';
import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';
import eduevaluatorImg from '../assets/eduevaluator.png';
import trustrankImg from '../assets/trustrank.png';
import digitalForensicsImg from '../assets/digital_forensics.png';
import cropxpertImg from '../assets/cropxpert.png';
import spamDetectionImg from '../assets/spam_detection.png';
import admissionPredictorImg from '../assets/admission_predictor.png';
import hotstarDashboardImg from '../assets/hotstar_dashboard.png';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  links: { label: string; url: string; primary?: boolean }[];
  image: string;
}

const projects: Project[] = [
  {
    number: '01',
    title: 'EduEvaluator — Automated Grading',
    category: 'LLMs & VISION',
    description:
      'AI-powered subjective answer evaluation system using Gemini 1.5 Pro, OCR, and ML achieving 86.5% accuracy. Published in IEEE PuneCon 2024.',
    tech: ['Gemini 1.5 Pro', 'OCR', 'Flask', 'Python'],
    image: eduevaluatorImg,
    links: [
      { label: 'IEEE PAPER', url: 'https://ieeexplore.ieee.org/document/10895748', primary: true },
      { label: 'GITHUB CODE', url: 'https://github.com/Aarathi1535/Edu-Evaluator' },
      { label: 'VIDEO DEMO', url: 'https://youtu.be/tSZsixcv9Sw' },
    ],
  },
  {
    number: '02',
    title: 'TrustRank Review Algorithm',
    category: 'NLP & RANKING',
    description:
      'Trust-aware review ranking algorithm leveraging NLP, review helpfulness, and time decay with a 0.93 Spearman correlation to ground truth rankings.',
    tech: ['NLP', 'Streamlit', 'Python', 'Algorithms'],
    image: trustrankImg,
    links: [
      { label: 'LIVE APP', url: 'https://trustrank-algorithm.streamlit.app/', primary: true },
    ],
  },
  {
    number: '03',
    title: 'ForgeryNet — Document Verification',
    category: 'COMPUTER VISION',
    description:
      'Django web application detecting forged or tampered scanned documents using ResNet deep learning, OCR, and CNN inconsistent text detection.',
    tech: ['ResNet CNN', 'OCR', 'Django', 'OpenCV'],
    image: digitalForensicsImg,
    links: [
      { label: 'VIDEO DEMO', url: 'https://youtu.be/VSWOx2hTGB4', primary: true },
    ],
  },
  {
    number: '04',
    title: 'CropXpert — AI Agriculture',
    category: 'ML & VISION',
    description:
      'End-to-end web system for crop and fertilizer recommendation with ResNet pest image classification achieving 93.5% accuracy.',
    tech: ['Decision Trees', 'ResNet', 'Flask', 'MySQL'],
    image: cropxpertImg,
    links: [
      { label: 'VIDEO DEMO', url: 'https://www.youtube.com/watch?v=c43HSkkh4GY', primary: true },
    ],
  },
  {
    number: '05',
    title: 'Email Spam Classifier',
    category: 'CYBERSECURITY & NLP',
    description:
      'NLP text classification application detecting phishing and spam messages with high precision and low false-positive rate.',
    tech: ['NLP', 'Naive Bayes', 'Streamlit'],
    image: spamDetectionImg,
    links: [
      { label: 'LIVE APP', url: 'https://emailspamdetection-byaarathi1535.streamlit.app/', primary: true },
    ],
  },
  {
    number: '06',
    title: 'Graduate Admission Predictor',
    category: 'PREDICTIVE ANALYTICS',
    description:
      'Interactive predictive model in Power BI and Streamlit forecasting university admission probability from multi-factor historical profiles.',
    tech: ['Scikit-Learn', 'Streamlit', 'Power BI'],
    image: admissionPredictorImg,
    links: [
      { label: 'GITHUB CODE', url: 'https://github.com/Aarathi1535/Graduate-Admission', primary: true },
    ],
  },
  {
    number: '07',
    title: 'Hotstar Analytics Dashboard',
    category: 'DATA ANALYTICS',
    description:
      'Comprehensive interactive analytics dashboard visualizing content distribution, user viewership trends, and rating metrics.',
    tech: ['Power BI', 'Python', 'EDA'],
    image: hotstarDashboardImg,
    links: [
      { label: 'GITHUB CODE', url: 'https://github.com/Aarathi1535/Disney-Hotsar-Data-Analysis-', primary: true },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-[#070204] text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Studio Ambient Burgundy Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#800020]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#4A0018]/20 rounded-full blur-[170px] pointer-events-none" />

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
            02 / FEATURED WORK
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#C04A6E]/80 via-[#800020]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]">
              SELECTED WORKS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.35)]">
              ENGINEERED VALUE.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#CDB4B4] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to unfold the system architecture cards. Each platform was built to solve complex operational challenges.
          </p>
        </motion.div>

        {/* Reference Repo ScrollStack Overlapping Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#800020]/60 bg-[#120408] p-8 sm:p-12 shadow-[0_25px_70px_rgba(0,0,0,0.98)] group overflow-hidden transition-colors duration-500 hover:border-[#C04A6E]">
                
                {/* Top Burgundy Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/80 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#800020] group-hover:border-[#C04A6E] transition-colors" />

                {/* Big Background Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#800020]/10 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#C04A6E]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#CDB4B4]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#F3EBEB] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#CDB4B4] leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#800020]/25">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#800020]/40 bg-[#1F040C]/60 text-[#E8D8D8] group-hover:border-[#C04A6E]/50 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#800020]/25">
                    {/* Project Preview Screenshot */}
                    <div className="relative rounded-sm overflow-hidden border border-[#800020]/40 bg-black/60 shadow-[0_15px_40px_rgba(0,0,0,0.8)] group-hover:border-[#C04A6E]/60 transition-colors aspect-[16/10]">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#120408]/80 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Action Links */}
                    <div className="flex flex-wrap gap-2.5">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center space-x-2 px-5 py-3 border ${
                            link.primary
                              ? 'border-[#800020] bg-[#4A0018]/90 hover:border-[#C04A6E] hover:bg-[#800020] text-[#F3EBEB] hover:text-white shadow-[0_0_20px_rgba(128,0,32,0.3)]'
                              : 'border-[#800020]/40 bg-[#120408]/60 hover:border-[#800020] text-[#CDB4B4] hover:text-white'
                          } text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 rounded-sm`}
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          <span>{link.label}</span>
                          <span className="text-xs">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;
