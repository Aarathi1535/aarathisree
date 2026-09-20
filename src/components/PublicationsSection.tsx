import React from 'react';
import { motion } from 'framer-motion';

export const PublicationsSection: React.FC = () => {
  return (
    <section
      id="publications"
      className="relative w-screen bg-[#070204] text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[36rem] h-[36rem] bg-[#800020]/15 rounded-full blur-[180px] pointer-events-none" />

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
            PEER-REVIEWED RESEARCH
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
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              PUBLISHED RESEARCH
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.3)]">
              PAPERS.
            </span>
          </h2>
          <p
            className="text-xs sm:text-sm font-light text-[#CDB4B4] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Original research contributions published in international peer-reviewed journals and IEEE conferences.
          </p>
        </motion.div>

        {/* Papers Grid */}
        <div className="space-y-8">
          
          {/* Paper 1: IJSRET 2026 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-8 sm:p-10 rounded-sm border border-[#800020]/50 bg-[#120408]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] group hover:border-[#C04A6E] transition-all duration-500"
          >
            {/* Top Light Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/70 to-transparent" />
            
            {/* Corner L-Pins */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#800020] group-hover:border-[#C04A6E] transition-colors" />

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-[#2A000D] border border-[#800020] text-[#C04A6E] rounded-sm">
                    IJSRET JOURNAL 2026
                  </span>
                  <span className="text-[11px] font-mono text-[#947878]">
                    Vol. 12, Issue 2 | ISSN: 2395-566X
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-white group-hover:text-[#F3EBEB] transition-colors uppercase leading-snug"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  An Intelligent Machine Learning Framework for Detecting QUIC-Based Traffic Flood Attacks in Encrypted HTTP/3 Networks
                </h3>
              </div>
            </div>

            <p
              className="text-xs sm:text-sm md:text-[14px] font-light text-[#CDB4B4] leading-[1.85] tracking-wide mb-8 max-w-4xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Proposed an intelligent machine learning &amp; Explainable AI (XAI) framework for detecting QUIC-based DDoS traffic flood attacks in encrypted HTTP/3 network environments without payload inspection. Evaluated multiple classifiers, with Random Forest achieving <strong className="text-white font-medium">95.8% accuracy</strong> and <strong className="text-white font-medium">0.97 ROC-AUC</strong>, integrated with <strong className="text-white font-medium">SHAP and LIME</strong> for interpretable security insights.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#800020]/30">
              <div className="flex flex-wrap gap-2">
                {['QUIC / HTTP/3', 'DDoS Detection', 'Random Forest (95.8%)', 'SHAP & LIME XAI', 'Encrypted Traffic Analysis'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#800020]/40 bg-[#1F040C]/60 text-[#E8D8D8]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://ijsret.com/2026/04/15/an-intelligent-machine-learning-framework-for-detecting-quic-based-traffic-flood-attacks-in-encrypted-http-3-networks/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 border border-[#800020] bg-[#4A0018]/80 hover:border-[#C04A6E] hover:bg-[#800020] text-[#F3EBEB] hover:text-white text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 rounded-sm shrink-0"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <span>READ PUBLISHED PAPER</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </motion.div>

          {/* Paper 2: IEEE PuneCon 2024 */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative p-8 sm:p-10 rounded-sm border border-[#800020]/50 bg-[#120408]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] group hover:border-[#C04A6E] transition-all duration-500"
          >
            {/* Top Light Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/70 to-transparent" />
            
            {/* Corner L-Pins */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#800020] group-hover:border-[#C04A6E] transition-colors" />

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="px-3 py-1 text-[10px] font-mono tracking-widest uppercase bg-[#2A000D] border border-[#800020] text-[#C04A6E] rounded-sm">
                    IEEE PUNECON 2024
                  </span>
                  <span className="text-[11px] font-mono text-[#947878]">
                    December 2024
                  </span>
                </div>
                <h3
                  className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-wide text-white group-hover:text-[#F3EBEB] transition-colors uppercase leading-snug"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Revolutionizing the Future of Automated Subjective Answer Sheet Evaluation System with Machine Learning and LLMs
                </h3>
              </div>
            </div>

            <p
              className="text-xs sm:text-sm md:text-[14px] font-light text-[#CDB4B4] leading-[1.85] tracking-wide mb-8 max-w-4xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Engineered an end-to-end automated subjective answer sheet evaluation pipeline integrating Gemini 1.5 Pro, Computer Vision, and OCR. Achieved an <strong className="text-white font-medium">86.5% grading accuracy</strong> with automated rubric scoring and personalized feedback generation for institutions.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#800020]/30">
              <div className="flex flex-wrap gap-2">
                {['Large Language Models (LLMs)', 'OCR & Computer Vision', 'Automated Grading', 'Flask API'].map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#800020]/40 bg-[#1F040C]/60 text-[#E8D8D8]"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://ieeexplore.ieee.org/document/10895748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 border border-[#800020] bg-[#4A0018]/80 hover:border-[#C04A6E] hover:bg-[#800020] text-[#F3EBEB] hover:text-white text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 rounded-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>IEEE PUBLICATION</span>
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href="https://github.com/Aarathi1535/Edu-Evaluator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 border border-[#800020]/40 bg-[#2A000D]/40 hover:border-[#800020] text-[#D4B8B8] hover:text-[#F3EBEB] text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 rounded-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>GITHUB REPO</span>
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href="https://youtu.be/tSZsixcv9Sw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-3 border border-[#800020]/40 bg-[#2A000D]/40 hover:border-[#800020] text-[#D4B8B8] hover:text-[#F3EBEB] text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all duration-300 rounded-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  <span>VIDEO DEMO</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default PublicationsSection;
