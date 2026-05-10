"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { Cpu, Activity, Zap, Database, Terminal, ShieldAlert, Boxes } from "lucide-react";
import { ThreeDWrapper } from "@/components/ui/ThreeDWrapper";

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <div className="section-label mb-4">
    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
    {children}
  </div>
);

export function ArchitectureSection() {
  const containerRef = useRef(null);

  return (
    <section id="architecture" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <SectionLabel>// system_architecture // v1.0</SectionLabel>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Core Neural <span className="gradient-text-primary">Pipeline</span>
          </h2>
          <p className="text-white/45 max-w-2xl text-lg leading-relaxed">
            Hierarchical view of modular components. Every node is an active process within the PSM_CORE architecture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Terminal: Anomalies */}
          <div className="lg:col-span-3">
            <div className="glass-card rounded-2xl border border-white/5 p-6 h-[500px] flex flex-col bg-surface-dim/40 backdrop-blur-3xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <span className="font-mono text-[10px] text-white/30 uppercase tracking-widest flex items-center gap-2">
                  <Activity size={12} className="text-accent" /> LOG_STREAM://ANOMALIES
                </span>
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shadow-[0_0_8px_#ef4444]"></span>
              </div>
              
              <div className="flex-grow overflow-y-auto space-y-4 font-mono text-[10px]">
                {[
                  { type: "CRIT", msg: "Packet loss detected in node 04. Data parity mismatch.", color: "text-red-400", border: "border-red-500/50" },
                  { type: "INFO", msg: "Load balancer shifting traffic to Cluster_B.", color: "text-accent", border: "border-accent/50" },
                  { type: "SYNC", msg: "Neural weights broadcasted to 48 edge nodes.", color: "text-primary", border: "border-primary/50" },
                  { type: "WARN", msg: "Ingestion latency > 40ms. Auto-scaling initiated.", color: "text-red-400", border: "border-red-500/50" },
                  { type: "IDLE", msg: "Thread 0xAA waiting for input...", color: "text-white/20", border: "border-white/10" },
                ].map((log, i) => (
                  <div key={i} className={`border-l-2 ${log.border} pl-3 py-1`}>
                    <span className={log.color}>[{log.type}]</span> {log.msg}
                    <div className="opacity-20 mt-1">TIMESTAMP: 14:22:{10+i}.04</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-mono text-primary uppercase">74% PKT_FLOW</span>
                  <span className="text-[10px] font-mono text-white/20">LIVE</span>
                </div>
                <div className="h-1 bg-white/5 relative overflow-hidden rounded-full">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "74%" }}
                    className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_#00dbe9]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Central Blueprint */}
          <div className="lg:col-span-9">
            <ThreeDWrapper intensity={5}>
              <div className="glass-card rounded-2xl border border-white/5 p-8 min-h-[500px] relative overflow-hidden bg-surface-dim/20 backdrop-blur-3xl flex items-center justify-center">
                {/* SVG Flow Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" viewBox="0 0 800 500">
                  <path d="M 150 250 L 300 250" fill="none" stroke="rgba(0, 219, 233, 0.2)" strokeWidth="2" />
                  <motion.circle r="3" fill="#00dbe9" 
                    animate={{ cx: [150, 300], cy: [250, 250] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <path d="M 500 250 Q 550 150 650 150" fill="none" stroke="rgba(195, 244, 0, 0.2)" strokeWidth="2" />
                  <motion.circle r="3" fill="#c3f400"
                    animate={{ cx: [500, 650], cy: [250, 150] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  />

                  <path d="M 500 250 Q 550 350 650 350" fill="none" stroke="rgba(0, 219, 233, 0.2)" strokeWidth="2" />
                  <motion.circle r="3" fill="#00dbe9"
                    animate={{ cx: [500, 650], cy: [250, 350] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-between px-12 gap-12">
                  {/* Node: Data Ingestion */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center group cursor-crosshair text-center"
                  >
                    <div className="w-20 h-20 rounded-full border border-primary/40 flex items-center justify-center bg-primary/5 group-hover:shadow-[0_0_20px_rgba(0,219,233,0.4)] transition-all duration-500">
                      <Boxes size={32} className="text-primary" />
                    </div>
                    <div className="mt-4">
                      <p className="font-mono text-xs text-primary font-bold uppercase tracking-widest">Data Ingestion</p>
                      <p className="text-[9px] text-white/30 uppercase mt-1">Multi-source Streams</p>
                    </div>
                  </motion.div>

                  {/* Node: Ensemble Models (Central Hub) */}
                  <motion.div 
                    whileHover={{ rotate: 135 }}
                    className="flex flex-col items-center group cursor-crosshair text-center"
                  >
                    <div className="w-28 h-28 border-2 border-accent/40 bg-accent/5 rotate-45 flex items-center justify-center group-hover:border-accent group-hover:shadow-[0_0_30px_rgba(195,244,0,0.3)] transition-all duration-700">
                      <div className="-rotate-45 flex flex-col items-center">
                        <Cpu size={40} className="text-accent" />
                      </div>
                    </div>
                    <div className="mt-8">
                      <p className="font-mono text-xs text-accent font-bold uppercase tracking-widest">Ensemble Models</p>
                      <p className="text-[9px] text-white/30 uppercase mt-1">Stochastic Weight Averaging</p>
                    </div>
                  </motion.div>

                  {/* Inference Nodes (Right Stack) */}
                  <div className="flex flex-col gap-12">
                    <div className="flex items-center gap-4 group cursor-crosshair">
                      <div className="text-right">
                        <p className="font-mono text-xs text-white uppercase tracking-widest">Real-time Inference</p>
                        <span className="px-2 py-0.5 bg-primary/20 text-primary text-[8px] font-bold rounded-sm border border-primary/30">ACTIVE</span>
                      </div>
                      <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary transition-all rounded-xl">
                        <Zap size={20} className="text-white/40 group-hover:text-primary" />
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group cursor-crosshair opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                      <div className="text-right">
                        <p className="font-mono text-xs text-white uppercase tracking-widest">Batch Processing</p>
                        <span className="px-2 py-0.5 bg-white/5 text-white/30 text-[8px] font-bold rounded-sm border border-white/10">SLEEP</span>
                      </div>
                      <div className="w-14 h-14 bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-accent transition-all rounded-xl">
                        <Database size={20} className="text-white/40 group-hover:text-accent" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-6 left-6 font-mono text-[9px] text-white/20 uppercase tracking-[0.3em]">
                  origin_node: 0x24_alpha
                </div>
                <div className="absolute bottom-6 right-6 font-mono text-[9px] text-primary/40 flex items-center gap-2 tracking-[0.2em]">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span>
                  holographic_mode: enabled
                </div>
              </div>
            </ThreeDWrapper>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            { label: "Pipeline Velocity", value: "94.2", unit: "TFLOP/s", icon: Zap, color: "text-primary", progress: 94.2 },
            { label: "Model Accuracy", value: "99.98", unit: "%", icon: Activity, color: "text-accent", progress: 100 },
            { label: "Global Latency", value: "24", unit: "ms", icon: ShieldAlert, color: "text-red-400", progress: 30 }
          ].map((stat, i) => (
            <div key={i} className="glass-card rounded-2xl border border-white/5 p-6 bg-surface-dim/40">
              <div className="flex items-center gap-3 mb-4">
                <stat.icon size={16} className={stat.color} />
                <h3 className="font-mono text-[10px] text-white/40 uppercase tracking-widest">{stat.label}</h3>
              </div>
              <div className={`text-3xl font-display font-bold ${stat.color} mb-3`}>
                {stat.value} <span className="text-sm font-mono opacity-30 text-white">{stat.unit}</span>
              </div>
              <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.progress}%` }}
                  className={`h-full ${stat.color === 'text-primary' ? 'bg-primary' : stat.color === 'text-accent' ? 'bg-accent' : 'bg-red-400'}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
