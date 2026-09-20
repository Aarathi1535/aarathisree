import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:aarathisree.1535@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
    setSent(true);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#070204] text-[#F3EBEB] font-sans selection:bg-[#800020] selection:text-white pt-20 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
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
            GET IN TOUCH
          </span>
          <div className="w-16 h-[1px] bg-gradient-to-r from-[#C04A6E] via-[#800020]/40 to-transparent" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-4xl"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8D8D8] to-[#947878] drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
              LET'S BUILD SOMETHING
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#C04A6E] to-[#800020] drop-shadow-[0_8px_25px_rgba(166,27,69,0.3)]">
              IMPACTFUL.
            </span>
          </h2>
          <p
            className="text-xs sm:text-sm font-light text-[#CDB4B4] max-w-2xl mt-4 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Whether it's AI research, backend architecture, freelance collaboration, or exciting opportunities — I'd love to connect!
          </p>
        </motion.div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Contact Cards (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-sm border border-[#800020]/40 bg-[#120408]/90 flex items-center justify-between group hover:border-[#C04A6E]/80 transition-colors">
              <div>
                <span className="text-[9.5px] font-mono tracking-widest uppercase text-[#947878] block mb-1">
                  // EMAIL
                </span>
                <span className="text-xs sm:text-[13px] font-mono text-[#F3EBEB]">
                  aarathisree.1535@gmail.com
                </span>
              </div>
              <button
                onClick={() => handleCopy('aarathisree.1535@gmail.com', 'email')}
                className="px-3 py-1 text-[10px] font-mono border border-[#800020] text-[#C04A6E] hover:bg-[#800020] hover:text-white transition-colors rounded-sm cursor-pointer"
              >
                {copied === 'email' ? 'COPIED ✓' : 'COPY'}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-sm border border-[#800020]/40 bg-[#120408]/90 flex items-center justify-between group hover:border-[#C04A6E]/80 transition-colors">
              <div>
                <span className="text-[9.5px] font-mono tracking-widest uppercase text-[#947878] block mb-1">
                  // PHONE / WHATSAPP
                </span>
                <span className="text-xs sm:text-[13px] font-mono text-[#F3EBEB]">
                  +91-9381481266
                </span>
              </div>
              <button
                onClick={() => handleCopy('+919381481266', 'phone')}
                className="px-3 py-1 text-[10px] font-mono border border-[#800020] text-[#C04A6E] hover:bg-[#800020] hover:text-white transition-colors rounded-sm cursor-pointer"
              >
                {copied === 'phone' ? 'COPIED ✓' : 'COPY'}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-sm border border-[#800020]/40 bg-[#120408]/90 flex items-center justify-between">
              <div>
                <span className="text-[9.5px] font-mono tracking-widest uppercase text-[#947878] block mb-1">
                  // LOCATION
                </span>
                <span className="text-xs sm:text-[13px] font-mono text-[#F3EBEB]">
                  Andhra Pradesh, India
                </span>
              </div>
              <span className="text-[9.5px] font-mono text-[#10B981] tracking-wider uppercase">
                OPEN TO RELOCATE / REMOTE
              </span>
            </div>

            {/* Social Hub */}
            <div className="flex flex-wrap gap-2.5 pt-4">
              <a
                href="https://www.linkedin.com/in/aarathisree-balla-349b66284/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-[10.5px] font-mono tracking-wider border border-[#800020]/50 hover:border-[#C04A6E] text-[#CDB4B4] hover:text-white bg-[#1A0008]/40 transition-colors rounded-sm"
              >
                LINKEDIN ↗
              </a>
              <a
                href="https://github.com/Aarathi1535"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-[10.5px] font-mono tracking-wider border border-[#800020]/50 hover:border-[#C04A6E] text-[#CDB4B4] hover:text-white bg-[#1A0008]/40 transition-colors rounded-sm"
              >
                GITHUB ↗
              </a>
              <a
                href="https://leetcode.com/u/aarathi_1535/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-[10.5px] font-mono tracking-wider border border-[#800020]/50 hover:border-[#C04A6E] text-[#CDB4B4] hover:text-white bg-[#1A0008]/40 transition-colors rounded-sm"
              >
                LEETCODE ↗
              </a>
              <a
                href="https://medium.com/@aarathisree.1535"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-[10.5px] font-mono tracking-wider border border-[#800020]/50 hover:border-[#C04A6E] text-[#CDB4B4] hover:text-white bg-[#1A0008]/40 transition-colors rounded-sm"
              >
                MEDIUM ↗
              </a>
            </div>
          </div>

          {/* Right Column: Monolith Transmission Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#800020]/50 bg-[#120408]/90 p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] overflow-hidden"
          >
            {/* Top Light Accent */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#C04A6E]/80 to-transparent" />
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#800020]" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#800020]" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#800020]" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#800020]" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#C04A6E] text-[#C04A6E] text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION REGISTERED
                </h3>
                <p className="text-xs text-[#CDB4B4] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Email client opened successfully.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-4 py-2 border border-[#800020] text-xs text-[#C04A6E] hover:border-[#C04A6E] transition-colors rounded-sm cursor-pointer"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#947878] mb-2">
                      // YOUR NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Alex Morgan"
                      className="w-full bg-[#1A0008]/60 border border-[#800020]/40 focus:border-[#C04A6E] text-xs text-white placeholder-[#947878]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#947878] mb-2">
                      // YOUR EMAIL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@organization.com"
                      className="w-full bg-[#1A0008]/60 border border-[#800020]/40 focus:border-[#C04A6E] text-xs text-white placeholder-[#947878]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#947878] mb-2">
                    // SUBJECT
                  </span>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. AI Research Collaboration / Backend Project Inquiry"
                    className="w-full bg-[#1A0008]/60 border border-[#800020]/40 focus:border-[#C04A6E] text-xs text-white placeholder-[#947878]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#947878] mb-2">
                    // MESSAGE
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Aarathisree, I'd like to discuss..."
                    className="w-full bg-[#1A0008]/60 border border-[#800020]/40 focus:border-[#C04A6E] text-xs text-white placeholder-[#947878]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#800020] bg-[#4A0018]/90 hover:border-[#C04A6E] hover:bg-[#800020] text-[#F3EBEB] hover:text-white text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_4px_20px_rgba(128,0,32,0.4)] cursor-pointer rounded-sm"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SEND MESSAGE DIRECTLY ↗
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-12 border-t border-[#800020]/25 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h3
              className="text-2xl text-white tracking-wide uppercase leading-none mb-1"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              AARATHISREE <span className="text-[#C04A6E]">BALLA</span>
            </h3>
            <p className="text-[11px] font-mono text-[#947878]">
              AI/ML Researcher | Software Engineer &bull; CVIT, IIIT Hyderabad
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10.5px] font-mono uppercase text-[#CDB4B4]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#highlights" className="hover:text-white transition-colors">Highlights</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#publications" className="hover:text-white transition-colors">Publications</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#entrepreneurship" className="hover:text-white transition-colors">Ventures</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <div className="text-right text-[10px] font-mono text-[#947878] space-y-1">
            <p>&copy; {new Date().getFullYear()} Aarathisree Balla. All rights reserved.</p>
            <p>Engineered with Precision, Modern Aesthetics &amp; Neural Interactive Tech.</p>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;
