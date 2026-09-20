import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const bentoAccolades = [
  {
    tag: 'Active Fellowship',
    title: 'Research Fellow @ CVIT, IIIT Hyderabad',
    subtitle: 'Research Position & Mentorship',
    desc: 'Working under the mentorship of Prof. C. V. Jawahar on the Exam Evaluation Platform — a role-based digital exam evaluation system for managing exam scripts and streamlining TA-assisted grading, featuring an interactive grading canvas, audit trails, secure immutable storage, and scalable deployment.',
    chips: ['Exam Evaluation Platform', 'Interactive Canvas', 'Audit Trails', 'Immutable Storage'],
    stat: 'CVIT Fellow',
  },
  {
    tag: 'Top 3% Nationwide',
    title: 'GATE DA 2026 Rank',
    subtitle: 'National Examination',
    stat: 'AIR 2412',
    desc: 'Achieved All India Rank 2412 in the Graduate Aptitude Test in Engineering for Data Science & Artificial Intelligence (GATE DA 2026).',
    chips: ['Data Science', 'Artificial Intelligence', 'National Rank'],
  },
  {
    tag: 'Distinction',
    title: 'Pragati Engineering College',
    subtitle: 'Academic Standing',
    stat: '9.39 CGPA',
    desc: 'B.Tech in Computer Science & Engineering (Data Science) with top-tier departmental standing across all academic semesters (2022–2026).',
    chips: ['CSE - Data Science', 'Batch 2022–2026', 'Department Topper'],
  },
  {
    tag: 'Peer-Reviewed',
    title: 'Published Research',
    subtitle: 'IEEE & IJSRET',
    stat: '02 Papers',
    desc: 'IJSRET Journal 2026 (QUIC/HTTP-3 DDoS with XAI, 95.8% Acc) & IEEE PuneCon 2024 (LLM EduEvaluator Subjective Answer Evaluation).',
    chips: ['IJSRET 2026', 'IEEE PuneCon', 'Explainable AI'],
  },
  {
    tag: 'National Level',
    title: 'AICTE Rising Star 2026',
    subtitle: 'Govt of India Recognition',
    stat: 'Top 1000',
    desc: 'Recognized and featured among the top 1000 emerging tech innovators and technical contributors across India.',
    chips: ['Govt of India', 'Tech Innovator', 'AICTE'],
  },
];

