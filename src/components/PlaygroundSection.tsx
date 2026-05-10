"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Sliders, Activity, Zap, Brain, Terminal, Binary, Network } from "lucide-react";
import { ThreeDWrapper } from "@/components/ui/ThreeDWrapper";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="section-label mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

export function PlaygroundSection() {
  const [params, setParams] = useState({
    learningRate: 0.0001,
    density: 82,
    dropout: 0.25,
    entropy: 0.78
  });

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="playground" className="relative py-28 bg-[#070710]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="mb-14 border-l-4 border-accent pl-6"
        >
          <SectionLabel>// neural_playground // experiments</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Latent Vector <span className="gradient-text-primary">Exploration</span>
          </h2>
          <p className="text-white/45 max-w-2xl text-lg leading-relaxed">
            Directly manipulate neural weights and attention mechanisms. Kernel session active in real-time.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Latent Space Explorer */}
          <div className="lg:col-span-8">
            <ThreeDWrapper intensity={10}>
              <div className="glass-card rounded-2xl border border-white/5 p-8 h-[600px] flex flex-col relative overflow-hidden group bg-surface-dim/40 backdrop-blur-3xl">
                <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                  <h3 className="font-display text-xl font-bold text-primary flex items-center gap-3">
                    <Network size={20} className="text-primary" /> LATENT_SPACE_EXPLORER
                  </h3>
                  <div className="flex gap-2">
                    <span className="bg-accent text-black font-mono text-[9px] font-bold px-2 py-1 rounded-sm uppercase">X: ATTENTION</span>
                    <span className="bg-primary text-black font-mono text-[9px] font-bold px-2 py-1 rounded-sm uppercase">Y: ENTROPY</span>
                  </div>
                </div>

                {/* Simulated Latent Space */}
                <div className="flex-grow relative border border-white/5 bg-black/40 rounded-xl overflow-hidden group/latent">
                  <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(#00dbe9 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                  
                  {/* Decorative Neural Elements */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] relative">
                      <img 
                        src="https://images.unsplash.com/photo-1620712943543-bcc4628c7215?q=80&w=2071&auto=format&fit=crop" 
                        alt="Neural Architecture"
                        className="w-full h-full object-cover opacity-20 mix-blend-screen rounded-2xl"
                      />
                      {/* Floating Data Points */}
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5],
                          x: [0, 10, 0],
                          y: [0, -10, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute top-1/2 left-1/3 w-4 h-4 bg-primary shadow-[0_0_20px_#00dbe9] border border-white z-10" 
                      />
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.3, 0.6, 0.3],
                          x: [0, -20, 0],
                          y: [0, 20, 0]
                        }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute top-1/4 right-1/4 w-2 h-2 bg-accent shadow-[0_0_15px_#c3f400] border border-white z-10" 
                      />
                      <motion.div 
                        animate={{ 
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.7, 0.4],
                          x: [0, 15, 0],
                          y: [0, 15, 0]
                        }}
                        transition={{ duration: 5, repeat: Infinity }}
                        className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-red-400 shadow-[0_0_20px_#f87171] border border-white z-10" 
                      />
                    </div>
                  </div>

                  {/* Latent Vector Labels */}
                  <div className="absolute bottom-4 left-4 right-4 flex gap-4 overflow-x-auto pb-2">
                    {[
                      { label: "VECTOR_ID", value: "0x88A2_F0", color: "border-primary", text: "text-primary" },
                      { label: "MAGNITUDE", value: "14.922 KΩ", color: "border-accent", text: "text-accent" },
                      { label: "LOSS_FACTOR", value: "0.000412", color: "border-red-400", text: "text-red-400" },
                    ].map((v, i) => (
                      <div key={i} className={`flex-shrink-0 bg-black/60 px-4 py-2 border-l-2 ${v.color} backdrop-blur-md`}>
                        <div className="text-[8px] font-mono text-white/30 uppercase tracking-[0.2em]">{v.label}</div>
                        <div className={`font-mono text-xs ${v.text} font-bold mt-1`}>{v.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ThreeDWrapper>
          </div>

          {/* Controls Sidecar */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* Hyperparams */}
            <div className="glass-card rounded-2xl border border-white/5 p-8 bg-surface-dim/40 backdrop-blur-3xl flex-1">
              <h3 className="font-display text-lg font-bold text-primary mb-8 flex items-center gap-3">
                <Sliders size={18} /> HYPER_PARAMS
              </h3>
              
              <div className="space-y-10">
                {[
                  { id: "learningRate", label: "LEARNING_RATE", val: params.learningRate, color: "accent" },
                  { id: "density", label: "NEURAL_DENSITY", val: params.density > 50 ? "HIGH" : "LOW", color: "primary" },
                  { id: "dropout", label: "DROP_OUT", val: params.dropout, color: "accent" },
                  { id: "entropy", label: "ENTROPY_THRESHOLD", val: params.entropy, color: "primary" },
                ].map((p, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between font-mono text-[10px] tracking-widest text-white/40">
                      <span>{p.label}</span>
                      <span className={p.color === 'primary' ? 'text-primary' : 'text-accent'}>{p.val}</span>
                    </div>
                    <div className="relative h-1 bg-white/5 group/slider cursor-pointer">
                      <div 
                        className={`absolute inset-y-0 left-0 ${p.color === 'primary' ? 'bg-primary' : 'bg-accent'} shadow-[0_0_10px_currentColor]`}
                        style={{ width: i === 0 ? "45%" : i === 1 ? "82%" : i === 2 ? "25%" : "78%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-accent text-black font-mono text-[10px] font-bold uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(195,244,0,0.4)]"
                >
                  RECALIBRATE_LAYER
                </motion.button>
              </div>
            </div>

            {/* Data Stream */}
            <div className="glass-card rounded-2xl border border-white/5 p-6 bg-surface-dim/20 backdrop-blur-3xl h-[280px] overflow-hidden flex flex-col">
              <h3 className="font-mono text-[10px] font-bold text-white/30 uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <Binary size={12} /> DATA_STREAM
              </h3>
              <div className="flex-grow overflow-y-auto space-y-3 font-mono text-[10px] text-white/40 scrollbar-hide">
                {[
                  { time: "12:44:01", type: "INFO", msg: "Neuron_441 fired: 0.982", color: "text-accent" },
                  { time: "12:44:02", type: "CORE", msg: "Synapse weight adjusted: +0.02", color: "text-primary" },
                  { time: "12:44:02", type: "WARN", msg: "Latent drift detected in cell_8", color: "text-white/40" },
                  { time: "12:44:03", type: "INFO", msg: "Batch process 0xF2 completed", color: "text-accent" },
                  { time: "12:44:04", type: "CORE", msg: "Re-indexing attention heads...", color: "text-primary" },
                  { time: "12:44:05", type: "ERR", msg: "Tensor overflow in layer_7", color: "text-red-400" },
                ].map((log, i) => (
                  <div key={i} className="flex gap-3 items-start border-l border-white/5 pl-3">
                    <span className="opacity-30">{log.time}</span>
                    <span className={log.color}>[{log.type}] {log.msg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
