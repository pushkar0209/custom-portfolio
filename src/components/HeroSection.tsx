"use client";

import { motion } from "framer-motion";
import { Grid3X3, Download, Terminal, Settings2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { useEffect, useState, useRef } from "react";
import dynamic from "next/dynamic";
import { ThreeDWrapper } from "@/components/ui/ThreeDWrapper";

const NeuralBackground = dynamic(
  () => import("@/components/three/NeuralBackground").then((m) => ({ default: m.NeuralBackground })),
  { ssr: false, loading: () => <div className="absolute inset-0 bg-[#0a0a0c]" /> }
);

const AiBrainScene = dynamic(
  () => import("@/components/three/AiBrainScene").then((m) => ({ default: m.AiBrainScene })),
  { ssr: false, loading: () => <div className="w-full h-full flex items-center justify-center text-white/10">Loading Intelligence...</div> }
);

function ScrambledText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((char, index) => {
          if (index < iteration) return text[index];
          return chars[Math.floor(Math.random() * chars.length)];
        }).join("")
      );
      
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span data-text={text} className="text-glitch">{displayText}</span>;
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[85vh] flex items-center justify-center mt-[74px] mb-16 mx-4 rounded-xl overflow-hidden glass-card p-8 md:p-16 border border-white/5"
    >
      {/* Background Neural Substrate */}
      <div className="absolute inset-0 z-0 opacity-40">
        <NeuralBackground className="opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#131315]/90 via-transparent to-[#131315]"></div>
        
        {/* Subtle noise and scanline effects */}
        <div className="absolute inset-0 noise-texture opacity-[0.03] pointer-events-none"></div>
      </div>

      {/* HUD Border Elements */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-primary/20 rounded-tl-xl m-4" />
        <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-primary/20 rounded-tr-xl m-4" />
        <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-primary/20 rounded-bl-xl m-4" />
        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-primary/20 rounded-br-xl m-4" />
      </div>

      <motion.div 
        style={{ 
          x: mousePos.x * 25, 
          y: mousePos.y * 25 
        }}
        className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-8 w-full max-w-7xl"
      >
        {/* Left Column: Profile Info */}
        <div className="md:col-span-8 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-px bg-primary/40" />
            <p className="font-mono text-[10px] text-accent tracking-[0.4em] uppercase">
              Neural_Kernel_Established // v2.0.4
            </p>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-display text-[64px] md:text-[110px] font-extrabold text-white mb-2 tracking-tighter leading-[0.9]"
          >
            <ScrambledText text={portfolioData.personal.name.split(' ')[0].toUpperCase()} />
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <h2 className="font-display text-2xl md:text-5xl text-primary font-bold drop-shadow-[0_0_15px_rgba(0,219,233,0.3)]">
              AI_ENGINEER
            </h2>
            <div className="h-8 w-px bg-white/10 hidden md:block" />
            <span className="font-mono text-xs text-white/40 tracking-[0.2em] hidden md:block">DATA_SCIENTIST_NODE</span>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="font-body text-lg text-white/50 max-w-2xl mb-12 border-l-2 border-primary/30 pl-8 leading-relaxed italic"
          >
            &quot;{portfolioData.personal.bio}&quot;
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-6"
          >
            <ThreeDWrapper intensity={25}>
              <a 
                href="#projects"
                className="group relative inline-flex items-center gap-4 px-10 py-5 bg-primary text-primary-foreground font-bold text-[11px] uppercase tracking-[0.3em] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Grid3X3 size={18} className="relative z-10" />
                <span className="relative z-10">Initialize_Matrix</span>
              </a>
            </ThreeDWrapper>
            
            <ThreeDWrapper intensity={15}>
              <a 
                href="#"
                className="inline-flex items-center gap-4 px-10 py-5 bg-transparent border border-white/10 text-white/60 font-bold text-[11px] uppercase tracking-[0.3em] hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Download size={18} />
                Access_Resume
              </a>
            </ThreeDWrapper>
          </motion.div>
        </div>

        {/* Right Column: 3D Visualization & Metrics */}
        <div className="md:col-span-4 flex flex-col gap-6 mt-8 md:mt-0 justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="w-full h-[320px] md:h-[450px] relative glass-card rounded-[2.5rem] border border-white/10 overflow-hidden group mb-4 shadow-[0_0_50px_rgba(0,219,233,0.1)]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 pointer-events-none z-10" />
            <AiBrainScene />
            
            {/* UI Decals */}
            <div className="absolute top-8 left-8 z-20 flex flex-col gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#00dbe9]" />
              <div className="w-12 h-1 bg-white/20 rounded-full" />
            </div>
            <div className="absolute bottom-8 right-8 z-20 text-right font-mono">
              <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-1">Neural_Flow</p>
              <div className="flex items-center gap-2 justify-end">
                <span className="text-xs text-primary font-bold">OPTIMIZED</span>
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
            {[
              { label: "MODULE_A_01", value: "12+", sub: "Deployments", color: "text-primary" },
              { label: "MODULE_B_02", value: "10+", sub: "Neural Nets", color: "text-accent" },
            ].map((metric, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className="glass-card p-6 flex flex-col relative overflow-hidden group border border-white/5 hover:border-primary/20 transition-all duration-500"
              >
                <div className={`absolute top-0 right-0 w-16 h-16 opacity-10 rounded-bl-full blur-2xl transition-all ${i === 0 ? 'bg-primary' : 'bg-accent'} group-hover:opacity-30 group-hover:scale-150`}></div>
                <span className="font-mono text-[9px] text-white/20 mb-2 tracking-widest">{metric.label}</span>
                <div className={`font-display text-4xl font-black ${metric.color} tracking-tight`}>
                  {metric.value}
                </div>
                <div className="font-mono text-[10px] text-white/40 mt-1 uppercase tracking-[0.2em]">{metric.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Decorative HUD Scan Line */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05] overflow-hidden z-20">
        <div className="w-full h-[1px] bg-primary shadow-[0_0_15px_#00dbe9] animate-[scan-line_6s_linear_infinite] absolute top-0"></div>
      </div>
    </section>
  );
}
