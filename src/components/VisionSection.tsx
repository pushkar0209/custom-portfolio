"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Target, Maximize, Cpu, Activity, Zap, Box, Terminal } from "lucide-react";
import { ThreeDWrapper } from "@/components/ui/ThreeDWrapper";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="section-label mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

export function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="vision" className="relative py-28 bg-[#070710]/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <SectionLabel>// quantum_vision // diagnostics</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white tracking-tighter">
              Quantum <span className="gradient-text-primary">Vision</span>
            </h2>
            <p className="text-white/45 max-w-2xl text-lg mt-4 leading-relaxed">
              Advanced computer vision diagnostics. Visualizing real-time neural processing and object localization through the PSM_CORE architecture.
            </p>
          </div>
          <div className="hidden md:block px-4 py-1 bg-accent text-black font-mono text-[10px] font-bold tracking-[0.3em] uppercase">
            LIVE_STREAM
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Main Surveillance Feed */}
          <div className="md:col-span-8">
            <ThreeDWrapper intensity={5}>
              <div className="glass-card rounded-2xl border border-white/5 overflow-hidden group bg-surface-dim/40 backdrop-blur-3xl relative">
                {/* Scanner Line */}
                <motion.div 
                  animate={{ top: ["0%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-accent shadow-[0_0_15px_#c3f400] z-20 pointer-events-none"
                />

                <div className="absolute top-6 left-6 z-30 flex gap-3">
                  <span className="bg-black/60 backdrop-blur-md border border-primary/20 px-3 py-1.5 text-primary font-mono text-[9px] font-bold tracking-widest rounded-sm uppercase">CAM_01: FACE_ANALYSIS</span>
                  <span className="bg-black/60 backdrop-blur-md border border-accent/20 px-3 py-1.5 text-accent font-mono text-[9px] font-bold tracking-widest rounded-sm uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> REC
                  </span>
                </div>

                <div className="relative aspect-video bg-black overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070&auto=format&fit=crop" 
                    alt="Computer Vision Feed"
                    className="w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 transition-all duration-1000"
                  />
                  
                  {/* CV Overlays */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Bounding Box */}
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.02, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute top-1/4 left-1/3 w-1/3 h-1/2 border-2 border-primary shadow-[0_0_20px_rgba(0,219,233,0.4)]"
                    >
                      <div className="absolute -top-7 left-0 bg-primary text-black px-3 py-1 text-[9px] font-bold font-mono tracking-tighter">
                        SUBJECT_01 // CONF: 0.9982
                      </div>
                      
                      {/* Landmark Points */}
                      {[
                        { top: "40%", left: "30%" },
                        { top: "40%", left: "70%" },
                        { top: "60%", left: "50%" },
                      ].map((p, i) => (
                        <div key={i} className="absolute w-1.5 h-1.5 bg-accent rounded-full shadow-[0_0_8px_#c3f400]" style={p} />
                      ))}
                      <div className="absolute top-[75%] left-[35%] w-[30%] h-[1px] bg-accent/40" />
                    </motion.div>

                    {/* Crosshair */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-white/10 border-dashed rounded-full" />
                  </div>
                </div>

                <div className="p-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 bg-black/20">
                  <div className="space-y-1">
                    <h3 className="font-display text-xl font-bold text-white tracking-tight">Facial_Recog_V4</h3>
                    <p className="font-mono text-[10px] text-white/30 uppercase tracking-widest">Latency: 12ms | Model: TensorRT_V1</p>
                  </div>
                  <button className="px-8 py-3 bg-primary/10 border border-primary/40 text-primary font-mono text-[10px] font-bold tracking-[0.2em] hover:bg-primary hover:text-black transition-all flex items-center gap-3">
                    <Terminal size={14} /> EXECUTE_MODEL
                  </button>
                </div>
              </div>
            </ThreeDWrapper>
          </div>

          {/* Stats Sidecar */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="glass-card rounded-2xl border border-white/5 p-8 bg-surface-dim/40 backdrop-blur-3xl flex-1 flex flex-col">
              <div className="font-mono text-[9px] text-accent font-bold tracking-[0.3em] mb-8 uppercase">SYSTEM_METRICS</div>
              <div className="space-y-10 flex-grow">
                {[
                  { label: "CPU_LOAD", val: "42%", progress: 42, color: "primary" },
                  { label: "NEURAL_THROUGHPUT", val: "88%", progress: 88, color: "accent" },
                  { label: "MEMORY_BUFFER", val: "12.4GB / 32GB", progress: 38, color: "white" },
                ].map((m, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between font-mono text-[10px] text-white/40">
                      <span>{m.label}</span>
                      <span className={m.color === 'primary' ? 'text-primary' : m.color === 'accent' ? 'text-accent' : 'text-white'}>{m.val}</span>
                    </div>
                    <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${m.progress}%` }}
                        className={`h-full ${m.color === 'primary' ? 'bg-primary shadow-[0_0_10px_#00dbe9]' : m.color === 'accent' ? 'bg-accent shadow-[0_0_10px_#c3f400]' : 'bg-white/40'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-10 border-t border-white/5">
                <div className="text-[10px] font-mono font-bold text-white/30 mb-4 tracking-widest uppercase">LOG_HISTORY</div>
                <div className="space-y-3 font-mono text-[10px] text-white/20">
                  <div className="flex gap-2"><span className="text-accent">[14:02:11]</span> Face_Detected_ID:0082</div>
                  <div className="flex gap-2"><span className="text-accent">[14:02:08]</span> Handshake_Protocol: OK</div>
                  <div className="flex gap-2"><span className="text-red-400">[14:01:55]</span> Signal_Noise_Detected: 0.2%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Cards */}
          <div className="md:col-span-4 glass-card rounded-2xl border border-white/5 overflow-hidden group bg-surface-dim/40 relative">
            <div className="aspect-square relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-all duration-700" 
                alt="Detection Card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-32 h-32 border border-accent/30 rounded-full border-dashed"
                />
              </div>
            </div>
            <div className="p-6 bg-black/40">
              <h4 className="font-display text-lg font-bold text-white mb-2 tracking-tight">Drowsiness_Detector</h4>
              <p className="text-white/30 text-xs font-mono leading-relaxed uppercase tracking-tighter">Real-time eye-closure monitoring using EAR algorithms.</p>
            </div>
          </div>

          <div className="md:col-span-4 glass-card rounded-2xl border border-white/5 overflow-hidden group bg-surface-dim/40 relative">
            <div className="aspect-square relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover grayscale opacity-30 group-hover:opacity-60 transition-all duration-700" 
                alt="Detection Card"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
            </div>
            <div className="p-6 bg-black/40">
              <h4 className="font-display text-lg font-bold text-white mb-2 tracking-tight">Object_Flow_3D</h4>
              <p className="text-white/30 text-xs font-mono leading-relaxed uppercase tracking-tighter">Multi-object tracking across dynamic environments.</p>
            </div>
          </div>

          <div className="md:col-span-4 glass-card rounded-2xl border border-primary/20 p-8 bg-primary/5 backdrop-blur-3xl flex flex-col justify-center items-center text-center">
            <div className="relative mb-6">
              <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center group-hover:shadow-[0_0_20px_#00dbe9] transition-all">
                <Activity size={40} className="text-primary" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-4 border-black" />
            </div>
            <h4 className="font-display text-xl font-bold text-white mb-2">Neural_Core_Status</h4>
            <p className="font-mono text-[9px] text-white/40 uppercase tracking-[0.3em] mb-8">SYSTEM_OPERATIONAL // V1.0.4</p>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                <div className="text-xl font-bold text-primary">1.2ms</div>
                <div className="text-[8px] uppercase text-white/30 mt-1 font-mono">Inference</div>
              </div>
              <div className="p-4 bg-black/40 border border-white/5 rounded-xl">
                <div className="text-xl font-bold text-accent">99.2%</div>
                <div className="text-[8px] uppercase text-white/30 mt-1 font-mono">Accuracy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
