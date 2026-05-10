"use client";

import { motion } from "framer-motion";
import { Timeline, Database, MemoryStick, Send, Lock, Fingerprint, MapPin, List } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { ThreeDWrapper } from "@/components/ui/ThreeDWrapper";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      {/* Page Header */}
      <header className="mb-16 border-b border-white/5 pb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-6xl text-primary drop-shadow-[0_0_15px_rgba(0,219,233,0.4)] mb-4 tracking-tighter"
        >
          BIO_SCAN_PROTOCOL
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-lg text-white/60 max-w-2xl flex items-center gap-3"
        >
          <span className="w-2.5 h-2.5 bg-accent rounded-full inline-block shadow-[0_0_10px_rgba(195,244,0,0.8)]"></span>
          Parsing dual-degree neural pathways and ML architectural implementations.
        </motion.p>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        
        {/* Technical Timeline (Academic Pathways) */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="md:col-span-8 bg-[#1c1b1d]/80 backdrop-blur-xl rounded-xl p-8 border border-white/5 relative overflow-hidden group"
        >
          <div className="flex items-center gap-4 border-b border-accent/30 pb-4 mb-8">
            <Timeline className="text-accent" size={24} />
            <h2 className="font-display text-2xl text-white font-semibold">ACADEMIC_PATHWAYS</h2>
          </div>
          
          <div className="relative pl-8 border-l border-white/10 space-y-12">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[41px] top-1.5 w-4 h-4 bg-[#131315] border-2 border-primary rounded-full shadow-[0_0_10px_rgba(0,219,233,0.8)]"></div>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-3 gap-2">
                  <h3 className="font-display text-xl font-bold text-primary">{edu.degree}</h3>
                  <span className="font-mono text-[10px] text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                    {edu.duration}
                  </span>
                </div>
                <p className="font-mono text-xs text-white/40 mb-4 uppercase tracking-[0.2em]">{edu.institution}</p>
                <ul className="space-y-3">
                  {edu.highlights.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-white/60 leading-relaxed">
                      <span className="text-accent mt-1">→</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Sidebar Info */}
        <div className="md:col-span-4 flex flex-col gap-6">
          {/* Location Card */}
          <ThreeDWrapper intensity={20}>
            <div className="bg-[#1c1b1d]/80 backdrop-blur-xl rounded-xl p-8 border border-white/5 flex flex-col items-center justify-center relative overflow-hidden group min-h-[200px]">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
              <div className="relative z-10 flex flex-col items-center">
                <MapPin className="text-primary mb-4" size={48} />
                <h3 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] mb-2">CURRENT_NODE</h3>
                <p className="font-display text-4xl font-bold text-white tracking-tighter">{portfolioData.personal.location.toUpperCase()}</p>
                <div className="mt-4 flex items-center gap-3 text-accent">
                  <span className="w-2 h-2 bg-accent rounded-full animate-pulse shadow-[0_0_10px_rgba(195,244,0,1)]"></span>
                  <span className="font-mono text-[10px] uppercase tracking-widest">SYS_ONLINE</span>
                </div>
              </div>
            </div>
          </ThreeDWrapper>

          {/* Core Languages Card */}
          <div className="bg-[#1c1b1d]/80 backdrop-blur-xl rounded-xl p-8 border border-white/5 flex-grow">
            <h3 className="font-mono text-[10px] text-white/30 uppercase tracking-[0.3em] border-b border-white/5 pb-3 mb-6">BASE_LANGUAGES</h3>
            <div className="flex flex-wrap gap-2.5">
              {["Python", "C++", "JavaScript", "TypeScript", "SQL", "Go", "Rust"].map((lang) => (
                <span key={lang} className="px-4 py-1.5 bg-white/5 border border-white/10 text-white/70 font-mono text-[10px] uppercase tracking-wider rounded hover:border-primary hover:text-primary transition-all">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Protocol Logs / Achievements */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="md:col-span-12 mt-6"
        >
          <div className="flex items-center gap-4 border-b border-white/10 pb-4 mb-8">
            <List className="text-white/40" size={24} />
            <h2 className="font-display text-2xl text-white/50 font-semibold tracking-widest uppercase">PROTOCOL_LOGS // ACHIEVEMENTS</h2>
          </div>
          
          <div className="bg-[#0e0e10] border border-white/5 rounded-lg font-mono text-xs text-white/40 overflow-hidden shadow-2xl">
            {/* Log Headers */}
            <div className="grid grid-cols-12 gap-4 p-4 bg-[#1c1b1d] border-b border-white/5 uppercase tracking-[0.2em] text-[9px] font-bold">
              <div className="col-span-2">TIMESTAMP</div>
              <div className="col-span-3">EVENT_TYPE</div>
              <div className="col-span-5">DESCRIPTION</div>
              <div className="col-span-2 text-right">STATUS</div>
            </div>
            
            {/* Log Entries */}
            <div className="divide-y divide-white/5">
              {[
                { time: "2024.03.15", type: "HACKATHON_WIN", desc: "1st Place - Smart India Hackathon (SIH) 2023", status: "[SUCCESS]", color: "text-accent" },
                { time: "2023.11.02", type: "COMPETITION", desc: "Top 10 Finalist - NASA Space Apps Challenge", status: "[VERIFIED]", color: "text-primary" },
                { time: "2023.08.20", type: "CERTIFICATION", desc: "AWS Certified Machine Learning – Specialty", status: "[ACQUIRED]", color: "text-primary" },
                { time: "2023.05.12", type: "PROJECT_LAUNCH", desc: "Launched Predictive Yield Analysis Core V1", status: "[LIVE]", color: "text-accent" },
              ].map((log, i) => (
                <div key={i} className="grid grid-cols-12 gap-4 p-4 hover:bg-white/[0.02] transition-colors group">
                  <div className="col-span-2 text-primary opacity-60 group-hover:opacity-100">{log.time}</div>
                  <div className={`col-span-3 ${log.color} font-bold`}>{log.type}</div>
                  <div className="col-span-5 text-white/70 truncate">{log.desc}</div>
                  <div className="col-span-2 text-right text-white/40 font-bold group-hover:text-primary transition-colors">{log.status}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>
    </section>
  );
}
