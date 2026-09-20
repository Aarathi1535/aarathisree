import React from 'react';
import { motion } from 'framer-motion';

const ventureProducts = [
  {
    category: 'Medical Education AI',
    title: 'MBBS AI Answer Evaluator',
    desc: 'Engineered a custom automated evaluation pipeline for a medical coaching institute. Evaluates student descriptive anatomy and clinical theory answers against strict academic rubrics with 98% accuracy, generating detailed constructive feedback.',
    tags: ['LLM Prompt Engine', 'Rubric Parsing', 'Detailed Feedback API'],
  },
  {
    category: 'Data Automation & Scraping',
    title: 'High-Velocity Lead Engine',
    desc: 'Architected an autonomous web scraping and verification engine capable of mining, filtering, and validating 100+ verified business leads in under 5 minutes with anti-detection headers, deduplication, and export pipelines.',
    tags: ['Python', 'Async Scraping', 'Data Pipelines'],
  },
  {
    category: 'Full-Stack SaaS Architecture',
    title: 'Client Web Platforms',
    desc: 'Designed, built, and launched responsive, full-stack client web applications serving over 1,000+ active end-users. Implemented secure role-based access, fast database queries, and frictionless user flows.',
    tags: ['Full-Stack Dev', 'Scalable Backend', 'Cloud Deployment'],
  },
];

export const VenturesSection: React.FC = () => {
  return (
    <section
      id="entrepreneurship"
      className="relative w-screen bg-[#070204] text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white py-24 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 right-1/4 w-[34rem] h-[34rem] bg-[#800020]/15 rounded-full blur-[170px] pointer-events-none" />

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
            VENTURE &amp; IMPACT
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#C04A6E] via-[#800020]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <h2
              className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                ENTREPRENEURSHIP:
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.3)]">
                AARSHIV.
              </span>
            </h2>
          </div>
          <p
            className="text-xs sm:text-sm font-light text-[#CDB4B4] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Building applied AI platforms, high-velocity data extraction engines, and production web systems for commercial clients and end users.
          </p>
        </motion.div>

        {/* Main Venture Hero Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative p-8 sm:p-10 rounded-sm border border-[#800020]/50 bg-[#120408]/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] mb-8"
        >
          {/* Top Line & Crosshairs */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/80 to-transparent" />
          <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#800020]" />
          <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#800020]" />
          <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#800020]" />
          <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#800020]" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#800020]/30">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C04A6E] block mb-1">
                March 2026 – June 2026
              </span>
              <h3
                className="text-3xl sm:text-4xl text-white uppercase leading-none"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                Aarshiv AI Platforms
              </h3>
            </div>
            <a
              href="https://aarshivai.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-5 py-2.5 border border-[#800020] bg-[#4A0018]/80 hover:border-[#C04A6E] hover:bg-[#800020] text-[#F3EBEB] hover:text-white text-[10.5px] font-medium tracking-[0.22em] uppercase transition-all rounded-sm self-start sm:self-auto"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>VISIT AARSHIV AI</span>
              <span className="text-xs">↗</span>
            </a>
          </div>

          <p
            className="text-xs sm:text-sm md:text-[14px] font-light text-[#CDB4B4] leading-[1.85] tracking-wide mb-8 max-w-4xl"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Delivered independent engineering contracts under <strong className="text-white font-medium">Aarshiv</strong>, delivering high-impact, custom software engineering and specialized AI solutions. Partnered directly with coaching institutes and enterprise clients to engineer end-to-end web architectures, high-accuracy intelligent grading systems, and automated data extraction pipelines.
          </p>

          {/* 3 Metric Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-4">
            <div className="p-5 rounded-sm border border-[#800020]/35 bg-[#1F040C]/50">
              <span
                className="text-3xl sm:text-4xl font-light text-[#F3EBEB] block mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                1000+
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C04A6E] block mb-1">
                Active Users
              </span>
              <p className="text-[11.5px] text-[#947878] font-light leading-relaxed">
                Production platforms engineered and deployed across multiple business clients with reliable uptime.
              </p>
            </div>

            <div className="p-5 rounded-sm border border-[#800020]/35 bg-[#1F040C]/50">
              <span
                className="text-3xl sm:text-4xl font-light text-[#F3EBEB] block mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                100+ Leads
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C04A6E] block mb-1">
                In Under 5 Minutes
              </span>
              <p className="text-[11.5px] text-[#947878] font-light leading-relaxed">
                High-throughput automated data scraping and lead generation engine with proxy rotation.
              </p>
            </div>

            <div className="p-5 rounded-sm border border-[#800020]/35 bg-[#1F040C]/50">
              <span
                className="text-3xl sm:text-4xl font-light text-[#C04A6E] block mb-1"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                98% Acc
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#C04A6E] block mb-1">
                MBBS AI Evaluation
              </span>
              <p className="text-[11.5px] text-[#947878] font-light leading-relaxed">
                Custom criteria-based subjective answer evaluator providing comprehensive rubric feedback.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 3 Products Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ventureProducts.map((prod, idx) => (
            <motion.div
              key={prod.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              className="p-7 rounded-sm border border-[#800020]/40 bg-[#120408]/80 backdrop-blur-xl flex flex-col justify-between group hover:border-[#C04A6E]/80 transition-all"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest uppercase text-[#C04A6E] block mb-2">
                  // {prod.category}
                </span>
                <h4
                  className="text-2xl font-normal text-white group-hover:text-[#F3EBEB] transition-colors mb-3 uppercase"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {prod.title}
                </h4>
                <p
                  className="text-xs sm:text-[13px] text-[#CDB4B4] font-light leading-relaxed mb-6"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {prod.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#800020]/25">
                {prod.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-[9.5px] font-mono tracking-wider uppercase rounded-sm border border-[#800020]/40 bg-[#1F040C]/60 text-[#E8D8D8]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default VenturesSection;
