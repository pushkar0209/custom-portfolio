"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Fingerprint, Key, GraduationCap, ShieldCheck, Zap, Activity } from "lucide-react";
import { ThreeDWrapper } from "@/components/ui/ThreeDWrapper";
import { portfolioData } from "@/data/portfolio";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="section-label mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

export function IdentitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="identity" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-14 glass-card border border-white/5 p-8 relative overflow-hidden rounded-2xl bg-surface-dim/40 backdrop-blur-3xl"
        >
          {/* Animated Scan Line */}
          <motion.div 
            animate={{ top: ["-10%", "110%"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-1 bg-primary/20 shadow-[0_0_20px_#00dbe9] pointer-events-none z-10"
          />
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-accent text-black px-2 py-0.5 font-mono text-[9px] font-bold rounded-sm tracking-widest uppercase">LEVEL: OMEGA_RED</span>
                <span className="text-primary font-mono text-[10px] tracking-widest">REF_ID: 0x99_NEURAL_CORE</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold uppercase tracking-tighter">
                Subject_Profile_Scan
              </h2>
            </div>
            <div className="text-right font-mono text-[10px] text-white/30 space-y-1">
              <div>CLEARANCE_LEVEL: <span className="text-accent">OMEGA_RED</span></div>
              <div>LAST_SYNC: {new Date().toISOString().split('T')[0].replace(/-/g, '.')}_UTC</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Neural Core Visualization */}
          <div className="md:col-span-8">
            <ThreeDWrapper intensity={5}>
              <div className="glass-card rounded-2xl border border-white/5 p-0 min-h-[500px] relative overflow-hidden bg-surface-dim/40 backdrop-blur-3xl group">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc48?q=80&w=2070&auto=format&fit=crop" 
                  alt="Neural Profile Visualization" 
                  className="w-full h-full object-cover opacity-40 mix-blend-screen scale-110 group-hover:scale-100 transition-transform duration-1000"
                />
                
                {/* HUD Overlays */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-20 pointer-events-none">
                  <div className="flex justify-between">
                    <div className="border-l-2 border-t-2 border-primary/40 w-12 h-12" />
                    <div className="border-r-2 border-t-2 border-primary/40 w-12 h-12" />
                  </div>
                  
                  {/* Regions */}
                  <div className="absolute top-1/4 left-10 pointer-events-auto">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/60 border border-primary/40 p-4 backdrop-blur-xl rounded-lg"
                    >
                      <p className="font-mono text-[9px] text-accent tracking-widest uppercase">REGION_01: NLP</p>
                      <p className="font-mono text-[10px] text-primary mt-1">STATUS: ACTIVE_SYNC</p>
                      <div className="w-32 h-1 bg-white/5 mt-3 rounded-full overflow-hidden">
                        <div className="bg-primary h-full w-[94%] shadow-[0_0_8px_#00dbe9]" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="absolute bottom-1/4 right-10 pointer-events-auto">
                    <motion.div 
                      whileHover={{ scale: 1.05 }}
                      className="bg-black/60 border border-accent/40 p-4 backdrop-blur-xl rounded-lg"
                    >
                      <p className="font-mono text-[9px] text-accent tracking-widest uppercase">REGION_04: COMP_VISION</p>
                      <p className="font-mono text-[10px] text-white/40 mt-1">STATUS: OPTIMIZED</p>
                      <div className="w-32 h-1 bg-white/5 mt-3 rounded-full overflow-hidden">
                        <div className="bg-accent h-full w-[88%] shadow-[0_0_8px_#c3f400]" />
                      </div>
                    </motion.div>
                  </div>

                  <div className="flex justify-between">
                    <div className="border-l-2 border-b-2 border-primary/40 w-12 h-12" />
                    <div className="border-r-2 border-b-2 border-primary/40 w-12 h-12" />
                  </div>
                </div>
              </div>
            </ThreeDWrapper>
          </div>

          {/* Side Panels */}
          <div className="md:col-span-4 flex flex-col gap-6">
            {/* Clearance Keys */}
            <div className="glass-card rounded-2xl border border-white/5 p-6 bg-surface-dim/40 backdrop-blur-3xl">
              <div className="flex items-center gap-3 mb-6">
                <Key size={18} className="text-accent" />
                <h3 className="font-display font-bold text-white text-lg tracking-tighter">Clearance_Keys</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "ENCRYPTION_LAYER_01", value: "78-EF-92-B1-4C-D3-00-FF-AE-41", color: "text-accent" },
                  { label: "RSA_PRIVATE_TOKEN", value: "K9-XJ-01-PQ-LL-55-9Z-WA-88-RT", color: "text-primary" }
                ].map((k, i) => (
                  <div key={i} className="p-4 bg-black/40 border border-white/5 rounded-lg">
                    <p className="font-mono text-[8px] text-white/30 uppercase tracking-[0.2em] mb-2">{k.label}</p>
                    <p className={`font-mono text-[9px] break-all ${k.color} opacity-80`}>{k.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="flex justify-between mb-2">
                  <span className="font-mono text-[9px] text-white/30 uppercase">DECRYPT_PROGRESS</span>
                  <span className="font-mono text-[9px] text-primary font-bold">99.9%</span>
                </div>
                <div className="w-full h-1.5 bg-white/5 relative rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "99.9%" }}
                    className="absolute inset-0 bg-primary shadow-[0_0_10px_#00dbe9]" 
                  />
                </div>
              </div>
            </div>

            {/* Sync History */}
            <div className="glass-card rounded-2xl border border-white/5 p-6 bg-surface-dim/40 backdrop-blur-3xl">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap size={18} className="text-primary" />
                <h3 className="font-display font-bold text-white text-lg tracking-tighter">Sync_History</h3>
              </div>
              <div className="space-y-6">
                {portfolioData.education.map((edu, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="font-mono text-[10px] text-white/60 tracking-tight">{edu.degree.replace(/ /g, '_')}</span>
                      <span className="text-accent font-mono text-[9px] font-bold">COMPLETE</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="bg-accent h-full w-full shadow-[0_0_5px_#c3f400]" />
                    </div>
                  </div>
                ))}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="font-mono text-[10px] text-white/30 tracking-tight">PhD_Quantum_Computing</span>
                    <span className="text-primary font-mono text-[9px] font-bold">62%_SYNC</span>
                  </div>
                  <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-[62%] shadow-[0_0_5px_#00dbe9]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Metrics (Bottom Row) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-6">
          <div className="md:col-span-4 glass-card rounded-2xl border border-white/5 p-8 bg-surface-dim/40">
            <p className="font-mono text-[9px] text-accent uppercase tracking-[0.3em] mb-6">SYSTEM_UPTIME</p>
            <div className="flex items-end gap-3">
              <span className="font-display text-5xl font-bold leading-none">24,512</span>
              <span className="font-mono text-[10px] text-white/30 mb-1">HOURS</span>
            </div>
            <div className="mt-6 flex gap-1.5 h-10 items-end">
              {[1, 0.8, 0.6, 0.4, 0.2, 0.1, 0.1, 0.1].map((v, i) => (
                <div key={i} className="flex-1 bg-accent/20 rounded-t-sm transition-all" style={{ height: `${v * 100}%`, backgroundColor: i < 5 ? '#c3f400' : 'rgba(255,255,255,0.05)' }} />
              ))}
            </div>
          </div>

          <div className="md:col-span-8 glass-card rounded-2xl border border-white/5 p-8 bg-surface-dim/40 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h4 className="font-display text-xl font-bold text-primary mb-3 tracking-tight">Neural_Synthesis_Protocol</h4>
              <p className="font-body text-sm text-white/40 leading-relaxed max-w-xl">
                Subject shows high-affinity for recursive algorithmic optimization and distributed neural network architectures. Behavioral logs indicate a preference for minimalist coding environments and low-latency feedback loops.
              </p>
            </div>
            <div className="flex gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-4 border-accent flex items-center justify-center mb-2 shadow-[0_0_15px_#c3f400] text-xl font-bold">
                  A+
                </div>
                <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest">APTITUDE</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border-4 border-primary flex items-center justify-center mb-2 shadow-[0_0_15px_#00dbe9]">
                  <Zap size={24} className="text-primary" />
                </div>
                <p className="font-mono text-[8px] text-white/30 uppercase tracking-widest">STRESS_TOL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
