import React from 'react';

const tickerItems = [
  {
    title: 'GATE DA 2026 AIR 2412',
    desc: 'Secured Top 3% nationwide in Data Science & Artificial Intelligence.',
  },
  {
    title: 'AICTE Rising Star 2026',
    desc: 'Recognized among the top 1000 technical talents across India.',
  },
  {
    title: 'IJSRET 2026 Publication',
    desc: 'QUIC/HTTP-3 DDoS flood detection framework with Explainable AI (95.8% Acc).',
  },
  {
    title: 'IEEE PuneCon 2024 Publication',
    desc: 'Automated Subjective Answer Sheet Evaluation System using LLMs & ML.',
  },
  {
    title: 'Technical Blogger',
    desc: 'Authoring high-impact AI articles on Medium (In Plain English).',
  },
  {
    title: 'Campus Mantri @ GFG',
    desc: 'GeeksforGeeks (Aug 2024 – Apr 2025): organized hackathons & coding events.',
  },
  {
    title: 'Open Source Contributor',
    desc: 'Active contributor in Hacktoberfest & GirlScript Summer of Code (GSSoC 2024).',
  },
  {
    title: 'IIT Madras Conclave',
    desc: 'Selected for advanced algorithmic problem-solving in Competitive Coding Conclave.',
  },
];

export const TickerSection: React.FC = () => {
  return (
    <div className="w-full bg-[#120408] border-y border-[#800020]/30 py-8 overflow-hidden select-none relative">
      <div className="flex space-x-6 animate-[marquee_35s_linear_infinite] w-max">
        {[...tickerItems, ...tickerItems].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-center min-w-[320px] max-w-[360px] p-4 rounded-sm border border-[#800020]/40 bg-[#1A0008]/80 shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
          >
            <span className="text-xs font-mono font-bold tracking-wider text-[#C04A6E] uppercase mb-1">
              ★ {item.title}
            </span>
            <p className="text-[11.5px] font-light text-[#CDB4B4] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
      
      {/* Edge Gradients */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#070204] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#070204] to-transparent pointer-events-none" />
    </div>
  );
};

export default TickerSection;
