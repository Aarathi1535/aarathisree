import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import watermarkImg from '../assets/watermark.png';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const navItems = [
  { name: 'HOME', href: '#home' },
  { name: 'HIGHLIGHTS', href: '#highlights' },
  { name: 'ABOUT', href: '#about' },
  { name: 'PUBLICATIONS', href: '#publications' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#projects' },
  { name: 'VENTURES', href: '#entrepreneurship' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [cursorPos, setCursorPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative w-screen h-screen overflow-hidden bg-black text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white cursor-none">
      {/* ================= 1. MINIMAL CUSTOM CURSOR ================= */}
      {cursorPos.x >= 0 && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#C04A6E]/50 flex items-center justify-center backdrop-blur-[1px]"
          animate={{
            x: cursorPos.x - (isHovered ? 24 : 5),
            y: cursorPos.y - (isHovered ? 24 : 5),
            width: isHovered ? 48 : 10,
            height: isHovered ? 48 : 10,
            backgroundColor: isHovered ? 'rgba(166, 27, 69, 0.2)' : 'rgba(192, 74, 110, 0.95)',
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 350, mass: 0.5 }}
        />
      )}

      {/* ================= 2. FIXED CINEMATIC WALKING WOMAN VIDEO LAYER (EXACT LIKE REFERENCE) ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-black flex items-center justify-end">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="h-screen w-auto max-w-none object-contain origin-right scale-95 md:scale-[0.98] lg:scale-100"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Seamless Soft Left Edge Blend */}
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-black via-black/85 to-transparent pointer-events-none" />

        {/* Ambient Burgundy Glow Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[38rem] h-[38rem] bg-[#800020]/20 rounded-full blur-[180px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[32rem] h-[32rem] bg-[#4A0018]/25 rounded-full blur-[170px] pointer-events-none" />

        {/* ================= 3. ANIMATED WATERMARK EMBLEM ================= */}
        <div className="absolute bottom-6 right-6 lg:bottom-10 lg:right-12 pointer-events-none flex items-center justify-center z-10">
          <div className="relative flex items-center justify-center">
            <div className="absolute w-36 h-36 bg-black/85 rounded-full blur-xl" />

            <motion.div
              animate={{
                y: [-3, 3, -3],
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative flex items-center justify-center"
            >
              <img
                src={watermarkImg}
                alt="Insignia"
                className="w-28 h-28 lg:w-32 lg:h-32 object-contain drop-shadow-[0_0_15px_rgba(128,0,32,0.4)]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ================= 4. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto z-30">
          {/* Left: Branding / Logo */}
          <div className="flex items-center shrink-0 mr-4 lg:mr-6">
            <a
              href="#home"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-xs sm:text-sm font-semibold tracking-[0.35em] uppercase text-[#F3EBEB] hover:text-[#C04A6E] transition-colors whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              AARATHISREE.
            </a>
          </div>

          {/* Center: Navigation Links (Flex Flow, No absolute overlap) */}
          <nav
            className="hidden xl:flex items-center justify-center space-x-4 2xl:space-x-7 text-[10px] 2xl:text-[11px] tracking-[0.2em] 2xl:tracking-[0.24em] font-light uppercase text-[#CDB4B4] mx-auto shrink"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 whitespace-nowrap transition-colors duration-300 hover:text-white"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C04A6E] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center shrink-0 ml-4 lg:ml-6 space-x-3">
            <a
              href="#contact"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group flex items-center space-x-2 text-[10.5px] sm:text-[11px] tracking-[0.22em] font-light uppercase py-2 px-3.5 sm:px-4 border border-[#800020]/60 bg-[#2A000D]/40 hover:border-[#C04A6E] hover:bg-[#800020]/40 text-[#F3EBEB] transition-all duration-300 backdrop-blur-sm shadow-[0_0_15px_rgba(128,0,32,0.2)] whitespace-nowrap"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <span>LET&apos;S CONNECT</span>
              <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs text-[#C04A6E]">
                ↗
              </span>
            </a>

            {/* Mobile / Tablet Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden flex flex-col justify-center items-center w-9 h-9 border border-[#800020]/60 bg-[#2A000D]/70 rounded text-[#F3EBEB] hover:border-[#C04A6E] transition-colors p-1.5 focus:outline-none"
              aria-label="Toggle navigation"
            >
              <span className={`block w-4 h-0.5 bg-[#F3EBEB] transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1' : ''}`} />
              <span className={`block w-4 h-0.5 bg-[#F3EBEB] my-1 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-4 h-0.5 bg-[#F3EBEB] transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1' : ''}`} />
            </button>
          </div>

          {/* Mobile / Tablet Slide-down Nav Drawer */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="xl:hidden absolute top-full left-0 right-0 mt-3 p-5 bg-[#0E0306]/95 border border-[#800020]/80 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.95)] rounded-lg z-50 flex flex-col space-y-2.5"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[10.5px] tracking-[0.18em] font-light uppercase text-[#CDB4B4]">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="py-2 px-3 border border-[#800020]/40 bg-[#1A0008]/60 hover:border-[#C04A6E] hover:text-white rounded transition-colors text-center"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Headline & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-[37rem] xl:max-w-[42rem] pointer-events-auto z-20"
          >
            {/* Status Badge */}
            <motion.div variants={fadeUpVariants} className="mb-3.5">
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full border border-[#800020]/70 bg-[#2A000D]/70 backdrop-blur-md shadow-[0_0_20px_rgba(128,0,32,0.3)]">
                <span className="w-2 h-2 rounded-full bg-[#C04A6E] animate-pulse" />
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-[#E8D8D8]">
                  Research Fellow @ CVIT, IIIT Hyderabad
                </span>
              </div>
            </motion.div>

            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-3.5 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[7.2rem] xl:text-[7.8rem] tracking-tight uppercase leading-[0.83]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {/* Line 1: ARCHITECTING */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  ARCHITECTING
                </span>

                {/* Line 2: INTELLIGENT AI */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.35)]">
                  INTELLIGENT AI
                </span>

                {/* Line 3: & SCALABLE SYSTEMS */}
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#F3EBEB] via-[#A61B45] to-[#4A0018] drop-shadow-[0_10px_30px_rgba(128,0,32,0.4)]">
                  &amp; SCALABLE SYSTEMS.
                </span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.div variants={fadeUpVariants} className="mb-4">
              <p
                className="text-xs sm:text-[13px] font-normal tracking-[0.24em] uppercase text-[#C04A6E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Hi, I'm Aarathisree — <span className="text-[#F3EBEB]">AI/ML Researcher &amp; Engineer</span>
              </p>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[13.5px] font-light text-[#CDB4B4] leading-[1.8] tracking-wide max-w-lg mb-6 space-y-1"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                AI/ML researcher and software engineer focused on computer vision, multimodal AI, large language models, explainable AI, and high-performance backend architectures. Currently a Research Fellow at CVIT, IIIT Hyderabad under Prof. C. V. Jawahar.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-wrap items-center gap-4 sm:gap-5 mb-5"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <motion.a
                href="#projects"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-7 py-3.5 border border-[#800020] bg-[#4A0018]/80 hover:border-[#C04A6E] hover:bg-[#800020] text-[#F3EBEB] hover:text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(128,0,32,0.3)] rounded-sm"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/60 to-transparent pointer-events-none" />
                <span>EXPLORE PROJECTS</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 text-xs text-[#C04A6E]">
                  ↗
                </span>
              </motion.a>

              <motion.a
                href="#publications"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#800020]/50 bg-[#2A000D]/40 hover:border-[#800020] text-[#D4B8B8] hover:text-[#F3EBEB] text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 rounded-sm"
              >
                <span>RESEARCH PAPERS</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 text-xs">
                  ↗
                </span>
              </motion.a>
            </motion.div>

            {/* Social Pills */}
            <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-2.5">
              <a
                href="https://www.linkedin.com/in/aarathisree-balla-349b66284/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-3.5 py-1.5 text-[10px] font-mono tracking-wider border border-[#800020]/40 bg-[#1A0008]/60 text-[#CDB4B4] hover:text-white hover:border-[#C04A6E] hover:bg-[#4A0018]/50 transition-all rounded-sm"
              >
                LINKEDIN ↗
              </a>
              <a
                href="https://github.com/Aarathi1535"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-3.5 py-1.5 text-[10px] font-mono tracking-wider border border-[#800020]/40 bg-[#1A0008]/60 text-[#CDB4B4] hover:text-white hover:border-[#C04A6E] hover:bg-[#4A0018]/50 transition-all rounded-sm"
              >
                GITHUB ↗
              </a>
              <a
                href="https://leetcode.com/u/aarathi_1535/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-3.5 py-1.5 text-[10px] font-mono tracking-wider border border-[#800020]/40 bg-[#1A0008]/60 text-[#CDB4B4] hover:text-white hover:border-[#C04A6E] hover:bg-[#4A0018]/50 transition-all rounded-sm"
              >
                LEETCODE ↗
              </a>
              <a
                href="https://medium.com/@aarathisree.1535"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="px-3.5 py-1.5 text-[10px] font-mono tracking-wider border border-[#800020]/40 bg-[#1A0008]/60 text-[#CDB4B4] hover:text-white hover:border-[#C04A6E] hover:bg-[#4A0018]/50 transition-all rounded-sm"
              >
                MEDIUM ↗
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-24 xl:pr-36 mr-4 z-20 select-none"
          >
            {/* Quote Mark */}
            <span className="text-xl text-[#C04A6E] leading-none font-serif mb-2">
              “
            </span>

            {/* Compact Two-Line Statement */}
            <div 
              className="text-[9.5px] font-medium tracking-[0.24em] uppercase text-[#F3EBEB] space-y-1 mb-3"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>CODE IS MY CRAFT.</p>
              <p>IMPACT IS MY GOAL.</p>
            </div>

            {/* Burgundy Accent Line */}
            <div className="w-28 h-[1px] bg-gradient-to-r from-[#C04A6E] via-[#800020] to-transparent shadow-[0_0_8px_rgba(192,74,110,0.4)] mb-2" />

            {/* Fine Monoline Calligraphy Signature */}
            <div 
              className="text-[2.2rem] text-[#C04A6E] font-normal leading-none -ml-0.5"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Aarathisree
            </div>
          </motion.div>
        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;
