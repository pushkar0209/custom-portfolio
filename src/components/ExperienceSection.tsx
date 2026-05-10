"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { portfolioData } from "@/data/portfolio";
import { experienceApi } from "@/lib/api";
import { Database, User, MessageSquare, Briefcase, Calendar, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

type Experience = typeof portfolioData.experience[0];

export function ExperienceSection() {
  const [experience, setExperience] = useState<Experience[]>(portfolioData.experience);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperience = async () => {
      try {
        setLoading(true);
        const data = await experienceApi.getAll();
        if (data && data.length > 0) {
          setExperience(data);
        }
      } catch (err) {
        console.warn("⚠️ Backend unavailable, using local experience data.");
      } finally {
        setLoading(false);
      }
    };
    fetchExperience();
  }, []);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Header */}
      <header className="mb-16 border-b border-accent/20 pb-8 flex flex-col md:flex-row justify-between items-end gap-4">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-3xl md:text-5xl text-accent uppercase tracking-tighter"
          >
            System Integration Log
          </motion.h2>
          <div className="font-mono text-xs text-white/40 mt-4 flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(0,219,233,0.8)]"></span>
            ACTIVE DEPLOYMENT HISTORY
          </div>
        </div>
      </header>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Experience Stream (Main Column) */}
        <div className="md:col-span-8 space-y-8">
          {experience.map((exp, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-[#1c1b1d]/80 backdrop-blur-3xl border border-white/5 p-8 relative overflow-hidden group rounded-xl"
            >
              {/* Neon Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_15px_rgba(0,219,233,0.5)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between mb-8 pl-4">
                <div>
                  <h3 className="font-display text-2xl text-white font-bold mb-2 group-hover:text-primary transition-colors">{exp.role}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-white/30 font-mono text-[10px] uppercase tracking-widest">
                    <span className="flex items-center gap-2">
                      <Briefcase size={12} className="text-primary" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-2">
                      <MapPin size={12} />
                      {exp.location}
                    </span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 px-4 py-1.5 bg-[#131315] border border-primary/20 rounded font-mono text-[10px] text-primary font-bold">
                  {exp.period.toUpperCase()}
                </div>
              </div>

              <div className="pl-4 relative">
                {/* Thread Line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-accent/10"></div>
                
                <p className="font-body text-base text-white/50 mb-8 leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                <ul className="space-y-4 mb-8">
                  {exp.achievements.map((ach, j) => (
                    <li key={j} className="relative pl-8 text-sm text-white/70 leading-relaxed">
                      <span className="absolute left-0 top-[10px] w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_5px_rgba(195,244,0,0.8)]"></span>
                      {ach}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, j) => (
                    <span key={j} className="px-3 py-1 bg-white/[0.03] border border-white/10 text-white/40 font-mono text-[9px] uppercase tracking-wider rounded group-hover:border-primary/20 transition-all">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Sidecar (Right Column) */}
        <div className="md:col-span-4 space-y-8">
          <div className="bg-[#1c1b1d]/40 border border-white/5 rounded-xl p-8 sticky top-24 shadow-2xl">
            <h4 className="font-mono text-[10px] text-accent tracking-[0.3em] uppercase mb-8 flex items-center border-b border-accent/20 pb-4">
              <MessageSquare className="mr-3" size={16} />
              Peer Reviews
            </h4>
            
            <div className="space-y-6">
              {[
                { name: "Prof. Anil Kumar", role: "Dept. of Computer Science", text: "An exceptional talent in bridging the gap between complex ML theory and practical, robust full-stack implementation." },
                { name: "Dr. Ramesh Babu", role: "Lead AI Researcher", text: "Consistently delivered high-quality, scalable code. A methodical problem solver with a deep understanding of system architecture." }
              ].map((review, i) => (
                <div key={i} className="bg-white/[0.02] p-6 rounded-lg border border-white/5 hover:border-accent/30 transition-all group">
                  <p className="font-body text-sm text-white/50 italic mb-6 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#131315] border border-accent/30 flex items-center justify-center">
                      <User size={20} className="text-accent" />
                    </div>
                    <div>
                      <p className="font-display text-sm font-bold text-white group-hover:text-accent transition-colors">{review.name}</p>
                      <p className="font-mono text-[9px] text-white/30 uppercase tracking-widest">{review.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