export const HighlightsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [maxScroll, setMaxScroll] = useState(0);

  const xMotion = useMotionValue(0);
  const smoothX = useSpring(xMotion, { damping: 28, stiffness: 130, mass: 0.5 });

  useEffect(() => {
    const calculateBounds = () => {
      if (containerRef.current && trackRef.current) {
        const containerW = containerRef.current.clientWidth;
        const trackW = trackRef.current.scrollWidth;
        const max = Math.max(0, trackW - containerW + 48);
        setMaxScroll(max);
      }
    };

    calculateBounds();
    window.addEventListener('resize', calculateBounds);
    return () => window.removeEventListener('resize', calculateBounds);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || maxScroll <= 0) return;
    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const ratio = Math.max(0, Math.min(1, relativeX / rect.width));
    xMotion.set(-ratio * maxScroll);
  };

  const shiftTrack = (direction: 'left' | 'right') => {
    const current = xMotion.get();
    const step = 450;
    const next = direction === 'left' ? current + step : current - step;
    xMotion.set(Math.max(-maxScroll, Math.min(0, next)));
  };

  return (
    <section
      id="highlights"
      className="relative w-full py-24 sm:py-28 bg-[#070204] text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white overflow-hidden"
    >
      {/* Studio Ambient Burgundy Glows */}
      <div className="absolute top-1/4 left-1/4 w-[36rem] h-[36rem] bg-[#800020]/15 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#4A0018]/20 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 sm:px-12 lg:px-16 mb-8 relative z-20">
        {/* Eyebrow Header */}
        <div className="flex items-center space-x-4 mb-3">
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#C04A6E]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            KEY ACCOLADES // HOVER &amp; PAN
          </span>
          <div className="w-20 h-[1px] bg-gradient-to-r from-[#C04A6E] via-[#800020]/40 to-transparent" />
        </div>

        {/* Section Headline & Nav Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight uppercase leading-[0.85] select-none"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)] mr-3">
                PROVEN IMPACT
              </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.3)]">
                &amp; MILESTONES.
              </span>
            </h2>
            <p
              className="text-xs sm:text-sm font-light text-[#CDB4B4] max-w-lg mt-3 leading-relaxed"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              Hover across the section or swipe to explore research fellowships, national ranks, publications, and honors.
            </p>
          </div>

          {/* Quick Arrow Shift Controls */}
          <div className="hidden sm:flex items-center space-x-3 shrink-0">
            <button
              onClick={() => shiftTrack('left')}
              className="p-3 rounded-md border border-[#800020]/60 bg-[#120408]/80 hover:border-[#C04A6E] text-[#E8D8D8] hover:text-white transition-all duration-200 cursor-pointer"
              title="Pan Left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => shiftTrack('right')}
              className="p-3 rounded-md border border-[#800020]/60 bg-[#120408]/80 hover:border-[#C04A6E] text-[#E8D8D8] hover:text-white transition-all duration-200 cursor-pointer"
              title="Pan Right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Horizontal Hover / Drag Track */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full overflow-hidden z-20 py-4 cursor-grab active:cursor-grabbing select-none"
      >
        {/* Subtle Edge Vignettes */}
        <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-[#070204] to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-[#070204] to-transparent z-30 pointer-events-none" />

        <motion.div
          ref={trackRef}
          style={{ x: smoothX }}
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.08}
          className="flex gap-6 sm:gap-8 items-stretch will-change-transform px-6 sm:px-12 lg:px-16 w-max"
        >
          {bentoAccolades.map((item) => (
            <div
              key={item.title}
              className="w-[320px] sm:w-[400px] lg:w-[460px] shrink-0 relative p-8 sm:p-9 rounded-xl border border-[#800020]/60 bg-[#120408]/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden transition-all duration-300 hover:border-[#C04A6E] group flex flex-col justify-between"
            >
              {/* Top Highlight Line */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/80 to-transparent" />

              {/* Corner L-Pins */}
              <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-[#800020] group-hover:border-[#C04A6E] transition-colors" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-[#800020] group-hover:border-[#C04A6E] transition-colors" />

              <div>
                {/* Tag & Stat Row */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#C04A6E] px-2.5 py-0.5 border border-[#800020]/60 bg-[#2A000D]/60 rounded-sm">
                    {item.tag}
                  </span>
                  {item.stat && (
                    <span
                      className="text-3xl sm:text-4xl font-light text-[#F3EBEB] tracking-tight group-hover:text-[#C04A6E] transition-colors leading-none"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {item.stat}
                    </span>
                  )}
                </div>

                {/* Subtitle */}
                {item.subtitle && (
                  <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#947878] block mb-1">
                    // {item.subtitle}
                  </span>
                )}

                {/* Title */}
                <h3
                  className="text-2xl sm:text-3xl font-normal tracking-wide text-white mb-3 group-hover:text-[#F3EBEB] transition-colors uppercase leading-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p
                  className="text-xs sm:text-[13.5px] text-[#CDB4B4] font-light leading-relaxed mb-6 group-hover:text-[#E8D8D8] transition-colors"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {item.desc}
                </p>
              </div>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#800020]/30 mt-auto">
                {item.chips.map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#800020]/40 bg-[#1F040C]/70 text-[#E8D8D8] group-hover:border-[#C04A6E]/60 group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Pan Indicator Bar */}
      <div className="max-w-7xl w-full mx-auto mt-6 px-6 sm:px-12 lg:px-16 relative z-20 flex items-center justify-between">
        <div className="flex items-center space-x-2 text-[10px] font-mono uppercase text-[#947878]">
          <span className="text-[#C04A6E]">◄</span>
          <span>HOVER CURSOR ACROSS OR DRAG TO EXPLORE</span>
          <span className="text-[#C04A6E]">►</span>
        </div>
        <div className="w-24 h-[2px] bg-gradient-to-r from-[#800020] via-[#C04A6E] to-transparent rounded-full" />
      </div>
    </section>
  );
};

export default HighlightsSection;
